var icon = document.getElementById('homeIconIcon');
var clickable = true;

document.getElementById('homeIcon').addEventListener('click', function() {
    if (clickable) {
        icon.classList.add('clicked');
        clickable = false;

        setTimeout(function() {
            icon.classList.remove('clicked');
            clickable = true;
        }, 1000);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var homeIcon = document.getElementById('homeIcon');
    var scrollThreshold = 100;

    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            homeIcon.classList.add('visible');
        } else {
            homeIcon.classList.remove('visible');
        }
    });

    homeIcon.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


// ハンバーガーメニューの要素を取得
const hamburgerMenu = document.querySelector('.hamburger-menu');
// メニューの要素を取得
const menu = document.querySelector('.menu_btn');

// ハンバーガーメニューをクリックした時の処理
hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});


  
function setupDownloadButton(buttonId, linkId) {
    const downloadButton = document.getElementById(buttonId);
    const confirmButton = document.getElementById("confirmDownloadButton");
    const cancelButton = document.getElementById("cancelDownloadButton");
    const downloadLink = document.getElementById(linkId);

    downloadButton.addEventListener("click", function(event) {
        event.preventDefault();
        popup.style.display = "block";

        confirmButton.addEventListener("click", function() {
            window.location.href = downloadLink.href;
            popup.style.display = "none";
        });

        cancelButton.addEventListener("click", function() {
            popup.style.display = "none";
        });
    });
}

setupDownloadButton("downloadButton1", "downloadLink1");
setupDownloadButton("downloadButton2", "downloadLink2");
setupDownloadButton("downloadButton3", "downloadLink3");
