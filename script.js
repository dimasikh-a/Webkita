const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.feature-child');
const button = document.getElementById('myButton')

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath.includes(linkPath)) {
        link.classList.add('active');
    }
});


// button 
function klik() {
  window.location.href = "https://wa.me/6281280493435?text=Halo!%20Saya%20ingin%20menanyakan%20tentang%20produk%20Anda.";
}
