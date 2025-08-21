import { useEffect, useState } from "react";

const colors = {
    red: ' bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}

type TrafficLigthColor = 'red' | 'yellow' | 'green';

export const useTrafficLigth = () => {

const [ligth, setLigth] = useState<TrafficLigthColor>('red');
const [countDown, setCountDown] = useState(5);

    useEffect(() => {
      if(countDown === 0) return;
     
      const intervalId = setInterval(() => {
        setCountDown((prev) => prev -1)
      },1000);

      return () => {
        clearInterval(intervalId);
      }
      
    }, [countDown]);

    //change ligth useEFFECT
    useEffect(() => {
      if(countDown > 0) return;

        setCountDown(5);
        
        if(ligth === 'red'){
          setLigth('green');
          return;
      }
        if(ligth === 'yellow') {
          setLigth('red');
          return;
      }
      if(ligth==='green'){
        setLigth('yellow');
        return;
      }
      return;

    }, [countDown, ligth])



  return {
    //values
    ligth,
    countDown,
    colors,

    //computed
    percentage: (countDown / 5) * 100,
    greenLigth: ligth === 'green' ? colors.green : 'bg-gray-500',
    redLigth: ligth === 'red' ? colors.red : 'bg-gray-500',
    yellowLigth: ligth === 'yellow' ? colors.yellow : 'bg-gray-500',
    //methods || actions
  }
}
