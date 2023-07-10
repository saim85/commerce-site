let navbar=document.querySelectorAll('.collapse a');
let navigation=document.querySelector('.navigation');
// console.log(navbar);
window.addEventListener('scroll',(e)=>{
  if(document.documentElement.scrollTop>20){
    navigation.classList.add('scroll-on');
  }
  else{
    navigation.classList.remove('scroll-on');
  }
  e.preventDefault();
});
navbar.forEach((item)=>{
   item.addEventListener('click',(e)=>{
    navbar.forEach((nav)=>{
      nav.classList.remove('show');
    });
    item.classList.add('show');
   });
});



// ------------------ Products JSCODE----------------
let tabs=document.querySelectorAll(".nav .tab");
let products=document.querySelectorAll('.product')
console.log(products)
console.log(tabs);

tabs.forEach((a)=>{
   console.log(a);
   a.addEventListener('click',()=>{
     tabs.forEach((nav)=>{
      nav.classList.remove('active');
     });
     a.classList.add('active');
     products.forEach((show)=>{
      show.style.display="none";
      let prod=a.textContent.toLowerCase();
      // console.log(prod);
      if(show.getAttribute("data-item")===prod){
        show.style.display="block";
      }
     });

     a.preventDefault();
   });
});
