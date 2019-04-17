$(document).ready(function(){
	var jackassifyToday=new Date(),
	jackassifyCurrentDay=jackassifyToday.getDate(),
	jackassifyCurrentMonth=jackassifyToday.getMonth()+1,
	jackassifyCurrentYear=jackassifyToday.getFullYear();
	//jackassifyFiller(jackassifyCurrentYear,jackassifyCurrentMonth);
	jackassifyFiller(1998,4);

	function ballsOfSteel(year,month){ //days in month and first day of month
		var leftBall=new Date(year,month,0), //generate date for days in month
		rightBall=new Date(year,month-1,1), //generate date for first day of month
		getBalls=leftBall.getDate(), //get days in month
		getSteel=rightBall.getDay() || 7; //get first day of month
		return [getBalls,getSteel]; //return
	}

	function jackassifyFiller(jackassifyDesiredYear,jackassifyDesiredMonth){
		var jackassifyDaysInMo=ballsOfSteel(jackassifyDesiredYear,jackassifyDesiredMonth)[0],
		jackassifyFirstDayMo=ballsOfSteel(jackassifyDesiredYear,jackassifyDesiredMonth)[1]-1,
		jackassifyLastDayPrevMo=ballsOfSteel(jackassifyDesiredYear,jackassifyDesiredMonth-1)[0],
		jackassifyNextMoStart=jackassifyDaysInMo+jackassifyFirstDayMo,
		jackassifyNextMoEnd=42-jackassifyNextMoStart;
		for(a=0;a<jackassifyFirstDayMo;a++){
			var jackassifyPrevAppend="<div>"+(jackassifyLastDayPrevMo-(jackassifyFirstDayMo-a)+1)+"</div>";
			$("#jackifyContainer").append(jackassifyPrevAppend);
		}
		for(b=0;b<jackassifyDaysInMo;b++){
			var jackassifyCurrentAppend="<div>"+(b+1)+"</div>";
			$("#jackifyContainer").append(jackassifyCurrentAppend);
		}
		for(c=0;c<jackassifyNextMoEnd;c++){
			var jackassifyNextAppend="<div>"+(c+1)+"</div>";
			$("#jackifyContainer").append(jackassifyNextAppend);
		}
	}
});