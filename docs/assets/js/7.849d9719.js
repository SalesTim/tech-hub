(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{328:function(e,t,s){"use strict";s.r(t);var i={mounted:function(){console.debug("SwaggerViewer Mounted");var e=this.openApiFileUrl,t=document.createElement("script");function s(e){var t=SwaggerUIBundle({url:e,dom_id:"#swagger-ui",deepLinking:!0,displayOperationId:!1,displayRequestDuration:!1,presets:[SwaggerUIBundle.presets.apis,SwaggerUIStandalonePreset],plugins:[SwaggerUIBundle.plugins.DownloadUrl]});window.ui=t}t.setAttribute("src","https://unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"),t.onload=function(){var t=document.createElement("script");t.setAttribute("src","https://unpkg.com/swagger-ui-dist@3/swagger-ui-standalone-preset.js"),t.onload=function(){s(e)},document.head.appendChild(t)},document.head.appendChild(t),window.onload=function(){s(e)}},props:["openApiFileUrl"]},n=s(33),r=Object(n.a)(i,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("link",{attrs:{rel:"stylesheet",type:"text/css",href:"https://unpkg.com/swagger-ui-dist@3/swagger-ui.css"}}),this._v(" "),t("script",{attrs:{type:"text/javascript",src:"https://unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"}}),this._v(" "),t("script",{attrs:{src:"https://unpkg.com/swagger-ui-dist@3/swagger-ui-standalone-preset.js"}}),this._v(" "),t("div",{attrs:{id:"swagger-ui"}})])}],!1,null,"c21c47d8",null);t.default=r.exports}}]);