function openWebsite() {

    const opening = document.getElementById("opening");

    const mainContent = document.getElementById("main-content");


    opening.style.opacity = "0";


    setTimeout(function() {

        opening.style.display = "none";

        mainContent.style.display = "block";

        window.scrollTo(0, 0);

    }, 1200);

}

function openLetter() {

    const letter = document.getElementById("letterOverlay");

    letter.classList.add("active");

}


function closeLetter() {

    const letter = document.getElementById("letterOverlay");

    letter.classList.remove("active");

}

function openFinalMessage() {

    const finalOverlay =
        document.getElementById("finalOverlay");

    finalOverlay.classList.add("active");

}