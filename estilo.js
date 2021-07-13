


function Enviar(){
     var nombre = document.getElementById("Nombre").value;
     var mail= document.getElementById("Email").value;
     var mensaje=document.getElementById("mensaje").value;
     
     if(nombre != ""){
         
          if (mail != ""){
              
          
               if (mensaje !="")
               {
                    alert('datos enviados')
               }
               else {
                    alert('ingrese mensaje');
               }
          
          
          }     
          else{
               alert('Ingrese correo');
          
          }
          
          
     }
     else {
          alert('ingrese nombre');
     }

    
}
