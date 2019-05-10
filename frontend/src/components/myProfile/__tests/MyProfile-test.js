import React from 'react';
import renderer from 'react-test-renderer';
import MyProfile from '../MyProfile';

describe('test FormField', () => {
  test(' renders correctly', () => {
    const component = renderer.create(<MyProfile/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});