"use strict";

const chai = require("chai");
const {
  function_exists,
  variable_exists,
  file_exists,
  module_exists,
  property_exists,
  env_var_exists,
} = require("../src");

chai.should();

global.Hello = () => {};

describe("Check whether function is exist or not.", () => {
  it("Equals true", () => {
    const is_function_exists = function_exists("Hello");
    is_function_exists.should.equal(true);
  });
  it("Equals false", () => {
    const is_function_exists = function_exists("Hello2");
    is_function_exists.should.equal(false);
  });
});

global.hello = "Hi";

describe("Check whether variable is exist or not.", () => {
  it("Equals true", async () => {
    const is_variable_exists = await variable_exists("hello");
    is_variable_exists.should.equal(true);
  });
  it("Equals false", async () => {
    const is_variable_exists = await variable_exists("hello2");
    is_variable_exists.should.equal(false);
  });
});

describe("Check whether file is exist or not.", () => {
  it("Equals true", async () => {
    const is_file_exists = await file_exists("./tests/sample/filename.js");
    is_file_exists.should.equal(true);
  });
  it("Equals false", async () => {
    const is_file_exists = await file_exists("./tests/sample/filename2.js");
    is_file_exists.should.equal(false);
  });
});

describe("Check whether module is exist or not.", () => {
  it("Equals true", () => {
    const is_module_exists = module_exists("yargs");
    is_module_exists.should.equal(true);
  });
  it("Equals false", () => {
    const is_module_exists = module_exists("yargs2");
    is_module_exists.should.equal(false);
  });
});

let obj = {
  hello: "HI",
};

describe("Check whether property is exist or not.", () => {
  it("Equals true", () => {
    const is_property_exists = property_exists("hello", obj);
    is_property_exists.should.equal(true);
  });
  it("Equals false", async () => {
    const is_property_exists = property_exists("hello2", obj);
    is_property_exists.should.equal(false);
  });
});

describe("Check whether user environment is exist or not.", () => {
  it("Equals true", () => {
    const is_env_var_exists = env_var_exists("EXISTS", obj);
    is_env_var_exists.should.equal(true);
  });
  it("Equals false", async () => {
    const is_env_var_exists = env_var_exists("EXISTS2", obj);
    is_env_var_exists.should.equal(false);
  });
});
