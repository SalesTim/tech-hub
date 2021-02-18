# Audience Targeting
<Classification label="public" />

## Abstract
An audience targeting rule could be applied to a template to define who can access and therefore use it, based on the user profile data. Intrinsically, targeting rules are a combination of tags and expressions that are evaluated against a user profile to determine if a template is shown or not.

**Table of Contents**:
[[toc]]

## Available tags
Targeting rules can use user profile information through the following tags:

| Tag | Description |
|-----|-------------|
| `user.displayName` | User full name. (for example "Bob Dirac")
| `user.userPrincipalName` | User UPN. In Active Directory, a User Principal Name (UPN) is the name of a system user in an email address format. A UPN (for example: "bob.dirac@contoso.onmicrosoft.com") consists of the user name (logon name), separator (the @ symbol), and domain name (UPN suffix). <hr>Important: A UPN is not the same as an email address. Sometimes, a UPN can match a user's email address, but this is not a general rule. | 
| `user.mail` | User email (for example: "bob.dirac@domain.com") |
| `user.preferredLanguage` | User preferred language in Microsoft 365. <hr>Language and locale codes are limited to those in the [ISO 639-1 standard](https://en.wikipedia.org/wiki/ISO_639-1). |
| `user.givenName` | User given name (for example: "Bob") |
| `user.country` | User country (for example: "France") |
| `user.companyName` | User company name (for example: "Contoso") |
| `user.department` | User department (for example: "Marketing") |
| `user.city` | User city (for example: "Paris") |
| `user.jobTitle` | User job title (for example: "Product Manager") |
| `user.surname` | User surname (for example: "Dirac") |
| `user.usageLocation` | Office 365 usage location. (for example: "US") <hr>Rely on the [ISO 3166-1 alpha-2 country codes...](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) |
| `user.groups.direct` | All the groups that the user is a DIRECT member of. |

::: warning
Be careful: These tags are **CASE-SENSITIVE**!
:::

## Examples
In combination with tags, targeting rules can use standard javascript operators and functions.

::: tip
N.B: The template will be shown to a user only if the expression is evaluated as `true`
:::

This section shows some common scenarios to target your templates to specific audiences in an organization.

### Boolean operators

#### "Users from France"
```javascript
user.country === 'FR'
```
#### "Users outside Germany"
```javascript
user.country !== 'DE'
```

### Functions

#### "English speakers from any country"
```javascript
user.preferredLanguage.includes('en-')
```

### Combining multiple criteria

#### "French or Belgium users from the Marketing Department"
```javascript
( user.country === 'FR' || user.country === 'BE' ) && user.department === 'Marketing'
```

#### Domain-based targeting: "users with @contoso.com or @contoso.fr in their domain name"
```javascript
user.mail.includes('@contoso.com') === true || user.mail.includes('@contoso.fr') === true
```
::: tip Operator precedence
Rules follows the standard javascript [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) so you can combine multiple rules in one expression, 
:::

### Using groups membership
The `user.groups.direct` tag gives you access to all the groups that the user is a DIRECT member of, as an array of groups objects. There are several types of groups, that can be differentiated by their `@odata.type` property:
- `#microsoft.graph.directoryRole`: Standard Azure AD groups, such as the admin roles from your Microsoft 365 environment
- `#microsoft.graph.group`: Microsoft 365 groups, associated with a team or a SharePoint site.

Example Directory Role group:
```json
{
    "@odata.type":"#microsoft.graph.directoryRole",
    "id":"3b4b0f4e-d037-4116-bd0e-1a2173d95d5a",
    "deletedDateTime":null,
    "description":"Company Administrator role has full access to perform any operation in the company scope.",
    "displayName":"Global Administrator",
    "roleTemplateId":"72e90394-69f5-4237-9190-012177145e10"
}
```

Example Microsoft 365 group:
:::warning Note
The response object shown here might be shortened for readability. All the default properties are returned for each group in an actual call.
:::

```json
{
    "@odata.type":"#microsoft.graph.group",
    "id":"e9090752-4430-4361-8594-e6ce98a7fbfa",
    "deletedDateTime":null,
    "classification":null,
    "createdDateTime":"2020-08-04T15:39:08Z",
    "description":"A fantastic group!!!",
    "displayName":"Onboarding",
    "groupTypes":["Unified"],
    "mail":"Onboarding@contoso.com",
    "mailEnabled":true,
    "mailNickname":"Onboarding",
    "preferredDataLocation":null,
    "preferredLanguage":null,
    "resourceProvisioningOptions":["Team"],
    "visibility":"Private"
}
```

#### Test if a user is a member of a specific group by its display name
In this example, we're testing is the user is a member of the "Onboarding" group by checking if one of its groups contains the word "Onboarding" in its display name.
```js
user.groups.direct.some(group => group.displayName.includes('Onboarding'))
```

## Validate and test your audience targeting rule

::: tip Syntax Assistant
A "Check Syntax" button is available to test the rule against the current logged user. You can expect 3 kind of outcomes.
1. You would have access
2. You would not have access
3. An error is detected. In case of error, the technical details are also available, helping you solve the issue.
:::
