import { useState } from 'react';
import './App.css';

function App() {
  const [quiz, setQuiz] = useState('');
  const [lab, setLab] = useState('');
  const [finalExam, setFinalExam] = useState('');
  const [overallGrade, setOverallGrade] = useState(null);
  const [pointScale, setPointScale] = useState(null);

  const computeGrade = () => {
    const quizScore = parseFloat(quiz);
    const labScore = parseFloat(lab);
    const finalScore = parseFloat(finalExam);

    if (isNaN(quizScore) || isNaN(labScore) || isNaN(finalScore)) {
      alert('Please enter valid numbers for all fields.');
      return;
    }

    const overall = quizScore * 0.3 + labScore * 0.3 + finalScore * 0.4;
    setOverallGrade(overall.toFixed(2));
    setPointScale(get4PointScale(overall));
  };

  const get4PointScale = (grade) => {
    const ranges = [
      { min: 98.51, max: 100, value: 4 },
      { min: 96.51, max: 98.5, value: 3.75 },
      { min: 94.51, max: 96.5, value: 3.5 },
      { min: 92.51, max: 94.5, value: 3.25 },
      { min: 90.51, max: 92.5, value: 3 },
      { min: 88.51, max: 90.5, value: 2.75 },
      { min: 86.51, max: 88.5, value: 2.5 },
      { min: 84.51, max: 86.5, value: 2.25 },
      { min: 82.51, max: 84.5, value: 2 },
      { min: 80.51, max: 82.5, value: 1.75 },
      { min: 78.51, max: 80.5, value: 1.5 },
      { min: 76.51, max: 78.5, value: 1.25 },
      { min: 74.51, max: 76.5, value: 1 },
      { min: 50, max: 74.5, value: 0 },
    ];

    for (const range of ranges) {
      if (grade >= range.min && grade <= range.max) {
        return range.value;
      }
    }

    return 'Invalid';
  };

  return (
    <div className="App">
      <h1>Grade Calculator</h1>
      <div className="input-group">
        <label>Quiz Score:</label>
        <input
          type="number"
          value={quiz}
          onChange={(e) => setQuiz(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Lab Activity Score:</label>
        <input
          type="number"
          value={lab}
          onChange={(e) => setLab(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Final Exam Score:</label>
        <input
          type="number"
          value={finalExam}
          onChange={(e) => setFinalExam(e.target.value)}
        />
      </div>
      <button onClick={computeGrade}>Compute Grade</button>

      {overallGrade !== null && (
        <div className="results">
          <p><strong>Overall Grade:</strong> {overallGrade}</p>
          <p><strong>4-Point Scale Grade:</strong> {pointScale}</p>
        </div>
      )}
    </div>
  );
}

export default App;
