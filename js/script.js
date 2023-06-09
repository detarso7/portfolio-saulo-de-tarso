window.onload = () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let navLinks = document.querySelectorAll('header nav a');
  
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
          menuIcon.classList.remove('bx-x');
          navbar.classList.remove('active');
        }
      });
    });
  
    let sections = document.querySelectorAll('section');
  
    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
  
        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
          });
          document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        }
      });
  
      let headers = document.querySelectorAll('header');
  
      headers.forEach(header => {
        header.classList.toggle('sticky', window.scrollY > 100);
      });
  
      if (!menuIcon.classList.contains('bx-x') && navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      }
    };
  };

  //Animação
  ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .skills-content', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    //Type js
    const typed = new Typed('.multiple-text', {
        strings: ['Desenvolvedor Full Stack', 'Designer UI/UX', 'Motion Design', 'Produtor Publicitário'],
        typeSpeed: 100,
        backSpeed: 100,
        backDeley: 1000,
        loop: true
    })

      // Função para abrir o modal
      function openModal() {
        document.getElementById('successModal').style.display = 'block';
      }

      // Função para fechar o modal
      function closeModal() {
        document.getElementById('successModal').style.display = 'none';
      }

      // Evento para abrir o modal ao clicar no botão
      document.getElementById('openModalBtn').addEventListener('click', openModal);

      // Evento para fechar o modal após 3 segundos
      setTimeout(closeModal, 5000);