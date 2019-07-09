import React from "react";
import { mount } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  mount(<App />);
});

it("renders my podcast time title", () => {
  const app = mount(<App />);
  expect(app.find("h1").text()).toBe("Music Time");
});

//to equal if it's an object
