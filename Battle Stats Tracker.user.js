// ==UserScript==
// @name           SyndiShanX's Battle Stats Tracker
// @author         SyndiShanX
// @include        https://pokemoncreed.net/battle.php*
// @include        http://pokemoncreed.net/battle.php*
// @include        https://pokemoncreed.net/clanrewards.php*
// @include        http://pokemoncreed.net/clanrewards.php*
// @grant          GM.getValue
// @grant          GM.setValue
// @grant          GM.deleteValue
// @version        1.15
// @run-at         document-end
// ==/UserScript==

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
battleID = '00000'
function statsLoop() {
  (async () => {
    if (document.getElementsByClassName('battleText')[0] != null) {
      previousBattleID = battleID
      battleID = window.location.search.split('=')[1]
      if (battleID != previousBattleID) {
        let battleTotal = await GM.getValue('TotalBattles', 0);
        let battleClanCredits = await GM.getValue('TotalClanCredits', 0);
        var battleClanCreditsStr = '' + battleClanCredits + ''
        battleClanCreditsSaved = parseInt(battleClanCreditsStr.trim().replace(/,/g, ''))
        let currentClanCredits = await GM.getValue('ClanCredits', 0);
        var currentClanCreditsStr = '' + currentClanCredits + ''
        currentClanCreditsSaved = parseInt(currentClanCreditsStr.trim().replace(/,/g, ''))
        let battleEXP = await GM.getValue('EXP', 0);
        var battleEXPStr = '' + battleEXP + ''
        var battleEXPSaved = parseInt(battleEXPStr.trim().replace(/,/g, ''))
        let battleCash = await GM.getValue('Cash', 0);
        var battleCashStr = '' + battleCash + ''
        var battleCashSaved = parseInt(battleCashStr.trim().replace(/,/g, ''))
        let battleDamageDealt = await GM.getValue('DamageDealt', 0);
        var battleDamageDealtStr = '' + battleDamageDealt + ''
        var battleDamageDealtSaved = parseInt(battleDamageDealtStr.trim().replace(/,/g, ''))
        let battleDamageTaken = await GM.getValue('DamageTaken', 0);
        var battleDamageTakenStr = '' + battleDamageTaken + ''
        var battleDamageTakenSaved = parseInt(battleDamageTakenStr.trim().replace(/,/g, ''))
        if (window.location.pathname == '/battle.php') {
          battleText = document.getElementsByClassName("bord")[0].innerText
          if (battleText.search('defeated') != -1) {
            battleTotal = parseInt(battleTotal + 1)
            await GM.setValue('TotalBattles', battleTotal)
            battleClanCredits0 = battleText.split(', and recieved ')[1].split(' (Capped)')[0]
            battleClanCredits1 = parseInt(battleClanCredits0.trim().replace(/,/g, ''))
            if (battleClanCredits1 > 409026) {
              battleClanPoints2 = 409026
            }
            currentClanCreditsFinal = parseInt(currentClanCreditsSaved + battleClanPoints2)
            currentClanCreditsFinal = numberWithCommas(currentClanCreditsFinal)
            await GM.setValue('ClanCredits', currentClanCreditsFinal)
            let currentClanCredits = await GM.getValue('ClanCredits', 0);
            battleClanCreditsFinal = parseInt(battleClanCreditsSaved + battleClanPoints2)
            battleClanCreditsFinal = numberWithCommas(battleClanCreditsFinal)
            await GM.setValue('TotalClanCredits', battleClanCreditsFinal)
            let battleClanCredits = await GM.getValue('TotalClanCredits', 0);

            if (battleText.split('recieved ')[1].split(' XP')[0] != null) {
              battleEXP0 = battleText.split('recieved ')[1].split(' XP')[0]
              battleEXP1 = parseInt(battleEXP0.trim().replace(/,/g, ''))
              battleEXPFinal = parseInt(battleEXPSaved + battleEXP1)
              battleEXPFinal = numberWithCommas(battleEXPFinal)
              await GM.setValue('EXP', battleEXPFinal)
              let battleEXP = await GM.getValue('EXP', 0);
            }
            if (battleText.split('XP, $')[1].split(', and')[0] != null) {
              battleCash0 = battleText.split('XP, $')[1].split(', and')[0]
              battleCash1 = parseInt(battleCash0.trim().replace(/,/g, ''))
              battleCashFinal = parseInt(battleCashSaved + battleCash1)
              battleCashFinal = numberWithCommas(battleCashFinal)
              await GM.setValue('Cash', battleCashFinal)
              let battleCash = await GM.getValue('Cash', 0);
            }
            if (battleText.split('for ')[1].split(' damage')[1] != null) {
              battleDamageDealt0 = battleText.split('for ')[1].split(' damage')[0]
              battleDamageDealt1 = parseInt(battleDamageDealt0.trim().replace(/,/g, ''))
              battleDamageDealtFinal = parseInt(battleDamageDealtSaved + battleDamageDealt1)
              battleDamageDealtFinal = numberWithCommas(battleDamageDealtFinal)
              await GM.setValue('DamageDealt', battleDamageDealtFinal)
              let battleDamageDealt = await GM.getValue('DamageDealt', 0);
            }
            if (battleText.split('for ')[2] != undefined) {
              if (battleText.split('for ')[2].split(' damage')[0] != null) {
                battleDamageTaken0 = battleText.split('for ')[2].split(' damage')[0]
                battleDamageTaken1 = parseInt(battleDamageTaken0.trim().replace(/,/g, ''))
                battleDamageTakenFinal = parseInt(battleDamageTakenSaved + battleDamageTaken1)
                battleDamageTakenFinal = numberWithCommas(battleDamageTakenFinal)
                await GM.setValue('DamageTaken', battleDamageTakenFinal)
                let battleDamageTaken = await GM.getValue('DamageTaken', 0);
              }
            }
          } else if (battleText.search('defeated') == -1 && battleText.search('damage') != -1) {
            if (battleText.split('for ')[1].split(' damage')[1] != null) {
              battleDamageDealt0 = battleText.split('for ')[1].split(' damage')[0]
              battleDamageDealt1 = parseInt(battleDamageDealt0.trim().replace(/,/g, ''))
              battleDamageDealtFinal = parseInt(battleDamageDealtSaved + battleDamageDealt1)
              battleDamageDealtFinal = numberWithCommas(battleDamageDealtFinal)
              await GM.setValue('DamageDealt', battleDamageDealtFinal)
              let battleDamageDealt = await GM.getValue('DamageDealt', 0);
            }
          }
          if (battleText.search('defeated') == -1 && battleText.search('hit your') != -1) {
            if (battleText.split('for ')[2] != undefined) {
              if (battleText.split('for ')[2].split(' damage')[0] != null) {
                battleDamageTaken0 = battleText.split('for ')[2].split(' damage')[0]
                battleDamageTaken1 = parseInt(battleDamageTaken0.trim().replace(/,/g, ''))
                battleDamageTakenFinal = parseInt(battleDamageTakenSaved + battleDamageTaken1)
                battleDamageTakenFinal = numberWithCommas(battleDamageTakenFinal)
                await GM.setValue('DamageTaken', battleDamageTakenFinal)
                let battleDamageTaken = await GM.getValue('DamageTaken', 0);
              }
            }
          }

          if (window.location.search.split('?c=')[1] != null){
            battleTextMe = battleText.split('\n\n')[0]
            battleTextEnemy = battleText.split('\n\n')[1]
            if (battleTextMe.search('for') != -1 && battleTextMe.search('damage') != -1) {
              if (battleTextMe.split('for ')[1].split(' damage')[1] != null) {
                battleDamageDealt0 = battleTextMe.split('for ')[1].split(' damage')[0]
                battleDamageDealt1 = parseInt(battleDamageDealt0.trim().replace(/,/g, ''))
                battleDamageDealtFinal = parseInt(battleDamageDealtSaved + battleDamageDealt1)
                battleDamageDealtFinal = numberWithCommas(battleDamageDealtFinal)
                await GM.setValue('DamageDealt', battleDamageDealtFinal)
                let battleDamageDealt = await GM.getValue('DamageDealt', 0);
              }
            }
            if (battleTextEnemy.search(', and hit your ') != -1) {
              if (battleTextEnemy.split(', and hit your ')[1].split('for ')[1].split(' damage')[1] != null) {
                battleDamageTaken0 = battleTextEnemy.split('for ')[1].split(' damage')[0]
                battleDamageTaken1 = parseInt(battleDamageTaken0.trim().replace(/,/g, ''))
                battleDamageTakenFinal = parseInt(battleDamageTakenSaved + battleDamageTaken1)
                battleDamageTakenFinal = numberWithCommas(battleDamageTakenFinal)
                await GM.setValue('DamageTaken', battleDamageTakenFinal)
                let battleDamageTaken = await GM.getValue('DamageTaken', 0);
              }
            }
          }
        }
      } else if (window.location.pathname == '/clanrewards.php') {
          if (document.getElementsByClassName('contentcontent')[0].getElementsByTagName('center')[0].innerText.split('successfully spent ')[1] != null) {
            spentCredits = document.getElementsByClassName('contentcontent')[0].getElementsByTagName('center')[0].innerText.split('successfully spent ')[1].split(' clan credits')[0]
            currentClanCreditsFinal = parseInt(currentClanCreditsSaved - parseInt(spentCredits.trim().replace(/,/g, '')))
          } else if (document.getElementsByClassName('contentcontent')[0].getElementsByTagName('center')[0].innerText.split('You currently have: ')[1] != null) {
            currentCredits = document.getElementsByClassName('contentcontent')[0].getElementsByTagName('center')[0].innerText.split('You currently have: ')[1].split(' clan credits')[0]
            currentClanCreditsFinal = parseInt(currentCredits.trim().replace(/,/g, ''))
          }
          currentClanCreditsFinal = numberWithCommas(currentClanCreditsFinal)
          await GM.setValue('ClanCredits', currentClanCreditsFinal)
          let currentClanCredits = await GM.getValue('ClanCredits', 0);
        } else { setTimeout(function(){ statsLoop() }, 250); }
    } else { setTimeout(function(){ statsLoop() }, 250); }
    if (window.location.pathname == '/battle.php') {
      let battleTotal = await GM.getValue('TotalBattles', 0);
      let currentClanCredits = await GM.getValue('ClanCredits', 0);
      let battleClanCredits = await GM.getValue('TotalClanCredits', 0);
      let battleEXP = await GM.getValue('EXP', 0);
      let battleCash = await GM.getValue('Cash', 0);
      let battleDamageDealt = await GM.getValue('DamageDealt', 0);
      let battleDamageTaken = await GM.getValue('DamageTaken', 0);
      document.getElementsByClassName('battleText')[0].innerText = 'Battle Stats - Total Battles [' + battleTotal + ']'
      document.getElementsByClassName('currentCreditsText')[0].innerText = currentClanCredits
      document.getElementsByClassName('totalCreditsText')[0].innerText = battleClanCredits
      document.getElementsByClassName('totalEXPText')[0].innerText = battleEXP
      document.getElementsByClassName('cashEarnedText')[0].innerText = battleCash
      document.getElementsByClassName('damageDealtText')[0].innerText = battleDamageDealt
      document.getElementsByClassName('damageTakenText')[0].innerText = battleDamageTaken
      setTimeout(function(){ statsLoop() }, 250);
    } else { setTimeout(function(){ statsLoop() }, 250); }
  })();
}
(async () => {
  let battleTotal = await GM.getValue('TotalBattles', 0);
  let currentClanCredits = await GM.getValue('ClanCredits', 0);
  let battleClanCredits = await GM.getValue('TotalClanCredits', 0);
  let battleEXP = await GM.getValue('EXP', 0);
  let battleCash = await GM.getValue('Cash', 0);
  let battleDamageDealt = await GM.getValue('DamageDealt', 0);
  let battleDamageTaken = await GM.getValue('DamageTaken', 0);
  if (currentClanCredits != null && battleClanCredits != null && battleEXP != null && battleCash != null && battleDamageDealt != null && battleDamageTaken != null) {
    if (document.getElementsByClassName('title')[0].innerText.search('Battle - ') == 0) {
      var body = document.getElementsByTagName('body')[0]
      var customTable = document.createElement('table')
      var customTBody = document.createElement('tbody')
      var customTR = document.createElement('tr')
      var customTH0 = document.createElement('th')
      var customTH1 = document.createElement('th')
      var customTH2 = document.createElement('th')
      var customTH3 = document.createElement('th')
      var customTH4 = document.createElement('th')
      var customTH5 = document.createElement('th')
      var customTH6 = document.createElement('th')
      var customTH7 = document.createElement('th')
      var customTH8 = document.createElement('th')
      var customTH9 = document.createElement('th')
      var customTH10 = document.createElement('th')
      var customTH11 = document.createElement('th')
      var customText0 = document.createTextNode('Current Clan Credits: ')
      var customText1 = document.createTextNode(currentClanCredits)
      var customText2 = document.createTextNode('Total Clan Credits Earned: ')
      var customText3 = document.createTextNode(battleClanCredits)
      var customText4 = document.createTextNode('Total EXP Earned: ')
      var customText5 = document.createTextNode(battleEXP)
      var customText6 = document.createTextNode('Total Cash Earned: ')
      var customText7 = document.createTextNode(battleCash)
      var customText8 = document.createTextNode('Total Damage Dealt: ')
      var customText9 = document.createTextNode(battleDamageDealt)
      var customText10 = document.createTextNode('Total Damage Taken: ')
      var customText11 = document.createTextNode(battleDamageTaken)
      var customTitle = document.createElement('div')
      var customText = document.createTextNode('Battle Stats - Total Battles [' + battleTotal + ']')
      var customContent = document.createElement('div')
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
      customTR.appendChild(customTH8)
      customTR.appendChild(customTH9)
      customTR.appendChild(customTH10)
      customTR.appendChild(customTH11)
      customTH0.appendChild(customText0)
      customTH1.appendChild(customText1)
      customTH2.appendChild(customText2)
      customTH3.appendChild(customText3)
      customTH4.appendChild(customText4)
      customTH5.appendChild(customText5)
      customTH6.appendChild(customText6)
      customTH7.appendChild(customText7)
      customTH8.appendChild(customText8)
      customTH9.appendChild(customText9)
      customTH10.appendChild(customText10)
      customTH11.appendChild(customText11)
      customTH1.className = 'currentCreditsText'
      customTH3.className = 'totalCreditsText'
      customTH5.className = 'totalEXPText'
      customTH7.className = 'cashEarnedText'
      customTH9.className = 'damageDealtText'
      customTH11.className = 'damageTakenText'
      customTitle.appendChild(customText)
      customTitle.className = 'title battleText'
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
setTimeout(function(){ statsLoop() }, 250);