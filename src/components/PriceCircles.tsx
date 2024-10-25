import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 

interface PriceCircleProps {
  price: number;
  label: string;
  color: string;
};

const PriceCircles: React.FC<PriceCircleProps> = ({ price, label, color }) => {

  return (
    <div style={{ width: '150px', margin: '20px', textAlign: 'center' }}> 
   
    <CircularProgressbar
      value={price}
      maxValue={10}
      text={`₹${price}`}  
      styles={buildStyles({
        pathColor: color,
        textColor: '#000',   
        trailColor: '#f4f4f4',
        textSize: '16px',    
      })}
    />
    
    <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '14px' }}>
      {label}
    </p>
  </div>
  )
}

export default PriceCircles;
