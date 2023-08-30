(function () {

    var names = ["Elora", "John", "Jessica", "Jason", "Derulo", "Frank", "Ocean", "Paula", "Seth", "Jim", "Jose"];
    for (var i = 0; i < names.length; i++) {
     var firstLetter = names[i].charAt(0).toLowerCase();
     if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();