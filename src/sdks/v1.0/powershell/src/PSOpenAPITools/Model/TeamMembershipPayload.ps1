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

Team Membership Payload.

.PARAMETER User
No description available.
.PARAMETER Role
Team Membership Role (member/owner)
.OUTPUTS

TeamMembershipPayload<PSCustomObject>
#>

function Initialize-TeamMembershipPayload {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${User},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Role}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => TeamMembershipPayload' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        if ($Role -eq $null) {
            throw "invalid value for 'Role', 'Role' cannot be null."
        }


        $PSO = [PSCustomObject]@{
            "user" = ${User}
            "role" = ${Role}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to TeamMembershipPayload<PSCustomObject>

.DESCRIPTION

Convert from JSON to TeamMembershipPayload<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

TeamMembershipPayload<PSCustomObject>
#>
function ConvertFrom-JsonToTeamMembershipPayload {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => TeamMembershipPayload' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in TeamMembershipPayload
        $AllProperties = ("user", "role")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        If ([string]::IsNullOrEmpty($Json) -or $Json -eq "{}") { # empty json
            throw "Error! Empty JSON cannot be serialized due to the required property 'role' missing."
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "role"))) {
            throw "Error! JSON cannot be serialized due to the required property 'role' missing."
        } else {
            $Role = $JsonParameters.PSobject.Properties["role"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "user"))) { #optional property not found
            $User = $null
        } else {
            $User = $JsonParameters.PSobject.Properties["user"].value
        }

        $PSO = [PSCustomObject]@{
            "user" = ${User}
            "role" = ${Role}
        }

        return $PSO
    }

}

