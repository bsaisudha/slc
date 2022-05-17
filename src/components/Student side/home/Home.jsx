import React from 'react';
import "./home.css"
import Coursesinfo from "../coursesInfo/CoursesInfo"
import WidgetSm from '../widgetSm/WidgetSm';
import WidgetLg from '../widgetLg/WidgetLg';

export default function Home() {
  return (
    <div className="home">
        <span className="head">Courses in Progress</span>
        <Coursesinfo/>
        <div className='homeWidgets'>
          <WidgetLg/>
          <WidgetSm/>
        </div>
    </div>
  )
}