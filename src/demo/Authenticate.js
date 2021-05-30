import React, {useState, useEffect} from "react"
import * as web3 from "@portto/solana-web3"

import Card from '../components/Card'

const SignInOutButton = ({ user: { loggedIn } }) => {
  const signInOrOut = async (event) => {
    event.preventDefault()

    if (loggedIn) {
      web3.disable()
    } else {
      web3.enable()
    }
  }

  return (
    <button onClick={signInOrOut}>
      {loggedIn ? 'Sign Out' : 'Sign In/Up'}
    </button>
  )
}

const CurrentUser = () => {
  const [user, setUser] = useState({})

  useEffect(() =>
    web3
      .currentUser()
      .subscribe(user => setUser({...user}))
  , [])

  return (
    <Card>
      <SignInOutButton user={user} />
    </Card>
  )
}

export default CurrentUser
