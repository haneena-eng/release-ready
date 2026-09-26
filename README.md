# ReleaseReady

ReleaseReady is a developer-focused web application designed to help organize software release preparation into one simple dashboard.

It brings together a release **changelog**, **deployment risks**, and a **pre-deployment checklist** so developers can review important release information before shipping.

## 🚀 Live Demo

**GitHub Pages:**  
https://haneena-eng.github.io/release-ready/

## 💡 Problem

Preparing a software release can require developers to review many changes, identify potential deployment risks, and remember multiple pre-deployment steps.

Important information can be scattered across commits, pull requests, project configuration, and documentation, making release preparation harder to review quickly.

## ✨ Solution

ReleaseReady organizes release-readiness information into a focused dashboard with three main sections:

### 📝 Changelog

Changes are organized into:

- **Features**
- **Fixes**
- **Breaking Changes**

Each change can include its reference and date to make the release easier to scan.

### ⚠️ Risks Detected

Potential release concerns are displayed with:

- Risk categories
- Severity levels
- Relevant information about the potential issue

This helps developers identify areas that may need attention before deployment.

### ✅ Deployment Checklist

The checklist provides actionable pre-deployment steps, including:

- Required or optional status
- The source or reason for each task
- Interactive checkboxes for tracking completion

## 🛠️ Technology

ReleaseReady was intentionally built as a lightweight static web application using:

- HTML
- CSS
- JavaScript
- GitHub Pages

The project does **not** require:

- React
- Node.js
- npm
- Build tools
- A backend server

## 📁 Project Structure

```text
release-ready/
├── evidence/
│   └── bob-task-session/
├── .bobignore
├── .env.example
├── .gitignore
├── README.md
├── SECURITY.MD
├── index.html
├── script.js
├── sources_used
└── style.css:
```
The evidence/bob-task-session/ directory contains evidence of IBM Bob's use during development.

## ▶️ Running the Project

ReleaseReady is a static web application and does not require an installation or build process.

You can run the application by opening:

index.html

directly in a web browser.

The project is also deployed using GitHub Pages.

## 📊 Current Prototype

The current version uses prepared sample release-analysis data stored locally in the front-end.

It does not currently make live GitHub API calls and does not use a backend server.

This allows the demonstration to run entirely in the browser without external dependencies.

The repository URL and optional starting-point inputs are part of the prototype's interface, while the demonstration report is populated using the prepared local data.

## 🤖 IBM Bob Usage

IBM Bob was used throughout the development of ReleaseReady.

Bob assisted with creating and refining the three core application files:

index.html
style.css
script.js

Bob was used to develop the dashboard structure, styling, JavaScript functionality, repository input interaction, changelog presentation, risk display, deployment checklist, and demonstration data.

The Bob task session included completed tasks for creating the HTML layout, CSS styling, and JavaScript functionality.

Evidence of Bob's development work is included in:

evidence/bob-task-session/
## 🔮 Future Development

Future versions of ReleaseReady could extend the prototype with:

Live GitHub repository analysis
Automatic commit and pull request analysis
Automated changelog generation
More advanced deployment-risk detection
Integration with repository and deployment services
Automated release-readiness reports
## 🔒 Security

This project uses the IBM Hackathon GitHub Project Template and keeps its security files:

.gitignore
.bobignore
.env.example
SECURITY.md

These files are intended to help prevent accidental credential commits and protect sensitive information during development.

Security Guidelines

Before committing changes:

Review changes for sensitive information.
Do not hardcode API keys or passwords.
Make sure .env is not included in staged changes.
Do not commit credentials or other sensitive information.
Use environment variables for credentials when credentials are required.

The current ReleaseReady prototype does not require API credentials because it does not make live external API calls.

For the full project security guidance, see SECURITY.md.

## 📋 IBM Hackathon Template

This repository was created using the IBM Hackathon GitHub Project Template.

The template provides pre-configured security files and guidance for safe development during the hackathon.

The project's application code has been added alongside the template files without removing the security configuration.

## 👤 Project

ReleaseReady

A hackathon project developed with assistance from IBM Bob.


A hackathon project developed with assistance from IBM Bob.
