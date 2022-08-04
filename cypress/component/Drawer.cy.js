import { mount } from 'cypress/react';
import Drawer from '../../src/Components/Drawer';
import { cy } from 'cypress/react';


cy.contains('What is this?')
.should('have.onClick', 'handleOpen')
.invoke('Button is okay');





// Arrange, set-up initial app state
// Act, take an action 
// Assert, make an assertion