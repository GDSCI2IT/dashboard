import Chart from "./components/Chart"
import Head from "./components/Head";
import Income from "./components/Income";
import Navbar from "./components/Navbar";
import Recents from "./components/Recents";
import Retirement from "./components/Retirement";


function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="p-8 bg-[#fafafa] w-96" >
        <Head />
        <Recents />
      </div>
      <div className="p-12 w-3/6">
        <Income />
        <Chart/>
      </div>
      <Retirement />
    </div>
  );
}

export default App;
