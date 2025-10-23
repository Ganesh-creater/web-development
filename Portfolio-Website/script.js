const navbtn = document.querySelectorAll('.nav');
const button = document.querySelectorAll('.btn');
const menuButton = document.querySelector('#menu-button');
const rootElement = document.documentElement;
const myForm = document.querySelector('.myform');
const submit = document.querySelector('.submit');

menuButton.addEventListener('click', () => {
    rootElement.toggleAttribute('menu-open')
})		
navbtn.forEach(a => {
    a.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        navbtn.forEach(btn => {
            btn.classList.remove('active');
        });
        // Add 'active' class from all buttons
        this.classList.add('active');
    });
});

navbtn.forEach(a => {
    a.addEventListener('mouseover', function() {
        // Remove 'active' class from all buttons
        navbtn.forEach(btn => {
            btn.classList.remove('active');
        });
        // Add 'active' class from all buttons
        this.classList.add('active');
    });
});

button.forEach(a => {
    a.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        button.forEach(btn => {
            btn.classList.remove('active');
        });
        // Add 'active' class from all buttons
        this.classList.add('active');
    });
});
button.forEach(a => {
    a.addEventListener('mouseover', function() {
        // Remove 'active' class from all buttons
        button.forEach(btn => {
            btn.classList.remove('active');
        });
        // Add 'active' class from all buttons
        this.classList.add('active');
    });
});
myForm.addEventListener('submit', function (event){
    // Prevent the default form submission if yu don't want to send data
    event.preventDefault();

    myForm.submit();
    // Clear the form fieldds
    myForm.reset();
});
submit.addEventListener('submit', function(event) {
    this.classList.remove('action');
    this.classList.add('action');
})

/* // Lenis smooth scrolling
const lenis = new Lenis();

lenis.on('scroll', (e) => {
console.log(e)
})

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf); */

if (window.Lenis) {
      // Disable native smooth scroll once Lenis is active
      document.documentElement.style.scrollBehavior = 'auto';

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      lenis.on('scroll', (e) => {
        // console.log(e)
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }