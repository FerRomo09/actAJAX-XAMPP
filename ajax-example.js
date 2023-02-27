function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "ajax.txt");
    xhttp.send();
}

function loadHTML() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "new.html");
  xhttp.send();
}

function loadReturn() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "ajax-example.html");
  xhttp.send();
}



function imgLoad(url) {
  'use strict';
  return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.responseType = 'blob';
      request.onload = function () {
          if (request.status === 200) {
              resolve(request.response);
          } else {
              reject(new Error('Image didn\'t load successfully; error code:' + request.statusText));
          }
      };
      request.onerror = function () {
          reject(new Error('There was a network error.'));
      };
      request.send();
  });
}

function loadImage() {
  'use strict';
  var body = document.querySelector('body'),
      myImage = new Image();
  myImage.crossOrigin = ""; 
  imgLoad('hongo.png').then(function (response) {
      var imageURL = window.URL.createObjectURL(response);
      myImage.src = imageURL;
      body.appendChild(myImage);
  }, function (Error) {
      console.log(Error);
  });
}