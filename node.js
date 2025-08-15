//Remove the import line
// import QrCreator from "qr-creator";
const QrCreator = window.QrCreator;

const qrImg = document.querySelector(".qr-image");
const inp = document.getElementById("url");
const btn = document.getElementById("generateBtn");

function generateQR() {
  const txt = inp.value;
  console.log(txt);

  // Clear previous QR code
  qrImg.innerHTML = "";

  window.QrCreator.render(
    {
      text: txt,
      radius: 0.5,
      ecLevel: "H",
      fill: "#536DFE",
      background: null,
      size: 280,
    },
    qrImg
  );
}

btn.addEventListener("click", generateQR);

inp.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    generateQR();
  }
});

// Typing animation for "QR Generator"
const typingText = "QR Generator";
const typingElement = document.createElement("div");
typingElement.style.fontSize = "2rem";
typingElement.style.fontWeight = "bold";
typingElement.style.marginBottom = "1.5rem";
typingElement.style.letterSpacing = "0.05em";
typingElement.style.color = "#6366f1"; // Indigo-500
typingElement.style.fontFamily = "inherit";

// Insert the typing element at the top of #qr-code
const qrCodeDiv = document.getElementById("qr-code");
qrCodeDiv.insertBefore(typingElement, qrCodeDiv.firstChild);

let charIndex = 0;
let typingForward = true;

function animateTyping() {
  if (typingForward) {
    typingElement.textContent = typingText.slice(0, charIndex++);
    if (charIndex > typingText.length) {
      typingForward = false;
      setTimeout(animateTyping, 1000); // Pause before erasing
      return;
    }
  } else {
    typingElement.textContent = typingText.slice(0, --charIndex);
    if (charIndex === 0) {
      typingForward = true;
      setTimeout(animateTyping, 400); // Pause before typing again
      return;
    }
  }
  setTimeout(animateTyping, typingForward ? 120 : 60);
}

animateTyping();
