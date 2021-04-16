import React from "react";
import { shallow } from "enzyme";
import App from "App";
import CommentInput from "components/CommentInput";
import Comments from "components/Comments";

describe("<App />", () => {
  it("shows the comment list", () => {
    // Given
    const wrapped = shallow(<App />);

    // then
    expect(wrapped.find(Comments).length).toEqual(1);
  });

  it("shows comment input", () => {
    // Given
    const wrapped = shallow(<App />);

    // then
    expect(wrapped.find(CommentInput).length).toEqual(1);
  });
});
