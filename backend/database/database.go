package database

import (
	"backend/database/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
)



func Init() *gorm.DB {
	dbURL := "postgres://pg:pass@localhost:5432/crud"

	db, err := gorm.Open(postgres.Open(dbURL), &gorm.Config{})

	if err != nil {
		log.Fatalln(err)
	}

	err = db.AutoMigrate(&models.User{})
	if err != nil {
		return nil
	}

	return db
}