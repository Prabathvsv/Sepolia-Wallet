#  Ethereum Sepolia Wallet (Web App)

A simple **Ethereum wallet web app** built with **Ethers.js** and **Vite**, supporting the Sepolia testnet. It includes **mnemonic generation**, **password encryption**, **wallet restoration**, **balance check**, and **sending ETH**.

---

##  Features

*  Generate a new wallet with a **12-word mnemonic seed phrase**
*  Encrypt wallet with a password
*  Store encrypted wallet in **localStorage**
*  Restore wallet using password
*  Check **Sepolia ETH balance**
*  Send ETH to another Sepolia wallet

---

## Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Blockchain Library:** [Ethers.js](https://docs.ethers.org/)
* **Network:** [Ethereum Sepolia Testnet](https://sepolia.etherscan.io/)
* **Bundler:** Vite
* **Hosting:** [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```
crypto-wallet/
 ├── index.html
 ├── style.css
 ├── src/
 │    └── main.js
 ├── package.json
 ├── vite.config.js
 └── .env
```

---

## Getting Started (Local Development)

### 1) Clone Repository

```bash
git clone https://github.com/Prabathvsv/Sepolia-Wallet
cd Sepolia-Wallet
```

### 2) Install Dependencies

```bash
npm install
```

### 3) Add `.env` File

Create `.env` in the project root:

```
VITE_INFURA_KEY=your_infura_project_id_here
```

> Replace `your_infura_project_id_here` with your **Infura Project ID**.

### 4) Run Locally

```bash
npm run dev
```

* Open your browser at `http://localhost:5173` (Vite default)
* Create a wallet or restore one
* Claim Sepolia test ETH from a faucet: [Sepolia Faucet](https://sepolia-faucet.pk910.de/#/)

---

## ⚠️ Important Notes

* This wallet uses **Sepolia testnet**. Do **not use real ETH** here.
* Always **backup your mnemonic**. Losing it means losing access to your wallet permanently.
* Only send test ETH to **Sepolia addresses**; sending to Mainnet will fail.

### Deployment Link  :  [Sepolia Wallet](https://sepolia-wallet.vercel.app/)
