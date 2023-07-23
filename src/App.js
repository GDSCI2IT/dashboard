import Chart from "./components/Chart"
import Head from "./components/Head";
import Income from "./components/Income";
import Navbar from "./components/Navbar";
import Recents from "./components/Recents";
import Retirement from "./components/Retirement";


function App() {
  return (
    <div className="flex flex-col sm:flex-row">
      <Navbar />
      <div className="p-8 sm:ml-16 space-y-5 sm:bg-[#fafafa] w-screen sm:w-80" >
        <Head />
        <Recents />
      </div>
      <div className="p-8 w-screen sm:w-3/6">
        <Income />
        <Chart/>
      </div>
      <Retirement />
    </div>
  );
}

export default App;
