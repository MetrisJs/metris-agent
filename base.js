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
   * @type {http.Server}
   */
  var server = null;

  /**
   * Name of this base. All requests to this base will be grouped under this name.
   * @type {string}
   */
  var name = null;

  //Setters & Getters
  this.__defineSetter__("server", function (httpServer) {
    if (typeof httpServer !== "object") {
      throw Error("httpServer must be a http server object.");
    }
    if (httpServer.constructor.name !== "Server") {
      throw Error("httpServer must be a http server object.");
    }

    server = httpServer;
  });
  this.__defineGetter__("server", function () {
    if (server === null) {
      throw Error("this base instance does httpServer not set.");
    }
    return server;
  });
}


/*
Base.prototype.parseArguments = function (httpServer, baseName) {
  if (!httpServer) {
    throw Error("Error: argument(s) missing.");
  } else if (httpServer.constructor.name !== 'Server') {
    throw Error("Error: httpServer must be a http server object.");
  }

  //Server object validated
  this._server = httpServer;

  /** @todo base name should be generated from ip and port if none given */
/*
  this._name = baseName || "";
};
*/

module.exports = Base;
