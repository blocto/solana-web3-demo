import React, {useState} from "react"
import * as fcl from "@onflow/fcl"

import Card from '../components/Card'
import Header from '../components/Header'
import Result from '../components/Code'

const GetAccount = () => {
  const [data, setData] = useState(null)
  const [addr, setAddr] = useState(null)

  const runGetAccount = async (event) => {
    event.preventDefault()

    const response = await fcl.send([
      fcl.getAccount(addr),
    ])

    setData(await fcl.decode(response))
  }

  const updateAddr = async e => {
    setAddr(e.target.value)
  }

  return (
    <Card>
      <Header>get account</Header>

      <input
        placeholder="Enter Flow address"
        onChange={updateAddr}
      />
      <button onClick={runGetAccount}>
        Lookup Account
      </button>
      
      {data && <Result>{JSON.stringify(data, null, 2)}</Result>}
    </Card>
  )
}

export default GetAccount
