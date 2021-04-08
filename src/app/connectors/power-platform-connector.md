# Setup the SalesTim Connector for Power Platform
<Classification label="public" />

**Abstract**: This article explains how to register the SalesTim Connector as a custom connector for Microsoft [Power Platform](https://powerplatform.microsoft.com).

::: tip ⏱ Expected Duration
Creating the custom connector only requires a few operations that are described hereafter as a detailed step-by-step procedure. Assuming you have all the required access and permissions to execute it properly, it should take ***less than 10 minutes***.
:::

---

**TABLE OF CONTENTS**:
[[toc]]

---

## Procedure Overview
Here is an overview of the overall procedure:

```mermaid
graph LR

    %% Nodes
    s([Start])
    subgraph adop[Azure AD]
        appreg(1. AD App Registration)
    end
    subgraph pp[Power Platform]
        openapi(2. OpenAPI Import)
        papps(3. Power Apps)
        pauto(3. Power Automate)
        pbi(3. Power BI)
    end
    e([End])

    %% Styles
    classDef startend fill:#9099d8, stroke-width:0px;
        class s startend
        class e startend

    %% Links
    s --> appreg
    appreg -->|Client id & secret| openapi
    openapi -->|Use| papps
    openapi -->|Use| pauto
    openapi -->|Use| pbi
    papps --> e
    pauto --> e
    pbi --> e
```

## 1. Create a new app registration in Azure Active Directory
To securely access your Microsoft 365 environment through the Microsoft Graph APIs, the first step is to create a dedicated app registration. An Azure AD app registration identifies a third-party app such as SalesTim, and defines the permissions you wan to grant to it. To learn more, you can refer to [How and why applications are added to Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-how-applications-are-added).

To create a new app registration, follow these steps:
- Open your [Azure Active Directory portal](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview)
- Select `App registrations` from the left menu
- Click `New registration` from the top bar
- Give the app a name, such as:
```
SalesTim Power Platform Connector
```
- Select the option `Accounts in this organizational directory only`, as you want to restrict access to your own tenant.
- Use this web redirection URL:
```
https://global.consent.azure-apim.net/redirect
```
- Click `Register`
- From the `Overview` menu, copy the `Application (client) ID`, and keep it as we're gonna reuse it later. You can temporarily paste it here:

**Application (client) ID**:  
<input type="text" id="clientIdInput" style="width: 500px;" placeholder="Paste your Application ID here"></input>

- Open the `Authentication` menu
- Ensure that the `Access tokens (used for implicit flows)` and `ID tokens (used for implicit and hybrid flows)` options are chacked from the `Implicit grant and hybrid flows` section, and save your updates if required.
- Open the `Certificates and secrets` menu and click `New client secret`. A client secret is a kind of a password for your app, so manage it carefully.
- Give a name to your client secret such as:
```
SalesTim Power Platform Connector client secret
```
- Select the option `Never` to prevent this secret to expire in the future, and click `Add`
- Copy the `Client secret` value (be careful, it will only be shown once), and keep it as we're gonna reuse it later. You can temporarily paste it here:

**Client secret**:  
<input type="text" style="width: 500px;" placeholder="Paste your Client Secret here"></input>

- Open the `API permissions` from the left menu and click `Add a permission` from the top bar
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
    - InformationProtectionPolicy >
        - `InformationProtectionPolicy.Read`
    - Mail >
        - `Mail.Send`
    - User >
        - `User.Read`
        - `User.Read.All`
- Click `Add permissions`
- Then click `Grant admin consent for...` then `Yes`

You're done, you've created your app registration for the SalesTim Connector. You should also have saved for later the `Application (client) ID` and `Client secret` that we're gonna use in the next steps.

## 2. Import the SalesTim OpenAPI definition
Now that we've created the app registration, we're gonna use it to create our custom connector.

- To import the SalesTim API OpenAPI definitions for Power Automate and Power Apps, go to [PowerApps](https://powerapps.com) or [Power Automate](https://flow.microsoft.com).

::: tip
The custom connector you're about to create will be available for both PowerApps and Power Automate, as they're sharing the same list of connectors.
:::

- In the navigation pane, select `Data` then `Custom connectors`.
- Select `New custom connector` then choose `Import an OpenAPI from URL`
- Give your connector a name, such as :
```
SalesTim
```
- Paste this URL:
```
https://developers.salestim.com/api/definitions/v1.0/open-api/power-platform/apiDefinition.swagger.json
```
- Click `Import`, then `Continue`
- Upload the connector logo that you can download from:
```
https://www.salestim.com/wp-content/uploads/2019/05/color.png
```
- Set the icon background color to:
```
#000000
```
- Click `Security`
- Ensure that the authentication type is set to `OAuth 2.0` and the identity provider is set to `Azure Active Directory`
- Paste the previously copied `Client id` and `Client secret`
- Ensure that the login url is set to:
```
https://login.windows.net
```
- Ensure that the tenant ID is set to:
```common```
- Set the resource URL to:
```
https://graph.microsoft.com
```
- Set the scope to:
```
https://graph.microsoft.com/.default
```
- Click `Create connector`, then `Close`

## 3. Update the Power Platform Connector
To update your Power Platform connector:
- Open the updated <a target="_blank" href="https://developers.salestim.com/api/definitions/v1.0/open-api/power-platform/apiDefinition.swagger.yaml">connector definition</a>
```
https://developers.salestim.com/api/definitions/v1.0/open-api/power-platform/apiDefinition.swagger.yaml
```
- Copy the whole content
- From Power Apps or Power Automate, open your custom connector from the `Data \ Custom connectors` menu
- Click on `Swagger Editor`
- From the left page, replace the content by pasting the updated connector definition
- Click `Update connector`

## 4. Next Steps
Now that you've created the SalesTim connector, you can use it from [Power Apps](https://powerapps.com), [Power Automate](https://flow.microsoft.com), and [Power BI](https://powerbi.microsoft.com). See the available [Triggers and Actions](/connectors/connectors-actions) for reference.

::: tip 💡 To Go Further
Here are a few interesting articles that may give you some guidelines and new ideas on how to use the the SalesTim Connector:
- [Power Automate with Microsoft Teams: The Full Tutorial with Examples](https://www.salestim.com/power-automate-with-microsoft-teams-the-full-tutorial-with-examples/)
- [Get started with Power Automate](https://docs.microsoft.com/en-us/power-automate/getting-started)
- [Power BI with Microsoft Teams: How to Manage Reports Effectively](https://www.salestim.com/power-bi-with-microsoft-teams-how-to-manage-reports-effectively/)
:::
