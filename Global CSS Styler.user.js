// ==UserScript==
// @name           Global CSS Styler
// @author		 		 SyndiShanX
// @include				 https://pokemoncreed.net/*
// @include				 http://pokemoncreed.net/*
// @exclude				 https://pokemoncreed.net/index*
// @exclude				 http://pokemoncreed.net/index*
// @exclude				 https://pokemoncreed.net/forums*
// @exclude				 http://pokemoncreed.net/forums*
// @run-at				 document-body
// @version				 1.15
// ==/UserScript==

var synCSS = `
:root {
	--bgImage: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASUExURQ8PDw4ODg0NDRAQEBERERISEnwSqd4AAATKSURBVEjHTVZRcuU2DCMt7z8p5wDW2wvQkfuv1N7/znTvf5YClN+mmQnjsSkJBEEoIvpqXau7hJjcYSKniPhfQ19u8fJWkOO7Imz4oCXwYtWuUiTC/TBx51oX5OOpDHxBuHQNG036sqkJ1iPDFm+6qUjHJiIlVPr22bzgo5sc3KNXb3bx642w3Vj4Mfzl26XuviKn2QBgW5mDRFsHnr5zLBQ5QVzHx8CpLK0jSDdpQIhSbMGRhjzdWDCqvmUNuawAawPgMNOK11iwK5aUo4uhLpStFwCCIkcVOE7kaMA18GodKO0MbHF+IeckmPMC6k0COYHPdg41vZVka22OnOqdYQOeuhHmpjwruvj6SayKglhsRReSYhnWcaKDaWAGAg9UYhcoRDYqBrvWC4HkD0hzVu1onHvBE/ISwwXAcjPtAgQbwCoXoJaDOT/PA4svAAPPivKYE1lPA+DQxrNQeQgAoBVqHUW8Ysf+Yjy1dBdUdoJAOfUjpOsH5WAIaDuBKNtPilExekXsGqlIaoI8P4FtZq+VsBCa1/N481wWdl5+swMAq/dIilFLp24icxB2yjOPQQE4eE1lMxTFdwOzlUK/JKUcPDGaHTWakH1AjxcwBw9CUVIKRgChkuKGiskzd8pzgIHxTj17bUnxT4ZJ5Ff2h+xCu2plqLdN+IU8A2TjZOInBXyhQkgz/MWBs5hBeVYSCCmj6yfbXJJiTYrBjbLtfcpBCmiNTnYpy//xjE0wBeM9U1AxlP2JAJ4R8NtSLDdy1E/ud8bD7k6BueQAShJItyAJZbGHYkJpUjvRdNbEI3HS0O47CGY1B6UTkIUdKJIMy1pQZEkB27vXb54tJZaYzOVfEpvsXvnUSDYWfbAcK1eIrtQD2a1g16sl2YVHEU4ahY6dmzuJhR3saHm1A8xYwNNIUefxZdnpIDA16hn5QlOEySBnSrlVSDmpQeeTmmxmH5QNqjb58dVq43z6qu9Aseg9a7qw60mI8eb52Sc1waYDSvjHJyleEkXJgSL2jmpnEAPFlRDBM9zCDou2i6VDRNo6dSH6TWyGF70EG6EcTlNiovde9Q/FtC7OWlK88gmAlmnDPneUlDIOB3MY9ZThALv+GEXMsAOKAwgHL/V8JLEtB7Pg3qjACSH4SjWcxIttkpDJrj8UAzQVs53DOVt/Q7aT4iWlDOwrcMikGJThiXoISe0+0O3grTYppikPlmHLvkx2iQfITnpbT4ODJdFSKT/K1GI/UNKOtcGJgNBtQ3FVpg1Lgf3PZvKKXbFYAiLmjVHpz98qhgnsf4aSNw3Mv7GZ8k3x3EdtJbsQl2Jg0PD9ILvBS/OxDFQ1eEcHnAIsYeryHgQ3W/K8lLzoEFCc/CZW3OJBinntJgtTfZjPcmJaftxf+e6AFNItWF4lxfaLI4WgMGbM4ilvdlPKLskXpRe0nvtR9iPgAlgVr2kUuFVXBLmXi+Mm0/vwh3XxRqSNpJegLp/T+BjFqm3umpa0Mpz3knbNnEkxerHhetbyD3MyTGXTB5JiKK86iYUdIfQZnP8gYZ83HlzSuJJ1G3ST/Idi7Clv4NmyrqVSvaiqcOMzmVSKArwxTC+2zpsBF53Zza7fEGijXX/QtR6jSL39OijgmFLmO3e//gN4DKeB24D0vAAAAABJRU5ErkJggg==');
	--bgImageDark: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAMUExURQoKCgkJCQsLCwwMDGooQ4kAAAQpSURBVEjHXZaBdewqDEQFNCC8DWDcALH77+3dEbD++3NOlI3BMLoaxJqlWju/1Zq5Pc3NLjOr1+ChNway5ngiHAyk3HhQUk+WrTF+utWqd6tpfrM8GCHcqTQf1Xo6khvvM8NZlH/NOouY5ZasHyd7MFjdTq3R2dNvjT6E4+HFz+DZcUtmiTn634vmMNHL4NM7x1tiTpOu8zPYVal1gvWpNfJhS9RYOpQwWT9Wmt2e0VoR3JxRFwnm8ko+uzl5kXa6pZUBsmA7Qza6Bo/KILWrscT1x5xLYq5bukwkG8MOWE9PEmzlozmzAIf0HJJ5JO3VupFtaCUhJasqBGIbUCqjQhrNKKiNTPxGluZUCkDGWULiB2g1Kk3hVFDx8dBwI9geTZPM4Bqf8qk5x3Xy8o0wOCfS05wWWhWCM6V2RCOAUiTvKrHYu7l2zb0amV0AtCt9Gnb4yA4uzjmEJJVfiMmYWkl7auHIzXkFlVm1TpJFEL5zc85ReaBSAcSmZ2zEQbd958iesQ0JsHEJZytkPFFd/pPRbwsrN+3YKrmQoegjvUlz00YkZTlzBAgbcV7BYx80KD7h5434eEH+RX1EF+8mzzp2i26cvXky+QkD32SINRnSgfM2Q+wVALEyVb9U5hyIUyAmJJW9TztYBmvrovs/zizCKRj7TMnFOnGTc734rWGWhzmpXlrvapuuRRuZZQiA6haCICkT8Sp5l5qunLQlO43UxSOyOWUdIfaTJEXYSibJHHR913Fz9rBYaPL6utjvFzYvfZSO57tZKvLDS9cDdtZWkhONIg1tY1Vg40hJzwkZb/Q0IeraPvKyN/CHdGkyzJlWjuax0KwgNn3INmTNWl/EJe0gs6Rn5nSz6iWJ7YfzPNhdRUdKq58zEPtCnAVbIlKZwVyI627SZKOUzKNDtGjr8sWPgXcAQScdj7OFpi/dH8QWiIs+yYOzDde5os1rpIocRz1sOOrbKNoOWBEhOnjh53OCjYOZuTf4N2OEWuSGS3pZ5j9060KMaDnmuLh+OFu/iMPKBR02EbMqn4KuhXeXdD91q03Easpj3gW+6IaezFmjt/VocLQktVQRkU2/ViarCHTtIxrlbMOW69auK7bwsjVMHDeG+vMPYv8eSt00av5ax17Ec53kRXQxV0qyt81Cx9FaLYOshu7oRpWyesm8B4v8E5xzXHQEktO1mOpYPSKuB/u6j/OZL52o5y+enb9WBrHv5pfWbWebblhZHRU1sl5T63mWszdi1ZPHahTcqoXAMrfUmv9YR3fDWL2EvOo8jatRlL1qtKSicD2Lmf24mE3zvmTmbXcE50Cc1RMElnZE6DPUdZ9uPULMrXoMdZP4QjGmRvQc+2AmfYUCcQ0Xk96UW0udHUmQum4GLjr3R2qe3ak/0bWWleNrxCkDt2nl+YWi3v8AS2CCuum8rAsAAAAASUVORK5CYII=')
}
html {
	zoom: 90%!important;
}
button {
	background-color: rgb(14, 14, 14) !important;
	color: white !important;
}
input.button {
	background-color: rgb(14, 14, 14) !important;
	color: white !important;
}
input.longbutton {
	background-color: rgb(14, 14, 14) !important;
	color: white !important;
}
textarea {
	background-color: #1a1a1a;
	border: 1px solid #000000;
	color: white;
}
input.text {
	background-color: #1a1a1a;
	border: 1px solid #000000;
	color: white;
}
input {
	background-color: #1a1a1a;
	border: 1px solid #000000;
	color: white;
}
.button {
	background-color: rgb(14, 14, 14) !important;
	color: white !important;
	border: 1px solid #000000;
}
.button:hover {
	color: #35AFEA;
}
.longbutton {
	color: white !important;
	font-size: 14px;
}
.longbutton:hover {
	color: #35AFEA;
	font-size: 14px;	
}	
select {
	background-color: #1a1a1a;
	border: 1px solid #000000;
	color: white;
}
a,a:visited {
	color: #35AFEA;
}
a:hover {
	color: #00FFFF;
}
::-webkit-scrollbar {
	border: none!important;
	width: 8px!important;
}
::-webkit-scrollbar-track {
	background: 0 0!important;
	border: none!important;
}
::-webkit-scrollbar-track-piece {
	background: 0 0!important;
	border: none!important;
}
::-webkit-scrollbar-thumb {
	background: rgba(55, 55, 55, 0.5)!important;
	border-radius: 20px!important;
	border: none!important;
}
::-webkit-scrollbar-thumb:hover {
	background: rgba(75, 75, 75, 1)!important;
}
div.menu1,div.menu2,div.menu3,div.menu4,div.menu5,div.menu6,div.menu7,div.menu8,div.menu9 {
	position: absolute;
	float: left;
	text-align: center;
	text-decoration: none;
	top: 4px;
	width: 128px;
	max-width: 128px;
	border-bottom: 1px solid #222222;
}
div.menu1 {
	left: 200px;
}
div.menu2 {
	left: 330px;
}
div.menu3 {
	left: 460px;
}
div.menu4 {
	left: 590px;
}
div.menu5 {
	left: 720px;
}
div.menu6 {
	left: 850px;
}
div.menu7 {
	left: 980px;
}
div.menu8 {
	left: 1110px;
}
div.menu9 {
	left: 1240px;
}
div.rightmenu {
	right: 4px;
}
div.menu1 img,div.menu6 img,div.menu2 img,div.menu7 img,div.menu3 img,div.menu8 img,div.menu4 img,div.menu9 img,div.menu5 img {
	border: 0;
}
div.menu1 ul,div.menu6 ul,div.menu2 ul,div.menu3 ul,div.menu4 ul,div.menu5 ul,div.menu7 ul,div.menu9 ul {
	list-style-type: none;
	margin: 0px;
	padding: 0px;
	display: block;
	text-align: left;
	overflow:hidden;overflow-y:scroll;
	height:175px;
}
div.menu8 ul {
	list-style-type: none;
	margin: 0px;
	padding: 0px;
	display: block;
	text-align: left;
}
div.menu1 ul li.faceb a,div.menu6 ul li.faceb a,div.menu2 ul li.faceb a,div.menu7 ul li.faceb a,div.menu3 ul li.faceb a,div.menu8 ul li.faceb a,div.menu4 ul li.faceb a,div.menu9 ul li.faceb a,div.menu5 ul li.faceb a {
	color: white;
	background-image: none;
	height: 120px;
	max-height: 121px;
	line-height: 120px;
}
div.menu1 ul li.promo a,div.menu6 ul li.promo a,div.menu2 ul li.promo a,div.menu7 ul li.promo a,div.menu3 ul li.promo a,div.menu8 ul li.promo a,div.menu4 ul li.promo a,div.menu9 ul li.promo a,div.menu5 ul li.promo a {
	background-image: none;
	height: 120px;
	max-height: 121px;
	line-height: 120px;
}
div.menu1 ul li.promo a:hover,div.menu6 ul li.promo a:hover,div.menu2 ul li.promo a:hover,div.menu7 ul li.promo a:hover,div.menu3 ul li.promo a:hover,div.menu8 ul li.promo a:hover,div.menu4 ul li.promo a:hover,div.menu9 ul li.promo a:hover,div.menu5 ul li.promo a:hover {
	filter: alpha(opacity=75);
	-moz-opacity: 0.75;
	-khtml-opacity: 0.75;
	opacity: 0.75;
}
div.menu1 ul li.header,div.menu6 ul li.header,div.menu2 ul li.header,div.menu7 ul li.header,div.menu3 ul li.header,div.menu8 ul li.header,div.menu4 ul li.header,div.menu9 ul li.header,div.menu5 ul li.header {
  line-height: 24px!important;
	height: 29px;
	color: white;
	background-color: black;
	font: 15px 'Trebuchet MS',Tahoma,Arial,Helvetica,Sans-serif;
	padding: 6px 0 0 10px;
	margin: 0;
	border-bottom: 1px solid #222222;
	background-image: url('styles/4/col1_head.jpg');
}
div.menu1 ul li a:hover,div.menu6 ul li a:hover,div.menu2 ul li a:hover,div.menu7 ul li a:hover,div.menu3 ul li a:hover,div.menu8 ul li a:hover,div.menu4 ul li a:hover,div.menu9 ul li a:hover,div.menu5 ul li a:hover {
	-moz-box-shadow: 0 0 5px rgba(0,0,0,0.5);
	-webkit-box-shadow: 0 0 5px rgba(0,0,0,0.5);
	box-shadow: 0 0 5px rgba(0,0,0,0.5);
}
div.menu1 ul li a,div.menu6 ul li a,div.menu2 ul li a,div.menu7 ul li a,div.menu3 ul li a,div.menu8 ul li a,div.menu4 ul li a,div.menu9 ul li a,div.menu5 ul li a {
	background: #CD0000;
	background: rgb(0,0,0);
	background: rgba(0,0,0,0.6);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000,endColorstr=#99000000);
	-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";
	border: 1px solid #222222;
	border-top: 0px;
	height: 14px;
	padding: 4px;
	display: block;
	text-decoration: none;
}
body, div#TB_window {
	color: #fff !important;
	padding: 0 !important;
	margin: 0 !important;
	font: 12px Tahoma,Arial,Hevetica,Sans-serif !important;
	background-color:	#0d0d0d !important;
	background-image: var(--bgImage)!important;
	background-position: left top !important;
	background-repeat: repeat !important;
	background-size: auto !important;
}
div#TB_title {
	color: #fff !important;
	padding: 0 !important;
	margin: 0 !important;
	font: 12px Tahoma,Arial,Hevetica,Sans-serif !important;
	background-color:	#0d0d0d !important;
	background-image: var(--bgImageDark)!important;
	background-position: left top !important;
	background-repeat: repeat !important;
	background-size: auto !important;
}
div.contentcontent, table.battlefast, table.battlefast tbody tr td, table.battlefast tbody tr th, li.promo center a, div.footer, td.contentcontent, table.ranks tbody tr td, table.ranks tbody tr th {
	background-color: rgba(0, 0, 0, 0.2) !important;
}
div.menu1 ul li a, div.menu2 ul li a, div.menu3 ul li a, div.menu4 ul li a, div.menu5 ul li a, div.menu6 ul li a, div.menu7 ul li a, div.menu8 ul li a, div.menu9 ul li a, div.synleftmenu div table tbody tr td, div.rightmenu table tbody tr td, table.w100, div.sh-img-select-container, div#TB_title {
	background-color: rgba(0, 0, 0, 0.35) !important;
}
input, input.text, select, textarea, div.sh-img-select-theme-box.sh-img-select-light {
	background-color: rgba(0, 0, 0, 0.45) !important;
	border: 1px solid #666 !important;
}
div.contentcontent center form table tbody tr th, div.contentcontent center form table tbody tr td {
	background-color: rgba(0, 0, 0, 0) !important;
	border: 1px solid rgba(0, 0, 0, 0)!important;
}
div.sh-scrollbar-slider {
	background: #666 !important;
}
div.sh-scrollbar-track {
	background: #2f2f2f !important;
	border: 1px solid #666 !important;
}
input.button, input.longbutton, button.longbutton, tr#ssd1 td, td.contrast {
	border: 1px solid #000 !important;
}
tr.moves, tr.moves2 {
	background: 0 0 !important;
}
`

var head = document.getElementsByTagName('head')[0];
var stylesheet = document.createElement("style");
stylesheet.type = 'text/css'
stylesheet.innerText = synCSS
stylesheet.className = 'synCSS'
head.appendChild(stylesheet);
