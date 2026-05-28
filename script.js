// document.getElementById("helloBtn").addEventListener("click", function () {
//   alert("Welcome to my website!");
// });

const form = document.getElementById('contactForm');
if (form){
  form.addEventListener('submit', e =>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = encodeURIComponent('Portfolio contact from ' + name);
    const body = encodeURIComponent('From: ' + name + ' <' + email + '>\n\n' + message);
    window.location.href = `mailto:arenasrosasw@spu.edu?subject=${subject}&body=${body}`;
  });
}