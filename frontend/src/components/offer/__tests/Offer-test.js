import React from 'react';
import renderer from 'react-test-renderer';
import Offer from '../Offer';

describe('test FormField', () => {
  test(' renders correctly', () => {
    const component = renderer.create(<Offer type={'sended'}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});