# JobsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProvisioningJob**](JobsApi.md#createProvisioningJob) | **POST** /jobs/provisioning | Create a new provisioning job (🔐 Authenticated users and apps)
[**getJob**](JobsApi.md#getJob) | **GET** /jobs/{id} | Get information about a job (🔐 Authenticated users and apps)


<a name="createProvisioningJob"></a>
# **createProvisioningJob**
> Job createProvisioningJob(provisioningRequest)

Create a new provisioning job (🔐 Authenticated users and apps)

    Create a new provisioning job by sending a ProvisioningRequest.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provisioningRequest** | [**ProvisioningRequest**](..//Models/ProvisioningRequest.md)| A ProvisioningRequest object describing the job to execute. |

### Return type

[**Job**](..//Models/Job.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getJob"></a>
# **getJob**
> Job getJob(id)

Get information about a job (🔐 Authenticated users and apps)

    Get detailed information about a job, including its status, progress, logs...

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The job ID. | [default to null]

### Return type

[**Job**](..//Models/Job.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

