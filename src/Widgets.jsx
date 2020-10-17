import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from '@material-ui/core/InputBase';
import Post from "./Post";
import TweetBox from "./TweetBox";
import "./widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
class Widgets extends Component {

  state={
    selectedfile: null,
    userstory: null  

  }

  render() {
    return (
      <div className="widgets">
        <div className="widgets__header">
          <h2>Home</h2>
        </div>
        <div className="widgets__input">
          <div className="widgets__SearchICon">
            <SearchIcon />
          </div>
          <input type="text" placeholder="Search"  />
        </div>
        {/* <div className="widgets__widgetsConatiner">
          <h2>what's happening </h2>
          <TwitterTweetEmbed tweeID={"123456789"} />
        </div> */}
        <Post text={this.props.props.story} />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

export default Widgets;
