(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{350:function(t,e,a){"use strict";a.r(e);var s=a(33),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started-with-salestim-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-salestim-api"}},[t._v("#")]),t._v(" Getting Started with SalesTim API")]),t._v(" "),a("Classification",{attrs:{label:"public"}}),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("TABLE OF CONTENTS")]),a("br")]),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#use-api-explorer-to-get-to-know-the-api"}},[t._v("Use API Explorer to get to know the API")])]),a("li",[a("a",{attrs:{href:"#authenticate-with-salestim-api"}},[t._v("Authenticate with SalesTim API")]),a("ul",[a("li",[a("a",{attrs:{href:"#anonymous-access"}},[t._v("Anonymous Access")])]),a("li",[a("a",{attrs:{href:"#oauth-jwt"}},[t._v("OAuth + JWT")])]),a("li",[a("a",{attrs:{href:"#api-keys"}},[t._v("API Keys")])])])])])]),a("p"),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("This article describes the basic aspects and the keys to start working with the SalesTim API.")]),t._v(" "),a("h2",{attrs:{id:"use-api-explorer-to-get-to-know-the-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-api-explorer-to-get-to-know-the-api"}},[t._v("#")]),t._v(" Use API Explorer to get to know the API")]),t._v(" "),a("p",[t._v("The easiest way to start exploring the data and services available through SalesTim API is to use "),a("a",{attrs:{href:"/api/explorer"}},[t._v("API Explorer")]),t._v("."),a("br"),t._v("\nAPI Explorer lets you craft REST requests, adapt the HTTP request headers, and see the data responses.")]),t._v(" "),a("h2",{attrs:{id:"authenticate-with-salestim-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authenticate-with-salestim-api"}},[t._v("#")]),t._v(" Authenticate with SalesTim API")]),t._v(" "),a("p",[t._v("Data and services in SalesTim API are exposed through different endpoints, that may use three different authentication schemes."),a("br"),t._v("\nIn this article, you'll only get an overview, therefore please refer to the "),a("a",{attrs:{href:"/api/explorer"}},[t._v("API Explorer")]),t._v(" to identify the authentication scheme for each endpoint.")]),t._v(" "),a("h3",{attrs:{id:"anonymous-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-access"}},[t._v("#")]),t._v(" Anonymous Access")]),t._v(" "),a("p",[t._v("Anonymous access is enabled for endpoints related to the public "),a("a",{attrs:{href:"https://store.salestim.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Template Store"),a("OutboundLink")],1),t._v(" (read-only access only).")]),t._v(" "),a("blockquote",[a("p",[t._v("Applies to endpoints under "),a("code",[t._v("/store")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"oauth-jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oauth-jwt"}},[t._v("#")]),t._v(" OAuth + JWT")]),t._v(" "),a("p",[t._v("OAuth is primarily used to authenticate the SalesTim Platform administrators and catalog managers using Azure AD to manage the corporate catalog of templates and the virtual apps.")]),t._v(" "),a("blockquote",[a("p",[t._v("Applies to endpoints under "),a("code",[t._v("/apps")]),t._v(" and "),a("code",[t._v("/catalog")])])]),t._v(" "),a("p",[t._v("A valid Microsoft 365 access token issued by Azure AD is required, and expected by SalesTim API in the HTTP "),a("code",[t._v("Authorization")]),t._v(" request header with a "),a("code",[t._v("bearer")]),t._v(" token such as:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Authorization")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bearer <JWT_TOKEN>"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"api-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-keys"}},[t._v("#")]),t._v(" API Keys")]),t._v(" "),a("p",[t._v("API keys are used by SalesTim virtual apps to access the SalesTim API securely.")]),t._v(" "),a("blockquote",[a("p",[t._v("Applies to endpoints under "),a("code",[t._v("/catalog")]),t._v(" and "),a("code",[t._v("/jobs")])])]),t._v(" "),a("p",[t._v("SalesTim API expects two headers to authenticate virtual apps:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("X-APP-ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<APP_ID>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The virtual app id")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("X-API-KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<API_KEY>"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The virtual app api key")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The app ID ("),a("code",[t._v("<APP_ID>")]),t._v(") and API key ("),a("code",[t._v("<API_KEY>")]),t._v(") could be obtained by making a POST to "),a("code",[t._v("/apps")]),t._v(" to create a virtual app."),a("br"),t._v("\nTry it in our "),a("RouterLink",{attrs:{to:"/api/explorer.html#/Apps/CreateApp"}},[t._v("API Explorer")])],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("API Key")]),t._v(" "),a("p",[t._v("For obvious security reasons, the api key is only accessible at the creation of a virtual and cannot be retreived later."),a("br"),t._v("\nThe API key could also be regenerated at any time by making a POST to "),a("code",[t._v("/apps/{id}/regenerateSecret")])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);