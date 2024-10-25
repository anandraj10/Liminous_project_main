import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import DailyUsageGraph from './components/DailyUsageGraph.tsx';
import ElectricityPrices from './components/ElectricityPrices.tsx';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './components/Home.tsx';
import Footer from './components/Footer.tsx';
import SolarEnergyPrediction from './components/SolarEnergyPrediction.tsx';
import FutureEnergyConsumption from './components/FutureEnergyConsumption.tsx';
import WeeklyConsumption from './components/WeeklyConsumption.tsx';

const App: React.FC = () => {
  const currentSolarPrediction = Math.floor(Math.random() * 100) + 1; 
  const futureEnergyConsumption = Math.floor(Math.random() * 100) + 1; 
  const weeklyConsumption = Math.floor(Math.random() * 500) + 1; 

  const styles = {
    flexContainer: {
      display: 'flex',
      justifyContent: 'space-between', 
      margin: '20px 0', 
    },
  };

  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <DailyUsageGraph/>
      <ElectricityPrices/>
      <div style={styles.flexContainer}>
        <SolarEnergyPrediction currentPrediction={currentSolarPrediction} />
        <WeeklyConsumption weeklyConsumption={weeklyConsumption} /> {/* Use the defined variable */}
        <FutureEnergyConsumption futureConsumption={futureEnergyConsumption} />
      </div>
      <Footer/>
    </div>
  )
}

export default App;
