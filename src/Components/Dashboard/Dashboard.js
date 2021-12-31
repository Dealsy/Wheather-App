import Cards from "./Cards";

function Dashboard({ apiData, isLoading }) {
  return (
    <div>
      <Cards apiData={apiData} isLoading={isLoading} />
    </div>
  );
}

export default Dashboard;
