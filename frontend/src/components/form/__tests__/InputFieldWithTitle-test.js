import React from 'react';
import renderer from 'react-test-renderer';
import InputFieldWithTitle from '../InputFieldWithTitle';

describe('test FormField', () => {
  test(' renders correctly', () => {
    const component = renderer.create(<InputFieldWithTitle/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});