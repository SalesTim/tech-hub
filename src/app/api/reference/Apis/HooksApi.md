# HooksApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateHookSignature**](HooksApi.md#generateHookSignature) | **POST** /hooks/signature | Generate a signature from a secret and a webhook payload


<a name="generateHookSignature"></a>
# **generateHookSignature**
> HookSignature generateHookSignature(HookSignatureRequest)

Generate a signature from a secret and a webhook payload

    Generate a signature from a secret and a webhook payload. TIER 3️⃣ | ROLES &gt; All_AUTHENTICATED_USERS.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HookSignatureRequest** | [**HookSignatureRequest**](../Models/HookSignatureRequest.md)| A HookSignatureRequest object comprised of the secret and payload. |

### Return type

[**HookSignature**](../Models/HookSignature.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

