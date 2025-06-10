function TDEECalculator() {
  const [height, setHeight] = React.useState('');
  const [heightUnit, setHeightUnit] = React.useState('inches');
  const [weight, setWeight] = React.useState('');
  const [weightUnit, setWeightUnit] = React.useState('lbs');
  const [gender, setGender] = React.useState('male');
  const [workoutFrequency, setWorkoutFrequency] = React.useState('sedentary');
  const [result, setResult] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let h = parseFloat(height);
    let w = parseFloat(weight);
    if (heightUnit === 'inches') h *= 2.54;
    if (weightUnit === 'lbs') w *= 0.453592;
    const tdee = window.calculateTDEE(h, w, gender, workoutFrequency);
    const proteinCalories = tdee * 0.3;
    const fatCalories = tdee * 0.25;
    const carbsCalories = tdee * 0.45;
    setResult({
      tdee,
      proteinGrams: proteinCalories / 4,
      fatGrams: fatCalories / 9,
      carbsGrams: carbsCalories / 4,
      proteinCalories,
      fatCalories,
      carbsCalories
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="calorieFormReact">
        <div>
          <label>Height:</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)} required />
          <select value={heightUnit} onChange={e => setHeightUnit(e.target.value)}>
            <option value="inches">Inches</option>
            <option value="cm">Cm</option>
          </select>
        </div>
        <div>
          <label>Weight:</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)} required />
          <select value={weightUnit} onChange={e => setWeightUnit(e.target.value)}>
            <option value="lbs">Lbs</option>
            <option value="kg">Kg</option>
          </select>
        </div>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={e => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Workout Frequency:</label>
          <select value={workoutFrequency} onChange={e => setWorkoutFrequency(e.target.value)}>
            <option value="sedentary">Sedentary (little to no exercise)</option>
            <option value="lightlyActive">Lightly Active (1-3 days per week)</option>
            <option value="moderatelyActive">Moderately Active (3-5 days per week)</option>
            <option value="veryActive">Very Active (6-7 days per week)</option>
            <option value="extraActive">Extra Active (physical job or training twice a day)</option>
          </select>
        </div>
        <button type="submit">Calculate Recommended Daily Caloric Intake</button>
      </form>
      {result && (
        <div id="result">
          <p>Your Total Daily Energy Expenditure (TDEE) is: <strong>{result.tdee.toFixed(2)}</strong> calories per day.</p>
          <p>Recommended Macronutrient Breakdown:</p>
          <ul>
            <li><strong>Protein:</strong> {result.proteinGrams.toFixed(2)} grams ({result.proteinCalories.toFixed(2)} calories)</li>
            <li><strong>Fat:</strong> {result.fatGrams.toFixed(2)} grams ({result.fatCalories.toFixed(2)} calories)</li>
            <li><strong>Carbohydrates:</strong> {result.carbsGrams.toFixed(2)} grams ({result.carbsCalories.toFixed(2)} calories)</li>
          </ul>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<TDEECalculator />, document.getElementById('tdee-root'));
