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
   /* var studentData = Object.keys(data[sedes[i[bootcamp[j]]]]);
    for(var x = 0; x < students; x++) {
      var studentUl = document.createElement('ul');
      var nameStudent = document.createElement('li');
      nameStudent.innerHTML = students[x];
      nameStudent.id = students[x];
      studentUl.appendChild(nameStudent);

    }*/
      var sedes = Object.keys(data);
       // ['ARQ', 'LIM', 'CDMX', 'SCL']
         for(var i = 0; i < sedes.length; i++) {
           var bootcamp = Object.keys(data[sedes[i]]);
           //2016-1, 2016-2, 2017-1
            for(var j = 0; j < bootcamp.length; j++) {
              var studentData = Object.keys(data[sedes[bootcamp[i]]]);
              //información de las estudiantes
              for(var x = 0; x < studentData.length; x++) {
                var studentUl = document.createElement('ul');
                var studentLi = document.createElement('li');
                studentLi.innerHTML = students[x];
                studentLi.id = students[x];
                studentUl.appendChild(studentLi);;
                  
                  var studentName = Object.keys(data[sedes[bootcamp[studentData[i]]]]);
                  for(var x = 0; x < studentData.length; x++) {
                    var studentNameLi = document.createElement('li');
                    studentNameLi.innerHTML = students[x];
                    studentNameLi.id = students[x];
                    studentNameUl.appendChild(studentNameLi);;


                  }


              };    
            };      
          };

});
/*>>>>>>> fbcb085f7d27a89cd9d0c6cb45b6724b1e084a69*/

});
<<<<<<< HEAD
/*>>>>>>> fbcb085f7d27a89cd9d0c6cb45b6724b1e084a69*/
=======
>>>>>>> 4ee94b6cfc57e7e4d8a8a3eddc0806ea93021b35
