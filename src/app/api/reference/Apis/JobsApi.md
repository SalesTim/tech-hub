# JobsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJob**](JobsApi.md#getJob) | **GET** /jobs/{JobId} | Get information about a job (🔐 Virtual App Virtual Token)


<a name="getJob"></a>
# **getJob**
> getJob(jobId)

Get information about a job (🔐 Virtual App Virtual Token)

    Get detailed information about a job, including its status, progress, logs...

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The job ID generated during its creation. | [default to null]

### Return type

null (empty response body)

### Authorization

[virtualToken](../README.md#virtualToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

