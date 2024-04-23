document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".submit")
    const homeLink = document.getElementById("home-link")
    const aboutLink = document.getElementById("about-link")
  
    form.addEventListener("click", (e) => {
      e.preventDefault();
      const username = document.querySelector('input[name="username"]').value
      const password = document.querySelector('input[name="password"]').value
      const authenticated = authentication(username, password)
  
      if (authenticated) {

      } 
      else {
        alert("No data matches your input.");
      }
    })
  
    homeLink.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Maaf, untuk saat ini halaman 'Home' masih belum tersedia.\n" + "Web ini dibuat dengan sangat sederhana dan masih belum lengkap, maaf atas ketidaknyamanan yang ditimbulkan\n" + "-Kenzie B");
    })
  
    aboutLink.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Maaf, untuk saat ini halaman 'About' masih belum tersedia.\n" + "Web ini dibuat dengan sangat sederhana dan masih belum lengkap, maaf atas ketidaknyamanan yang ditimbulkan\n" + "-Kenzie B");
    })
  
    document.getElementById("loginBtn").addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = 'index.html';
    })
})
function authentication (username,password){
    if(username =="Shelly" && password=="Wooyoung"){
        window.location.href ='Shelly/Shelly.html'
        return true
    }
    else if (username =="Belifin" && password=="B0C4H_Sul4w3S13"){
        window.location.href ='Belifin/Belifin.html'
        return true
    }
    else if (username =="Chelsea" && password=="DikitLagiGradu"){
        window.location.href ='Chelsea/Chelsea.html'
        return true
    }
    else if (username =="Evelyn" && password=="Hellow"){
        window.location.href ='Ev/Ev.html'
        return true
    }
    else if (username =="Gaby" && password=="DSA"){
        window.location.href ='Gaby/Gaby.html'
        return true
    }
    else if (username =="Grace" && password=="BusinessWoman"){
        window.location.href ='Grace/Grace.html'
        return true
    }
    else if (username =="Jacqlien" && password=="CEO_Mamangs"){
        window.location.href ='Jacqlien/Jacqlien.html'
        return true
    }
    else if (username =="JP" && password=="SiPalingBIO"){
        window.location.href ='JP/JP.html'
        return true
    }
    else if (username =="Kezia" && password=="Miraculous"){
        window.location.href ='Kezia/Kezia.html'
        return true
    }
    else if (username =="Tata" && password=="Pantun"){
        window.location.href ='Tata/Tata.html'
        return true
    }
    else{
        return false
    }
}