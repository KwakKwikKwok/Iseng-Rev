document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("home-link");
    const aboutLink = document.getElementById("about-link");
  
    homeLink.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Maaf, untuk saat ini halaman 'Home' masih belum tersedia.\n" + "Web ini dibuat dengan sangat sederhana dan masih belum lengkap, maaf atas ketidaknyamanan yang ditimbulkan\n" + "-Kenzie B");
    });
  
    aboutLink.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Maaf, untuk saat ini halaman 'About' masih belum tersedia.\n" + "Web ini dibuat dengan sangat sederhana dan masih belum lengkap, maaf atas ketidaknyamanan yang ditimbulkan\n" + "-Kenzie B");
    });
  
    document.getElementById("loginBtn").addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = '../index.html';
    });
});   
