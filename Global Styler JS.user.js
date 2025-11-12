// ==UserScript==
// @name      		Creed Global Styler JS
// @description   null
// @version       v1.0
// @author    		SyndiShanX
// @include   		https://pokemoncreed.net/*
// @include   		http://pokemoncreed.net/*
// @exclude   		https://pokemoncreed.net/login*
// @exclude   		http://pokemoncreed.net/login*
// @exclude   		https://pokemoncreed.net/index*
// @exclude   		http://pokemoncreed.net/index*
// @exclude   		https://pokemoncreed.net/forums*
// @exclude   		http://pokemoncreed.net/forums*
// @run-at    		document-idle
// ==/UserScript==

// Snow
//head = document.getElementsByTagName('head')[0];
//script = document.createElement("script");
//script.src = 'https://syndishanx.github.io/Website/Downloads/Misc/snow.js'
//head.appendChild(script);

// Updated (8/19/20) synMenu3 was broken server-side
// Updated (12/1/20) synMenu3 was fixed server-side --synHTML3Fix = synHTML3[0].split("</a></li>\n\n<li class=")--
// Updated (6/23/24) Tools Section was moved to the Left Sidemenu
// Updated (10/24/24) Commented Menus were Added (Line 30, Line 48)
// Updated (11/9/24) Reverted Double Line Break Fix (Line 36 + 37)
// Left Menu
var synMenuEnd = "</a></li></ul></div>"
var synMenuStart = '<li class='
var synHTML1 = document.getElementsByClassName("leftmenu")[0].outerHTML
var synHTML2 = synHTML1.split("<ul>")
var synHTML3 = synHTML2[1].replaceAll('<!-- ', '').replaceAll(' -->', '').replaceAll('\x3C!-- ', '').replaceAll('\n\n\n', '\n').replaceAll('\n\n', '\n').split("</a></li>\n<li class=")

var synHTML8 = synHTML1.split("Tools")[1].split('\n<li class')[0]

var synLeftMenu1 = '<div class="menu1"><ul>' + synHTML3[0] + synMenuEnd
//synLeftMenu1 = synLeftMenu1.split("\n\n")
//synLeftMenu1 = synLeftMenu1[0] + "\n" + synLeftMenu1[1]
var synLeftMenu2 = '<div class="menu2"><ul>' + synMenuStart + synHTML3[1] + synMenuEnd
var synLeftMenu3 = '<div class="menu3"><ul>' + synMenuStart + synHTML3[2] + synMenuEnd
synLeftMenu3 = synLeftMenu3.split("Dep. Store</a></li>")[0] + 'Dep. Store</a></li>\n<li><a href="sell.php"' + synLeftMenu3.split('<li><a href="sell.php"')[1]
var synLeftMenu4 = '<div class="menu6"><ul>' + synMenuStart + synHTML3[4] + synMenuEnd
var synLeftMenu = synLeftMenu1 + "\n\n" + synLeftMenu2 + "\n\n" + synLeftMenu3 + "\n\n" + synLeftMenu4

// Right Menu
var synHTML4 = document.getElementsByClassName("rightmenu")[0].outerHTML
var synHTML5 = synHTML4.split('<li class="header">')
var synHTML6 = synHTML5[3] + '<li class="header">' + synHTML5[4] + '<li class="header">' + synHTML5[5] + '<li class="header">' + synHTML5[6] + '<li class="header">' + synHTML5[7]
synHTML6 = synHTML6.replace('\n\n', '\n')
var synHTML7 = synHTML6.replaceAll('<!-- ', '').replaceAll(' -->', '').replaceAll('\x3C!-- ', '').replaceAll('\n\n\n', '\n').replaceAll('\n\n', '\n').split("</a></li>\n<li class=")
var synHTML9 = synHTML3[5].split("Account</li>")

