
let btn = document.querySelector('#menu-btn-check');
let box = document.querySelector('#me_nu');
 
let btnToggleclass = function(el) {
  el.classList.toggle('is-active');
}
 
btn.addEventListener('click', function() {
  btnToggleclass(box);
}, false);



//  let nsub7 = document.querySelector("#nav_check7")
// var element7 = document.querySelector('#article_07'); // 移動させたい位置の要素を取得
// var rect = element7.getBoundingClientRect();
// var position = rect.top;  
//   // 一番上からの位置を取得
// nsub7.addEventListener("click",
// function scrollToTop() {
//   scrollTo(0, position);
//  })


// 1. すべてのhref="#"のaタグを取得
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

// 2. 1のaタグにそれぞれクリックイベントを設定
for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
        
        // 3. ターゲットの位置を取得
        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href'); // 各a要素のリンク先を取得
        let targetElement = document.getElementById(href.replace('#', '')); // リンク先の要素（コンテンツ）を取得
        
        const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
        const offset = window.pageYOffset; // 現在のスクロール量を取得
        const gap = 70; // 固定ヘッダー分の高さ
        const target = rect + offset - gap; //最終的な位置を割り出す

        // 4. スムースにスクロール
        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });

    });

}

//ページトップに移動
function scrollToTop() {
  scrollTo(0, 0);
 }
//一定数スクロールしたらページトップボタン出現
 window.onscroll = function () {
  var fixedBarObj = document.getElementById("fixedbtn");
  if (document.documentElement.scrollTop > 800) {
    fixedBarObj.className = "fixed";
  } else {
    fixedBarObj.className = "";
  }
}