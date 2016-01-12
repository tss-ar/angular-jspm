export declare function datetimepicker(): {
    restrict: string;
    require: string;
    scope: {
        mindate: string;
        maxdate: string;
        picktime: string;
        minviewmode: string;
        format: string;
    };
    link: (scope: any, element: any, attrs: any, ngModelCtrl: any) => void;
};
