(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{517:function(e,t,a){"use strict";a.r(t);var s=a(18),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"audience-targeting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#audience-targeting"}},[e._v("#")]),e._v(" Audience Targeting")]),e._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),a("p",[e._v("A targeting rule could be applied to each template to define who can use it, based on the user profile data."),a("br"),e._v("\nIntrinsically, targeting rules are a combination of values and expressions that are evaluated against a user profile to determine if a template is shown or not.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("N.B: This option is disabled by default.")])]),e._v(" "),a("h2",{attrs:{id:"available-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-values"}},[e._v("#")]),e._v(" Available values")]),e._v(" "),a("p",[e._v("Targeting rules can use user profile information through the following tags:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Tag")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("user.displayName")])]),e._v(" "),a("td",[a("em",[e._v('User full name. (for example "Bob Dirac")')])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("user.userPrincipalName")])]),e._v(" "),a("td",[a("em",[e._v('User UPN. In Active Directory, a User Principal Name (UPN) is the name of a system user in an email address format. A UPN (for example: "bob.dirac@contoso.com") consists of the user name (logon name), separator (the @ symbol), and domain name (UPN suffix).')]),e._v(" "),a("hr"),a("em",[a("strong",[e._v("Important: A UPN is not the same as an email address. Sometimes, a UPN can match a user's email address, but this is not a general rule.")])])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("user.mail")])]),e._v(" "),a("td",[a("em",[e._v('User email (for example: "bob.dirac@domain.com")')])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("user.preferredLanguage")])]),e._v(" "),a("td",[a("em",[e._v("User preferred language in Microsoft 365.")]),e._v(" "),a("hr"),a("em",[a("strong",[e._v("Language and locale codes are limited to those in the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/ISO_639-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISO 639-1 standard"),a("OutboundLink")],1),e._v(".")])])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("user.givenName")])]),e._v(" "),a("td",[a("em",[e._v('User given name (for example: "Bob")')])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("user.country")])]),e._v(" "),a("td",[a("em",[e._v('User country (for example: "France")')])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("user.companyName")])]),e._v(" "),a("td",[a("em",[e._v('User company name (for example: "Contoso")')])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("user.department")])]),e._v(" "),a("td",[a("em",[e._v('User department (for example: "Marketing")')])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("user.city")])]),e._v(" "),a("td",[a("em",[e._v('User city (for example: "Paris")')])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("user.jobTitle")])]),e._v(" "),a("td",[a("em",[e._v('User job title (for example: "Product Manager")')])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("user.surname")])]),e._v(" "),a("td",[a("em",[e._v('User surname (for example: "Dirac")')])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("user.usageLocation")])]),e._v(" "),a("td",[e._v('* Office 365 usage location. (for example: "US")* '),a("hr"),a("em",[a("strong",[e._v("Rely on the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISO 3166-1 alpha-2 country codes..."),a("OutboundLink")],1)])])])])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Be careful: These tags are "),a("strong",[e._v("CASE-SENSITIVE")]),e._v("!")])]),e._v(" "),a("h2",{attrs:{id:"common-scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-scenarios"}},[e._v("#")]),e._v(" Common scenarios")]),e._v(" "),a("p",[e._v("In combination with tags, targeting rules can use standard javascript operators and functions.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("N.B: The Business Solution will be shown to a user if the expression is evaluated as "),a("code",[e._v("true")])])]),e._v(" "),a("p",[e._v("This section shows some common scenarios to target your templates to specific audiences in an organization.")]),e._v(" "),a("h3",{attrs:{id:"examples-boolean-operators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-boolean-operators"}},[e._v("#")]),e._v(" Examples: Boolean operators")]),e._v(" "),a("h4",{attrs:{id:"users-from-france"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#users-from-france"}},[e._v("#")]),e._v(' "Users from France"')]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("country "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'FR'")]),e._v("\n")])])]),a("h4",{attrs:{id:"users-outside-germany"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#users-outside-germany"}},[e._v("#")]),e._v(' "Users outside Germany"')]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("country "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!==")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'DE'")]),e._v("\n")])])]),a("h3",{attrs:{id:"examples-javascript-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-javascript-functions"}},[e._v("#")]),e._v(" Examples: Javascript functions")]),e._v(" "),a("h4",{attrs:{id:"english-speakers-from-any-country"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#english-speakers-from-any-country"}},[e._v("#")]),e._v(' "English speakers from any country"')]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("preferredLanguage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'en-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("h3",{attrs:{id:"examples-combining-multiple-criteria"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-combining-multiple-criteria"}},[e._v("#")]),e._v(" Examples: Combining multiple criteria")]),e._v(" "),a("h4",{attrs:{id:"french-or-belgium-users-from-the-marketing-department"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#french-or-belgium-users-from-the-marketing-department"}},[e._v("#")]),e._v(' "French or Belgium users from the Marketing Department"')]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("country "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'FR'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("country "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'BE'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("department "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Marketing'")]),e._v("\n")])])]),a("h4",{attrs:{id:"domain-based-targeting-users-with-contoso-com-or-contoso-fr-in-their-domain-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain-based-targeting-users-with-contoso-com-or-contoso-fr-in-their-domain-name"}},[e._v("#")]),e._v(' Domain-based targeting: "users with @contoso.com or @contoso.fr in their domain name"')]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("mail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@contoso.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("mail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@contoso.fr'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n")])])]),a("h2",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[e._v("#")]),e._v(" Tips")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Operator precedence")]),e._v(" "),a("p",[e._v("Rules follows the standard javascript "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence",target:"_blank",rel:"noopener noreferrer"}},[e._v("Operator Precedence"),a("OutboundLink")],1),e._v(" so you can combine multiple rules in one expression,")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Syntax Assistant")]),e._v(" "),a("p",[e._v('A "Check Syntax" button is available to test the rule against the current logged user. You can expect 3 kind of outcomes.')]),e._v(" "),a("ol",[a("li",[e._v("You would have access")]),e._v(" "),a("li",[e._v("You would not have access")]),e._v(" "),a("li",[e._v("An error is detected. In case of error, the technical details are also available, helping you solve the issue.")])])]),e._v(" "),a("h2",{attrs:{id:"enable-your-rule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-your-rule"}},[e._v("#")]),e._v(" Enable your rule")]),e._v(" "),a("p",[e._v("You just have to save your template.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Known Issue")]),e._v(" "),a("p",[e._v("Due to our caching mechanism, an update to the user profile may not be reflected immediately and therefore the targeting rule may not be applied for a few time."),a("br"),e._v("\nSee our "),a("RouterLink",{attrs:{to:"/salestimplatform/knownissues.html#🚩-audience-targeting-rules-are-not-immediately-applied-to-recently-updated-user-profiles"}},[e._v("Known Issue")]),e._v(" file for more information.")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);