import React, { useEffect } from 'react';
import * as XLSX from 'xlsx';

const ExcelReader = ({ onDataLoad }: { onDataLoad: (data: any) => void }) => {
  useEffect(() => {
    
    fetch('/Energy-data.xlsx') 
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        onDataLoad(jsonData); 
      })
      .catch((error) => {
        console.error('Error loading the Excel file:', error);
      });
  }, []);

  return null; 
};

export default ExcelReader;
