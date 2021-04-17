import React, { Component } from "react";

class CommentInput extends Component {
  state={
    comment: "",
    comments: []
  }

  handleChange = (e) => this.setState({ comment: e.target.value })
  addComment = (e) => {
    e.preventDefault();
    this.setState({comments: [...this.state.comments, this.state.comment], comment: ""})

  }
  render() {
    return (
      <form onSubmit={this.addComment}>
        <textarea placeholder="Enter comments" onChange={this.handleChange} value={this.state.comment} />
        <button type="submit">Submit</button>
      </form>
    );
  }

};
export default CommentInput;