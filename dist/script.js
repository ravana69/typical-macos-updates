document.addEventListener("DOMContentLoaded", function(){
	let timesLeft = [
			// years
			136,50,12,
			// days
			350,100,10,2,1,
			// hours
			15,10,9,11,13,15,10,11,5,3,1,2,
			// minutes
			30,29,15,14,13,12,10,5,5,3,3,1
		],
		timeUnits = ["year","day","hour","minute"],
		// items in timesLeft to change units
		unitChangePts = [3,8,20],
		progress = -1,
		int = 3000,
		update = function() {
			++progress;
			let timeLeftVal = timesLeft[progress],
				timeLeftUnit = timeUnits[timeUnits.length - 1];
			
			// get proper unit
			for (let p in unitChangePts) {
				if (progress < unitChangePts[p]) {
					timeLeftUnit = timeUnits[p];
					break;
				}
			}
			if (timeLeftVal != 1) {
				timeLeftUnit += "s";
			}
			
			document.getElementById("time-left").innerHTML = timeLeftVal + " " + timeLeftUnit;
			
			// loop
			if (progress < timesLeft.length - 1) {
				setTimeout(update, int);
			}
		};
	
	setTimeout(function(){
		update();
		document.getElementsByClassName("progress")[0].classList.add("filling");
	}, int);
});