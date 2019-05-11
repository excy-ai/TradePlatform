import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';

describe('test Button', () => {
  test(' renders correctly', () => {
    const component = renderer.create(<Button>Alert</Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});