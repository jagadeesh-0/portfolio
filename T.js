// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length > 1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  });
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form: show alert (since action is mailto)
const form = document.querySelector('.contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    // let the mailto handle submission — show small user feedback
    alert('Your default mail client will open to send the message. If nothing happens, please email jagadeeshsirigiri12@gmail.com directly.');
  });
  
}
// Contact form email handler
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields before sending.");
    return;
  }

  // Open default email app with pre-filled content
  const subject = encodeURIComponent("New message from portfolio website");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:jagadeeshsirigiri12@gmail.com?subject=${subject}&body=${body}`;

  // Reset form after sending
  this.reset();
});

