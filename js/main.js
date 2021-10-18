// Start Header
window.addEventListener('click', function(e){   
    if (document.getElementById('ul_links').contains(e.target)){
      // Clicked in box
    } else{
        document.getElementById('ul_links').classList.toggle('block');
    }
  });
// End Header