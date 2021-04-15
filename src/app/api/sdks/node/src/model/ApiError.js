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
import ApiErrorError from './ApiErrorError';

/**
 * The ApiError model module.
 * @module model/ApiError
 * @version 1.0.0
 */
class ApiError {
    /**
     * Constructs a new <code>ApiError</code>.
     * A generic API error
     * @alias module:model/ApiError
     */
    constructor() { 
        
        ApiError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiError} obj Optional instance to populate.
     * @return {module:model/ApiError} The populated <code>ApiError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiError();

            if (data.hasOwnProperty('@odata.context')) {
                obj['@odata.context'] = ApiClient.convertToType(data['@odata.context'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiErrorError.constructFromObject(data['error']);
            }
        }
        return obj;
    }


}

/**
 * oData context of the request
 * @member {String} @odata.context
 */
ApiError.prototype['@odata.context'] = undefined;

/**
 * @member {module:model/ApiErrorError} error
 */
ApiError.prototype['error'] = undefined;






export default ApiError;

