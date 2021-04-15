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

No description available.

.PARAMETER Id
Team Channel Tab Teams App ID
.PARAMETER ExternalId
Team Channel Tab Teams App External ID
.PARAMETER DisplayName
Team Channel Tab Teams App Display Name
.PARAMETER DistributionMethod
Team Channel Tab Teams App Distribution Method
.OUTPUTS

TeamChannelTabTeamsApp<PSCustomObject>
#>

function Initialize-TeamChannelTabTeamsApp {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Id},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${ExternalId},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${DisplayName},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${DistributionMethod}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => TeamChannelTabTeamsApp' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "id" = ${Id}
            "externalId" = ${ExternalId}
            "displayName" = ${DisplayName}
            "distributionMethod" = ${DistributionMethod}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to TeamChannelTabTeamsApp<PSCustomObject>

.DESCRIPTION

Convert from JSON to TeamChannelTabTeamsApp<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

TeamChannelTabTeamsApp<PSCustomObject>
#>
function ConvertFrom-JsonToTeamChannelTabTeamsApp {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => TeamChannelTabTeamsApp' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in TeamChannelTabTeamsApp
        $AllProperties = ("id", "externalId", "displayName", "distributionMethod")
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

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "externalId"))) { #optional property not found
            $ExternalId = $null
        } else {
            $ExternalId = $JsonParameters.PSobject.Properties["externalId"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "displayName"))) { #optional property not found
            $DisplayName = $null
        } else {
            $DisplayName = $JsonParameters.PSobject.Properties["displayName"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "distributionMethod"))) { #optional property not found
            $DistributionMethod = $null
        } else {
            $DistributionMethod = $JsonParameters.PSobject.Properties["distributionMethod"].value
        }

        $PSO = [PSCustomObject]@{
            "id" = ${Id}
            "externalId" = ${ExternalId}
            "displayName" = ${DisplayName}
            "distributionMethod" = ${DistributionMethod}
        }

        return $PSO
    }

}

