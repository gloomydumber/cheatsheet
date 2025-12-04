import Button from "@mui/material/Button";

const NODIT_GIWA_RPC = `https://giwa-sepolia.nodit.io/EXAMPLE_API_KEY`;

const GIWA_SEPOLIA_PARAMS = {
  chainId: "0x164ce", // 91342
  chainName: "GIWA Sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: [NODIT_GIWA_RPC],
  blockExplorerUrls: ["https://sepolia-explorer.giwa.io"],
};

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
    };
  }
}

export default function AddGiwaNetworkButton() {
  const handleClick = async () => {
    if (!window.ethereum) {
      alert("이더리움 지갑이 브라우저에 설치되어 있지 않아요. Metamask와 같은 이더리움 지갑을 설치해주세요.");
      return;
    }

    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [GIWA_SEPOLIA_PARAMS],
      });

      // Optionally: Try Network Switch after adding
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: GIWA_SEPOLIA_PARAMS.chainId }],
      });
    } catch (error) {
      console.error("Failed to add GIWA Sepolia:", error);
      alert("GIWA Sepolia Testnet을 추가하는데 오류가 발생했어요. 개발자 도구의 콘솔에서 자세한 사항을 확인하세요.");
    }
  };

  return (
    <Button
      onClick={handleClick}
      sx={{
        textTransform: "none",
        color: "var(--cheatsheet-nodit-color)",
        backgroundColor: "transparent",
        border: "1px solid var(--cheatsheet-nodit-color)",
        borderRadius: "999px",
        paddingX: 2.5,
        paddingY: 0.75,
        fontWeight: 500,
        transition: "0.2s ease",
        "&:hover": {
          backgroundColor: "rgba(0, 255, 153, 0.05)",
          borderColor: "var(--cheatsheet-nodit-color)",
        },
      }}
    >
      Add GIWA Sepolia to EVM Wallet (via Nodit Node API)
    </Button>
  );
}
