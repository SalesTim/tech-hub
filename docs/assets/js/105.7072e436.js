(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{557:function(e,t,r){"use strict";r.r(t);var o=r(26),a=function(e){e.options.__data__block__={mermaid_382ee14d:"graph LR\n\n    %% Nodes\n    s([Start])\n    subgraph adop[Azure AD]\n        appreg(1. Azure AD App Registration)\n    end\n    subgraph pp[Power Platform]\n        openapi(2. OpenAPI Import)\n        papps(3. Power Apps)\n        pauto(3. Power Automate)\n        pbi(3. Power BI)\n    end\n    e([End])\n\n    %% Styles\n    classDef startend fill:#9099d8, stroke-width:0px;\n        class s startend\n        class e startend\n\n    %% Links\n    s --\x3e appreg\n    appreg --\x3e|Client id & secret| openapi\n    openapi --\x3e|Use| papps\n    openapi --\x3e|Use| pauto\n    openapi --\x3e|Use| pbi\n    papps --\x3e e\n    pauto --\x3e e\n    pbi --\x3e e\n"}},s=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"use-the-salestim-api-with-power-platform"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-the-salestim-api-with-power-platform"}},[e._v("#")]),e._v(" Use the SalesTim API with Power Platform "),r("Badge",{attrs:{text:"beta",type:"warning"}})],1),e._v(" "),r("Classification",{attrs:{label:"public"}}),e._v(" "),r("p",[r("strong",[e._v("Abstract")]),e._v(": This article explains how to register the SalesTim API as a custom connector for the Microsoft "),r("a",{attrs:{href:"https://powerplatform.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Platform"),r("OutboundLink")],1),e._v(". The "),r("code",[e._v("SalesTim Connector for Power Platform")]),e._v(" gives you access to all the powerful features of our "),r("RouterLink",{attrs:{to:"/api/"}},[e._v("Governance API")]),e._v(", such as managing your teams or start a new team provisioning job, right from "),r("a",{attrs:{href:"https://powerapps.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerApps"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://flow.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Automate"),r("OutboundLink")],1),e._v(", or "),r("a",{attrs:{href:"https://powerbi.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power BI"),r("OutboundLink")],1),e._v(".")],1),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("⏱ Expected Duration")]),e._v(" "),r("p",[e._v("Creating the "),r("code",[e._v("SalesTim Connector for Power Platform")]),e._v(" only requires a few operations that are described hereafter as a detailed step-by-step procedure. Assuming you have all the required access and permissions to execute it properly, it should take "),r("em",[r("strong",[e._v("less than 10 minutes")])]),e._v(".")])]),e._v(" "),r("p",[r("strong",[e._v("Table of Contents")]),e._v(":\n")]),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#procedure-overview"}},[e._v("Procedure Overview")])]),r("li",[r("a",{attrs:{href:"#_1-create-a-new-app-registration-in-azure-active-directory"}},[e._v("1. Create a new app registration in Azure Active Directory")])]),r("li",[r("a",{attrs:{href:"#_2-import-the-salestim-openapi-definition"}},[e._v("2. Import the SalesTim OpenAPI definition")])]),r("li",[r("a",{attrs:{href:"#_3-next-steps"}},[e._v("3. Next Steps")])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"procedure-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#procedure-overview"}},[e._v("#")]),e._v(" Procedure Overview")]),e._v(" "),r("Mermaid",{attrs:{id:"mermaid_382ee14d",graph:e.$dataBlock.mermaid_382ee14d}}),r("h2",{attrs:{id:"_1-create-a-new-app-registration-in-azure-active-directory"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-new-app-registration-in-azure-active-directory"}},[e._v("#")]),e._v(" 1. Create a new app registration in Azure Active Directory")]),e._v(" "),r("p",[e._v("To securely access your Microsoft 365 environment through the Microsoft Graph APIs, the first step is to create a dedicated app registration. An Azure AD app registration identifies a third-party app such as SalesTim, and defines the permissions you wan to grant to it. To learn more, you can refer to "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-how-applications-are-added",target:"_blank",rel:"noopener noreferrer"}},[e._v("How and why applications are added to Azure AD"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("To create a new app registration, follow these steps:")]),e._v(" "),r("ol",[r("li",[e._v("Open your "),r("a",{attrs:{href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Active Directory portal"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Select "),r("code",[e._v("App registrations")]),e._v(" from the left menu")]),e._v(" "),r("li",[e._v("Click "),r("code",[e._v("New registration")]),e._v(" from the top bar")]),e._v(" "),r("li",[e._v("Give the app a name, such as:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("SalesTim Power Platform Connector\n")])])]),r("ol",{attrs:{start:"5"}},[r("li",[e._v("Select the option "),r("code",[e._v("Accounts in this organizational directory only")]),e._v(", as you want to restrict access to your own tenant.")]),e._v(" "),r("li",[e._v("Use this web redirection URL:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("https://global.consent.azure-apim.net/redirect\n")])])]),r("ol",{attrs:{start:"7"}},[r("li",[e._v("Click "),r("code",[e._v("Register")])]),e._v(" "),r("li",[e._v("From the "),r("code",[e._v("Overview")]),e._v(" menu, copy the "),r("code",[e._v("Application (client) ID")]),e._v(", and keep it as we're gonna reuse it later. You can temporarily paste it here:")])]),e._v(" "),r("p",[r("strong",[e._v("Application (client) ID")]),e._v(":"),r("br"),e._v(" "),r("input",{staticStyle:{width:"500px"},attrs:{type:"text",id:"clientIdInput",placeholder:"Paste your Application ID here"}})]),e._v(" "),r("ol",{attrs:{start:"9"}},[r("li",[e._v("Open the "),r("code",[e._v("Certificates and secrets")]),e._v(" menu and click "),r("code",[e._v("New client secret")]),e._v(". A client secret is a kind of a password for your app, so manage it carefully.")]),e._v(" "),r("li",[e._v("Give a name to your client secret such as:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("SalesTim Power Platform Connector client secret\n")])])]),r("ol",{attrs:{start:"11"}},[r("li",[e._v("Select the option "),r("code",[e._v("Never")]),e._v(" to prevent this secret to expire in the future, and click "),r("code",[e._v("Add")])]),e._v(" "),r("li",[e._v("Copy the "),r("code",[e._v("Client secret")]),e._v(" value (be careful, it will only be shown once), and keep it as we're gonna reuse it later. You can temporarily paste it here:")])]),e._v(" "),r("p",[r("strong",[e._v("Client secret")]),e._v(":"),r("br"),e._v(" "),r("input",{staticStyle:{width:"500px"},attrs:{type:"text",placeholder:"Paste your Client Secret here"}})]),e._v(" "),r("ol",{attrs:{start:"13"}},[r("li",[e._v("Open the "),r("code",[e._v("API permissions")]),e._v(" from the left menu and click "),r("code",[e._v("Add a permission")]),e._v(" from the top bar")]),e._v(" "),r("li",[e._v("Select "),r("code",[e._v("Microsoft Graph")]),e._v(", then "),r("code",[e._v("Delegated permissions")])]),e._v(" "),r("li",[e._v("From the permissions list, select:\n"),r("ul",[r("li",[e._v("OpenId permissions >\n"),r("ul",[r("li",[r("code",[e._v("email")])]),e._v(" "),r("li",[r("code",[e._v("offline_access")])]),e._v(" "),r("li",[r("code",[e._v("openid")])]),e._v(" "),r("li",[r("code",[e._v("profile")])])])]),e._v(" "),r("li",[e._v("Directory >\n"),r("ul",[r("li",[r("code",[e._v("Directory.AccessAsUser.All")])])])]),e._v(" "),r("li",[e._v("Group >\n"),r("ul",[r("li",[r("code",[e._v("Group.ReadWrite.All")])])])]),e._v(" "),r("li",[e._v("InformationProtectionPolicy >\n"),r("ul",[r("li",[r("code",[e._v("InformationProtectionPolicy.Read")])])])]),e._v(" "),r("li",[e._v("Mail >\n"),r("ul",[r("li",[r("code",[e._v("Mail.Send")])])])]),e._v(" "),r("li",[e._v("User >\n"),r("ul",[r("li",[r("code",[e._v("User.Read")])]),e._v(" "),r("li",[r("code",[e._v("User.Read.All")])])])])])]),e._v(" "),r("li",[e._v("Click "),r("code",[e._v("Add permissions")])]),e._v(" "),r("li",[e._v("Then click "),r("code",[e._v("Grant admin consent for...")]),e._v(" then "),r("code",[e._v("Yes")])])]),e._v(" "),r("p",[e._v("You're done, you've created your app registration for the SalesTim Connector. You should also have saved for later the "),r("code",[e._v("Application (client) ID")]),e._v(" and "),r("code",[e._v("Client secret")]),e._v(" that we're gonna use in the next steps.")]),e._v(" "),r("h2",{attrs:{id:"_2-import-the-salestim-openapi-definition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-import-the-salestim-openapi-definition"}},[e._v("#")]),e._v(" 2. Import the SalesTim OpenAPI definition")]),e._v(" "),r("p",[e._v("Now that we've created the app registration, we're gonna use it to create our custom connector.")]),e._v(" "),r("ol",[r("li",[e._v("To import the SalesTim API OpenAPI definitions for Power Automate and Power Apps, go to "),r("a",{attrs:{href:"https://powerapps.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerApps"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://flow.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Automate"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("The custom connector you're about to create will be available for both PowerApps and Power Automate, as they're sharing the same list of connectors.")])]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("In the navigation pane, select "),r("code",[e._v("Data")]),e._v(" then "),r("code",[e._v("Custom connectors")]),e._v(".")])]),e._v(" "),r("ul",[r("li",[e._v("Select "),r("code",[e._v("New custom connector")]),e._v(" then choose "),r("code",[e._v("Import an OpenAPI from URL")])]),e._v(" "),r("li",[e._v("Give your connector a name, such as :")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("SalesTim Connector\n")])])]),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Paste this URL:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("https://developers.salestim.com/api/definitions/v1.0/open-api/power-platform/apiDefinition.swagger.json\n")])])]),r("ol",{attrs:{start:"4"}},[r("li",[e._v("Click "),r("code",[e._v("Import")]),e._v(", then "),r("code",[e._v("Continue")])]),e._v(" "),r("li",[e._v("Upload the connector logo that you can download from:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("https://www.salestim.com/wp-content/uploads/2019/05/color.png\n")])])]),r("ol",{attrs:{start:"6"}},[r("li",[e._v("Set the icon background color to:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("#000000\n")])])]),r("ol",{attrs:{start:"7"}},[r("li",[e._v("Click "),r("code",[e._v("Security")])]),e._v(" "),r("li",[e._v("Ensure that the authentication type is set to "),r("code",[e._v("OAuth 2.0")]),e._v(" and the identity provider is set to "),r("code",[e._v("Azure Active Directory")])]),e._v(" "),r("li",[e._v("Paste the previously copied "),r("code",[e._v("Client id")]),e._v(" and "),r("code",[e._v("Client secret")])]),e._v(" "),r("li",[e._v("Ensure that the login url is set to:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("https://login.windows.net\n")])])]),r("ol",{attrs:{start:"11"}},[r("li",[e._v("Ensure that the tenant ID is set to:\n"),r("code",[e._v("common")])]),e._v(" "),r("li",[e._v("Set the resource URL to:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("https://graph.microsoft.com\n")])])]),r("ol",{attrs:{start:"13"}},[r("li",[e._v("Set the scope to:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("https://graph.microsoft.com/.default\n")])])]),r("ol",{attrs:{start:"14"}},[r("li",[e._v("Click "),r("code",[e._v("Create connector")]),e._v(", then "),r("code",[e._v("Close")])])]),e._v(" "),r("h2",{attrs:{id:"_3-next-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-next-steps"}},[e._v("#")]),e._v(" 3. Next Steps")]),e._v(" "),r("p",[e._v("Now that you've created the "),r("code",[e._v("SalesTim Connector for Power Platform")]),e._v(", you can use it from both "),r("a",{attrs:{href:"https://powerapps.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Apps"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://flow.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Automate"),r("OutboundLink")],1),e._v(", and "),r("a",{attrs:{href:"https://powerbi.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power BI"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("To Go Further")]),e._v(" "),r("p",[e._v("Here are a few interesting articles that may give you some guidelines and new ideas on how to use the the "),r("code",[e._v("SalesTim Connector for Power Platform")]),e._v(":")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.salestim.com/power-automate-with-microsoft-teams-the-full-tutorial-with-examples/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Automate with Microsoft Teams: The Full Tutorial with Examples"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/power-automate/getting-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("Get started with Power Automate"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.salestim.com/power-bi-with-microsoft-teams-how-to-manage-reports-effectively/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power BI with Microsoft Teams: How to Manage Reports Effectively"),r("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);"function"==typeof a&&a(s);t.default=s.exports}}]);