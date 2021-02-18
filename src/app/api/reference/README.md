# Documentation for SalesTim Governance Automation

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.salestim.io/v1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CatalogApi* | [**getCatalogTemplates**](Apis/CatalogApi.md#getcatalogtemplates) | **GET** /catalog/templates | Get all the team templates from your catalog (Restricted through RBAC to the following roles: \"Global admin\", \"Teams service admin\", \"Catalog Manager\") 
*CatalogApi* | [**getMyCatalogTemplates**](Apis/CatalogApi.md#getmycatalogtemplates) | **GET** /me/catalog/templates | Get my teams templates
*JobsApi* | [**getJob**](Apis/JobsApi.md#getjob) | **GET** /jobs/{JobId} | Get information about a job
*LabelsApi* | [**getMyLabels**](Apis/LabelsApi.md#getmylabels) | **GET** /me/labels | Get my sensitivity labels
*TeamsApi* | [**createTeamProvisioningJob**](Apis/TeamsApi.md#createteamprovisioningjob) | **POST** /teams/provisioning | Create a new team based on a template


<a name="documentation-for-models"></a>
## Documentation for Models

 - [ApiError](.//Models/ApiError.md)
 - [ApiErrorError](.//Models/ApiErrorError.md)
 - [ApiErrorErrorInnerError](.//Models/ApiErrorErrorInnerError.md)
 - [ApprovalTeamMember](.//Models/ApprovalTeamMember.md)
 - [CatalogTemplate](.//Models/CatalogTemplate.md)
 - [CatalogTemplateClonedTeam](.//Models/CatalogTemplateClonedTeam.md)
 - [CatalogTemplateNewTeam](.//Models/CatalogTemplateNewTeam.md)
 - [CatalogTemplateTemplateConfiguration](.//Models/CatalogTemplateTemplateConfiguration.md)
 - [CatalogTemplateTemplateConfigurationApproval](.//Models/CatalogTemplateTemplateConfigurationApproval.md)
 - [CatalogTemplateTemplateConfigurationAudienceTargeting](.//Models/CatalogTemplateTemplateConfigurationAudienceTargeting.md)
 - [CatalogTemplateTemplateConfigurationPermanentMembership](.//Models/CatalogTemplateTemplateConfigurationPermanentMembership.md)
 - [CatalogTemplates](.//Models/CatalogTemplates.md)
 - [Job](.//Models/Job.md)
 - [Label](.//Models/Label.md)
 - [Labels](.//Models/Labels.md)
 - [MemberUserIdentifier](.//Models/MemberUserIdentifier.md)
 - [OwnerUserIdentifier](.//Models/OwnerUserIdentifier.md)
 - [PermanentMember](.//Models/PermanentMember.md)
 - [TeamProvisioningRequest](.//Models/TeamProvisioningRequest.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="oauth2_auth"></a>
### oauth2_auth

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://login.windows.net/common/oauth2/authorize
- **Scopes**: 
  - https://graph.microsoft.com/.default: https://graph.microsoft.com/.default

