import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

function Cdr() {
  return (
    <div className="p-2">
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView={"dayGridMonth"}
        events={[
          {
            title: "Meeting",
            start: "2024-01-16T11:09:07Z",
            extendedProps: {
              status: "done",
            },
          },
          {
            title: "Birthday Party",
            start: "2024-01-17T01:19:07Z",
            backgroundColor: "green",
            borderColor: "green",
          },
        ]}
        headerToolbar={{
          end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        height={"90vh"}
        footerToolbar={{
          end: "today prev,next",
        }}
        themeSystem="standard"
        eventDidMount={function (info) {
          info.el.style.backgroundColor = "green";
        }}
        dateClick={(e) => {
          console.log(e.date);
        }}
      />
    </div>
  );
}

export default Cdr;
