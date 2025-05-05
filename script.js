document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.category-tab');
    const contents = document.querySelectorAll('.carousel-item-content');
    const image = document.getElementById('slide-image');

    const imageMap = {
      learning: './files/images/DL-Learning-1.jpg',
      technology: './files/images/DL-Technology.jpg',
      communication: './files/images/DL-Communication.jpg'
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const selectedTab = tab.getAttribute('data-tab');

        // Activate selected tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Show relevant content
        contents.forEach(c => {
          c.classList.remove('active');
          if (c.getAttribute('data-tab') === selectedTab) {
            c.classList.add('active');
          }
        });

        // Update image
        if (imageMap[selectedTab]) {
          image.src = imageMap[selectedTab];
        }
      });
    });
  });

 













// mobile tabs
 
    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(() => {
                document.querySelectorAll('.accordion-button').forEach(btn => {
                    const img = btn.querySelector('.accordion-icon');
                    if (btn.classList.contains('collapsed')) {
                        img.src = './files/icons/plus-01.svg';
                    } else {
                        img.src = './files/icons/minus-01.svg';
                    }
                });
            }, 350); // after transition ends
        });
    }); 
