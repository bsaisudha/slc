import React from 'react'
import "./topbar.css"
import {NotificationsNone,Fullscreen,Search} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className="topLeft">
                <span className="logo">Student Learning Centre</span>
            </div>
             <div className="topRight">
             <div className="topbarIconContainer">
                    <Search/>
                 </div>
                 <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                 </div>
                 <div className="topbarIconContainer">
                    <Fullscreen/>
                 </div>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vWL06qbKx_pfPr-bFrIjw1t7y5ogYgIiNITgPVmXcHS6DSN3T793hhNAWRngBnR3dec&usqp=CAU" alt="" className="topAvatar" />
             </div>
        </div>
    </div>
  )
}
