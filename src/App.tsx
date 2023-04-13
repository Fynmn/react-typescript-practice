import cardData from '../src/data/data.json'
import SimpleCard from './components/SimpleCard'

export default function App() {


  return (
    <>
      <div className="flex flex-col w-full bg-slate-500 min-h-screen">

        {/* Container 1 */}
        <div className='max-w-7xl w-full mx-auto min-h-screen px-7 py-8'>
          <div className='flex gap-x-8 flex-wrap gap-y-8'>
            {
              cardData.map(item => (
                <SimpleCard {...item}></SimpleCard>
              ))
            }
          </div>
        </div>


        {/* Container 2 */}
        {/* <div className='bg-blue-400 h-screen'>
          hi
        </div> */}

        {/* Container 3 */}
        {/* <div className='bg-yellow-400 h-screen'>
          hi
        </div> */}

      </div>
    </>
  )
}
