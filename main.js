var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = $('#textbox');
var instructions = $('instructions');

var Content = '';

recognition.continuous = true;

recognition.onresult = function(event) {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;
  HandleOnQuestionChange(transcript); 
};

recognition.onstart = function() { 
  instructions.text('Voice recognition is ON.');
}

recognition.onspeechend = function() {
  instructions.text('No activity.');
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.text('Try again.');  
  }
}

$('#start-btn').on('click', function(e) {
  if (Content.length) {
    Content += ' ';
  }
  recognition.start();
});

$('#stop-btn').on('click', function(e) {
    recognition.stop();
  });

function HandleOnQuestionChange(inputValue) {
    
    const reponseElement = document.querySelector(".reponse");
    if (inputValue.includes("comment tu t'appelles")) {
        if ('speechSynthesis' in window) {
            let  msg = new SpeechSynthesisUtterance();
            msg.text = "je m'appelle Ismael";
            window.speechSynthesis.speak(msg);
        } else {
        }
    }else if (inputValue.includes("est-ce que tu m'aimes")) {
        let  msg = new SpeechSynthesisUtterance();
        msg.text = "oui à la folie";
        window.speechSynthesis.speak(msg);
    }else if (inputValue.includes("comment s'appelle ton frère")) {
        let  msg = new SpeechSynthesisUtterance();
        msg.text = "il s'appelle elhadj";
        window.speechSynthesis.speak(msg);
    }
    else if (inputValue.includes("comment s'appelle ta maman")) {
        let  msg = new SpeechSynthesisUtterance();
        msg.text = "elle s'appelle Oumou";
        window.speechSynthesis.speak(msg);
    }
    else if (inputValue.includes("comment s'appelle ton papa")) {
        let  msg = new SpeechSynthesisUtterance();
        msg.text = "il s'appelle Amadou";
        window.speechSynthesis.speak(msg);
    }
    else {
        let  msg = new SpeechSynthesisUtterance();
        msg.text = "je ne vous comprends pas";
        window.speechSynthesis.speak(msg);
    }
}


