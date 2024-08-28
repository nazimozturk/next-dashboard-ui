"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents as originalCalendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useMemo } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  // Adjust months for calendar events using useMemo to avoid unnecessary re-renders
  const calendarEvents = useMemo(
    () =>
      originalCalendarEvents.map((event) => ({
        ...event,
        start: new Date(
          event.start.getFullYear(),
          event.start.getMonth() - 1,
          event.start.getDate(),
          event.start.getHours(),
          event.start.getMinutes(),
          event.start.getSeconds()
        ),
        end: new Date(
          event.end.getFullYear(),
          event.end.getMonth() - 1,
          event.end.getDate(),
          event.end.getHours(),
          event.end.getMinutes(),
          event.end.getSeconds()
        ),
      })),
    [originalCalendarEvents]
  );

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 1, 8, 0, 0)}
      max={new Date(2025, 1, 17, 17, 0, 0)}
    />
  );
};

export default BigCalendar;
