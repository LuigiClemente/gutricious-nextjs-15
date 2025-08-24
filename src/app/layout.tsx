import { ReactNode } from 'react';
import { commonMetadata } from '@/utils/metadata';

export const metadata = {
  ...commonMetadata
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
