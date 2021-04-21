#
# SalesTim API
# The unified Microsoft Teams Governance API. Visit our [Tech Hub](https://developers.salestim.com/api/) for more information. 
# Version: 1.2.1
# Contact: support@salestim.com
# Generated by OpenAPI Generator: https://openapi-generator.tech
#

<#
.SYNOPSIS

No summary available.

.DESCRIPTION

The template audience targeting policy.

.PARAMETER Enabled
Defines if the template should be restricted to specific audiences or not.
.PARAMETER RulesWithTags
Defines the audience targeting rules (With the tags HTML representation).
.PARAMETER Rules
Defines the audience targeting rules (Without the tags HTML representation).
.OUTPUTS

CatalogTemplateTemplateConfigurationAudienceTargeting<PSCustomObject>
#>

function Initialize-CatalogTemplateTemplateConfigurationAudienceTargeting {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Enabled},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${RulesWithTags},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Rules}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => CatalogTemplateTemplateConfigurationAudienceTargeting' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "enabled" = ${Enabled}
            "rulesWithTags" = ${RulesWithTags}
            "rules" = ${Rules}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to CatalogTemplateTemplateConfigurationAudienceTargeting<PSCustomObject>

.DESCRIPTION

Convert from JSON to CatalogTemplateTemplateConfigurationAudienceTargeting<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

CatalogTemplateTemplateConfigurationAudienceTargeting<PSCustomObject>
#>
function ConvertFrom-JsonToCatalogTemplateTemplateConfigurationAudienceTargeting {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => CatalogTemplateTemplateConfigurationAudienceTargeting' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in CatalogTemplateTemplateConfigurationAudienceTargeting
        $AllProperties = ("enabled", "rulesWithTags", "rules")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "enabled"))) { #optional property not found
            $Enabled = $null
        } else {
            $Enabled = $JsonParameters.PSobject.Properties["enabled"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "rulesWithTags"))) { #optional property not found
            $RulesWithTags = $null
        } else {
            $RulesWithTags = $JsonParameters.PSobject.Properties["rulesWithTags"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "rules"))) { #optional property not found
            $Rules = $null
        } else {
            $Rules = $JsonParameters.PSobject.Properties["rules"].value
        }

        $PSO = [PSCustomObject]@{
            "enabled" = ${Enabled}
            "rulesWithTags" = ${RulesWithTags}
            "rules" = ${Rules}
        }

        return $PSO
    }

}

