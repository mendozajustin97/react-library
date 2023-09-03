import Background from '../assets/images/books.avif'

function About() {
  return (
    <div 
    style={{ backgroundImage: `url(${ Background })`}} 
    className='flex flex-col justify-center mx-auto bg-cover bg-fixed'
    >
      <div className='flex justify-center place-items-center h-screen flex-col'>
        <h2 className='m-10 mb-0 pb-0 p-10 text-2xl bg-white bg-opacity-40 text-black rounded'>
        Introducing our curated catalog of must-read books, covering a wide range of genres and topics to suit all interests and preferences. Whether you are a fiction lover, a history buff, or a self-help enthusiast, we've got you covered with our hand-picked selection of titles.
        </h2>
        <h2 className='m-10 mt-0 mb-0 p-10 text-2xl bg-white bg-opacity-40 text-black rounded'>
            Our catalog includes classic works of literature such as "To Kill a Mockingbird" by Harper Lee and "The Great Gatsby" by F. Scott Fitzgerald, alongside modern-day masterpieces like "The Kite Runner" by Khaled Hosseini and "Gone Girl" by Gillian Flynn.
        
             We also have a selection of books on specific topics like business, science, and philosophy. Some of our top picks in these categories include "The Lean Startup" by Eric Ries, "The Selfish Gene" by Richard Dawkins, and "Meditations" by Marcus Aurelius.
        </h2>
        <h2 className='m-10 mt-0 pt-0 p-10 text-2xl bg-white bg-opacity-40 text-black rounded'>
          In addition to these titles, we encourage our readers to suggest books that they would like to see added to our catalog. Our goal is to provide a diverse and engaging reading experience for everyone. So, whether you're looking for a thought-provoking read or a light-hearted escape, check out our catalog and find your next favorite book.
        </h2>      
      </div>
    </div>
  )
}

export default About
