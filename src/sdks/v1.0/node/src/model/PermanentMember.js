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

/**
 * The PermanentMember model module.
 * @module model/PermanentMember
 * @version 1.2.1
 */
class PermanentMember {
    /**
     * Constructs a new <code>PermanentMember</code>.
     * Object representing a permanent member. See See [https://developers.salestim.com/api/reference/Models/PermanentMember](https://developers.salestim.com/api/reference/Models/PermanentMember) for more information.
     * @alias module:model/PermanentMember
     */
    constructor() { 
        
        PermanentMember.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermanentMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermanentMember} obj Optional instance to populate.
     * @return {module:model/PermanentMember} The populated <code>PermanentMember</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermanentMember();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * User ID (From Active Directory)
 * @member {String} id
 */
PermanentMember.prototype['id'] = undefined;

/**
 * User Display Name (From Active Directory)
 * @member {String} name
 */
PermanentMember.prototype['name'] = undefined;






export default PermanentMember;

