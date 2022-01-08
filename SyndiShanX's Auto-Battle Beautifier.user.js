// ==UserScript==
// @name           SyndiShanX's Auto-Battle Beautifier
// @author         SyndiShanX
// @include        https://pokemoncreed.net/battle.php?*
// @include        http://pokemoncreed.net/battle.php?*
// @version        1.15
// ==/UserScript==

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Battle Number Beautifier
function pokeLevel() {
  var pokeInfo = document.getElementsByClassName("battlefast")[0].children[0].children[1]
	
	var pokeInfo1 = pokeInfo.children[0].innerHTML.split('</b> ')[1].split('<br>')[0].split(' / ')
	var pokeInfo2 = numberWithCommas(pokeInfo1[0])
	var pokeInfo3 = numberWithCommas(pokeInfo1[1])
	
	var pokeInfo4 = pokeInfo.children[0].innerHTML.split('</b> ')[0] + '</b> ' + pokeInfo2 + ' / ' + pokeInfo3 + '<br>' + pokeInfo.children[0].innerHTML.split('</b> ')[1].split('<br>')[1]
	
	var pokeSplit1 = pokeInfo4.split('<div style="width: ')[1].split('px')
	
	var pokeInfo5 = pokeInfo4.split('<div style="width: ')[0] + '<div style="width: 120px' + pokeSplit1[1] + 'px' + pokeSplit1[2] + 'px' + pokeSplit1[3]
	
	document.getElementsByClassName("battlefast")[0].children[0].children[1].children[0].innerHTML = pokeInfo5
	
	var pokeInfo6 = pokeInfo.children[1].innerHTML.split('</b> ')[1].split('<br>')[0].split(' / ')
	var pokeInfo7 = numberWithCommas(pokeInfo6[0])
	var pokeInfo8 = numberWithCommas(pokeInfo6[1])
	
	var pokeInfo9 = pokeInfo.children[1].innerHTML.split('</b> ')[0] + '</b> ' + pokeInfo7 + ' / ' + pokeInfo8 + '<br>' + pokeInfo.children[1].innerHTML.split('</b> ')[1].split('<br>')[1]
	
	var pokeSplit2 = pokeInfo9.split('<div style="width: ')[1].split('px')
	
	var pokeInfo10 = pokeInfo9.split('<div style="width: ')[0] + '<div style="width: 120px' + pokeSplit2[1] + 'px' + pokeSplit2[2] + 'px' + pokeSplit2[3]
	
	document.getElementsByClassName("battlefast")[0].children[0].children[1].children[1].innerHTML = pokeInfo10
	
	
	var pokeLevel = document.getElementsByClassName("battlefast")[0].children[0].children[0]
	
	var pokeLevel1 = pokeLevel.children[0].innerHTML.split('\(')[0]
	var pokeLevel2 = pokeLevel.children[0].innerHTML.split('\)')[1]
	var pokeLevel3 = pokeLevel.children[0].innerHTML.split('\(')[1].split('\)')[0]
	var pokeLevel4 = numberWithCommas(pokeLevel3)
	var pokeLevel5 = pokeLevel1 + '\(' + pokeLevel4 + '\)' + pokeLevel2
	
	document.getElementsByClassName("battlefast")[0].children[0].children[0].children[0].innerHTML = pokeLevel5
	
	var pokeLevel6 = pokeLevel.children[1].innerHTML.split('\(')[0]
	var pokeLevel7 = pokeLevel.children[1].innerHTML.split('\)')[1]
	var pokeLevel8 = pokeLevel.children[1].innerHTML.split('\(')[1].split('\)')[0]
	var pokeLevel9 = numberWithCommas(pokeLevel8)
	var pokeLevel10 = pokeLevel6 + '\(' + pokeLevel9 + '\)' + pokeLevel7
	
	document.getElementsByClassName("battlefast")[0].children[0].children[0].children[1].innerHTML = pokeLevel10
}

