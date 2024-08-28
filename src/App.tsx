import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';

function App() {
    return (
        <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400">
            <TopButtons />
            <Inputs
            //  setQuery={setQuery} units={units} setUnits={setUnits}
            />
            <TimeAndLocation
            // weather={weather}
             />
        </div>
    );
}

export default App;
