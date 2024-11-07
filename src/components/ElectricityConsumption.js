  import React, { useState } from "react";
  import '../css/Ele.css';

  function ElectricityConsumption() {
    const [power, setPower] = useState('');
    const [time, setTime] = useState('');
    const [costPerKwh, setCostPerKwh] = useState('');
    const [totalConsumption, setTotalConsumption] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [consumptionHistory, setConsumptionHistory] = useState([]);
    const [dailyLimit, setDailyLimit] = useState('');
    const [limitExceeded, setLimitExceeded] = useState(false);
    const [ninetyPercentReached, setNinetyPercentReached] = useState(false);

    const calculateConsumption = (e) => {
      e.preventDefault();

      if (power === '' || time === '' || costPerKwh === '' || dailyLimit === '') {
        alert("Please fill in all fields");
        return;
      }

      const powerFloat = parseFloat(power);
      const timeFloat = parseFloat(time);
      const costFloat = parseFloat(costPerKwh);
      const limitFloat = parseFloat(dailyLimit);

      const consumptionValue = (powerFloat / 1000) * timeFloat; // kWh
      const costValue = consumptionValue * costFloat; // cost

      const newTotalConsumption = totalConsumption + consumptionValue;
      setTotalConsumption(newTotalConsumption);
      setTotalCost(prev => prev + costValue);

      if (newTotalConsumption > limitFloat) {
        setLimitExceeded(true);
      }

      // Check if consumption exceeds 90% of the daily limit
      if (newTotalConsumption >= 0.9 * limitFloat && newTotalConsumption <= limitFloat) {
        setNinetyPercentReached(true);
      }

      setConsumptionHistory(prev => [
        ...prev,
        { power: powerFloat, time: timeFloat, consumption: consumptionValue.toFixed(2), cost: costValue.toFixed(2) }
      ]);

      setPower('');
      setTime('');
      setCostPerKwh('');
    };

    const clearHistory = () => {
      setConsumptionHistory([]);
      setTotalConsumption(0);
      setTotalCost(0);
      setLimitExceeded(false);
      setNinetyPercentReached(false);
    };

    const deleteEntry = (index) => {
      const newHistory = [...consumptionHistory];
      const removed = newHistory.splice(index, 1)[0];

      setTotalConsumption(prev => prev - parseFloat(removed.consumption));
      setTotalCost(prev => prev - parseFloat(removed.cost));
      setConsumptionHistory(newHistory);
    };

    const averageConsumption = consumptionHistory.length > 0
      ? (totalConsumption / consumptionHistory.length).toFixed(2)
      : 0;

    return (
      <div className="container">
        <h2>Electricity Consumption Calculator</h2>
        <form onSubmit={calculateConsumption}>
          <div>
            <label>Power (in Watts): </label>
            <input 
              type="number" 
              value={power}
              onChange={(e) => setPower(e.target.value)}
              placeholder="e.g. 1000"
            />
          </div>
          <div>
            <label>Time (in Hours): </label>
            <input 
              type="number" 
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="e.g. 5"
            />
          </div>
          <div>
            <label>Cost per kWh: </label>
            <input 
              type="number" 
              value={costPerKwh}
              onChange={(e) => setCostPerKwh(e.target.value)}
              placeholder="e.g. 0.12"
            />
          </div>
          <div>
            <label>Daily Consumption Limit (in kWh): </label>
            <input 
              type="number" 
              value={dailyLimit}
              onChange={(e) => setDailyLimit(e.target.value)}
              placeholder="e.g. 10"
            />
          </div>
          <button type="submit">Add Consumption</button>
        </form>

        {limitExceeded && <p className="red-warning">Warning: Daily limit exceeded! You won't earn any coins.</p>}
        {ninetyPercentReached && !limitExceeded && <p className="orange-warning">You have consumed more than 90% of your daily limit. Be careful!</p>}

        <button onClick={clearHistory}>Clear History</button>

        <h3>Total Consumption to Date:</h3>
        <p><strong>Total Electricity Consumption:</strong> {totalConsumption.toFixed(2)} kWh</p>
        <p><strong>Total Cost:</strong> ${totalCost.toFixed(2)}</p>

        <h3>Average Consumption per Session:</h3>
        <p>{averageConsumption} kWh</p>

        <h3>Consumption History:</h3>
        <ul>
          {consumptionHistory.map((entry, index) => (
            <li key={index}>
              <strong>Power:</strong> {entry.power}W, <strong>Time:</strong> {entry.time}h, 
              <strong> Consumption:</strong> {entry.consumption} kWh, <strong>Cost:</strong> ${entry.cost}
              <button onClick={() => deleteEntry(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default ElectricityConsumption;