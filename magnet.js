/*!
magnet2list (https://github.com/hutstep/magnet2list)
Copyright 2016 hutstep (https://github.com/hutstep)
Licensed under the MIT License.
(https://github.com/hutstep/magnet2list/blob/gh-pages/LICENSE)
*/
var testLink = "magnet:?xt=urn:btih:4344503b7e797ebf31582327a5baae35b11bda01&" +
               "dn=ubuntu-16.04-desktop-amd64.iso&tr=http%3A%2F%2Ftorrent.ubu" +
               "ntu.com%3A6969%2Fannounce&tr=http%3A%2F%2Fipv6.torrent.ubuntu" +
               ".com%3A6969%2Fannounce",
    magnetInput = document.getElementById("magnet"),
    resultListField = document.getElementById("list"),
    testLinkField = document.getElementById("test");
testLinkField.value = testLink;
document.getElementById("submit").addEventListener("submit", convertMagnet);
document.getElementById("clear").addEventListener("click", clearInput);
testLinkField.addEventListener("click", function() { this.select(); });
resultListField.addEventListener("click", function() { this.select(); });

function convertMagnet(eve) {
  var magnet = magnetInput.value;
  eve.preventDefault();
  if (magnet.indexOf("magnet:?") !== 0) {
    resultListField.value = "Bad input. Please enter a valid magnet link.";
  } else {
    magnet = magnet.split("tr=");
    magnet.shift();
    magnet = magnet.map(val =>
      decodeURIComponent(val).replace("&", "") + "\n\n"
    );
    resultListField.value = magnet.join("");
  }
}

function clearInput(eve) {
  eve.preventDefault();
  magnetInput.value = "";
  resultListField.value = "";
}
