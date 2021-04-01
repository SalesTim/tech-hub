# CatalogApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportCatalogTemplate**](CatalogApi.md#exportCatalogTemplate) | **POST** /catalog/templates/{id}/export | Export a template from your corporate catalog (🔥 restricted to administrators)
[**getCatalogTemplates**](CatalogApi.md#getCatalogTemplates) | **GET** /catalog/templates | Get all templates from your corporate catalog (🔐 Authenticated users and apps)
[**getMyCatalogTemplates**](CatalogApi.md#getMyCatalogTemplates) | **GET** /me/catalog/templates | Get all templates a user can see filtered by audience (🔐 Authenticated users)
[**installTemplate**](CatalogApi.md#installTemplate) | **POST** /catalog/templates/install | Install a template from the public template store to your corporate catalog (🔥 restricted to administrators)


<a name="exportCatalogTemplate"></a>
# **exportCatalogTemplate**
> Object exportCatalogTemplate(id, TemplateExportOptions)

Export a template from your corporate catalog (🔥 restricted to administrators)

    Export a template from your corporate catalog.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the template to export. | [default to null]
 **TemplateExportOptions** | [**TemplateExportOptions**](../Models/TemplateExportOptions.md)| Defines template export options | [optional]

### Return type

[**Object**](../Models/object.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getCatalogTemplates"></a>
# **getCatalogTemplates**
> List getCatalogTemplates()

Get all templates from your corporate catalog (🔐 Authenticated users and apps)

    Get all templates from your corporate catalog.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/object.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getMyCatalogTemplates"></a>
# **getMyCatalogTemplates**
> List getMyCatalogTemplates(language)

Get all templates a user can see filtered by audience (🔐 Authenticated users)

    Get all templates a user can see filtered by audience.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **String**| Optional. Default to &#39;en&#39;. Language code to be used to filter the colection of templates, for instance &#39;en&#39; or &#39;en-uk&#39;. | [optional] [default to null]

### Return type

[**List**](../Models/object.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="installTemplate"></a>
# **installTemplate**
> Object installTemplate(TemplateIdentifier)

Install a template from the public template store to your corporate catalog (🔥 restricted to administrators)

    Install a template from the public template store to your corporate catalog.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TemplateIdentifier** | [**TemplateIdentifier**](../Models/TemplateIdentifier.md)| An identifier of the the template to be installed. |

### Return type

[**Object**](../Models/object.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

