export interface GeneralReport {
    id: number;
    orderNumber: string;
    trackingNumber: string | null;
    orderStatus: "Successful" | "Pending" | "Failed" | string;
    paymentStatus: "Successful" | "Pending" | "Failed" | string;
    amount: string;
    orderTime: string;
}

export interface GoodsReport extends GeneralReport {}
export interface ServicesReport extends GeneralReport {}

export interface WalletReport {
    businessId: string | null;
    transactionId: number;
    transactionType: "DEBIT" | "CREDIT" | string;
    status: "Successful" | "Pending" | "Failed" | string;
    amount: number;
    description: string;
    newBalance: number;
    category: string | null;
    externalTransactionReference: string | null;
    depositTxnId: string | null;
    depositMethod: string;
    depositCurrency: string | null;
    depositIp: string | null;
    amountPaid: number;
    depositDate: string | null;
    createdAt: string; // or Date if you plan to parse it
}
