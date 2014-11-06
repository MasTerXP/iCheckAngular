var app = angular.module("VideoResponse",[]);

app.controller("submitTest",['$scope',function($scope){
  $scope.radioValue = "test";
	$scope.submit = function myfunction(){
		console.log("test");
		console.log($scope.txt);
		console.log($scope.radioValue);
	};
}]);


app.directive('icheck',[ '$timeout', function($timeout, $parse) {
    return {
      require:'ngModel',
      link: function($scope, element, $attrs, ngModel) {
        return $timeout(function() {
          /*var ngModelGetter, value;
          ngModelGetter = $parse($attrs['ngModel']);
          value = $parse($attrs['ngValue'])($scope);
          console.log(element);*/
          var value = $attrs['value'];
          $scope.$watch($attrs['ngModel'],function(newValue){
            console.log("watch");
            $(element).iCheck('update');
          })
          return $(element).iCheck({
           /* checkboxClass: 'icheckbox_minimal',*/
            radioClass: 'iradio_minimal-red',
            checkboxClass: 'icheckbox_minimal-red',
            increaseArea: '20%'
          }).on('ifChanged', function(event) {
            if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
              $scope.$apply(function() {
                /*return ngModelGetter.assign($scope, event.target.checked);*/
                return ngModel.$setViewValue(event.target.checked);
              });
            }
            if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
              return $scope.$apply(function() {
                /*return ngModelGetter.assign($scope, value);*/
                return ngModel.$setViewValue(value);
              });
            }
          });
        });
      }
    };
  }]);