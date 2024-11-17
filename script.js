let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let generateBtn = document.getElementById("generateBtn");

const generateQR = () => {
    if (qrText.value.trim().length > 0) { // Ensure there is text input
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        console.log("image src: ", qrImage.src);
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
};

// Add event listener to the button
generateBtn.addEventListener("click", generateQR);
