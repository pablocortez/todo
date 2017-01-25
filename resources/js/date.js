// Calculate percentage of day elapsed
function getDayProgress() {
	var date = new Date();

	var minutes_so_far = date.getMinutes() + (date.getHours() * 60);

	var hour = date.getHours();

	var minutes_in_a_day = 19 * 60;

	var day_progress = minutes_so_far / minutes_in_a_day;

  var percent = (day_progress * 100).toFixed(2);

  document.getElementById('day-progress').innerHTML = percent + '% of day elapsed';

	switch (hour) {
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
			document.getElementById('day-progress').innerHTML = "0" + '% of day elapsed';
			break;
	}
}

getDayProgress();
