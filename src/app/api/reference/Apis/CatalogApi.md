# CatalogApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportCatalogTemplate**](CatalogApi.md#exportCatalogTemplate) | **POST** /catalog/templates/{id}/export | Export a template from your corporate catalog (🔥 restricted to administrators)
[**getCatalogTemplates**](CatalogApi.md#getCatalogTemplates) | **GET** /catalog/templates | Get all templates from your corporate catalog (🔐 Authenticated users and apps)
[**installTemplateFromStore**](CatalogApi.md#installTemplateFromStore) | **POST** /catalog/templates/installFromStore | Install a template from the public template store to your corporate catalog (🔥 restricted to administrators)


<a name="exportCatalogTemplate"></a>
# **exportCatalogTemplate**
> Object exportCatalogTemplate(id, templateExportOptions)

Export a template from your corporate catalog (🔥 restricted to administrators)

    Export a template from your corporate catalog.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the template to export. | [default to null]
 **templateExportOptions** | [**TemplateExportOptions**](..//Models/TemplateExportOptions.md)| Defines template export options | [optional]

### Return type

[**Object**](..//Models/object.md)

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

[**List**](..//Models/object.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="installTemplateFromStore"></a>
# **installTemplateFromStore**
> Object installTemplateFromStore(templateIdentifier)

Install a template from the public template store to your corporate catalog (🔥 restricted to administrators)

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

