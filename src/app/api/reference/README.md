# Documentation for SalesTim Governance Automation

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.salestim.io/v1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CatalogApi* | [**getCatalogTemplates**](Apis/CatalogApi.md#getcatalogtemplates) | **GET** /catalog/templates | Get all templates from your corporate catalog (🔐 Virtual App Virtual Token)
*JobsApi* | [**getJob**](Apis/JobsApi.md#getjob) | **GET** /jobs/{JobId} | Get information about a job (🔐 Virtual App Virtual Token)
*TeamsApi* | [**createTeamProvisioningJob**](Apis/TeamsApi.md#createteamprovisioningjob) | **POST** /teams/provisioning | Create a new team provisioning job (🔐 Virtual App Virtual Token)


<a name="documentation-for-models"></a>
## Documentation for Models

 - [Job](.//Models/Job.md)
 - [TeamProvisioningRequest](.//Models/TeamProvisioningRequest.md)
 - [UserIdentifier](.//Models/UserIdentifier.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="virtualToken"></a>
### virtualToken

- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header

