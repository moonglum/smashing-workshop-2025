// Example of using the Temporal API for date/time operations
import { Temporal } from "@js-temporal/polyfill";

// Creating a Temporal.PlainDate
const date = Temporal.PlainDate.from("2024-03-15");
console.log("Date:", date.toString()); // 2024-03-15

// Adding duration to a date
const futureDate = date.add({ days: 7, months: 1 });
console.log("Future date:", futureDate.toString()); // 2024-04-22

// Creating a Temporal.PlainTime
const time = Temporal.PlainTime.from("13:45:30");
console.log("Time:", time.toString()); // 13:45:30

// Creating a Temporal.PlainDateTime by combining date and time
const dateTime = date.toPlainDateTime(time);
console.log("DateTime:", dateTime.toString()); // 2024-03-15T13:45:30

// Working with different time zones
const nyZone = new Temporal.TimeZone("America/New_York");
const tokyoZone = new Temporal.TimeZone("Asia/Tokyo");

// Current instant in UTC
const now = Temporal.Now.instant();
console.log("Now:", now.toString());

// Converting between time zones
const nyTime = now.toZonedDateTimeISO(nyZone);
const tokyoTime = now.toZonedDateTimeISO(tokyoZone);

console.log("New York:", nyTime.toString());
console.log("Tokyo:", tokyoTime.toString());

// Calculating duration between dates
const startDate = Temporal.PlainDate.from("2024-01-01");
const endDate = Temporal.PlainDate.from("2024-12-31");
const duration = startDate.until(endDate);
console.log("Duration:", duration.toString()); // P365D

// Comparing dates
const isAfter = Temporal.PlainDate.compare(endDate, startDate) > 0;
console.log("End date is after start date:", isAfter); // true

// Working with calendar systems
const hebrewDate = new Temporal.PlainDate(5784, 7, 4, "hebrew");
console.log("Hebrew calendar date:", hebrewDate.toString()); // 5784-07-04[u-ca=hebrew]

// Arithmetic with durations
const workWeek = Temporal.Duration.from({ days: 5 });
const workMonth = Temporal.Duration.from({ days: workWeek.days * 4 });
console.log("Work month duration:", workMonth.toString()); // P20D

// Advanced timezone handling examples
console.log("\n=== Advanced Timezone Features ===");

// 1. Accessing Timezone Properties
const nyZoneFull = new Temporal.TimeZone("America/New_York");
console.log("NY Timezone Properties:");
console.log(
  "- Current offset:",
  nyZoneFull.getOffsetStringFor(Temporal.Now.instant())
);
console.log(
  "- Previous offset transition:",
  nyZoneFull.getPreviousTransition(Temporal.Now.instant())?.toString()
);
console.log(
  "- Next offset transition:",
  nyZoneFull.getNextTransition(Temporal.Now.instant())?.toString()
);

// 2. Handling Ambiguous Times (DST Fall Back)
console.log("\nDST Fallback Handling:");
const ambiguousNYTime = "2023-11-05T01:30-04:00[America/New_York]";

const earlier = Temporal.ZonedDateTime.from(ambiguousNYTime, {
  disambiguation: "earlier",
});
const later = Temporal.ZonedDateTime.from(ambiguousNYTime, {
  disambiguation: "later",
});
const compatible = Temporal.ZonedDateTime.from(ambiguousNYTime, {
  disambiguation: "compatible",
});

console.log("- Earlier interpretation:", earlier.toString());
console.log("- Later interpretation:", later.toString());
console.log("- Compatible interpretation:", compatible.toString());

// 3. Explicit Timezone Conversions
const sydneyZone = new Temporal.TimeZone("Australia/Sydney");
const currentInstant = Temporal.Now.instant();
console.log("\nExplicit Timezone Conversions:");
console.log("- UTC:", currentInstant.toString());
console.log(
  "- Sydney:",
  currentInstant.toZonedDateTimeISO(sydneyZone).toString()
);
console.log(
  "- New York:",
  currentInstant.toZonedDateTimeISO(nyZoneFull).toString()
);

// 4. Working with Timezone Offsets vs Names
const fixedOffset = new Temporal.TimeZone("-05:00");
const nyDateTime = currentInstant.toZonedDateTimeISO(nyZoneFull);
const fixedDateTime = currentInstant.toZonedDateTimeISO(fixedOffset);
console.log("\nTimezone vs Fixed Offset:");
console.log("- NY with full timezone:", nyDateTime.toString());
console.log("- NY with fixed offset:", fixedDateTime.toString());

// 5. Historical Timezone Changes
const historical = Temporal.ZonedDateTime.from(
  "1945-08-14T19:00-04:00[America/New_York]"
);
console.log("\nHistorical Date Handling:");
console.log("- WWII Victory Day in NY:", historical.toString());
console.log("- Offset at that time:", historical.offset);
