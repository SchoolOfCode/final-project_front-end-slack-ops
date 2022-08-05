import { mount } from 'cypress/react';
import { Typography } from '../../src/Components/Comment';


describe('Basic Test', function () {
    it('Basic test', function() {
      expect(true).to.equal(true)
    })
  
  });

  describe('Comment', function() {
    it('Checks typography', function() {
      const style={fontStyle:"italic", marginLeft: 30, borderTop:"1px solid black", marginRight: 100}
      mount(<Typography style={style}></Typography>)
    })
  });


