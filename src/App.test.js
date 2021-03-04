import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from "enzyme";
import MainList from './components/main_list';
import FilmShow from './components/film_show';
import renderer from 'react-test-renderer';

const { shallow } = Enzyme; //whatever you want to use here
const sinon = require('sinon');


it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it("renders welcome message", () => {
  const wrapper = shallow(<App />);
  const header = <h1 className="App-title">Welcome to React</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});

it('render correctly text component', () => {  
  const textlistcomponent = renderer.create(<MainList />).toJSON();
  expect(textlistcomponent).toMatchSnapshot();
});

// it('render correctly text component', () => {  
//   const textdetailcomponent = renderer.create(<FilmShow />).toJSON();
//   expect(textdetailcomponent).toMatchSnapshot();
// });

describe('<MainList />', () => {
  // it('renders three <Film /> components', () => {
  //   const wrapper = shallow(<MainList />);
  //   expect(wrapper.find(Film)).to.have.lengthOf(6);
  // });

//   it('renders an `.icon-star`', () => {
//     const wrapper = shallow(<MainList />);
//     expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
//   });

//   it('renders children when passed in', () => {
//     const wrapper = shallow((
//       <MainList>
//         <div className="main_list_container" />
//       </MainList>
//     ));
//     expect(wrapper.contains(<div className="main_list_container" />)).to.equal(true);
//   });

//   it('simulates click events', () => {
//     const onButtonClick = sinon.spy();
//     const wrapper = shallow(<Film onButtonClick={onButtonClick} />);
//     wrapper.find('button').simulate('click');
//     expect(onButtonClick).to.have.property('callCount', 1);
//   });
});