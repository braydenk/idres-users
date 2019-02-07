# README

## Setup

To initiate the virtual environment:

```bash
# Create the environment
python3 -m venv venv

# Start the environment
source venv/bin/activate
```

## Users API

This is for registration and login of a user.

| Endpoint   | Method | Description    |
|------------|--------|----------------|
| /users     | GET    | Get all users  |
| /users/:id | GET    | Get user by id |
| /users     | POST   | Add a user     |
