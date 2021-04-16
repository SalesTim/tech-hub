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

Object representing an approval team member. See See [https://developers.salestim.com/api/reference/Models/ApprovalTeamMember](https://developers.salestim.com/api/reference/Models/ApprovalTeamMember) for more information.

.PARAMETER Id
User ID (From Active Directory)
.PARAMETER Name
User Display Name (From Active Directory)
.OUTPUTS

ApprovalTeamMember<PSCustomObject>
#>

function Initialize-ApprovalTeamMember {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Id},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Name}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => ApprovalTeamMember' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "id" = ${Id}
            "name" = ${Name}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to ApprovalTeamMember<PSCustomObject>

.DESCRIPTION

Convert from JSON to ApprovalTeamMember<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

ApprovalTeamMember<PSCustomObject>
#>
function ConvertFrom-JsonToApprovalTeamMember {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => ApprovalTeamMember' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in ApprovalTeamMember
        $AllProperties = ("id", "name")
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

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "name"))) { #optional property not found
            $Name = $null
        } else {
            $Name = $JsonParameters.PSobject.Properties["name"].value
        }

        $PSO = [PSCustomObject]@{
            "id" = ${Id}
            "name" = ${Name}
        }

        return $PSO
    }

}