//Battle Text Beautifier
if (window.location.pathname == "/battle.php") {
  if (window.location.search.split('?opp').length > 1) {
    pokeLevel()
  } else {
    pokeLevel()
    var battleText = document.getElementsByClassName("bord")[0].innerText
    
    console.log(battleText)
    
    var battleText0 = battleText.split('.')[0]
    var battleText1 = battleText.split('\n\n')[0]
    if (battleText1.split('has hit')[1] != undefined) {
      var battleText2 = battleText1.split('has hit')[1].split('!')[0]
      if (battleText2.split('for')[1] != undefined) {
        if (battleText2.split('for')[1].split('damage')[0] != undefined) {
          var battleText2f = battleText2.split('for')[1].split('damage')[0]
          battleText2f = numberWithCommas(battleText2f)
          battleText2 = battleText2.split('for')[0] + 'for' + battleText2f + 'damage!'
        }
      }
      if (battleText1.split('It was')[1] != undefined) {
        var battleText3 = battleText1.split('It was')[1].split('!')[0]
      }
    } else if (battleText1.split('failed')[1] != undefined) {
      var battleText2 = ', but it failed' + battleText1.split('failed')[1].split('.')[0] + '.'
    }
    
    if (battleText1.split('is hurt by the poison')[1] != undefined) {
      battleText2 + '\n' + battleText1.split('is hurt by the poison')[0].split('\n')[2] + 'is hurt by the poison!'
    }
    
    if (battleText3 != undefined) {
      var battleTextLine1 = battleText0 + ', and hit' + battleText2 + '! (It was' + battleText3 + '!)'
    } else if (battleText2 != undefined) {
      if (battleText2 == ', and flew into the sky!') {
        var battleTextLine1 = battleText0 + battleText2
      } else if (battleText2 == ', but it failed to poison the opponent.') {
        var battleTextLine1 = battleText0 + battleText2
      } else {
        var battleTextLine1 = battleText0 + ', and hit' + battleText2
      }
    } else {
      var battleTextLine1 = battleText0
    }
    
    if (battleText1 != undefined) {
      battleTextName = battleText.split(' ')[0]
      if (battleText1.split(battleTextLine1)[1] != undefined) {
        if (battleText1.split(battleTextLine1)[1].split('.')[1] != undefined) {
          if (battleText1.split(battleTextLine1)[1].split('.')[1].split(battleTextName)[1] != undefined) {
            battleText1 = battleText1.split(battleTextLine1)[1].split('.')[1].split(battleTextName)[1]
            battleText1Num = battleText1.split(' ')[2]
            battleText1Num = numberWithCommas(battleText1Num)
            if (battleText1.split(' ').length == 4) {
              battleText1 = battleText1.split(' ')[0] + ' ' + battleText1.split(' ')[1] + ' ' + battleText1Num + ' ' + battleText1.split(' ')[3]
            } else if (battleText1.split(' ').length == 5) {
              battleText1 = battleText1.split(' ')[0] + ' ' + battleText1.split(' ')[1] + ' ' + battleText1Num + ' ' + battleText1.split(' ')[3] + ' ' + battleText1.split(' ')[4]
            } else if (battleText1.split(' ').length == 6) {
              battleText1 = battleText1.split(' ')[0] + ' ' + battleText1.split(' ')[1] + ' ' + battleText1Num + ' ' + battleText1.split(' ')[3] + ' ' + battleText1.split(' ')[4] + ' ' + battleText1.split(' ')[5]
            } else if (battleText1.split(' ').length == 10) {
              battleText1 = battleText1.split(' ')[0] + ' ' + battleText1.split(' ')[1] + ' ' + battleText1Num + ' ' + battleText1.split(' ')[3] + ' ' + battleText1.split(' ')[4] + ' ' + battleText1.split(' ')[5]+ ' ' + battleText1.split(' ')[6]+ ' ' + battleText1.split(' ')[7]+ ' ' + battleText1.split(' ')[8]+ ' ' + battleText1.split(' ')[9]
            } else {
              battleText1 = battleText1.split(' ')[0] + ' ' + battleText1.split(' ')[1] + ' ' + battleText1Num + ' ' + battleText1.split(' ')[3] + ' -=-=-=ERROR=-=-=-'
            }
            
            battleTextLine1 = battleTextLine1 + ', and' + battleText1 + '!'
          } else if (battleText.split("'s ")[1] != undefined) {
            battleTextEnemyName = battleText.split("'s ")[1].split(' ')[0]
            if (battleText1.split(battleTextLine1)[1].split('.')[1].split(battleTextEnemyName)[1] != undefined) {
              battleText1 = battleText1.split(battleTextLine1)[1].split('.')[1].split(battleTextEnemyName)[1]
              if (battleText1.split('was badly poisoned!')[1] != undefined) {
                battleTextLine1 = battleTextLine1 + ', and ' + battleTextEnemyName + battleText1
              } else if (battleText1.split('is already poisoned')[1] != undefined) {
                battleTextLine1 = battleTextLine1 + ', but ' + battleTextEnemyName + battleText1 + '!'
              }
            } else if (battleText1.split(battleTextLine1)[1].split('!')[1] != undefined) {
              if (battleText1.split(battleTextLine1)[1].split('!')[1].split(battleTextEnemyName)[1] != undefined) {
                battleText1 = battleText1.split(battleTextLine1)[1].split('.')[1].split(battleTextEnemyName)[1]
                if (battleText1.split('was badly poisoned!')[1] != undefined) {
                  battleTextLine1 = battleTextLine1 + ', and ' + battleTextEnemyName + battleText1
                } else if (battleText1.split('is already poisoned')[1] != undefined) {
                  battleTextLine1 = battleTextLine1 + ', but ' + battleTextEnemyName + battleText1 + '!'
                }
              }
            }
          }
        }
      }
    }
    
    if (battleTextLine1.split('!!')[1] != undefined) {
      battleTextLine1 = battleTextLine1.split('!!')[0] + '!'
    }
    
    var battleText4 = battleText.split('\n\n')[1]
    var battleText5 = battleText4.split('.')[0]
    if (battleText4.split('has hit')[1] != undefined) {
      if (battleText4.split('It was')[1] == undefined) {
    	  var battleText6 = battleText4.split('has hit')[1].split('!')[0]
        
        var battleText6f = battleText6.split('for')[1].split('damage')[0]
        battleText6f = numberWithCommas(battleText6f)
        battleText6 = battleText6.split('for')[0] + 'for' + battleText6f + 'damage'
      
    	  var battleTextLine2 = battleText5 + ' and hit' + battleText6 + '!'
      } else {
        var battleText6 = battleText4.split('has hit')[1].split('!')[0]
    	  var battleText7 = battleText4.split('It was')[1].split('!')[0]
        
        var battleText6f = battleText6.split('for')[1].split('damage')[0]
        battleText6f = numberWithCommas(battleText6f)
        battleText6 = battleText6.split('for')[0] + 'for' + battleText6f + 'damage!'
      
    	  var battleTextLine2 = battleText5 + ', and hit' + battleText6 + '! (It was' + battleText7 + '!)'
      }
    } else if (battleText4.split('It had no')[1] != undefined) {
    	var battleText6 = battleText4.split('It had no')[1].split('!')[0]
    	battleText6 = 'it had no' + battleText6.split(' on the pokemon')[0]
    	var battleTextLine2 = battleText5 + ', but ' + battleText6 + '!'
    } else if (battleText4.split('attack had missed')[1] != undefined) {
      var battleTextLine2 = battleText5 + ', but it missed!'
    } else {
      var battleTextLine2 = battleText5 + '!'
    }
    
    if (battleTextLine2.split('!!')[1] != undefined) {
      battleTextLine2 = battleTextLine2.split('!!')[0] + '!'
    }
    
    if (battleText.search('fainted') != -1) {
      if (battleText.split('Your')[1] != undefined) {
        if (battleText.split('Your')[1].split('fainted.\n\n') != undefined) {
          document.getElementsByClassName("bord")[0].innerText = battleTextLine1 + '\n\n' + battleTextLine2
        }
      } else {
        var battleText8 = battleText.split('fainted.\n\n')[1].split('!\n')[0]
        var battleText9 = battleText.split('You recieved ')[1].split('\n')[0]
        var battleText10 = battleText9.split('experience points')[0]
  	    var battleText10 = numberWithCommas(battleText10)
        var battleText11 = battleText9.split('experience points')[1].split('$')
        battleText11f = numberWithCommas(battleText11[1])
        battleText11 = battleText11[0] + '$' + battleText11f
        var battleClanPoints1 = parseInt(battleText10.trim().replace(/,/g, ''))
        battleClanPoints1 = battleClanPoints1 / 20.194682
        battleClanPoints2 = Math.round(battleClanPoints1)
        if (battleClanPoints2 >= 409026) {
          battleClanPoints3 = 409026
          capped = " (Capped)"
        } else {
          battleClanPoints3 = battleClanPoints3
          capped = ""
        }
        battleClanPoints4 = Math.round(battleClanPoints3)
        battleClanPoints5 = numberWithCommas(battleClanPoints4)
      
        var battleTextLine3 = battleText8 + ', and recieved ' + battleText10 + 'XP,' + battleText11.split('!')[0].split(' and')[1] + ', and ' + battleClanPoints5 + capped + ' Clan Points!' + '\n\n' + battleText.split('You recieved ')[1].split('\n')[2]
        document.getElementsByClassName("bord")[0].innerText = battleTextLine1 + '\n\n' + battleTextLine2 + '\n\n' + battleTextLine3 + '\n\n'
        if (document.getElementsByClassName("bord")[0].innerText.split('\n\n\n')[1] != undefined) {
          document.getElementsByClassName("bord")[0].innerText = document.getElementsByClassName("bord")[0].innerText.split('\n\n\n')[0] + '\n\n'
        }
      }
    } else {
      var battleTextLine3 = ''
      document.getElementsByClassName("bord")[0].innerText = battleTextLine1 + '\n\n' + battleTextLine2 + '\n\n' + battleTextLine3 + '\n\n'
      if (document.getElementsByClassName("bord")[0].innerText.split('\n\n\n')[1] != undefined) {
        document.getElementsByClassName("bord")[0].innerText = document.getElementsByClassName("bord")[0].innerText.split('\n\n\n')[0] + '\n\n'
      }
    }
  }
}