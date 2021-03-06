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

JSON representation of the error

.PARAMETER Code
The HTTP error code
.PARAMETER Message
The error message
.PARAMETER InnerError
No description available.
.OUTPUTS

ApiErrorError<PSCustomObject>
#>

function Initialize-ApiErrorError {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Code},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Message},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${InnerError}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => ApiErrorError' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "code" = ${Code}
            "message" = ${Message}
            "innerError" = ${InnerError}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to ApiErrorError<PSCustomObject>

.DESCRIPTION

Convert from JSON to ApiErrorError<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

ApiErrorError<PSCustomObject>
#>
function ConvertFrom-JsonToApiErrorError {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => ApiErrorError' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in ApiErrorError
        $AllProperties = ("code", "message", "innerError")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "code"))) { #optional property not found
            $Code = $null
        } else {
            $Code = $JsonParameters.PSobject.Properties["code"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "message"))) { #optional property not found
            $Message = $null
        } else {
            $Message = $JsonParameters.PSobject.Properties["message"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "innerError"))) { #optional property not found
            $InnerError = $null
        } else {
            $InnerError = $JsonParameters.PSobject.Properties["innerError"].value
        }

        $PSO = [PSCustomObject]@{
            "code" = ${Code}
            "message" = ${Message}
            "innerError" = ${InnerError}
        }

        return $PSO
    }

}

