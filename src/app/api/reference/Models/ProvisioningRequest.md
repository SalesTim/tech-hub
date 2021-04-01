# ProvisioningRequest
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateId** | [**String**](string.md) | The template ID. | [default to null]
**requestedTeamName** | [**String**](string.md) | The requested team name (as it would be filled by a user in our provisioning form). Please note, this name may not be the final one as it could be overwritten by a naming convention. | [default to null]
**requestedTeamDescription** | [**String**](string.md) | The requested team description (as it would be filled by a user in our provisioning form). Please note, this description may not be the final one as it could be overwritten by a naming convention. | [optional] [default to null]
**requestedTeamWelcomeMessage** | [**String**](string.md) | The requested team welcome message (as it would be filled by a user in our provisioning form). Please note, this welcome message may not be the final one as it could be overwritten by a naming convention. | [optional] [default to null]
**requestedMembers** | [**List**](ProvisioningRequest_requestedMembers.md) | Requested members as an array of objects. Please note, users could be identified either by their ID, UPN or email, therefore you should only fill one of these properties. If multiple properties are filled, the first one will be used using the following order of priority, ID &gt; UPN &gt; email. | [optional] [default to null]
**requestedOwners** | [**List**](ProvisioningRequest_requestedMembers.md) | Requested owners as an array of objects. Please note, users could be identified either by their ID, UPN or email, therefore you should only fill one of these properties. If multiple properties are filled, the first one will be used using the following order of priority, ID &gt; UPN &gt; email. | [optional] [default to null]
**onBehalfOf** | [**ProvisioningRequest_onBehalfOf**](ProvisioningRequest_onBehalfOf.md) |  | [optional] [default to null]
**integration** | [**ProvisioningRequest_integration**](ProvisioningRequest_integration.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

