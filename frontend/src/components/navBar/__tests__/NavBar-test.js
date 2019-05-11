// import React from 'react';
// import renderer from 'react-test-renderer';
// import NavBar from '../NavBar';
// import configureStore from 'redux-mock-store'
// const initialState = {
//   authenticated: false
// };
// const mockStore = configureStore();
// let store;
// describe('test NavBar', () => {
//   beforeEach(()=>{store = mockStore(initialState)});
//   test(' renders correctly', () => {
//     const component = renderer.create(<NavBar store={store}/>);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });//FIXME (mock store)