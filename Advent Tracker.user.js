// ==UserScript==
// @name           Advent Tracker
// @author         SyndiShanX
// @include        https://pokemoncreed.net/advent.php*
// @include        http://pokemoncreed.net/advent.php*
// @grant          GM.getValue
// @grant          GM.setValue
// @grant          GM.deleteValue
// @run-at         document-body
// @version        1.15
// ==/UserScript==

(async () => {
  
  let previousAdvent = await GM.getValue('previous_Advent', "No Previous Advent Recorded");
  console.log(previousAdvent)
  
  if (window.location.search.split('?id=')[1] != undefined) {
    previousAdvent = window.location.search.split('?id=')[1]
    var adventOutput = "The Last Advent Number Opened was " + previousAdvent + '!'
    await GM.setValue('previous_Advent', adventOutput);
  }
  
  if (previousAdvent != null) {
    if (document.getElementsByClassName('title')[0].innerText == 'Christmas Advent Calendar!') {
      var body = document.getElementsByTagName('body')[0]
      var customTitle = document.createElement('div')
      var customText = document.createTextNode('Last Advent Opened')
      var customContent = document.createElement('div')
      var customCenter = document.createElement('center')
      var customAdventText = document.createTextNode(previousAdvent)
      customTitle.appendChild(customText)
      customTitle.className = 'title'
      customCenter.appendChild(customAdventText)
      customContent.appendChild(customCenter)
      customContent.className = 'contentcontent'
      body.insertBefore(customTitle, body.childNodes[10])
      body.insertBefore(customContent, body.childNodes[11])
      customHTML = document.getElementsByClassName('contentcontent')[0].innerHTML
      document.getElementsByClassName('contentcontent')[0].innerHTML = '<br>' + customHTML + '<br>'
    }
  }
  
  if (document.getElementById('calendar') != undefined) {
    var customAdventCSS = ''
    document.getElementsByTagName('link')[5].href = customAdventCSS
    var customAdventHTML = '<ul id="adventCalendar" align="center">\n<li><a id="advent1" href="advent.php?id=1">1</a></li>\n<li><a id="advent2" href="advent.php?id=2">2</a></li>\n<li><a id="advent3" href="advent.php?id=3">3</a></li>\n<li><a id="advent4" href="advent.php?id=4">4</a></li>\n<li><a id="advent5" href="advent.php?id=5">5</a></li>\n<li><a id="advent6" href="advent.php?id=6">6</a></li>\n<li><a id="advent7" href="advent.php?id=7">7</a></li>\n<li><a id="advent8" href="advent.php?id=8">8</a></li>\n<li><a id="advent9" href="advent.php?id=9">9</a></li>\n<li><a id="advent10" href="advent.php?id=10">10</a></li>\n<li><a id="advent11" href="advent.php?id=11">11</a></li>\n<li><a id="advent12" href="advent.php?id=12">12</a></li>\n<li><a id="advent13" href="advent.php?id=13">13</a></li>\n<li><a id="advent14" href="advent.php?id=14">14</a></li>\n<li><a id="advent15" href="advent.php?id=15">15</a></li>\n<li><a id="advent16" href="advent.php?id=16">16</a></li>\n<li><a id="advent17" href="advent.php?id=17">17</a></li>\n<li><a id="advent18" href="advent.php?id=18">18</a></li>\n<li><a id="advent19" href="advent.php?id=19">19</a></li>\n<li><a id="advent20" href="advent.php?id=20">20</a></li>\n<li><a id="advent21" href="advent.php?id=21">21</a></li>\n<li><a id="advent22" href="advent.php?id=22">22</a></li>\n<li><a id="advent23" href="advent.php?id=23">23</a></li>\n<li><a id="advent24" href="advent.php?id=24">24</a></li>\n<li><a id="advent25" href="advent.php?id=25">25</a></li></ul>'
    customAdventHTML = customAdventHTML.replaceAll('a id="advent', 'a id="opened-advent')
    previousAdvent = parseInt(previousAdvent.split('The Last Advent Number Opened was ')[1].split('!')[0])
    var num = parseInt(previousAdvent) + 1
    for (num = num; num < 26; num++) {
      customAdventHTML = customAdventHTML.replaceAll('id="opened-advent' + num, 'id="advent' + num)
    }
    document.getElementById('calendar').outerHTML = customAdventHTML
  }

})();