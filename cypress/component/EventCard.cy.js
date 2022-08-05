import { mount } from 'cypress/react'
import { EventCard } from '../../src/Components/EventCard'

describe('Initial Test', function () {
  it('Primary test', function() {
    expect(true).to.equal(true)
  })

});

describe('EventCard', function() {
  it('Displays the image', function() {
    const eventObj={lng: 50.22, lat: 0.02, eventId: 2, eventTags:["night"]}
    mount(<EventCard eventObj={eventObj}></EventCard>)
  })
});

describe('Event description', function() {
  it('Displays the description', function() {
    const eventObj={eventTags:["night"], eventDescription:["A great night out"]}
    mount(<EventCard eventObj={eventObj}></EventCard>)
  })
});



// Arrange, set-up initial app state
// Act, take an action 
// Assert, make an assertion

