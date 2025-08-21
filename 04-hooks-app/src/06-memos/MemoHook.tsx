import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubTitle"

export const MemoHook = () => {

const [ title, setTitle] = useState('Hola')
const [ subtitle, setSubTitle] = useState('Mundo');

const handleMyAPICall = useCallback(() => {
    console.log('llama a mi api')
},[])


  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text text-2xl font-thin text-white'>MemoApp</h1>

        <MyTitle title={title} />
        <MySubTitle subtitle={subtitle} callMyAPI={handleMyAPICall} />

        <h6>Mi Subtitulo</h6>

        <button onClick={() => setTitle('Hello')} className='bg-blue-500 text-white px-4 py-2 cursor-pointer rounded-md'>cambiar titulo</button>
        
        <button onClick={() => setSubTitle('World')} className='bg-blue-500 text-white px-4 py-2 cursor-pointer rounded-md' >cambiar subtitulo</button>
    </div>
  )
}
