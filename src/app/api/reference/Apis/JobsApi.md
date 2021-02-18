# JobsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJob**](JobsApi.md#getJob) | **GET** /jobs/{JobId} | Get information about a job


<a name="getJob"></a>
# **getJob**
> Job getJob(jobId)

Get information about a job

    Get detailed information about a job, including its status, progress, logs...

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The job ID generated during its creation. | [default to null]

### Return type

[**Job**](..//Models/Job.md)

### Authorization

[oauth2_auth](../README.md#oauth2_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

