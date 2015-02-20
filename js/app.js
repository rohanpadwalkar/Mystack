var app= angular.module('myStack', ['ngRoute','ngAnimate','myStack.controllers','myStack.directives']);

app.config(function($routeProvider){
        //set path
           $routeProvider
           .when('/',{
                templateUrl: 'partials/dashboard.html',
               controller: 'dashboardCtrl'
           })
           .when('/about',{
                templateUrl: 'partials/about.html',
               controller: 'aboutCtrl'
           })
           .when('/contact',{
                templateUrl: 'partials/contact.html',
               controller: 'contactCtrl'
           })
           .otherwise({
            redirectTo:'/'
           });
           
           
           });
