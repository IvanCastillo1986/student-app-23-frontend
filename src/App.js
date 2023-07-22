import { useEffect, useState } from 'react';

import StudentList from './components/studentList/StudentList';
import Loading from './components/loading/Loading';
import Error from './components/error/Error';
import './App.css';

const API_URL = 'http://localhost:7777';

// LEFT OFF VIDEO AT 2:02
function App() {

  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log('<App /> useEffect fired');

    async function fetchData() {
      try {

        setLoading(true);
        
        const response = await fetch(`${API_URL}/students`);
        const json = await response.json();
        console.log('<App /> useEffect() fetched data', json);

        const { data, error } = json;

        // If server response is good, else handle server error
        if (response.ok) {
          setStudentData(data);
          setLoading(false);
        } else {
          setError(error)
          setLoading(false)
        }
        
      } catch(err) {
        setLoading(false)
        setError(err.message)
        console.log(`<App /> useEffect error: ${err.message}`);
      }
    };
    fetchData();
    
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <StudentList studentData={studentData} />;
    }
  };


  console.log(`<App /> rendered)! num of students: ${studentData.length}, loading=${loading}`);
  return (
    <div className="App">
      
      {renderContent()}

      {/* {loading ? <Loading /> : <StudentList studentData={studentData} />} */}
    </div>
  );
};

export default App;



/* 

When we first load our website, React renders the top-level component App, it registers a state variable called 
loading set to true. React knows that there's a callback in useEffect that we will call after App is finished 
rendering (so it will hold it aside in memory somewhere). Before rendering the html, we will log 
  console.log(`<App /> rendered)! num of students: ${studentData.length}, loading=${loading}`);
into the console. 

Then, in the course of rendering, we hit the ternary conditional in the return statement. If loading is true, we 
return the Loading component, else we return our StudentList. 
When we retrieve the asynchronous data from the API request, we set loading back to false. State change triggers 
re-render, and React's next job is to figure out if needs to fire any useEffect callbacks, and does it need to 
re-render any components. 
React will always invoke the callback in the useEffect hook one time after the component renders. 
Afterwards, it depends on the content inside of the dependency array. If it's empty, useEffect will never trigger again.

The return statement sees that loading is now false, so it updates the DOM to render StudentList instead.

*/