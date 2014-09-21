"use strict";

var generateIdForRequest = require("../../lib/generateIdForRequest.js");

describe("Library: generateIdForRequest()", function () {

  it("returns a random string", function () {
    var randomId = generateIdForRequest("serverName", "127.0.0.1");

    console.log("randomId", randomId);

    expect(randomId).to.be.a.string;
  });

});