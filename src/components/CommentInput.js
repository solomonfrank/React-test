import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";


class CommentInput extends Component {
  state = {
    comment: "",
    comments: [],
  };

  handleChange = (e) => this.setState({ comment: e.target.value });
  addComment = (e) => {
    e.preventDefault();
    this.props.saveComment(this.state.comment)
    this.setState({
   
      comment: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.addComment}>
        <textarea
          placeholder="Enter comments"
          onChange={this.handleChange}
          value={this.state.comment}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default connect(null, actions)(CommentInput);
