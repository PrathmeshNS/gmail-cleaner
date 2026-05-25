# Gmail Workspace Manager

A modern inbox management platform for organizing, cleaning, and managing Gmail accounts efficiently.

Built using Python and Gmail APIs, this project helps users:

* Bulk unsubscribe from newsletters
* Delete emails by sender
* Mark emails as read
* Organize inboxes faster
* Manage Gmail at scale

---

# Features

## Inbox Cleanup

* Scan Gmail inboxes
* Detect newsletters & promotions
* Bulk unsubscribe from senders

## Bulk Email Management

* Delete emails by sender
* Archive emails
* Mark emails as read

## Smart Filtering

* Filter by:

  * Date
  * Size
  * Category
  * Labels
  * Sender

## Modern UI

* Responsive dashboard
* Dark mode ready
* Modern SaaS-inspired interface
* Optimized user experience

## Gmail API Integration

* Secure OAuth login
* Read-only or modify permissions
* Safe authentication flow

---

# Tech Stack

## Backend

* Python
* Flask

## Frontend

* HTML
* CSS
* JavaScript

## APIs & Services

* Gmail API
* Google OAuth 2.0

## Deployment

* Docker
* Docker Compose

---

# Project Structure

```bash
gmail-cleaner/
│
├── static/
│   ├── css/
│   ├── js/
│
├── templates/
│   └── index.html
│
├── app.py
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
├── credentials.json
└── README.md
```

---

# Prerequisites

Before starting, make sure you have:

* Python 3.10+
* Docker (optional)
* Google Account
* Gmail enabled
* Google Cloud Console access

---

# 1. Clone Repository

```bash
git clone https://github.com/PrathmeshNS/gmail-cleaner.git

cd gmail-cleaner
```

---

# 2. Create Google OAuth Credentials

This project uses Gmail API with Google OAuth authentication.

---

# Step 1 — Open Google Cloud Console

Go to:

```txt
https://console.cloud.google.com/
```

---

# Step 2 — Create New Project

* Click project selector
* Click:

```txt
NEW PROJECT
```

Example:

```txt
Project Name: Gmail Workspace Manager
```

Click:

```txt
CREATE
```

---

# Step 3 — Enable Gmail API

Go to:

```txt
APIs & Services → Library
```

Search:

```txt
Gmail API
```

Click:

```txt
ENABLE
```

---

# Step 4 — Open Google Auth Platform

Go to:

```txt
Google Auth Platform
```

Click:

```txt
Get Started
```

---

# Step 5 — Configure OAuth App

Fill all sections carefully.

---

## App Information

### App Name

Example:

```txt
Gmail Workspace Manager
```

### User Support Email

Select your Gmail account.

---

## Audience

Choose:

```txt
External
```

---

## Contact Information

Add:

* your Gmail address

Click:

```txt
CREATE
```

---

# Step 6 — Add Test Users

From left sidebar:

```txt
Audience
```

Scroll to:

```txt
Test Users
```

Click:

```txt
ADD USERS
```

Add:

* your Gmail email address

Click:

```txt
SAVE
```

Without this step, OAuth login may fail during development.

---

# Step 7 — Create OAuth Client

Go to:

```txt
Clients
```

Click:

```txt
CREATE CLIENT
```

---

# Step 8 — Configure OAuth Client

## Application Type

Choose:

```txt
Web Application
```

---

## Client Name

Example:

```txt
Gmail Workspace Local Client
```

---

# Step 9 — Add Authorized JavaScript Origins

Add:

```txt
http://localhost:8766
```

If using Docker:

```txt
http://localhost:8766
```

---

# Step 10 — Add Redirect URIs

Add:

```txt
http://localhost:8766/
```

Docker:

```txt
http://localhost:8766/
```

---

# Step 11 — Create OAuth Client

Click:

```txt
CREATE
```

---

# Step 12 — Download OAuth Credentials

Download the JSON file.

Rename it:

```txt
credentials.json
```

Place it inside project root:

```bash
gmail-cleaner/
├── credentials.json
├── app.py
├── requirements.txt
```

---

# Step 13 — Verify Gmail API Permissions

Go to:

```txt
Data Access
```

Ensure scopes include:

```txt
https://www.googleapis.com/auth/gmail.modify
https://www.googleapis.com/auth/userinfo.email
```

---

# Step 14 — OAuth Testing Mode

During development:

* app remains in Testing mode
* only test users can login

This is expected behavior.

---

# 3. Local Development Setup

## Create Virtual Environment

### Linux / macOS

```bash
python3 -m venv venv

source venv/bin/activate
```

### Windows

```bash
python -m venv venv

venv\Scripts\activate
```

---

# Install Dependencies

```bash
pip install -r requirements.txt
```

---

# 4. Run Application

```bash
python app.py
```

Server runs on:

```txt
http://localhost:8766
```

---

# 5. Docker Setup

---

# Build Docker Image

```bash
docker build -t gmail-workspace-manager .
```

---

# Run Docker Container

```bash
docker run -p 8766:8766 gmail-workspace-manager
```

---

# 6. Docker Compose Setup

---

# Start Application

```bash
docker-compose up --build
```

---

# Run in Detached Mode

```bash
docker-compose up -d
```

---

# Stop Containers

```bash
docker-compose down
```

---

# Gmail API Scopes

This application may request access to:

| Scope          | Purpose                  |
| -------------- | ------------------------ |
| gmail.modify   | Modify and manage emails |
| gmail.readonly | Read inbox data          |
| userinfo.email | Authenticate user        |
