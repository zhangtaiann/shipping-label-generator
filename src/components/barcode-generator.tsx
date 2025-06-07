'use client';

import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';

interface BarcodeGeneratorProps {
  trackingNumber: string;
  lineUrl?: string;
  showBarcode: boolean;
}

export default function BarcodeGenerator({ 
  trackingNumber, 
  showBarcode 
}: BarcodeGeneratorProps) {
  const barcodeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (showBarcode && barcodeRef.current && trackingNumber) {
      try {
        JsBarcode(barcodeRef.current, trackingNumber || "000000000000", {
          format: "CODE128",
          width: 3,
          height: 60,
          displayValue: true,
          fontSize: 24,
          margin: 2,
        });
      } catch (error) {
        console.error('Error generating barcode:', error);
      }
    }
  }, [trackingNumber, showBarcode]);


  return (
    <div className="space-y-2">
      {showBarcode && (
        <div className="flex justify-center">
          <svg ref={barcodeRef} className="h-16 w-full"></svg>
        </div>
      )}
    </div>
  );
}