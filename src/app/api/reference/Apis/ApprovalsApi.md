# ApprovalsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApprovals**](ApprovalsApi.md#getApprovals) | **GET** /approvals | Get all approvals from your organization (🔥 restricted to administrators)
[**getPendingApprovals**](ApprovalsApi.md#getPendingApprovals) | **GET** /approvals/pending | Get your pending approvals (beeing the requester or an approver) (🔐 Authenticated users)


<a name="getApprovals"></a>
# **getApprovals**
> List getApprovals()

Get all approvals from your organization (🔥 restricted to administrators)

    Get all approvals from your organization.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/object.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPendingApprovals"></a>
# **getPendingApprovals**
> List getPendingApprovals()

Get your pending approvals (beeing the requester or an approver) (🔐 Authenticated users)

    Get your pending approvals (beeing the requester or an approver).

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/object.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

