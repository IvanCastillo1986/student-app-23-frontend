import { useEffect, useState } from 'react';

import StudentList from './components/studentList/StudentList';
import './App.css';

const API_URL = 'http://localhost:7777';

// LEFT OFF VIDEO AT 1:05
function App() {

  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    console.log('<App /> useEffect fired');
    
    async function fetchData() {
      // You can await here
      const res = await fetch(`${API_URL}/students`);
      const json = await res.json();
      console.log('<App /> useEffect() fetched data', json);

      setStudentData(json.data);
    };
    fetchData();

  }, []);


  console.log(`<App /> rendered)! num of students: ${studentData.length}`);
  return (
    <div className="App">
      <StudentList studentData={studentData} />
    </div>
  );
};

export default App;
