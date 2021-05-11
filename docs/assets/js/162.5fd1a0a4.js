(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{713:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"salestimapi-webhooksapi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#salestimapi-webhooksapi"}},[t._v("#")]),t._v(" SalesTimApi.WebhooksApi")]),t._v(" "),s("p",[t._v("All URIs are relative to "),s("em",[t._v("https://api.salestim.io/v1.0")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Method")]),t._v(" "),s("th",[t._v("HTTP request")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("RouterLink",{attrs:{to:"/api/sdks/node/docs/WebhooksApi.html#createHook"}},[s("strong",[t._v("createHook")])])],1),t._v(" "),s("td",[s("strong",[t._v("POST")]),t._v(" /hooks")]),t._v(" "),s("td",[t._v("Create a new webhook")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/api/sdks/node/docs/WebhooksApi.html#deleteHook"}},[s("strong",[t._v("deleteHook")])])],1),t._v(" "),s("td",[s("strong",[t._v("DELETE")]),t._v(" /hooks/{hookId}")]),t._v(" "),s("td",[t._v("Delete a webhook")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/api/sdks/node/docs/WebhooksApi.html#generateHookSignature"}},[s("strong",[t._v("generateHookSignature")])])],1),t._v(" "),s("td",[s("strong",[t._v("POST")]),t._v(" /hooks/signature")]),t._v(" "),s("td",[t._v("Generate a signature from a secret and a webhook payload")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/api/sdks/node/docs/WebhooksApi.html#getHooksEvents"}},[s("strong",[t._v("getHooksEvents")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /hooks/events")]),t._v(" "),s("td",[t._v("Get webhooks events")])])])]),t._v(" "),s("h2",{attrs:{id:"createhook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createhook"}},[t._v("#")]),t._v(" createHook")]),t._v(" "),s("blockquote",[s("p",[t._v("Hook createHook(hookPayload)")])]),t._v(" "),s("p",[t._v("Create a new webhook")]),t._v(" "),s("p",[t._v("Create a new webhook. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.")]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SalesTimApi "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sales_tim_api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" defaultClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SalesTimApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApiClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configure Bearer (JWT) access token for authorization: bearerAuth")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bearerAuth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" defaultClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authentications"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bearerAuth'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbearerAuth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accessToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR ACCESS TOKEN"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" apiInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SalesTimApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebhooksApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" hookPayload "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SalesTimApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HookPayload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HookPayload | A HookPayload object.")]),t._v("\napiInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hookPayload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'API called successfully. Returned data: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("hookPayload")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/sdks/node/docs/HookPayload.html"}},[s("strong",[t._v("HookPayload")])])],1),t._v(" "),s("td",[t._v("A HookPayload object.")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"return-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-type"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/api/sdks/node/docs/Hook.html"}},[s("strong",[t._v("Hook")])])],1),t._v(" "),s("h3",{attrs:{id:"authorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/api/sdks/node/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),s("h3",{attrs:{id:"http-request-headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Content-Type")]),t._v(": application/json")]),t._v(" "),s("li",[s("strong",[t._v("Accept")]),t._v(": application/json")])]),t._v(" "),s("h2",{attrs:{id:"deletehook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deletehook"}},[t._v("#")]),t._v(" deleteHook")]),t._v(" "),s("blockquote",[s("p",[t._v("Hook deleteHook(hookId)")])]),t._v(" "),s("p",[t._v("Delete a webhook")]),t._v(" "),s("p",[t._v("Delete a webhook. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.")]),t._v(" "),s("h3",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SalesTimApi "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sales_tim_api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" defaultClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SalesTimApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApiClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configure Bearer (JWT) access token for authorization: bearerAuth")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bearerAuth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" defaultClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authentications"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bearerAuth'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbearerAuth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accessToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR ACCESS TOKEN"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" apiInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SalesTimApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebhooksApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" hookId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hookId_example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// String | ID of the webhook to be deleted.")]),t._v("\napiInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hookId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'API called successfully. Returned data: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("hookId")])]),t._v(" "),s("td",[s("strong",[t._v("String")])]),t._v(" "),s("td",[t._v("ID of the webhook to be deleted.")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"return-type-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-type-2"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/api/sdks/node/docs/Hook.html"}},[s("strong",[t._v("Hook")])])],1),t._v(" "),s("h3",{attrs:{id:"authorization-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorization-2"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/api/sdks/node/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),s("h3",{attrs:{id:"http-request-headers-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers-2"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Content-Type")]),t._v(": Not defined")]),t._v(" "),s("li",[s("strong",[t._v("Accept")]),t._v(": application/json")])]),t._v(" "),s("h2",{attrs:{id:"generatehooksignature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generatehooksignature"}},[t._v("#")]),t._v(" generateHookSignature")]),t._v(" "),s("blockquote",[s("p",[t._v("HookSignature generateHookSignature(hookSignatureRequest)")])]),t._v(" "),s("p",[t._v("Generate a signature from a secret and a webhook payload")]),t._v(" "),s("p",[t._v("Generate a signature from a secret and a webhook payload. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.")]),t._v(" "),s("h3",{attrs:{id:"example-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SalesTimApi "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sales_tim_api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" defaultClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SalesTimApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApiClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configure Bearer (JWT) access token for authorization: bearerAuth")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bearerAuth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" defaultClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authentications"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bearerAuth'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbearerAuth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accessToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR ACCESS TOKEN"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" apiInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SalesTimApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebhooksApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" hookSignatureRequest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SalesTimApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HookSignatureRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HookSignatureRequest | A HookSignatureRequest object comprised of the secret and payload.")]),t._v("\napiInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateHookSignature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hookSignatureRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'API called successfully. Returned data: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"parameters-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("hookSignatureRequest")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/sdks/node/docs/HookSignatureRequest.html"}},[s("strong",[t._v("HookSignatureRequest")])])],1),t._v(" "),s("td",[t._v("A HookSignatureRequest object comprised of the secret and payload.")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"return-type-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-type-3"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/api/sdks/node/docs/HookSignature.html"}},[s("strong",[t._v("HookSignature")])])],1),t._v(" "),s("h3",{attrs:{id:"authorization-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorization-3"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/api/sdks/node/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),s("h3",{attrs:{id:"http-request-headers-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers-3"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Content-Type")]),t._v(": application/json")]),t._v(" "),s("li",[s("strong",[t._v("Accept")]),t._v(": application/json")])]),t._v(" "),s("h2",{attrs:{id:"gethooksevents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gethooksevents"}},[t._v("#")]),t._v(" getHooksEvents")]),t._v(" "),s("blockquote",[s("p",[t._v("HooksEvents getHooksEvents()")])]),t._v(" "),s("p",[t._v("Get webhooks events")]),t._v(" "),s("p",[t._v("Get webhooks events. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.")]),t._v(" "),s("h3",{attrs:{id:"example-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SalesTimApi "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sales_tim_api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" defaultClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SalesTimApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApiClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configure Bearer (JWT) access token for authorization: bearerAuth")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bearerAuth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" defaultClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authentications"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bearerAuth'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbearerAuth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accessToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR ACCESS TOKEN"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" apiInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SalesTimApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebhooksApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napiInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHooksEvents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'API called successfully. Returned data: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"parameters-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("p",[t._v("This endpoint does not need any parameter.")]),t._v(" "),s("h3",{attrs:{id:"return-type-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-type-4"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/api/sdks/node/docs/HooksEvents.html"}},[s("strong",[t._v("HooksEvents")])])],1),t._v(" "),s("h3",{attrs:{id:"authorization-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorization-4"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/api/sdks/node/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),s("h3",{attrs:{id:"http-request-headers-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers-4"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Content-Type")]),t._v(": Not defined")]),t._v(" "),s("li",[s("strong",[t._v("Accept")]),t._v(": application/json")])])])}),[],!1,null,null,null);a.default=n.exports}}]);