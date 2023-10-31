// ==UserScript==
// @name      Global Styler JS
// @author    SyndiShanX
// @include   https://pokemoncreed.net/*
// @include   http://pokemoncreed.net/*
// @exclude   https://pokemoncreed.net/login*
// @exclude   http://pokemoncreed.net/login*
// @exclude   https://pokemoncreed.net/index*
// @exclude   http://pokemoncreed.net/index*
// @exclude   https://pokemoncreed.net/forums*
// @exclude   http://pokemoncreed.net/forums*
// @run-at    document-end
// ==/UserScript==

// Snow
//head = document.getElementsByTagName('head')[0];
//script = document.createElement("script");
//script.src = 'https://syndishanx.github.io/Website/Downloads/Misc/snow.js'
//head.appendChild(script);

// Updated (8/19/20) synMenu3 was broken server-side
// Updated (12/1/20) synMenu3 was fixed server-side --synHTML3Fix = synHTML3[0].split("</a></li>\n\n<li class=")--
// Left Menu
synMenuEnd = "</a></li></ul></div>"
synMenuStart = '<li class='
synHTML1 = document.getElementsByClassName("leftmenu")[0].outerHTML
synHTML2 = synHTML1.split("<ul>")
synHTML3 = synHTML2[1].split("</a></li>\n<li class=")

synLeftMenu1 = '<div class="menu1"><ul>' + synHTML3[0] + synMenuEnd
synLeftMenu1 = synLeftMenu1.split("\n\n")
synLeftMenu1 = synLeftMenu1[0] + "\n" + synLeftMenu1[1]
synLeftMenu2 = '<div class="menu2"><ul>' + synMenuStart + synHTML3[1] + synMenuEnd
synLeftMenu3 = '<div class="menu3"><ul>' + synMenuStart + synHTML3[2] + synMenuEnd
synLeftMenu3 = synLeftMenu3.split("Dep. Store</a></li>")[0] + 'Dep. Store</a></li>\n<li><a href="sell.php"' + synLeftMenu3.split('<li><a href="sell.php"')[1]
synLeftMenu4 = '<div class="menu6"><ul>' + synMenuStart + synHTML3[3] + synMenuEnd
synLeftMenu = synLeftMenu1 + "\n\n" + synLeftMenu2 + "\n\n" + synLeftMenu3 + "\n\n" + synLeftMenu4

// Right Menu
synHTML4 = document.getElementsByClassName("rightmenu")[0].outerHTML
synHTML5 = synHTML4.split('<li class="header">')
synHTML6 = synHTML5[3] + '<li class="header">' + synHTML5[4] + '<li class="header">' + synHTML5[5] + '<li class="header">' + synHTML5[6] + '<li class="header">' + synHTML5[7]
synHTML6 = synHTML6.replace('\n\n', '\n')
synHTML7 = synHTML6.split("</a></li>\n<li class=")
synHTML8 = synHTML7[3].split("Tools")
synHTML9 = synHTML3[4].split("Account</li>")

synRightMenu1 = '<div class="menu5"><ul><li class="header">' + synHTML7[0] + synMenuEnd
synRightMenu2 = '<div class="menu4"><ul>' + synMenuStart + synHTML7[2] + synMenuEnd
synRightMenu2 = synRightMenu2.split(" Rankings")
synRightMenu2 = synRightMenu2.join("")
synRightMenu3 = '<div class="menu7"><ul>' + synMenuStart + synHTML8[0] + "Other" + synHTML8[1] + "</a></li>" + synHTML7[4].split('"header">Other</li>')[1].split("</ul>")[0] + "</ul></div>"
synRightMenu4 = synRightMenu3.split('Staff List</a></li>\n')[1].split('\n')[0]
synRightMenu3 = synRightMenu3.split('Staff List</a></li>\n')[0] + 'Staff List</a></li>\n' + synRightMenu3.split('Staff List</a></li>\n')[1].split('My Profile</a></li>\n')[1]
synRightMenu5 = '<div class="menu8"><ul>' + synMenuStart + synHTML9[0] + "Account/Clan</li>" + synHTML7[1].split('"header">Your Clan</li>')[1] + synHTML9[1]
synRightMenu5 = synRightMenu5.split(']')[0] + ']</a></li>\n' + synRightMenu4 + synRightMenu5.split(']')[1]
synRightMenu5 = synRightMenu5.split("\n\n")
synRightMenu = synRightMenu1 + "\n\n" + synRightMenu2 + "\n\n" + synRightMenu3 + "\n\n" + synRightMenu5

synPromo = synHTML5[0] + '<li class="header">' + synHTML5[1] + '<li class="header">' + synHTML5[2] + "</ul></div>"
synPromo = synPromo.split('<div class="rightmenu">')
synPromo = synPromo[1].split('</div>')
synPromo = synPromo[0] + synPromo[1]

synMessages = synLeftMenu.split('<li><a href="messages.php">')[1].split('</a></li>')[0]
synEvents = synLeftMenu.split('<li><a href="events.php">')[1].split('</a></li>')[0]

// Useful Links Custom Menu
synCustomMenu = '<div class="menu9"><ul><li class="header">Useful Links</li><li><a href="messages.php">' + synMessages + '</a></li>\n<li><a href="events.php">' + synEvents + '</a></li><li><a href="luckydip.php">Lucky Dip</a></li><li><a href="raffle.php">Raffle</a></li><li><a href="hitdown.php">Hitdown</a></li><li><a href="clanrewards.php">Clan Rewards</a></li><li><a href="fishing.php">Fishing</a></li><li><a href="advent.php">Advent Calendar</a></li></ul></div>'

// Party
synPartyHTML = document.getElementsByClassName("header")[0].outerHTML
synPartyHTML = synPartyHTML.split("<center>")
synPartyHTML = synPartyHTML[0] + synPartyHTML[1]
synPartyHTML = synPartyHTML.split("</center>")
synPartyHTML = synPartyHTML[0] + synPartyHTML[1]
synPartyHTML = synPartyHTML.replace('align="center"','align="left"')
synPartyHTML1 = synPartyHTML.split("</td>")
synPartyHTML1 = synPartyHTML1[0] + "</td></tr><tr>" + synPartyHTML1[1] + "</td></tr><tr>" + synPartyHTML1[2] + "</td></tr><tr>" + synPartyHTML1[3] + "</td></tr>"
synPartyHTML2 = synPartyHTML.split("</td>")
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
    synContent1 = document.getElementsByClassName("contentcontent")[0].innerText.trim()
    synContent2 = document.getElementsByClassName("contentcontent")[1].innerHTML.trim()
    document.getElementsByClassName("contentcontent")[1].remove()
    document.getElementsByClassName("contentcontent")[0].innerHTML = "<center>" + synContent1 + "<br>" + synContent2 + "</center>"
  }
}