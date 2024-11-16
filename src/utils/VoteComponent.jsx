import React, { useEffect, useState } from 'react';
import { getFirestore, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/authContext';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

function VoteComponent() {

    return (
    <div>
        VoteComponent
    </div>
    );
}

export default VoteComponent;
