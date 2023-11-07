// 初期状態でポップアップを非表示にする
document.getElementById("popup").style.display = "none";

// ダウンロードボタン1がクリックされたときの処理
document.getElementById("downloadButton1").addEventListener("click", function(event) {
    event.preventDefault(); // リンクのデフォルトのクリック動作をキャンセル

    // ポップアップを表示
    document.getElementById("popup").style.display = "block";

    // "はい" ボタンがクリックされたときの処理
    document.getElementById("confirmDownloadButton").addEventListener("click", function() {
        // ダウンロードの実行
        window.location.href = document.getElementById("downloadLink1").href;

        // ポップアップを非表示にする
        document.getElementById("popup").style.display = "none";
    });

    // "キャンセル" ボタンがクリックされたときの処理
    document.getElementById("cancelDownloadButton").addEventListener("click", function() {
        // ポップアップを非表示にする
        document.getElementById("popup").style.display = "none";
    });
});
