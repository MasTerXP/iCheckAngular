// Code goes here

var app = angular.module("bugs_app", []);

app.directive('icheck', ['$timeout', function($timeout){
		return {
			require: 'ngModel',
			link: function($scope, element, $attrs, ngModel) {
				return $timeout(function() {
					var value = $attrs['value'];

					$scope.$watch($attrs['ngModel'], function(newValue){
						$(element).iCheck('update');
					})

					return $(element).iCheck({
						checkboxClass: 'icheckbox',
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
	}]);

function bugs_controller($scope) {
  $scope.bugs = {
      "filters": [
          { name: 'New', value: true },
          { name: 'Current', value: false },
          { name: 'Fixed', value: false },
          { name: 'Rejected', value: false },
        ]
    };

  $scope.test = function() {
    console.log($scope.bugs);
  };
}