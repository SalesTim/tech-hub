(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{776:function(e,t,r){"use strict";r.r(t);var s=r(26),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"throttling-guidance"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#throttling-guidance"}},[e._v("#")]),e._v(" Throttling Guidance")]),e._v(" "),r("p",[r("strong",[e._v("ABSTRACT")]),r("br"),e._v("\nThrottling limits the number of concurrent calls to a service to prevent overuse of resources. SalesTim API is designed to handle a high volume of requests. If an overwhelming number of requests occurs, throttling helps maintain optimal performance and reliability of the SalesTim API service."),r("br"),e._v("\nThrottling limits vary based on the scenario. For example, if you are performing a large volume of writes, the possibility for throttling is higher than if you are only performing reads.")]),e._v(" "),r("hr"),e._v(" "),r("p",[r("strong",[e._v("TABLE OF CONTENTS")]),r("br")]),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#what-happens-when-throttling-occurs"}},[e._v("What happens when throttling occurs?")])]),r("li",[r("a",{attrs:{href:"#common-throttling-scenarios"}},[e._v("Common throttling scenarios")])]),r("li",[r("a",{attrs:{href:"#best-practices-to-avoid-throttling"}},[e._v("Best practices to avoid throttling")])]),r("li",[r("a",{attrs:{href:"#best-practices-to-handle-throttling"}},[e._v("Best practices to handle throttling")])])])]),r("p"),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"what-happens-when-throttling-occurs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-happens-when-throttling-occurs"}},[e._v("#")]),e._v(" What happens when throttling occurs?")]),e._v(" "),r("p",[e._v("When a throttling threshold is exceeded, SalesTim API limits any further requests from that client for a period of time. When throttling occurs, SalesTim API returns HTTP status code 429 (Too many requests), and the requests fail. A suggested wait time is returned in the response header of the failed request.")]),e._v(" "),r("p",[e._v("SalesTim API is conforming to the "),r("a",{attrs:{href:"https://tools.ietf.org/id/draft-polli-ratelimit-headers-01.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IETF ratelimit standardization proposal"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("blockquote",[r("p",[e._v("Note: Throttling behavior can depend on the type and number of requests. For example, if you have a high volume of requests, all requests types are throttled. Threshold limits vary based on the request type. Therefore, you could encounter a scenario where writes are throttled but reads are still permitted.")])]),e._v(" "),r("h2",{attrs:{id:"common-throttling-scenarios"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#common-throttling-scenarios"}},[e._v("#")]),e._v(" Common throttling scenarios")]),e._v(" "),r("p",[e._v("The most common causes of throttling of clients include:")]),e._v(" "),r("ul",[r("li",[e._v("A large number of requests across all applications in a our environments.")]),e._v(" "),r("li",[e._v("A large number of requests from a particular application across all environments.")])]),e._v(" "),r("h2",{attrs:{id:"best-practices-to-avoid-throttling"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#best-practices-to-avoid-throttling"}},[e._v("#")]),e._v(" Best practices to avoid throttling")]),e._v(" "),r("p",[e._v("Programming patterns like continuously polling a resource to check for updates and regularly scanning resource collections to check for new or deleted resources are more likely to lead to applications being throttled and degrade overall performances.")]),e._v(" "),r("p",[e._v("Before any throttling, SalesTim API provides two useful headers included in every responses so that you can monitor your own activity level:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("X-RateLimit-Limit")]),e._v(': The limit of requests in a perdiod of time (aka "window")')]),e._v(" "),r("li",[r("code",[e._v("X-RateLimit-Remaining")]),e._v(": The current number of requests that could be made during the current window.")])]),e._v(" "),r("h2",{attrs:{id:"best-practices-to-handle-throttling"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#best-practices-to-handle-throttling"}},[e._v("#")]),e._v(" Best practices to handle throttling")]),e._v(" "),r("p",[e._v("The following are best practices for handling throttling:")]),e._v(" "),r("ul",[r("li",[e._v("Reduce the number of operations per request.")]),e._v(" "),r("li",[e._v("Reduce the frequency of calls.")]),e._v(" "),r("li",[e._v("Avoid immediate retries, because all requests accrue against your usage limits.")])]),e._v(" "),r("p",[e._v("When you implement error handling, use the HTTP error code 429 to detect throttling. The failed response includes the "),r("code",[e._v("Retry-After")]),e._v(" response header. Backing off requests using the "),r("code",[e._v("Retry-After")]),e._v(" delay is the fastest way to recover from throttling because SalesTim API continues to log resource usage while a client is being throttled.")]),e._v(" "),r("ol",[r("li",[e._v("Wait the number of seconds specified in the "),r("code",[e._v("Retry-After")]),e._v(" header.")]),e._v(" "),r("li",[e._v("Retry the request.")]),e._v(" "),r("li",[e._v("If the request fails again with a 429 error code, you are still being throttled. Continue to use the recommended "),r("code",[e._v("Retry-After")]),e._v(" delay and retry the request until it succeeds.")])]),e._v(" "),r("blockquote",[r("p",[e._v("If no "),r("code",[e._v("Retry-After")]),e._v(" header is provided by the response, we recommend implementing an exponential backoff retry policy.")])]),e._v(" "),r("p",[e._v("In addition to the "),r("code",[e._v("Retry-After")]),e._v(" header, SalesTim API includes "),r("code",[e._v("X-RateLimit-Limit")]),e._v(" and "),r("code",[e._v("X-RateLimit-Remaining")]),e._v(" infos in body of the  throttled response:")]),e._v(" "),r("div",{staticClass:"language-yaml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yaml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("message")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Too many requests, please try again later...'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("rateLimitExceeded")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("tier")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Tier 1'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("              "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Could be 'Tier 1', 'Tier 2' or 'Tier 3'")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("rateLimitWindow")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("900000")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("     "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# In ms")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("rateLimitMax")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v("              "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# In # of requests")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("Classification",{attrs:{label:"public"}})],1)}),[],!1,null,null,null);t.default=a.exports}}]);