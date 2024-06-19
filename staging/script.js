/*  clock */
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const digitalHours = document.querySelector('.digital-hours');
const digitalMinutes = document.querySelector('.digital-minutes');
const dateDisplay = document.querySelector('.date-display');
const year = document.querySelector('.year');

clock = () => {
  let today = new Date();
  let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
  let m = today.getMinutes(); // 0 - 59
  let s = today.getSeconds(); // 0 - 59

  h *= 30; // 12 * 30 = 360deg
  m *= 6;
  s *= 6; // 60 * 6 = 360deg

  rotation(hours, h);
  rotation(minutes, m);
  rotation(seconds, s);

  // Update digital clock
  digitalHours.textContent = today.getHours().toString().padStart(2, '0');
  digitalMinutes.textContent = today.getMinutes().toString().padStart(2, '0');

  // Update date display in the format dd MMMM
  const optionsDay = { day: '2-digit' };
  const optionsMonth = { month: 'long' };
  const day = today.toLocaleDateString('en-US', optionsDay);
  const month = today.toLocaleDateString('en-US', optionsMonth);
  const formattedDate = `${day} ${month}`;
  dateDisplay.textContent = formattedDate;
  year.textContent = today.getFullYear();

  // call every second
  setTimeout(clock, 500);
}

rotation = (target, val) => {
  target.style.transform =  `rotate(${val}deg)`;
}

window.onload = clock();