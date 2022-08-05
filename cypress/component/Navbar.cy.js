import { mount } from 'cypress/react';
import Button from '../../src/Components/Navbar';


// Arrange, set-up initial app state
// Act, take an action 
// Assert, make an assertion

describe('Button', function() {
    it('Checks button format', function() {
        const sx={color:"white", fontFamily:"Raleway", fontWeight:"Bold"}
      mount(<Button sx={sx}></Button>)
    })
  });

  describe("On Menu Click", function() {
    it('Checks navbar loads on click', function(){
        const navbar={getElementbyId:("navigation-bar"), responsive_class_name:"responsive", toggle:("class name") }
        mount(<nav navbar={navbar}></nav>)
    })
  });