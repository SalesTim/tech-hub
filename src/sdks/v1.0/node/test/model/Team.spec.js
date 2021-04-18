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
    instance = new SalesTimApi.Team();
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

  describe('Team', function() {
    it('should create an instance of Team', function() {
      // uncomment below and update the code to test Team
      //var instane = new SalesTimApi.Team();
      //expect(instance).to.be.a(SalesTimApi.Team);
    });

    it('should have the property odataContext (base name: "@odata.context")', function() {
      // uncomment below and update the code to test the property odataContext
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property createdDateTime (base name: "createdDateTime")', function() {
      // uncomment below and update the code to test the property createdDateTime
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property internalId (base name: "internalId")', function() {
      // uncomment below and update the code to test the property internalId
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property classification (base name: "classification")', function() {
      // uncomment below and update the code to test the property classification
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property specialization (base name: "specialization")', function() {
      // uncomment below and update the code to test the property specialization
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property visibility (base name: "visibility")', function() {
      // uncomment below and update the code to test the property visibility
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property webUrl (base name: "webUrl")', function() {
      // uncomment below and update the code to test the property webUrl
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property isArchived (base name: "isArchived")', function() {
      // uncomment below and update the code to test the property isArchived
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property isMembershipLimitedToOwners (base name: "isMembershipLimitedToOwners")', function() {
      // uncomment below and update the code to test the property isMembershipLimitedToOwners
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property discoverySettings (base name: "discoverySettings")', function() {
      // uncomment below and update the code to test the property discoverySettings
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property memberSettings (base name: "memberSettings")', function() {
      // uncomment below and update the code to test the property memberSettings
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property guestSettings (base name: "guestSettings")', function() {
      // uncomment below and update the code to test the property guestSettings
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property messagingSettings (base name: "messagingSettings")', function() {
      // uncomment below and update the code to test the property messagingSettings
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

    it('should have the property funSettings (base name: "funSettings")', function() {
      // uncomment below and update the code to test the property funSettings
      //var instance = new SalesTimApi.Team();
      //expect(instance).to.be();
    });

  });

}));