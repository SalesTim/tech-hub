#
# SalesTim API
# The unified Microsoft Teams Governance API. Visit our [Tech Hub](https://developers.salestim.com/api/) for more information. 
# Version: 1.0.0
# Contact: support@salestim.com
# Generated by OpenAPI Generator: https://openapi-generator.tech
#

<#
.SYNOPSIS

No summary available.

.DESCRIPTION

Tab from a Channel of a Microsoft Teams team.

.PARAMETER Id
Team Channel Tab ID
.PARAMETER DisplayName
Team Channel Tab Display Name
.PARAMETER Configuration
No description available.
.PARAMETER TeamsApp
No description available.
.PARAMETER SortOrderIndex
Team Channel Tab Sort Order Index
.PARAMETER WebUrl
Team Channel Tab Web URL
.OUTPUTS

TeamChannelTab<PSCustomObject>
#>

function Initialize-TeamChannelTab {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Id},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${DisplayName},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Configuration},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${TeamsApp},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${SortOrderIndex},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${WebUrl}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => TeamChannelTab' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "id" = ${Id}
            "displayName" = ${DisplayName}
            "configuration" = ${Configuration}
            "teamsApp" = ${TeamsApp}
            "sortOrderIndex" = ${SortOrderIndex}
            "webUrl" = ${WebUrl}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to TeamChannelTab<PSCustomObject>

.DESCRIPTION

Convert from JSON to TeamChannelTab<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

TeamChannelTab<PSCustomObject>
#>
function ConvertFrom-JsonToTeamChannelTab {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => TeamChannelTab' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in TeamChannelTab
        $AllProperties = ("id", "displayName", "configuration", "teamsApp", "sortOrderIndex", "webUrl")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "id"))) { #optional property not found
            $Id = $null
        } else {
            $Id = $JsonParameters.PSobject.Properties["id"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "displayName"))) { #optional property not found
            $DisplayName = $null
        } else {
            $DisplayName = $JsonParameters.PSobject.Properties["displayName"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "configuration"))) { #optional property not found
            $Configuration = $null
        } else {
            $Configuration = $JsonParameters.PSobject.Properties["configuration"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "teamsApp"))) { #optional property not found
            $TeamsApp = $null
        } else {
            $TeamsApp = $JsonParameters.PSobject.Properties["teamsApp"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "sortOrderIndex"))) { #optional property not found
            $SortOrderIndex = $null
        } else {
            $SortOrderIndex = $JsonParameters.PSobject.Properties["sortOrderIndex"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "webUrl"))) { #optional property not found
            $WebUrl = $null
        } else {
            $WebUrl = $JsonParameters.PSobject.Properties["webUrl"].value
        }

        $PSO = [PSCustomObject]@{
            "id" = ${Id}
            "displayName" = ${DisplayName}
            "configuration" = ${Configuration}
            "teamsApp" = ${TeamsApp}
            "sortOrderIndex" = ${SortOrderIndex}
            "webUrl" = ${WebUrl}
        }

        return $PSO
    }

}

