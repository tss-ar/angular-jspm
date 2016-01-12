export function removeHref() {
    'ngInject';
    
    return {
        restrict: 'A',
        link: (scope, element, attr, controller) => {
            scope.$watch(function () {
                return element[0].innerHTML;
            },
                function (val) {
                    $('ul.pagination li a[href]').each(function (index) {
                        $(this).removeAttr('href');
                    });
                    $('ul.uib-pagination li a[href]').each(function (index) {
                        $(this).removeAttr('href');
                    });
                    $('a[href].accordion-toggle').each(function (index) {
                        $(this).removeAttr('href');
                    });
                    $('a[href].uib-accordion-toggle').each(function (index) {
                        $(this).removeAttr('href');
                    });
                    $('[uib-typeahead-popup] a[href]').each(function (index) {
                        $(this).removeAttr('href');
                    });
                });
        }
    };
}