export function focusMe($timeout) {
    'ngInject';

    return {
        scope: { trigger: '=focusMe' },
        link: (scope, element) => {
            scope.$watch('trigger', function (value) {
                if (value) {
                    $timeout(function () {
                        element[0].focus();
                    }, 2000);
                }
            });
        }
    };
}