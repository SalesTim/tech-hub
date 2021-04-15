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

.PARAMETER EntityId
Team Channel Tab Configuration Entity ID
.PARAMETER ContentUrl
Team Channel Tab Configuration Content URL
.PARAMETER WebsiteUrl
Team Channel Tab Configuration Website URL
.PARAMETER RemoveUrl
Team Channel Tab Configuration Remove URL
.OUTPUTS

TeamChannelTabConfiguration<PSCustomObject>
#>

function Initialize-TeamChannelTabConfiguration {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${EntityId},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${ContentUrl},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${WebsiteUrl},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${RemoveUrl}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => TeamChannelTabConfiguration' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "entityId" = ${EntityId}
            "contentUrl" = ${ContentUrl}
            "websiteUrl" = ${WebsiteUrl}
            "removeUrl" = ${RemoveUrl}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to TeamChannelTabConfiguration<PSCustomObject>

.DESCRIPTION

Convert from JSON to TeamChannelTabConfiguration<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

TeamChannelTabConfiguration<PSCustomObject>
#>
function ConvertFrom-JsonToTeamChannelTabConfiguration {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => TeamChannelTabConfiguration' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in TeamChannelTabConfiguration
        $AllProperties = ("entityId", "contentUrl", "websiteUrl", "removeUrl")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "entityId"))) { #optional property not found
            $EntityId = $null
        } else {
            $EntityId = $JsonParameters.PSobject.Properties["entityId"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "contentUrl"))) { #optional property not found
            $ContentUrl = $null
        } else {
            $ContentUrl = $JsonParameters.PSobject.Properties["contentUrl"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "websiteUrl"))) { #optional property not found
            $WebsiteUrl = $null
        } else {
            $WebsiteUrl = $JsonParameters.PSobject.Properties["websiteUrl"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "removeUrl"))) { #optional property not found
            $RemoveUrl = $null
        } else {
            $RemoveUrl = $JsonParameters.PSobject.Properties["removeUrl"].value
        }

        $PSO = [PSCustomObject]@{
            "entityId" = ${EntityId}
            "contentUrl" = ${ContentUrl}
            "websiteUrl" = ${WebsiteUrl}
            "removeUrl" = ${RemoveUrl}
        }

        return $PSO
    }

}

