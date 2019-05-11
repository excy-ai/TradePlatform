import React from 'react';
import FormField from '../FormField';
import renderer from 'react-test-renderer';

describe('test FormField', () => {
  test(' renders correctly', () => {
    const component = renderer.create(<FormField/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});