import React, { useState } from 'react';
import { japaneseYear } from 'nengo';

const DateField = () => {
  const [dateOutput, setDateOutput] = useState('Please enter a year');

  const validate = (japaneseYearInfo: any, yearInput: number) => {
    if (!japaneseYearInfo) return 'The year you have entered is not yet supported.';
    if (!Number.isInteger(yearInput)) return 'Please enter a valid year';
    return false;
  };

  const onInputChange = (e: any) => {
    const yearInput = Number.parseInt(e.target.value);
    const japaneseYearInfo = japaneseYear(new Date(yearInput, 0));
    const error = validate(japaneseYearInfo, yearInput);
    const value =
      error ||
      `${japaneseYearInfo.names.english} (${japaneseYearInfo.names.kanji}) Year ${yearInput -
        japaneseYearInfo.startYear +
        1}`;
    setDateOutput(value);
  };

  return (
    <div className="flex justify-center align-center flex-col">
      <h2 className="text-white text-center text-lg mb-4">{dateOutput}</h2>
      <input className="text-center" type="number" onChange={onInputChange} />
    </div>
  );
};

export default DateField;
