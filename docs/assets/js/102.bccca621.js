(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{651:function(e,t,a){"use strict";a.r(t);var o=a(26),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"team-creation-approval-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#team-creation-approval-workflow"}},[e._v("#")]),e._v(" Team creation approval workflow")]),e._v(" "),a("Classification",{attrs:{label:"public"}}),e._v(" "),a("p",[e._v("This article describes how to configure SalesTim to create an approval workflow for your teams creation requests with your own internal email as a sender to approvers.")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("To implement its approval workflow, SalesTim relies on "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Outlook Actionable Messages"),a("OutboundLink")],1),e._v(" to help approvers manage their approval requests right from their inbox. Outlook Actionable messages are emails that embed "),a("a",{attrs:{href:"https://adaptivecards.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adaptive Cards"),a("OutboundLink")],1),e._v(" in a very secure way, by enforcing both end-user authentication and phishing prevention.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/approval-actionable-message.png",alt:"SalesTim Approval Workflow Actionable Message"}})]),e._v(" "),a("h2",{attrs:{id:"what-do-i-have-to-do"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-do-i-have-to-do"}},[e._v("#")]),e._v(" What do I have to do?")]),e._v(" "),a("p",[e._v("You need to enable the service account that you configured in SalesTim to be authorized to send actionable messages. For that, and to ensure the security around the messages that are sent, Microsoft require to follow these quick steps:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Open the "),a("a",{attrs:{href:"https://aka.ms/publishoam",target:"_blank",rel:"noopener noreferrer"}},[e._v("Actionable Email Developer Dashboard"),a("OutboundLink")],1),e._v(" and login with a Microsoft 365 user with "),a("code",[e._v("Exchange Administrator")]),e._v(" or "),a("code",[e._v("Global administrator")]),e._v(" permissions.")])]),e._v(" "),a("li",[a("p",[e._v("Select "),a("code",[e._v("New provider")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/approval-actionable-message-new-provider-add.png",alt:"SalesTim Approval Actionable Message New Provider 2"}})]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v("Fill the form:")]),e._v(" "),a("ul",[a("li",[e._v("Friendly Name: "),a("code",[e._v("SalesTim")]),e._v(" Or "),a("code",[e._v("Teams Approval")]),e._v(" for example")]),e._v(" "),a("li",[e._v("Provider Id (originator): Copy the value that is "),a("strong",[e._v("Automatically generated")])]),e._v(" "),a("li",[e._v("Organization Info: "),a("strong",[e._v("Automatically generated")])]),e._v(" "),a("li",[e._v("Sender email address from which actionable emails will originate: "),a("strong",[e._v("Your service account email address")])]),e._v(" "),a("li",[e._v("Target URLs: "),a("code",[e._v("https://api.salestim.io")])]),e._v(" "),a("li",[e._v("Public Key:")])]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("RSAKeyValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("Modulus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("k0Qqob12HSdll52CbnXkQNW6nZO9477sE9pI8Y6z5M8hPtJinAf2r41Sxss3Y9oP1nzcfs3fHpi1AUjffyD44I2FxmqF+FGfgKsuWeYce/75Kb1QCEDOwTjP4kqgPD8NeJbWNIe2ZRRKilmxmmUZ6NErNEWvf8vzQvvpVeP9CLUIERuBxLlLlitjNTyCUjgTTkC+giKtmcxTnJ/lUav3erPsev8isS+IQwz6SaXCqj/eYnFkhM2ADF2UCL4ssgHEj6jYe4m8IyMQBgxxr4+4fziixn0uimGQqt54VbT4BToq7l7S8wSj3WNRwR7KBBWvo6pnx39fDMWazfLbe5NmsQ=="),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("Modulus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("Exponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("AQAB"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("Exponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("RSAKeyValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("ul",[a("li",[e._v("Logo: "),a("strong",[e._v("You can use the "),a("a",{attrs:{href:"https://developers.salestim.com/color.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("SalesTim Logo"),a("OutboundLink")],1)])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/approval-actionable-message-new-provider-form.png",alt:"SalesTim Approval Actionable Message New Provider Form"}})]),e._v(" "),a("ul",[a("li",[e._v("Scope of submission: "),a("code",[e._v("Organization")])]),e._v(" "),a("li",[e._v("Additional Information: "),a("strong",[e._v("One of your Microsoft 365 Exchange or Global administrators")]),a("br"),e._v(" "),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Before submitting the form, "),a("em",[a("strong",[e._v("BE SURE TO COPY THE PROVIDER ID VALUE")])])])]),e._v(" "),a("li",[a("p",[e._v('Accept the terms and conditions and hit "Save"')])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/approval-actionable-message-new-provider-form-2.png",alt:"SalesTim Approval Actionable Message New Provider Form 2"}})]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[e._v("Wait for your Microsoft 365 Exchange or Global administrators to approve this request\n"),a("img",{attrs:{src:"/img/nocode/approval-actionable-message-new-provider-pending-approval.png",alt:"SalesTim Approval Actionable Message New Provider Pending Approval"}})])]),e._v(" "),a("li",[a("p",[e._v("Global Admin and Exchange Administrators are then receiving the request in inbox that needs to be approved.")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/approval-actionable-message-new-provider-approval-email.png",alt:"SalesTim Approval Actionable Message New Provider Approval email"}})]),e._v(" "),a("ul",[a("li",[e._v("the administrator needs to approve:")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/approval-actionable-message-new-provider-approve.png",alt:"SalesTim Approval Actionable Message New Provider Approve"}})]),e._v(" "),a("ul",[a("li",[e._v("The Provider is then confirmed as approved")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/approval-actionable-message-new-provider-approved.png",alt:"SalesTim Approval Actionable Message New Provider Approved"}})]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[a("p",[e._v('Open the SalesTim Settings tab and open "Approval"')])]),e._v(" "),a("li",[a("p",[e._v('Paste the provider id you copied in the step 3 and hit "Save"')])])]),e._v(" "),a("p",[e._v("From the SalesTim Catalog, you should now be able to enable the approval workflow on your templates (You may have to refresh the page to see your changes).")]),e._v(" "),a("p",[e._v("For more details about this procedure, you may refer to "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/email-dev-dashboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("Register your service with the actionable email developer dashboard"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"more-about-actionable-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-about-actionable-messages"}},[e._v("#")]),e._v(" More about Actionable Messages")]),e._v(" "),a("h3",{attrs:{id:"what-about-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-about-security"}},[e._v("#")]),e._v(" what about security?")]),e._v(" "),a("ul",[a("li",[e._v("End-user authentication is entirely managed by the Outlook client (Desktop, Web and Mobile) by providing to the actionable message the required token.")]),e._v(" "),a("li",[e._v("Phishing prevention is ensured by using a "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#signed-card-payloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Card Signing"),a("OutboundLink")],1),e._v(" mechanism")])]),e._v(" "),a("h3",{attrs:{id:"how-does-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-works"}},[e._v("#")]),e._v(" How does it works?")]),e._v(" "),a("p",[e._v("Actionable messages security is guaranteed by:")]),e._v(" "),a("ul",[a("li",[e._v("The fact that the actionable message could only be used from the context of a secured Outlook client.")]),e._v(" "),a("li",[e._v("A sender verification is enforced using signed cards. See: "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#sender-verification",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sender verification\n"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Requests sent by the actionable message are verified to ensure that they originate from Microsoft. See: "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-that-requests-come-from-microsoft",target:"_blank",rel:"noopener noreferrer"}},[e._v("Verifying that requests come from Microsoft"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("The token provided by Outlook to the actionable message is used to verify the end-user identity. See: "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-the-identity-of-the-user",target:"_blank",rel:"noopener noreferrer"}},[e._v("Verifying the identity of the user"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("Learn more by reading "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security requirements for actionable messages in Office 365"),a("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);