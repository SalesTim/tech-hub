# ConnectedappsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIntegration**](ConnectedappsApi.md#getIntegration) | **GET** /connectedapps/integrations/{integration} | Get a connected app integration (🔥 restricted to administrators)


<a name="getIntegration"></a>
# **getIntegration**
> Object getIntegration(integration)

Get a connected app integration (🔥 restricted to administrators)

    Get a connected app integration associated with your tenant.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integration** | **String**| Integration slug name | [default to null]

### Return type

[**Object**](../Models/object.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

