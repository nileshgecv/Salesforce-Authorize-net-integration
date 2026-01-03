# Salesforce-Authorize-Net-Integration

A Salesforce integration for Authorize.Net enabling **secure payment processing, tokenization, and transaction handling** using Apex and APIs.

---

## Overview

This integration enables secure communication between Salesforce and Authorize.Net through a **POST-based API integration**.  

Key highlights:

- All sensitive credentials are stored securely using the **API Key Manager** object.
- Integration logic is implemented entirely in **Apex** to prevent client-side exposure.
- Supports **internal users** and **Experience Cloud (Community) users**.
- Follows **Salesforce security best practices**, ensuring scalability, reliability, and maintainability.

---

## Technology Stack

### Salesforce Platform
- **Apex** – Handles business logic and POST callouts to Authorize.Net  
- **API Key Manager Object** – Centralized storage of API credentials  
- **Salesforce Sharing & Security Model** – Ensures controlled access  

### Integration & Communication
- **REST API (POST method)** – Outbound requests to Authorize.Net  
- **HTTP Callouts** – Managed via Apex  

### Frontend (Optional)
- **Lightning Web Components (LWC)** – Initiates integration requests without handling credentials  

### Security & Best Practices
- **Server-Side Credential Management** – Prevents client-side exposure  
- **Experience Cloud Compatible** – Community users supported securely  
- **Governor Limits Compliance** – Optimized for Salesforce platform constraints  

---

## Setup Instructions

### 1. Create Authorize.Net Sandbox Account
- Sign up for a developer account: <a href="https://developer.authorize.net/hello_world/sandbox.html" target="_blank">Authorize.Net Sandbox Setup</a>  
- Click **HELLO WORLD → Get Started → Create Sandbox Account**  
- Enter your details and click **Submit**  

### 2. Obtain API Login ID and Transaction Key
- Log in to your Sandbox Account: <a href="https://logintest.authorize.net/?cobrand=anet" target="_blank">Authorize.Net Sandbox Login</a>  
- Click **Account** from the main toolbar  
- Navigate to **API Credentials & Keys**  
- Generate your **API Login ID** and **Transaction Key**  

### 3. Store Credentials Securely
Use the **API Key Manager object** to store credentials and retrieve them only in **Apex** during POST integrations. This ensures:  

- Centralized management  
- Secure storage on Salesforce  
- Credentials never exposed to LWC/Aura  
- Apex retrieves credentials for outbound callouts  


<p align="center">
 <img width="1354" height="403" alt="Image" src="https://github.com/user-attachments/assets/27583578-c279-433c-b38d-f644bf96bf03" />
</p>

## Project Video

Watch the integration in action:
  
https://github.com/user-attachments/assets/f0ac4d36-9849-4988-9972-cb8da87b921e

## References

<a href = "https://help.salesforce.com/s/articleView?id=sales.blng_authorizenet_setup.htm&type=5" target="_blank"> Configure the authorize.net Payment Gateway </a>

## Contact

- <a href="https://www.linkedin.com/in/kumarnilesh442" target="_blank">LinkedIn Profile</a>
- <a href="mailto:nileshbnk756@gmail.com" target="_blank">Email</a>
- <a href="https://www.salesforce.com/trailblazer/kumarnilesh" target="_blank">Trailhead Profile</a>

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/nileshgecv/Salesforce-Authorize-net-integration.git
