// ==UserScript==
// @name			Battle Beautifier
// @author		SyndiShanX
// @include		https://pokemoncreed.net/battle.php*
// @include		http://pokemoncreed.net/battle.php*
// @run-at		document-end
// ==/UserScript==

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Battle Number Beautifier
function pokeLevel() {
  pokeInfo = document.getElementsByClassName("battlefast")[0].children[0].children[1]

	pokeInfo1 = pokeInfo.children[0].innerHTML.split('</b> ')[1].split('<br>')[0].split(' / ')
	pokeInfo2 = numberWithCommas(pokeInfo1[0])
	pokeInfo3 = numberWithCommas(pokeInfo1[1])

	pokeInfo4 = pokeInfo.children[0].innerHTML.split('</b> ')[0] + '</b> ' + pokeInfo2 + ' / ' + pokeInfo3 + '<br>' + pokeInfo.children[0].innerHTML.split('</b> ')[1].split('<br>')[1]

	pokeSplit1 = pokeInfo4.split('<div style="width: ')[1].split('px')

	pokeInfo5 = pokeInfo4.split('<div style="width: ')[0] + '<div style="width: 120px' + pokeSplit1[1] + 'px' + pokeSplit1[2] + 'px' + pokeSplit1[3]

	document.getElementsByClassName("battlefast")[0].children[0].children[1].children[0].innerHTML = pokeInfo5

	pokeInfo6 = pokeInfo.children[1].innerHTML.split('</b> ')[1].split('<br>')[0].split(' / ')
	pokeInfo7 = numberWithCommas(pokeInfo6[0])
	pokeInfo8 = numberWithCommas(pokeInfo6[1])

	pokeInfo9 = pokeInfo.children[1].innerHTML.split('</b> ')[0] + '</b> ' + pokeInfo7 + ' / ' + pokeInfo8 + '<br>' + pokeInfo.children[1].innerHTML.split('</b> ')[1].split('<br>')[1]

	pokeSplit2 = pokeInfo9.split('<div style="width: ')[1].split('px')

	pokeInfo10 = pokeInfo9.split('<div style="width: ')[0] + '<div style="width: 120px' + pokeSplit2[1] + 'px' + pokeSplit2[2] + 'px' + pokeSplit2[3]

	document.getElementsByClassName("battlefast")[0].children[0].children[1].children[1].innerHTML = pokeInfo10


	pokeLevel = document.getElementsByClassName("battlefast")[0].children[0].children[0]

	pokeLevel1 = pokeLevel.children[0].innerHTML.split('\(')[0]
	pokeLevel2 = pokeLevel.children[0].innerHTML.split('\)')[1]
	pokeLevel3 = pokeLevel.children[0].innerHTML.split('\(')[1].split('\)')[0]
	pokeLevel4 = numberWithCommas(pokeLevel3)
	pokeLevel5 = pokeLevel1 + '\(' + pokeLevel4 + '\)' + pokeLevel2

	document.getElementsByClassName("battlefast")[0].children[0].children[0].children[0].innerHTML = pokeLevel5

	pokeLevel6 = pokeLevel.children[1].innerHTML.split('\(')[0]
	pokeLevel7 = pokeLevel.children[1].innerHTML.split('\)')[1]
	pokeLevel8 = pokeLevel.children[1].innerHTML.split('\(')[1].split('\)')[0]
	pokeLevel9 = numberWithCommas(pokeLevel8)
	pokeLevel10 = pokeLevel6 + '\(' + pokeLevel9 + '\)' + pokeLevel7

	document.getElementsByClassName("battlefast")[0].children[0].children[0].children[1].innerHTML = pokeLevel10
}

