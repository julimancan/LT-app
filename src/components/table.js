import { useState, useEffect } from 'react';

const Table = ({  }) => {
  
  const [dbData, setDbData] = useState([]);
  const [headData, setHeadData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/read')
    .then(res => res.json())
    .then((data => {
      setDbData(data)
      setHeadData(Object.keys(data[0]).filter(
        (item) => item !== "id"))
    }))
  }, [])

  // const bodyDataArray = dbData ? Object.values(dbData[0]).filter((item) => item !== 0) : "";
  console.log('dbData', dbData)
  return (
    <dir>
      <table className="table-auto">
        <thead>
          <tr >
            {headData.map(title => (
              <th className="p-1 text-left text-white border-2">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            {bodyDataArray.map(value => (
            <td className="p-1 text-left text-white border-2" >{value}</td>
           ))}     
          </tr> */}
          {/* {dbData && dbData.map(item => (
            <tr> 
              <td>{item}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </dir>
  );
};

export default Table;