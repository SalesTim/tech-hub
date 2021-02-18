# TeamsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTeamProvisioningJob**](TeamsApi.md#createTeamProvisioningJob) | **POST** /teams/provisioning | Create a new team based on a template


<a name="createTeamProvisioningJob"></a>
# **createTeamProvisioningJob**
> Job createTeamProvisioningJob(teamProvisioningRequest)

Create a new team based on a template

    Create a new team provisioning job.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamProvisioningRequest** | [**TeamProvisioningRequest**](..//Models/TeamProvisioningRequest.md)| A TeamProvisioningRequest object describing the job to execute. |

### Return type

[**Job**](..//Models/Job.md)

### Authorization

[oauth2_auth](../README.md#oauth2_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

