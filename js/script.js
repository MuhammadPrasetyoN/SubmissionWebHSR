document.addEventListener("DOMContentLoaded", function () {
    const aeons = [
      { name: "Aha", nickname: "The Elation", path: "img/Aeon_Aha.png", description: "Aha adalah Aeon yang dikenal dengan kegembiraannya dan kedekatannya dengan makhluk fana. Aha menginspirasi para pengikutnya untuk menikmati kehidupan dan sering menyebabkan kekacauan melalui cara-cara yang tidak terduga." },
      { name: "Qlipoth", nickname: "The Preservation", path: "img/qlipoth.png", description: "Qlipoth adalah Aeon yang melambangkan ketahanan dan perlindungan. Ia dikenal sebagai penjaga tembok yang melindungi alam semesta dari ancaman eksternal." },
      { name: "Akivili", nickname: "The Trailblaze", path: "img/aeons.jpg", description: "Akivili adalah Aeon yang mewakili semangat penjelajahan dan petualangan. Ia mendorong para pengikutnya untuk menjelajahi yang tidak diketahui dan terus bergerak maju." },
      { name: "Ena", nickname: "The Order", path: "img/ena.png", description: "Ena adalah Aeon yang melambangkan keteraturan dan disiplin. Ia memastikan bahwa segala sesuatu berjalan sesuai dengan hukum dan aturan yang telah ditetapkan." },
      { name: "HooH", nickname: "The Equilibrium", path: "img/hooh.png", description: "HooH adalah Aeon yang menjaga keseimbangan alam semesta. Ia berusaha untuk menyeimbangkan kekuatan yang berlawanan dan menjaga harmoni." },
      { name: "Fuli", nickname: "The Remembrance", path: "img/fuli.png", description: "Fuli adalah Aeon yang mengingat dan menghargai masa lalu. Ia memastikan bahwa kenangan dan sejarah tidak dilupakan oleh para pengikutnya." },
      { name: "IX", nickname: "The Nihility", path: "img/IX.png", description: "IX adalah Aeon yang mewakili kekosongan dan ketidakberadaan. Ia mengajarkan bahwa segala sesuatu pada akhirnya akan kembali ke keadaan semula, yaitu ketiadaan." },
      { name: "Long", nickname: "The Permanence", path: "img/Long.png", description: "Long adalah Aeon yang melambangkan keabadian dan ketidakberubahan. Ia mengajarkan bahwa beberapa hal akan selalu tetap sama, terlepas dari perubahan yang terjadi di sekitarnya." },
      { name: "Oroboros", nickname: "The Voracity", path: "img/Oroboros.png", description: "Oroboros adalah Aeon yang mewakili kelahapan dan siklus tanpa akhir. Ia menggambarkan konsep siklus hidup dan kematian yang terus berulang." },
      { name: "Idrila", nickname: "The Beauty", path: "img/aeons.jpg", description: "Idrila adalah Aeon yang melambangkan keindahan dan kesempurnaan. Ia mendorong para pengikutnya untuk mencari dan menciptakan keindahan dalam segala hal." },
      { name: "Xipe", nickname: "The Harmony", path: "img/Xipe.png", description: "Xipe adalah Aeon yang menjaga harmoni dan kedamaian. Ia berusaha untuk menyelaraskan berbagai elemen yang ada di alam semesta." },
      { name: "Mythus", nickname: "The Enigmata", path: "img/Mythus.png", description: "Mythus adalah Aeon yang melambangkan misteri dan teka-teki. Ia mengajarkan bahwa tidak semua hal dapat dipahami dan ada banyak hal yang tetap menjadi misteri." },
      { name: "Tazzyronth", nickname: "The Propagation", path: "img/Tayzzyronth.png", description: "Tazzyronth adalah Aeon yang melambangkan pertumbuhan dan penyebaran. Ia mendorong para pengikutnya untuk berkembang dan menyebarkan pengaruh mereka." },
      { name: "Terminus", nickname: "The Finality", path: "img/aeons.jpg", description: "Terminus adalah Aeon yang melambangkan akhir dan kesudahan. Ia mengingatkan bahwa segala sesuatu memiliki akhir dan mendorong para pengikutnya untuk menerima akhir dari setiap perjalanan." },
      { name: "Lan", nickname: "The Hunt", path: "img/Lan.png", description: "Lan adalah Aeon yang melambangkan perburuan dan pengejaran. Ia mendorong para pengikutnya untuk terus mencari dan mengejar tujuan mereka." },
      { name: "Yaoshi", nickname: "The Abundance", path: "img/Yaoshi.png", description: "Yaoshi adalah Aeon yang melambangkan kelimpahan dan berkah. Ia memberikan berkah dan kelimpahan kepada para pengikutnya." },
      { name: "Nous", nickname: "The Erudition", path: "img/Nous.png", description: "Nous adalah Aeon yang melambangkan pengetahuan dan kebijaksanaan. Ia mendorong para pengikutnya untuk mencari pengetahuan dan menggunakan kebijaksanaan mereka." },
      { name: "Nanook", nickname: "The Destruction", path: "img/Nanook.png", description: "Nanook adalah Aeon yang melambangkan kehancuran dan kekuatan yang tak terbendung. Ia mengingatkan bahwa kadang-kadang kehancuran diperlukan untuk menciptakan sesuatu yang baru." },
    ];
  
    const aeonCardsContainer = document.querySelector(".aeon-cards");

    aeons.forEach((aeon, index) => {
      const card = document.createElement("div");
      card.classList.add("aeon-card");
      card.innerHTML = `
        <div class="name">${aeon.name}</div>
        <div class="nickname">${aeon.nickname}</div>
        <img src="${aeon.path}" alt="${aeon.name}" />
        <div class="description">${aeon.description}</div>
      `;
  
      aeonCardsContainer.appendChild(card);
  
      card.addEventListener("click", (event) => {
        event.stopPropagation();
        card.classList.toggle("show");
      });
    });
  
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".aeon-card")) {
        document.querySelectorAll(".aeon-card.show").forEach((openCard) => {
          openCard.classList.remove("show");
        });
      }
    });
    
    let slideIndex = {
      "jarilo-vi": 1,
      "xianzhou": 1,
      "penacony": 1
    };
    
    function showSlides(n, containerId) {
      let i;
      let slides = document.querySelectorAll(`.${containerId}`);
      if (n > slides.length) {slideIndex[containerId] = 1}
      if (n < 1) {slideIndex[containerId] = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex[containerId] - 1].style.display = "block";
    }
    
    function plusSlides(n, containerId) {
      showSlides(slideIndex[containerId] += n, containerId);
    }
    
    function autoSlides() {
      for (let key in slideIndex) {
          showSlides(slideIndex[key] += 1, key);
      }
      setTimeout(autoSlides, 3000); // Change image every 3 seconds
    }
    
    // Initial display
    showSlides(1, "jarilo-vi");
    showSlides(1, "xianzhou");
    showSlides(1, "penacony");
    
    // Start automatic slideshow
    autoSlides();
    
    
    window.plusSlides = plusSlides;
    
  });
  