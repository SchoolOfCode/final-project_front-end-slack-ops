import { fontStyle } from '../../src/Components/Comment';


describe('My First Test', function () {
    it('Basic test', function() {
      expect(true).to.equal(true)
    })
  
  });

  describe('font style', function() {
    it('Shows in italics', function() {
      expect(fontStyle).to.equal(undefined)  
    })
  });

