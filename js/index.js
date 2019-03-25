const openNav = (x) => {
    document.querySelector('.hamburger').style.display = "none";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    
      if (x.matches) { // If media query matches
        document.querySelector('#mySidenav').style.width = "260px";
      } else {
        document.querySelector('#mySidenav').style.width = "50%";
      }

  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector('.hamburger').style.display = "block";
    document.body.style.backgroundColor = "white";

  };

  const x = window.matchMedia("(max-width: 700px)")
  openNav(x) // Call listener function at run time
  x.addListener(openNav) // Attach listener function on state changes

  
  
 //rgba(0,50,0,0.4)