package routes

import (
	"backend/session"
	"encoding/json"
	"github.com/julien040/go-ternary"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func HandleLogin(w http.ResponseWriter, r *http.Request) {
	log.Printf("Request received: %s, URL: %s, Headers: %v", r.Method, r.URL, r.Header)

	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}

	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var loginData struct {
		Username string `json:"username"`
	}

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Error reading request body", http.StatusBadRequest)
		return
	}
	log.Printf("Request body: %s", string(body))

	err = json.Unmarshal(body, &loginData)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	token := session.GenerateSessionToken(loginData.Username)
	if err != nil {
		http.Error(w, "Error generating session token", http.StatusInternalServerError)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:     "session",
		Value:    token,
		Path:     "/",
		MaxAge:   3600,
		HttpOnly: true,
		Secure:   ternary.If(os.Getenv("ENVIRONMENT") == "development", false, true),
		SameSite: http.SameSiteLaxMode,
	})

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Login successful"})
	log.Println("Login successful, cookie set")
}
