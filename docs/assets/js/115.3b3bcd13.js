(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{665:function(e,t,a){"use strict";a.r(t);var r=a(26),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"salestim-connector-triggers-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#salestim-connector-triggers-actions"}},[e._v("#")]),e._v(" SalesTim Connector Triggers & Actions")]),e._v(" "),a("Classification",{attrs:{label:"public"}}),e._v(" "),a("p",[a("strong",[e._v("Abstract")]),e._v(": This article describes the Power Platform and Logic Apps triggers and actions available from the SalesTim Connector.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This article refers to connex concepts. If required, please refer to:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/api/rate-limits"}},[e._v("Rate Limits")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/platform/rbac"}},[e._v("Role-Based Access Control (RBAC)")])])])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("TABLE OF CONTENTS")]),e._v(":\n")]),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#triggers"}},[e._v("Triggers")]),a("ul",[a("li",[a("a",{attrs:{href:"#when-a-team-is-created-🆕"}},[e._v("When a Team is Created 🆕")])]),a("li",[a("a",{attrs:{href:"#when-a-team-provisioning-is-completed-🎨"}},[e._v("When a Team Provisioning is Completed 🎨")])]),a("li",[a("a",{attrs:{href:"#when-a-team-creation-approval-is-requested-🛃"}},[e._v("When a Team Creation Approval is Requested 🛃")])]),a("li",[a("a",{attrs:{href:"#when-a-team-creation-is-approved-✅"}},[e._v("When a Team Creation is Approved ✅")])]),a("li",[a("a",{attrs:{href:"#when-a-team-creation-is-rejected-🚫"}},[e._v("When a Team Creation is Rejected 🚫")])])])]),a("li",[a("a",{attrs:{href:"#actions"}},[e._v("Actions")]),a("ul",[a("li",[a("a",{attrs:{href:"#get-my-catalog-templates-🎨"}},[e._v("Get My Catalog Templates 🎨")])]),a("li",[a("a",{attrs:{href:"#get-my-sensitivity-labels-🔖"}},[e._v("Get My Sensitivity Labels 🔖")])]),a("li",[a("a",{attrs:{href:"#get-users"}},[e._v("Get Users")])]),a("li",[a("a",{attrs:{href:"#get-team"}},[e._v("Get Team")])]),a("li",[a("a",{attrs:{href:"#delete-team"}},[e._v("Delete Team")])]),a("li",[a("a",{attrs:{href:"#archive-team-📦"}},[e._v("Archive Team 📦")])]),a("li",[a("a",{attrs:{href:"#unarchive-team-📦"}},[e._v("Unarchive Team 📦")])]),a("li",[a("a",{attrs:{href:"#invite-team-member-👋"}},[e._v("Invite Team Member 👋")])]),a("li",[a("a",{attrs:{href:"#create-team-based-on-template-🆕"}},[e._v("Create Team Based on Template 🆕")])]),a("li",[a("a",{attrs:{href:"#approve-team-creation-✅"}},[e._v("Approve Team Creation ✅")])]),a("li",[a("a",{attrs:{href:"#reject-team-creation-🚫"}},[e._v("Reject Team Creation 🚫")])]),a("li",[a("a",{attrs:{href:"#get-team-channels-💬"}},[e._v("Get Team Channels 💬")])]),a("li",[a("a",{attrs:{href:"#create-team-channel-💬"}},[e._v("Create Team Channel 💬")])]),a("li",[a("a",{attrs:{href:"#get-team-primary-channel-💬"}},[e._v("Get Team Primary Channel 💬")])]),a("li",[a("a",{attrs:{href:"#get-team-channel-tabs-🧱"}},[e._v("Get Team Channel Tabs 🧱")])]),a("li",[a("a",{attrs:{href:"#create-team-channel-tab-🧱"}},[e._v("Create Team Channel Tab 🧱")])]),a("li",[a("a",{attrs:{href:"#get-job-🦺"}},[e._v("Get Job 🦺")])]),a("li",[a("a",{attrs:{href:"#generate-hook-signature-🔏"}},[e._v("Generate Hook Signature 🔏")])])])])])]),a("p"),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"triggers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#triggers"}},[e._v("#")]),e._v(" Triggers")]),e._v(" "),a("h3",{attrs:{id:"when-a-team-is-created-🆕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-a-team-is-created-🆕"}},[e._v("#")]),e._v(" When a Team is Created 🆕")]),e._v(" "),a("p",[e._v("Triggered when a team is created, whatever the creation origin (manual, api, using a template...).")]),e._v(" "),a("ul",[a("li",[e._v("Event Code: "),a("code",[e._v("team_created")])]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("teams")])]),e._v(" "),a("li",[e._v("Rate Limit: None")]),e._v(" "),a("li",[e._v("Roles: "),a("code",[e._v("INTEGRATION_MANAGER")]),e._v(", "),a("code",[e._v("TEAMS_SERVICE_ADMIN")]),e._v(", "),a("code",[e._v("GLOBAL_ADMIN")])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/webhooks.html#team-created"}},[e._v("Webhook Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"when-a-team-provisioning-is-completed-🎨"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-a-team-provisioning-is-completed-🎨"}},[e._v("#")]),e._v(" When a Team Provisioning is Completed 🎨")]),e._v(" "),a("p",[e._v("Triggered when a team provisioning request based on a template is complete (wether successfully or not).")]),e._v(" "),a("ul",[a("li",[e._v("Event Code: "),a("code",[e._v("team_provisioning_completed")])]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("teams")])]),e._v(" "),a("li",[e._v("Rate Limit: None")]),e._v(" "),a("li",[e._v("Roles: "),a("code",[e._v("INTEGRATION_MANAGER")]),e._v(", "),a("code",[e._v("TEAMS_SERVICE_ADMIN")]),e._v(", "),a("code",[e._v("GLOBAL_ADMIN")])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/webhooks.html#team-provisioning-completed"}},[e._v("Webhook Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"when-a-team-creation-approval-is-requested-🛃"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-a-team-creation-approval-is-requested-🛃"}},[e._v("#")]),e._v(" When a Team Creation Approval is Requested 🛃")]),e._v(" "),a("p",[e._v("Triggered when a user is requesting the creation of a new team using a template that enforces team creation approval.")]),e._v(" "),a("ul",[a("li",[e._v("Event Code: "),a("code",[e._v("team_creation_approval_requested")])]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("approvals")])]),e._v(" "),a("li",[e._v("Rate Limit: None")]),e._v(" "),a("li",[e._v("Roles: "),a("code",[e._v("INTEGRATION_MANAGER")]),e._v(", "),a("code",[e._v("TEAMS_SERVICE_ADMIN")]),e._v(", "),a("code",[e._v("GLOBAL_ADMIN")])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/webhooks.html#team-creation-approval-requested"}},[e._v("Webhook Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"when-a-team-creation-is-approved-✅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-a-team-creation-is-approved-✅"}},[e._v("#")]),e._v(" When a Team Creation is Approved ✅")]),e._v(" "),a("p",[e._v("Triggered when a team creation approval is approved.")]),e._v(" "),a("ul",[a("li",[e._v("Event Code: "),a("code",[e._v("team_creation_approved")])]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("approvals")])]),e._v(" "),a("li",[e._v("Rate Limit: None")]),e._v(" "),a("li",[e._v("Roles: "),a("code",[e._v("INTEGRATION_MANAGER")]),e._v(", "),a("code",[e._v("TEAMS_SERVICE_ADMIN")]),e._v(", "),a("code",[e._v("GLOBAL_ADMIN")])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/webhooks.html#team-creation-approved"}},[e._v("Webhook Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"when-a-team-creation-is-rejected-🚫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-a-team-creation-is-rejected-🚫"}},[e._v("#")]),e._v(" When a Team Creation is Rejected 🚫")]),e._v(" "),a("p",[e._v("Triggered when a team creation approval is rejected.")]),e._v(" "),a("ul",[a("li",[e._v("Event Code: "),a("code",[e._v("team_creation_rejected")])]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("approvals")])]),e._v(" "),a("li",[e._v("Rate Limit: None")]),e._v(" "),a("li",[e._v("Roles: "),a("code",[e._v("INTEGRATION_MANAGER")]),e._v(", "),a("code",[e._v("TEAMS_SERVICE_ADMIN")]),e._v(", "),a("code",[e._v("GLOBAL_ADMIN")])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/webhooks.html#team-creation-rejected"}},[e._v("Webhook Documentation")])],1),e._v(" "),a("h2",{attrs:{id:"actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[e._v("#")]),e._v(" Actions")]),e._v(" "),a("h3",{attrs:{id:"get-my-catalog-templates-🎨"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-my-catalog-templates-🎨"}},[e._v("#")]),e._v(" Get My Catalog Templates 🎨")]),e._v(" "),a("p",[e._v("Get teams templates accessible to the connected user filtered by the audience targeting rules.")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: "),a("code",[e._v("GetMyCatalogTemplates")])]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("catalog")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 2",type:"warning",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: "),a("code",[e._v("AUTHENTICATED_USER")])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/CatalogApi.html#getmycatalogtemplates"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"get-my-sensitivity-labels-🔖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-my-sensitivity-labels-🔖"}},[e._v("#")]),e._v(" Get My Sensitivity Labels 🔖")]),e._v(" "),a("p",[e._v("Get my Microsoft 365 sensitivity labels.")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: "),a("code",[e._v("GetMyLabels")])]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("labels")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 3",type:"tip",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: "),a("code",[e._v("AUTHENTICATED_USER")])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/LabelsApi.html#getmylabels"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"get-users"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-users"}},[e._v("#")]),e._v(" Get Users")]),e._v(" "),a("p",[e._v("Retreive users from your Microsoft 365 environment.")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: GetUsers")]),e._v(" "),a("li",[e._v("Category: users")]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 3",type:"tip",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS.")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/UsersApi.html#getUsers"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"get-team"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-team"}},[e._v("#")]),e._v(" Get Team")]),e._v(" "),a("p",[e._v("Get detailed information about a team.")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: GetTeam")]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("teams")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 3",type:"tip",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/TeamsApi.html#getteam"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"delete-team"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-team"}},[e._v("#")]),e._v(" Delete Team")]),e._v(" "),a("p",[e._v("Delete a team.")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: DeleteTeam")]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("teams")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 3",type:"tip",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/TeamsApi.html#deleteteam"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"archive-team-📦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#archive-team-📦"}},[e._v("#")]),e._v(" Archive Team 📦")]),e._v(" "),a("p",[e._v("Archive a team.")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: ArchiveTeam")]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("teams")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 1",type:"error",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/TeamsApi.html#archiveteam"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"unarchive-team-📦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unarchive-team-📦"}},[e._v("#")]),e._v(" Unarchive Team 📦")]),e._v(" "),a("p",[e._v("Unarchive a team.")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: UnarchiveTeam")]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("teams")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 1",type:"error",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/TeamsApi.html#unarchiveteam"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"invite-team-member-👋"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invite-team-member-👋"}},[e._v("#")]),e._v(" Invite Team Member 👋")]),e._v(" "),a("p",[e._v("Invite a member to a team.")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: AddTeamMember")]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("teams")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 2",type:"warning",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/TeamsApi.html#addteammember"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"create-team-based-on-template-🆕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-team-based-on-template-🆕"}},[e._v("#")]),e._v(" Create Team Based on Template 🆕")]),e._v(" "),a("p",[e._v("Create a new team provisioning job.")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: CreateTeamProvisioningJob")]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("teams")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 1",type:"error",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS.")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/TeamsApi.html#createteamprovisioningjob"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"approve-team-creation-✅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#approve-team-creation-✅"}},[e._v("#")]),e._v(" Approve Team Creation ✅")]),e._v(" "),a("p",[e._v("Approve a team creation request.")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: ApproveTeamCreation")]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("approvals")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 3",type:"tip",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS.")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/ApprovalsApi.html#approveteamcreation"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"reject-team-creation-🚫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reject-team-creation-🚫"}},[e._v("#")]),e._v(" Reject Team Creation 🚫")]),e._v(" "),a("p",[e._v("Reject a team creation request.")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: RejectTeamCreation")]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("approvals")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 3",type:"tip",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS.")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/ApprovalsApi.html#rejectteamcreation"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"get-team-channels-💬"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-team-channels-💬"}},[e._v("#")]),e._v(" Get Team Channels 💬")]),e._v(" "),a("p",[e._v("Get team channels.")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: GetTeamChannels")]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("teams")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 3",type:"tip",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS.")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/TeamsApi.html#getteamchannels"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"create-team-channel-💬"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-team-channel-💬"}},[e._v("#")]),e._v(" Create Team Channel 💬")]),e._v(" "),a("p",[e._v("Create a new team channel.")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: CreateTeamChannel")]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("teams")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 2",type:"warning",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/TeamsApi.html#createteamchannel"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"get-team-primary-channel-💬"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-team-primary-channel-💬"}},[e._v("#")]),e._v(" Get Team Primary Channel 💬")]),e._v(" "),a("p",[e._v("Get the primary channel of a team")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: "),a("code",[e._v("GetTeamPrimaryChannel")])]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("teams")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 3",type:"tip",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/TeamsApi.html#getteamprimarychannel"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"get-team-channel-tabs-🧱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-team-channel-tabs-🧱"}},[e._v("#")]),e._v(" Get Team Channel Tabs 🧱")]),e._v(" "),a("p",[e._v("Get team channel tabs")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: "),a("code",[e._v("GetTeamChannelTabs")])]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("teams")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 3",type:"tip",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/TeamsApi.html#getteamchanneltabs"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"create-team-channel-tab-🧱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-team-channel-tab-🧱"}},[e._v("#")]),e._v(" Create Team Channel Tab 🧱")]),e._v(" "),a("p",[e._v("Create a new team channel tab")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: CreateTeamChannelTab")]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("teams")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 2",type:"warning",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/TeamsApi.html#createteamchanneltab"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"get-job-🦺"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-job-🦺"}},[e._v("#")]),e._v(" Get Job 🦺")]),e._v(" "),a("p",[e._v("Get detailed information about a job, including its status, progress, logs...")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: "),a("code",[e._v("GetJob")])]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("jobs")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 2",type:"warning",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/JobsApi.html#getjob"}},[e._v("API Documentation")])],1),e._v(" "),a("h3",{attrs:{id:"generate-hook-signature-🔏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-hook-signature-🔏"}},[e._v("#")]),e._v(" Generate Hook Signature 🔏")]),e._v(" "),a("p",[e._v("Generate a signature from a secret and a webhook payload")]),e._v(" "),a("ul",[a("li",[e._v("Operation ID: "),a("code",[e._v("GenerateHookSignature")])]),e._v(" "),a("li",[e._v("Category: "),a("code",[e._v("hooks")])]),e._v(" "),a("li",[e._v("Rate Limit: "),a("Badge",{attrs:{text:"Tier 3",type:"tip",vertical:"middle"}})],1),e._v(" "),a("li",[e._v("Roles: All_AUTHENTICATED_USERS")])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/api/reference/Apis/HooksApi.html#generatehooksignature"}},[e._v("API Documentation")])],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);