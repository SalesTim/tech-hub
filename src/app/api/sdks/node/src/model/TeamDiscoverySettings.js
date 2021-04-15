/**
 * SalesTim API
 * The unified Microsoft Teams Governance API. Visit our [Tech Hub](https://developers.salestim.com/api/) for more information. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@salestim.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TeamDiscoverySettings model module.
 * @module model/TeamDiscoverySettings
 * @version 1.0.0
 */
class TeamDiscoverySettings {
    /**
     * Constructs a new <code>TeamDiscoverySettings</code>.
     * @alias module:model/TeamDiscoverySettings
     */
    constructor() { 
        
        TeamDiscoverySettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamDiscoverySettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamDiscoverySettings} obj Optional instance to populate.
     * @return {module:model/TeamDiscoverySettings} The populated <code>TeamDiscoverySettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamDiscoverySettings();

            if (data.hasOwnProperty('showInTeamsSearchAndSuggestions')) {
                obj['showInTeamsSearchAndSuggestions'] = ApiClient.convertToType(data['showInTeamsSearchAndSuggestions'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Is the team shown in search suggestions
 * @member {Boolean} showInTeamsSearchAndSuggestions
 */
TeamDiscoverySettings.prototype['showInTeamsSearchAndSuggestions'] = undefined;






export default TeamDiscoverySettings;

