export declare function sort(): {
    restrict: string;
    transclude: boolean;
    templateUrl: string;
    scope: {
        column: string;
        sortingcolumn: string;
        sortingdirection: string;
        sortclick: string;
    };
    link: (scope: any, element: any, attrs: any) => void;
};
