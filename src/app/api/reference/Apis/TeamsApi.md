# TeamsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTeamChannel**](TeamsApi.md#createTeamChannel) | **POST** /teams/{teamId}/channels | Create a new team channel
[**createTeamChannelTab**](TeamsApi.md#createTeamChannelTab) | **POST** /teams/{teamId}/channels/{channelId}/tabs | Create a new team channel tab
[**createTeamProvisioningJob**](TeamsApi.md#createTeamProvisioningJob) | **POST** /teams/provisioning | Create a new team based on a template
[**getTeam**](TeamsApi.md#getTeam) | **GET** /teams/{teamId} | Get a team
[**getTeamChannelTabs**](TeamsApi.md#getTeamChannelTabs) | **GET** /teams/{teamId}/channels/{channelId}/tabs | Get team channel tabs
[**getTeamChannels**](TeamsApi.md#getTeamChannels) | **GET** /teams/{teamId}/channels | Get team channels
[**getTeamPrimaryChannel**](TeamsApi.md#getTeamPrimaryChannel) | **GET** /teams/{teamId}/channels/primary | Get the primary channel of a team


<a name="createTeamChannel"></a>
# **createTeamChannel**
> TeamChannel createTeamChannel(teamId, body)

Create a new team channel

    Create a new team channel. TIER 2️⃣ | ROLES &gt; All_AUTHENTICATED_USERS.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]
 **body** | **Object**| A TeamChannelPayload object describing the channel to create. |

### Return type

[**TeamChannel**](../Models/TeamChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createTeamChannelTab"></a>
# **createTeamChannelTab**
> TeamChannelTab createTeamChannelTab(teamId, channelId, body)

Create a new team channel tab

    Create a new team channel tab. TIER 2️⃣ | ROLES &gt; All_AUTHENTICATED_USERS.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]
 **channelId** | **String**| The team channel ID. | [default to null]
 **body** | **Object**| A TeamChannelTabPayload object describing the tab to create. |

### Return type

[**TeamChannelTab**](../Models/TeamChannelTab.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createTeamProvisioningJob"></a>
# **createTeamProvisioningJob**
> Job createTeamProvisioningJob(TeamProvisioningRequest)

Create a new team based on a template

    Create a new team provisioning job. TIER 1️⃣ | ROLES &gt; All_AUTHENTICATED_USERS.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TeamProvisioningRequest** | [**TeamProvisioningRequest**](../Models/TeamProvisioningRequest.md)| A TeamProvisioningRequest object describing the job to execute. |

### Return type

[**Job**](../Models/Job.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getTeam"></a>
# **getTeam**
> Team getTeam(teamId)

Get a team

    Get detailed information about a team. TIER 3️⃣ | ROLES &gt; All_AUTHENTICATED_USERS.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]

### Return type

[**Team**](../Models/Team.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTeamChannelTabs"></a>
# **getTeamChannelTabs**
> List getTeamChannelTabs(teamId, channelId)

Get team channel tabs

    Get team channel tabs. TIER 3️⃣ | ROLES &gt; All_AUTHENTICATED_USERS.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]
 **channelId** | **String**| The team channel ID. | [default to null]

### Return type

[**List**](../Models/TeamChannelTab.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTeamChannels"></a>
# **getTeamChannels**
> List getTeamChannels(teamId)

Get team channels

    Get team channels. TIER 3️⃣ | ROLES &gt; All_AUTHENTICATED_USERS.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]

### Return type

[**List**](../Models/TeamChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTeamPrimaryChannel"></a>
# **getTeamPrimaryChannel**
> TeamChannel getTeamPrimaryChannel(teamId)

Get the primary channel of a team

    Get the primary channel of a team. TIER 3️⃣ | ROLES &gt; All_AUTHENTICATED_USERS.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]

### Return type

[**TeamChannel**](../Models/TeamChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

