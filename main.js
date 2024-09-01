
function speak() {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance("Hello! I am Wall-E! I love plants! I am supposed to clean waste covered Earth! Kindly help me with that! Please plant more trees! Bye Bye!");
  
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0]; // Choose a specific voice
  
    // Speak the text
    speechSynthesis.speak(utterance);
  }