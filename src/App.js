import Table from "./components/table"

const tableData = [
  {
    id: 0,
    date: "21/02/21",
    temperature: 30,
  },
];

const App = () => {
  return (
    <div className="h-full App">
      <div className="flex flex-col items-center justify-center h-screen bg-gray-500 w-100">
      <h1 className="font-serif text-center text-white text-7xl">Los Tetas Inc. DB BRANCH</h1>
        <Table tableData={tableData}/>
      </div>
    </div>
  );
}

export default App;
