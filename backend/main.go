package main

import (
	"backend/routes"
	"context"
	"errors"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/rs/cors"

	_ "github.com/joho/godotenv/autoload"
)

func main() {
	// Serve static files from the frontend build directory
	fs := http.FileServer(http.Dir("./frontend/dist"))
	http.Handle("/", http.StripPrefix("/", fs))

	// API routes
	http.HandleFunc("POST /login", HandleLogin)
	http.HandleFunc("POST /register", HandleRegistration)
	http.HandleFunc("GET /notes", HandleNotes)
	http.HandleFunc("GET /hello", handleHello)
	http.Handle("/swagger/", http.StripPrefix("/swagger/", http.FileServer(http.Dir("./swagger-ui"))))

	// CORS configuration
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173"},
		AllowCredentials: true,
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
	})

	// Server configuration
	port := getPort()
	srv := &http.Server{
		Addr:         ":" + port,
		Handler:      c.Handler(http.DefaultServeMux),
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	// Start server
	go func() {
		log.Printf("Server starting on port %s\n", port)
		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("ListenAndServe(): %v", err)
		}
	}()

	// Graceful Shutdown
	waitForShutdown(srv)
}

func getPort() string {
	if port := os.Getenv("PORT"); port != "" {
		return port
	}
	return "8080"
}

func waitForShutdown(srv *http.Server) {
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)
	<-quit
	log.Println("Server is shutting down...")

	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	if err := srv.Shutdown(ctx); err != nil {
		log.Fatalf("Server forced to shutdown: %v", err)
	}

	log.Println("Server exiting")
}

// swagger:route POST /login login
// Login to the application.
// responses:
//
//	200: loginResponse
//	400: errorResponse
func HandleLogin(w http.ResponseWriter, r *http.Request) {
	routes.HandleLogin(w, r)
}

// swagger:route POST /register register
// Register a new user.
// responses:
//
//	200: registerResponse
//	400: errorResponse
func HandleRegistration(w http.ResponseWriter, r *http.Request) {
	routes.HandleRegistration(w, r)
}

// swagger:route GET /notes notes listNotes
// List all notes for the authenticated user.
// responses:
//
//	200: notesResponse
//	401: errorResponse
func HandleNotes(w http.ResponseWriter, r *http.Request) {
	routes.HandleNotes(w, r)
}

// swagger:route GET /hello hello
// Get a hello message.
// responses:
//
//	200: helloResponse
func handleHello(w http.ResponseWriter, r *http.Request) {
	routes.HandleHello(w, r)
}

// swagger:response loginResponse
type loginResponse struct {
	// in: body
	Body struct {
		Token string `json:"token"`
	}
}

// swagger:response registerResponse
type registerResponse struct {
	// in: body
	Body struct {
		Message string `json:"message"`
	}
}

// swagger:response notesResponse
type notesResponse struct {
	// in: body
	Body []struct {
		ID   string `json:"id"`
		Text string `json:"text"`
	}
}

// swagger:response helloResponse
type helloResponse struct {
	// in: body
	Body struct {
		Message string `json:"message"`
	}
}

// swagger:response errorResponse
type errorResponse struct {
	// in: body
	Body struct {
		Message string `json:"message"`
	}
}
