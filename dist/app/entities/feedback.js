'use strict';
var feedbackType_1 = require('./feedbackType');
var Feedback = (function () {
    function Feedback() {
        this.isWorking = false;
    }
    Feedback.prototype.clear = function () {
        this.isWorking = false;
        this.text = '';
        this.type = feedbackType_1.FeedbackType.None;
    };
    Feedback.prototype.setNone = function (text) {
        this.setText(text);
        this.type = feedbackType_1.FeedbackType.None;
    };
    Feedback.prototype.setInfo = function (text) {
        this.setText(text);
        this.type = feedbackType_1.FeedbackType.Info;
    };
    Feedback.prototype.setError = function (text) {
        this.setText(text);
        this.type = feedbackType_1.FeedbackType.Error;
    };
    Feedback.prototype.setSuccess = function (text) {
        this.setText(text);
        this.type = feedbackType_1.FeedbackType.Success;
    };
    Feedback.prototype.isInfo = function () {
        return this.type === feedbackType_1.FeedbackType.Info;
    };
    Feedback.prototype.isError = function () {
        return this.type === feedbackType_1.FeedbackType.Error;
    };
    Feedback.prototype.isSuccess = function () {
        return this.type === feedbackType_1.FeedbackType.Success;
    };
    Feedback.prototype.setText = function (text) {
        this.text = text ? text : '';
    };
    return Feedback;
})();
exports.Feedback = Feedback;

//# sourceMappingURL=feedback.js.map
