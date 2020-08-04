import React from 'react';
import { render } from '@testing-library/react';
import App, { Link, AppClass2 } from './App';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()})

// describe('<App />', () => {
//   const wrapper = shallow(<App />)
  
//   it('find class name', () => {
//     expect(wrapper.find('.App-intro').exists()).toBe(true)
//   })
//   it('ul has 3 children', () => {
//     expect(wrapper.find('ul').children().length).toBe(3)
//   })
//   it('ul has class', () => {
//     expect(wrapper.find('ul').hasClass('ul-list')).toBe(true) //has class method returns true or false if class exists
//   })
//   it('h1 has correct text', () => {
//     expect(wrapper.find('h1').text()).toBe('Welcome to React') //text method checks the text
//   })
//   it('matches the snapshot', () => {
//     const tree = shallow(<App />)
//     //expect(toJson(tree)).toMatchSnapshot()
//     expect(tree).toMatchSnapshot()
//   })
// })

// describe('<Link />', () => {
//   it('link component accepts address prop', () => {
//     const wrapper = shallow(<Link address='www.google.com' />)
//     expect(wrapper.instance().props.address).toBe('www.google.com') //this tests the instance of the link prop
//   })

//   it('a tag node renders href correctly', () => {
//     const wrapper = shallow(<Link address='www.google.com' />)
//     expect(wrapper.props().href).toBe('www.google.com') //this test makes sure the href is using the correct prop value
//   })

//   it('returns null with true hide prop', () => {
//     const wrapper = shallow(<Link hide={false} />)
//     expect(wrapper.find('a').length).toBe(1)
//     wrapper.setProps({ hide: true }) //set props passes new props into a component and causes a rerender
//     expect(wrapper.get(0)).toBeNull()
//   })
// })

// //fully render react components with enzyme
// describe('<App />', () => {
  
//   it('h1 has correct text', () => {
//     const wrapper = mount(<App />)
//     expect(wrapper.find('h1').text()).toBe('Welcome to React') //text method checks the text
//     wrapper.unmount()
//   })
//   it('matches the snapshot', () => {
//     // const tree = mount(<App />)
//     // expect(tree).toMatchSnapshot()
//     // wrapper.unmount()
//   })
//   it('on button click changes p text', () => {
//     const wrapper = shallow(<App />)
//     const button = wrapper.find('button')
//     expect(wrapper.find('.button-state').text()).toBe('No!')

//     button.simulate('click')
//     expect(wrapper.find('.button-state').text()).toBe('Yes!')
//   })
//   it('on input change, changes text', () => {
//     const wrapper = shallow(<App />)
//     const input = wrapper.find('input')
//     expect(wrapper.find('h2').text()).toBe('')
//     input.simulate('change', {currentTarget: {value: 'Mark'}})
//     expect(wrapper.find('h2').text()).toBe('Mark')
//   })

//   it('updates className with new State', () => {
//     const wrapper = shallow(<App />)
//     expect(wrapper.find('.blue').length).toBe(1)
//     expect(wrapper.find('.red').length).toBe(0)
//     wrapper.setState({mainColor: 'red'}) //CAN ONLY BE CALLED ON CLASS COMPONENTS!
//     expect(wrapper.find('.blue').length).toBe(0)
//     expect(wrapper.find('red').length).toBe(1)
//   })
// })

describe('<AppClass /> component lifecycle methods', () => {
  it('calls componentDidMount', () => {
    jest.spyOn(AppClass2.prototype, 'componentDidMount')
    const wrapper2 = shallow(<AppClass2 />)
    expect(AppClass2.prototype.componentDidMount.mock.calls.length).toBe(1)
    console.log(wrapper2.debug());
    console.log(wrapper2.html());
    // expect(wrapper2.find('p').legnth).toBe('componentDidMount')
  })

  //testing react component methods with enzyme
  it('handleStrings function returns correctly', () => {
    const wrapper = shallow(<AppClass2 />)
    const trueReturn = wrapper.instance().handleStrings('hello world') //gives us access to its properties.. needs to be a class!
    const falseReturn = wrapper.instance().handleStrings('')
    expect(trueReturn).toBe(true)
    expect(falseReturn).toBe(false)

  })
})

// describe('<TodoList />', () => {
//   it('calls addTodo Redux action creator with button click', () => {
//     const props = {
//       addTodo: jest.fn(),
//       todos: []
//     }
//     const wrapper = shallow(<TodoList {...props} />)
//     wrapper.find('input').simulate('change', {currentTarget: {value: 'Buy Groceries'}})
//     wrapper.find('.todo--button').simulate('click')

//     expect(props.addTodo).toHaveBeenCalledWith({text: 'Buy Groceries'})
//   })

//   it('calls removeTodo action creator on li click', () => {
//     const props = {
//       removeTodo: jest.fn(),
//       todos: [{text: 'Buy groceries'}, {text: 'Change Oil'}]
//     }
//     const wrapper = shallow(<TodoList {...props} />)
//     wrapper.find('li').at(0).simulate('click')

//     expect(props.removeTodo).toHaveBeenCalledWith(0)
//   })

//   it('matches snapshot', () => {
//     const props = {
//       todos: []
//     }

//     const wrapper = shallow(<TodoList {...props} />)
//     expect(toJson(wrapper)).toMatchSnapshot()
//   })
// })


// const updateInput = (wrapper, instance, newValue) => {
//   const input = wrapper.find(instance)
//   input.simulate('change', {
//     currentTarget: {value: newValue}
//   })
//   return wrapper.find(instance)
// }
// describe('<Form />', () => {
//   //opted in by default
//   test('receive promotions default is true', () => {
//     const wrapper = shallow(<Form />)
//     const promotionInput = wrapper.find('[data-testid="checked"]')
//     expect(promotionInput.props().checked).toBe(true)
//   })
//   // actually input their info
//   test('allows user to fill out form', () => {
//     const wrapper = shallow(<Form />)
//     const name = updateInput(wrapper, '[data-testid="name"]', 'Mark')
//     const email = updateInput(wrapper, '[data-testid="name"]', 'm@m.com')
//     const number = updateInput(wrapper, '[data-testid="name"]', '1234')
//     wrapper.find('[data-testid="checked"]').simulate('click')

//     expect(name.props().value).toBe('Mark')
//     expect(email.props().value).toBe('m@m.com')
//     expect(number.props().value).toBe('1234')
//     expect(Wrapper.find('data-testid="checked"]').props().checked).toBe(false)
//   })
//   // submits the form, calls API
//   test('submits the form', () => {
//     jest.spyOn(api, 'addUSer').mockImplementation(() => Promise.resolve({data: 'New user added'}))
//     const wrapper = shallow(<Form />)
//     const name = updateInput(wrapper, '[data-testid="name"]', 'Mark')
//     const email = updateInput(wrapper, '[data-testid="name"]', 'm@m.com')
//     const number = updateInput(wrapper, '[data-testid="name"]', '1234')
//     wrapper.find('[data-testid="addUserForm"]').simulate('submit', { preventDefault: () => {}})

//     expect(api.addUser).toHaveBeenCalledWith('Mark', 'm@m.com', '1234')
//   })

//   // matches snapshot 
//   test('matches saved snapshot', () => {
//     const wrapper = shallow(<Form />)
//     expect(toJson(wrapper)).toMatchSnapshot()
//   })
// })