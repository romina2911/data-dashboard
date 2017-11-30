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
  selectProm.addEventListener('click', function() {
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
    
    /*var sedes = Object.keys(data);
    var menu = document.createElement('div');
    for(var i = 0; i < sedes.length; i++) {
      var bootcamp = Object.keys(data[sedes[i]]);
      for(var j = 0; j < bootcamp.length; j++) {
        var newLi = document.createElement('li');
        var studentsData = Object.values(data[sedes[i]]);
        for(var k = 0; k < studentsData.length; k++) {
          var newLiStudents = document.createElement('li');
            newLiStudents.innerHTML= studentsData[k];
            newLiStudents.id = studentsData[k];
            newLi.appendChild(newLiStudents);
          };

      };
    };

    students.appendChild(menu);*/       
          
      
});
<<<<<<< HEAD
/*>>>>>>> fbcb085f7d27a89cd9d0c6cb45b6724b1e084a69*/
=======
/*<<<<<<< HEAD
/*>>>>>>> fbcb085f7d27a89cd9d0c6cb45b6724b1e084a69
=======
/*>>>>>>> 4ee94b6cfc57e7e4d8a8a3eddc0806ea93021b35*/
>>>>>>> c5da3d30becb0dcb49ebf622b904887819dfdae2
