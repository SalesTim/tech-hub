# SalesTim Connector Triggers & Actions
<Classification label="public" />

**Abstract**: This article describes the Power Platform and Logic Apps triggers and actions available from the SalesTim Connector.

:::tip 
This article refers to connex concepts. If required, please refer to:
- [Rate Limits](/api/rate-limits)
- [Role-Based Access Control (RBAC)](/platform/rbac)
:::

---

**TABLE OF CONTENTS**:
[[toc]]

---

## Triggers

### When a Team is Created 🆕
Triggered when a team is created, whatever the creation origin (manual, api, using a template...).
- Event Code: `team_created`
- Category: `teams`
- Rate Limit: None
- Roles: `INTEGRATION_MANAGER`, `TEAMS_SERVICE_ADMIN`, `GLOBAL_ADMIN`

See [Webhook Documentation](/api/webhooks.html#team-created)

### When a Team Provisioning is Completed 🎨
Triggered when a team provisioning request based on a template is complete (wether successfully or not).
- Event Code: `team_provisioning_completed`
- Category: `teams`
- Rate Limit: None
- Roles: `INTEGRATION_MANAGER`, `TEAMS_SERVICE_ADMIN`, `GLOBAL_ADMIN`

See [Webhook Documentation](/api/webhooks.html#team-provisioning-completed)

### When a Team Creation Approval is Requested 🛃
Triggered when a user is requesting the creation of a new team using a template that enforces team creation approval.
- Event Code: `team_creation_approval_requested`
- Category: `approvals`
- Rate Limit: None
- Roles: `INTEGRATION_MANAGER`, `TEAMS_SERVICE_ADMIN`, `GLOBAL_ADMIN`

See [Webhook Documentation](/api/webhooks.html#team-creation-approval-requested)

### When a Team Creation is Approved ✅
Triggered when a team creation approval is approved.
- Event Code: `team_creation_approved`
- Category: `approvals`
- Rate Limit: None
- Roles: `INTEGRATION_MANAGER`, `TEAMS_SERVICE_ADMIN`, `GLOBAL_ADMIN`

See [Webhook Documentation](/api/webhooks.html#team-creation-approved)

### When a Team Creation is Rejected 🚫
Triggered when a team creation approval is rejected.
- Event Code: `team_creation_rejected`
- Category: `approvals`
- Rate Limit: None
- Roles: `INTEGRATION_MANAGER`, `TEAMS_SERVICE_ADMIN`, `GLOBAL_ADMIN`

See [Webhook Documentation](/api/webhooks.html#team-creation-rejected)

## Actions

### Get My Catalog Templates 🎨
Get teams templates accessible to the connected user filtered by the audience targeting rules.
- Operation ID: `GetMyCatalogTemplates`
- Category: `catalog`
- Rate Limit: <Badge text="Tier 2" type="warning" vertical="middle"/>
- Roles: `AUTHENTICATED_USER`

See [API Documentation](/api/reference/Apis/CatalogApi.html#getmycatalogtemplates)

### Get My Sensitivity Labels 🔖
Get my Microsoft 365 sensitivity labels.
- Operation ID: `GetMyLabels`
- Category: `labels`
- Rate Limit: <Badge text="Tier 3" type="tip" vertical="middle"/>
- Roles: `AUTHENTICATED_USER`

See [API Documentation](/api/reference/Apis/LabelsApi.html#getmylabels)

### Get Users
Retreive users from your Microsoft 365 environment.
- Operation ID: GetUsers
- Category: users
- Rate Limit: <Badge text="Tier 3" type="tip" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS.

See [API Documentation](/api/reference/Apis/UsersApi.html#getUsers)

### Get Team
Get detailed information about a team.
- Operation ID: GetTeam
- Category: `teams`
- Rate Limit: <Badge text="Tier 3" type="tip" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS

See [API Documentation](/api/reference/Apis/TeamsApi.html#getteam)

### Delete Team
Delete a team.
- Operation ID: DeleteTeam
- Category: `teams`
- Rate Limit: <Badge text="Tier 3" type="tip" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS

See [API Documentation](/api/reference/Apis/TeamsApi.html#deleteteam)

### Archive Team 📦
Archive a team.
- Operation ID: ArchiveTeam
- Category: `teams`
- Rate Limit: <Badge text="Tier 1" type="error" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS

See [API Documentation](/api/reference/Apis/TeamsApi.html#archiveteam)

### Unarchive Team 📦
Unarchive a team.
- Operation ID: UnarchiveTeam
- Category: `teams`
- Rate Limit: <Badge text="Tier 1" type="error" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS

See [API Documentation](/api/reference/Apis/TeamsApi.html#unarchiveteam)

### Invite Team Member 👋
Invite a member to a team.
- Operation ID: AddTeamMember
- Category: `teams`
- Rate Limit: <Badge text="Tier 2" type="warning" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS

See [API Documentation](/api/reference/Apis/TeamsApi.html#addteammember)

### Create Team Based on Template 🆕
Create a new team provisioning job.
- Operation ID: CreateTeamProvisioningJob
- Category: `teams`
- Rate Limit: <Badge text="Tier 1" type="error" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS.

See [API Documentation](/api/reference/Apis/TeamsApi.html#createteamprovisioningjob)

### Approve Team Creation ✅
Approve a team creation request.
- Operation ID: ApproveTeamCreation
- Category: `approvals`
- Rate Limit: <Badge text="Tier 3" type="tip" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS.

See [API Documentation](/api/reference/Apis/ApprovalsApi.html#approveteamcreation)

### Reject Team Creation 🚫
Reject a team creation request.
- Operation ID: RejectTeamCreation
- Category: `approvals`
- Rate Limit: <Badge text="Tier 3" type="tip" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS.

See [API Documentation](/api/reference/Apis/ApprovalsApi.html#rejectteamcreation)

### Get Team Channels 💬
Get team channels.
- Operation ID: GetTeamChannels
- Category: `teams`
- Rate Limit: <Badge text="Tier 3" type="tip" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS.

See [API Documentation](/api/reference/Apis/TeamsApi.html#getteamchannels)

### Create Team Channel 💬
Create a new team channel.
- Operation ID: CreateTeamChannel
- Category: `teams`
- Rate Limit: <Badge text="Tier 2" type="warning" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS

See [API Documentation](/api/reference/Apis/TeamsApi.html#createteamchannel)

### Get Team Primary Channel 💬
Get the primary channel of a team
- Operation ID: `GetTeamPrimaryChannel`
- Category: `teams`
- Rate Limit: <Badge text="Tier 3" type="tip" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS

See [API Documentation](/api/reference/Apis/TeamsApi.html#getteamprimarychannel)

### Get Team Channel Tabs 🧱
Get team channel tabs
- Operation ID: `GetTeamChannelTabs`
- Category: `teams`
- Rate Limit: <Badge text="Tier 3" type="tip" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS

See [API Documentation](/api/reference/Apis/TeamsApi.html#getteamchanneltabs)

### Create Team Channel Tab 🧱
Create a new team channel tab
- Operation ID: CreateTeamChannelTab
- Category: `teams`
- Rate Limit: <Badge text="Tier 2" type="warning" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS

See [API Documentation](/api/reference/Apis/TeamsApi.html#createteamchanneltab)

### Get Job 🦺
Get detailed information about a job, including its status, progress, logs...
- Operation ID: `GetJob`
- Category: `jobs`
- Rate Limit: <Badge text="Tier 2" type="warning" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS

See [API Documentation](/api/reference/Apis/JobsApi.html#getjob)

### Generate Hook Signature 🔏
Generate a signature from a secret and a webhook payload
- Operation ID: `GenerateHookSignature`
- Category: `hooks`
- Rate Limit: <Badge text="Tier 3" type="tip" vertical="middle"/>
- Roles: All_AUTHENTICATED_USERS

See [API Documentation](/api/reference/Apis/HooksApi.html#generatehooksignature)
