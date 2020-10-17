import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets.jsx";
import "./home.css";

class Home extends Component {
 state = {
    Files: [],
    story:null

  };

  fileChange = (event) => 
  {   
    event.preventDefault();
    const file=event.target.files[0];    
    this.setState((state)=>{
      const Filelist= [...state.Files,file];    
      const storydata = state.story;       
      return {
        Files : Filelist,
        story: storydata
      };
    });  
    console.log(this.state.Files);  
    // const value = [{ selectedfile: null, story: null }];
    // value[0].selectedfile = event.target.files[0];   
    // this.setState({storyobject:[...this.state.storyobject,...value]});    
    // console.log(this.state.storyobject);
    // console.log(this.state.storyobject[0]);
  };

  Onchange=(e)=>
  {
    e.preventDefault();
    this.setState({story: e.target.value});
    console.log(this.state.story);
  }

  fileUpload = () => {};

  render() {
    return (
      <div className="home">
        <Sidebar /> 
        <Widgets props={this.state}/>
        <Feed fileUpload={this.fileChange}  onchange={this.Onchange}/>
      </div>
    );
  }
}

export default Home;
