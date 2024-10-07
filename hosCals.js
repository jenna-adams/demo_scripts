// Get the current time
let now = new Date();

// Function to calculate future date-time in ISO 8601 format
function calculateFutureDateTime(hours) {
  let futureDateTime = new Date(now.getTime() + hours * 60 * 60 * 1000);
  return futureDateTime.toISOString();
}

// Calculate future date-times for each category
let restIn = calculateFutureDateTime(8);        // 8 hours from now
let cycleLeft = calculateFutureDateTime(60);    // 60 hours from now
let workdayLeft = calculateFutureDateTime(14);  // 14 hours from now
let drivingLeft = calculateFutureDateTime(11);  // 11 hours from now

// Construct the required output
let hoursOfService = {
  "hours_of_service": [
    {
      "value_type": "string",
      "value": "On",
      "label": "Duty Status"
    },
    {
      "value_type": "countdown",
      "value": workdayLeft,    // ISO 8601 date-time format
      "label": "Workday left"
    },
    {
      "value_type": "countdown",
      "value": cycleLeft,      // ISO 8601 date-time format
      "label": "Cycle left"
    },
    {
      "value_type": "countdown",
      "value": restIn,         // ISO 8601 date-time format
      "label": "Rest in",
      "limits_driving_range": true
    },
    {
      "value_type": "countdown",
      "value": drivingLeft,    // ISO 8601 date-time format
      "label": "Driving left"
    }
  ]
};

// Output the result in JSON format
console.log(JSON.stringify(hoursOfService, null, 3));

