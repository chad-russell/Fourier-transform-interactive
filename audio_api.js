// Web Audio API
var context = new window.webkitAudioContext();
var source = null;
var audioBuffer = null;

// Create bandpass filter
var filter = context.createBiquadFilter();
filter.type = 2;  // Band-pass filter
filter.frequency.value = 440;
filter.Q.value = 1;
filter.gain.value = 0.7;

function setFrequency() {
    var slider = document.getElementById('frequencySlider')
    console.log(slider.value, slider.min, slider.max)
    filter.frequency.value = slider.value
}
function setQ() {
    var slider = document.getElementById('QSlider')
    filter.Q.value = slider.value
}

loadSoundFile('stairway_to_heaven.wav')

function stopSound() {
    if (source) {
        source.noteOff(0);
    }
}

function playSound() {
    // source is global so we can call .noteOff() later.
    source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.loop = true;

    // source.connect(context.destination);
    source.connect(filter)

    filter.connect(context.destination)
    source.noteOn(0); // Play immediately.
}

function initSound(arrayBuffer) {
    context.decodeAudioData(arrayBuffer, function(buffer) {
        // audioBuffer is global to reuse the decoded audio later.
        audioBuffer = buffer;
        var buttons = document.querySelectorAll('button');
        buttons[0].disabled = false;
        buttons[1].disabled = false;
    }, function(e) {
        console.log('Error decoding file', e);
    }); 
}

// User selects file, read it as an ArrayBuffer and pass to the API.
// var fileInput = document.querySelector('input[type="file"]');
// fileInput.addEventListener('change', function(e) {  
//     var reader = new FileReader();
//     reader.onload = function(e) {
//         initSound(this.result);
//     };
//     reader.readAsArrayBuffer(this.files[0]);
// }, false);

// Load file from a URL as an ArrayBuffer.
// Example: loading via xhr2: loadSoundFile('sounds/test.mp3');
function loadSoundFile(url) {
    console.log('loading', url)
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function(e) {
        initSound(this.response); // this.response is an ArrayBuffer.
    };
    xhr.send();
}