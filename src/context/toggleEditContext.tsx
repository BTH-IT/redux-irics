"use client"

import { ILink } from '@/types/link';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Định nghĩa kiểu dữ liệu cho context
interface EditContextType {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  link: ILink | null;
  setLink: React.Dispatch<React.SetStateAction<ILink | null>>;
}

// Tạo context
const EditContext = createContext<EditContextType | undefined>(undefined);

// Tạo Provider
export const EditProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [link, setLink] = useState<ILink | null>(null);

  return (
    <EditContext.Provider value={{ isEditing, setIsEditing, setLink, link }}>
      {children}
    </EditContext.Provider>
  );
};

// Hook để sử dụng context
export const useEditContext = (): EditContextType => {
  const context = useContext(EditContext);
  if (!context) {
    throw new Error('useEditContext must be used within an EditProvider');
  }
  return context;
};
