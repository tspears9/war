const expect = chai.expect;

describe('Deck', function () {
    
    it('should create a new deck', function() {
        const deck = new Deck();
        expect(deck.cards.length).to.equal(0);
        deck.createDeck();
        expect(deck.cards.length).to.equal(52);
    });
    it('should shuffle deck', function() {
        const deck = new Deck();
        deck.createDeck();
        const unshuffled = deck.cards.slice();
        deck.shuffleDeck();
        expect(deck.cards).to.not.deep.equal(unshuffled);
    });
    

    
});