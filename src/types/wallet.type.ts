export interface WalletItem {
  userWalletId: number;
  walletId: string;
  walletName: string;
  walletDashIcon: string;
  walletDescription: string;
  balance: string;
  reserved: string;
  ie: string | null;
  global: string | null;
}

export interface Wallet {
  pcc: WalletItem[];
  bcc: WalletItem[];
}
