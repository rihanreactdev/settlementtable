import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
  
const localizer = momentLocalizer(moment)

const myEventsList=['dairy','farm']
  
const MyCalendar = props => (
  <div>
    <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{height: 500}}
    />
  </div>
)
export default MyCalendar