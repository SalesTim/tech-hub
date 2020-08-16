---
title: "Team Creation Approval Workflow"
description: "Use SalesTim to create an approval workflow for your teams creation requests."
---

# Team creation approval workflow <Badge text="beta" type="warning"/>
<Classification label="public" />

This article describes how to configure SalesTim to create an approval workflow for your teams creation requests.

## Abstract

To implement its approval workflow, SalesTim relies on [Outlook Actionable Messages](https://docs.microsoft.com/en-us/outlook/actionable-messages/) to help approvers manage their approval requests right from their inbox. Outlook Actionable messages are emails that embed [Adaptive Cards](https://adaptivecards.io/) in a very secure way, by enforcing both end-user authentication and phishing prevention.

![SalesTim Approval Workflow Actionable Message](/img/nocode/approval-actionable-message.png)

In this context :
- End-user authentication is entirely managed by the Outlook client (Desktop, Web and Mobile) by providing to the actionable message the required token.
- Phishing prevention is ensured by using a [Card Signing](https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#signed-card-payloads) mechanism

## How does it works?
Actionable messages security is guaranteed by:
- The fact that the actionable message could only be used from the context of a secured Outlook client.
- A sender verification is enforced using signed cards. See: [Sender verification
](https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#sender-verification)
- Requests sent by the actionable message are verified to ensure that they originate from Microsoft. See: [Verifying that requests come from Microsoft](https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-that-requests-come-from-microsoft)
- The token provided by Outlook to the actionable message is used to verify the end-user identity. See: [Verifying the identity of the user](https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-the-identity-of-the-user).

Learn more by reading [Security requirements for actionable messages in Office 365](https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements).

## What do I have to do?
Most of this security process is configured automatically and enforced by default on our side. The only operation to relies on you is to enable the service account that you configured in SalesTim to be authorized to send actionable messages.

To do so:
1. Open the [Actionable Email Developer Dashboard](https://aka.ms/publishoam) and login with a Microsoft 365 user with `Exchange Administrator` or `Global administrator` permissions.
2. Select `New provider`
3. Fill the form:
    - Friendly Name: `SalesTim`
    - Provider Id (originator): **Automatically generated**
    - Organization Info: **Automatically generated**
    - Sender email address from which actionable emails will originate: **Your service account email address**
    - Target URLs: `https://api.salestim.io`
    - Public Key:
    ```xml
    <RSAKeyValue><Modulus>k0Qqob12HSdll52CbnXkQNW6nZO9477sE9pI8Y6z5M8hPtJinAf2r41Sxss3Y9oP1nzcfs3fHpi1AUjffyD44I2FxmqF+FGfgKsuWeYce/75Kb1QCEDOwTjP4kqgPD8NeJbWNIe2ZRRKilmxmmUZ6NErNEWvf8vzQvvpVeP9CLUIERuBxLlLlitjNTyCUjgTTkC+giKtmcxTnJ/lUav3erPsev8isS+IQwz6SaXCqj/eYnFkhM2ADF2UCL4ssgHEj6jYe4m8IyMQBgxxr4+4fziixn0uimGQqt54VbT4BToq7l7S8wSj3WNRwR7KBBWvo6pnx39fDMWazfLbe5NmsQ==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>
    ```
    - Logo: **You can use the [SalesTim Logo](https://developers.salestim.com/color.png)**
    - Scope of submission: `Organization`
    - Additional Information: **One of your Microsoft 365 Exchange or Global administrators**
4. Before submitting the form, ***BE SURE TO COPY THE PROVIDER ID VALUE***
5. Accept the terms and conditions and hit "Save"
6. Wait for your Microsoft 365 Exchange or Global administrators to approve this request
7. Open the SalesTim Settings tab and open "Approval"
8. Paste the provider id that you previously copied and hit "Save"

From the SalesTim Catalog, you should now be able to enable the approval workflow on your templates (You may have to refresh the page to see your changes).

For more details about this procedure, you may refer to [Register your service with the actionable email developer dashboard](https://docs.microsoft.com/en-us/outlook/actionable-messages/email-dev-dashboard).
