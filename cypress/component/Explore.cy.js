import { mount } from 'cypress/react'
import { EventCard } from '../../src/Components/EventCard'

describe('Default test', function () {
  it('Test check', function() {
    expect(true).to.equal(true)
  })

});

describe('EventCard', function() {
  it('Displays the image', function() {
    const eventObj={lng: 50.22, lat: 0.02, eventId: 2, eventTags:["animal friendly"]}
    mount(<EventCard eventObj={eventObj}></EventCard>)
  })
});
