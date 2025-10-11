import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

lucide.createIcons();

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("scrollContainer");
  const btnLeft = document.getElementById("scrollLeft");
  const btnRight = document.getElementById("scrollRight");
  const step = 200;

  // 一開始左鍵 disabled
  btnLeft.disabled = true;
  btnLeft.classList.add("disabled");
  btnRight.disabled = false;
  btnRight.classList.remove("disabled"); // 👈 加這行

  btnLeft.addEventListener("click", () => {
    container.scrollBy({ left: -step, behavior: "smooth" });
    checkScroll();
  });

  btnRight.addEventListener("click", () => {
    container.scrollBy({ left: step, behavior: "smooth" });
    checkScroll();
  });

  // 檢查是否滾到最左或最右，更新按鈕狀態
  function checkScroll() {
    setTimeout(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const current = container.scrollLeft;

      if (current <= 0) {
        btnLeft.disabled = true;
        btnLeft.classList.add("disabled");
      } else {
        btnLeft.disabled = false;
        btnLeft.classList.remove("disabled");
      }

      if (current >= maxScroll) {
        btnRight.disabled = true;
        btnRight.classList.add("disabled");
      } else {
        btnRight.disabled = false;
        btnRight.classList.remove("disabled");
      }
    }, 300); // 等動畫結束再檢查
  }
});




console.log('Hello world');