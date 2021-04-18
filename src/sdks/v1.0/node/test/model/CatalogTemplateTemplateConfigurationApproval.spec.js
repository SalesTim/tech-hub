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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SalesTimApi);
  }
}(this, function(expect, SalesTimApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SalesTimApi.CatalogTemplateTemplateConfigurationApproval();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CatalogTemplateTemplateConfigurationApproval', function() {
    it('should create an instance of CatalogTemplateTemplateConfigurationApproval', function() {
      // uncomment below and update the code to test CatalogTemplateTemplateConfigurationApproval
      //var instane = new SalesTimApi.CatalogTemplateTemplateConfigurationApproval();
      //expect(instance).to.be.a(SalesTimApi.CatalogTemplateTemplateConfigurationApproval);
    });

    it('should have the property requireApproval (base name: "requireApproval")', function() {
      // uncomment below and update the code to test the property requireApproval
      //var instance = new SalesTimApi.CatalogTemplateTemplateConfigurationApproval();
      //expect(instance).to.be();
    });

    it('should have the property approvalTeam (base name: "approvalTeam")', function() {
      // uncomment below and update the code to test the property approvalTeam
      //var instance = new SalesTimApi.CatalogTemplateTemplateConfigurationApproval();
      //expect(instance).to.be();
    });

  });

}));