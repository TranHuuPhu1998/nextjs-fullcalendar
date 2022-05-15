import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

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
    { title: "Event 1", id: "1" },
    { title: "Event 2", id: "2" },
    { title: "Event 3", id: "3" },
    { title: "Event 4", id: "4" },
    { title: "Event 5", id: "5" },
  ],
};

const Home: NextPage = () => {
  useEffect(() => {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl as any, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id,
        };
      },
    });
  }, []);

  return <div className={styles.container}></div>;
};

export default Home;
