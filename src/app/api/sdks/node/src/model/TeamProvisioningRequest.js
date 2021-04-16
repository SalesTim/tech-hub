/**
 * SalesTim API
 * The unified Microsoft Teams Governance API. Visit our [Tech Hub](https://developers.salestim.com/api/) for more information. 
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support@salestim.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TeamProvisioningRequestTeam from './TeamProvisioningRequestTeam';
import TeamProvisioningRequestTemplate from './TeamProvisioningRequestTemplate';

/**
 * The TeamProvisioningRequest model module.
 * @module model/TeamProvisioningRequest
 * @version 1.2.0
 */
class TeamProvisioningRequest {
    /**
     * Constructs a new <code>TeamProvisioningRequest</code>.
     * A request to provision a team based on a template from your corporate catalog. See [https://developers.salestim.com/api/reference/Models/ProvisioningRequest](https://developers.salestim.com/api/reference/Models/ProvisioningRequest) for more information.
     * @alias module:model/TeamProvisioningRequest
     */
    constructor() { 
        
        TeamProvisioningRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamProvisioningRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamProvisioningRequest} obj Optional instance to populate.
     * @return {module:model/TeamProvisioningRequest} The populated <code>TeamProvisioningRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamProvisioningRequest();

            if (data.hasOwnProperty('template')) {
                obj['template'] = TeamProvisioningRequestTemplate.constructFromObject(data['template']);
            }
            if (data.hasOwnProperty('team')) {
                obj['team'] = TeamProvisioningRequestTeam.constructFromObject(data['team']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TeamProvisioningRequestTemplate} template
 */
TeamProvisioningRequest.prototype['template'] = undefined;

/**
 * @member {module:model/TeamProvisioningRequestTeam} team
 */
TeamProvisioningRequest.prototype['team'] = undefined;

/**
 * Metadata from the app client as a JSON object. See [https://developers.salestim.com/api/reference/Models/AppMetadata](https://developers.salestim.com/api/reference/Models/VirtualAppMetadata) for more information.
 * @member {Object} metadata
 */
TeamProvisioningRequest.prototype['metadata'] = undefined;






export default TeamProvisioningRequest;

