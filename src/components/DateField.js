import React, { useState } from 'react';
import { japaneseYear } from 'nengo';

const DateField = () => {
  const [dateOutput, setDateOutput] = useState('Please enter a year');

  const validate = (japaneseYearInfo, yearInput) => {
    if (!japaneseYearInfo) return 'The year you have entered is not yet supported.';
    if (!Number.isInteger(yearInput)) return 'Please enter a valid year';
    return false;
  };

  const onInputChange = e => {
    const yearInput = Number.parseInt(e.target.value);
    const japaneseYearInfo = japaneseYear(yearInput);
    const error = validate(japaneseYearInfo, yearInput);
    const value =
      error ||
      `${japaneseYearInfo.names.english} (${japaneseYearInfo.names.kanji}) Year ${yearInput - japaneseYearInfo.startYear + 1}`;
    setDateOutput(value);
  };

  return (
    <div className="date-display">
      <h2>{dateOutput}</h2>
      <input type="number" onChange={onInputChange} />;
    </div>
  );
};

export default DateField;
