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

/**
 * The TeamFunSettings model module.
 * @module model/TeamFunSettings
 * @version 1.2.0
 */
class TeamFunSettings {
    /**
     * Constructs a new <code>TeamFunSettings</code>.
     * @alias module:model/TeamFunSettings
     */
    constructor() { 
        
        TeamFunSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamFunSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamFunSettings} obj Optional instance to populate.
     * @return {module:model/TeamFunSettings} The populated <code>TeamFunSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamFunSettings();

            if (data.hasOwnProperty('allowGiphy')) {
                obj['allowGiphy'] = ApiClient.convertToType(data['allowGiphy'], 'Boolean');
            }
            if (data.hasOwnProperty('giphyContentRating')) {
                obj['giphyContentRating'] = ApiClient.convertToType(data['giphyContentRating'], 'String');
            }
            if (data.hasOwnProperty('allowStickersAndMemes')) {
                obj['allowStickersAndMemes'] = ApiClient.convertToType(data['allowStickersAndMemes'], 'Boolean');
            }
            if (data.hasOwnProperty('allowCustomMemes')) {
                obj['allowCustomMemes'] = ApiClient.convertToType(data['allowCustomMemes'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Allow Giphy
 * @member {Boolean} allowGiphy
 */
TeamFunSettings.prototype['allowGiphy'] = undefined;

/**
 * Giphy content rating level
 * @member {String} giphyContentRating
 */
TeamFunSettings.prototype['giphyContentRating'] = undefined;

/**
 * Allow stickers and memes
 * @member {Boolean} allowStickersAndMemes
 */
TeamFunSettings.prototype['allowStickersAndMemes'] = undefined;

/**
 * Allow custom memes
 * @member {Boolean} allowCustomMemes
 */
TeamFunSettings.prototype['allowCustomMemes'] = undefined;






export default TeamFunSettings;
