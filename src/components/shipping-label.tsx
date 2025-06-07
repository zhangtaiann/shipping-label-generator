'use client';

import { ShippingData } from '@/types/shipping';
import BarcodeGenerator from './barcode-generator';

interface ShippingLabelProps {
  data: ShippingData;
}

export default function ShippingLabel({ data }: ShippingLabelProps) {
  return (
    <div className="w-[384px] h-[576px] border rounded border-black p-5 bg-white relative shadow print-area">
      {/* Warning Label */}
      <div className="absolute top-2 right-2 font-bold text-lg px-2 py-1 rounded">
        FRAGILE !!
      </div>

      {/* Header */}
      <div className="text-left text-2xl font-bold mb-2">Shipping Label</div>

      <hr className="my-2 border-black" />

      {/* Sender Section */}
      <div className="mb-4">
        <div className="underline font-bold text-base mb-1">Sender</div>
        <div className="font-medium">{data.sender}</div>
        <div className="text-sm">{data.senderAddress}</div>
        <div>
          <span className="text-lg font-bold float-right">
            {data.senderPostcode}
          </span>
        </div>
        <div className="text-sm mt-1">
          <span>{data.senderPhone}</span>
        </div>
      </div>

      <hr className="my-2 border-black" />

      {/* Receiver Section */}
      <div className="mb-4">
        <div className="underline font-bold text-base mb-1">Receiver</div>
        <div className="text-xl font-bold">{data.receiver}</div>
        <div className="text-base">{data.receiverAddress}</div>
        <div>
          <span className="text-3xl font-bold float-right">
            {data.receiverPostcode}
          </span>
        </div>
        <div className="text-sm mt-1">
          <span>{data.receiverPhone}</span>
        </div>
      </div>



      {/* Barcode and QR Code Section */}
      <div className="absolute bottom-12 left-5 right-5">
        <BarcodeGenerator
          trackingNumber={data.trackingNumber}
          lineUrl={data.lineUrl}
          showBarcode={data.showBarcode}
        />
      </div>
      
      <div className="absolute bottom-2 left-5 right-5 text-center">
      <hr className="my-2 border-black" />
      <span className="text-sm text-gray-400">Shipping Label Generator</span>
      </div>
    </div>
  );
}