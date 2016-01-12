interface IJQuery extends JQuery {
    button(selector: string): JQuery;
    button(element: Element): JQuery;
    button(obj: JQuery): JQuery;
}

/*@ngInject*/
export class RcDisabledProvider {
    customDisableHandler;

    defaultDisableHandler(rootElement, isDisabled) {
        var jqElement = jQuery(rootElement);
        isDisabled = isDisabled ? isDisabled : false;

       var jqElement2 = <IJQuery>jqElement
            .find(':not([rc-disabled])')
            .filter('.btn, li, input, button, select, md-checkbox, md-select, textarea, md-radio-button, md-switch')
            .filter(':not([ng-disabled])')
            .filter(function (index) {
                return jQuery(this).parents().not(jqElement).filter('[rc-disabled]').length === 0;
            })
            .add(jqElement);

        // if the Bootstrap "Button" jQuery plug-in is loaded, use it on those
        // that have it configured
        if (jqElement2.button) {
            (<IJQuery>jqElement2.find('[data-loading-text]')).button(isDisabled ? 'loading' : 'reset');
        }

        jqElement2.toggleClass('disabled', isDisabled)
            .filter('input, button, select, md-checkbox, md-select, textarea, md-radio-button, md-switch')
            .attr('disabled', isDisabled);
    }

    onDisable(customHandler) {
        this.customDisableHandler = customHandler;
    }

    $get() {
        return {
            disable: (rootElement, isDisabled) => {
                return (this.customDisableHandler) ? this.customDisableHandler(rootElement, isDisabled) : this.defaultDisableHandler(rootElement, isDisabled);
            }
        }
    }
}