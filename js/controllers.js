angular.module('myStack.controllers', [])

.controller('MystackSettings',['$scope',function($scope){
                  
              $scope.mybgColor='';          //body color
              $scope.myColorSide='';        //sidebar color
              $scope.myColor='';        //nav color

              $scope.changemyColor=function(color){   //change nav color

                  $scope.myColor = color;

              };

            $scope.changemyColorSide=function(color){   //change sidebar color

                  $scope.myColorSide = color;

              };
            $scope.changemybgColor=function(color){   //change body color

                  $scope.mybgColor = color;

              };
           
                      
                      }])

.controller('dashboardCtrl',['$scope',function($scope){
                       $scope.pageClass = 'page-dashboard';
                      $scope.title='Dashboard';
                      
                      }])
.controller('contactCtrl',['$scope',function($scope){
                      
                       $scope.pageClass = 'page-contact';
                      $scope.title='Contact';
                      
                      }])
.controller('aboutCtrl',['$scope',function($scope){
                      
                      $scope.pageClass = 'page-about';
                      $scope.title='About';
                      
                      }]);