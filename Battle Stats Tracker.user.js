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

(async () => {
  
  let battleTotal = await GM.getValue('TotalBattles', 0);
  let battleClanCredits = await GM.getValue('ClanCredits', 0);
  var battleClanCreditsStr = '' + battleClanCredits + ''
  var battleClanCreditsSaved = parseInt(battleClanCreditsStr.trim().replace(/,/g, ''))
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
    var battleText = document.getElementsByClassName("bord")[0].innerText
    if (battleText.search('defeated') != -1) {
      battleTotal = parseInt(battleTotal + 1)
      await GM.setValue('TotalBattles', battleTotal)
      var battleClanCredits0 = battleText.split(', and recieved ')[1].split(' (Capped)')[0]
      var battleClanCredits1 = parseInt(battleClanCredits0.trim().replace(/,/g, ''))
      if (battleClanCredits1 > 409026) {
        var battleClanPoints2 = 409026
      }
      var battleClanCreditsFinal = parseInt(battleClanCreditsSaved + battleClanPoints2)
      battleClanCreditsFinal = numberWithCommas(battleClanCreditsFinal)
      await GM.setValue('ClanCredits', battleClanCreditsFinal)
      let battleClanCredits = await GM.getValue('ClanCredits', 0);
      
      if (battleText.split('recieved ')[1].split(' XP')[0] != null) {
        var battleEXP0 = battleText.split('recieved ')[1].split(' XP')[0]
        var battleEXP1 = parseInt(battleEXP0.trim().replace(/,/g, ''))
        var battleEXPFinal = parseInt(battleEXPSaved + battleEXP1)
        battleEXPFinal = numberWithCommas(battleEXPFinal)
        await GM.setValue('EXP', battleEXPFinal)
        let battleEXP = await GM.getValue('EXP', 0);
      }
      if (battleText.split('XP, $')[1].split(', and')[0] != null) {
        var battleCash0 = battleText.split('XP, $')[1].split(', and')[0]
        var battleCash1 = parseInt(battleCash0.trim().replace(/,/g, ''))
        var battleCashFinal = parseInt(battleCashSaved + battleCash1)
        battleCashFinal = numberWithCommas(battleCashFinal)
        await GM.setValue('Cash', battleCashFinal)
        let battleCash = await GM.getValue('Cash', 0);
      }
      if (battleText.split('for ')[1].split(' damage')[1] != null) {
        var battleDamageDealt0 = battleText.split('for ')[1].split(' damage')[0]
        var battleDamageDealt1 = parseInt(battleDamageDealt0.trim().replace(/,/g, ''))
        var battleDamageDealtFinal = parseInt(battleDamageDealtSaved + battleDamageDealt1)
        battleDamageDealtFinal = numberWithCommas(battleDamageDealtFinal)
        await GM.setValue('DamageDealt', battleDamageDealtFinal)
        let battleDamageDealt = await GM.getValue('DamageDealt', 0);
      }
      if (battleText.split('for ')[2] != undefined) {
        if (battleText.split('for ')[2].split(' damage')[0] != null) {
          var battleDamageTaken0 = battleText.split('for ')[2].split(' damage')[0]
          var battleDamageTaken1 = parseInt(battleDamageTaken0.trim().replace(/,/g, ''))
          var battleDamageTakenFinal = parseInt(battleDamageTakenSaved + battleDamageTaken1)
          battleDamageTakenFinal = numberWithCommas(battleDamageTakenFinal)
          await GM.setValue('DamageTaken', battleDamageTakenFinal)
          let battleDamageTaken = await GM.getValue('DamageTaken', 0);
        }
      }
    } else if (battleText.search('defeated') == -1 && battleText.search('damage') != -1) {
      if (battleText.split('for ')[1].split(' damage')[1] != null) {
        var battleDamageDealt0 = battleText.split('for ')[1].split(' damage')[0]
        var battleDamageDealt1 = parseInt(battleDamageDealt0.trim().replace(/,/g, ''))
        var battleDamageDealtFinal = parseInt(battleDamageDealtSaved + battleDamageDealt1)
        battleDamageDealtFinal = numberWithCommas(battleDamageDealtFinal)
        await GM.setValue('DamageDealt', battleDamageDealtFinal)
        let battleDamageDealt = await GM.getValue('DamageDealt', 0);
      }
    }
    if (battleText.search('defeated') == -1 && battleText.search('hit your') != -1) {
      if (battleText.split('for ')[2] != undefined) {
        if (battleText.split('for ')[2].split(' damage')[0] != null) {
          var battleDamageTaken0 = battleText.split('for ')[2].split(' damage')[0]
          var battleDamageTaken1 = parseInt(battleDamageTaken0.trim().replace(/,/g, ''))
          var battleDamageTakenFinal = parseInt(battleDamageTakenSaved + battleDamageTaken1)
          battleDamageTakenFinal = numberWithCommas(battleDamageTakenFinal)
          await GM.setValue('DamageTaken', battleDamageTakenFinal)
          let battleDamageTaken = await GM.getValue('DamageTaken', 0);
        }
      }
    }
    
    //------------------------------------------------------------------------------------
  
    if (window.location.search.split('?c=')[1] != null){
      var battleTextMe = battleText.split('\n\n')[0]
      var battleTextEnemy = battleText.split('\n\n')[1]
      if (battleTextMe.search('for') != -1 && battleTextMe.search('damage') != -1) {
        if (battleTextMe.split('for ')[1].split(' damage')[1] != null) {
          var battleDamageDealt0 = battleTextMe.split('for ')[1].split(' damage')[0]
          var battleDamageDealt1 = parseInt(battleDamageDealt0.trim().replace(/,/g, ''))
          var battleDamageDealtFinal = parseInt(battleDamageDealtSaved + battleDamageDealt1)
          battleDamageDealtFinal = numberWithCommas(battleDamageDealtFinal)
          await GM.setValue('DamageDealt', battleDamageDealtFinal)
          let battleDamageDealt = await GM.getValue('DamageDealt', 0);
        }
      }
      if (battleTextEnemy.search(', and hit your ') != -1) {
        if (battleTextEnemy.split(', and hit your ')[1].split('for ')[1].split(' damage')[1] != null) {
          var battleDamageTaken0 = battleTextEnemy.split('for ')[1].split(' damage')[0]
          var battleDamageTaken1 = parseInt(battleDamageTaken0.trim().replace(/,/g, ''))
          var battleDamageTakenFinal = parseInt(battleDamageTakenSaved + battleDamageTaken1)
          battleDamageTakenFinal = numberWithCommas(battleDamageTakenFinal)
          await GM.setValue('DamageTaken', battleDamageTakenFinal)
          let battleDamageTaken = await GM.getValue('DamageTaken', 0);
        }
      }
    }
    
    if (battleClanCredits != null && battleEXP != null && battleCash != null && battleDamageDealt != null && battleDamageTaken != null) {
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
        var customText0 = document.createTextNode('Total Clan Credits Earned: ')
        var customText1 = document.createTextNode(battleClanCredits)
        var customText2 = document.createTextNode('Total EXP Earned: ')
        var customText3 = document.createTextNode(battleEXP)
        var customText4 = document.createTextNode('Total Cash Earned: ')
        var customText5 = document.createTextNode(battleCash)
        var customText6 = document.createTextNode('Total Damage Dealt: ')
        var customText7 = document.createTextNode(battleDamageDealt)
        var customText8 = document.createTextNode('Total Damage Taken: ')
        var customText9 = document.createTextNode(battleDamageTaken)
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
        customTitle.appendChild(customText)
        customTitle.className = 'title'
        customContent.className = 'footer'
        customTable.className = 'battlefast'
        customContent.style = 'background: rgba(0, 0, 0, 0.7); color: #fff; font: 12px Tahoma,Arial,Hevetica,Sans-serif;'
        body.insertBefore(customTitle, body.childNodes[20])
        body.insertBefore(customContent, body.childNodes[21])
        customHTML0 = document.getElementsByClassName('footer')[0].innerHTML
        document.getElementsByClassName('footer')[0].innerHTML = '<br>' + customHTML0 + '<br>'
        
        //Vertical Menu Test (Broken)
        //customHTML1 = document.getElementsByClassName('footer')[0].innerHTML.split('</th><th>')[0] + document.getElementsByClassName('footer')[0].innerHTML.split('</th><th>')[1] + '</th><br>'
        //customHTML2 = document.getElementsByClassName('footer')[0].innerHTML.split('</th><th>')[2] + document.getElementsByClassName('footer')[0].innerHTML.split('</th><th>')[3] + '</th><br>'
        //customHTML3 = document.getElementsByClassName('footer')[0].innerHTML.split('</th><th>')[4] + document.getElementsByClassName('footer')[0].innerHTML.split('</th><th>')[5] + '</th><br>'
        //customHTML4 = document.getElementsByClassName('footer')[0].innerHTML.split('</th><th>')[6] + document.getElementsByClassName('footer')[0].innerHTML.split('</th><th>')[7] + '</th><br>'
        //customHTML5 = document.getElementsByClassName('footer')[0].innerHTML.split('</th><th>')[8] + document.getElementsByClassName('footer')[0].innerHTML.split('</th><th>')[9] + '</th>'
        //customHTML6 = document.getElementsByClassName('footer')[0].innerHTML.split('</th><th>')[10]
        //document.getElementsByClassName('footer')[0].innerHTML = '<br>' + customHTML1 + customHTML2 + customHTML3 + customHTML4 + customHTML5 + customHTML6 + '<br>'
      }
    }
  } else if (window.location.pathname == '/clanrewards.php') {
    if (document.getElementsByClassName('contentcontent')[0].getElementsByTagName('center')[0].innerText.split('spent 10')[1] != null) {
      var battleClanCreditsFinal = parseInt(battleClanCreditsSaved - 10000000)
      battleClanCreditsFinal = numberWithCommas(battleClanCreditsFinal)
      await GM.setValue('ClanCredits', battleClanCreditsFinal)
      let battleClanCredits = await GM.getValue('ClanCredits', 0);
    }
  }
})();
