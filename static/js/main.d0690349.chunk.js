(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n(3),o=n(7),r=n(5),i=n(0),c=n.n(i),u=n(4),l=n.n(u),h=(n(13),[{question:"In which standard did Parth failed ?",answers:["2","4","8","10"],correct:"4",questionId:"099099"},{question:"How many cups of tea did Parth used to drink everyday?",answers:["3","2","6","10"],correct:"6",questionId:"183452"},{question:"What kind of songs does Parth vibe to?",answers:["English","Bhojpuri","Hindi","All of them"],correct:"Bhojpuri",questionId:"267908"},{question:"Which of these is Parth's real lob?",answers:["Rajni","Aparna","Memes","None"],correct:"Memes",questionId:"333247"},{question:"Parth's favourite WWE wrestler ?",answers:["John Cena","The Rock","Randy Orton","Hulk Hogan"],correct:"John Cena",questionId:"496293"},{question:"Which of the following is his favourite Meme page ?",answers:["vaivahik.memes","Adultgram","Error69","RVCJ"],correct:"RVCJ",questionId:"588909"},{question:"Parth's favoourite dream bike ?",answers:["Yamaha RX 100","Kawasaki Ninja 650","Harley Davidson","Suzuki Hayabusa"],correct:"Yamaha RX 100",questionId:"648452"},{question:"Which of these state would Parth prefer for his next holiday trip ?",answers:["Madhya Pradesh","Kerala","Orrisa","Rajasthan"],correct:"Rajasthan",questionId:"786649"}]),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return Promise.resolve(h.sort((function(){return.5-Math.random()})).slice(0,e))},m=n(6),p=function(e){var t=e.question,n=e.options,s=e.selected,a=Object(i.useState)(n),o=Object(m.a)(a,2),r=o[0],u=o[1];return c.a.createElement("div",{className:"questionBox"},c.a.createElement("div",{className:"question"},t),r.map((function(e,t){return c.a.createElement("button",{key:t,className:"answerBtn",onClick:function(){u([e]),s(e)}},e)})))},f=function(e){var t=e.score,n=e.playAgain;return c.a.createElement("div",{className:"score-board"},c.a.createElement("div",{className:"score"}," You scored ",t," out of 5!! Ab Chudo "),c.a.createElement("button",{className:"playBtn",onClick:n},"Firse Kheloge?"))},v=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={questionBank:[],score:0,responses:0},e.getQuestions=function(){d().then((function(t){e.setState({questionBank:t})}))},e.computeAnswer=function(t,n){t===n&&e.setState({score:e.state.score+1}),e.setState({responses:e.state.responses<5?e.state.responses+1:5})},e.playAgain=function(){e.getQuestions(),e.setState({score:0,responses:0})},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.getQuestions()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"title"},"Parth is lob"),this.state.questionBank.length>0&&this.state.responses<5&&this.state.questionBank.map((function(t){var n=t.question,s=t.answers,a=t.correct,o=t.questionId;return c.a.createElement(p,{question:n,options:s,key:o,selected:function(t){return e.computeAnswer(t,a)}})})),5===this.state.responses?c.a.createElement(f,{score:this.state.score,playAgain:this.playAgain}):null)}}]),n}(c.a.Component);l.a.render(c.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.d0690349.chunk.js.map