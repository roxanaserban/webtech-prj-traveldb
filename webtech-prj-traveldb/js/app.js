'use strict'

let app = angular.module('messageApp', [
    'ui.router',
    'authorControllers',
    'ngMessages'
    ])
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/authors')
    $stateProvider
        
        .state('orase', {
            url : '/orase',
            templateUrl : 'views/orase.html',
            controller : 'oraseController'
        })
        .state('oraseDetalii', {
            url : '/authors',
            templateUrl : 'views/oraseDetalii.html',
            controller : 'oraseDetaliiController'
        })

app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider){
        
    $urlRouterProvider.otherwise('/home')
    
    $stateProvider
        .state('home', {
            url: '/home',
            template : '<h2>Home</h2>'
        })
        .state('orase', {
            url: '/orase',
            template : 'views/orase.html',
        })
        .state('poze', {
            url: '/poze',
            templateUrl: 'views/poze.html',
            controller: 'scriptController'
        })
        .state('tari', {
            url: '/tari',
            templateUrl : 'views/tari.html'
        })
        .state('me', {
            url: '/me',
            template : '<h2>Despre mine</h2> Alta data'
        })
}])

//let app=angular.module('proiect-roxanaioana',[
  //   'ui.router',
//     'script-controller'
  //  ])

//ce dependente mai are aplciatia;ce mai are nevoie ca sa ruleze aplicatia:
//ui router
//si mai are nevoie  de controller:script-controller
//dupa tb sa definesc rutele pe care vreau sa"merg";adica cum merg din view si unde
//cu app.config-e fct injectabila

//app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
//deschidere functie
///setare stare default
//$urlRouterProvider.otherwise('/about')
//$stateProvider
//2 stari-numele starii si configuratia starii
/*
.state('about',{
    url:'/about',
    template:'<h2>A simple app using angular js</h2>'
    })
    //a 2-a stare e cea in care afisez ceva/mesajul
    .state('messages', {
      url: '/messages',
      templateUrl: 'partials/messages.html',
      controller: 'script-controller'
    }
  )
}])

*/

//cu $ in fata e o chestie conventionala

/*
var Sequelize = require('sequelize')
  , sequelize = new Sequelize('travel', 'roxanaioana', '', {
      dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
      port:    3306, // or 5432 (for postgres)
    });
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });
  
  
  sequelize
  .sync({ force: true })
  .then(function(err) {
    console.log('It worked!');
  }, function (err) { 
    console.log('An error occurred while creating the table:', err);
  });
  
  */