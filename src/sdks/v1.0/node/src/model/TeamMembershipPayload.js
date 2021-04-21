/**
 * SalesTim API
 * The unified Microsoft Teams Governance API. Visit our [Tech Hub](https://developers.salestim.com/api/) for more information. 
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: support@salestim.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import User1 from './User1';

/**
 * The TeamMembershipPayload model module.
 * @module model/TeamMembershipPayload
 * @version 1.2.1
 */
class TeamMembershipPayload {
    /**
     * Constructs a new <code>TeamMembershipPayload</code>.
     * Team Membership Payload.
     * @alias module:model/TeamMembershipPayload
     * @param role {String} Team Membership Role (member/owner)
     */
    constructor(role) { 
        
        TeamMembershipPayload.initialize(this, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, role) { 
        obj['role'] = role;
    }

    /**
     * Constructs a <code>TeamMembershipPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamMembershipPayload} obj Optional instance to populate.
     * @return {module:model/TeamMembershipPayload} The populated <code>TeamMembershipPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamMembershipPayload();

            if (data.hasOwnProperty('user')) {
                obj['user'] = User1.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/User1} user
 */
TeamMembershipPayload.prototype['user'] = undefined;

/**
 * Team Membership Role (member/owner)
 * @member {String} role
 */
TeamMembershipPayload.prototype['role'] = undefined;






export default TeamMembershipPayload;

