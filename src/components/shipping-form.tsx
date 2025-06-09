'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import InputWithLabel from '@/components/ui/input-with-label';
import { ShippingData } from '@/types/shipping';

interface ShippingFormProps {
  onDataChange: (data: ShippingData) => void;
  onPrint: () => void;
}

export default function ShippingForm({ onDataChange, onPrint }: ShippingFormProps) {
  const [formData, setFormData] = useState<ShippingData>({
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
    showBarcode: false,
  });

  const handleInputChange = (field: keyof ShippingData, value: string | boolean) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    onDataChange(updatedData);
  };

  const handleShowLabel = () => {
    onDataChange(formData);
  };

  const onReset = () => {
      setFormData({
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
        showBarcode: false,
      });
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        {/* Sender Information */}
        <InputWithLabel
          id="sender"
          label="Sender Name"
          value={formData.sender}
          onChange={(value) => handleInputChange('sender', value)}
        />

        <InputWithLabel
          id="senderAddress"
          label="Sender Address"
          type="textarea"
          rows={2}
          value={formData.senderAddress}
          onChange={(value) => handleInputChange('senderAddress', value)}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputWithLabel
            id="senderPostcode"
            label="Sender Postcode"
            value={formData.senderPostcode}
            onChange={(value) => handleInputChange('senderPostcode', value)}
          />
          <InputWithLabel
            id="senderPhone"
            label="Sender Phone"
            value={formData.senderPhone}
            onChange={(value) => handleInputChange('senderPhone', value)}
          />
        </div>

        {/* Receiver Information */}
        <InputWithLabel
          id="receiver"
          label="Receiver Name"
          value={formData.receiver}
          onChange={(value) => handleInputChange('receiver', value)}
        />

        <InputWithLabel
          id="receiverAddress"
          label="Receiver Address"
          type="textarea"
          rows={2}
          value={formData.receiverAddress}
          onChange={(value) => handleInputChange('receiverAddress', value)}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputWithLabel
            id="receiverPostcode"
            label="Receiver Postcode"
            value={formData.receiverPostcode}
            onChange={(value) => handleInputChange('receiverPostcode', value)}
          />
          <InputWithLabel
            id="receiverPhone"
            label="Receiver Phone"
            value={formData.receiverPhone}
            onChange={(value) => handleInputChange('receiverPhone', value)}
          />
        </div>

        {/* Barcode Checkbox */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="showBarcode"
            checked={formData.showBarcode}
            onCheckedChange={(checked) => 
              handleInputChange('showBarcode', checked as boolean)
            }
          />
          <Label htmlFor="showBarcode">? Tracking Number</Label>
        </div>

        {/* Tracking Number */}
        {formData.showBarcode && (
          <InputWithLabel
            id="trackingNumber"
            label="Tracking Number"
            value={formData.trackingNumber}
            onChange={(value) => handleInputChange('trackingNumber', value)}
          />
        )}

      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-8 ">
        <Button onClick={handleShowLabel} >
            Preview
        </Button>
        <Button onClick={onPrint} variant="secondary">
            Print
        </Button>
        <Button onClick={onReset} variant="destructive">
            Reset
        </Button>
      </div>
    </div>
  );
}