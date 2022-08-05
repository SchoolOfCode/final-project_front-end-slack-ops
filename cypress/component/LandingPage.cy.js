import { mount } from 'cypress/react';
//import LandingPage from '../../src/Components/Home';

// Arrange, set-up initial app state
// Act, take an action 
// Assert, make an assertion

describe('Logo', function() {
    it('Checks logo format', function() {
        const width={width:"40%", height:"auto",src:"logo", alt:"turnup logo", className:"logo"}
      mount(<img alt="test" width={width}></img>)
    })
  });

