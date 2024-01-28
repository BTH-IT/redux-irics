import { Metadata } from "next";

import ReduxProvider from "@/redux/ReduxProvider";
import { ToastContainer } from 'react-toastify';

import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Redux - Redux Toolkit - Redux Persist',
  description: 'Task 6 for IRICS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
        <ToastContainer/>
      </body>
    </html>
  );
}
