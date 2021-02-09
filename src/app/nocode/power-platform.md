---
title: "No-Code Solutions with Power Platform and SalesTim API"
description: "Use the SalesTim API with the Microsoft Power Platform to build Microsoft Teams apps and integrations easily."
---

# Use the SalesTim API with Power Platform <Badge text="beta" type="warning"/>
<Classification label="public" />

This article explains how to register the SalesTim API as a a custom connector for the Microsoft Power Platform. The `SalesTim Connector` gives you access to all the powerful features of our Governance API, such as managing your teams or start a new team provisioning job.

This process only requires a few operations that could be completed in a few minutes.

Table of Contents:
[[toc]]

## Create a new app registration in Azure Active Directory

- Open your [Azure Active Directory portal](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview)
- Select `App registrations`
- Click `New registration`
- Give the app a name: `SalesTim Power Platform Connector`
- Select the option `Accounts in this organizational directory only`
- Use the web redirection URL: `https://global.consent.azure-apim.net/redirect`
- Click `Register`
- From the `Overview` menu, copy the `Application (client) ID`
- Open the `Certificates and secrets` menu and click `New client secret`
- Give it a name: `SalesTim Power Platform Connector client secret`
- Select the option `Never` to prevent expiration and click `Add`
- Copy the `Client secret` value (be careful, it will only be shown once)
- Open the `API permissions` menu and click `Add a permission`
- Select `Microsoft Graph`, then `Delegated permissions`
- From the permissions list, select:
    - OpenId permissions >
        - `email`
        - `offline_access`
        - `openid`
        - `profile`
    - Directory >
        - `Directory.AccessAsUser.All`
    - Group >
        - `Group.ReadWrite.All`
    - Mail >
        - `Mail.Send`
    - User >
        - `User.Read`
        - `User.Read.All`
    - InformationProtectionPolicy >
        - `InformationProtectionPolicy.Read`

- Then click `Grant admin consent` then `Yes`

## Import the SalesTim OpenAPI definition

To import the SalesTim API OpenAPI definitions for Power Automate and Power Apps, go to [powerapps.com](https://powerapps.com) or [flow.microsoft.com](https://flow.microsoft.com).

In the navigation pane, select Data > Custom connectors.
- Select `New custom connector` then choose `Import an OpenAPI from URL`
- Set the connector name to: `SalesTim Connector`
- Paste this URL:
```
https://dist.salestim.com/api/v1.0/open-api/power-platform/apiDefinition.swagger.json
```
- Click `Continue`
- Upload the connector logo that you can download from:
```
https://www.salestim.com/wp-content/uploads/2019/05/color.png
```
- Set the icon background color to: `#000000`
- Click `Security`
- Ensure that the authentication type is set to `OAuth 2.0` and the identity provider is set to `Azure Active Directory`
- Paste the previously copied `Client id` and `Client secret`
- Ensure that the login url is set to: `https://login.windows.net`
- Ensure that the tenant ID is set to: `common`
- Set the resource URL to: `https://graph.microsoft.com`
- Set the scope to: `https://graph.microsoft.com/.default`
- Click `Create connector`
- Click `Close`

## Next Steps
Now that you've created a custom connector, you can use the `SalesTim Connector` from both `Power Apps` and `Power Automate`.
