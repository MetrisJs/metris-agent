"use strict";
/*global describe, it, before, beforeEach, after, afterEach, expect, should */

var metris = require("../../metris/index.js"),
  metrisBase,
  httpServer = require('http').createServer(),
  EventEmitter = require('events').EventEmitter,
  mockServer;


describe("Base", function () {

  describe.skip("constructor", function () {
    /*
    it("should throw an error if httpServer is missing", function () {
      expect(metris.Base.prototype.parseArguments.bind(metris.Base.prototype))
        .to.throw("Error: argument(s) missing.");
    });
    */
  });

  /*
   **************************** Configurations ****************************
   */

  describe("set: server", function () {
    it("should verify that httpServer is a Server object", function () {
      metrisBase = new metris.Base();

      expect(function() {metrisBase.server = 'fake object';}).to.throw("httpServer must be a http server object.");
    });
  });
  describe("get: server", function () {
    it("should show an error if server not set before getter called", function () {
      metrisBase = new metris.Base();

      expect(function () {metrisBase.server}).to.throw("httpServer not set.");
    });

    it("should have a getter", function () {
      metrisBase = new metris.Base();

      metrisBase.server = httpServer;

      expect(metrisBase.server).to.equal(httpServer);
    });
  });

  describe("set: name", function () {
    /**
     * @todo create tests for this once they become necessary. removed old test because they're no longer relevant
     */
    it("name should accept only ascii or utf8", function () {
      var fakeObject = {"fake": "object"};
      expect(function () {metrisBase.name = fakeObject}).to.throw(/name must be a string/);

    });
    it("should accept be between 1 & 20 chars long", function () {
      var baseName = "123456789012345678901";
      expect(function() {metrisBase.name = baseName;}).to.throw(/name must be between 1-20 chars/);

      var baseName = "";
      expect(function() {metrisBase.name = baseName;}).to.throw(/name must be between 1-20 chars/);
    });
  });

  describe("get: name", function () {
    it("should return name from private variable", function () {
      var newBaseName = "some new name";

      metrisBase.name = newBaseName;

      expect(metrisBase.name).to.equal(newBaseName);
    });
  });


  /*
   **************************** Core Metris Base Functionalities ****************************
   */
  describe("private functions", function () {
    it("get a randomly generated key for this request", function () {
      var randomKey = metrisBase._generateRandomKeyForIncomingRequest();

      expect(randomKey).to.be.a.string;
    });
  });

  describe("newIncomingHttpRequest()", function () {
    beforeEach(function () {
      metrisBase = new metris.Base();
      mockServer = new EventEmitter();
    });

    it("can only be called once per incoming request", function () {
      /** @todo */
    });


    it("provides a method to retrieve request given its key", function () {
      /** @todo */
    });

    it.skip("sets the time of incoming request as a private field in request", function () {
      var eventEmitter = require('events').EventEmitter,
        request = {},
        response = {};

      eventEmitter.on('request', function (request, response) {
        metrisBase.initializeIncomingRequest(request, response);
      });

      expect(request._metris.startTime).to.be.a.number;
    });
    it("adds the incoming request to a list of requests in the metris base");


    describe("sets a event handlers for all major request & response events that metris should be listening", function () {
      it("listens to request event");
      it("listens to end event");
      it("listens to finish event");
      it("listens to error event");
    });


  });
});
