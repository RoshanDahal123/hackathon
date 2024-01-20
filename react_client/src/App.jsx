import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/get');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // let postedData = ['iii', 'jjj', 'kkk', 'lll'];

  // const postData = async () => {
  //   try {
  //     const response = await axios.post(
  //       'http://localhost:5000/api/post',
  //       postedData
  //     );

  //     console.log(response.data);
  //     // After posting data, refetch to update the table
  //     fetchData();
  //   } catch (error) {
  //     console.error('Error adding data:', error.message);
  //   }
  // };

  useEffect(() => {
    const fetchDataInterval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(fetchDataInterval);
  }, []);

  return (
    <>
      <div>
        <h2>Data:</h2>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Data 1</th>
              <th>Data 2</th>
              <th>Data 3</th>
              <th>Data 4</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                {row.map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
