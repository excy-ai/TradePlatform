import React from 'react';
import ListItem from '../ListItem';
import renderer from 'react-test-renderer';

describe('test ListItem', () => {
  test(' renders correctly', () => {
    const component = renderer.create(<ListItem>listItem</ListItem>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});