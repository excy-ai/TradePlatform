import React from 'react';
import renderer from 'react-test-renderer';
import UserProfile from '../UserProfile';

describe('test FormField', () => {
  test(' renders correctly', () => {
    const component = renderer.create(<UserProfile/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});