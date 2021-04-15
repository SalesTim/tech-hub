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
 * The TeamProvisioningRequestTemplate model module.
 * @module model/TeamProvisioningRequestTemplate
 * @version 1.0.0
 */
class TeamProvisioningRequestTemplate {
    /**
     * Constructs a new <code>TeamProvisioningRequestTemplate</code>.
     * Template to be applied to the provisioned team
     * @alias module:model/TeamProvisioningRequestTemplate
     * @param id {String} The template ID
     */
    constructor(id) { 
        
        TeamProvisioningRequestTemplate.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>TeamProvisioningRequestTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamProvisioningRequestTemplate} obj Optional instance to populate.
     * @return {module:model/TeamProvisioningRequestTemplate} The populated <code>TeamProvisioningRequestTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamProvisioningRequestTemplate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The template ID
 * @member {String} id
 */
TeamProvisioningRequestTemplate.prototype['id'] = undefined;






export default TeamProvisioningRequestTemplate;

