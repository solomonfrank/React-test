import React from "react";
import { shallow } from "enzyme";
import App from "App";
import CommentInput from "components/CommentInput";
import Comments from "components/Comments";

describe("<App />", () => {
    // Given
    let wrapped ;
    beforeEach(() => {
    wrapped  = shallow(<App />);
    })
  it("shows the comment list", () => {

    // then
    expect(wrapped.find(Comments).length).toEqual(1);
 
  });

  it("shows comment input", () => {
    

   // then
    expect(wrapped.find(CommentInput).length).toEqual(1);
  });
  
});
