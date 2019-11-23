  var app = angular.module('formvalidation', ['ngMessages']);

  angular.module('formvalidation').controller('MainController', MainControllerfn);


  function MainControllerfn() {
    mainVm = this;
    mainVm.addPerson = function(){
      
      console.log("File changes");
    }
  

    mainVm.people = [{}]
  }
