import ColChart from "./components/C-chart";
import DonutChart from "./components/DonutChart";
import Head from "./components/Head";
import Income from "./components/Income";
import Navbar from "./components/Navbar";
import Recents from "./components/Recents";
import Retirement from "./components/Retirement";


function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="p-8 bg-[#fafafa] w-72" >
        <Head />
        <Recents />
      </div>
      <div className="p-12 w-3/6">
        <Income />
        <ColChart />
        <DonutChart />
      </div>
      <Retirement />
    </div>
  );
}

export default App;
