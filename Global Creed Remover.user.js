// ==UserScript==
// @name          Creed Global Remover
// @description   null
// @version       v1.0
// @author        SyndiShanX
// @include       https://pokemoncreed.net/*
// @include       http://pokemoncreed.net/*
// @exclude       https://pokemoncreed.net/login*
// @exclude       http://pokemoncreed.net/login*
// @exclude       https://pokemoncreed.net/index*
// @exclude       http://pokemoncreed.net/index*
// @exclude       https://pokemoncreed.net/forums*
// @exclude       http://pokemoncreed.net/forums*
// @run-at        document-end
// ==/UserScript==

if (document.getElementsByClassName("contentcontent")[0] != undefined) {
  if (document.getElementsByClassName("contentcontent")[0].children[1] != undefined) {
    if (document.getElementsByClassName("contentcontent")[0].children[1].innerText == "Please set a pin for security reasons!") {
      document.getElementsByClassName("title")[0].remove()
      document.getElementsByClassName("contentcontent")[0].remove()
    }
  }
}