import { useTrafficLigth } from "../hooks/useTrafficLigth";



export const TrafficLightWithHook = () => {

    
    const {countDown, percentage, greenLigth, yellowLigth, redLigth} = useTrafficLigth();


  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">


        <h1 className="text-white text-2xl font-thin">Semaforo con useEffect</h1>
        <h2 className="text-white text-3xl font-thin">{countDown}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{width: `${percentage}%`}}
            >
              
            </div>
        </div>



        <div className={`w-32 h-32 ${redLigth} rounded-full`}></div>


        <div className={`w-32 h-32 ${yellowLigth} rounded-full`}></div>
        <div className={`w-32 h-32 ${greenLigth} rounded-full`}></div>

        
      </div>
    </div>
  );
};