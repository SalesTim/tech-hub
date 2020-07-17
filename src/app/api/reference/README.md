# Documentation for SalesTim API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.salestim.io/v1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApprovalsApi* | [**approveApproval**](Apis/ApprovalsApi.md#approveapproval) | **POST** /approvals/{id}/approve | Approve a provisioning request (🔐 Authenticated users and apps)
*ApprovalsApi* | [**getApprovals**](Apis/ApprovalsApi.md#getapprovals) | **GET** /approvals | Get all approvals from your organization (🔥 restricted to administrators)
*ApprovalsApi* | [**getPendingApprovals**](Apis/ApprovalsApi.md#getpendingapprovals) | **GET** /approvals/pending | Get your pending approvals (beeing the requester or an approver) (🔐 Authenticated users)
*ApprovalsApi* | [**rejectApproval**](Apis/ApprovalsApi.md#rejectapproval) | **POST** /approvals/{id}/reject | Reject a provisioning request (🔐 Authenticated users and apps)
*AppsApi* | [**createApp**](Apis/AppsApi.md#createapp) | **POST** /apps | Create a virtual app (🔥 restricted to administrators)
*AppsApi* | [**deleteApp**](Apis/AppsApi.md#deleteapp) | **DELETE** /apps/{id} | Delete a virtual app (🔥 restricted to administrators)
*AppsApi* | [**getApp**](Apis/AppsApi.md#getapp) | **GET** /apps/{id} | Get a virtual app (🔥 restricted to administrators)
*AppsApi* | [**getApps**](Apis/AppsApi.md#getapps) | **GET** /apps | Get your virtual apps (🔥 restricted to administrators)
*AppsApi* | [**regenerateAppSecret**](Apis/AppsApi.md#regenerateappsecret) | **POST** /apps/{id}/regenerateSecret | Regenerate a virtual app secret (🔥 restricted to administrators)
*AppsApi* | [**updateApp**](Apis/AppsApi.md#updateapp) | **PUT** /apps/{id} | Update a virtual app (🔥 restricted to administrators)
*CatalogApi* | [**exportCatalogTemplate**](Apis/CatalogApi.md#exportcatalogtemplate) | **POST** /catalog/templates/{id}/export | Export a template from your corporate catalog (🔥 restricted to administrators)
*CatalogApi* | [**getCatalogTemplates**](Apis/CatalogApi.md#getcatalogtemplates) | **GET** /catalog/templates | Get all templates from your corporate catalog (🔐 Authenticated users and apps)
*CatalogApi* | [**getMyCatalogTemplates**](Apis/CatalogApi.md#getmycatalogtemplates) | **GET** /me/catalog/templates | Get all templates a user can see filtered by audience (🔐 Authenticated users)
*CatalogApi* | [**installTemplate**](Apis/CatalogApi.md#installtemplate) | **POST** /catalog/templates/install | Install a template from the public template store to your corporate catalog (🔥 restricted to administrators)
*JobsApi* | [**createProvisioningJob**](Apis/JobsApi.md#createprovisioningjob) | **POST** /jobs/provisioning | Create a new provisioning job (🔐 Authenticated users and apps)
*JobsApi* | [**getJob**](Apis/JobsApi.md#getjob) | **GET** /jobs/{id} | Get information about a job (🔐 Authenticated users and apps)
*JobsApi* | [**getJobs**](Apis/JobsApi.md#getjobs) | **GET** /jobs | Get all jobs from your organization (🔥 restricted to administrators)
*StoreApi* | [**getStoreCategories**](Apis/StoreApi.md#getstorecategories) | **GET** /store/categories | Get all store categories from the public template store (📡 Anonymous access)
*StoreApi* | [**getStoreTemplate**](Apis/StoreApi.md#getstoretemplate) | **GET** /store/templates/{id} | Get a store template from the public template store (📡 Anonymous access)
*StoreApi* | [**getStoreTemplates**](Apis/StoreApi.md#getstoretemplates) | **GET** /store/templates | Get all templates from the public template store (📡 Anonymous access)
*StoreApi* | [**getStoreTemplatesByCategory**](Apis/StoreApi.md#getstoretemplatesbycategory) | **GET** /store/templates/byCategory/{id} | Get store templates from a specific category (📡 Anonymous access)


<a name="documentation-for-models"></a>
## Documentation for Models

 - [App](.//Models/App.md)
 - [ApprovalInfos](.//Models/ApprovalInfos.md)
 - [Job](.//Models/Job.md)
 - [ProvisioningRequest](.//Models/ProvisioningRequest.md)
 - [ProvisioningRequestIntegration](.//Models/ProvisioningRequestIntegration.md)
 - [ProvisioningRequestIntegrationItem](.//Models/ProvisioningRequestIntegrationItem.md)
 - [ProvisioningRequestOnBehalfOf](.//Models/ProvisioningRequestOnBehalfOf.md)
 - [ProvisioningRequestRequestedMembers](.//Models/ProvisioningRequestRequestedMembers.md)
 - [StoreCategory](.//Models/StoreCategory.md)
 - [StoreCategoryIntro](.//Models/StoreCategoryIntro.md)
 - [StoreCategoryLabel](.//Models/StoreCategoryLabel.md)
 - [TemplateExportOptions](.//Models/TemplateExportOptions.md)
 - [TemplateIdentifier](.//Models/TemplateIdentifier.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="appSecret"></a>
### appSecret

- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header

<a name="bearerAuth"></a>
### bearerAuth

- **Type**: HTTP basic authentication

