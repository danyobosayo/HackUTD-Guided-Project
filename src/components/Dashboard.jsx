// the data import statement allows us to access the json file we downloaded earlier. you can modify the content of the data such as different names, items, and pictures. 
// But make sure you understand how the key-value structure of this document works. Altering the keys will change how we 'access' the data.

import { useState } from 'react';
import data from '../data/data.json'; 
import Card from './Card';

function Dashboard() {
    // Insert state to store items, initialized with data from JSON file
    return (
        <div className="relative my-12 flex flex-col items-center">
            {/* TITLE */}
            <h1 className="poppins-bold flex-row text-2xl">Who's Invited?</h1>
            <hr className="mb-4 mt-2 w-1/3 border-black" />

            {/* Event List Grid */}
            <div className="relative z-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Map through items and render a Card component for each in the section below */}
                <Card 
                img='/images/sample1.webp'
                name='Alan Roybal'
                bringing='Fruit'
                status='Going'
                />
            </div>
        </div>
    );
}

export default Dashboard;
