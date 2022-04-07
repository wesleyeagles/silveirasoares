window.onload = initPage; 

function initPage() {

  sessionStorage.removeItem('service')

}



sessionStorage.setItem('fruta', 'Banana')
sessionStorage.getItem('fruta')

let services = document.querySelectorAll('.service-single')

services[0].addEventListener("click", function(){

  sessionStorage.setItem('service', 'Reengenharia Administrativa')

})

services[1].addEventListener("click", function(){
  sessionStorage.setItem('service', 'Escrituração Contábil')
})

services[2].addEventListener("click", function(){
  sessionStorage.setItem('service', 'Gestão Tributária')
})

services[3].addEventListener("click", function(){
  sessionStorage.setItem('service', 'Escrita Fiscal')
})

services[4].addEventListener("click", function(){
  sessionStorage.setItem('service', 'Departamento Pessoal')
})

services[5].addEventListener("click", function(){
  sessionStorage.setItem('service', 'Gestão Societária')
})





  

