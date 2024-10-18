# Seclude
# !!!! THIS IS IN VERY EARLY DEVELOPMENT STAGE AND FAR FROM BEING PRODUCTION READY !!!!
Seclude is a self-hosted, end-to-end encrypted notes application designed to keep your data secure and private. Built with React for the frontend, Go for the backend, and Kotlin for the Android app, Seclude offers a seamless, user-friendly experience across multiple platforms. Easily deployable via Docker, Seclude ensures your notes are always safe and accessible only to you.

## Features

- End-to-end encryption
- Self-hosted solution
- Cross-platform support (Web, Desktop and Android is in the works)
- Easy deployment with Docker
- User-friendly interface

## Prerequisites
- Docker and Docker Compose
- Git (for cloning the repository)

### For development

- Node.js and npm (for the React frontend)
- Go (for the Backend and the Desktop app)
- Android Studio (for the Android app)

## Quick Start

1. Clone the repository
```
   git clone https://github.com/xlukas1337/seclude.git
   cd seclude
```

2. Configure the environment variables
```
cp .env.example .env
# Edit .env file with your settings
```

3. Deploy with Docker
```
docker-compose up -d
```

# Support
If you encounter any issues or have questions, please:

1. Check our Troubleshooting Guide
2. Search existing Issues
3. Open a new issue if your problem persists

# License
Seclude is open-source software licensed under the MIT license.


