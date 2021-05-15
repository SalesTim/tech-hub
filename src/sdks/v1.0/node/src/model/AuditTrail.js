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
 * The AuditTrail model module.
 * @module model/AuditTrail
 * @version 1.2.1
 */
class AuditTrail {
    /**
     * Constructs a new <code>AuditTrail</code>.
     * A SalesTim audit trail.
     * @alias module:model/AuditTrail
     */
    constructor() { 
        
        AuditTrail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuditTrail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuditTrail} obj Optional instance to populate.
     * @return {module:model/AuditTrail} The populated <code>AuditTrail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuditTrail();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Audit trail code
 * @member {String} code
 */
AuditTrail.prototype['code'] = undefined;

/**
 * Audit trail category
 * @member {String} category
 */
AuditTrail.prototype['category'] = undefined;

/**
 * A collection of audit trail fields
 * @member {Array.<String>} fields
 */
AuditTrail.prototype['fields'] = undefined;






export default AuditTrail;
