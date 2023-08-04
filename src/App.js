import { useState } from 'react'
import './App.css'
import { data } from './data'
function App() {
  const [query, setQuery] = useState('')

  return (
    <>
      <main className='main__container'>
        <input
          type='text'
          placeholder='Search....'
          id='input-search'
          onChange={e => setQuery(e.target.value)}

        />
        {/*      <div className="lists">

      
     
        <ul className='list__container'>
          {data.filter((user) =>
          user.Title.toLowerCase().includes(query)
          ).map(user => {
            return <li key={user.id}>{user.Title} </li>
          })}
        </ul>
        <ul className='list__container'>
          {data.filter((user) =>
          user.Year.toLowerCase().includes(query)
          ).map(user => {
            return <li key={user.id}>{user.Year} </li>
          })}
        </ul>
        <ul className='list__container'>
          {data.filter((user) =>
          user.imdbID.toLowerCase().includes(query)
          ).map(user => {
            return <li key={user.id}>{user.imdbID} </li>
          })}
        </ul>
        </div> */}

        <div className="cards__container">
          {
            data.filter(mov => mov.Title.toLowerCase().includes(query) || mov.imdbID.toLowerCase().includes(query) || mov.Year.toLowerCase().includes(query) ).map((movie) => {
              return (
                <div className="card">
                  <img src={movie.Poster} alt="img" />
                  <h3>{movie.Title} </h3>
                  <div className="card__info">
                    <h5>{movie.Year} </h5>
                    <span>{movie.imdbID} </span>
                  </div>
                </div>
              )
            })
          }
        </div>

      </main>
    </>
  )
}

export default App
