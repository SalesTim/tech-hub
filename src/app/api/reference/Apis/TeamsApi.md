# TeamsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTeamProvisioningJob**](TeamsApi.md#createTeamProvisioningJob) | **POST** /teams/provisioning | Create a new team provisioning job (🔐 Virtual App Virtual Token)


<a name="createTeamProvisioningJob"></a>
# **createTeamProvisioningJob**
> createTeamProvisioningJob(teamProvisioningRequest)

Create a new team provisioning job (🔐 Virtual App Virtual Token)

    Create a new team provisioning job by sending a TeamProvisioningRequest.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamProvisioningRequest** | [**TeamProvisioningRequest**](..//Models/TeamProvisioningRequest.md)| A TeamProvisioningRequest object describing the job to execute. |

### Return type

null (empty response body)

### Authorization

[virtualToken](../README.md#virtualToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

