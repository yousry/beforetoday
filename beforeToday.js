/*
 * Utility functions for yousry.de
 * (c)  2008 Yousry Abdallah
 */

function calc_before_today(datum) {

	var dateTokens = datum.split(".");
	
	var pastDate = new Date(dateTokens[2], dateTokens[1] - 1 , dateTokens[0]);
	
	var curDate = new Date()

	monthLength = new Array(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

	years = curDate.getFullYear() - pastDate.getFullYear();
	months = curDate.getMonth() - pastDate.getMonth();
	days = curDate.getDate() - pastDate.getDate();

	if (days < 0) {
		months -= 1;
		
		if(curDate.getMonth() == 1)
			monthDays = leapYear();
		else
			monthDays = monthLength[curDate.getMonth()];
		
		days = monthDays + days;
	}
	
	if(years == 0 && months == 0 && days == 0) {
		document.write("heute");
		return;
		
	} else 
		document.write("Vor ");
		
	
	if (months < 0) {
		years -= 1;
		months = 12 + months;
	}
	
	if(years > 0) {
		document.write(years)
	if(years == 1)
		document.write(" Jahr")
	else
		document.write(" Jahren");
	
	}
	
	if(months > 0 && years > 0 && days == 0 )
		document.write(" und ");

	if(months > 0 && years > 0 && days > 0 )
		document.write(", ");
	

	if(months > 0) {
		document.write(months);

		if(months == 1)
			document.write(" Monat");
		else
			document.write(" Monaten");

		
	}
	
	if(days > 0 && (years > 0 || months > 0) ) 
		document.write(" und ");
	
	if(days > 0){
		document.write(days);
		
		if(days == 1)
			document.write(" Tag");
		else 
			document.write(" Tagen");

	}
	

}

function leapYear() {
	today = new Date();
	year = today.getFullYear();

	result = 28
	
	if(  (year % 4 == 0 && year % 100 != 0) || (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)) {
		result = 29
	}
	return result;
}
