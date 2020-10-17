import React, { Component } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "./Post.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

class Post extends Component {
  //function Post({ displayname, username, verified, text, image, avatar }) {
  render() {
    return (
      <div className="post">
        <div className="post__avatar">
          <Avatar />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                vijay{" "}
                <span className="post_headerSpecial">
                  <VerifiedUserIcon className="post__badge" />
                  @vijayyajiv
                </span>
              </h3>
            </div>
            <div className="post__headerdescription">
              <p> {this.props.text}</p>
            </div>
          </div>

          <img
            src="https://media.giphy.com/media/9Gnbm29r7ftUA/giphy.gif"
            alt=""
          />
          <div className="post__Footer">
            <ChatBubbleOutlineIcon fontsize="small" />
            <RepeatIcon fontsize="small" />
            <FavoriteBorderIcon fontsize="small" />
            <PublishIcon fontsize="small" />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
