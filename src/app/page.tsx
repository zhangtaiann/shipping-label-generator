'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import ShippingForm from '@/components/shipping-form';
import ShippingLabel from '@/components/shipping-label';
import { ShippingData } from '@/types/shipping';

export default function Home() {
  const [shippingData, setShippingData] = useState<ShippingData>({
    sender: '',
    senderAddress: '',
    senderPostcode: '',
    senderPhone: '',
    receiver: '',
    receiverAddress: '',
    receiverPostcode: '',
    receiverPhone: '',
    trackingNumber: '',
    lineUrl: '',
    showBarcode: true,
  });

  const handleDataChange = (data: ShippingData) => {
    setShippingData(data);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen font-prompt">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="font-prompt p-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center max-w-7xl mx-auto">
          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <ShippingForm 
              onDataChange={handleDataChange}
              onPrint={handlePrint}
            />
          </div>

          {/* Label Preview Section */}
          <div className="w-full lg:w-auto ">
          <h4 className="text-xl font-bold mb-2">Preview</h4>
            <ShippingLabel data={shippingData} />
          </div>
        </div>
      </main>
    </div>
  );
}