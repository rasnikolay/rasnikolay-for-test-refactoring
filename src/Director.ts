interface ICalendar {
  addEvent(event: unknown): void;
}

class Calendar implements ICalendar{
  addEvent(event:unknown) {
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

/* На что обратил внимание: тут точно что-то не так с SOLID, так же я бы использовал интерфейс и расширение для него
   Улучшено: unknown вместо any для последующего проверки type guard
*/