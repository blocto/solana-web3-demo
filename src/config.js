import * as web3 from "@portto/solana-web3"

web3.config()
  .put("challenge.scope", "email") // request for Email
  .put("challenge.handshake", "https://wallet-testnet.blocto.app/solana/authn") // Blocto testnet wallet
