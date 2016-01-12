(function (FeedbackType) {
    FeedbackType[FeedbackType["None"] = 0] = "None";
    FeedbackType[FeedbackType["Info"] = 1] = "Info";
    FeedbackType[FeedbackType["Error"] = 2] = "Error";
    FeedbackType[FeedbackType["Success"] = 3] = "Success";
})(exports.FeedbackType || (exports.FeedbackType = {}));
var FeedbackType = exports.FeedbackType;
