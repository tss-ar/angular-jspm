export declare class RcDisabledProvider {
    customDisableHandler: any;
    defaultDisableHandler(rootElement: any, isDisabled: any): void;
    onDisable(customHandler: any): void;
    $get(): {
        disable: (rootElement: any, isDisabled: any) => any;
    };
}
