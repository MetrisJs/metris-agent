"use strict";

/**
 * Base Constructor
 *
 * The Metris Base is the hub that tracks requests to your webserver. Each base is assigned to one http server.
 *  This is to ensure maximum flexibility in structuring your dashboard while making it easy to trace request
 *  routes in the case of load balanced services. If you're not interested in that, you can get the aggregate
 *  by giving them the same name.
 *
 * @param httpServer {http.Server}
 * @param baseName {string} - name to identify this server [1-20 alphanumeric characters long]
 * @constructor
 */
function Base(httpServer, baseName) {
  if (!(this instanceof Base)) {
    return new Base(httpServer);
  }

  /**
   * "Pointer" to an http Server instance. These are the requests this base instance will listen to
   * @private
   * @type {http.Server}
   */
  var _server = null;

  /**
   * Name of this base. All requests to this base will be grouped under this name.
   * @private
   * @type {string}
   */
  var _name = null;

  //Setters & Getters
  this.__defineSetter__("server", function (httpServer) {
    if (typeof httpServer !== "object") {
      throw Error("httpServer must be a http server object.");
    }
    if (httpServer.constructor.name !== "Server") {
      throw Error("httpServer must be a http server object.");
    }

    _server = httpServer;
  });
  this.__defineGetter__("server", function () {
    if (_server === null) {
      throw Error("this base instance does httpServer not set.");
    }
    return _server;
  });


  this.__defineSetter__("name", function (serverName) {

    if (typeof serverName !== "string") {
      throw Error("the name must be a string.");
    } else if ((serverName.length > 20) || (serverName.length < 1)) {
      throw Error("name must be between 1-20 chars");
    }

    _name = serverName;
  });
  this.__defineGetter__("name", function () {
    return _name;
  });
}


Base.prototype = {
  /**
   * @private
   */
  _generateRandomKeyForIncomingRequest: require("./lib/generateIdForRequest.js")
};

module.exports = Base;
