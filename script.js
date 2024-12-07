gsap.from('.img-thumbnail', { duration: 2, rotationX: 360 });
      gsap.from('.navbar', { duration: 1.5, opacity: 0, y: '-100%', ease: 'bounce' });
      gsap.from('.display-4', { delay: 1, duration: 1, opacity: 0, x: '-10%' });

      gsap.registerPlugin(TextPlugin);
      gsap.to('.lead', { delay: 1.5, duration: 2, text: 'Student' });

      const galleryImages = document.querySelectorAll('.gallery-img');
      const delayTimes = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];

      function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }
      const newDelay = shuffleArray(delayTimes);
      galleryImages.forEach((img, i) => {
        img.dataset.aos = 'fade-up';
        img.dataset.aosDelay = i * 50 + '';
        // img.dataset.aosDelay = newDelay[i];
      });

      AOS.init({
        once: true,
        duration: 3000,
      });

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
  
    function setActive() {
      let currentSection = "";
  
      // Dapatkan posisi scroll halaman
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        // Periksa apakah posisi scroll berada dalam section
        if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id");
        }
      });
  
      // Update status active di navbar
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
  
      // Fallback: Aktifkan "Home" jika tidak ada section yang terdeteksi
      if (!currentSection) {
        document.querySelector('.nav-link[href="#home"]').classList.add("active");
      }
    }
  
    // Event Listener untuk scroll
    window.addEventListener("scroll", setActive);
  
    // Jalankan setActive saat halaman pertama kali dimuat
    setActive();
  });
  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzjWwvjJihKz3-24SxEnHM5XFjNPgQd_dv3uD_fgjLSp_4AAXsC6IC4C_ECvWyLkGsuBg/exec';
      const form = document.forms['wpu-contact-form'];
      const btnKirim = document.querySelector('.btn-kirim');
      const btnLoading = document.querySelector('.btn-loading');
      const myAlert = document.querySelector('.my-alert');

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        // ketika tombol submit diklik
        // tampilkan tombol loading, hilangkan tombol kirim
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then((response) => {
            // tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // tampilkan alert
            myAlert.classList.toggle('d-none');
            // reset formnya
            form.reset();
            console.log('Success!', response);
          })
          .catch((error) => console.error('Error!', error.message));
      });

      VanillaTilt.init(document.querySelectorAll('.keyboard-box'), {
        max: 35,
        speed: 1000,
        glare: true,
      });


  function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('pesan').value;

    const whatsappNumber = '6285940747512'; // Ganti dengan nomor WhatsApp Anda
    const whatsappMessage = `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  }