const HoursValue = prompt("Enter number of hours");
const hours = parseInt(HoursValue);
const seconds = (hours * 3600);
alert(`There are ${seconds} seconds in ${hours} hour(s)`);