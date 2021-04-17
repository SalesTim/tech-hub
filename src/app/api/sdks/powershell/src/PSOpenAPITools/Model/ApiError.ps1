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

A generic API error

.PARAMETER OdataContext
oData context of the request
.PARAMETER VarError
No description available.
.OUTPUTS

ApiError<PSCustomObject>
#>

function Initialize-ApiError {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${OdataContext},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${VarError}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => ApiError' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "@odata.context" = ${OdataContext}
            "error" = ${VarError}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to ApiError<PSCustomObject>

.DESCRIPTION

Convert from JSON to ApiError<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

ApiError<PSCustomObject>
#>
function ConvertFrom-JsonToApiError {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => ApiError' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in ApiError
        $AllProperties = ("@odata.context", "error")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "@odata.context"))) { #optional property not found
            $OdataContext = $null
        } else {
            $OdataContext = $JsonParameters.PSobject.Properties["@odata.context"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "error"))) { #optional property not found
            $VarError = $null
        } else {
            $VarError = $JsonParameters.PSobject.Properties["error"].value
        }

        $PSO = [PSCustomObject]@{
            "@odata.context" = ${OdataContext}
            "error" = ${VarError}
        }

        return $PSO
    }

}
