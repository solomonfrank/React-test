import React from "react";
import { Provider } from "react-redux";
import setupStore from "store";

const Root = (props) => (
  <Provider store={setupStore()}>{props.children}</Provider>
);

export default Root;
