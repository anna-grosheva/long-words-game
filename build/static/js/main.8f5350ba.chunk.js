(this["webpackJsonplong-words.js"]=this["webpackJsonplong-words.js"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),s=a.n(l),c=a(1),o=a(2),i=a(4),d=a(3),h=(a(5),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classBlock,a=e.classScore,n=e.classButton,l=e.scores,s=e.notSelected,c=e.giveUp,o=e.checkWord,i=e.checkWordDisabled;return r.a.createElement("div",{className:"playerblock "+t+" "+s},r.a.createElement("p",{className:a},l),r.a.createElement("button",{className:"playerblock__button "+n,disabled:s,onClick:c},"Give up"),r.a.createElement("button",{className:"playerblock__button "+n,disabled:s||!i,onClick:o},"Check the word"))}}]),a}(n.Component)),u=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={manualIsVisible:!1},e.changeManualIsVisible=function(){!1===e.state.manualIsVisible?e.setState({manualIsVisible:!0}):e.setState({manualIsVisible:!1})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.manualIsVisible;return r.a.createElement("div",null,r.a.createElement("button",{className:"how-to-button",onClick:this.changeManualIsVisible},"How to play"),r.a.createElement("div",{className:e?"manual":"invisible"},r.a.createElement("div",{className:"manual__content"},r.a.createElement("ol",{className:"manual__text"},r.a.createElement("li",null,"Two players try to type an existing long English word putting letters one by one to the line. The first letter is randomly defined."),r.a.createElement("li",null,"At every step of the game players must know what word they have in mind."),r.a.createElement("li",null,"Each player can put only one letter at once in any place: before, after or between the written letters.",r.a.createElement("br",null),"It can be any letter of the planned word: let\u2019s say, if there\u2019s PR in the line and the player thinks about the word PRODUCTION, so it\u2019s not necessary to put O next, moreover, it\u2019s recommended to use any other letters of the word to make the game for your rival harder (PRU for example)."),r.a.createElement("li",null,"After putting a new letter, the player clicks \u201cSubmit\u201d to pass the game to another player."),r.a.createElement("li",null,"Players take turns and add letters. For example:",r.a.createElement("br",null),r.a.createElement("br",null),"Player1: H (in mind: HOT)",r.a.createElement("br",null),"Player2: U H (in mind: PUSH)",r.a.createElement("br",null),"Player1: U C H (in mind: PUNCH)",r.a.createElement("br",null),"Player2: L U C H (in mind: LUNCH)",r.a.createElement("br",null),"Player1: L U C H E (in mind: LUNCHEON)",r.a.createElement("br",null),"etc."),r.a.createElement("li",null,"The aim is to type the longest word you can recall in order to get more points."),r.a.createElement("li",null,"If at any point of the game one of the players (Player1) doesn\u2019t know any existing word with a written letter combination, he/she clicks \u201cGive up\u201d and another player (Player2) takes turn.",r.a.createElement("br",null),r.a.createElement("br",null),"After it Player2 has a chance to type fully the word he/she has in mind and check it in the dictionary (the button \u201cCheck the word\u201d):",r.a.createElement("br",null),r.a.createElement("br",null),"a) if the word exists (the green check mark appears), Player2 wins and gets as much points as letters in the checked word;",r.a.createElement("br",null),r.a.createElement("br",null),"b) if there\u2019s no such word in the dictionary (the red cross appears), Player1 wins instead and gets all points."),r.a.createElement("li",null,"If both players give up one by one, then it\u2019s a draw and none of them get points."),r.a.createElement("li",null,"Click \u201cNext Round\u201d to start a new round."),r.a.createElement("li",null,"The player who has more points starts the new round.")),r.a.createElement("button",{className:"manual__close",onClick:this.changeManualIsVisible},"\xd7"))))}}]),a}(n.Component),m=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={word:"",inputLength:1,ifWordExists:"",scoresRed:0,scoresGreen:0,whichIsActive:"red",giveUps:0,finalState:!1},e.changeInput=function(t){e.setState({word:t.target.value.replace(/[^A-Za-z]/,"")})},e.getRandomLetter=function(){var t="abcdefghijklmnopqrstuvwxyz";e.setState({word:t.charAt(Math.floor(Math.random()*t.length))})},e.changeWhichIsActive=function(){var t="red"===e.state.whichIsActive?"green":"red";e.setState({whichIsActive:t,inputLength:e.state.inputLength+1})},e.playerGivesUp=function(){e.changeWhichIsActive(),e.setState({giveUps:e.state.giveUps+1})},e.nextRoundHandler=function(){e.getRandomLetter();var t=e.state,a=t.scoresRed,n=t.scoresGreen;e.setState({giveUps:0,inputLength:1,finalState:!1,ifWordExists:""}),a>=n?e.setState({whichIsActive:"red"}):e.setState({whichIsActive:"green"})},e.newGameHandler=function(){e.getRandomLetter(),e.setState({scoresRed:0,scoresGreen:0,whichIsActive:"red",giveUps:0,inputLength:1,finalState:!1,ifWordExists:""})},e.checkWord=function(t){var a=e.state,n=a.whichIsActive,r=a.scoresRed,l=a.scoresGreen;fetch("https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20200930T073609Z.78822774b8132738.c148d7698da51b2165b444c78c2c8ffb9d84a4b8&lang=en-ru&text=".concat(t)).then((function(e){return e.json()})).then((function(a){var s={finalState:!0};a.def.length>0?(s.ifWordExists="yes","red"===n?s.scoresRed=r+t.length:s.scoresGreen=l+t.length):(s.ifWordExists="no","red"===n?s.scoresGreen=l+t.length:s.scoresRed=r+t.length),e.setState(s)})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getRandomLetter()}},{key:"render",value:function(){var e=this,t=this.state,a=t.scoresRed,n=t.scoresGreen,l=t.word,s=t.whichIsActive,c=t.giveUps,o=t.inputLength,i=t.ifWordExists,d=t.finalState;return r.a.createElement("div",{className:"app"},r.a.createElement(u,null),r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"header__heading"},"LONG WORDS"),r.a.createElement("p",{className:"header__slogan"},"Score points by putting letters one by one"),r.a.createElement("div",{className:"header__wordfield"},"yes"===i?r.a.createElement("p",{className:"header__correct"},"\u2713"):null,"no"===i?r.a.createElement("p",{className:"header__wrong"},"\u2717"):null,r.a.createElement("input",{className:"header__input",maxLength:0===c?o+1:"50",value:l,onChange:this.changeInput}),r.a.createElement("button",{className:"header__button",disabled:1===l.length||c>0,onClick:this.changeWhichIsActive},"Submit"))),r.a.createElement("div",{className:"blocks"},r.a.createElement(h,{classBlock:"red-block",classScore:"red-score",classButton:"red-buttons",scores:a,notSelected:"red"===s&&2!==c?null:"not-selected",giveUp:this.playerGivesUp,checkWord:function(){return e.checkWord(l)},checkWordDisabled:c>0?"not-selected":null}),r.a.createElement(h,{classBlock:"green-block",classScore:"green-score",classButton:"green-buttons",scores:n,notSelected:"green"===s&&2!==c?null:"not-selected",giveUp:this.playerGivesUp,checkWord:function(){return e.checkWord(l)},checkWordDisabled:c>0?"not-selected":null})),d?r.a.createElement("div",null,"red"===s&&"yes"===i||"green"===s&&"no"===i?r.a.createElement("p",{className:"final-message red-color"},"THE RED WON!"):r.a.createElement("p",{className:"final-message green-color"},"THE GREEN WON!")):null,2===c?r.a.createElement("p",{className:"final-message"},"IT'S A DRAW!"):null,2===c||d?r.a.createElement("div",{className:"final-buttons"},r.a.createElement("button",{className:"nextround-button",onClick:this.nextRoundHandler},"Next Round"),r.a.createElement("button",{className:"nextround-button",onClick:this.newGameHandler},"New Game")):null,r.a.createElement("p",{className:"yandex"},"Powered by ",r.a.createElement("a",{href:"https://tech.yandex.com/dictionary/",target:"_blank",rel:"noopener noreferrer",className:"yandex__link"},"Yandex.Dictionary")))}}]),a}(n.Component);s.a.render(r.a.createElement(m,null),document.getElementById("root"))},5:function(e,t,a){},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.8f5350ba.chunk.js.map