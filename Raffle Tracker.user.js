// ==UserScript==
// @name			Raffle Tracker
// @author		SyndiShanX
// @include		https://pokemoncreed.net/raffle.php*
// @include		http://pokemoncreed.net/raffle.php*
// @grant			GM.getValue
// @grant			GM.setValue
// @grant			GM.deleteValue
// ==/UserScript==

(async () => {

  let raffleText = await GM.getValue('raffle_Text', "You haven't taken a number yet!");
  console.log(raffleText)

  if (document.getElementsByClassName('contentcontent')[0].childNodes[1].outerText.search('You have') != -1) {
    var numberTaken = document.getElementsByClassName('contentcontent')[0].childNodes[1].outerText.split('the number ')[1].split('!')[0]
    var raffleOutput = "Your last taken number was " + numberTaken + '!'
    await GM.setValue('raffle_Text', raffleOutput);
  }

  if (raffleText != null) {
    if (document.getElementsByClassName('title')[0].innerText == 'Daily Raffle') {
      var body = document.getElementsByTagName('body')[0]
      var customTitle = document.createElement('div')
      var customText = document.createTextNode('Raffle Number')
      var customContent = document.createElement('div')
      var customCenter = document.createElement('center')
      var customRaffleText = document.createTextNode(raffleText)
      customTitle.appendChild(customText)
      customTitle.className = 'title'
      customCenter.appendChild(customRaffleText)
      customContent.appendChild(customCenter)
      customContent.className = 'contentcontent'
      body.insertBefore(customTitle, body.childNodes[10])
      body.insertBefore(customContent, body.childNodes[11])
      customHTML = document.getElementsByClassName('contentcontent')[0].innerHTML
      document.getElementsByClassName('contentcontent')[0].innerHTML = '<br>' + customHTML + '<br>'
    }
  }

	// Auto Go back to Raffle Page
  if (window.location.href.search("take") != -1) {
    console.log(window.location.href.search("take"))
    window.location = "/raffle.php"
  }

})();