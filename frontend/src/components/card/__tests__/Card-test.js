import React from 'react';
import Card from '../Card';
import renderer from 'react-test-renderer';

describe('test FormField', () => {
  test(' renders correctly', () => {
    const component = renderer.create(<Card>Alert</Card>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});