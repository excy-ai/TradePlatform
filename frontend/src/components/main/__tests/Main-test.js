import React from 'react';
import Main from '../Main';
import renderer from 'react-test-renderer';

describe('test FormField', () => {
  test(' renders correctly', () => {
    const component = renderer.create(<Main>list</Main>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});