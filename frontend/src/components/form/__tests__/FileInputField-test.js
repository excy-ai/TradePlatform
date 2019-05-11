import React from 'react';
import renderer from 'react-test-renderer';
import FileInputField from '../FileInputField';

describe('test FileInputField', () => {
  test(' renders correctly', () => {
    const component = renderer.create(<FileInputField/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});