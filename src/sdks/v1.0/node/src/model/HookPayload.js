/**
 * SalesTim API
 * The unified Microsoft Teams Governance API. Visit our [Tech Hub](https://developers.salestim.com/api/) for more information. 
 *
 * The version of the OpenAPI document: 1.2.3
 * Contact: support@salestim.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import HookConfig from './HookConfig';

/**
 * The HookPayload model module.
 * @module model/HookPayload
 * @version 1.2.3
 */
class HookPayload {
    /**
     * Constructs a new <code>HookPayload</code>.
     * A webhook payload.
     * @alias module:model/HookPayload
     */
    constructor() { 
        
        HookPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HookPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HookPayload} obj Optional instance to populate.
     * @return {module:model/HookPayload} The populated <code>HookPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HookPayload();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], ['String']);
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = HookConfig.constructFromObject(data['config']);
            }
        }
        return obj;
    }


}

/**
 * Webhook name
 * @member {String} name
 */
HookPayload.prototype['name'] = undefined;

/**
 * Webhook description
 * @member {String} description
 */
HookPayload.prototype['description'] = undefined;

/**
 * Webhook events
 * @member {Array.<String>} events
 */
HookPayload.prototype['events'] = undefined;

/**
 * @member {module:model/HookConfig} config
 */
HookPayload.prototype['config'] = undefined;






export default HookPayload;

