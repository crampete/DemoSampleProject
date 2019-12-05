  var app = angular.module('formvalidation', ['ngMessages']);

  angular.module('formvalidation').controller('MainController', MainControllerfn);


  function MainControllerfn() {
    mainVm = this;
    mainVm.addPerson = function(){
      var a = 5+10;
        
      alert("Files Changed"); 
      console.log("Add values : " + a );
    }
  

    mainVm.people = [{}]
  }
