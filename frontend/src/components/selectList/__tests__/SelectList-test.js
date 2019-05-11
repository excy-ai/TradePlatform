import React from 'react';
import renderer from 'react-test-renderer';
import SelectList from '../SelectList';

describe('test SelectList', () => {
  test(' renders correctly', () => {
    const component = renderer.create(<SelectList/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});