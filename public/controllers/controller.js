function AppCtrl($scope, $http){
    console.log("hello from AppCtrl");
    
    var refresh = function(){
        $http.get("/contactlist").success(function(resp){
            console.log("got data");
            $scope.contactlist = resp;
            $scope.contact = "";
        });
    };
    
    refresh();
    
    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post("/contactlist", $scope.contact).success(function(resp){
            console.log(resp);
            refresh();
        });
        
    };
    
    
}


