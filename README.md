# Salesforce-Authorize-net-integration
A Salesforce integration for Authorize.Net enabling secure payment processing, tokenization, and transaction handling using Apex and APIs.
## Here’s how you can easily connect the Authorize.net payment gateway to Salesforce:
- Create an authorize.net developer account <a href = "https://developer.authorize.net/hello_world/sandbox.html"> Click here</a>.

- After entering the above link click on ‘HELLO WORLD’ and choose ‘Get Started’ and click on ‘Create Sandbox Account’.

- Enter your details and click Submit.

## To obtain the API Login ID and Transaction Key:

- Log in to the Sandbox Account which you have just created <a href = "https://logintest.authorize.net/?cobrand=anet"> Click here</a>.

- Click Account from the main toolbar.

- Find API Credentials & Keys.

- Click API Credentials & Keys.

## Storing Credentials in API Key Manager for POST Integrations
For secure and maintainable integrations, API credentials should be stored in the API Key Manager object and accessed exclusively from Apex classes during POST integrations.

This approach ensures that sensitive information such as API keys, tokens, and secrets is:

- Centrally managed

- Securely stored on the Salesforce platform

- Never exposed to the client-side (LWC or Aura)

- During a POST integration, the Apex class retrieves the required credentials from the API Key Manager and uses them to authenticate outbound callouts to external systems.
<p align="center">
  <img alt="png" src="https://github.com/nileshgecv/AithNL01/blob/7ac22a063087b0fb423e20cc02d362a63bdb18b0/Screenshot%202026-01-03%20091033.png" />
</p>

## 👉 Project Video
https://github.com/user-attachments/assets/95fd32b5-7613-47d1-af6c-fe7692681a52
https://github.com/user-attachments/assets/f0ac4d36-9849-4988-9972-cb8da87b921e

## Overview

This integration enables secure communication between Salesforce and an external system through a POST-based API integration. The solution is designed to follow Salesforce security best practices by ensuring that all sensitive credentials are stored and managed centrally using the API Key Manager object.

The integration logic is implemented entirely on the server side using Apex, preventing exposure of credentials to the client layer. The solution supports both internal users and Experience Cloud (Community) users, while maintaining strict control over data access and authentication.

By leveraging a structured integration flow, the system ensures reliability, scalability, and ease of maintenance for outbound API communications.

## Technology Stack
### Salesforce Platform

- Apex – Handles business logic and POST callouts to external systems

- API Key Manager Object – Secure storage and management of API credentials

- Salesforce Sharing & Security Model – Ensures controlled access for internal and external users

### Integration & Communication

- REST API (POST Method) – Used for outbound communication with the external service

- HTTP Callouts – Executed from Apex to transmit requests and receive responses

### Frontend (Optional)

- Lightning Web Components (LWC) – Initiates integration requests without handling credentials

### Security & Best Practices

- Server-Side Credential Management – Prevents client-side exposure

- Experience Cloud Compatible – Supports community users securely

- Salesforce Governor Limits Compliance – Optimized for platform constraints

## Summary

This integration leverages Salesforce-native technologies to deliver a secure, scalable, and maintainable POST integration, ensuring sensitive data is protected while providing seamless communication with external systems.

Thank you for exploring this project. For feedback or discussions, feel free to connect with me through LinkedIn or email.

## References

<a href = "https://help.salesforce.com/s/articleView?id=sales.blng_authorizenet_setup.htm&type=5"> Configure the authorize.net Payment Gateway </a>

## Contact

- **LinkedIn:** [View Profile](https://www.linkedin.com/in/kumarnilesh442)
- **Email:** [nileshbnk756@gmail.com](mailto:nileshbnk756@gmail.com)
- **Trailhead:** [Trailhead Profile](https://www.salesforce.com/trailblazer/kumarnilesh)
  
## Getting Started

To implement the integration:

1. Clone the Repository:

```bash
git clone https://github.com/nileshgecv/Salesforce-Authorize-net-integration.git




