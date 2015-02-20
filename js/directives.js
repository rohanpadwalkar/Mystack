angular.module('myStack.directives', [])
.directive('navBar',function(){
    return{ 
    restrict: 'E',
        templateUrl:'partials/frontend/navbar.html'
    };
})
.directive('sidePanel',function(){
    return{ 
    restrict: 'E',
        templateUrl:'partials/frontend/sidepanel.html'
    };
})
.directive('theamPanel',function(){
    return{ 
    restrict: 'E',
        templateUrl:'partials/frontend/theampanel.html'
    };
});