var synRightMenu1 = '<div class="menu5"><ul><li class="header">' + synHTML7[0] + synMenuEnd
var synRightMenu2 = '<div class="menu4"><ul>' + synMenuStart + synHTML7[2] + synMenuEnd
synRightMenu2 = synRightMenu2.split(" Rankings")
synRightMenu2 = synRightMenu2.join("")
var synRightMenu3 = '<div class="menu7"><ul>' + synMenuStart + '"header">Other' + synHTML8 + "</a></li>" + synHTML7[3].split('"header">Other</li>')[1].split("</ul>")[0] + "</ul></div>"
var synRightMenu4 = synRightMenu3.split('Staff List</a></li>\n')[1].split('\n')[0]
//synRightMenu3 = synRightMenu3.split('Staff List</a></li>\n')[0] + 'Staff List</a></li>\n' + synRightMenu3.split('Staff List</a></li>\n')[1].split('My Profile</a></li>\n')[1]
var synRightMenu5 = '<div class="menu8"><ul>' + synMenuStart+ synHTML9[0] + 'Account/Clan</li>' + synHTML7[1].split('"header">Your Clan</li>')[1] + synHTML9[1]
synRightMenu5 = synRightMenu5.split('</a></li>\n</ul>')[0] + '</a></li>\n</ul>' + synRightMenu5.split('</a></li>\n</ul>')[1]
//synRightMenu5 = synRightMenu5.split('</a></li>\n</ul>')[0] + '</a></li>' + /*synRightMenu4 +*/ '\n</ul>' + synRightMenu5.split('</a></li>\n</ul>')[1]
synRightMenu5 = synRightMenu5.split("\n\n")
var synRightMenu = synRightMenu1 + "\n\n" + synRightMenu2 + "\n\n" + synRightMenu3 + "\n\n" + synRightMenu5

var synPromo = synHTML5[0] + '<li class="header">' + synHTML5[1] + '<li class="header">' + synHTML5[2] + "</ul></div>"
synPromo = synPromo.split('<div class="rightmenu">')
synPromo = synPromo[1].split('</div>')
synPromo = synPromo[0] + synPromo[1]

var synMessages = synLeftMenu.split('<li><a href="messages.php">')[1].split('</a></li>')[0]
var synEvents = synLeftMenu.split('<li><a href="events.php">')[1].split('</a></li>')[0]

// Useful Links Custom Menu
var synCustomMenu = '<div class="menu9"><ul><li class="header">Useful Links</li><li><a href="messages.php">' + synMessages + '</a></li>\n<li><a href="events.php">' + synEvents + '</a></li><li><a href="luckydip.php">Lucky Dip</a></li><li><a href="raffle.php">Raffle</a></li><li><a href="hitdown.php">Hitdown</a></li><li><a href="clanrewards.php">Clan Rewards</a></li><li><a href="fishing.php">Fishing</a></li><li><a href="advent.php">Advent Calendar</a></li></ul></div>'

// Party
var synPartyHTML = document.getElementsByClassName("header")[0].outerHTML
synPartyHTML = synPartyHTML.split("<center>")
synPartyHTML = synPartyHTML[0] + synPartyHTML[1]
synPartyHTML = synPartyHTML.split("</center>")
synPartyHTML = synPartyHTML[0] + synPartyHTML[1]
synPartyHTML = synPartyHTML.replace('align="center"','align="left"')
var synPartyHTML1 = synPartyHTML.split("</td>")
synPartyHTML1 = synPartyHTML1[0] + "</td></tr><tr>" + synPartyHTML1[1] + "</td></tr><tr>" + synPartyHTML1[2] + "</td></tr><tr>" + synPartyHTML1[3] + "</td></tr>"
var synPartyHTML2 = synPartyHTML.split("</td>")
synPartyHTML2 = '<table align="left" class="hovertable"><tbody><tr>' + synPartyHTML2[4] + "</td></tr><tr>" + synPartyHTML2[5] + synPartyHTML2[6]
document.getElementsByClassName("leftmenu")[0].outerHTML = '<div class="synleftmenu">' + synPartyHTML1 + '</div>'
document.getElementsByClassName("rightmenu")[0].outerHTML = '<div class="rightmenu">' + synPromo + synPartyHTML2
document.getElementsByClassName("header")[0].outerHTML = '<div class="synheader">' + synLeftMenu + synRightMenu + synCustomMenu + '</div>'

// Remove Trainer EXP Header to Stop Scrollbar Stutter
if (document.getElementsByClassName("header")[11].innerText == "Trainer EXP") {
	document.getElementsByClassName("header")[11].remove()
}

// Remove 2nd Important Messages Header and combine the messages
if (document.getElementsByClassName("title")[1] != undefined) {
  if (document.getElementsByClassName("title")[1].innerText == "Important Message(s)") {
    document.getElementsByClassName("title")[1].remove()
    var synContent1 = document.getElementsByClassName("contentcontent")[0].innerText.trim()
    var synContent2 = document.getElementsByClassName("contentcontent")[1].innerHTML.trim()
    document.getElementsByClassName("contentcontent")[1].remove()
    document.getElementsByClassName("contentcontent")[0].innerHTML = "<center>" + synContent1 + "<br>" + synContent2 + "</center>"
  }
}