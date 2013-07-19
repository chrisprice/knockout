describe('DOM manipulation utils', function() {

    it('Should by default parse HTML fragments into the current document', function () {
        // store the jQuery reference so we can poke all the code paths
        var jQueryOriginal = window.jQuery;

// can't make this next block work with innerShiv
// div.appendChild(window['innerShiv'](markup));
//        delete window.jQuery;
//        var elems = ko.utils.parseHtmlFragment("<p>fragment</p>");
//        expect(elems[0].ownerDocument).toEqual(document);

        window.jQuery = {
            parseHTML: function(html, doc) {
                return [ { ownerDocument: doc } ];
            }
        };
        elems = ko.utils.parseHtmlFragment("<p>fragment</p>");
        expect(elems[0].ownerDocument).toEqual(document);

        window.jQuery = {
            clean: function(html, doc) {
                return [ { ownerDocument: doc } ];
            }
        };
        elems = ko.utils.parseHtmlFragment("<p>fragment</p>");
        expect(elems[0].ownerDocument).toEqual(document);

        // restore the jQuery reference
        window.jQuery = jQueryOriginal;
    });

    it('Should parse HTML fragments into the supplied document', function () {
        var popup = open('about:blank', 'popup');
        var doc = popup.document;

        // ensure popup document loads
        expect(doc).not.toBeNull();

        // store the jQuery reference so we can poke all the code paths
        var jQueryOriginal = window.jQuery;

// can't make this next block work with innerShiv
// div.appendChild(window['innerShiv'](markup));
//        delete window.jQuery;
//        var elems = ko.utils.parseHtmlFragment("<p>fragment</p>", doc);
//        expect(elems[0].ownerDocument).toEqual(doc);

        window.jQuery = {
            parseHTML: function(html, doc) {
                return [ { ownerDocument: doc } ];
            }
        };
        elems = ko.utils.parseHtmlFragment("<p>fragment</p>", doc);
        expect(elems[0].ownerDocument).toEqual(doc);

        window.jQuery = {
            clean: function(html, doc) {
                return [ { ownerDocument: doc } ];
            }
        };
        elems = ko.utils.parseHtmlFragment("<p>fragment</p>", doc);
        expect(elems[0].ownerDocument).toEqual(doc);

        // restore the jQuery reference
        window.jQuery = jQueryOriginal;

        popup.close();
    });

});