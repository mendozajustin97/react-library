import Background from '../assets/images/photo-1524995997946-a1c2e315a42f.avif'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-white bg-opacity-50 text-4xl font-semibold text-black rounded'>Welcome to the Library</h3>
        </div>
    </div>
  )
}

export default Home
