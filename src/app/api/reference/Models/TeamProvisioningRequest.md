# TeamProvisioningRequest
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateId** | [**String**](string.md) | The template ID | [default to null]
**teamName** | [**String**](string.md) | Requested team name | [default to null]
**teamDescription** | [**String**](string.md) | Requested team description | [optional] [default to null]
**teamWelcomeMessage** | [**String**](string.md) | Requested team welcome message | [optional] [default to null]
**members** | [**List**](MemberUserIdentifier.md) | An array of UserIdentifier. See [https://developers.salestim.com/api/reference/Models/UserIdentifier](https://developers.salestim.com/api/reference/Models/UserIdentifier) for more information. | [optional] [default to null]
**owners** | [**List**](OwnerUserIdentifier.md) | An array of UserIdentifier. See [https://developers.salestim.com/api/reference/Models/UserIdentifier](https://developers.salestim.com/api/reference/Models/UserIdentifier) for more information. | [optional] [default to null]
**sensitivityLabel** | [**String**](string.md) | Sensitivity label to apply to the generated team and its underlying group | [optional] [default to null]
**virtualAppMetadata** | [**Object**](.md) | Metadata from the virtual app client as a JSON object. See [https://developers.salestim.com/api/reference/Models/VirtualAppMetadata](https://developers.salestim.com/api/reference/Models/VirtualAppMetadata) for more information. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

