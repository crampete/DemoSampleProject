  var app = angular.module('formvalidation', ['ngMessages']);

  angular.module('formvalidation').controller('MainController', MainControllerfn);


  function MainControllerfn() {
    mainVm = this;
    mainVm.addPerson = function(){
      alert('form is submitted!!!');
      console.log("File changes");
    }
  

    mainVm.people = [{}]
  }
