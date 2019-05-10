import React from 'react';
import List from '../List';
import renderer from 'react-test-renderer';

describe('test FormField', () => {
  test(' renders correctly', () => {
    const component = renderer.create(<List>list</List>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});