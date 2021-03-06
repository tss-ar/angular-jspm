
focusMe.$inject = ['$timeout'];function focusMe($timeout) {
    'ngInject';
    return {
        scope: { trigger: '=focusMe' },
        link: function (scope, element) {
            scope.$watch('trigger', function (value) {
                if (value) {
                    $timeout(function () {
                        element[0].focus();
                    }, 1500);
                }
            });
        }
    };
}
exports.focusMe = focusMe;
