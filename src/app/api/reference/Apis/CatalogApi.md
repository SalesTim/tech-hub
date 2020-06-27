# CatalogApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportCatalogTemplate**](CatalogApi.md#exportCatalogTemplate) | **POST** /catalog/templates/{id}/export | Export a template from your corporate catalog
[**getCatalogTemplates**](CatalogApi.md#getCatalogTemplates) | **GET** /catalog/templates | Get all templates from your corporate catalog
[**installTemplateFromStore**](CatalogApi.md#installTemplateFromStore) | **POST** /catalog/templates/installFromStore | Install a template from the public template store to your corporate catalog


<a name="exportCatalogTemplate"></a>
# **exportCatalogTemplate**
> Object exportCatalogTemplate(id)

Export a template from your corporate catalog

    Export a template from your corporate catalog.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the template to export. | [default to null]

### Return type

[**Object**](..//Models/object.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCatalogTemplates"></a>
# **getCatalogTemplates**
> List getCatalogTemplates()

Get all templates from your corporate catalog

    Get all templates from your corporate catalog.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](..//Models/object.md)

### Authorization

[appSecret](../README.md#appSecret), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="installTemplateFromStore"></a>
# **installTemplateFromStore**
> Object installTemplateFromStore(templateIdentifier)

Install a template from the public template store to your corporate catalog

    Install a template from the public template store to your corporate catalog.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateIdentifier** | [**TemplateIdentifier**](..//Models/TemplateIdentifier.md)| An identifier of the the template to be installed. |

### Return type

[**Object**](..//Models/object.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

