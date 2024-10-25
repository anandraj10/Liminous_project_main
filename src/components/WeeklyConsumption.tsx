import React from 'react';

interface WeeklyConsumptionProps {
    weeklyConsumption: number;
}

const weeklyStyles = {
    container: {
        backgroundColor: '#fff7e6',
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
        color: '#ff8c00',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        paddingBottom: '5px',
        borderBottom: '2px solid #ff8c00',
    },
    text: {
        margin: '10px 0',
        color: '#333',
        fontSize: '18px',
    },
};

const WeeklyConsumption: React.FC<WeeklyConsumptionProps> = ({ weeklyConsumption }) => {
    return (
        <div style={weeklyStyles.container}>
            <h2 style={weeklyStyles.heading}>Per Week Expected Cost</h2>
            <p style={weeklyStyles.text}>Weekly Consumption: <strong>{weeklyConsumption} ₹</strong></p>
        </div>
    );
};

export default WeeklyConsumption;
