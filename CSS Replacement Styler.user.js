// ==UserScript==
// @name			CSS Replacement Styler
// @author		SyndiShanX
// @include		https://pokemoncreed.net/login*
// @include		http://pokemoncreed.net/login*
// @include		https://pokemoncreed.net/index*
// @include		http://pokemoncreed.net/index*
// @include		https://pokemoncreed.net/forums*
// @include		http://pokemoncreed.net/forums*
// @include		https://pokemoncreed.net/clickme.php
// @include		http://pokemoncreed.net/clickme.php
// @run-at		document-body
// ==/UserScript==

var synCSS = `
input, input.text, select, textarea {
  background-color: #1a1a1a!important;
  border: 1px solid #000000!important;
  color: white!important;
}
input.text {
  width: 200px
}
.text {
  letter-spacing: .85px;
  font-size: 15px;
  font-family: century gothic, Arial, Helvetica, sans-serif;
  border: solid 3px #ddd;
  padding: 4px
}
.text:focus {
  border-color: #c1c1c1
}
.thumbnail {
  position: relative;
  z-index: 0
}
.thumbnail:hover {
  background-color: transparent;
  z-index: 50
}
body {
  color: #fff;
  padding: 0;
  margin: 0;
  font: 12px Tahoma, Arial, Hevetica, Sans-serif;
  background-color: #0d0d0d;
  background-image: url(styles/4/homebody.jpg);
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed
}
div.header {
  align: middle;
  position: static;
  height: 183px;
  max-height: 183px;
  background-color: transparent
}
div.userbar {
  align: right;
  font-size: 80%;
  border: 2px solid #000;
  background-color: transparent
}
div.leftmenu, div.rightmenu {
  position: absolute;
  float: left;
  text-align: center;
  text-decoration: none;
  top: 183px;
  width: 128px;
  max-width: 128px;
  border-bottom: 1px solid #222
}
div.leftmenu {
  left: 4px
}
div.rightmenu {
  right: 4px
}
div.leftmenu img, div.rightmenu img {
  border: 0
}
div.leftmenu ul, div.rightmenu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: block;
  text-align: left
}
div.leftmenu ul li.faceb a, div.rightmenu ul li.faceb a {
  color: #fff;
  background-image: none;
  height: 120px;
  max-height: 121px;
  line-height: 120px
}
div.leftmenu ul li.promo a, div.rightmenu ul li.promo a {
  background-image: none;
  height: 120px;
  max-height: 121px;
  line-height: 120px
}
div.leftmenu ul li.promo a:hover, div.rightmenu ul li.promo a:hover {
  filter: alpha(opacity=75);
  -moz-opacity: .75;
  -khtml-opacity: .75;
  opacity: .75
}
div.leftmenu ul li.header, div.rightmenu ul li.header {
  line-height: 29px;
  height: 29px;
  color: #fff;
  background-color: #000;
  font: 15px trebuchet ms, Tahoma, Arial, Helvetica, Sans-serif;
  padding: 6px 0 0 10px;
  margin: 0;
  border-bottom: 1px solid #222;
  background-image: url(styles/4/col1_head.jpg)
}
div.leftmenu ul li a:hover, div.rightmenu ul li a:hover {
  -moz-box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  -webkit-transform: rotate(11deg) -moz-transform:rotate(11deg) -o-transform:rotate(11deg) -ms-transform:rotate(11deg) transform:rotate(11deg)
}
div.leftmenu ul li a, div.rightmenu ul li a {
  background: #cd0000;
  background: #000;
  background: rgba(0, 0, 0, .6);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";
  border: 1px solid #222;
  border-top: 0;
  height: 14px;
  padding: 4px;
  display: block;
  text-decoration: none;
  height: 14px
}
div.title {
  position: static;
  background: url(styles/4/col2_head.jpg);
  height: 35px;
  color: #fff;
  font: 15px trebuchet ms, Tahoma, Arial, Helvetica, Sans-serif;
  padding: 0 0 0 10px;
  margin: 0;
  border: 1px solid #222;
  border-top: 0;
  line-height: 35px;
  background-image: url(styles/4/col2_head.jpg);
  background-position: left;
  background-repeat: repeat-x;
  margin-left: 140px;
  margin-right: 140px;
  text-align: center
}
div.contentcontent {
  color: #fff;
  background: #cd0000;
  background: #000;
  background: rgba(0, 0, 0, .6);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";
  padding: 3px;
  position: static;
  margin-left: 140px;
  margin-right: 140px
}
div.footer {
  position: static;
  color: #fff;
  background: #cd0000;
  background: #000;
  background: rgba(0, 0, 0, .6);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";
  margin-left: 140px;
  margin-right: 140px;
  border: 0;
  text-align: center;
  font-size: 8pt;
  padding: 3px;
  filter: alpha(opacity=85);
  -moz-opacity: .85;
  -khtml-opacity: .85;
  opacity: .85
}
* html div.contentcontent, * html div.footer {
  width: 100%
}
table.w100 {
  position: relative;
  width: 100%
}
table.w100 td.w50 {
  width: 50%;
  vertical-align: top
}
table.w100 td.w33 {
  width: 33%;
  vertical-align: top
}
table.w100 td.w33c {
  width: 33%;
  vertical-align: top;
  text-align: center
}
table.w100 td.alphablox {
  text-align: center
}
table.w100 td.alphablox a {
  text-decoration: none;
  color: #fff
}
table.w100 td.alphablox a:hover {
  text-decoration: underline;
  color: red;
  background-color: transparent
}
* html table td, * html table th {
  font-size: 75%;
  background-color: transparent
}
table td.u {
  border-bottom: 1px solid #000
}
table.battlefast {
  width: 100%;
  background-color: #000;
  border: 1px solid #222
}
table.battlefast th, table.battlefast td.bord {
  background-color: #000;
  border: 1px solid #222
}
table.ranks {
  width: 100%
}
table.ranks th, table.ranks td, table.ranks td.creed {
  border: 1px solid #000;
  text-align: center;
  background-color: #222;
  padding: 3px
}
table.ranks th {
  background-color: #000;
  border: 1px solid transparent
}
* html table td, * html table th {
  font-size: 75%;
  background-color: transparent
}
table td.center {
  text-align: center
}
.hiddenclass {
  position: absolute;
  display: inline;
  margin-left: -152px;
  margin-top: -1px;
  line-height: normal;
  width: 150px;
  border: 1px solid #000;
  z-index: 1;
  text-align: center;
  background-color: #000
}
.hiddenclass img {
  clear: both
}
.hiddenclass strong {
  font-size: 125%
}
.hiddenclassb {
  position: absolute;
  display: inline;
  margin-right: -292px;
  margin-top: -1px;
  line-height: normal;
  width: 150px;
  border: 1px solid #000;
  z-index: 1;
  text-align: center;
  background-color: #000
}
.hiddenclassb img {
  clear: both
}
.hiddenclassb strong {
  font-size: 125%
}
a, a:visited {
  color: #35AFEA;
  text-decoration: none
}
a:hover {
  color: #00FFFF
}
a img, a:visited img {
  border: 0
}
.button {
  cursor: pointer;
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: #464646;
  border-left-width: 2px;
  border-left-style: solid;
  border-left-color: #464646;
  border-right-width: 2px;
  border-right-style: solid;
  border-right-color: #232323;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #232323;
  width: 110px;
  background: url(img/button.gif) repeat-x left top;
  color: #cd0000;
  font-size: 14px
}
.button:hover {
  color: #f1d500
}
.longbutton {
  cursor: pointer;
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: #464646;
  border-left-width: 2px;
  border-left-style: solid;
  border-left-color: #464646;
  border-right-width: 2px;
  border-right-style: solid;
  border-right-color: #232323;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #232323;
  background: url(img/button.gif) repeat-x left top;
  color: #cd0000;
  font-size: 14px
}
.longbutton:hover {
  color: #f1d500
}
div#qTip {
  padding: 3px;
  border: 1px solid #000;
  border-right-width: 1px;
  border-bottom-width: 1px;
  display: none;
  background: #333;
  color: #fff;
  font: 700 9px Verdana, Arial, sans-serif;
  text-align: left;
  position: absolute;
  z-index: 1000
}
.slide_contentBox {
  border: 3px solid #34282c;
  height: 0;
  visibility: hidden;
  position: absolute;
  background-color: #000;
  overflow: hidden;
  padding: 2px;
  text-align: center;
  margin: auto
}
.slide_content {
  position: relative;
  font-family: Trebuchet MS, Lucida Sans Unicode, Arial, sans-serif;
  width: 100%;
  font-size: 10px
}
table.hovertable {
  font-family: verdana, arial, sans-serif;
  font-size: 11px;
  color: #bdbdbd
}
table.hovertable td {
  filter: alpha(opacity=50);
  -moz-opacity: .5;
  -khtml-opacity: .5;
  opacity: .5;
  background-color: #000;
  height: 181px;
  max-height: 181px;
  text-align: center;
  border-width: 1px;
  padding: 0;
  border-style: solid;
  border-color: #222
}
table.hovertable td:hover {
  filter: alpha(opacity=100);
  -moz-opacity: 1;
  -khtml-opacity: 1;
  opacity: 1
}
`

if (document.getElementsByTagName('link')[0].href == 'https://pokemoncreed.net/s1.css') {
  document.getElementsByTagName('link')[0].href = ""
} else if (document.getElementsByTagName('link')[0].href == 'http://pokemoncreed.net/s1.css') {
  document.getElementsByTagName('link')[0].href = ""
} if (document.getElementsByTagName('link')[0].href == 'https://pokemoncreed.net/s.css') {
  document.getElementsByTagName('link')[0].href = ""
} else if (document.getElementsByTagName('link')[0].href == 'http://pokemoncreed.net/s.css') {
  document.getElementsByTagName('link')[0].href = ""
}

var head = document.getElementsByTagName('head')[0];
var stylesheet = document.createElement("style");
stylesheet.type = 'text/css'
stylesheet.innerText = synCSS
stylesheet.className = 'synCSS'
head.appendChild(stylesheet);
