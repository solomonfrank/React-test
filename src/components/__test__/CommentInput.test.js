import { mount } from "enzyme";
import CommentInput from "../../components/CommentInput";
import Root from "Root";

describe("<CommentInput>", () => {
  let wrapper;

  beforeEach(() => {
    // Given
    wrapper = mount(<Root><CommentInput /></Root>);
  });

  // cleanup
  afterEach(() => {
    wrapper.unmount();
  });
  it("has submit button and textarea", () => {
    // Then
    expect(wrapper.find("textarea").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(1);
  });

  describe("text area action", () => {
    beforeEach(() => {
      // when
      wrapper
        .find("textarea")
        .simulate("change", { target: { value: "hello world" } });

      // then force the component to re-render to see the new type value;
      wrapper.update();
    });
    it("has a textarea user can type", () => {
      // then
      expect(wrapper.find("textarea").prop("value")).toEqual("hello world");
    });

    it("when form is submitted, clear the textarea value", () => {
      wrapper.find("form").simulate("submit");
      wrapper.update();
      expect(wrapper.find("textarea").prop("value")).toEqual("");
    });
  });
});
