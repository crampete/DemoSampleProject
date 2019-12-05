  var app = angular.module('formvalidation', ['ngMessages']);

  angular.module('formvalidation').controller('MainController', MainControllerfn);


  function MainControllerfn() {
    mainVm = this;
    mainVm.addPerson = function(){
      var a = 5+10;
      console.log(a);
      alert("Files changes");
    }
  

    mainVm.people = [{}]
  }
