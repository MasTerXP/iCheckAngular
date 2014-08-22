var app = angular.module("VideoResponse",[]);

app.controller("submitTest",['$scope',function($scope){
	$scope.submit = function myfunction(){
		console.log("test");
		console.log($scope.txt);
		console.log($scope.radioValue);
	}
}]);


app.directive('iCheck', function($timeout, $parse) {
    return {
      link: function($scope, element, $attrs) {
        return $timeout(function() {
          var ngModelGetter, value;
          ngModelGetter = $parse($attrs['ngModel']);
          value = $parse($attrs['ngValue'])($scope);
          console.log(element);
          return $(element).iCheck({
           /* checkboxClass: 'icheckbox_minimal',*/
            radioClass: 'iradio_minimal-red',
            checkboxClass: 'icheckbox_minimal-red',
            increaseArea: '20%'
          }).on('ifChanged', function(event) {
          	console.log("ifChanged");
            if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
              $scope.$apply(function() {
                return ngModelGetter.assign($scope, event.target.checked);
              });
            }
            if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
              return $scope.$apply(function() {
                return ngModelGetter.assign($scope, value);
              });
            }
          });
        });
      }
    };
  })