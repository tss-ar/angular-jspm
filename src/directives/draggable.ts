export function draggable() {
    'ngInject';

    return {
        restrict: 'A',
        scope: {
            droppable: '=draggableDroppable',
            draggableX: '=',
            draggableY: '='
        },
        link: (scope, element, attrs, ngModelCtrl) => {
            var rawElement = element[0];
            var droppableElement = document.querySelector(scope.droppable);

            if (!droppableElement) {
                return;
            }

            rawElement.addEventListener('dragstart', dragstart, false);
            rawElement.addEventListener('dragend', dragend, false);

            var startEvent;
            var lastEvent;

            function dragstart(event) {
                this.classList.add('drag');

                startEvent = event;
                lastEvent = event;

                event.dataTransfer.setData("Text", 'id');

                droppableElement.addEventListener('dragover', dragOver, false);
                droppableElement.addEventListener('drop', drop, false);
            }

            function dragend(event) {
                droppableElement.removeEventListener('dragover', dragOver, false);
                droppableElement.removeEventListener('drop', drop, false);

                this.classList.remove('drag');
            }

            function dragOver(event) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }

                if (event.preventDefault) {
                    event.preventDefault();
                }

                event.dataTransfer.dropEffect = 'move';

                var newPosition = calculateNewPosition(lastEvent, event);

                reportChanges(newPosition.x, newPosition.y);

                lastEvent = event;

                return false;
            }

            function drop(event) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }

                if (event.preventDefault) {
                    event.preventDefault();
                }

                return false;
            }

            function calculateNewPosition(fromEvent, toEvent) {
                var offsetX = toEvent.clientX - fromEvent.clientX;
                var offsetY = toEvent.clientY - fromEvent.clientY;

                var style = window.getComputedStyle(rawElement, null);

                var left = parseInt(style.getPropertyValue("left"), 10);
                var top = parseInt(style.getPropertyValue("top"), 10);

                var newX = left + offsetX;
                var newY = top + offsetY;

                console.log('offsetX: ' + offsetX + ' , offsetY: ' + offsetY + ' , left: ' + left + ' , top: ' + top + ' , newX: ' + newX + ' , newY: ' + newY)

                return { x: newX, y: newY };
            }

            function reportChanges(x, y) {
                scope.$apply(function () {
                    if (angular.isDefined(scope.draggableX)) {
                        scope.draggableX = x;
                    }

                    if (angular.isDefined(scope.draggableY)) {
                        scope.draggableY = y;
                    }
                });
            }
        }
    };
}