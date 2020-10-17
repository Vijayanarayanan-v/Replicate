import React,{Component} from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";


class  TweetBox extends Component 
{ 
 


  render() {    

  return (
    <div className="TweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar />
          <input type="text" placeholder="what's happening?" className="form-control" onChange={this.props.onchange}></input>
        </div>
        <input
          className="tweetBox_image"
          type="File"
          placeholder=" optional:Enter Image URL"
          onChange ={this.props.fileupload}
          accept="image/x-png,image/gif,image/jpeg" 
        ></input>
       
        <Button className="tweetbox_tweetbutton"> Post</Button>
      </form>
    </div>
  );
}
}

export default TweetBox;
