/*@ngInject*/
var RcDisabledProvider = (function () {
    function RcDisabledProvider() {
    }
    RcDisabledProvider.prototype.defaultDisableHandler = function (rootElement, isDisabled) {
        var jqElement = jQuery(rootElement);
        isDisabled = isDisabled ? isDisabled : false;
        var jqElement2 = jqElement
            .find(':not([rc-disabled])')
            .filter('.btn, li, input, button, select, md-checkbox, md-select, textarea, md-radio-button, md-switch, md-autocomplete')
            .filter(':not([ng-disabled])')
            .filter(function (index) {
            return jQuery(this).parents().not(jqElement).filter('[rc-disabled]').length === 0;
        })
            .add(jqElement);
        // if the Bootstrap "Button" jQuery plug-in is loaded, use it on those
        // that have it configured
        if (jqElement2.button) {
            jqElement2.find('[data-loading-text]').button(isDisabled ? 'loading' : 'reset');
        }
        jqElement2.toggleClass('disabled', isDisabled)
            .filter('input, button, select, md-checkbox, md-select, textarea, md-radio-button, md-switch, md-autocomplete')
            .attr('disabled', isDisabled);
    };
    RcDisabledProvider.prototype.onDisable = function (customHandler) {
        this.customDisableHandler = customHandler;
    };
    RcDisabledProvider.prototype.$get = function () {
        var _this = this;
        return {
            disable: function (rootElement, isDisabled) {
                return (_this.customDisableHandler) ? _this.customDisableHandler(rootElement, isDisabled) : _this.defaultDisableHandler(rootElement, isDisabled);
            }
        };
    };
    return RcDisabledProvider;
})();
exports.RcDisabledProvider = RcDisabledProvider;
