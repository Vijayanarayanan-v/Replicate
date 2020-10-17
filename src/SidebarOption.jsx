import React, { Component } from "react";
 import './sidebaroptions.css'

 class SidebarOption extends Component
 {
//function SidebarOption({active,text, Icon}){
    render(){
    return(

        <div className={`sidebarOption ${this.props.active && 'sidebarOption--active'}`}>
            <this.props.Icon/>
            <h5>{this.props.text} </h5>
        </div>
    )
    }
}

export default SidebarOption;