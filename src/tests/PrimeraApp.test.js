import '@testing-library/jest-dom';
import React from 'react';
//import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

import { shallow } from 'enzyme';


describe('Test Component <PrimeraApp/>', () => {

    // test("Should show the message" , () => {
    //     const greet = "Brenda Marlen";
    //     const { getByText } = render(<PrimeraApp greet={greet}/>);
    //     expect(getByText(greet)).toBeInTheDocument();
    // });

    test("Should show the <PrimeraApp/> correctly", () => {
        const greet = "Brenda Marlen";

        const wrapper = shallow(<PrimeraApp greet={ greet }/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('should show the subtitle message correctly', () => {
        const greet = "Brenda Marlen";
        const subtitle = 'Learning React!';
        const wrapper = shallow(<PrimeraApp greet= { greet } subtitle= {subtitle}/>); 
        const validate = wrapper.find('p').text();

        expect(subtitle).toBe(validate);

    });
    

});