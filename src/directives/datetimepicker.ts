export function datetimepicker() {
    'ngInject';

    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            mindate: '=datetimepickerMindate',
            maxdate: '=datetimepickerMaxdate',
            picktime: '=datetimepickerPicktime',
            minviewmode: '=datetimepickerMinviewmode',
            format: '=datetimepickerFormat'
        },
        link: (scope, element, attrs, ngModelCtrl) => {
            console.warn('directive tss:datetimepicker is now deprecated.');
            
            var outsideUpdate = false;

            var picktime = angular.isDefined(scope.picktime) ? scope.picktime : true;

            element.datetimepicker({
                pickTime: picktime,
                language: 'es',
                showToday: true,
                useCurrent: false,
                minViewMode: scope.minviewmode,
                format: scope.format,
            }).on("dp.change", function (e) {
                if (outsideUpdate) {
                    setDate(e.date);
                    return;
                }

                scope.$apply(function () {
                    setDate(e.date);
                });
            }).on("change", function (e) {
                var date = element.data("DateTimePicker").getDate();

                if (outsideUpdate) {
                    setDate(date);
                    return;
                }

                scope.$apply(function () {
                    setDate(date);
                });
            });

            ngModelCtrl.$render = function () {
                outsideUpdate = true;
                element.data("DateTimePicker").setDate(ngModelCtrl.$modelValue);
                outsideUpdate = false;
            };

            scope.$watch('mindate', function () {
                if (scope.mindate !== null) {
                    element.data("DateTimePicker").setMinDate(scope.mindate);
                } else {
                    element.data("DateTimePicker").setMinDate(new Date(0));
                }
            });

            scope.$watch('maxdate', function () {
                if (scope.maxdate !== null) {
                    element.data("DateTimePicker").setMaxDate(scope.maxdate);
                } else {
                    element.data("DateTimePicker").setMaxDate(new Date().setFullYear(new Date().getFullYear() + 100));
                }
            });

            function setDate(date) {
                if (date !== null) {
                    ngModelCtrl.$setViewValue(new Date(date.toJSON()));
                } else {
                    ngModelCtrl.$setViewValue(null);
                }
            }

            ////    dateFromPicker.children('input.form-control').click(function () {
            ////        dateFromPicker.data("DateTimePicker").show();
            ////    });
        }
    };
}