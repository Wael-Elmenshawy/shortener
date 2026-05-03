# URL Shortener with CI/CD Pipeline

This project is a simple URL shortener application built with Node.js, integrated with Docker and Jenkins for automated CI/CD.

## Features

* Shorten long URLs into easy-to-share links
* Lightweight Node.js application
* Dockerized for easy deployment
* Integrated with Jenkins CI/CD pipeline

## Tech Stack

* Node.js
* Docker
* Jenkins
* GitHub

## Project Structure

* `app.js` → Main application logic
* `package.json` → Project dependencies
* `Dockerfile` → Container configuration
* `Jenkinsfile` → CI/CD pipeline

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/Wael-Elmenshawy/shortener.git
cd shortener
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
node app.js
```

### 4. Run with Docker

```bash
docker build -t url-shortener .
docker run -p 3000:3000 url-shortener
```

## CI/CD Pipeline

This project uses Jenkins to automate the build and deployment process using a Jenkinsfile.

## Purpose

This project demonstrates how to build and deploy a Node.js application using Docker and automate the workflow with Jenkins.
