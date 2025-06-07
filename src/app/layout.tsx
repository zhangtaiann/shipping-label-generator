import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';
import './globals.css';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-prompt',
});

export const metadata: Metadata = {
  title: 'Shipping Label Generator',
  description: 'สร้างใบปะหน้าพัสดุ 4x6 นิ้ว',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={prompt.variable} suppressHydrationWarning>
      <body className="font-prompt" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}