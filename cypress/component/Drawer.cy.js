import { mount } from 'cypress/react';
import Drawer from '../../src/Components/Drawer';


// Arrange, set-up initial app state
// Act, take an action 
// Assert, make an assertion

describe('Swipeable Drawer', function() {
    it('Checks for swipeable drawer', function() {
        const sx={maxWidth:"110%", backgroundColor:"something", color:"else", display:"flex", justifyContent:"whatever", alignItems:"Okay", margin:"somethingpx something elsepx", padding:"1px 2px 3px 4px", textAlign: "your mom", borderRadius:"bite me"}
      mount(<Drawer sx={sx}></Drawer>)
    })
  });