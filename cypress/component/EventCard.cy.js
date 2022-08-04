import { mount } from 'cypress/react'
import { EventCard } from '../../src/Components/EventCard'

describe('My First Test', function () {
  it('Does Not Do Much', function() {
    expect(true).to.equal(true)
  })

});

describe('EventCard', function() {
  it('Displays the image', function() {
    const eventObj={lng: 50.22, lat: 0.02, eventId: 2, eventTags:["night"]}
    mount(<EventCard eventObj={eventObj}></EventCard>)
  })
});

describe('EventCard', function() {
 it('Brings up the lat and long', function() {
  const onClick={lng: 4, lat: 5, eventId: 5, eventObj: 5} 
  mount(<EventCard onClick={onClick}></EventCard>)
 }) 
})

// Arrange, set-up initial app state
// Act, take an action 
// Assert, make an assertion

