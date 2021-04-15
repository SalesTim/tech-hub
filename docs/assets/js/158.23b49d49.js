(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{713:function(t,a,e){"use strict";e.r(a);var s=e(26),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"psopenapitools-psopenapitools-api-catalogapi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#psopenapitools-psopenapitools-api-catalogapi"}},[t._v("#")]),t._v(" PSOpenAPITools.PSOpenAPITools/Api.CatalogApi")]),t._v(" "),e("p",[t._v("All URIs are relative to "),e("em",[t._v("https://api.salestim.io/v1.0")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Method")]),t._v(" "),e("th",[t._v("HTTP request")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("RouterLink",{attrs:{to:"/api/sdks/powershell/docs/CatalogApi.html#Get-CatalogTemplates"}},[e("strong",[t._v("Get-CatalogTemplates")])])],1),t._v(" "),e("td",[e("strong",[t._v("GET")]),t._v(" /catalog/templates")]),t._v(" "),e("td",[t._v("Get teams templates")])]),t._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/api/sdks/powershell/docs/CatalogApi.html#Get-MyCatalogTemplates"}},[e("strong",[t._v("Get-MyCatalogTemplates")])])],1),t._v(" "),e("td",[e("strong",[t._v("GET")]),t._v(" /me/catalog/templates")]),t._v(" "),e("td",[t._v("Get my teams templates")])])])]),t._v(" "),e("p",[e("a",{attrs:{name:"Get-CatalogTemplates"}})]),t._v(" "),e("h1",{attrs:{id:"get-catalogtemplates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-catalogtemplates"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Get-CatalogTemplates")])]),t._v(" "),e("blockquote",[e("p",[t._v("CatalogTemplates Get-CatalogTemplates"),e("br"),t._v("\n        [-Language] "),e("String",[e("br")])],1)]),t._v(" "),e("p",[t._v("Get teams templates")]),t._v(" "),e("p",[t._v("Get all the teams templates accessible in your organization. TIER 2️⃣ | ROLES - AUTHORIZED_APP, CATALOG_MANAGER, INTEGRATION_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.")]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# general setting of the PowerShell module, e.g. base URL, authentication, etc")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Configuration")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Configuration")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Configure HTTP basic authorization: bearerAuth")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Configuration")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Username = "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_USERNAME"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Configuration")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Password = "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_PASSWORD"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Language")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Language_example"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# String | Optional. Default to 'en'. Language code to be used to filter the colection of templates, for instance 'en' or 'en-uk'. (optional)")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get teams templates")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Result")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-CatalogTemplates")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Language")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Exception occured when calling Get-CatalogTemplates: {0}"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrorDetails "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConvertFrom-Json")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Response headers: {0}"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Exception"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Headers "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConvertTo-Json")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Notes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("Language")])]),t._v(" "),e("td",[e("strong",[t._v("String")])]),t._v(" "),e("td",[t._v("Optional. Default to 'en'. Language code to be used to filter the colection of templates, for instance 'en' or 'en-uk'.")]),t._v(" "),e("td",[t._v("[optional]")])])])]),t._v(" "),e("h3",{attrs:{id:"return-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#return-type"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),e("h1",{attrs:{id:"cmdlet-returns-pscustomobject-the-return-object-contains-the-properties-of-below-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmdlet-returns-pscustomobject-the-return-object-contains-the-properties-of-below-type"}},[t._v("#")]),t._v(" cmdlet returns PSCustomObject, the return object contains the properties of below type")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/sdks/powershell/docs/CatalogTemplates.html"}},[e("strong",[t._v("CatalogTemplates")])])],1),t._v(" "),e("h3",{attrs:{id:"authorization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/sdks/powershell/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),e("h3",{attrs:{id:"http-request-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Content-Type")]),t._v(": Not defined")]),t._v(" "),e("li",[e("strong",[t._v("Accept")]),t._v(": application/json")])]),t._v(" "),e("p",[e("a",{attrs:{href:"#"}},[t._v("[Back to top]")]),t._v(" "),e("RouterLink",{attrs:{to:"/api/sdks/powershell/#documentation-for-api-endpoints"}},[t._v("[Back to API list]")]),t._v(" "),e("RouterLink",{attrs:{to:"/api/sdks/powershell/#documentation-for-models"}},[t._v("[Back to Model list]")]),t._v(" "),e("RouterLink",{attrs:{to:"/api/sdks/powershell/"}},[t._v("[Back to README]")])],1),t._v(" "),e("p",[e("a",{attrs:{name:"Get-MyCatalogTemplates"}})]),t._v(" "),e("h1",{attrs:{id:"get-mycatalogtemplates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-mycatalogtemplates"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Get-MyCatalogTemplates")])]),t._v(" "),e("blockquote",[e("p",[t._v("CatalogTemplates Get-MyCatalogTemplates"),e("br"),t._v("\n        [-Language] "),e("String",[e("br")])],1)]),t._v(" "),e("p",[t._v("Get my teams templates")]),t._v(" "),e("p",[t._v("Get teams templates accessible to the connected user filtered by the audience targeting rules. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.")]),t._v(" "),e("h3",{attrs:{id:"example-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# general setting of the PowerShell module, e.g. base URL, authentication, etc")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Configuration")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Configuration")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Configure HTTP basic authorization: bearerAuth")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Configuration")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Username = "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_USERNAME"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Configuration")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Password = "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_PASSWORD"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Language")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Language_example"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# String | Optional. Default to 'en'. Language code to be used to filter the colection of templates, for instance 'en' or 'en-uk'. (optional)")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get my teams templates")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Result")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-MyCatalogTemplates")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Language")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Exception occured when calling Get-MyCatalogTemplates: {0}"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrorDetails "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConvertFrom-Json")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Response headers: {0}"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Exception"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Headers "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConvertTo-Json")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Notes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("Language")])]),t._v(" "),e("td",[e("strong",[t._v("String")])]),t._v(" "),e("td",[t._v("Optional. Default to 'en'. Language code to be used to filter the colection of templates, for instance 'en' or 'en-uk'.")]),t._v(" "),e("td",[t._v("[optional]")])])])]),t._v(" "),e("h3",{attrs:{id:"return-type-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#return-type-2"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),e("h1",{attrs:{id:"cmdlet-returns-pscustomobject-the-return-object-contains-the-properties-of-below-type-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmdlet-returns-pscustomobject-the-return-object-contains-the-properties-of-below-type-2"}},[t._v("#")]),t._v(" cmdlet returns PSCustomObject, the return object contains the properties of below type")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/sdks/powershell/docs/CatalogTemplates.html"}},[e("strong",[t._v("CatalogTemplates")])])],1),t._v(" "),e("h3",{attrs:{id:"authorization-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authorization-2"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/sdks/powershell/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),e("h3",{attrs:{id:"http-request-headers-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers-2"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Content-Type")]),t._v(": Not defined")]),t._v(" "),e("li",[e("strong",[t._v("Accept")]),t._v(": application/json")])]),t._v(" "),e("p",[e("a",{attrs:{href:"#"}},[t._v("[Back to top]")]),t._v(" "),e("RouterLink",{attrs:{to:"/api/sdks/powershell/#documentation-for-api-endpoints"}},[t._v("[Back to API list]")]),t._v(" "),e("RouterLink",{attrs:{to:"/api/sdks/powershell/#documentation-for-models"}},[t._v("[Back to Model list]")]),t._v(" "),e("RouterLink",{attrs:{to:"/api/sdks/powershell/"}},[t._v("[Back to README]")])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);