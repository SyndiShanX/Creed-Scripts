// ==UserScript==
// @name           SyndiShanX's Auto-Party Beautifier
// @author         SyndiShanX
// @include        https://pokemoncreed.net/*
// @include        http://pokemoncreed.net/*
// @exclude        https://pokemoncreed.net/login*
// @exclude        http://pokemoncreed.net/login*
// @exclude        https://pokemoncreed.net/index*
// @exclude        http://pokemoncreed.net/index*
// @exclude        https://pokemoncreed.net/forums*
// @exclude        http://pokemoncreed.net/forums*
// @version        1.15
// @run-at         document-idle
// ==/UserScript==

var i
var coloringGradient
var levelGradient = []

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function typeColoringGradient(x) {
  if (x.substring(0,5) == 'Shiny') {
    coloringGradient = 'Shiny'
  } else if (x.substring(0,6) == 'Cursed') {
    coloringGradient = 'Cursed'
  } else if (x.substring(0,6) == 'Golden') {
    coloringGradient = 'Golden'
  } else if (x.substring(0,6) == 'Shadow') {
    coloringGradient = 'Shadow'
  } else if (x.substring(0,7) == 'Ancient') {
    coloringGradient = 'Ancient'
  } else if (x.substring(0,7) == 'Glitter') {
    coloringGradient = 'Glitter'
  } else if (x.substring(0,7) == 'Rainbow') {
    coloringGradient = 'Rainbow'
  } else if (x.substring(0,8) == 'Luminous') {
    coloringGradient = 'Luminous'
  } else {
    coloringGradient = 'None'
  }
}
function colorGradient(x) {
  if (coloringGradient == 'Shiny') {
    pokeGradientLength = x.length
    //<span style="color: rgb(148, 183, 255);">Start</span>
    //<span style="color: rgb(99, 214, 168);">End</span>
    divValr = parseInt(49/pokeGradientLength)
    divValg = parseInt(31/pokeGradientLength)
    divValb = parseInt(87/pokeGradientLength)
    rbase = 148
    gbase = 183
    bbase = 255
    r = rbase
    g = gbase
    b = bbase
    for (i = 0; i < pokeGradientLength; i++) {
      r = r - divValr
      g = g + divValg
      b = b - divValb
      levelGradient.push('<span style="color: rgb(' + r + ', ' + g + ', ' + b + ');">' + x[i] + '</span>');
    }
  } else if (coloringGradient == 'Cursed') {
    pokeGradientLength = x.length
    //<span style="color: rgb(51, 0, 0);">Start</span>
    //<span style="color: rgb(190, 0, 0);">End</span>
    divValr = parseInt(139/pokeGradientLength)
    rbase = 51
    r = rbase
    for (i = 0; i < pokeGradientLength; i++) {
      r = r + divValr
      levelGradient.push('<span style="color: rgb(' + r + ', 0, 0);">' + x[i] + '</span>');
    }
  } else if (coloringGradient == 'Golden') {
    pokeGradientLength = x.length
    //<span style="color: rgb(97, 76, 0);">Start</span>
    //<span style="color: rgb(222, 180, 0);">End</span>
    divValr = parseInt(125/pokeGradientLength)
    divValg = parseInt(104/pokeGradientLength)
    rbase = 97
    gbase = 76
    r = rbase
    g = gbase
    for (i = 0; i < pokeGradientLength; i++) {
      r = r + divValr
      g = g + divValg
      levelGradient.push('<span style="color: rgb(' + r + ', ' + g + ', 0);">' + x[i] + '</span>');
    }
  } else if (coloringGradient == 'Shadow') {
    pokeGradientLength = x.length
    //<span style="color: rgb(42, 12, 50);">Start</span>
    //<span style="color: rgb(171, 125, 221);">End</span>
    divValr = parseInt(129/pokeGradientLength)
    divValg = parseInt(113/pokeGradientLength)
    divValb = parseInt(171/pokeGradientLength)
    rbase = 42
    gbase = 12
    bbase = 50
    r = rbase
    g = gbase
    b = bbase
    for (i = 0; i < pokeGradientLength; i++) {
      r = r + divValr
      g = g + divValg
      b = b + divValb
      levelGradient.push('<span style="color: rgb(' + r + ', ' + g + ', ' + b + ');">' + x[i] + '</span>');
    }
  } else if (coloringGradient == 'Ancient') {
    pokeGradientLength = x.length
    //<span style="color: rgb(110, 110, 110);">Start</span>
    //<span style="color: rgb(221, 212, 80);">End</span>
    divValr = parseInt(111/pokeGradientLength)
    divValg = parseInt(102/pokeGradientLength)
    divValb = parseInt(30/pokeGradientLength)
    rbase = 111
    gbase = 102
    bbase = 30
    r = rbase
    g = gbase
    b = bbase
    for (i = 0; i < pokeGradientLength; i++) {
      r = r + divValr
      g = g + divValg
      b = b - divValb
      levelGradient.push('<span style="color: rgb(' + r + ', ' + g + ', ' + b + ');">' + x[i] + '</span>');
    }
  } else if (coloringGradient == 'Glitter') {
    pokeGradientLength = x.length
    //<span style="color: rgb(60, 198, 255);">Start</span>
    //<span style="color: rgb(247, 88, 255);">End</span>
    divValr = parseInt(187/pokeGradientLength)
    divValg = parseInt(110/pokeGradientLength)
    rbase = 60
    gbase = 198
    r = rbase
    g = gbase
    for (i = 0; i < pokeGradientLength; i++) {
      r = r + divValr
      g = g - divValg
      levelGradient.push('<span style="color: rgb(' + r + ', ' + g + ', 255);">' + x[i] + '</span>');
    }
  } else if (coloringGradient == 'Rainbow') {
    pokeGradientLength = x.length
    //<span style="color: rgb(255, 0, 0);">Start</span>
    //<span style="color: rgb(10, 245, 0);">End</span>
    divValr = parseInt(245/pokeGradientLength)
    divValg = parseInt(245/pokeGradientLength)
    rbase = 255
    gbase = 0
    r = rbase
    g = gbase
    for (i = 0; i < pokeGradientLength; i++) {
      r = r - divValr
      g = g + divValg
      levelGradient.push('<span style="color: rgb(' + r + ', ' + g + ', 0);">' + x[i] + '</span>');
    }
  } else if (coloringGradient == 'Luminous') {
    pokeGradientLength = x.length
    //<span style="color: rgb(8, 78, 194);">Start</span>
    //<span style="color: rgb(125, 191, 251);">End</span>
    divValr = parseInt(117/pokeGradientLength)
    divValg = parseInt(113/pokeGradientLength)
    divValb = parseInt(57/pokeGradientLength)
    rbase = 8
    gbase = 78
    bbase = 194
    r = rbase
    g = gbase
    b = bbase
    for (i = 0; i < pokeGradientLength; i++) {
      r = r + divValr
      g = g + divValg
      b = b + divValb
      levelGradient.push('<span style="color: rgb(' + r + ', ' + g + ', ' + b + ');">' + x[i] + '</span>');
    }
  }
  levelGradient = levelGradient.join('')
}
if (window.location.href.split('=')[0] == 'https://pokemoncreed.net/pokemon.php?id'){
  document.getElementsByTagName('head')[0].getElementsByTagName('link')[0].href = 'https://pokemoncreed.net/s4.css?v=4'
} else {
  //Global Party Level Beautifier
  pokeBar = document.getElementsByClassName("synleftmenu")[0].children[0].children[0].children[0]
  pokeBar_2 = document.getElementsByClassName("rightmenu")[0].children[1].children[0]
  
  pokeBar1 = pokeBar.children[0]
  pokeBar2 = pokeBar.children[1]
  pokeBar3 = pokeBar.children[2]
  pokeBar4 = pokeBar.children[3]
  pokeBar5 = pokeBar_2.children[0]
  pokeBar6 = pokeBar_2.children[1]
  
  if (pokeBar1.children[0].children[0].tagName != 'IMG') {
  	pokeBarLevel1 = pokeBar1.children[0].children[0].children[6].children[0].innerText
  	pokeBarLevel1_1 = pokeBarLevel1.split('Level: ')[1]
  	pokeBarLevel1_2 = 'Level: ' + numberWithCommas(pokeBarLevel1_1)
    pokeName = pokeBar1.children[0].children[0].children[2].innerText
    typeColoringGradient(pokeName)
    colorGradient(pokeBarLevel1_2)
    if (coloringGradient == 'Glitter') {
      pokeBar1.children[0].children[0].children[6].children[0].outerHTML = '<span class="fingradient" style="color:#ffffff;background: url(img/glitter.gif)">' + levelGradient + '</span>'
    } else if (coloringGradient == 'None') {
      pokeBar1.children[0].children[0].children[6].children[0].innerText = pokeBarLevel1_2
    } else {
      pokeBar1.children[0].children[0].children[6].children[0].outerHTML = '<span class="fingradient">' + levelGradient + '</span>'
    }
    levelGradient = []
  }
  if (pokeBar2.children[0].children[0].tagName != 'IMG') {
  	pokeBarLevel2 = pokeBar2.children[0].children[0].children[6].children[0].innerText
  	pokeBarLevel2_1 = pokeBarLevel2.split('Level: ')[1]
  	pokeBarLevel2_2 = 'Level: ' + numberWithCommas(pokeBarLevel2_1)
    pokeName = pokeBar2.children[0].children[0].children[2].innerText
    typeColoringGradient(pokeName)
    colorGradient(pokeBarLevel2_2)
    if (coloringGradient == 'Glitter'){
      pokeBar2.children[0].children[0].children[6].children[0].outerHTML = '<span class="fingradient" style="color:#ffffff;background: url(img/glitter.gif)">' + levelGradient + '</span>'
    } else if (coloringGradient == 'None') {
      pokeBar2.children[0].children[0].children[6].children[0].innerText = pokeBarLevel2_2
    } else {
      pokeBar2.children[0].children[0].children[6].children[0].outerHTML = '<span class="fingradient">' + levelGradient + '</span>'
    }
    levelGradient = []
  }
  if (pokeBar3.children[0].children[0].tagName != 'IMG') {
  	pokeBarLevel3 = pokeBar3.children[0].children[0].children[6].children[0].innerText
  	pokeBarLevel3_1 = pokeBarLevel3.split('Level: ')[1]
  	pokeBarLevel3_2 = 'Level: ' + numberWithCommas(pokeBarLevel3_1)
    pokeName = pokeBar3.children[0].children[0].children[2].innerText
    typeColoringGradient(pokeName)
    colorGradient(pokeBarLevel3_2)
    if (coloringGradient == 'Glitter'){
      pokeBar3.children[0].children[0].children[6].children[0].outerHTML = '<span class="fingradient" style="color:#ffffff;background: url(img/glitter.gif)">' + levelGradient + '</span>'
    } else if (coloringGradient == 'None') {
      pokeBar3.children[0].children[0].children[6].children[0].innerText = pokeBarLevel3_2
    } else {
      pokeBar3.children[0].children[0].children[6].children[0].outerHTML = '<span class="fingradient">' + levelGradient + '</span>'
    }
    levelGradient = []
  }
  if (pokeBar4.children[0].children[0].tagName != 'IMG') {
  	pokeBarLevel4 = pokeBar4.children[0].children[0].children[6].children[0].innerText
  	pokeBarLevel4_1 = pokeBarLevel4.split('Level: ')[1]
  	pokeBarLevel4_2 = 'Level: ' + numberWithCommas(pokeBarLevel4_1)
    pokeName = pokeBar4.children[0].children[0].children[2].innerText
    typeColoringGradient(pokeName)
    colorGradient(pokeBarLevel4_2)
    if (coloringGradient == 'Glitter'){
      pokeBar4.children[0].children[0].children[6].children[0].outerHTML = '<span class="fingradient" style="color:#ffffff;background: url(img/glitter.gif)">' + levelGradient + '</span>'
    } else if (coloringGradient == 'None') {
      pokeBar4.children[0].children[0].children[6].children[0].innerText = pokeBarLevel4_2
    } else {
      pokeBar4.children[0].children[0].children[6].children[0].outerHTML = '<span class="fingradient">' + levelGradient + '</span>'
    }
    levelGradient = []
  }
  if (pokeBar5.children[0].children[0].tagName != 'IMG') {
  	pokeBarLevel5 = pokeBar5.children[0].children[0].children[6].children[0].innerText
  	pokeBarLevel5_1 = pokeBarLevel5.split('Level: ')[1]
  	pokeBarLevel5_2 = 'Level: ' + numberWithCommas(pokeBarLevel5_1)
    pokeName = pokeBar5.children[0].children[0].children[2].innerText
    typeColoringGradient(pokeName)
    colorGradient(pokeBarLevel5_2)
    if (coloringGradient == 'Glitter'){
      pokeBar5.children[0].children[0].children[6].children[0].outerHTML = '<span class="fingradient" style="color:#ffffff;background: url(img/glitter.gif)">' + levelGradient + '</span>'
    } else if (coloringGradient == 'None') {
      pokeBar5.children[0].children[0].children[6].children[0].innerText = pokeBarLevel5_2
    } else {
      pokeBar5.children[0].children[0].children[6].children[0].outerHTML = '<span class="fingradient">' + levelGradient + '</span>'
    }
    levelGradient = []
  }
  if (pokeBar6.children[0].children[0].tagName != 'IMG') {
  	pokeBarLevel6 = pokeBar6.children[0].children[0].children[6].children[0].innerText
  	pokeBarLevel6_1 = pokeBarLevel6.split('Level: ')[1]
  	pokeBarLevel6_2 = 'Level: ' + numberWithCommas(pokeBarLevel6_1)
    pokeName = pokeBar6.children[0].children[0].children[2].innerText
    typeColoringGradient(pokeName)
    colorGradient(pokeBarLevel6_2)
    if (coloringGradient == 'Glitter'){
      pokeBar6.children[0].children[0].children[6].children[0].outerHTML = '<span class="fingradient" style="color:#ffffff;background: url(img/glitter.gif)">' + levelGradient + '</span>'
    } else if (coloringGradient == 'None') {
      pokeBar6.children[0].children[0].children[6].children[0].innerText = pokeBarLevel6_2
    } else {
      pokeBar6.children[0].children[0].children[6].children[0].outerHTML = '<span class="fingradient">' + levelGradient + '</span>'
    }
  }
}
