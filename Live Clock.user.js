// ==UserScript==
// @name           SyndiShanX's Live Clock
// @author         SyndiShanX
// @include        https://pokemoncreed.net/*
// @include        http://pokemoncreed.net/*
// @exclude        https://pokemoncreed.net/login*
// @exclude        http://pokemoncreed.net/login*
// @exclude        https://pokemoncreed.net/index*
// @exclude        http://pokemoncreed.net/index*
// @exclude        https://pokemoncreed.net/forums*
// @exclude        http://pokemoncreed.net/forums*
// @version        1.15
// ==/UserScript==

if (document.getElementsByTagName('font').length == 1) {
  var clockElement = 0
} else if (document.getElementsByTagName('font').length == 2) {
  var clockElement = 1
} else if (document.getElementsByTagName('font').length == 3) {
  var clockElement = 2
} else if (document.getElementsByTagName('font').length == 4) {
  var clockElement = 3
} else if (document.getElementsByTagName('font').length == 5) {
  var clockElement = 4
} else if (document.getElementsByTagName('font').length == 6) {
  var clockElement = 5
} else if (document.getElementsByTagName('font').length == 7) {
  var clockElement = 6
} else if (document.getElementsByTagName('font').length == 8) {
  var clockElement = 7
} else if (document.getElementsByTagName('font').length == 9) {
  var clockElement = 8
} else if (document.getElementsByTagName('font').length == 10) {
  var clockElement = 9
} else if (document.getElementsByTagName('font').length == 11) {
  var clockElement = 10
}

document.getElementsByTagName('font')[clockElement].className = "clock"

if (window.location.pathname == '/clan.php') {
  var birth_date = new Date(2012, 2, 22, 9, 9, 24, 0)
  //clanTime()
}

//var birth_date = new Date(YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, MILLISECOND)

// Clan Time
//if (window.location.pathname == '/viewclan.php') {
//  if (window.location.search == '?id=170') {
//    var birth_date = new Date(2012, 2, 25, 16, 39, 24, 0)
//    clanTime()
//  } else if (window.location.search == '?id=5') { // #1
//    var birth_date = new Date(2010, 7, 27, 0, 52, 9, 250)
//    clanTime()
//  } else if (window.location.search == '?id=58') { // #2
//    var birth_date = new Date(2011, 1, 25, 2, 39, 24, 0)
//    clanTime()
//  } else if (window.location.search == '?id=319') { // #3
//    var birth_date = new Date(2017, 3, 23, 22, 20, 57, 500)
//    clanTime()
//  } else if (window.location.search == '?id=304') { // #4
//    var birth_date = new Date(2015, 7, 14, 13, 6, 3, 750)
//    clanTime()
//  } else if (window.location.search == '?id=120') { // #5
//    var birth_date = new Date(2011, 12, 7, 8, 13, 47, 500)
//    clanTime()
//  }
//}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  h = h + 5 // Change Local Timezone to Creed Timezone Daylight Savings
  //h = h + 4 // Change Local Timezone to Creed Timezone No Daylight Savings

  if (h >= 24) {
    h = h - 24
  }

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  document.getElementsByClassName('clock')[0].textContent = h + ":" + m + ":" + s;

  var t = setTimeout(startTime, 500);
}

function clanTime() {
  document.getElementsByClassName('contentcontent')[0].getElementsByTagName('th')[2].textContent = "Custom Age Test"

  var years, months, days, hours, minutes, seconds;
  var ageYears, ageMonths, ageWeeks, ageDays, ageHours, ageMinutes, ageSeconds
  var ageCount = document.getElementById('counter');
  setInterval(function(){

  var current_date = new Date();
  var yearDiff =  (current_date.getYear() - birth_date.getYear());
  var monthDiff = (current_date.getMonth() - birth_date.getMonth());
  var dayDiff = (current_date.getDate() - birth_date.getDate());
  var hourDiff = (current_date.getHours() - birth_date.getHours());
  var minDiff = (current_date.getMinutes() - birth_date.getMinutes());
  var secDiff = (current_date.getSeconds() - birth_date.getSeconds());
  var weekDiff = 0

  // Fix negative values
  
  if (monthDiff < 0) {
    yearDiff = yearDiff - 1
    monthDiff = monthDiff + 12
  }
    
  if (weekDiff < 0) {
    monthDiff = monthDiff - 1
    weekDiff = weekDiff + 4
  }

  if (weekDiff > 4) {
    weekDiff = weekDiff - 1
    dayDiff = dayDiff + 7
  }

  while (dayDiff < 0) {
    monthDiff = monthDiff - 1
    weekDiff = weekDiff + 3
    dayDiff = dayDiff + 7
  }
    
  while (dayDiff >= 7) {
    dayDiff = dayDiff - 7
    weekDiff = weekDiff + 1
  }
  
  while (weekDiff >= 4) {
    weekDiff = weekDiff - 4
    monthDiff = monthDiff + 1
  }
    
  if (secDiff < 0) {
    minDiff = minDiff - 1
    secDiff = secDiff + 60
  }
  
  if (minDiff < 0) {
    hourDiff = hourDiff - 1
    minDiff = minDiff + 60
  }
  
  if (hourDiff < 0) {
    dayDiff = dayDiff - 1
    hourDiff = hourDiff + 24
  }

  if (hourDiff > 0) {
    hourDiff = hourDiff - 1
    minDiff = minDiff + 60
  }

  if (minDiff > 0) {
    minDiff = minDiff - 1
    secDiff = secDiff + 60
  }

  // Fix Min/Sec being over 60

  if (minDiff > 59) {
    minDiff = minDiff - 60
    hourDiff = hourDiff + 1
  }

  if (secDiff > 59) {
    secDiff = secDiff - 60
    minDiff = minDiff + 1
  }

  // Fix Naming

  if (yearDiff != 1) {
    ageYears = yearDiff + ' years, '
  } else if (yearDiff == 1) {
    ageYears = yearDiff + ' year, '
  }
    
  if (monthDiff != 1) {
    ageMonths = monthDiff + ' months, '
  } else if (monthDiff == 1) {
    ageMonths = monthDiff + ' month, '
  }
    
  if (weekDiff != 1) {
    ageWeeks = weekDiff + ' weeks, '
  } else if (weekDiff == 1) {
    ageWeeks = weekDiff + ' week, '
  }
    
  if (dayDiff != 1) {
    ageDays = dayDiff + ' days, '
  } else if (dayDiff == 1) {
    ageDays = dayDiff + ' day, '
  }
    
  if (hourDiff != 1) {
    ageHours = hourDiff + ' hours, '
  } else if (hourDiff == 1) {
    ageHours = hourDiff + ' hour, '
  }
    
  if (minDiff != 1) {
    ageMinutes = minDiff + ' minutes, and '
  } else if (minDiff == 1) {
    ageMinutes = minDiff + ' minute, and '
  }
    
  if (secDiff != 1) {
    ageSeconds = secDiff + ' seconds'
  } else if (secDiff == 1) {
    ageSeconds = secDiff + ' second'
  }

  document.getElementsByClassName('contentcontent')[0].getElementsByTagName('td')[2].textContent = 
  ageYears + ageMonths + ageWeeks + ageDays + ageHours + ageMinutes + ageSeconds;

  }, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

setTimeout(startTime(), 500);