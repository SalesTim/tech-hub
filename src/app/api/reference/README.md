# Documentation for SalesTim API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.salestim.io/v1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CatalogApi* | [**getMyCatalogTemplates**](Apis/CatalogApi.md#getmycatalogtemplates) | **GET** /me/catalog/templates | Get my teams templates
*HooksApi* | [**generateHookSignature**](Apis/HooksApi.md#generatehooksignature) | **POST** /hooks/signature | Generate a signature from a secret and a webhook payload
*JobsApi* | [**getJob**](Apis/JobsApi.md#getjob) | **GET** /jobs/{jobId} | Get information about a job
*LabelsApi* | [**getMyLabels**](Apis/LabelsApi.md#getmylabels) | **GET** /me/labels | Get my sensitivity labels
*TeamsApi* | [**createTeamChannel**](Apis/TeamsApi.md#createteamchannel) | **POST** /teams/{teamId}/channels | Create a new team channel
*TeamsApi* | [**createTeamChannelTab**](Apis/TeamsApi.md#createteamchanneltab) | **POST** /teams/{teamId}/channels/{channelId}/tabs | Create a new team channel tab
*TeamsApi* | [**createTeamProvisioningJob**](Apis/TeamsApi.md#createteamprovisioningjob) | **POST** /teams/provisioning | Create a new team based on a template
*TeamsApi* | [**getTeam**](Apis/TeamsApi.md#getteam) | **GET** /teams/{teamId} | Get a team
*TeamsApi* | [**getTeamChannelTabs**](Apis/TeamsApi.md#getteamchanneltabs) | **GET** /teams/{teamId}/channels/{channelId}/tabs | Get team channel tabs
*TeamsApi* | [**getTeamChannels**](Apis/TeamsApi.md#getteamchannels) | **GET** /teams/{teamId}/channels | Get team channels
*TeamsApi* | [**getTeamPrimaryChannel**](Apis/TeamsApi.md#getteamprimarychannel) | **GET** /teams/{teamId}/channels/primary | Get the primary channel of a team
*UsersApi* | [**getUsers**](Apis/UsersApi.md#getusers) | **GET** /users | Retreive users from your Microsoft 365 environment


<a name="documentation-for-models"></a>
## Documentation for Models

 - [ApiError](./Models/ApiError.md)
 - [ApiErrorError](./Models/ApiErrorError.md)
 - [ApiErrorErrorInnerError](./Models/ApiErrorErrorInnerError.md)
 - [ApprovalTeamMember](./Models/ApprovalTeamMember.md)
 - [CatalogTemplate](./Models/CatalogTemplate.md)
 - [CatalogTemplateClonedTeam](./Models/CatalogTemplateClonedTeam.md)
 - [CatalogTemplateNewTeam](./Models/CatalogTemplateNewTeam.md)
 - [CatalogTemplateTemplateConfiguration](./Models/CatalogTemplateTemplateConfiguration.md)
 - [CatalogTemplateTemplateConfigurationApproval](./Models/CatalogTemplateTemplateConfigurationApproval.md)
 - [CatalogTemplateTemplateConfigurationAudienceTargeting](./Models/CatalogTemplateTemplateConfigurationAudienceTargeting.md)
 - [CatalogTemplateTemplateConfigurationPermanentMembership](./Models/CatalogTemplateTemplateConfigurationPermanentMembership.md)
 - [CatalogTemplates](./Models/CatalogTemplates.md)
 - [HookSignature](./Models/HookSignature.md)
 - [HookSignatureRequest](./Models/HookSignatureRequest.md)
 - [Job](./Models/Job.md)
 - [Label](./Models/Label.md)
 - [Labels](./Models/Labels.md)
 - [MemberUserIdentifier](./Models/MemberUserIdentifier.md)
 - [OwnerUserIdentifier](./Models/OwnerUserIdentifier.md)
 - [PermanentMember](./Models/PermanentMember.md)
 - [Team](./Models/Team.md)
 - [TeamChannel](./Models/TeamChannel.md)
 - [TeamChannelTab](./Models/TeamChannelTab.md)
 - [TeamChannelTabConfiguration](./Models/TeamChannelTabConfiguration.md)
 - [TeamChannelTabTeamsApp](./Models/TeamChannelTabTeamsApp.md)
 - [TeamDiscoverySettings](./Models/TeamDiscoverySettings.md)
 - [TeamFunSettings](./Models/TeamFunSettings.md)
 - [TeamGuestSettings](./Models/TeamGuestSettings.md)
 - [TeamMemberSettings](./Models/TeamMemberSettings.md)
 - [TeamMessagingSettings](./Models/TeamMessagingSettings.md)
 - [TeamProvisioningRequest](./Models/TeamProvisioningRequest.md)
 - [TeamProvisioningRequestTeam](./Models/TeamProvisioningRequestTeam.md)
 - [TeamProvisioningRequestTeamMembership](./Models/TeamProvisioningRequestTeamMembership.md)
 - [TeamProvisioningRequestTemplate](./Models/TeamProvisioningRequestTemplate.md)
 - [Users](./Models/Users.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="bearerAuth"></a>
### bearerAuth

- **Type**: HTTP basic authentication

