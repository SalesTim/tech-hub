# ApprovalTeamMember
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | User ID (From Active Directory) | [optional] 
**Name** | **String** | User Display Name (From Active Directory) | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalTeamMember = Initialize-PSOpenAPIToolsApprovalTeamMember  -Id null `
 -Name null
```

- Convert the resource to JSON
```powershell
$ApprovalTeamMember | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

