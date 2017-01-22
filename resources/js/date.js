// Calculate percentage of day elapsed
function getDayProgress() {
	var date = new Date();

	var minutes_so_far = date.getMinutes() + (date.getHours() - 5) * 60;
  console.log(minutes_so_far);

	var minutes_in_a_day = 1440;

	var day_progress = minutes_so_far / minutes_in_a_day;

  console.log("Day progress: " + day_progress);

  var percent = (day_progress * 100).toFixed(2);

  document.getElementById('day-progress').innerHTML = percent + '% of day elapsed';
}

getDayProgress();
