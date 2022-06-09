if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("[PWA Builder] active service worker found, no need to register");
  } else {
    navigator.serviceWorker
      .register("pwabuilder-sw.js", {
        scope: "./"
      })
      .then(function(reg) {
        console.log("[PWA Builder] Service worker has been registered for scope: " + reg.scope);
      });
  }
}


fields = document.getElementsByClassName("chars-typed");
  for (i = 0; i < fields.length; i++) { 
    numChars = Math.floor(Math.random() * 800) + 200;
    fields[i].innerText = numChars;
    console.log(i, fields[i].innerText);
  }

  function copyText(id) {
    var txt = document.getElementById(id);
    txt.select();
    txt.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
  }

  function countRandom (id, displayId) {
    var txt = document.getElementById(id);
    txt = txt.value;

    display = document.getElementById(displayId);
    charsLeft = numChars - txt.length;
    
    display.innerHTML = charsLeft;
  }

  // var req = new XMLHttpRequest();
  // req.onreadystatechange = function() {
  //     if (req.readyState === 4) {
  //         var response = req.responseText;
  //         var json = JSON.parse(response);
  //         var writingArea = document.getElementById("writing-area")
  //         writingArea.value = "**"+json+"**\n\n";
  //     }
  // };
  // req.open('GET', 'https://monterno.digital/questions/api.php');
  // req.send(null);