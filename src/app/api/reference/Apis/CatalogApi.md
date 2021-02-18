# CatalogApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCatalogTemplates**](CatalogApi.md#getCatalogTemplates) | **GET** /catalog/templates | Get all the team templates from your catalog (Restricted through RBAC to the following roles: \&quot;Global admin\&quot;, \&quot;Teams service admin\&quot;, \&quot;Catalog Manager\&quot;) 
[**getMyCatalogTemplates**](CatalogApi.md#getMyCatalogTemplates) | **GET** /me/catalog/templates | Get my teams templates


<a name="getCatalogTemplates"></a>
# **getCatalogTemplates**
> CatalogTemplates getCatalogTemplates()

Get all the team templates from your catalog (Restricted through RBAC to the following roles: \&quot;Global admin\&quot;, \&quot;Teams service admin\&quot;, \&quot;Catalog Manager\&quot;) 

    Get all teams templates from your corporate catalog. This action is restricted to your catalog administrators.

### Parameters
This endpoint does not need any parameter.

### Return type

[**CatalogTemplates**](..//Models/CatalogTemplates.md)

### Authorization

[oauth2_auth](../README.md#oauth2_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getMyCatalogTemplates"></a>
# **getMyCatalogTemplates**
> CatalogTemplates getMyCatalogTemplates()

Get my teams templates

    Get teams templates accessible to the connected user filtered by the audience targeting rules.

### Parameters
This endpoint does not need any parameter.

### Return type

[**CatalogTemplates**](..//Models/CatalogTemplates.md)

### Authorization

[oauth2_auth](../README.md#oauth2_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

