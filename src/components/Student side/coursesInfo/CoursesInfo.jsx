import './coursesInfo.css'
import {LibraryBooks} from "@material-ui/icons"
import React from 'react';

export default function Coursesinfo() {
    return (
    <div className="insights">
      <div className="sales">
        <LibraryBooks className="Icon"/>
        <div className="middle">
            <span className="left">Mathematics</span>
            <div className="progress">
            <svg className="cir">
              <circle cx='35' cy='35' r='33'></circle>
            </svg>
            <div className="number">
              <p>81%</p>
            </div>
          </div>
        </div>
        <small className="text-muted">M.Smitha</small>
      </div>
      <div className="sales">
        <LibraryBooks className="Icon"/>
        <div className="middle">
        <span className="left">Physics</span>
          <div className="progress">
            <svg className="cir">
              <circle cx='35' cy='35' r='33'></circle>
            </svg>
            <div className="number">
              <p>72%</p>
            </div>
          </div>
        </div>
        <small className="text-muted">K.Swathi</small>
      </div>
      <div className="sales">
        <LibraryBooks className="Icon"/>
        <div className="middle">
        <span className="left">Chemistry</span>
          <div className="progress">
            <svg className="cir">
              <circle cx='35' cy='35' r='33'></circle>
            </svg>
            <div className="number">
              <p>61%</p>
            </div>
          </div>
        </div>
        <small className="text-muted">P.Anupama</small>
      </div>
    </div>
  )
}
