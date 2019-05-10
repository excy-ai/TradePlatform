import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../Form';

describe('test FormField', () => {
  test(' renders correctly', () => {
    const component = renderer.create(<Form/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});