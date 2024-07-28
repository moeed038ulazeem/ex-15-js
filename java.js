///PROBLEM 1
//var num = 123.456789;
//var afterFix = num.toFixed(2)
//console.log(afterFix)





//PROBLEM #2
var now = new Date();
function formatNumber(value) {
  return value < 10 ? '0' + value : value;
}
var year = now.getFullYear();
var month = formatNumber(now.getMonth() + 1); // Months are zero-based, so add 1
var day = formatNumber(now.getDate());
var hours = formatNumber(now.getHours());
var minutes = formatNumber(now.getMinutes());
var formattedDate = `${year}-${month}-${day}`;
var formattedTime = `${hours}:${minutes}`;
console.log(`Date: ${formattedDate}`);
console.log(`Time: ${formattedTime}`);










/////PROBLEM 3
// Define the birthdate (format: YYYY-MM-DD)
var birthdateStr = '2004-05-23'; // Example birthdate
var birthdate = new Date(birthdateStr);
var today = new Date();
function getNextBirthdate(today, birthdate) {
  var nextBirthdate = new Date(birthdate);
  nextBirthdate.setFullYear(today.getFullYear());
  if (nextBirthdate < today) {
    nextBirthdate.setFullYear(today.getFullYear() + 1);
  }
  return nextBirthdate;
}
var nextOccurrence = getNextBirthdate(today, birthdate);
var millisecondsPerDay = 1000 * 60 * 60 * 24;
var daysLeft = Math.ceil((nextOccurrence - today) / millisecondsPerDay);
console.log(`Number of days left until the next occurrence of the birthdate: ${daysLeft}`);









////problem #4
// Define the two time strings
var time1Str = "14:30";
var time2Str = "16:45";
function timeToMinutes(timeStr) {
  var [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}
var time1Minutes = timeToMinutes(time1Str);
var time2Minutes = timeToMinutes(time2Str);
var differenceInMinutes = Math.abs(time2Minutes - time1Minutes);
console.log(`Difference between the two times: ${differenceInMinutes} minutes`);









/////PROBLEM # 05

// Given monetary amount
const amount = 1234.567;
const formattedAmount = `$${amount.toFixed(2)}`;
console.log(formattedAmount);
