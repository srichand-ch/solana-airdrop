import React, { useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import "./style.css";

function SolAirdrop() {
  const [solanaPublicKey, setSolanaPublicKey] = useState("");
  const [solAmount, setSolAmount] = useState("");
  const [txHash, setTxHash] = useState("");
  const [isAirdropped, setIsAirdropped] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    // connection
    const connection = new Connection("https://api.devnet.solana.com");
    let publicKeyObject;
    try {
      publicKeyObject = new PublicKey(solanaPublicKey);
    } catch (err) {
      alert("Invalid Solana address. Please try again.");
      return;
    }
    //Check if amount of SOL exceeds 100
    if(solAmount > 100){
      alert("Airdrop not possible. Amount of SOL exceeds limit");
      return;
    }
    // Convert input solAmount to lamports
    const lamports = parseFloat(solAmount) * 1e9;
    if (isNaN(lamports)) {
      alert("Invalid SOL amount. Please enter a valid number.");
      return;
    }
    // Request airdrop with the specified amount of lamports
    let txhash = await connection.requestAirdrop(publicKeyObject, lamports);
    setTxHash(txhash);
    setIsAirdropped(true);
  };

  // Move console.log statement outside of JSX block
  console.log(`Transaction Hash: ${txHash}`);

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <label htmlFor="search">Solana Airdrop to Devnet</label>
        <p className="warning">
          <b>⚠️ This tool does *NOT* give real $SOL or Solana tokens.</b>
        </p>
        <input
          type="text"
          name="search"
          placeholder="Enter Solana address..."
          id="search"
          value={solanaPublicKey}
          onChange={(e) => setSolanaPublicKey(e.target.value)}
          className={isAirdropped ? "airdropped" : ""}
        />
        <input
          type="text"
          name="amount"
          placeholder="Enter amount of SOL to airdrop..."
          value={solAmount}
          onChange={(e) => setSolAmount(e.target.value)}
        />
        <button type="submit">✈️ Airdrop</button>
      </form>
      <div className="footer-text">Made with love ❤️ by Sri Chand</div>
    </div>
  );
}

export default SolAirdrop;
