(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{543:function(e,t,i){"use strict";i.r(t);i(175);var s={mounted:function(){console.debug("SwaggerViewer Mounted");var e=this.openApiFileUrl;(window.location.host.indexOf("localhost",0)>-1||window.location.host.indexOf("devgme",0)>-1)&&(e="https://devgmeweb.eu.ngrok.io/definitions/io.salestim.openapi.definition.yaml");var t=document.createElement("script");function i(e){var t=SwaggerUIBundle({url:e,dom_id:"#swagger-ui",deepLinking:!0,displayOperationId:!0,displayRequestDuration:!1,showExtensions:!1,filter:!1,operationsSorter:"alpha",tagsSorter:"alpha",tryItOutEnabled:!0,syntaxHighlight:{activate:!0,theme:"agate"},presets:[SwaggerUIBundle.presets.apis,SwaggerUIStandalonePreset],plugins:[SwaggerUIBundle.plugins.DownloadUrl]});window.ui=t,window.initExplorerHeader()}t.setAttribute("src","https://unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"),t.onload=function(){var t=document.createElement("script");t.setAttribute("src","https://unpkg.com/swagger-ui-dist@3/swagger-ui-standalone-preset.js"),t.onload=function(){i(e)},document.head.appendChild(t)},document.head.appendChild(t),window.onload=function(){window.ui||i(e)}},props:["openApiFileUrl"]},n=i(18),a=Object(n.a)(s,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("link",{attrs:{rel:"stylesheet",type:"text/css",href:"https://unpkg.com/swagger-ui-dist@3/swagger-ui.css"}}),this._v(" "),t("script",{attrs:{type:"text/javascript",src:"https://unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"}}),this._v(" "),t("script",{attrs:{src:"https://unpkg.com/swagger-ui-dist@3/swagger-ui-standalone-preset.js"}}),this._v(" "),t("div",{attrs:{id:"swagger-ui"}})])}],!1,null,"07b379bb",null);t.default=a.exports}}]);