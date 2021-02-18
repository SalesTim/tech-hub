# Role Based Access Control (RBAC)

<Classification label="public" />

Role based access control (RBAC) enables Microsoft 365 global administrators to define permissions and restrict access to specific SalesTim's features to specific groups of users.

To implement RBAC and provide a high level of granularity, SalesTim relies on both standard Microsoft 365 roles, namely `Teams service admin` and `Global admin`, and also on some application specific roles, such as `Catalog managers` and `Integration manager`.

## Roles and Profiles
Here is the matrix of features/roles supported by the SalesTim platform:

| Feature | End-Users | Catalog managers | Integration manager | Teams service admin | Global admin |
|-|:-:|:-:|:-:|:-:|:-:|
| **Home** - View teams you're a member of from the homepage | ✅ | ✅ | ✅ | ✅ | ✅ |
| **New team** - Create a new team based on a template | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Approval** - Approve / Reject a team creation request | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Templates Catalog** - Create / Update / Delete team templates, define their content, select their approvers, define their audience targeting and select a governance policy | 🚫 | ✅ | 🚫 | ✅ | ✅ |
| **Integration** - Manage platform's webhooks and external connected apps integration settings | 🚫 | 🚫 | ✅ | ✅ | ✅ |
| **Governance policies** - Define global governance policies available from the template catalog, including security and compliance rules | 🚫 | 🚫 | 🚫 | ✅ | ✅ |
| **Settings** - Manage service credentials and other platform's system configuration | 🚫 | 🚫 | 🚫 | 🚫 | ✅ |
| **Audit trails** - View company-wide and user-level audit trails | 🚫 | 🚫 | 🚫 | 🚫 | ✅ |
| **Roles management** - Assign roles to specific users | 🚫 | 🚫 | 🚫 | 🚫 | ✅ |
