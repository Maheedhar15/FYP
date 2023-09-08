import React, { useState } from 'react';
import '../index.css';

const FraminghamDataset = () => {
  const [Data, setData] = useState({
    male: '',
    age: '',
    currentSmoker: '',
    cigsPerDay: '',
    BPmeds: '',
    prevalentStroke: '',
    prevalentHyp: '',
    diabetes: '',
    totChol: '',
    sysBP: '',
    diaBP: '',
    bmi: '',
    heartRate: '',
    glucose: '',
  });

  const handleDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="mt-[40px] ml-[20px]">
      <div className="flex flex-col gap-[20px]">
        <div className=" flex gap-[80px]">
          <span className="input-text">Gender:</span>
          <div className="border-2 border-[#7EFF66] rounded">
            <input
              type="text"
              className="box-text"
              required={true}
              value={Data.male}
              onChange={(e) => handleDataChange(e)}
            />
          </div>
        </div>
        <div className=" flex gap-[80px]">
          <span className="input-text">Age:</span>
          <div className="border-2 border-[#7EFF66] rounded">
            <input
              type="number"
              className="box-text"
              required={true}
              value={Data.age}
              onChange={(e) => handleDataChange(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraminghamDataset;
