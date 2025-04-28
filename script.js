document.addEventListener('DOMContentLoaded', () => {

    fetch('gallery.json')
      .then(response => response.json())
      .then(data => {
        const gallery = document.getElementById('menugallery');
        data.forEach(item => {
          const galleryItem = document.createElement('div');
          galleryItem.className = 'gallery-item';
          galleryItem.innerHTML = `<img src="${item.image}" alt="${item.alt}" />`;
          gallery.appendChild(galleryItem);
        });
      })
      .catch(error => console.error('Gallery Fetch Error:', error));
  
    // Load Menu Items
    fetch('menu.json')
      .then(response => response.json())
      .then(data => {
        const menuitem = document.getElementById('menuitem');
        data.forEach(item => {
          const menuitems = document.createElement('div');
          menuitems.className = 'menu-item';
          menuitems.innerHTML = `
            <img src="${item.image}" alt="${item.alt}" />
            <h3>${item.alt}</h3>
            <p>${item.description}</p>
            <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
          `;
          menuitem.appendChild(menuitems);
        });
      })
      .catch(error => console.error('Menu Fetch Error:', error));
  
    
    let currentSlide = 0;
    const slides = document.querySelectorAll('.test-slide');
    const totalSlides = slides.length;
  
    function showSlide() {
      slides.forEach(slide => {
        slide.style.display = "none";
      });
  
      slides[currentSlide].style.display = "block";
      currentSlide = (currentSlide + 1) % totalSlides;
    }
  
    if (slides.length > 0) {
      showSlide(); 
      setInterval(showSlide, 3000);
    }
  
  
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for contacting us! We will get back to you soon.");
      });
    }
  
  });
  