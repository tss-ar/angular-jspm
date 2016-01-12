/*@ngInject*/ 
export function sort() {
    return {
        restrict: 'A',
        transclude: true,
        templateUrl: '/components/sort/sort.html',
        scope: {
            column: '=',
            sortingcolumn: '=',
            sortingdirection: '=',
            sortclick: '&sort'
        },
        link: (scope, element, attrs) => {
            var insideUpdate = 0;

            element.on('click', function () {
                scope.$apply(function () {
                    insideUpdate++;

                    if (scope.column === scope.sortingcolumn) {
                        scope.sortingdirection = !scope.sortingdirection;
                    } else {
                        scope.sortingcolumn = scope.column;
                        scope.sortingdirection = false;
                    }
                });
            });

            scope.$watch('sortingdirection+sortingcolumn', function () {
                if (insideUpdate) {
                    scope.sortclick();
                    insideUpdate--;
                }
            });
        }
    };
}