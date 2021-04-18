(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{542:function(t,a,e){"use strict";var i=e(177),s=e(6),n=e(27),l=e(543),r=e(178);i("search",1,(function(t,a,e){return[function(a){var e=n(this),i=null==a?void 0:a[t];return void 0!==i?i.call(a,e):new RegExp(a)[t](String(e))},function(t){var i=e(a,t,this);if(i.done)return i.value;var n=s(t),o=String(this),u=n.lastIndex;l(u,0)||(n.lastIndex=0);var d=r(n,o);return l(n.lastIndex,u)||(n.lastIndex=u),null===d?-1:d.index}]}))},543:function(t,a){t.exports=Object.is||function(t,a){return t===a?0!==t||1/t==1/a:t!=t&&a!=a}},562:function(t,a,e){"use strict";e.r(a);e(9),e(10),e(11),e(477),e(31),e(542),e(176),e(179),e(114);var i={mounted:function(){console.debug("API Explorer Mounted");var t=document.createElement("script");t.setAttribute("src","/js/authentication.bundle.js"),t.onload=function(){var t=document.createElement("script");t.setAttribute("src","/js/swagger-viewer.bundle.js"),t.onload=function(){var t;t=SwaggerUIBundle({url:"/api/definitions/v1.0/open-api/apiDefinition.swagger.yaml",dom_id:"#swagger-ui",deepLinking:!0,displayOperationId:!0,displayRequestDuration:!1,defaultModelsExpandDepth:0,defaultModelExpandDepth:0,showExtensions:!1,filter:!1,operationsSorter:"alpha",tagsSorter:"alpha",tryItOutEnabled:!0,syntaxHighlight:{activate:!0,theme:"agate"},presets:[SwaggerUIBundle.presets.apis,SwaggerUIStandalonePreset],plugins:[SwaggerUIBundle.plugins.DownloadUrl,{statePlugins:{spec:{wrapActions:{updateJsonSpec:function(t,a){return function(a){var e=new URLSearchParams(window.location.search).get("dev");if(window.location.host.indexOf("localhost",0)>-1||window.location.host.indexOf("devgme",0)>-1||"true"===e){a.servers=[{url:"https://devgmeweb.eu.ngrok.io/v1.0",description:"Development Environment"},{url:"https://apippr.salestim.io/v1.0",description:"Pre-Production Environment"}].concat(a.servers||[]);var i=setInterval((function(){null!==document.querySelector(".information-container")&&(clearInterval(i),document.querySelector(".information-container").style.display="block",document.querySelector(".scheme-container").style.display="block")}),100)}return t(a)}}}}}}]}),window.ui=t,window.initExplorerHeader()},document.head.appendChild(t)},document.head.appendChild(t)}},s=e(26),n=Object(s.a)(i,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("link",{attrs:{rel:"stylesheet",type:"text/css",href:"/css/swagger-viewer.bundle.css"}}),t._v(" "),e("div",{staticClass:"uk-text-center",attrs:{id:"loading"}},[e("span",{staticClass:"uk-text-lead"},[t._v("Checking your previous sessions")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{"uk-spinner":""}})]),t._v(" "),e("div",{staticStyle:{display:"none"},attrs:{id:"authorizations"}},[e("div",{staticClass:"uk-child-width-1-2@m uk-grid-small uk-grid-match",attrs:{"uk-grid":""}},[e("div",[e("div",{staticClass:"uk-card uk-card-hover uk-card-small uk-card-default uk-card-body"},[e("label",{staticClass:"uk-text-lead"},[t._v("Delegated Access")]),t._v(" "),e("br"),t._v(" "),e("label",{staticClass:"uk-text-meta uk-text-small"},[t._v("on behalf of a user (authorization code flow)")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"uk-grid-small uk-flex-middle",attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-auto"},[e("img",{staticClass:"uk-border-circle",attrs:{id:"profilePicture",width:"40",height:"40",src:"/img/avatar.png"}})]),t._v(" "),e("div",{staticClass:"uk-width-expand"},[e("label",{staticClass:"uk-text-lead uk-align-left uk-margin-remove-bottom",attrs:{id:"userDisplayName"}},[t._v("\n                Anonymous\n              ")]),t._v(" "),e("div",{staticStyle:{display:"none"},attrs:{id:"userDetails"}},[e("br"),e("br"),t._v(" "),e("label",{staticClass:"uk-text-meta uk-align-left uk-margin-remove-bottom",attrs:{id:"userIdentifier"}}),t._v(" "),e("br"),t._v(" "),e("label",{staticClass:"uk-align-left uk-text-meta uk-text-small uk-margin-remove-top uk-margin-remove-bottom",attrs:{id:"userLoginDateTime"}},[e("time",{attrs:{datetime:""}})]),t._v(" "),e("br"),t._v(" "),e("label",{staticClass:"uk-align-left uk-text-meta uk-text-small uk-margin-remove-top",attrs:{id:"userRoles"}})])])]),t._v(" "),e("hr"),t._v(" "),e("div",[e("button",{staticClass:"uk-button uk-align-right uk-button-primary uk-button-small",staticStyle:{"text-decoration":"none","margin-top":"10px","margin-bottom":"10px"},attrs:{id:"delegatedLoginButton",onclick:"delegatedSignIn()"}},[e("span",{attrs:{"uk-icon":"icon: sign-in; ratio: 0.8"}}),t._v(" "),e("span",{staticClass:"uk-text-middle"},[t._v("SIGN-IN")])]),t._v(" "),e("button",{staticClass:"uk-button uk-align-right uk-button-secondary uk-button-small",staticStyle:{display:"none","text-decoration":"none","margin-top":"10px","margin-bottom":"10px"},attrs:{id:"delegatedLogoutButton",onclick:"delegatedSignOut()"}},[e("span",{attrs:{"uk-icon":"icon: sign-out; ratio: 0.8"}}),t._v(" "),e("span",{staticClass:"uk-text-middle"},[t._v("SIGN-OUT")])])])])]),t._v(" "),e("div",[e("div",{staticClass:"uk-card uk-card-hover uk-card-small uk-card-default uk-card-body"},[e("label",{staticClass:"uk-text-lead"},[t._v("Application Access")]),t._v(" "),e("br"),t._v(" "),e("label",{staticClass:"uk-text-meta uk-text-small"},[t._v("as an application (client credentials flow)")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"uk-grid-small uk-flex-middle",attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-auto"},[e("img",{attrs:{id:"appPicture",width:"40",height:"40",src:"/img/bot.png"}})]),t._v(" "),e("div",{staticClass:"uk-width-expand"},[e("label",{staticClass:"uk-text-lead uk-align-left uk-margin-remove-bottom",attrs:{id:"appDisplayName"}},[t._v("\n                Anonymous\n              ")]),t._v(" "),e("div",{staticStyle:{display:"none"},attrs:{id:"appDetails"}},[e("br"),e("br"),t._v(" "),e("label",{staticClass:"uk-text-meta uk-align-left uk-margin-remove-bottom",attrs:{id:"appIdentifier"}}),t._v(" "),e("br"),t._v(" "),e("label",{staticClass:"uk-align-left uk-text-meta uk-text-small uk-margin-remove-top uk-margin-remove-bottom",attrs:{id:"appLoginDateTime"}},[e("time",{attrs:{datetime:""}})]),t._v(" "),e("br"),t._v(" "),e("label",{staticClass:"uk-align-left uk-text-meta uk-text-small uk-margin-remove-top",attrs:{id:"appRoles"}})])])]),t._v(" "),e("hr"),t._v(" "),e("div",[e("form",{staticClass:"uk-grid-small uk-form-horizontal",attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-1-1@s"},[e("div",{staticClass:"uk-form-label uk-text-meta uk-text-small"},[t._v("\n                  Tenant ID\n                ")]),t._v(" "),e("input",{staticClass:"uk-input uk-form-small",attrs:{id:"appTenantId",type:"text",placeholder:""}})]),t._v(" "),e("div",{staticClass:"uk-width-1-2@s"},[e("div",{staticClass:"uk-form-label uk-text-meta uk-text-small"},[t._v("\n                  Client ID\n                ")]),t._v(" "),e("input",{staticClass:"uk-input uk-form-small",attrs:{id:"appClientId",type:"text",placeholder:""}})]),t._v(" "),e("div",{staticClass:"uk-width-1-2@s"},[e("div",{staticClass:"uk-form-label uk-text-meta uk-text-small"},[t._v("\n                  Client Secret\n                ")]),t._v(" "),e("input",{staticClass:"uk-input uk-form-small",attrs:{id:"appClientSecret",type:"password",placeholder:""}})])]),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"uk-button uk-align-right uk-button-primary uk-button-small",staticStyle:{"text-decoration":"none","margin-top":"10px","margin-bottom":"10px"},attrs:{id:"appLoginButton",onclick:"appSignIn()"}},[e("span",{attrs:{"uk-icon":"icon: sign-in; ratio: 0.8"}}),t._v(" "),e("span",{staticClass:"uk-text-middle"},[t._v("SIGN-IN")])]),t._v(" "),e("button",{staticClass:"uk-button uk-align-right uk-button-secondary uk-button-small",staticStyle:{display:"none","text-decoration":"none","margin-top":"10px","margin-bottom":"10px"},attrs:{id:"appLogoutButton",onclick:"appSignOut()"}},[e("span",{attrs:{"uk-icon":"icon: sign-out; ratio: 0.8"}}),t._v(" "),e("span",{staticClass:"uk-text-middle"},[t._v("SIGN-OUT")])])])])])])]),t._v(" "),e("br"),t._v(" "),e("script",{attrs:{type:"text/javascript",src:"/js/swagger-viewer.bundle.js"}}),t._v(" "),e("div",{attrs:{id:"swagger-ui"}})])}],!1,null,"1107f3c5",null);a.default=n.exports}}]);