# ProvisioningRequestIntegrationItem
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**String**](string.md) | The item ID in the external system. For instance in a SQL database, it could be a row ID, in a CRM, it could be the application-level record ID, in a web page it could be its URL. | [optional] [default to null]
**entity** | [**String**](string.md) | The kind of item in the external system. For instance in a SQL database, it could be the name of a table such as \&quot;orders\&quot;, in a CRM, it could be the record type such as \&quot;accounts\&quot;. | [optional] [default to null]
**data** | [**Object**](.md) | Item data that could be used as part of the templating process. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

