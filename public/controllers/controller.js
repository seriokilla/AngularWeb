function AppCtrl($scope, $http){
    console.log("hello from AppCtrl");
    
    $http.get("/contactlist").success(function(resp){
        console.log("got data");
        $scope.contactlist = resp;
    });
}