document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.getElementById("read-more-btn");
    const moreInfo = document.getElementById("more-info");
  
    readMoreBtn.addEventListener("click", function() {
      if (moreInfo.style.display === "none" || !moreInfo.style.display) {
        moreInfo.style.display = "block";
        readMoreBtn.textContent = "Read Less";
      } else {
        moreInfo.style.display = "none";
        readMoreBtn.textContent = "Read More";
      }
    });
  });
  