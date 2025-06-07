// types/shipping.ts
export interface ShippingData {
    sender: string;
    senderAddress: string;
    senderPostcode: string;
    senderPhone: string;
    receiver: string;
    receiverAddress: string;
    receiverPostcode: string;
    receiverPhone: string;
    trackingNumber: string;
    lineUrl: string;
    showBarcode: boolean;
  }