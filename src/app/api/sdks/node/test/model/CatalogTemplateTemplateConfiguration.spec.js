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
    instance = new SalesTimApi.CatalogTemplateTemplateConfiguration();
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

  describe('CatalogTemplateTemplateConfiguration', function() {
    it('should create an instance of CatalogTemplateTemplateConfiguration', function() {
      // uncomment below and update the code to test CatalogTemplateTemplateConfiguration
      //var instane = new SalesTimApi.CatalogTemplateTemplateConfiguration();
      //expect(instance).to.be.a(SalesTimApi.CatalogTemplateTemplateConfiguration);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SalesTimApi.CatalogTemplateTemplateConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SalesTimApi.CatalogTemplateTemplateConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new SalesTimApi.CatalogTemplateTemplateConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property pictureUrl (base name: "pictureUrl")', function() {
      // uncomment below and update the code to test the property pictureUrl
      //var instance = new SalesTimApi.CatalogTemplateTemplateConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new SalesTimApi.CatalogTemplateTemplateConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new SalesTimApi.CatalogTemplateTemplateConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property system (base name: "system")', function() {
      // uncomment below and update the code to test the property system
      //var instance = new SalesTimApi.CatalogTemplateTemplateConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property singleton (base name: "singleton")', function() {
      // uncomment below and update the code to test the property singleton
      //var instance = new SalesTimApi.CatalogTemplateTemplateConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property domId (base name: "domId")', function() {
      // uncomment below and update the code to test the property domId
      //var instance = new SalesTimApi.CatalogTemplateTemplateConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property approval (base name: "approval")', function() {
      // uncomment below and update the code to test the property approval
      //var instance = new SalesTimApi.CatalogTemplateTemplateConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property permanentMembership (base name: "permanentMembership")', function() {
      // uncomment below and update the code to test the property permanentMembership
      //var instance = new SalesTimApi.CatalogTemplateTemplateConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property audienceTargeting (base name: "audienceTargeting")', function() {
      // uncomment below and update the code to test the property audienceTargeting
      //var instance = new SalesTimApi.CatalogTemplateTemplateConfiguration();
      //expect(instance).to.be();
    });

  });

}));
