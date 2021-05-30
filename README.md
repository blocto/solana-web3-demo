# Solana Blocto account demo
This project demonstrates how to use @portto/solana-web3 in your webapp and interact with Solana.

## Getting Started

### Setting up environment 
In order for this demo to work, you have to setup the dependencies first:

- **Install project dependencies**  
Run `yarn` at project root.

### Starting the services
- **Start demo webapp**  
Run `yarn start` at project root and you will see the demo webapp running at `http://localhost:3000`

## Diving into Demo
All the demo cases are located in `./src/demo`. Each component is responsible for one example interaction with Solana. 

- **Authenticate**: Handles sign in/out logic with FCL wallet
- **UserInfo**: Subscribes to `fcl.currentUser()` and shows the connected user account information
