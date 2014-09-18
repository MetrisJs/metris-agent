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

  describe("set: server", function () {
    it("should verify that httpServer is a Server object", function () {
      metrisBase = new metris.Base();

      expect(function() {metrisBase.server = 'klingon';}).to.throw("httpServer must be a http server object.");
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
    it("should assign the server name if the serverName parameter is given", function () {
      var someServerName = "some name";

      metrisBase = new metris.Base(httpServer, someServerName);

      expect(metrisBase._name).to.equal(someServerName);
    });
  });

});
