
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else {
        document.querySelector('.ham').style.display = 'none'
        setTimeout(()=>{
        document.querySelector('.cross').style.display = 'inline'
    },300);
    }
});


// function togglehide() {
//     let btn = document.getElementById('btn');
//     let para = document.getElementById('para');
//     if (para.style.display != 'none'){
//         para.style.display = 'none';
//     }
//    else{
//         para.style.display = 'block';
//     }
// }

document.getElementById("showButton").addEventListener("click", function() {
    var hiddenParagraph = document.getElementById("hiddenParagraph");
    if (hiddenParagraph.style.display === "none") {
        hiddenParagraph.style.display = "block"; // Display the hidden paragraph
    } else {
        hiddenParagraph.style.display = "none"; // Hide the paragraph
    }
});

document.getElementById("showButton2").addEventListener("click", function() {
    var hiddenParagraph = document.getElementById("hiddenParagraph2");
    if (hiddenParagraph.style.display === "none") {
        hiddenParagraph.style.display = "block"; // Display the hidden paragraph
    } else {
        hiddenParagraph.style.display = "none"; // Hide the paragraph
    }
});

document.getElementById("showButton3").addEventListener("click", function() {
    var hiddenParagraph = document.getElementById("hiddenParagraph3");
    if (hiddenParagraph.style.display === "none") {
        hiddenParagraph.style.display = "block"; // Display the hidden paragraph
    } else {
        hiddenParagraph.style.display = "none"; // Hide the paragraph
    }
});


// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("opencalculatorbtn").addEventListener("click", function() {
//         var website = "index.html";
//         window.open(website, "_blank");
//     });
// });


document.getElementById("downloadBtn").addEventListener("click", function() {
    var link = document.createElement("a");
    link.href = "path-to-your-pdf-file.pdf";
    link.download = "your-file-name.pdf";
    link.click();
  });