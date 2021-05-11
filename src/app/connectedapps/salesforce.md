# Salesforce Integration Settings

## Abstract
Configure a Salesforce integration requires you to perform some one-time operations:
1. Create a Salesforce configuration
2. Configure a Salesforce authentication
3. Configure your integration settings

## Create a Salesforce Configuration
1. Open your Salesforce `setup` page, enter 'Apps' in the Quick Find box, and select `App Manager`.
2. Click `New Connected App`.
3. Enter 'SalesTim' as a the connected app’s name
    - This name is displayed in the App Manager and on its App Launcher tile.
    - The connected app name must be unique within your org.
    - If the connected app was created in the Spring ‘14 release or later, you can reuse the name of a deleted connected app.
4. Enter 'SalesTim' as the `API name`.
    - It defaults to a version of the name without spaces.
    - Only letters, numbers, and underscores are allowed, so if the original app name contains any other characters, edit the default name.
5. Enter your own email or any other email as the `Contact Email` for Salesforce to use in case we want to contact you or your support team.
    - This address isn’t given to Salesforce admins who install the app.
6. (Optional) Enter the `Contact Phone` for Salesforce to use in case we want to contact you or your support team.
    - This number isn’t given to Salesforce admins who install the app.
7. (Optional) Paste 'https://developers.salestim.com/color.png' as the `Logo Image Url`.
    - This  logo also displays on the consent page that users see when approving the app.
    - The logo URL must use HTTPS.
    - The logo image must be a GIF, JPG, or PNG file with a file size that’s preferably under 20 KB and no more than 100 KB. Salesforce resize the image to 128 pixels by 128 pixels, so be sure that you like how it looks. If you don’t supply a logo, Salesforce generates one for you using the app’s initials.
8. (Optional) Paste 'https://www.salestim.com' as the `Info Url`.
9. (Optional) Paste 'SalesTim App for Salesforce' as the `Description`.

For reference, see [Configure Basic Connected App Settings](https://help.salesforce.com/articleView?id=connected_app_create_basics.htm)

10. From the `API (Enable OAuth Settings)` section, fill the form with the following information:
    - `Enable OAuth Settings`: ✅ Checked
    - `Callback URL`: 'https://connectedapps.salestim.io/auth/callback'
    - `Use digital signatures`: ❌ Unchecked
    - `Selected OAuth Scopes`: Select these scopes
        - `Access and manage your Chatter data (chatter_api)`
        - `Access and manage your data (api)`
        - `Access your basic information (id, profile, email, address, phone)`
        - `Allow access to your unique identifier (openid)`
        - `Perform requests on your behalf at any time (refresh_token, offline_access)`
    - `Require Secret for Web Server Flow`: ❌ Unchecked
    - `Introspect All Tokens`: ❌ Unchecked
    - `Configure ID Token`: ❌ Unchecked
    - `Enable Asset Tokens`: ❌ Unchecked
    - `Enable Single Logout`: ❌ Unchecked
11. Wait for two to ten minutes before using this new Salesforce connected app

For reference, see [Enable OAuth Settings for API Integration](https://help.salesforce.com/articleView?id=connected_app_create_api_integration.htm)

12. From the `API (Enable OAuth Settings)` section:
    - copy `Consumer Key` and paste it to the `Client ID` field in SalesTim settings:
        `3MVG9WtWSKUDG.x7NE4OjL.HybOXCxBsom8SvifTyaTRLKOY.vqGurR4XLz9E8G7BzFBtpGbOqazv9_xOS0.G`
    - next to the `Consumer Secret` field, click `Click to reveal` and copy the consumer key, then paste it to the `Client Secret` field in SalesTim settings:
        `1AE1808DF5D7E927125253B43BD08D908950F8163DF31E312E28614F0229588F`
13. Back to SalesTim settings, paste the following scopes to the `Scopes` field (one per line):
    ```
    chatter_api
    api
    id
    profile
    email
    address
    phone
    openid
    refresh_token
    offline_access
    ```
14. Click `Save Configuration`

## Configure a Salesforce authentication

1. From SalesTim settings, in the `Authentication` section, click `Connect`
2. Review the requested scopes and approve the app

## Configure your integration settings

Once your Salesforce configuration is done, and your Salesforce authentication is configured, you can define your business rules for each available object type.
