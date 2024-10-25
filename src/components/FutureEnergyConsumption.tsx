
import React from 'react';

interface FutureEnergyConsumptionProps {
    futureConsumption: number; 
}

const FutureEnergyConsumption: React.FC<FutureEnergyConsumptionProps> = ({ futureConsumption }) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Future Energy Consumption</h2>
            <p style={styles.text}>Predicted Future Consumption: <strong>{futureConsumption} MW</strong></p>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#f9e9e9', 
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
        color: '#d9534f', 
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        paddingBottom: '5px',
        borderBottom: '2px solid #d9534f',
    },
    text: {
        margin: '10px 0',
        color: '#333',
        fontSize: '18px',
    },
};

export default FutureEnergyConsumption;

