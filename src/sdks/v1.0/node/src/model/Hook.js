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
 * The Hook model module.
 * @module model/Hook
 * @version 1.2.3
 */
class Hook {
    /**
     * Constructs a new <code>Hook</code>.
     * A webhook.
     * @alias module:model/Hook
     */
    constructor() { 
        
        Hook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Hook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Hook} obj Optional instance to populate.
     * @return {module:model/Hook} The populated <code>Hook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Hook();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
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
 * Webhook ID
 * @member {String} id
 */
Hook.prototype['id'] = undefined;

/**
 * Webhook name
 * @member {String} name
 */
Hook.prototype['name'] = undefined;

/**
 * Webhook description
 * @member {String} description
 */
Hook.prototype['description'] = undefined;

/**
 * Is the webhook active
 * @member {Boolean} active
 */
Hook.prototype['active'] = undefined;

/**
 * Webhook events
 * @member {Array.<String>} events
 */
Hook.prototype['events'] = undefined;

/**
 * @member {module:model/HookConfig} config
 */
Hook.prototype['config'] = undefined;






export default Hook;

