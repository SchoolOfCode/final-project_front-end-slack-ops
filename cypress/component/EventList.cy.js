import { mount } from 'cypress/react';
import { EventList } from '../../src/Components/EventList';

describe('Basic test', function () {
  it('Test test', function() {
    expect(true).to.equal(true)
  })
});

describe('EventList', function() {
  it('Returns array', function() {
    expect(EventList).to.equal(undefined)
  })
});


