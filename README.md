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
└── style.css
