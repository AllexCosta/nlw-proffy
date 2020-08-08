const btnAddTime = document.querySelector("#add-time");
btnAddTime.addEventListener('click', addTime);

function addTime(){
  const newSchedule = document.querySelector('.schedule-item').cloneNode(true);
  const newFieldSchedule = newSchedule.querySelectorAll('input');
  
  newFieldSchedule.forEach(function(schedule)  {
    schedule.value = "";
  });

  document.querySelector('#schedule-items').appendChild(newSchedule);
}