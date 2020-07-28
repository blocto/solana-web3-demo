import React from 'react';

import Section from './components/Section'
import Header from './components/Header'

import GetLatestBlock from './demo/GetLatestBlock'
import GetAccount from './demo/GetAccount'
import ScriptOne from "./demo/ScriptOne"
import ScriptTwo from './demo/ScriptTwo'
import Authenticate from './demo/Authenticate'
import UserInfo from './demo/UserInfo'
import SendTransaction from './demo/SendTransaction'

function App() {
  return (
    <div className="App">
      <Section>
        <Header>READ from FCL</Header>
        <GetLatestBlock />
        <GetAccount />
        <ScriptOne />
        <ScriptTwo />
      </Section>

      <Section>
        <Header>FCL wallet interactions</Header>
        <Authenticate />
        <UserInfo />
        <SendTransaction />
      </Section>
    </div>
  );
}

export default App;
