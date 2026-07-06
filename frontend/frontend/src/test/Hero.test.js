import React from 'react'  ;
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from "../landing_page/home/Hero";

// Test 

describe('Hero Component', () => {
    test('renders hero image', () => {
        render(<Hero />);
        
        const signupButton= screen.getByRole('button'); // img ka alt Hero Image hona chaiye
        expect(signupButton).toBeInTheDocument();// vo image honi chaiye is document mai 
      expect(signupButton).toHaveClass("bg-cyan-500 p-2 mb-5") // yehi image honi chaiye yea same source
    });
})