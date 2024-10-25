import React, { useEffect, useRef, useState } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, BarController } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ExcelReader from '../utils/ExcelReader';


ChartJS.register(BarElement, CategoryScale, LinearScale, BarController);

const DailyUsageGraph: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [chartData, setChartData] = useState<any>(null);


  const handleDataLoad = (data: any) => {
    console.log('Excel Data:', data); 
    const labels: string[] = [];
    const dayUsage: number[] = [];
  
    data.forEach((row: any) => {
      labels.push(row.Day); 
      dayUsage.push(Number(row.Consumption_Per_Day)); 
    });
  
    setChartData({
      labels,
      datasets: [
        {
          label: 'Day',
          data: dayUsage,
          backgroundColor: 'green',
        },
      ],
    });
  };

  useEffect(() => {

    if (chartData && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 200, 
            type: 'linear', 
          },
        },
      };

      const chart = new ChartJS(ctx!, {
        type: 'bar', 
        data: chartData,
        options,
      });

      return () => {
        chart.destroy();
      };
    }
  }, [chartData]);

  return (
    <div style={{ width: '90%', height: '400px', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Daily Electricity Usage</h3>
      <canvas ref={chartRef} />
      <ExcelReader onDataLoad={handleDataLoad} />
    </div>
  );
};

export default DailyUsageGraph;
