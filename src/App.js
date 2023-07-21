import { useEffect, useState } from 'react';

import StudentList from './components/studentList/StudentList';
import Loading from './components/loading/Loading';
import './App.css';

const API_URL = 'http://localhost:7777';

// LEFT OFF VIDEO AT 1:18
function App() {

  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('<App /> useEffect fired');

    async function fetchData() {

      setLoading(true)

      const res = await fetch(`${API_URL}/students`);
      const json = await res.json();
      console.log('<App /> useEffect() fetched data', json);
      
      setStudentData(json.data);
      setLoading(false)
    };
    fetchData();
    
  }, []);


  console.log(`<App /> rendered)! num of students: ${studentData.length}, loading=${loading}`);
  return (
    <div className="App">

      {loading ? <Loading /> : <StudentList studentData={studentData} />}
    </div>
  );
};

export default App;
