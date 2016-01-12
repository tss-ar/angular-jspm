export declare function feedback(): {
    restrict: string;
    require: string;
    templateUrl: string;
    scope: {
        feedback: string;
    };
    link: (scope: any, element: any, attrs: any, ngModelCtrl: any) => void;
};
