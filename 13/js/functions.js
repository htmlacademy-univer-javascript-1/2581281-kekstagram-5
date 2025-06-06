// function compareLength(string, maxLength){
//   return string.length() <= maxLength;
// }

// function isPalindrome(string){
//   string = string.replaceAll(' ', '').toLowerCase();
//   let reverseString = '';
//   for (let i = string.length - 1; i >= 0; i--){
//     reverseString += string.at(i);
//   }
//   return string === reverseString;
// }
// isPalindrome('ava');
// compareLength('a',1);
function parseTime(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

// eslint-disable-next-line no-unused-vars
function isMeetingWithinWorkday(startWorkday, endWorkday, meetingStart, duration) {
  const workStart = parseTime(startWorkday);
  const workEnd = parseTime(endWorkday);
  const meetingStartMin = parseTime(meetingStart);
  const meetingEnd = meetingStartMin + duration;

  return meetingStartMin >= workStart && meetingEnd <= workEnd;
}

// eslint-disable-next-line no-console
console.log(isMeetingWithinWorkday('08:00', '17:30', '14:00', 90)); // true
// eslint-disable-next-line no-console
console.log(isMeetingWithinWorkday('8:0', '10:0', '8:0', 120));// true
// eslint-disable-next-line no-console
console.log(isMeetingWithinWorkday('08:00', '14:30', '14:00', 90)); // false
// eslint-disable-next-line no-console
console.log(isMeetingWithinWorkday('14:00', '17:30', '08:0', 90)); // false
// eslint-disable-next-line no-console
console.log(isMeetingWithinWorkday('8:00', '17:30', '08:00', 900)); // false
