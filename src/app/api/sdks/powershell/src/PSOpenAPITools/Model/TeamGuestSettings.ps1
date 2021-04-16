#
# SalesTim API
# The unified Microsoft Teams Governance API. Visit our [Tech Hub](https://developers.salestim.com/api/) for more information. 
# Version: 1.2.0
# Contact: support@salestim.com
# Generated by OpenAPI Generator: https://openapi-generator.tech
#

<#
.SYNOPSIS

No summary available.

.DESCRIPTION

No description available.

.PARAMETER AllowCreateUpdateChannels
Allow create/update channels by guests
.PARAMETER AllowDeleteChannels
Allow delete channels by guests
.OUTPUTS

TeamGuestSettings<PSCustomObject>
#>

function Initialize-TeamGuestSettings {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${AllowCreateUpdateChannels},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${AllowDeleteChannels}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => TeamGuestSettings' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "allowCreateUpdateChannels" = ${AllowCreateUpdateChannels}
            "allowDeleteChannels" = ${AllowDeleteChannels}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to TeamGuestSettings<PSCustomObject>

.DESCRIPTION

Convert from JSON to TeamGuestSettings<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

TeamGuestSettings<PSCustomObject>
#>
function ConvertFrom-JsonToTeamGuestSettings {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => TeamGuestSettings' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in TeamGuestSettings
        $AllProperties = ("allowCreateUpdateChannels", "allowDeleteChannels")
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

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "allowDeleteChannels"))) { #optional property not found
            $AllowDeleteChannels = $null
        } else {
            $AllowDeleteChannels = $JsonParameters.PSobject.Properties["allowDeleteChannels"].value
        }

        $PSO = [PSCustomObject]@{
            "allowCreateUpdateChannels" = ${AllowCreateUpdateChannels}
            "allowDeleteChannels" = ${AllowDeleteChannels}
        }

        return $PSO
    }

}

