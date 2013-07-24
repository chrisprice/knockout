describe('DOM manipulation utils', function() {

    it('Should by default parse HTML fragments into the current document', function () {
        var elems = ko.utils.parseHtmlFragment("<p>fragment</p>");
        expect(elems[0].ownerDocument).toEqual(document);
    });

    it('Should parse HTML fragments into the supplied document', function () {
        // only popups in IE 8-10 exhibit this strange behaviour
        var popup = open('about:blank', 'popup');
        var doc = popup.document;

        // ensure popup document loads
        expect(doc).not.toBeNull();

        var elems = ko.utils.parseHtmlFragment("<p>fragment</p>", doc);
        expect(elems[0].ownerDocument).toEqual(doc);

        popup.close();
    });

  //TODO: setHTML?
  //TODO: getDocument?

});