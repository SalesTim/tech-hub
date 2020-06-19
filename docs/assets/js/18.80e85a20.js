(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{342:function(t,e,a){"use strict";a.r(e);var r=a(18),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"appsapi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appsapi"}},[t._v("#")]),t._v(" AppsApi")]),t._v(" "),a("p",[t._v("All URIs are relative to "),a("em",[t._v("https://api.salestim.io/v1.0")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Method")]),t._v(" "),a("th",[t._v("HTTP request")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/api/reference/Apis/AppsApi.html#createApp"}},[a("strong",[t._v("createApp")])])],1),t._v(" "),a("td",[a("strong",[t._v("POST")]),t._v(" /apps")]),t._v(" "),a("td",[t._v("Create a virtual app")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/api/reference/Apis/AppsApi.html#deleteApp"}},[a("strong",[t._v("deleteApp")])])],1),t._v(" "),a("td",[a("strong",[t._v("DELETE")]),t._v(" /apps/{id}")]),t._v(" "),a("td",[t._v("Delete a virtual app")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/api/reference/Apis/AppsApi.html#getApp"}},[a("strong",[t._v("getApp")])])],1),t._v(" "),a("td",[a("strong",[t._v("GET")]),t._v(" /apps/{id}")]),t._v(" "),a("td",[t._v("Get a virtual app")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/api/reference/Apis/AppsApi.html#getApps"}},[a("strong",[t._v("getApps")])])],1),t._v(" "),a("td",[a("strong",[t._v("GET")]),t._v(" /apps")]),t._v(" "),a("td",[t._v("Get your virtual apps")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/api/reference/Apis/AppsApi.html#regenerateAppSecret"}},[a("strong",[t._v("regenerateAppSecret")])])],1),t._v(" "),a("td",[a("strong",[t._v("POST")]),t._v(" /apps/{id}/regenerateSecret")]),t._v(" "),a("td",[t._v("Regenerate a virtual app secret")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/api/reference/Apis/AppsApi.html#updateApp"}},[a("strong",[t._v("updateApp")])])],1),t._v(" "),a("td",[a("strong",[t._v("PUT")]),t._v(" /apps/{id}")]),t._v(" "),a("td",[t._v("Update a virtual app")])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"createApp"}})]),t._v(" "),a("h1",{attrs:{id:"createapp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createapp"}},[t._v("#")]),t._v(" "),a("strong",[t._v("createApp")])]),t._v(" "),a("blockquote",[a("p",[t._v("App createApp(app)")])]),t._v(" "),a("p",[t._v("Create a virtual app")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Create a new virtual app and get its generated secret. Please note, for obvious security reasons, the app secret will only be accessible once, in the response to this call, but it could later be regenerated using the POST verb on the /apps/{id}/regenerateSecret endpoint.\n")])])]),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("app")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/api/reference//Models/App.html"}},[a("strong",[t._v("App")])])],1),t._v(" "),a("td",[t._v("List of properties and values to be updated.")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"return-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-type"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/reference//Models/App.html"}},[a("strong",[t._v("App")])])],1),t._v(" "),a("h3",{attrs:{id:"authorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/reference/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),a("h3",{attrs:{id:"http-request-headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Content-Type")]),t._v(": application/json")]),t._v(" "),a("li",[a("strong",[t._v("Accept")]),t._v(": application/json")])]),t._v(" "),a("p",[a("a",{attrs:{name:"deleteApp"}})]),t._v(" "),a("h1",{attrs:{id:"deleteapp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deleteapp"}},[t._v("#")]),t._v(" "),a("strong",[t._v("deleteApp")])]),t._v(" "),a("blockquote",[a("p",[t._v("deleteApp(id)")])]),t._v(" "),a("p",[t._v("Delete a virtual app")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Delete a virtual app.\n")])])]),a("h3",{attrs:{id:"parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("id")])]),t._v(" "),a("td",[a("strong",[t._v("String")])]),t._v(" "),a("td",[t._v("ID of the virtual app to delete.")]),t._v(" "),a("td",[t._v("[default to null]")])])])]),t._v(" "),a("h3",{attrs:{id:"return-type-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-type-2"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),a("p",[t._v("null (empty response body)")]),t._v(" "),a("h3",{attrs:{id:"authorization-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization-2"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/reference/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),a("h3",{attrs:{id:"http-request-headers-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers-2"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Content-Type")]),t._v(": Not defined")]),t._v(" "),a("li",[a("strong",[t._v("Accept")]),t._v(": Not defined")])]),t._v(" "),a("p",[a("a",{attrs:{name:"getApp"}})]),t._v(" "),a("h1",{attrs:{id:"getapp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getapp"}},[t._v("#")]),t._v(" "),a("strong",[t._v("getApp")])]),t._v(" "),a("blockquote",[a("p",[t._v("App getApp(id)")])]),t._v(" "),a("p",[t._v("Get a virtual app")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Get a virtual app.\n")])])]),a("h3",{attrs:{id:"parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("id")])]),t._v(" "),a("td",[a("strong",[t._v("String")])]),t._v(" "),a("td",[t._v("The virtual app ID.")]),t._v(" "),a("td",[t._v("[default to null]")])])])]),t._v(" "),a("h3",{attrs:{id:"return-type-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-type-3"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/reference//Models/App.html"}},[a("strong",[t._v("App")])])],1),t._v(" "),a("h3",{attrs:{id:"authorization-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization-3"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/reference/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),a("h3",{attrs:{id:"http-request-headers-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers-3"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Content-Type")]),t._v(": Not defined")]),t._v(" "),a("li",[a("strong",[t._v("Accept")]),t._v(": application/json")])]),t._v(" "),a("p",[a("a",{attrs:{name:"getApps"}})]),t._v(" "),a("h1",{attrs:{id:"getapps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getapps"}},[t._v("#")]),t._v(" "),a("strong",[t._v("getApps")])]),t._v(" "),a("blockquote",[a("p",[t._v("List getApps()")])]),t._v(" "),a("p",[t._v("Get your virtual apps")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Get all virtual apps associated with your tenant. Please note, apps could be created using the POST verb on the /apps endpoint.\n")])])]),a("h3",{attrs:{id:"parameters-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("p",[t._v("This endpoint does not need any parameter.")]),t._v(" "),a("h3",{attrs:{id:"return-type-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-type-4"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/reference//Models/App.html"}},[a("strong",[t._v("List")])])],1),t._v(" "),a("h3",{attrs:{id:"authorization-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization-4"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/reference/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),a("h3",{attrs:{id:"http-request-headers-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers-4"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Content-Type")]),t._v(": Not defined")]),t._v(" "),a("li",[a("strong",[t._v("Accept")]),t._v(": application/json")])]),t._v(" "),a("p",[a("a",{attrs:{name:"regenerateAppSecret"}})]),t._v(" "),a("h1",{attrs:{id:"regenerateappsecret"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regenerateappsecret"}},[t._v("#")]),t._v(" "),a("strong",[t._v("regenerateAppSecret")])]),t._v(" "),a("blockquote",[a("p",[t._v("App regenerateAppSecret(id)")])]),t._v(" "),a("p",[t._v("Regenerate a virtual app secret")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Regenerate a virtual app secret.\n")])])]),a("h3",{attrs:{id:"parameters-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-5"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("id")])]),t._v(" "),a("td",[a("strong",[t._v("String")])]),t._v(" "),a("td",[t._v("The virtual app ID.")]),t._v(" "),a("td",[t._v("[default to null]")])])])]),t._v(" "),a("h3",{attrs:{id:"return-type-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-type-5"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/reference//Models/App.html"}},[a("strong",[t._v("App")])])],1),t._v(" "),a("h3",{attrs:{id:"authorization-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization-5"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/reference/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),a("h3",{attrs:{id:"http-request-headers-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers-5"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Content-Type")]),t._v(": Not defined")]),t._v(" "),a("li",[a("strong",[t._v("Accept")]),t._v(": application/json")])]),t._v(" "),a("p",[a("a",{attrs:{name:"updateApp"}})]),t._v(" "),a("h1",{attrs:{id:"updateapp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updateapp"}},[t._v("#")]),t._v(" "),a("strong",[t._v("updateApp")])]),t._v(" "),a("blockquote",[a("p",[t._v("App updateApp(id, app)")])]),t._v(" "),a("p",[t._v("Update a virtual app")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Update a virtual app.\n")])])]),a("h3",{attrs:{id:"parameters-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-6"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("id")])]),t._v(" "),a("td",[a("strong",[t._v("String")])]),t._v(" "),a("td",[t._v("ID of the virtual app to update.")]),t._v(" "),a("td",[t._v("[default to null]")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("app")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/api/reference//Models/App.html"}},[a("strong",[t._v("App")])])],1),t._v(" "),a("td",[t._v("List of properties and values to be updated. Please note that some properties are readonly and therefore will be ignored.")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"return-type-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-type-6"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/reference//Models/App.html"}},[a("strong",[t._v("App")])])],1),t._v(" "),a("h3",{attrs:{id:"authorization-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization-6"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/reference/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),a("h3",{attrs:{id:"http-request-headers-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers-6"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Content-Type")]),t._v(": application/json")]),t._v(" "),a("li",[a("strong",[t._v("Accept")]),t._v(": application/json")])])])}),[],!1,null,null,null);e.default=s.exports}}]);