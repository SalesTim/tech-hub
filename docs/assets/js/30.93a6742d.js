(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{499:function(e,t,a){"use strict";a.r(t);var s=a(18),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started-with-salestim-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-salestim-api"}},[e._v("#")]),e._v(" Getting Started with SalesTim API")]),e._v(" "),a("Classification",{attrs:{label:"public"}}),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("TABLE OF CONTENTS")]),a("br")]),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#use-api-explorer-to-get-to-know-the-api"}},[e._v("Use API Explorer to get to know the API")])]),a("li",[a("a",{attrs:{href:"#authenticate-with-salestim-api"}},[e._v("Authenticate with SalesTim API")]),a("ul",[a("li",[a("a",{attrs:{href:"#anonymous-access"}},[e._v("Anonymous Access")])]),a("li",[a("a",{attrs:{href:"#oauth-jwt-aka-delegated-mode"}},[e._v('OAuth + JWT (aka "delegated mode")')])]),a("li",[a("a",{attrs:{href:"#api-keys-aka-application-mode"}},[e._v('API Keys (aka "application mode")')])])])])])]),a("p"),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("This article describes the basic aspects and the keys to start working with the SalesTim API.")]),e._v(" "),a("h2",{attrs:{id:"use-api-explorer-to-get-to-know-the-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-api-explorer-to-get-to-know-the-api"}},[e._v("#")]),e._v(" Use API Explorer to get to know the API")]),e._v(" "),a("p",[e._v("The easiest way to start exploring the data and services available through SalesTim API is to use "),a("a",{attrs:{href:"/api/explorer"}},[e._v("API Explorer")]),e._v("."),a("br"),e._v("\nAPI Explorer lets you craft REST requests, adapt the HTTP request headers, and see the data responses.")]),e._v(" "),a("h2",{attrs:{id:"authenticate-with-salestim-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authenticate-with-salestim-api"}},[e._v("#")]),e._v(" Authenticate with SalesTim API")]),e._v(" "),a("p",[e._v("Data and services in SalesTim API are exposed through different endpoints, that may use three different authentication schemes."),a("br"),e._v("\nIn this article, you'll only get an overview, therefore please refer to the "),a("a",{attrs:{href:"/api/explorer"}},[e._v("API Explorer")]),e._v(" to identify the authentication scheme for each endpoint.")]),e._v(" "),a("h3",{attrs:{id:"anonymous-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-access"}},[e._v("#")]),e._v(" Anonymous Access")]),e._v(" "),a("p",[e._v("Anonymous access is enabled for endpoints related to the public "),a("a",{attrs:{href:"https://store.salestim.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Template Store"),a("OutboundLink")],1),e._v(" (read-only access only).")]),e._v(" "),a("blockquote",[a("p",[e._v("Applies to endpoints under "),a("code",[e._v("/store")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"oauth-jwt-aka-delegated-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oauth-jwt-aka-delegated-mode"}},[e._v("#")]),e._v(' OAuth + JWT (aka "delegated mode")')]),e._v(" "),a("p",[e._v("OAuth is primarily used to authenticate the SalesTim Platform administrators and catalog managers using Azure AD to manage the corporate catalog of templates and the virtual apps.")]),e._v(" "),a("blockquote",[a("p",[e._v("Applies to endpoints under "),a("code",[e._v("/apps")]),e._v(" and "),a("code",[e._v("/catalog")])])]),e._v(" "),a("p",[e._v("A valid Microsoft 365 access token issued by Azure AD is required, and expected by SalesTim API in the HTTP "),a("code",[e._v("Authorization")]),e._v(" request header with a "),a("code",[e._v("bearer")]),e._v(" token such as:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("Authorization")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"bearer <JWT_TOKEN>"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h3",{attrs:{id:"api-keys-aka-application-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-keys-aka-application-mode"}},[e._v("#")]),e._v(' API Keys (aka "application mode")')]),e._v(" "),a("p",[e._v("API keys are used by SalesTim virtual apps to access the SalesTim API securely.")]),e._v(" "),a("blockquote",[a("p",[e._v("Applies to endpoints under "),a("code",[e._v("/catalog")]),e._v(" and "),a("code",[e._v("/jobs")])])]),e._v(" "),a("p",[e._v("SalesTim API expects one header to authenticate virtual apps:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("X-API-KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<API_KEY>"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The virtual app api key")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("The app ID ("),a("code",[e._v("<APP_ID>")]),e._v(") and API key ("),a("code",[e._v("<API_KEY>")]),e._v(") could be obtained by making a POST to "),a("code",[e._v("/apps")]),e._v(" to create a virtual app."),a("br"),e._v("\nTry it in our "),a("RouterLink",{attrs:{to:"/api/explorer.html#/Apps/CreateApp"}},[e._v("API Explorer")])],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("API Key")]),e._v(" "),a("p",[e._v("For obvious security reasons, the api key is only accessible at the creation of a virtual and cannot be retreived later."),a("br"),e._v("\nThe API key could also be regenerated at any time by making a POST to "),a("code",[e._v("/apps/{id}/regenerateSecret")])])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);