let wallet = null;

// Connect to Sepolia testnet
const provider = new ethers.JsonRpcProvider(
  "https://sepolia.infura.io/v3/e2e72692061a4d02969ca51a4a08f545"
);
// AUTO LOAD IF EXISTS
window.onload = async function () {
  if (localStorage.getItem("wallet")) {
    document.getElementById("authScreen").style.display = "block";
  }
};


// CREATE NEW WALLET
async function createNewWallet() {
  const password = prompt("Create a password for your wallet:");
  if (!password) return;

  wallet = ethers.Wallet.createRandom();

  alert("SAVE THIS MNEMONIC:\n\n" + wallet.mnemonic.phrase);

  const encrypted = await wallet.encrypt(password);
  localStorage.setItem("wallet", encrypted);

  loadWalletToUI();
}


// RESTORE WALLET
async function restoreWallet() {
  const password = document.getElementById("restorePassword").value;
  const encrypted = localStorage.getItem("wallet");

  if (!encrypted) {
    alert("No wallet found in storage");
    return;
  }

  try {
    wallet = await ethers.Wallet.fromEncryptedJson(encrypted, password);
    loadWalletToUI();
  } catch (err) {
    alert("Wrong password");
  }
}


// LOAD WALLET UI
function loadWalletToUI() {
  document.getElementById("authScreen").style.display = "none";
  document.getElementById("walletScreen").style.display = "block";
  document.getElementById("address").innerText = wallet.address;
  getBalance();
}


// GET BALANCE
async function getBalance() {
  const balance = await provider.getBalance(wallet.address);
  const eth = ethers.formatEther(balance);
  document.getElementById("balance").innerText = eth;
}


// SEND ETH
async function sendETH() {
  const to = document.getElementById("toAddress").value;
  const amount = document.getElementById("amount").value;

  if (!to || !amount) {
    alert("Fill all fields");
    return;
  }

  try {
    const connectedWallet = wallet.connect(provider);

    const tx = await connectedWallet.sendTransaction({
      to: to,
      value: ethers.parseEther(amount)
    });

    alert("Transaction sent!\nHash:\n" + tx.hash);

    await tx.wait();
    alert("Transaction confirmed!");

    getBalance();
  } catch (err) {
    alert("Transaction failed");
  }
}


// LOGOUT
function logout() {
  wallet = null;
  document.getElementById("walletScreen").style.display = "none";
  document.getElementById("authScreen").style.display = "block";
}