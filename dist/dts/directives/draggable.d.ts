export declare function draggable(): {
    restrict: string;
    scope: {
        droppable: string;
        draggableX: string;
        draggableY: string;
    };
    link: (scope: any, element: any, attrs: any, ngModelCtrl: any) => void;
};
