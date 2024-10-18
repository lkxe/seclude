package session

import (
	"aidanwoods.dev/go-paseto"
	"os"
	"time"
)

func GenerateSessionToken(username string) string {
	token := paseto.NewToken()
	token.SetIssuedAt(time.Now())
	token.SetNotBefore(time.Now())
	token.SetExpiration(time.Now().Add(2 * time.Hour))

	token.SetString("username", username)

	key, _ := paseto.V4SymmetricKeyFromHex(os.Getenv("SECRET"))
	encrypted := token.V4Encrypt(key, nil)

	return encrypted
}

func ValidateToken(tokenString string) (*paseto.Token, error) {
	parser := paseto.NewParser()

	key, _ := paseto.V4SymmetricKeyFromHex(os.Getenv("SECRET"))

	// Use v4.local for decryption
	token, err := parser.ParseV4Local(key, tokenString, nil)
	if err != nil {
		return nil, err
	}

	return token, nil
}
