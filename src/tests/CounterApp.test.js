import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp';

describe('Testing <Counter/> App', () => {

    let wrapper = shallow(<CounterApp/>);

    beforeEach(() => {
        wrapper = shallow(<CounterApp/>);
    });

    test('should show <Counter/> Component SnapShot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should show <Counter/> Component value init equal to 10', () => {
        const defaultCounter = '100';
        const wrapper = shallow(<CounterApp/>);
        const textValue = wrapper.find('h2').text();

        expect(defaultCounter).toBe(textValue);
    });
    
    test('should increse by one ', () => {
        const increseButton = wrapper.find('button').at(0);

        increseButton.simulate('click');
        const textValue = wrapper.find('h2').text().trim();

        expect(textValue).toBe('101');
    });
    
    test('should decrese by one', () => {
        const decreseButton = wrapper.find('button').at(1);

        decreseButton.simulate('click',);
        const textValue = wrapper.find('h2').text().trim();
        
        expect(textValue).toBe('99');
    });
    
    test('should reset the default value', () => {
        const wrapper = shallow(<CounterApp value = { 100 }/>);

        wrapper.find('button').at(0);
        wrapper.find('button').at(0);

        const resetButton = wrapper.find('button').at(2);
        resetButton.simulate('click');

        const textValue = wrapper.find('h2').text();

        expect(textValue).toBe('100');
    });
    

});