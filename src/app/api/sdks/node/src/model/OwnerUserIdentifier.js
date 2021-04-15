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
 * The OwnerUserIdentifier model module.
 * @module model/OwnerUserIdentifier
 * @version 1.0.0
 */
class OwnerUserIdentifier {
    /**
     * Constructs a new <code>OwnerUserIdentifier</code>.
     * Object representing a user. User identifier could be its ID, UPN or email. See See [https://developers.salestim.com/api/reference/Models/UserIdentifier](https://developers.salestim.com/api/reference/Models/UserIdentifier) for more information.
     * @alias module:model/OwnerUserIdentifier
     * @param id {String} User identifier
     */
    constructor(id) { 
        
        OwnerUserIdentifier.initialize(this, id);
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
     * Constructs a <code>OwnerUserIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OwnerUserIdentifier} obj Optional instance to populate.
     * @return {module:model/OwnerUserIdentifier} The populated <code>OwnerUserIdentifier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OwnerUserIdentifier();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * User identifier
 * @member {String} id
 */
OwnerUserIdentifier.prototype['id'] = undefined;






export default OwnerUserIdentifier;

