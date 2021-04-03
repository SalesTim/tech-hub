# CatalogApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMyCatalogTemplates**](CatalogApi.md#getMyCatalogTemplates) | **GET** /me/catalog/templates | Get my teams templates


<a name="getMyCatalogTemplates"></a>
# **getMyCatalogTemplates**
> CatalogTemplates getMyCatalogTemplates(language)

Get my teams templates

    Get teams templates accessible to the connected user filtered by the audience targeting rules. TIER 2️⃣ | ROLES &gt; All_AUTHENTICATED_USERS.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **String**| Optional. Default to &#39;en&#39;. Language code to be used to filter the colection of templates, for instance &#39;en&#39; or &#39;en-uk&#39;. | [optional] [default to null]

### Return type

[**CatalogTemplates**](../Models/CatalogTemplates.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

