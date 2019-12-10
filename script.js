  var app = angular.module('formvalidation', ['ngMessages']);

  angular.module('formvalidation').controller('MainController', MainControllerfn);


  function MainControllerfn() {
    mainVm = this;
    mainVm.addPerson = function(){
      var Add = 10+5;
      console.log("Results:" + Add);  
    }
  

    mainVm.people = [{}]
  }
