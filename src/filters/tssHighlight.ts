export function tssHighlight() {
    'ngInject';
    
    function escapeRegexp(queryToEscape) {
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }

    return (matchItem, query, split) => {
        if (!matchItem) {
            return matchItem;
        }

        if (!query) {
            return matchItem;
        }

        query = escapeRegexp(query);

        var querySplit = [query];

        if (split) {
            querySplit = query.split(' ');
        }

        var result = matchItem;

        for (var i = 0; i < querySplit.length; i++) {
            result = ('' + result).replace(new RegExp(querySplit[i], 'gi'), '<>$&</>');
        }

        result = result.replace(new RegExp('<>', 'gi'), '<span class="tss-highlight-match">');
        result = result.replace(new RegExp('</>', 'gi'), '</span>');

        return result;
    };
}