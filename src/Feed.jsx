import React, { Component } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";

class Feed extends Component {



  render() {
    return (
      <div className="feed">
        {/* <div className="feed__header">
          <h2>Home</h2>
        </div> */}

        <TweetBox fileupload={this.props.fileUpload}  onchange={this.props.onchange} />
        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </div>
    );
  }
}

export default Feed;
