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
import CatalogTemplateClonedTeam from './CatalogTemplateClonedTeam';
import CatalogTemplateNewTeam from './CatalogTemplateNewTeam';
import CatalogTemplateTemplateConfiguration from './CatalogTemplateTemplateConfiguration';

/**
 * The CatalogTemplate model module.
 * @module model/CatalogTemplate
 * @version 1.2.0
 */
class CatalogTemplate {
    /**
     * Constructs a new <code>CatalogTemplate</code>.
     * A template from your corporate catalog. See [https://developers.salestim.com/api/reference/Models/CatalogTemplate](https://developers.salestim.com/api/reference/Models/CatalogTemplate) for more information.
     * @alias module:model/CatalogTemplate
     */
    constructor() { 
        
        CatalogTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CatalogTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CatalogTemplate} obj Optional instance to populate.
     * @return {module:model/CatalogTemplate} The populated <code>CatalogTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CatalogTemplate();

            if (data.hasOwnProperty('templateConfiguration')) {
                obj['templateConfiguration'] = CatalogTemplateTemplateConfiguration.constructFromObject(data['templateConfiguration']);
            }
            if (data.hasOwnProperty('clonedTeam')) {
                obj['clonedTeam'] = CatalogTemplateClonedTeam.constructFromObject(data['clonedTeam']);
            }
            if (data.hasOwnProperty('newTeam')) {
                obj['newTeam'] = CatalogTemplateNewTeam.constructFromObject(data['newTeam']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CatalogTemplateTemplateConfiguration} templateConfiguration
 */
CatalogTemplate.prototype['templateConfiguration'] = undefined;

/**
 * @member {module:model/CatalogTemplateClonedTeam} clonedTeam
 */
CatalogTemplate.prototype['clonedTeam'] = undefined;

/**
 * @member {module:model/CatalogTemplateNewTeam} newTeam
 */
CatalogTemplate.prototype['newTeam'] = undefined;






export default CatalogTemplate;