//Battle Text Beautifier
if (window.location.pathname == "/battle.php") {
  if (window.location.search.split('?opp').length > 1 || window.location.search == '') {
    pokeLevel()
  } else {
    pokeLevel()
		battleText = document.getElementsByClassName("bord")[0].innerHTML

		// Fix Typo
		if (battleText.search('recieved') != -1) {
			battleText = battleText.replaceAll('recieved', 'received')
			document.getElementsByClassName("bord")[0].innerHTML = battleText
		}

		oldBattleText = battleText

		battleTextSplit = battleText.split('<br><br>')

		battleTextPlayer = battleTextSplit[0]
		battleTextEnemy = battleTextSplit[1]

		battleTextRewards = ''
		battleTextEXPLock = ''
		battleTextPlayerFainted = ''
		battleTextEnemyFainted = ''
		battleTextEnemyDefeated = ''
		battleTextContinueButton = ''

    battleTextPlayerSpecial = ''
    battleTextEnemySpecial = ''

		battleTextFinal = ''

		// Search for and Obtain Variabled
		for (let i = 0; i < battleTextSplit.length; i++) {
			if (battleTextSplit[i].search('received') != -1) {
				battleTextRewards = battleTextSplit[i]
			} else if (battleTextSplit[i].search('No pokemon in your party gained any experience due to EXP. Lock.') != -1) {
				battleTextEXPLock = battleTextSplit[i]
			} else if (battleTextSplit[i].search('fainted') != -1) {
				if (battleTextSplit[i].search('Your') != -1) {
					battleTextPlayerFainted = battleTextSplit[i]
				} else if (battleTextSplit[i].search('Foe') != -1) {
					battleTextEnemyFainted = battleTextSplit[i]
				}
			} else if (battleTextSplit[i].search('defeated') != -1) {
				battleTextEnemyDefeated = battleTextSplit[i]
			} else if (battleTextSplit[i].search('Continue the Battle!') != -1) {
				battleTextContinueButton = battleTextSplit[i]
			}
		}

		// Beautify Player Text
		if (battleTextPlayer != '') {
			battleTextPlayerSplit = battleTextPlayer.split('<br>\n')[1].split('<br>')
      battleTextPlayerMove = battleTextPlayerSplit[0].split('.')[0]
      if (battleTextPlayerSplit.length > 1 && battleTextPlayerSplit[1] == '\n') {
        battleTextPlayerFinal = battleTextPlayerMove
      } else if (battleTextPlayerSplit[1].search('hurt by the poison') != -1) {
        battleTextPlayerFinal = battleTextPlayerMove + '!'
      } else {
        battleTextPlayerFinal = battleTextPlayerMove + '!'
      }
      for (let i = 0; i < battleTextPlayerSplit.length; i++) {
        if (battleTextPlayerSplit[i].search('hit') != -1) {
			    battleTextPlayerDamage = ' and hit' + battleTextPlayerSplit[i].split('hit')[1].split('for')[0] + 'for ' + numberWithCommas(parseInt(battleTextPlayerSplit[i].split('for')[1].split('damage')[0].trim())) + ' damage!'
			    battleTextPlayerFinal = battleTextPlayerFinal + battleTextPlayerDamage
        } else if (battleTextPlayerSplit[i].search('flew') != -1) {
          battleTextPlayerFinal = battleTextPlayerFinal + ' and flew into the Sky!'
        } else if (battleTextPlayerSplit[i].search('badly poisoned') != -1) {
          battleTextPlayerFinal = battleTextPlayerFinal + ' and ' + battleTextPlayerSplit[i]
        } else if (battleTextPlayerSplit[i].search('already poisoned') != -1) {
          battleTextPlayerFinal = battleTextPlayerFinal + ' but ' + battleTextPlayerSplit[i].split("'s ")[1]
        } else if (battleTextPlayerSplit[i].search('failed') != -1) {
          battleTextPlayerFinal = battleTextPlayerFinal + ' but ' + battleTextPlayerSplit[i].split('move')[1].split('.')[0] + '!'
        } else if (battleTextPlayerSplit[i].search('missed') != -1) {
          battleTextPlayerFinal = battleTextPlayerFinal + ' but missed!'
        }
      }
      for (let i = 0; i < battleTextPlayerSplit.length; i++) {
			  // Append Effectiveness
				if (battleTextPlayerSplit[i].search('effect') != -1) {
					battleTextPlayerFinal = battleTextPlayerFinal + ' (' + battleTextPlayerSplit[i] + ')'
				}
      }
      for (let i = 0; i < battleTextPlayerSplit.length; i++) {
        // Append Special Effects
        if (battleTextPlayerSplit[i].search('hurt by the poison') != -1) {
          battleTextPlayerFinal = battleTextPlayerFinal + '<br><br>' + battleTextPlayerSplit[i]
        }
      }
		}

		// Beautify Enemy Text
		if (battleTextEnemy != '') {
			battleTextEnemySplit = battleTextEnemy.split('<br>')
			battleTextEnemyMove = battleTextEnemySplit[0].split('.')[0]
      if (battleTextEnemySplit.length > 1 && battleTextEnemySplit[1] == '\n') {
        battleTextEnemyFinal = battleTextEnemyMove
      } else if (battleTextEnemySplit[1].search('hurt by the poison') != -1) {
        battleTextEnemyFinal = battleTextEnemyMove + '!'
      } else {
        battleTextEnemyFinal = battleTextEnemyMove + '!'
      }
      for (let i = 0; i < battleTextEnemySplit.length; i++) {
        if (battleTextEnemySplit[i].search('hit') != -1) {
          battleTextEnemyDamage = ' and hit' + battleTextEnemySplit[i].split('hit')[1].split('for')[0] + 'for ' + numberWithCommas(parseInt(battleTextEnemySplit[i].split('for')[1].split('damage')[0].trim())).toString() + ' damage!'
          battleTextEnemyFinal = battleTextEnemyFinal + battleTextEnemyDamage
        } else if (battleTextEnemySplit[i].search('flew') != -1) {
          battleTextEnemyFinal = battleTextEnemyFinal + ' and flew into the Sky!'
        } else if (battleTextEnemySplit[i].search('badly poisoned') != -1) {
          battleTextEnemyFinal = battleTextEnemyFinal + ' and ' + battleTextEnemySplit[i]
        } else if (battleTextEnemySplit[i].search('already poisoned') != -1) {
          battleTextEnemyFinal = battleTextEnemyFinal + ' but ' + battleTextEnemySplit[i].split("Your ")[1]
        } else if (battleTextEnemySplit[i].search('failed') != -1) {
          battleTextEnemyFinal = battleTextEnemyFinal + ' but ' + battleTextEnemySplit[i].split('move')[1].split('.')[0] + '!'
        } else if (battleTextEnemySplit[i].search('missed') != -1) {
          battleTextEnemyFinal = battleTextEnemyFinal + ' but missed!'
        }
      }
      for (let i = 0; i < battleTextEnemySplit.length; i++) {
			  // Append Effectiveness
				if (battleTextEnemySplit[i].search('effect') != -1) {
					battleTextEnemyFinal = battleTextEnemyFinal + ' (' + battleTextEnemySplit[i] + ')'
				}
      }
      for (let i = 0; i < battleTextEnemySplit.length; i++) {
        // Append Special Effects
        if (battleTextEnemySplit[i].search('hurt by the poison') != -1) {
          battleTextEnemyFinal = battleTextEnemyFinal + '<br><br>' + battleTextEnemySplit[i]
        }
      }
		}

		// Join Player and Enemy Text
		battleTextStart = '<br>' + battleTextPlayerFinal + '<br><br>' + battleTextEnemyFinal + '<br><br>'

		// Beautify Rewards
		if (battleTextRewards != '') {
			if (battleTextContinueButton != '' || battleText.search('experience due to EXP. Lock') == -1) {
				battleRewardEXP = battleTextRewards.split('gained')[1].split('experience')[0].trim()
				battleRewardCash = battleTextRewards.split('$')[1].split('.')[0].trim()
				battleRewardClanCredits = Math.round(parseInt(battleRewardEXP.replace(/,/g, '')) / 20.194682)
			} else {
				battleRewardEXP = battleTextRewards.split('received')[1].split('experience')[0].trim()
				battleRewardCash = battleTextRewards.split('$')[1].split('!')[0].trim()
				battleRewardClanCredits = Math.round(battleRewardEXP / 20.194682)
			}
			if (battleRewardClanCredits >= 409026) {
				battleRewardClanCredits = 409026
				battleRewardClanCreditsFinal = numberWithCommas(battleRewardClanCredits) + " (Capped)"
			} else {
				battleRewardClanCreditsFinal = numberWithCommas(battleRewardClanCredits)
			}
			battleTextRewardsFinal = ' and received ' + numberWithCommas(battleRewardEXP) + ' EXP, $' + numberWithCommas(battleRewardCash) + ', and ' + battleRewardClanCreditsFinal + ' Clan Credits!'
			// Append Enemy Defeated and Rewards
			if (battleTextEnemyDefeated != '') {
				battleTextEnd = battleTextEnemyDefeated.split('!')[0] + battleTextRewardsFinal
			} else if (battleTextEnemyFainted != '') {
				battleTextEnd = battleTextEnemyFainted.split('.')[0] + battleTextRewardsFinal
			}
		} else {
      battleTextEnd = ''
    }

		// Combine Battle Text
		battleTextFinal = battleTextStart + battleTextEnd

    // Append EXP Lock Warning
    if (battleText.search('experience due to EXP. Lock') != -1) {
      battleTextFinal = battleTextFinal + `<br><br><font color="red">No pokemon in your party gained any experience due to EXP. Lock.</font>`
		}
		// Append Continue Button to the End
		if (battleTextContinueButton != '') {
			battleTextFinal = battleTextFinal + `<br><br><button onclick="window.location.href = 'https://pokemoncreed.net/battle.php'" class="button" style="width: 11%!important;">Continue the Battle!</button>`
		}
    // Add Extra Space as long as There isn't any Already
    if (!battleTextFinal.endsWith('<br><br>')) {
      battleTextFinal = battleTextFinal + '<br><br>'
    }

		document.getElementsByClassName("bord")[0].innerHTML = battleTextFinal
	}
}