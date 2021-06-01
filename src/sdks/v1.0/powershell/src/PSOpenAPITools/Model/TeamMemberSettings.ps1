#
# SalesTim API
# The unified Microsoft Teams Governance API. Visit our [Tech Hub](https://developers.salestim.com/api/) for more information. 
# Version: 1.2.3
# Contact: support@salestim.com
# Generated by OpenAPI Generator: https://openapi-generator.tech
#

<#
.SYNOPSIS

No summary available.

.DESCRIPTION

No description available.

.PARAMETER AllowCreateUpdateChannels
Allow create update channels
.PARAMETER AllowCreatePrivateChannels
Allow create private channels
.PARAMETER AllowDeleteChannels
Allow delete channels
.PARAMETER AllowAddRemoveApps
Allow add/remove apps
.PARAMETER AllowCreateUpdateRemoveTabs
Allow create/remove tabs
.PARAMETER AllowCreateUpdateRemoveConnectors
Allow create/remove connectors
.OUTPUTS

TeamMemberSettings<PSCustomObject>
#>

function Initialize-TeamMemberSettings {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${AllowCreateUpdateChannels},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${AllowCreatePrivateChannels},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${AllowDeleteChannels},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${AllowAddRemoveApps},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${AllowCreateUpdateRemoveTabs},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${AllowCreateUpdateRemoveConnectors}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => TeamMemberSettings' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "allowCreateUpdateChannels" = ${AllowCreateUpdateChannels}
            "allowCreatePrivateChannels" = ${AllowCreatePrivateChannels}
            "allowDeleteChannels" = ${AllowDeleteChannels}
            "allowAddRemoveApps" = ${AllowAddRemoveApps}
            "allowCreateUpdateRemoveTabs" = ${AllowCreateUpdateRemoveTabs}
            "allowCreateUpdateRemoveConnectors" = ${AllowCreateUpdateRemoveConnectors}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to TeamMemberSettings<PSCustomObject>

.DESCRIPTION

Convert from JSON to TeamMemberSettings<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

TeamMemberSettings<PSCustomObject>
#>
function ConvertFrom-JsonToTeamMemberSettings {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => TeamMemberSettings' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in TeamMemberSettings
        $AllProperties = ("allowCreateUpdateChannels", "allowCreatePrivateChannels", "allowDeleteChannels", "allowAddRemoveApps", "allowCreateUpdateRemoveTabs", "allowCreateUpdateRemoveConnectors")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "allowCreateUpdateChannels"))) { #optional property not found
            $AllowCreateUpdateChannels = $null
        } else {
            $AllowCreateUpdateChannels = $JsonParameters.PSobject.Properties["allowCreateUpdateChannels"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "allowCreatePrivateChannels"))) { #optional property not found
            $AllowCreatePrivateChannels = $null
        } else {
            $AllowCreatePrivateChannels = $JsonParameters.PSobject.Properties["allowCreatePrivateChannels"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "allowDeleteChannels"))) { #optional property not found
            $AllowDeleteChannels = $null
        } else {
            $AllowDeleteChannels = $JsonParameters.PSobject.Properties["allowDeleteChannels"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "allowAddRemoveApps"))) { #optional property not found
            $AllowAddRemoveApps = $null
        } else {
            $AllowAddRemoveApps = $JsonParameters.PSobject.Properties["allowAddRemoveApps"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "allowCreateUpdateRemoveTabs"))) { #optional property not found
            $AllowCreateUpdateRemoveTabs = $null
        } else {
            $AllowCreateUpdateRemoveTabs = $JsonParameters.PSobject.Properties["allowCreateUpdateRemoveTabs"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "allowCreateUpdateRemoveConnectors"))) { #optional property not found
            $AllowCreateUpdateRemoveConnectors = $null
        } else {
            $AllowCreateUpdateRemoveConnectors = $JsonParameters.PSobject.Properties["allowCreateUpdateRemoveConnectors"].value
        }

        $PSO = [PSCustomObject]@{
            "allowCreateUpdateChannels" = ${AllowCreateUpdateChannels}
            "allowCreatePrivateChannels" = ${AllowCreatePrivateChannels}
            "allowDeleteChannels" = ${AllowDeleteChannels}
            "allowAddRemoveApps" = ${AllowAddRemoveApps}
            "allowCreateUpdateRemoveTabs" = ${AllowCreateUpdateRemoveTabs}
            "allowCreateUpdateRemoveConnectors" = ${AllowCreateUpdateRemoveConnectors}
        }

        return $PSO
    }

}

