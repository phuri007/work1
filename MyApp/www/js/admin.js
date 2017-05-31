angular.module('starter.admin',[])
.controller('AdminCtrl',function($scope, $stateParams, $http, $state,$ionicPopup){
  var url="http://127.0.0.1/ionic_php/";
  $scope.adminData={};
  $scope.createAdmin=function(){

    var admin_user = $scope.adminData.admin_user;
    var admin_password = $scope.adminData.admin_password;

    if( admin_user && admin_password){

      str= url + "admin-insert.php?username=" + admin_user + "&password=" + admin_password ;

      $http.get(str)
      .success(function(response){

        if(response==true){

          $ionicPopup.alert({
            title:'ข้อมูลผู้ดูแลระบบ',
            template:'บันทึกข้อมูลเรียบร้อย'
          });
          $state.go('tab.admin',[],{location:"replace",reload:true});

        }else{

          $ionicPopup.alert({
            title:'ข้อมูลผู้ดูแลระบบ',
            template:'ไม่สามารถทำการบันทึกข้อมูลได้'
          });
          $state.go('tab.admin-create',[],{location:"replace",reload:true});

        }

      }).error(function(){

        $ionicPopup.alert({
          title:'ข้อมูลผู้ดูแลระบบ',
          template:'ไม่สามารถทำการติดต่อเซิร์ฟเวอร์ได้'
        });

      })

    }else{

      $ionicPopup.alert({
        title:'ข้อมูลผู้ดูแลระบบ',
        template:'กรุณากรอกข้อมูลให้ครบ'
      });

    }

  };










  $http.get(url+"admin-show.php").success(function(response){
    $scope.showAdmins=response.records;
  });




  $http.get(url+"admin-showedit.php?id="+$stateParams.adminId)
  .success(function(response){
    $scope.adminDatas=response.records;
  });





  $scope.editAdmin=function(){
    var admin_id = $scope.adminDatas.admin_id;
    var admin_user = $scope.adminDatas.admin_user;
    var admin_password = $scope.adminDatas.admin_password;



    if( admin_id && admin_user && admin_password){
      str= url + "admin-edit.php?user=" + admin_user + "&password=" + admin_password + "&id=" + admin_id;

      $http.get(str)
      .success(function(response){

        if(response==true){

          $ionicPopup.alert({
            title:'ข้อมูลผู้ดูแลระบบ',
            template:'แก้ไขข้อมูลเรียบร้อย'
          });
          $state.go('tab.admin',[],{location:"replace",reload:true});

        }else{

          $ionicPopup.alert({
            title:'ข้อมูลผู้ดูแลระบบ',
            template:'ไม่สามารถทำการแก้ไข้อมูลได้'
          });
          $state.go('tab.admin-admin',[],{location:"replace",reload:true});

        }

      }).error(function(){

        $ionicPopup.alert({
          title:'ข้อมูลผู้ดูแลระบบ',
          template:'ไม่สามารถทำการติดต่อเซิร์ฟเวอร์ได้'
        });

      })

    }else{

      $ionicPopup.alert({
        title:'ข้อมูลผู้ดูแลระบบ',
        template:'กรุณากรอกข้อมูลให้ครบ'
      });

    }

  };












  $scope.delAdmin=function(id){

    if(id){
      str= url + "admin-del.php?id=" + id ;
      $http.get(str)
      .success(function(response){

        if(response==true){

          $ionicPopup.alert({
            title:'ข้อมูลผู้ดูแลระบบ',
            template:'ลบข้อมูลเรียบร้อย'
          });
          $state.go('tab.admin',[],{location:"replace",reload:true});

        }else{

          $ionicPopup.alert({
            title:'ข้อมูลผู้ดูแลระบบ',
            template:'ไม่สามารถทำการลบข้อมูลได้'
          });
          $state.go('tab.admin-admin',[],{location:"replace",reload:true});

        }

      }).error(function(){

        $ionicPopup.alert({
          title:'ข้อมูลผู้ดูแลระบบ',
          template:'ไม่สามารถทำการติดต่อเซิร์ฟเวอร์ได้'
        });

      })

    }else{

      $ionicPopup.alert({
        title:'ข้อมูลผู้ดูแลระบบ',
        template:'ไม่สามารถทำการลบได้'
      });

    }

  };









});
