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

.PARAMETER AllowGiphy
Allow Giphy
.PARAMETER GiphyContentRating
Giphy content rating level
.PARAMETER AllowStickersAndMemes
Allow stickers and memes
.PARAMETER AllowCustomMemes
Allow custom memes
.OUTPUTS

TeamFunSettings<PSCustomObject>
#>

function Initialize-TeamFunSettings {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${AllowGiphy},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${GiphyContentRating},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${AllowStickersAndMemes},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${AllowCustomMemes}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => TeamFunSettings' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "allowGiphy" = ${AllowGiphy}
            "giphyContentRating" = ${GiphyContentRating}
            "allowStickersAndMemes" = ${AllowStickersAndMemes}
            "allowCustomMemes" = ${AllowCustomMemes}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to TeamFunSettings<PSCustomObject>

.DESCRIPTION

Convert from JSON to TeamFunSettings<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

TeamFunSettings<PSCustomObject>
#>
function ConvertFrom-JsonToTeamFunSettings {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => TeamFunSettings' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in TeamFunSettings
        $AllProperties = ("allowGiphy", "giphyContentRating", "allowStickersAndMemes", "allowCustomMemes")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "allowGiphy"))) { #optional property not found
            $AllowGiphy = $null
        } else {
            $AllowGiphy = $JsonParameters.PSobject.Properties["allowGiphy"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "giphyContentRating"))) { #optional property not found
            $GiphyContentRating = $null
        } else {
            $GiphyContentRating = $JsonParameters.PSobject.Properties["giphyContentRating"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "allowStickersAndMemes"))) { #optional property not found
            $AllowStickersAndMemes = $null
        } else {
            $AllowStickersAndMemes = $JsonParameters.PSobject.Properties["allowStickersAndMemes"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "allowCustomMemes"))) { #optional property not found
            $AllowCustomMemes = $null
        } else {
            $AllowCustomMemes = $JsonParameters.PSobject.Properties["allowCustomMemes"].value
        }

        $PSO = [PSCustomObject]@{
            "allowGiphy" = ${AllowGiphy}
            "giphyContentRating" = ${GiphyContentRating}
            "allowStickersAndMemes" = ${AllowStickersAndMemes}
            "allowCustomMemes" = ${AllowCustomMemes}
        }

        return $PSO
    }

}

