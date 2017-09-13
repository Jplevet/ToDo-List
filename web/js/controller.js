angular.module("ToDoList", ["LocalStorageModule"])
        .controller("ToDoController",function ($scope,localStorageService){
            if (localStorageService.get("angularjs-todolist")){
             $scope.todo = localStorageService.get("angularjs-todolist");   
            }else{
                $scope.todo = [];
            }
            $scope.$watchCollection("todo",function (newValue,oldValue){                
                localStorageService.set("angularjs-todolist",$scope.todo);
            });
            $scope.addActv = function(){
                $scope.todo.push($scope.newActv);
                $scope.newActv = {};
            };
            $scope.clean = function (){
                $scope.todo = [];
            };
        });

