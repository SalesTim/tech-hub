# ApprovalsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveApproval**](ApprovalsApi.md#approveApproval) | **POST** /approvals/{id}/approve | Approve a provisioning request (🔐 Authenticated users and apps)
[**getApprovals**](ApprovalsApi.md#getApprovals) | **GET** /approvals | Get all approvals from your organization (🔥 restricted to administrators)
[**getPendingApprovals**](ApprovalsApi.md#getPendingApprovals) | **GET** /approvals/pending | Get your pending approvals (beeing the requester or an approver) (🔐 Authenticated users)
[**rejectApproval**](ApprovalsApi.md#rejectApproval) | **POST** /approvals/{id}/reject | Reject a provisioning request (🔐 Authenticated users and apps)


<a name="approveApproval"></a>
# **approveApproval**
> approveApproval(id, approvalInfos)

Approve a provisioning request (🔐 Authenticated users and apps)

    Approve a provisioning request.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The approval workflow ID. | [default to null]
 **approvalInfos** | [**ApprovalInfos**](..//Models/ApprovalInfos.md)| Informations submitted by the approver. |

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="getApprovals"></a>
# **getApprovals**
> List getApprovals()

Get all approvals from your organization (🔥 restricted to administrators)

    Get all approvals from your organization.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](..//Models/object.md)

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

[**List**](..//Models/object.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="rejectApproval"></a>
# **rejectApproval**
> rejectApproval(id, approvalInfos)

Reject a provisioning request (🔐 Authenticated users and apps)

    Reject a provisioning request.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The approval workflow ID. | [default to null]
 **approvalInfos** | [**ApprovalInfos**](..//Models/ApprovalInfos.md)| Informations submitted by the approver. |

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

