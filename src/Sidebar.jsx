import React, { Component } from "react";
import './Sidebar.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import SidebarOption from './SidebarOption'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from "@material-ui/core"
class Sidebar extends Component {

    render() {
    return (
        <div className="sidebar">      
        {/* <TwitterIcon className="sidebar__twitterIcon"></TwitterIcon> */}
        <SidebarOption active Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={SearchIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />
        {/* <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button> */}
        
        </div>
    )
    }

}

export default Sidebar;