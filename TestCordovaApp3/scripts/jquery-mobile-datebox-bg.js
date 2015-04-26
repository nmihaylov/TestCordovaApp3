jQuery.extend(jQuery.mobile.datebox.prototype.options.lang, {
  'bg': {
    setDateButtonLabel: "Изберете ден",
    setTimeButtonLabel: "Set Time",
    setDurationButtonLabel: "Set Duration",
    calTodayButtonLabel: "Jump to Today",
    titleDateDialogLabel: "Ден",
    titleTimeDialogLabel: "Set Time",
    daysOfWeek: [
      "Неделя", "Понеделник", "Вторник", "Сряда",
      "Четвъртък", "Петък", "Събота"
    ],
    daysOfWeekShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthsOfYear: [
      "January", "February", "March",
      "April", "May", "June",
      "July", "August", "September",
      "October", "November", "December"
    ],
    monthsOfYearShort: [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun",
      "Jul", "Aug", "Sep",
      "Oct", "Nov", "Dec"
    ],
    durationLabel: ["Days", "Hours", "Minutes", "Seconds"],
    durationDays: ["Day", "Days"],
    tooltip: "Open Date Picker",
    nextMonth: "Next Month",
    prevMonth: "Previous Month",
    timeFormat: 12,
    headerFormat: "%A, %B %-d, %Y",
    dateFieldOrder: ["m", "d", "y"],
    timeFieldOrder: ["h", "i", "a"],
    slideFieldOrder: ["y", "m", "d"],
    dateFormat: "%m/%d/%Y",
    useArabicIndic: false,
    isRTL: false,
    calStartDay: 0,
    clearButton: "clear"
    durationOrder: ["d", "h", "i", "s"],
    meridiem: ["AM", "PM"],
    timeOutput: "%k:%M", // 12hr: "%l:%M %p", 24hr: "%k:%M",
    durationFormat: "%Dd %DA, %Dl:%DM:%DS",
    calDateListLabel: "Other Dates",
    calHeaderFormat: "%B %Y",
    calTomorrowButtonLabel: "Jump to Tomorrow"
  }
});
jQuery.extend(jQuery.mobile.datebox.prototype.options, {
  useLang: 'bg'
});