import React, { useState } from 'react';
import Select from 'react-select';
import { BsArrowRight, BsCheckLg } from 'react-icons/bs';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [Selected, setSelected] = useState(false);
  const [SuggestedMapping, setSuggestedMapping] = useState('');

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleDataChange = (selectedOption) => {
    setSuggestedMapping(selectedOption['value']);
    setSelected(true);
  };
  return (
    <div className="flex duration-300 w-[1920px]">
      <div className="ml-[100px] mt-[100px]">
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#fff]">
          Select here
        </button>
        {isOpen && (
          <div className="flex flex-col">
            <Select
              className="basic-single w-[858px] font-inter"
              placeholder={SuggestedMapping}
              name={SuggestedMapping}
              options={options}
              value={SuggestedMapping}
              onChange={handleDataChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
