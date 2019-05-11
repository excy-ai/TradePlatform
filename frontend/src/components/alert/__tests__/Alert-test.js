import React from 'react';
import Alert from '../Alert';
import renderer from 'react-test-renderer';

describe('test Alert', () => {
  test(' renders correctly', () => {
    const component = renderer.create(<Alert>Alert</Alert>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});