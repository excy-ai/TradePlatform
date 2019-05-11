import React from 'react';
import Main from '../Main';
import renderer from 'react-test-renderer';

describe('test Main', () => {
  test(' renders correctly', () => {
    const component = renderer.create(<Main>{}</Main>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});