(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{734:function(t,s,a){"use strict";a.r(s);var e=a(26),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"psopenapitools-psopenapitools-api-labelsapi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#psopenapitools-psopenapitools-api-labelsapi"}},[t._v("#")]),t._v(" PSOpenAPITools.PSOpenAPITools/Api.LabelsApi")]),t._v(" "),a("p",[t._v("All URIs are relative to "),a("em",[t._v("https://api.salestim.io/v1.0")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Method")]),t._v(" "),a("th",[t._v("HTTP request")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/api/sdks/powershell/docs/LabelsApi.html#Get-MyLabels"}},[a("strong",[t._v("Get-MyLabels")])])],1),t._v(" "),a("td",[a("strong",[t._v("GET")]),t._v(" /me/labels")]),t._v(" "),a("td",[t._v("Get my sensitivity labels")])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"Get-MyLabels"}})]),t._v(" "),a("h1",{attrs:{id:"get-mylabels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-mylabels"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Get-MyLabels")])]),t._v(" "),a("blockquote",[a("p",[t._v("Labels Get-MyLabels"),a("br")])]),t._v(" "),a("p",[t._v("Get my sensitivity labels")]),t._v(" "),a("p",[t._v("Get my Microsoft 365 sensitivity labels. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# general setting of the PowerShell module, e.g. base URL, authentication, etc")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Configuration")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Configure HTTP basic authorization: bearerAuth")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Username = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_USERNAME"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Password = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_PASSWORD"')]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get my sensitivity labels")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Result")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-MyLabels")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Exception occured when calling Get-MyLabels: {0}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrorDetails "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConvertFrom-Json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Response headers: {0}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Headers "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConvertTo-Json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("p",[t._v("This endpoint does not need any parameter.")]),t._v(" "),a("h3",{attrs:{id:"return-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-type"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),a("h1",{attrs:{id:"cmdlet-returns-pscustomobject-the-return-object-contains-the-properties-of-below-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmdlet-returns-pscustomobject-the-return-object-contains-the-properties-of-below-type"}},[t._v("#")]),t._v(" cmdlet returns PSCustomObject, the return object contains the properties of below type")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/sdks/powershell/docs/Labels.html"}},[a("strong",[t._v("Labels")])])],1),t._v(" "),a("h3",{attrs:{id:"authorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/sdks/powershell/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),a("h3",{attrs:{id:"http-request-headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Content-Type")]),t._v(": Not defined")]),t._v(" "),a("li",[a("strong",[t._v("Accept")]),t._v(": application/json")])]),t._v(" "),a("p",[a("a",{attrs:{href:"#"}},[t._v("[Back to top]")]),t._v(" "),a("RouterLink",{attrs:{to:"/api/sdks/powershell/#documentation-for-api-endpoints"}},[t._v("[Back to API list]")]),t._v(" "),a("RouterLink",{attrs:{to:"/api/sdks/powershell/#documentation-for-models"}},[t._v("[Back to Model list]")]),t._v(" "),a("RouterLink",{attrs:{to:"/api/sdks/powershell/"}},[t._v("[Back to README]")])],1)])}),[],!1,null,null,null);s.default=n.exports}}]);