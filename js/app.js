/*<<<<<<< HEAD
// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);
=======
/*
 * Funcionalidad de tu producto
 */


// Puedes hacer uso de la base de datos a través de la variable `data`()

window.addEventListener ('load', function(){
  var selectProm = document.getElementById('select-prom');
  selectProm.addEventListener('click', function(){
    var menu = document.createElement('div');
    var sedes = Object.keys(data);
    // ['ARQ', 'LIM', 'CDMX', 'SCL']
    for(var i = 0; i < sedes.length; i++) {
      var newUl = document.createElement('ul');
      var nameSede = document.createElement('li');
      nameSede.innerHTML = sedes[i];
      nameSede.id = sedes[i];
      newUl.appendChild(nameSede);

      var bootcamp = Object.keys(data[sedes[i]]);

      for(var j = 0; j < bootcamp.length; j++) {
        var newLi = document.createElement('li');
        newLi.innerHTML= bootcamp[j];
        newLi.id = bootcamp[j];
        newUl.appendChild(newLi);
      }
      menu.appendChild(newUl);
    }

    selectProm.appendChild(menu);
  });


  
  
  students.addEventListener('click', function(){
    var students = document.getElementById('students');
    for (var sede in data) {
      console.log(data[sede])}
      
    }); 
        
          
      
});
/*>>>>>>> fbcb085f7d27a89cd9d0c6cb45b6724b1e084a69*/
