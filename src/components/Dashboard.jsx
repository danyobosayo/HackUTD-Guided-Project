import { useState } from 'react';
import data from '../data/data.json';
import Card from './Card';

function Dashboard() {
    // State to store items, initialized with data from JSON file
    const [items, setItems] = useState(data);

    return (
        <div className="relative my-12 flex flex-col items-center">
            {/* TITLE */}
            <h1 className="poppins-bold flex-row text-2xl">Who's Invited?</h1>
            <hr className="mb-4 mt-2 w-1/3 border-black" />

            {/* Event List Grid */}
            <div className="relative z-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Map through items and render a Card component for each */}
                {items.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        img={item.img}
                        date={item.date}
                        status={item.status}
                        bringing={item.bringing}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;