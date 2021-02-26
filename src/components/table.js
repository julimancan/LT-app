
 const Table = ({ tableData }) => {
 

  const headDataArray = Object.keys(tableData[0]).filter(
    (item) => item !== "id"
  );

  const bodyDataArray = Object.values(tableData[0]).filter((item) => item !== 0);
  
   return (
    <dir>
      <table className="table-auto">
        <thead>
          <tr >
            {headDataArray.map(title => (
            <th className="p-1 text-left text-white border-2">
              {title}
            </th>
            )) }
          </tr>
        </thead>
        <tbody>
          <tr>
            {bodyDataArray.map(value => (
              <td className="p-1 text-left text-white border-2" >{value}</td>
            ))}    
          </tr>
        </tbody>
      </table>
    </dir>
  );
};
  
export default Table;