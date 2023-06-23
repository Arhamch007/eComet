

 document.addEventListener("click",function (e){
   if(e.target.classList.contains("gallery-item")){
   	  const src = e.target.getAttribute("src");
   	  document.querySelector(".modal-img").src = src;
   	  const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
   	  myModal.show();
   }
 })


 document.addEventListener("click",function (e){
	if(e.target.classList.contains("gallery-item1")){
		  const src = e.target.getAttribute("src");
		  document.querySelector(".modal-img").src = src;
		  const myModal = new bootstrap.Modal(document.getElementById('gallery-modal1'));
		  myModal.show();
	}
  })
  document.addEventListener("click",function (e){
	if(e.target.classList.contains("gallery-item2")){
		  const src = e.target.getAttribute("src");
		  document.querySelector(".modal-img").src = src;
		  const myModal = new bootstrap.Modal(document.getElementById('gallery-modal2'));
		  myModal.show();
	}
  }) 
  document.addEventListener("click",function (e){
	if(e.target.classList.contains("gallery-item3")){
		  const src = e.target.getAttribute("src");
		  document.querySelector(".modal-img").src = src;
		  const myModal = new bootstrap.Modal(document.getElementById('gallery-modal3'));
		  myModal.show();
	}
  }) 
  document.addEventListener("click",function (e){
	if(e.target.classList.contains("gallery-item4")){
		  const src = e.target.getAttribute("src");
		  document.querySelector(".modal-img").src = src;
		  const myModal = new bootstrap.Modal(document.getElementById('gallery-modal4'));
		  myModal.show();
	}
  })
   document.addEventListener("click",function (e){
	if(e.target.classList.contains("gallery-item5")){
		  const src = e.target.getAttribute("src");
		  document.querySelector(".modal-img").src = src;
		  const myModal = new bootstrap.Modal(document.getElementById('gallery-modal5'));
		  myModal.show();
	}
  })


 document.querySelector('.navbar-toggle').addEventListener('click', function() {
	this.classList.toggle('active');
  });