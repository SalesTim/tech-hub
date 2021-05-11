(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{560:function(e,t,a){"use strict";a.r(t);var s=a(26),n=function(e){e.options.__data__block__={mermaid_382ee166:"graph LR\n\n    %% Nodes\n    s([Start])\n    subgraph sf[Salesforce]\n        appreg(1. Create a Connected App)\n    end\n    subgraph st[SalesTim]\n        createconnectedapp(2. Create a Connected App)\n        configureentities(3. Entities Business Rules)\n    end\n    e([End])\n\n    %% Styles\n    classDef startend fill:#9099d8, stroke-width:0px;\n        class s startend\n        class e startend\n\n    %% Links\n    s --\x3e appreg\n    appreg --\x3e|Client id & secret| createconnectedapp\n    createconnectedapp --\x3e |Configure| configureentities\n    configureentities --\x3e e\n"}},o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"salesforce-sales-cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#salesforce-sales-cloud"}},[e._v("#")]),e._v(" "),a("img",{staticStyle:{width:"40px"},attrs:{src:"/img/connectedapps/salesforcesalescloud.jpg"}}),e._v(" Salesforce Sales Cloud "),a("Badge",{attrs:{text:"v1.0",type:"tip",vertical:"top"}})],1),e._v(" "),a("p",[a("strong",[e._v("Abstract")]),a("br"),e._v("\nThis article explains how to configure the SalesTim "),a("code",[e._v("Connected App")]),e._v(" for Salesforce Sales Cloud.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("⏱ Expected Duration")]),e._v(" "),a("p",[e._v("It only requires a few operations that are described hereafter as a detailed step-by-step procedure. Assuming you have all the required access and permissions to execute it properly, it should take "),a("em",[a("strong",[e._v("less than 10 minutes")])]),e._v(".")])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("TABLE OF CONTENTS")]),e._v(":\n")]),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#procedure-overview"}},[e._v("Procedure Overview")])]),a("li",[a("a",{attrs:{href:"#create-a-new-salesforce-connected-app"}},[e._v("Create a new Salesforce Connected App")])]),a("li",[a("a",{attrs:{href:"#create-a-new-salestim-connected-app"}},[e._v("Create a new SalesTim Connected App")])]),a("li",[a("a",{attrs:{href:"#configure-entities-business-rules"}},[e._v("Configure Entities Business Rules")])])])]),a("p"),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"procedure-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#procedure-overview"}},[e._v("#")]),e._v(" Procedure Overview")]),e._v(" "),a("p",[e._v("Here is an overview of the overall procedure:")]),e._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee166",graph:e.$dataBlock.mermaid_382ee166}}),a("h2",{attrs:{id:"create-a-new-salesforce-connected-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-salesforce-connected-app"}},[e._v("#")]),e._v(" Create a new Salesforce Connected App")]),e._v(" "),a("ol",[a("li",[e._v("Open your Salesforce "),a("code",[e._v("setup")]),e._v(" page, enter 'Apps' in the Quick Find box, and select "),a("code",[e._v("App Manager")]),e._v(".")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("New Connected App")]),e._v(".")]),e._v(" "),a("li",[e._v("Enter 'SalesTim' as a the connected app’s name\n"),a("ul",[a("li",[e._v("This name is displayed in the App Manager and on its App Launcher tile.")]),e._v(" "),a("li",[e._v("The connected app name must be unique within your org.")]),e._v(" "),a("li",[e._v("If the connected app was created in the Spring ‘14 release or later, you can reuse the name of a deleted connected app.")])])]),e._v(" "),a("li",[e._v("Enter 'SalesTim' as the "),a("code",[e._v("API name")]),e._v(".\n"),a("ul",[a("li",[e._v("It defaults to a version of the name without spaces.")]),e._v(" "),a("li",[e._v("Only letters, numbers, and underscores are allowed, so if the original app name contains any other characters, edit the default name.")])])]),e._v(" "),a("li",[e._v("Enter your own email or any other email as the "),a("code",[e._v("Contact Email")]),e._v(" for Salesforce to use in case we want to contact you or your support team.\n"),a("ul",[a("li",[e._v("This address isn’t given to Salesforce admins who install the app.")])])]),e._v(" "),a("li",[e._v("(Optional) Enter the "),a("code",[e._v("Contact Phone")]),e._v(" for Salesforce to use in case we want to contact you or your support team.\n"),a("ul",[a("li",[e._v("This number isn’t given to Salesforce admins who install the app.")])])]),e._v(" "),a("li",[e._v("(Optional) Paste this address as the "),a("code",[e._v("Logo Image Url")]),e._v(":"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://developers.salestim.com/color.png\n")])])]),a("ul",[a("li",[e._v("This  logo also displays on the consent page that users see when approving the app.")]),e._v(" "),a("li",[e._v("The logo URL must use HTTPS.")]),e._v(" "),a("li",[e._v("The logo image must be a GIF, JPG, or PNG file with a file size that’s preferably under 20 KB and no more than 100 KB. Salesforce resize the image to 128 pixels by 128 pixels, so be sure that you like how it looks. If you don’t supply a logo, Salesforce generates one for you using the app’s initials.")])])]),e._v(" "),a("li",[e._v("(Optional) Paste this address as the "),a("code",[e._v("Info Url")]),e._v(":"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://developers.salestim.com\n")])])])]),e._v(" "),a("li",[e._v("(Optional) Paste 'SalesTim App for Salesforce' as the "),a("code",[e._v("Description")]),e._v(".")])]),e._v(" "),a("p",[e._v("For reference, see "),a("a",{attrs:{href:"https://help.salesforce.com/articleView?id=connected_app_create_basics.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configure Basic Connected App Settings"),a("OutboundLink")],1)]),e._v(" "),a("ol",{attrs:{start:"10"}},[a("li",[e._v("From the "),a("code",[e._v("API (Enable OAuth Settings)")]),e._v(" section, fill the form with the following information:\n"),a("ul",[a("li",[a("code",[e._v("Enable OAuth Settings")]),e._v(": ✅ Checked")]),e._v(" "),a("li",[a("code",[e._v("Callback URL")]),e._v(":")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://app.salestim.io/connected_apps/auth/authorization_code/callback\n")])])]),a("ul",[a("li",[a("code",[e._v("Use digital signatures")]),e._v(": ❌ Unchecked")]),e._v(" "),a("li",[a("code",[e._v("Selected OAuth Scopes")]),e._v(": Select these scopes\n"),a("ul",[a("li",[a("code",[e._v("Access and manage your Chatter data (chatter_api)")])]),e._v(" "),a("li",[a("code",[e._v("Access and manage your data (api)")])]),e._v(" "),a("li",[a("code",[e._v("Access your basic information (id, profile, email, address, phone)")])]),e._v(" "),a("li",[a("code",[e._v("Allow access to your unique identifier (openid)")])]),e._v(" "),a("li",[a("code",[e._v("Perform requests on your behalf at any time (refresh_token, offline_access)")])])])]),e._v(" "),a("li",[a("code",[e._v("Require Secret for Web Server Flow")]),e._v(": ❌ Unchecked")]),e._v(" "),a("li",[a("code",[e._v("Introspect All Tokens")]),e._v(": ❌ Unchecked")]),e._v(" "),a("li",[a("code",[e._v("Configure ID Token")]),e._v(": ❌ Unchecked")]),e._v(" "),a("li",[a("code",[e._v("Enable Asset Tokens")]),e._v(": ❌ Unchecked")]),e._v(" "),a("li",[a("code",[e._v("Enable Single Logout")]),e._v(": ❌ Unchecked")])])]),e._v(" "),a("li",[e._v("Wait for two to ten minutes before using this new Salesforce connected app")])]),e._v(" "),a("p",[e._v("For reference, see "),a("a",{attrs:{href:"https://help.salesforce.com/articleView?id=connected_app_create_api_integration.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Enable OAuth Settings for API Integration"),a("OutboundLink")],1)]),e._v(" "),a("ol",{attrs:{start:"12"}},[a("li",[e._v("From the "),a("code",[e._v("API (Enable OAuth Settings)")]),e._v(" section:\n"),a("ul",[a("li",[e._v("copy "),a("code",[e._v("Consumer Key")])]),e._v(" "),a("li",[e._v("next to the "),a("code",[e._v("Consumer Secret")]),e._v(" field, click "),a("code",[e._v("Click to reveal")]),e._v(" and copy the consumer key")])])])]),e._v(" "),a("h2",{attrs:{id:"create-a-new-salestim-connected-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-salestim-connected-app"}},[e._v("#")]),e._v(" Create a new SalesTim Connected App")]),e._v(" "),a("p",[e._v('From the SalesTim "Connected Apps" tab:')]),e._v(" "),a("ul",[a("li",[e._v('Click "New Connected App".')]),e._v(" "),a("li",[e._v('From the "Salesforce Sales Cloud" card, click "Connect"')])]),e._v(" "),a("p",[e._v('From the new "Connection" section:')]),e._v(" "),a("ul",[a("li",[e._v("Paste the "),a("code",[e._v("Consumer Key")]),e._v(" to the "),a("code",[e._v("Client ID")]),e._v(" field")]),e._v(" "),a("li",[e._v("Paste the "),a("code",[e._v("Consumer Secret")]),e._v(" to the "),a("code",[e._v("Client Secret")]),e._v(" field")]),e._v(" "),a("li",[e._v('Click "Authorize"')])]),e._v(" "),a("p",[e._v("Once your Salesforce Sales Cloud connection is authorized, you can configure your business rules for each available object type.")]),e._v(" "),a("h2",{attrs:{id:"configure-entities-business-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-entities-business-rules"}},[e._v("#")]),e._v(" Configure Entities Business Rules")]),e._v(" "),a("p",[e._v("Each entity has its own available actions and schema. We tried hard to make it self-explanatory but if you have any doubt or question, lease refer to our "),a("a",{attrs:{href:"https://help.salestim.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Help Center"),a("OutboundLink")],1)])],1)}),[],!1,null,null,null);"function"==typeof n&&n(o);t.default=o.exports}}]);