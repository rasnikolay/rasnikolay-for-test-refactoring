class Calendar {
  addEvent(event) {
    // some logic to add event
  }
}

class Director {
  calendar: Calendar;

  constructor(calendar: Calendar) {
    this.calendar = calendar;
  }

  scheduleMeeting(event) {
    this.calendar.addEvent(event);
  }
}
