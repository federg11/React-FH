import { useCounter } from '@/hooks/useCounter';
import { use, useMemo } from 'react';

const heavyStuff = (iterationNumber: number) => {
    console.time('Heavy Stuff_started');

    for (let index = 0; index < iterationNumber; index++) {
    console.log('Ahi vamos');

    console.timeEnd('Heavy_Stuff_started');
    return `${iterationNumber} iteraciones realizadas`
        
    }
}

export const MemoCounter = () => {

    const {counter ,increment} = useCounter(40_000);

    const myHeavyValue = useMemo( () =>heavyStuff(counter),[]);

  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Memo - useMemo - {myHeavyValue}</h1>
        <hr />

        <h4>Counter: {counter}</h4>
        <h4>Counter: {counter}</h4>

        <button
        onClick={increment}
        className='bg-blue-500 text-white px-4 rounded-md cursor-pointer'>+1</button>
    </div>
  )
}
