var app = angular.module("VideoResponse",[]);

app.controller("submitTest",['$scope',function($scope){
	$scope.submit = function myfunction(){
		console.log($scope.txt);
		console.log($scope.radioValue);
    console.log($scope.radioValuet);
	}
}]);

/*app.directive('iCheck', function($timeout, $parse) {
    return {
        require: 'ngModel',
        link: function($scope, element, $attrs, ngModel) {
            return $timeout(function() {
                var value;
                value = $attrs['value'];
                
                $scope.$watch($attrs['ngModel'], function(newValue){
                    $(element).iCheck('update');
                })

                return $(element).iCheck({
                    checkboxClass: 'icheckbox_minimal',
                    checkboxClass: 'icheckbox_minimal-red',
                    radioClass: 'iradio_minimal-red',
                    increaseArea: '20%'

                }).on('ifChanged', function(event) {
                    if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
                        $scope.$apply(function() {
                            return ngModel.$setViewValue(event.target.checked);
                        });
                    }
                    if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
                        return $scope.$apply(function() {
                            return ngModel.$setViewValue(value);
                        });
                    }
                });
            });
        }
    };
});*/

app.directive('iCheck', function($timeout, $parse) {
    return {
      link: function($scope, element, $attrs) {
        return $timeout(function() {
          var ngModelGetter, value;
          ngModelGetter = $parse($attrs['ngModel']);
          value = $parse($attrs['ngValue'])($scope);
          console.log(element);
          return $(element).iCheck({
            checkboxClass: 'icheckbox_minimal',
            radioClass: 'iradio_minimal-red',
            checkboxClass: 'icheckbox_minimal-red',
            increaseArea: '20%'
          }).on('ifChanged', function(event) {
            if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
              $scope.$apply(function() {
                return ngModelGetter.assign($scope, event.target.checked);
              });
            }
            if ($(element).attr('type') === 'radio'  && $attrs['ngModel']) {
              return $scope.$apply(function() {
                return ngModelGetter.assign($scope, value);
              });
            }
          });
        });
      }
    };
  })

/*&& $(element).attr('name') === 'iCheck' && $(element).attr('name') === 'testNormalRadio' */