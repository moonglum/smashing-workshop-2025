// Example of using native Date API for date/time operations

// Creating a Date
const date = new Date(2024, 2, 15); // Note: months are 0-based
console.log("Date:", date.toISOString().split("T")[0]); // 2024-03-15

// Adding duration to a date
const futureDate = new Date(date);
futureDate.setDate(futureDate.getDate() + 7);
futureDate.setMonth(futureDate.getMonth() + 1);
console.log("Future date:", futureDate.toISOString().split("T")[0]); // 2024-04-22

// Creating a time
const time = new Date();
time.setHours(13, 45, 30);
console.log("Time:", time.toTimeString().split(" ")[0]); // 13:45:30

// Creating a DateTime by combining date and time
const dateTime = new Date(2024, 2, 15, 13, 45, 30);
console.log("DateTime:", dateTime.toISOString().replace("Z", "")); // 2024-03-15T13:45:30

// Working with different time zones
const now = new Date();
console.log("Now:", now.toISOString());

// Converting between time zones
// Note: Native Date API has limited timezone support
const nyTime = new Date(
  now.toLocaleString("en-US", { timeZone: "America/New_York" })
);
const tokyoTime = new Date(
  now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" })
);

console.log(
  "New York:",
  nyTime.toLocaleString("en-US", { timeZone: "America/New_York" })
);
console.log(
  "Tokyo:",
  tokyoTime.toLocaleString("en-US", { timeZone: "Asia/Tokyo" })
);

// Calculating duration between dates
const startDate = new Date(2024, 0, 1);
const endDate = new Date(2024, 11, 31);
const duration = endDate.getTime() - startDate.getTime();
const durationInDays = Math.floor(duration / (1000 * 60 * 60 * 24));
console.log("Duration in days:", durationInDays); // 365

// Comparing dates
const isAfter = endDate > startDate;
console.log("End date is after start date:", isAfter); // true

// Working with calendar systems
// Note: Native Date API doesn't support different calendar systems directly
// Would need external libraries for Hebrew calendar support
console.log("Hebrew calendar date: Requires external library");

// Arithmetic with durations
const workWeekInDays = 5;
const workMonthInDays = workWeekInDays * 4;
console.log("Work month duration in days:", workMonthInDays); // 20
