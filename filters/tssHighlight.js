function tssHighlight() {
    'ngInject';
    function escapeRegexp(queryToEscape) {
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    return function (matchItem, query, split) {
        if (!matchItem) {
            return matchItem;
        }
      
        var result = matchItem.replace(/</g, '&lt;').replace(/>/, '&gt;');
       
        if (!query) {
            return result;
        }
      
        query = escapeRegexp(query);
      
        var querySplit = [query];
      
        if (split) {
            querySplit = query.split(' ');
        }
      
        for (var i = 0; i < querySplit.length; i++) {
            result = ('' + result).replace(new RegExp(querySplit[i], 'gi'), '<>$&</>');
        }
      
        result = result.replace(new RegExp('<>', 'gi'), '<span class="tss-highlight-match">');
        result = result.replace(new RegExp('</>', 'gi'), '</span>');
     
        return result;
    };
}
exports.tssHighlight = tssHighlight;
