const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
]);

module.exports = withTM({
  // custom config goes here
});
