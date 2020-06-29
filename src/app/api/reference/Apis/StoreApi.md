# StoreApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStoreCategories**](StoreApi.md#getStoreCategories) | **GET** /store/categories | Get all store categories from the public template store (📡 Anonymous access)
[**getStoreTemplate**](StoreApi.md#getStoreTemplate) | **GET** /store/templates/{id} | Get a store template from the public template store (📡 Anonymous access)
[**getStoreTemplates**](StoreApi.md#getStoreTemplates) | **GET** /store/templates | Get all templates from the public template store (📡 Anonymous access)
[**getStoreTemplatesByCategory**](StoreApi.md#getStoreTemplatesByCategory) | **GET** /store/templates/byCategory/{id} | Get store templates from a specific category (📡 Anonymous access)


<a name="getStoreCategories"></a>
# **getStoreCategories**
> List getStoreCategories()

Get all store categories from the public template store (📡 Anonymous access)

    Get all categories from the public [Template Store](https://store.salestim.com). Visit the [Template Manifests Repository](https://github.com/SalesTim/template-manifests) for more information.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](..//Models/StoreCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getStoreTemplate"></a>
# **getStoreTemplate**
> Object getStoreTemplate(id)

Get a store template from the public template store (📡 Anonymous access)

    Get a specific templates from the public [Template Store](https://store.salestim.com). Visit the [Template Manifests Repository](https://github.com/SalesTim/template-manifests) for more information.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the template to retreive | [default to null]

### Return type

[**Object**](..//Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getStoreTemplates"></a>
# **getStoreTemplates**
> List getStoreTemplates()

Get all templates from the public template store (📡 Anonymous access)

    Get all templates from the public [Template Store](https://store.salestim.com). Visit the [Template Manifests Repository](https://github.com/SalesTim/template-manifests) for more information.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](..//Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getStoreTemplatesByCategory"></a>
# **getStoreTemplatesByCategory**
> List getStoreTemplatesByCategory(id)

Get store templates from a specific category (📡 Anonymous access)

    Get templatesfrom a specific category from the public [Template Store](https://store.salestim.com). Visit the [Template Manifests Repository](https://github.com/SalesTim/template-manifests) for more information.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The category ID | [default to null]

### Return type

[**List**](..//Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

