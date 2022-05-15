import type { NextPage } from "next";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useEffect } from "react";
import "../styles/Home.module.css";

const initState = {
  calendarEvents: [
    {
      title: "Atlanta Monster",
      start: new Date("2019-04-04 00:00"),
      id: "99999998",
    },
    {
      title: "My Favorite Murder",
      start: new Date("2019-04-05 00:00"),
      id: "99999999",
    },
  ],
  events: [
    { title: "Event 1", id: "1", start: new Date() },
    { title: "Event 2", id: "2", start: new Date() },
    { title: "Event 3", id: "3", start: new Date() },
    { title: "Event 4", id: "4", start: new Date() },
    { title: "Event 5", id: "5", start: new Date() },
  ],
};

const Home: NextPage = () => {
  const calendarComponentRef = React.createRef<FullCalendar>();
  const [calendarWeekends, setCalendarWeekends] = React.useState(true);
  const [calendarEvents, setCalendarEvents] = React.useState(
    initState.calendarEvents
  );

  const toggleWeekends = () => {
    setCalendarWeekends(!calendarWeekends);
  };

  const gotoPast = () => {
    let calendarApi = calendarComponentRef.current!.getApi();
    calendarApi.gotoDate("2000-01-01");
  };

  const handleDateClick = (arg: any) => {
    if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
      setCalendarEvents((prevState: any) => {
        return prevState.concat({
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay,
        });
      });
    }
  };

  return (
    <div className="demo-app">
      <div className="demo-app-top">
        <button onClick={toggleWeekends}>toggle weekends</button>&nbsp;
        <button onClick={gotoPast}>go to a date in the past</button>&nbsp;
        (also, click a date/time to add an event)
      </div>
      <div className="demo-app-calendar">
        <FullCalendar
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          ref={calendarComponentRef}
          weekends={calendarWeekends}
          events={calendarEvents}
          dateClick={handleDateClick}
          droppable={true}
        />
      </div>
    </div>
  );
};

export default Home;
