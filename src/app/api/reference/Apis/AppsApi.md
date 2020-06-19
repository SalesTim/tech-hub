# AppsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApp**](AppsApi.md#createApp) | **POST** /apps | Create a virtual app
[**deleteApp**](AppsApi.md#deleteApp) | **DELETE** /apps/{id} | Delete a virtual app
[**getApp**](AppsApi.md#getApp) | **GET** /apps/{id} | Get a virtual app
[**getApps**](AppsApi.md#getApps) | **GET** /apps | Get your virtual apps
[**regenerateAppSecret**](AppsApi.md#regenerateAppSecret) | **POST** /apps/{id}/regenerateSecret | Regenerate a virtual app secret
[**updateApp**](AppsApi.md#updateApp) | **PUT** /apps/{id} | Update a virtual app


<a name="createApp"></a>
# **createApp**
> App createApp(app)

Create a virtual app

    Create a new virtual app and get its generated secret. Please note, for obvious security reasons, the app secret will only be accessible once, in the response to this call, but it could later be regenerated using the POST verb on the /apps/{id}/regenerateSecret endpoint.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**App**](..//Models/App.md)| List of properties and values to be updated. |

### Return type

[**App**](..//Models/App.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteApp"></a>
# **deleteApp**
> deleteApp(id)

Delete a virtual app

    Delete a virtual app.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the virtual app to delete. | [default to null]

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getApp"></a>
# **getApp**
> App getApp(id)

Get a virtual app

    Get a virtual app.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The virtual app ID. | [default to null]

### Return type

[**App**](..//Models/App.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getApps"></a>
# **getApps**
> List getApps()

Get your virtual apps

    Get all virtual apps associated with your tenant. Please note, apps could be created using the POST verb on the /apps endpoint.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](..//Models/App.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="regenerateAppSecret"></a>
# **regenerateAppSecret**
> App regenerateAppSecret(id)

Regenerate a virtual app secret

    Regenerate a virtual app secret.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The virtual app ID. | [default to null]

### Return type

[**App**](..//Models/App.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateApp"></a>
# **updateApp**
> App updateApp(id, app)

Update a virtual app

    Update a virtual app.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the virtual app to update. | [default to null]
 **app** | [**App**](..//Models/App.md)| List of properties and values to be updated. Please note that some properties are readonly and therefore will be ignored. |

### Return type

[**App**](..//Models/App.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

