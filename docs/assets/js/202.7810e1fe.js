(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{757:function(t,s,e){"use strict";e.r(s);var a=e(26),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"psopenapitools-psopenapitools-api-usersapi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#psopenapitools-psopenapitools-api-usersapi"}},[t._v("#")]),t._v(" PSOpenAPITools.PSOpenAPITools/Api.UsersApi")]),t._v(" "),e("p",[t._v("All URIs are relative to "),e("em",[t._v("https://api.salestim.io/v1.0")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Method")]),t._v(" "),e("th",[t._v("HTTP request")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("RouterLink",{attrs:{to:"/api/sdks/powershell/docs/UsersApi.html#Get-Users"}},[e("strong",[t._v("Get-Users")])])],1),t._v(" "),e("td",[e("strong",[t._v("GET")]),t._v(" /users")]),t._v(" "),e("td",[t._v("Retreive users from your Microsoft 365 environment")])])])]),t._v(" "),e("p",[e("a",{attrs:{name:"Get-Users"}})]),t._v(" "),e("h1",{attrs:{id:"get-users"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-users"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Get-Users")])]),t._v(" "),e("blockquote",[e("p",[t._v("Users Get-Users"),e("br")])]),t._v(" "),e("p",[t._v("Retreive users from your Microsoft 365 environment")]),t._v(" "),e("p",[t._v("Retreive users from your Microsoft 365 environment. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.")]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# general setting of the PowerShell module, e.g. base URL, authentication, etc")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Configuration")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Configuration")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Configure HTTP basic authorization: bearerAuth")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Configuration")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Username = "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_USERNAME"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Configuration")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Password = "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_PASSWORD"')]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Retreive users from your Microsoft 365 environment")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Result")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Users")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Exception occured when calling Get-Users: {0}"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrorDetails "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConvertFrom-Json")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Response headers: {0}"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Exception"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Headers "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConvertTo-Json")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("p",[t._v("This endpoint does not need any parameter.")]),t._v(" "),e("h3",{attrs:{id:"return-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#return-type"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),e("h1",{attrs:{id:"cmdlet-returns-pscustomobject-the-return-object-contains-the-properties-of-below-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmdlet-returns-pscustomobject-the-return-object-contains-the-properties-of-below-type"}},[t._v("#")]),t._v(" cmdlet returns PSCustomObject, the return object contains the properties of below type")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/sdks/powershell/docs/Users.html"}},[e("strong",[t._v("Users")])])],1),t._v(" "),e("h3",{attrs:{id:"authorization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/sdks/powershell/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),e("h3",{attrs:{id:"http-request-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Content-Type")]),t._v(": Not defined")]),t._v(" "),e("li",[e("strong",[t._v("Accept")]),t._v(": application/json")])]),t._v(" "),e("p",[e("a",{attrs:{href:"#"}},[t._v("[Back to top]")]),t._v(" "),e("RouterLink",{attrs:{to:"/api/sdks/powershell/#documentation-for-api-endpoints"}},[t._v("[Back to API list]")]),t._v(" "),e("RouterLink",{attrs:{to:"/api/sdks/powershell/#documentation-for-models"}},[t._v("[Back to Model list]")]),t._v(" "),e("RouterLink",{attrs:{to:"/api/sdks/powershell/"}},[t._v("[Back to README]")])],1)])}),[],!1,null,null,null);s.default=r.exports}}]);