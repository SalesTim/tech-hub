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

A template from your corporate catalog. See [https://developers.salestim.com/api/reference/Models/CatalogTemplate](https://developers.salestim.com/api/reference/Models/CatalogTemplate) for more information.

.PARAMETER TemplateConfiguration
No description available.
.PARAMETER ClonedTeam
No description available.
.PARAMETER NewTeam
No description available.
.OUTPUTS

CatalogTemplate<PSCustomObject>
#>

function Initialize-CatalogTemplate {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${TemplateConfiguration},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ClonedTeam},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${NewTeam}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => CatalogTemplate' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "templateConfiguration" = ${TemplateConfiguration}
            "clonedTeam" = ${ClonedTeam}
            "newTeam" = ${NewTeam}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to CatalogTemplate<PSCustomObject>

.DESCRIPTION

Convert from JSON to CatalogTemplate<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

CatalogTemplate<PSCustomObject>
#>
function ConvertFrom-JsonToCatalogTemplate {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => CatalogTemplate' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in CatalogTemplate
        $AllProperties = ("templateConfiguration", "clonedTeam", "newTeam")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "templateConfiguration"))) { #optional property not found
            $TemplateConfiguration = $null
        } else {
            $TemplateConfiguration = $JsonParameters.PSobject.Properties["templateConfiguration"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "clonedTeam"))) { #optional property not found
            $ClonedTeam = $null
        } else {
            $ClonedTeam = $JsonParameters.PSobject.Properties["clonedTeam"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "newTeam"))) { #optional property not found
            $NewTeam = $null
        } else {
            $NewTeam = $JsonParameters.PSobject.Properties["newTeam"].value
        }

        $PSO = [PSCustomObject]@{
            "templateConfiguration" = ${TemplateConfiguration}
            "clonedTeam" = ${ClonedTeam}
            "newTeam" = ${NewTeam}
        }

        return $PSO
    }

}

