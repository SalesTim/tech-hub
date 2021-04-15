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
    instance = new SalesTimApi.CatalogTemplateClonedTeam();
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

  describe('CatalogTemplateClonedTeam', function() {
    it('should create an instance of CatalogTemplateClonedTeam', function() {
      // uncomment below and update the code to test CatalogTemplateClonedTeam
      //var instane = new SalesTimApi.CatalogTemplateClonedTeam();
      //expect(instance).to.be.a(SalesTimApi.CatalogTemplateClonedTeam);
    });

    it('should have the property teamId (base name: "teamId")', function() {
      // uncomment below and update the code to test the property teamId
      //var instance = new SalesTimApi.CatalogTemplateClonedTeam();
      //expect(instance).to.be();
    });

    it('should have the property teamName (base name: "teamName")', function() {
      // uncomment below and update the code to test the property teamName
      //var instance = new SalesTimApi.CatalogTemplateClonedTeam();
      //expect(instance).to.be();
    });

    it('should have the property includeApps (base name: "includeApps")', function() {
      // uncomment below and update the code to test the property includeApps
      //var instance = new SalesTimApi.CatalogTemplateClonedTeam();
      //expect(instance).to.be();
    });

    it('should have the property includeTabs (base name: "includeTabs")', function() {
      // uncomment below and update the code to test the property includeTabs
      //var instance = new SalesTimApi.CatalogTemplateClonedTeam();
      //expect(instance).to.be();
    });

    it('should have the property includeSettings (base name: "includeSettings")', function() {
      // uncomment below and update the code to test the property includeSettings
      //var instance = new SalesTimApi.CatalogTemplateClonedTeam();
      //expect(instance).to.be();
    });

    it('should have the property includeChannels (base name: "includeChannels")', function() {
      // uncomment below and update the code to test the property includeChannels
      //var instance = new SalesTimApi.CatalogTemplateClonedTeam();
      //expect(instance).to.be();
    });

    it('should have the property includeMembers (base name: "includeMembers")', function() {
      // uncomment below and update the code to test the property includeMembers
      //var instance = new SalesTimApi.CatalogTemplateClonedTeam();
      //expect(instance).to.be();
    });

  });

}));
