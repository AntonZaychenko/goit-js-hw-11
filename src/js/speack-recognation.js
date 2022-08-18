export {speackRecognation}

const inputEl = document.querySelector('input');
const btnStart = document.querySelector('.speack')

btnStart.addEventListener('click', onStartSpeack)

var recognizer = new webkitSpeechRecognition()

recognizer.interimResults = true;
recognizer.lang = 'en-En'

recognizer.onresult = function (e) {
    var result = e.results[e.resultIndex]
    if(result.isFinal) {
        inputEl.value = result[0].transcript 
    } 
}

function onStartSpeack() {
    recognizer.start()
}
