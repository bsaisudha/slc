import React from 'react';
import "./sidebar.css"
import {Home,Settings,LibraryBooks,ExitToApp,AccountCircle,Chat} from "@material-ui/icons"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <Home className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <LibraryBooks className="sidebarIcon"/>
                        My Courses
                    </li>
                    <li className="sidebarListItem">
                        <Settings className="sidebarIcon"/>
                        Settings
                    </li>
                    <li className="sidebarListItem">
                        <AccountCircle className="sidebarIcon"/>
                        Edit Profile
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        Chat
                    </li>
                    <li className="sidebarListItem">
                        <ExitToApp className="sidebarIcon"/>
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
