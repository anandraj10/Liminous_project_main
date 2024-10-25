
import React from 'react';

interface SolarEnergyPredictionProps {
    currentPrediction: number; 
}

const styles = {
    container: {
        backgroundColor: '#e9f7f9', 
        borderRadius: '10px',
        padding: '15px',
        
        maxWidth: '300px',
        margin: '20px', 
        textAlign: 'left',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    heading: {
        margin: 0,
        fontSize: '22px',
        color: '#007bff', 
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        paddingBottom: '5px',
        borderBottom: '2px solid #007bff',
    },
    text: {
        margin: '10px 0',
        color: '#333',
        fontSize: '18px',
    },
};

const SolarEnergyPrediction: React.FC<SolarEnergyPredictionProps> = ({ currentPrediction }) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Solar Energy Prediction</h2>
            <p style={styles.text}>Current Solar Prediction: <strong>{currentPrediction} MW</strong></p>
        </div>
    );
};



export default SolarEnergyPrediction;



