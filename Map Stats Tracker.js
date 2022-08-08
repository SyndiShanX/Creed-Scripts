// ==UserScript==
// @name           Map Stats Tracker
// @author         SyndiShanX
// @include        https://pokemoncreed.net/map.php*
// @include        http://pokemoncreed.net/map.php*
// @grant          GM.getValue
// @grant          GM.setValue
// @grant          GM.deleteValue
// @version        1.15
// @run-at         document-end
// ==/UserScript==

labels = document.getElementsByTagName('label')
for (i = 0; i < labels.length; i++) {
  if (labels[i].outerHTML.split('tiptitle=\"')[1] != undefined) {
    trainerName = labels[i].outerHTML.split('tiptitle=\"')[1].split('\"')[0]
    labels[i].outerHTML = labels[i].outerHTML.split('><')[0] + '>\<a href="prof.php?user=' + trainerName + '">' + trainerName + '\</a><' + labels[i].outerHTML.split('><')[1] + labels[i].outerHTML.split('><')[2]
  }
}
initialText = document.getElementById('mapresult').children[1].innerText
latitude = '0'
longitude = '0'
catchEXP0 = 0
coinsEarned0 = 0
previousMovementTotal = 0

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function statsLoop() {
  (async () => {
    if (document.getElementById('mapresult').children[1].innerText != initialText) {
      let movementTotal = await GM.getValue('TotalMovements', 0);
      let catchEXP = await GM.getValue('EXP', 0);
      let coinsEarned = await GM.getValue('COINS', 0);
      let caughtPokes = await GM.getValue('CATCHES', 0);
      let failedPokes = await GM.getValue('FAILCATCHES', 0);
      movementTotalStr = '' + movementTotal + ''
      catchEXPStr = '' + catchEXP + ''
      coinsEarnedStr = '' + coinsEarned + ''
      caughtPokesStr = '' + caughtPokes + ''
      failedPokesStr = '' + failedPokes + ''
      catchEXPSaved = parseInt(catchEXPStr.trim().replace(/,/g, ''))
      coinsEarnedSaved = parseInt(coinsEarnedStr.trim().replace(/,/g, ''))
      
      mapText = document.getElementById('mapresult').innerText
      previousLatitude = latitude
      previousLongitude = longitude
      latitude = document.getElementById('coddie').innerText.split('Latitude: ')[1].split(',')[0]
      longitude = document.getElementById('coddie').innerText.split('Longitude: ')[1].split('.')[0] + '.' + document.getElementById('coddie').innerText.split('Longitude: ')[1].split(".")[1]
      movementTotal0 = '' + movementTotal + ''
      movementTotal1 = parseInt(movementTotal0.trim().replace(/,/g, ''))
      if (latitude != previousLatitude) {
        movementTotalFinal = parseInt(movementTotal1 + 1)
        movementTotalFinal = numberWithCommas(movementTotalFinal)
        await GM.setValue('TotalMovements', movementTotalFinal)
      } else if (longitude != previousLongitude) {
        movementTotalFinal = parseInt(movementTotal1 + 1)
        movementTotalFinal = numberWithCommas(movementTotalFinal)
        await GM.setValue('TotalMovements', movementTotalFinal)
      }
      
      if (mapText.split('You entered the Pokemon correctly and gained ')[1] != null) {
        if (mapText.split('You entered the Pokemon correctly and gained ')[1].split(' coins')[0] != null) {
          previousCoinsEarned = coinsEarned0
          coinsEarned0 = mapText.split('You entered the Pokemon correctly and gained ')[1].split(' coins')[0]
          if (coinsEarned0 != previousCoinsEarned) {
            coinsEarned1 = parseInt(coinsEarned0.trim().replace(/,/g, ''))
            coinsEarnedFinal = parseInt(coinsEarnedSaved + coinsEarned1)
            coinsEarnedFinal = numberWithCommas(coinsEarnedFinal)
            await GM.setValue('COINS', coinsEarnedFinal)
            let coinsEarned = await GM.getValue('COINS', 0);
          }
        }
      }
      if (mapText.split('You gained ')[1] != null) {
        if (mapText.split('You gained ')[1].split(' orienteering')[0] != null) {
          previousCatchEXP = catchEXP0
          catchEXP0 = mapText.split('You gained ')[1].split(' orienteering')[0]
          caughtPokes0 = '' + caughtPokes + ''
          if (catchEXP0 != previousCatchEXP) {
            catchEXP1 = parseInt(catchEXP0.trim().replace(/,/g, ''))
            catchEXPFinal = parseInt(catchEXPSaved + catchEXP1)
            catchEXPFinal = numberWithCommas(catchEXPFinal)
            caughtPokes1 = parseInt(caughtPokes0.trim().replace(/,/g, ''))
            caughtPokesFinal = parseInt(caughtPokes1 + 1)
            caughtPokesFinal = numberWithCommas(caughtPokesFinal)
            await GM.setValue('EXP', catchEXPFinal)
            let catchEXP = await GM.getValue('EXP', 0);
            await GM.setValue('CATCHES', caughtPokesFinal)
            let caughtPokes = await GM.getValue('CATCHES', 0);
          }
        }
      }
      if (mapText.split('You failed to catch the wild pokemon')[1] != null) {
        failedPokes0 = failedPokesStr
        failedPokes1 = parseInt(failedPokes0.trim().replace(/,/g, ''))
        if (movementTotal != previousMovementTotal) {
          previousMovementTotal = '' + movementTotal + ''
          failedPokesFinal = parseInt(failedPokes1 + 1)
          failedPokesFinal = numberWithCommas(failedPokesFinal)
          await GM.setValue('FAILCATCHES', failedPokesFinal)
          let failedPokes = await GM.getValue('FAILCATCHES', 0);
        }
      }
      document.getElementsByClassName('movementText')[0].innerText = 'Map Stats - Total Movements [' + movementTotal + ']'
      document.getElementsByClassName('catchEXPText')[0].innerText = catchEXP
      document.getElementsByClassName('coinsEarnedText')[0].innerText = coinsEarned
      document.getElementsByClassName('caughtPokesText')[0].innerText = caughtPokes
      document.getElementsByClassName('failedPokesText')[0].innerText = failedPokes
    } else { setTimeout(function(){ statsLoop() }, 50); }
    setTimeout(function(){ statsLoop() }, 50);
  })();
}
(async () => {
  let movementTotal = await GM.getValue('TotalMovements', 0);
  let catchEXP = await GM.getValue('EXP', 0);
  let coinsEarned = await GM.getValue('COINS', 0);
  let caughtPokes = await GM.getValue('CATCHES', 0);
  let failedPokes = await GM.getValue('FAILCATCHES', 0);
  if (catchEXP != null && movementTotal != null) {
    if (document.getElementsByTagName('th')[1].innerText.search('Movement') == 0) {
      body = document.getElementsByTagName('body')[0]
      customTable = document.createElement('table')
      customTBody = document.createElement('tbody')
      customTR = document.createElement('tr')
      customTH0 = document.createElement('th')
      customTH1 = document.createElement('th')
      customTH2 = document.createElement('th')
      customTH3 = document.createElement('th')
      customTH4 = document.createElement('th')
      customTH5 = document.createElement('th')
      customTH6 = document.createElement('th')
      customTH7 = document.createElement('th')
      customTH8 = document.createElement('th')
      customTH9 = document.createElement('th')
      customText0 = document.createTextNode('Total EXP Earned: ')
      customText1 = document.createTextNode(catchEXP)
      customText2 = document.createTextNode('Total Coins Earned: ')
      customText3 = document.createTextNode(coinsEarned)
      customText4 = document.createTextNode('Total Pokemon Caught: ')
      customText5 = document.createTextNode(caughtPokes)
      customText6 = document.createTextNode('Total Pokemon Catches Failed: ')
      customText7 = document.createTextNode(failedPokes)
      customTitle = document.createElement('div')
      customText = document.createTextNode('Map Stats - Total Movements [' + movementTotal + ']')
      customContent = document.createElement('div')
      customContent.appendChild(customTable)
      customTable.appendChild(customTBody)
      customTBody.appendChild(customTR)
      customTR.appendChild(customTH0)
      customTR.appendChild(customTH1)
      customTR.appendChild(customTH2)
      customTR.appendChild(customTH3)
      customTR.appendChild(customTH4)
      customTR.appendChild(customTH5)
      customTR.appendChild(customTH6)
      customTR.appendChild(customTH7)
      customTH0.appendChild(customText0)
      customTH1.appendChild(customText1)
      customTH2.appendChild(customText2)
      customTH3.appendChild(customText3)
      customTH4.appendChild(customText4)
      customTH5.appendChild(customText5)
      customTH6.appendChild(customText6)
      customTH7.appendChild(customText7)
      customTH1.className = 'catchEXPText'
      customTH3.className = 'coinsEarnedText'
      customTH5.className = 'caughtPokesText'
      customTH7.className = 'failedPokesText'
      customTitle.appendChild(customText)
      customTitle.className = 'title movementText'
      customContent.className = 'footer'
      customTable.className = 'battlefast'
      customContent.style = 'background: rgba(0, 0, 0, 0.7); color: #fff; font: 12px Tahoma,Arial,Hevetica,Sans-serif;'
      body.insertBefore(customTitle, body.childNodes[20])
      body.insertBefore(customContent, body.childNodes[21])
      customHTML0 = document.getElementsByClassName('footer')[0].innerHTML
      document.getElementsByClassName('footer')[0].innerHTML = '<br>' + customHTML0 + '<br>'
    }
  }
})();
setTimeout(function(){ statsLoop() }, 50);