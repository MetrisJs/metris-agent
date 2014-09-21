"use strict";

var metris = require("../../metris/index.js"),
  metrisBase,
  httpServer = require('http').createServer();


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
    it("should accept only ascii or utf8", function () {});
    it("should accept be between 1 & 20 chars long", function () {});

  });

  /*
   **************************** Core Metris Base Functionalities ****************************
   */
  describe("initializeIncomingRequest()", function () {
    it("sets the time of incoming request as a private field in request");
    it("adds the incoming request to a list of requests in the metris base");


    describe("sets a event handlers for all major request & response events that metris should be listening", function () {
      it("listens to request event");
      it("listens to end event");
      it("listens to finish event");
      it("listens to error event");
    });


  });
});
