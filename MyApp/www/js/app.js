angular.module('starter', ['ionic','starter.controllers','starter.admin'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider

  .state('tab',{
    url:'/tab',
    abstract:true,
    cache:false,
    templateUrl:function(){

      if(sessionStorage.getItem('loggedin_status')){
        return 'templates/tabs-main.html';
      }else{
        return 'templates/tabs.html';
      }

    }
  })

  .state('tab.index',{
    url:'/index',
    views:{
      'tab-index':{
          templateUrl:'templates/index.html'
      }
    }
  })


  .state('tab.login',{
    url:'/login',
    views:{
      'tab-login':{
          templateUrl:'templates/login.html',
          controller:'AppCtrl'
      }
    }
  })


  .state('tab.main',{
    url:'/main',
    views:{
      'tab-main':{
          templateUrl:'templates/main.html'
      }
    }
  })


  .state('tab.admin',{
    url:'/admin',
    views:{
      'tab-main':{
          templateUrl:'templates/admin.html',
          controller:'AdminCtrl'
      }
    }
  })



  .state('tab.admin-create',{
    url:'/admin-create',
    views:{
      'tab-main':{
          templateUrl:'templates/admin-create.html',
          controller:'AdminCtrl'
      }
    }
  })



  .state('tab.admin-edit',{
    url:'/admin-edit/:adminId',
    views:{
      'tab-main':{
          templateUrl:'templates/admin-edit.html',
          controller:'AdminCtrl'
      }
    }
  });




  $urlRouterProvider.otherwise('/tab/index');






})
