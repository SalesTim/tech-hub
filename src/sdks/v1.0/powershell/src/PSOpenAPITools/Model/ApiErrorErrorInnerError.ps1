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

JSON representation of the inner error (If available)

.PARAMETER Date
Inner error date
.PARAMETER RequestId
Server-side generated unique request identifier
.OUTPUTS

ApiErrorErrorInnerError<PSCustomObject>
#>

function Initialize-ApiErrorErrorInnerError {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[System.DateTime]]
        ${Date},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${RequestId}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => ApiErrorErrorInnerError' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "date" = ${Date}
            "request-id" = ${RequestId}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to ApiErrorErrorInnerError<PSCustomObject>

.DESCRIPTION

Convert from JSON to ApiErrorErrorInnerError<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

ApiErrorErrorInnerError<PSCustomObject>
#>
function ConvertFrom-JsonToApiErrorErrorInnerError {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => ApiErrorErrorInnerError' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in ApiErrorErrorInnerError
        $AllProperties = ("date", "request-id")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "date"))) { #optional property not found
            $Date = $null
        } else {
            $Date = $JsonParameters.PSobject.Properties["date"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "request-id"))) { #optional property not found
            $RequestId = $null
        } else {
            $RequestId = $JsonParameters.PSobject.Properties["request-id"].value
        }

        $PSO = [PSCustomObject]@{
            "date" = ${Date}
            "request-id" = ${RequestId}
        }

        return $PSO
    }

}

