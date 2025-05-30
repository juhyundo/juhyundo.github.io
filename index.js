var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Avid learner and critical thinker!') //Add your own tagline
  .pauseFor(3000)
  .start()


var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: 'assets/IMG_5619.JPG', //change image for intro section if desired
        blendingMode: 'multiply',
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 8000
        }
    }
});

// Universal Modal Handler Function
function setupModal(modalId, buttonId, closeClass) {
  var modal = document.getElementById(modalId);
  var button = document.getElementById(buttonId);
  var closeButton = document.getElementsByClassName(closeClass)[0];

  // Open modal when button is clicked
  button.onclick = function () {
    modal.style.display = "block";
  };

  // Close modal when close button (x) is clicked
  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  // Close modal when clicking outside the modal content
  modal.onclick = function (event) {
    // Ensure the click is on the modal background, not inside its child content
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

// Set up modals
setupModal("modal1", "btn1", "closeModal1");
setupModal("modal2", "btn2", "closeModal2");
setupModal("modal3", "btn3", "closeModal3");
setupModal("modal4", "btn4", "closeModal4");
setupModal("modalHobby1", "hobbyBtn1", "closeModalHobby1");
setupModal("modalHobby2", "hobbyBtn2", "closeModalHobby2");
setupModal("modalHobby3", "hobbyBtn3", "closeModalHobby3");
setupModal("modalHobby4", "hobbyBtn4", "closeModalHobby4");
setupModal("modalHobby5", "hobbyBtn5", "closeModalHobby5");
setupModal("modalHobby6", "hobbyBtn6", "closeModalHobby6");

// //BUTTON 1
// var modal1 = document.getElementById("modal1");

// // Get the button that opens the modal
// var btnModal1 = document.getElementById("btn1");

// // Get the <span> element that closes the modal
// var spanModal1 = document.getElementsByClassName("closeModal1")[0];

// // When the user clicks on the button, open the modal
// btnModal1.onclick = function() {
//   modal1.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModal1.onclick = function() {
//   modal1.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal1) {
//     modal1.style.display = "none";
//   }
// }

// //BUTTON 2
// var modal2 = document.getElementById("modal2");

// // Get the button that opens the modal
// var btnModal2 = document.getElementById("btn2");

// // Get the <span> element that closes the modal
// var spanModal2 = document.getElementsByClassName("closeModal2")[0];

// // When the user clicks on the button, open the modal
// btnModal2.onclick = function() {
//   modal2.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModal2.onclick = function() {
//   modal2.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
// }

// //BUTTON 3 -- links to outside website
// var btn3 = document.getElementById("btn3");
// btn3.onclick = function() { 
//   window.open("https://www.nintendo.com", "_blank") //TODO add your link
// }

// //BUTTON 4
// var modal4 = document.getElementById("modal4");

// // Get the button that opens the modal
// var btnModal4 = document.getElementById("btn4");

// // Get the <span> element that closes the modal
// var spanModal4 = document.getElementsByClassName("closeModal4")[0];

// // When the user clicks on the button, open the modal
// btnModal4.onclick = function() {
//   modal4.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModal4.onclick = function() {
//   modal4.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal4 || !modal4.contains(event.target)) {
//     modal4.style.display = "none";
//   }
// }

// //BUTTON 5
// var modal5 = document.getElementById("modal5");

// // Get the button that opens the modal
// var btnModal5 = document.getElementById("btn5");

// // Get the <span> element that closes the modal
// var spanModal5 = document.getElementsByClassName("closeModal5")[0];

// // When the user clicks on the button, open the modal
// btnModal5.onclick = function() {
//   modal5.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModal5.onclick = function() {
//   modal5.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal5) {
//     modal5.style.display = "none";
//   }
// }

// //BUTTON 6
// var modal6 = document.getElementById("modal6");

// // Get the button that opens the modal
// var btnModal6 = document.getElementById("btn6");

// // Get the <span> element that closes the modal
// var spanModal6 = document.getElementsByClassName("closeModal6")[0];

// // When the user clicks on the button, open the modal
// btnModal6.onclick = function() {
//   modal6.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModal6.onclick = function() {
//   modal6.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal6) {
//     modal6.style.display = "none";
//   }
// }

// //BUTTON 7
// var modal7 = document.getElementById("modal7");

// // Get the button that opens the modal
// var btnModal7 = document.getElementById("btn7");

// // Get the <span> element that closes the modal
// var spanModal7 = document.getElementsByClassName("closeModal7")[0];

// // When the user clicks on the button, open the modal
// btnModal7.onclick = function() {
//   modal7.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModal7.onclick = function() {
//   modal7.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal7) {
//     modal7.style.display = "none";
//   }
// }

// //BUTTON 6 -- links to outside website
// // var btn6 = document.getElementById("btn6");
// // btn6.onclick = function() { 
// //   window.open("https://www.arduino.cc", "_blank") //TODO add your link
// // }

// //HOBBY MODALS

// //BUTTON HOBBY 1
// var modalHobby1 = document.getElementById("modalHobby1");

// // Get the button that opens the modal
// var btnHobby1 = document.getElementById("hobbyBtn1");

// // Get the <span> element that closes the modal
// var spanModalHobby1 = document.getElementsByClassName("closeModalHobby1")[0];

// // When the user clicks on the button, open the modal
// btnHobby1.onclick = function() {
//   modalHobby1.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModalHobby1.onclick = function() {
//   modalHobby1.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalHobby1) {
//     modalHobby1.style.display = "none";
//   }
// }

// //BUTTON HOBBY 2
// var modalHobby2 = document.getElementById("modalHobby2");

// // Get the button that opens the modal
// var btnHobby2 = document.getElementById("hobbyBtn2");

// // Get the <span> element that closes the modal
// var spanModalHobby2 = document.getElementsByClassName("closeModalHobby2")[0];

// // When the user clicks on the button, open the modal
// btnHobby2.onclick = function() {
//   modalHobby2.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModalHobby2.onclick = function() {
//   modalHobby2.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalHobby2) {
//     modalHobby2.style.display = "none";
//   }
// }

// //BUTTON HOBBY 3
// var modalHobby3 = document.getElementById("modalHobby3");

// // Get the button that opens the modal
// var btnHobby3 = document.getElementById("hobbyBtn3");

// // Get the <span> element that closes the modal
// var spanModalHobby3 = document.getElementsByClassName("closeModalHobby3")[0];

// // When the user clicks on the button, open the modal
// btnHobby3.onclick = function() {
//   modalHobby3.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModalHobby3.onclick = function() {
//   modalHobby3.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalHobby3) {
//     modalHobby3.style.display = "none";
//   }
// }

// //BUTTON HOBBY 4
// var modalHobby4 = document.getElementById("modalHobby4");

// // Get the button that opens the modal
// var btnHobby4 = document.getElementById("hobbyBtn4");

// // Get the <span> element that closes the modal
// var spanModalHobby4 = document.getElementsByClassName("closeModalHobby4")[0];

// // When the user clicks on the button, open the modal
// btnHobby4.onclick = function() {
//   modalHobby4.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModalHobby4.onclick = function() {
//   modalHobby4.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalHobby4) {
//     modalHobby4.style.display = "none";
//   }
// }

// //BUTTON HOBBY 5
// var modalHobby5 = document.getElementById("modalHobby5");

// // Get the button that opens the modal
// var btnHobby5 = document.getElementById("hobbyBtn5");

// // Get the <span> element that closes the modal
// var spanModalHobby5 = document.getElementsByClassName("closeModalHobby5")[0];

// // When the user clicks on the button, open the modal
// btnHobby5.onclick = function() {
//   modalHobby5.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModalHobby5.onclick = function() {
//   modalHobby5.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalHobby5) {
//     modalHobby5.style.display = "none";
//   }
// }

// //BUTTON HOBBY 6
// var modalHobby6 = document.getElementById("modalHobby6");

// // Get the button that opens the modal
// var btnHobby6 = document.getElementById("hobbyBtn6");

// // Get the <span> element that closes the modal
// var spanModalHobby6 = document.getElementsByClassName("closeModalHobby6")[0];

// // When the user clicks on the button, open the modal
// btnHobby6.onclick = function() {
//   modalHobby6.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModalHobby6.onclick = function() {
//   modalHobby6.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalHobby6) {
//     modalHobby6.style.display = "none";
//   }
// }
