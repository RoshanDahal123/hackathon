import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get");
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Smoke Value</th>
              <th>Air Quality</th>
              <th>Temperature(C/F)</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
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
