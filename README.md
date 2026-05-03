# URL Shortener with CI/CD Pipeline on AWS

This project is a simple URL shortener application built with Node.js, containerized using Docker, and deployed on AWS EC2 with a CI/CD pipeline powered by Jenkins.

> ⚠️ Note: The original implementation of this project was removed. This repository now serves as a demonstration of building, containerizing, and deploying applications using Docker, Jenkins CI/CD, and AWS EC2.

## 🚀 Demo

🎬 Watch the full CI/CD pipeline and AWS deployment:

👉 **[Watch the demo](https://github.com/Wael-Elmenshawy/shortener/issues/1)**

## Features

* Shorten long URLs into easy-to-share links
* Lightweight Node.js application
* Dockerized for easy deployment
* Automated CI/CD pipeline using Jenkins
* Deployed on AWS EC2

## Tech Stack

* Node.js
* Docker
* Jenkins
* AWS (EC2)
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

### 3. Run the app locally

```bash
node app.js
```

### 4. Run with Docker

```bash
docker build -t url-shortener .
docker run -p 3000:3000 url-shortener
```

## Deployment (AWS EC2)

The application is deployed on an AWS EC2 instance and accessible via a public IP address.

Example:

```
http://<your-ec2-public-ip>
```

## CI/CD Pipeline

This project uses Jenkins to:

* Pull code from GitHub
* Build the Docker image
* Run the container
* Deploy the application automatically on AWS

## Purpose

This project demonstrates how to build, containerize, and deploy a Node.js application using Docker, automate workflows with Jenkins, and host it on AWS.
