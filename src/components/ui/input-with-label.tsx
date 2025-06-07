'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { forwardRef } from 'react';

interface InputWithLabelProps {
  id: string;
  label: string;
  type?: 'input' | 'textarea';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  className?: string;
}

const InputWithLabel = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputWithLabelProps
>(({ id, label, type = 'input', placeholder, value, onChange, rows = 2, className }, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={className}>
      <Label htmlFor={id} className="block font-medium mb-2">
        {label}
      </Label>
      {type === 'textarea' ? (
        <Textarea
          id={id}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows}
          className="bg-white"
          ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
        />
      ) : (
        <Input
          id={id}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="bg-white"
          ref={ref as React.ForwardedRef<HTMLInputElement>}
        />
      )}
    </div>
  );
});

InputWithLabel.displayName = 'InputWithLabel';

export default InputWithLabel;