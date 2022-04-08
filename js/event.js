$(document).ready(function() {
    // var active_date = $('#calendar').evoCalendar('getActiveDate');
    $('#calendar').evoCalendar({
      'todayHighlight': true,
      calendarEvents: [
        {
          id: 'event1',
          name: "New Year",
          discription:"Happy new year",
          date: "January/1/2020",
          type: "holiday",
          everyYear: true
        },
        {
          id: 'event2',
          name: "Vacation Leave",
          badge: "02/13 - 02/15",
          date: ["February/13/2020", "February/15/2020"],
          description: "Vacation leave for 3 days.",
          type: "event",
          color: "#63d867",
          everyYear: true
        }
      ]

    })
})
