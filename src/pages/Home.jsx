import React, { useContext} from 'react'
import  { AppContext } from '../App'
const Home = () => {
  const {username} = useContext(AppContext)
  return (
    <h1>
      This is home page of {username}
    </h1>
  )
}

export default Home