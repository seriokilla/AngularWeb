function AppCtrl($scope){
    console.log("hello from AppCtrl");
    
    person1 = {
      name: "name001",
      email: "email001",
      number: "111-111-1111"  
    };
    person2 = {
      name: "name002",
      email: "email002",
      number: "222-222-2222"  
    };
    person3 = {
      name: "name003",
      email: "email003",
      number: "333-333-3333"  
    };
    
    var contactlist = [person1, person2, person3];
    $scope.contactlist = contactlist;
}