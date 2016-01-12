export function pxStyle() {
    'ngInject';
    
    return {
        restrict: 'A',
        link: ($scope, element, attributes) => {

            // Watch the px-style attribute.
            $scope.$watch(
                attributes.pxStyle,
                function watchPxStyle(newValue, oldValue) {
                    // When the hash of styles changes, we need to remove any
                    // CSS properties that are no longer relevant.
                    if (newValue && (newValue !== oldValue)) {
                        clearOldStyles(newValue, oldValue);
                    }

                    setNewStyles(newValue);
                },

                // NOTE: You have to do a DEEP watch here, otherwise, AngularJS
                // will fall into an infinite digest cycle (I assume because the
                // reference to the object keeps changing as it is eval'd).
                true
            );
            
            // I clear the styles that are no longer present in the new styles
            // collection.
            function clearOldStyles(newStyles, oldStyles) {
                for (var key in oldStyles) {
                    // Make sure the property is missing in the new sytles.
                    if (oldStyles.hasOwnProperty(key) && !newStyles.hasOwnProperty(key)) {
                        element.css(key, "");
                    }
                }
            }

            // I set the new styles on the element. Each CSS property value is
            // automatically appended with a "px" unit of measurement.
            function setNewStyles(newStyles) {
                for (var key in newStyles) {
                    if (newStyles.hasOwnProperty(key)) {
                        element.css(key, (newStyles[key] + "px"));
                    }
                }
            }
        }
    };
}