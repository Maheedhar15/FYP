import React, { useState } from 'react';
import '../index.css';
import Reveal from '../components/Reveal';
const LappDataset = () => {
  const [Data, setData] = useState({
    male: '',
    age: '',
    currentSmoker: '',
    height: '',
    weight: '',
    alco: '',
    active: '',
    totChol: '',
    sysBP: '',
    diaBP: '',
    glucose: '',
  });

  const handleDataChange = (event) => {
    const { name, value } = event.target;
    setData({ ...Data, [name]: value });
  };

  return (
    <Reveal>
      <div className="mt-[40px] ml-[20px]">
        <div className="grid-cols-2 grid gap-[40px]">
          <div className=" flex gap-[20px]">
            <span className="input-text">Gender:</span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="text"
                className="box-text"
                required={true}
                value={Data.male}
                name="male"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">Age:</span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.age}
                name="age"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">Are you a current Smoker:</span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="text"
                className="box-text"
                required={true}
                value={Data.currentSmoker}
                name="currentSmoker"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">Weight(in kg):</span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.weight}
                name="weight"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">Height(in cm):</span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.height}
                name="Height"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">Total Cholestrol level:</span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.totChol}
                name="totChol"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">Systolic Blood Pressure:</span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.sysBP}
                name="sysBP"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">Diastolic Blood Pressure:</span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.diaBP}
                name="diaBP"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">Do you consume alcohol:</span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="text"
                className="box-text"
                required={true}
                value={Data.alco}
                name="bmi"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">
              How active are you on a scale of 1 to 100:
            </span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.active}
                name="heartRate"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">Glucose:</span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.glucose}
                name="glucose"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
        </div>
        <div>
          <button className="font-poppins py-[10px] px-[10px] bg-[#7EFF66] border-[1px] border-[#fff] text-[#000] rounded-[10px] font-semibold text-[18px] ml-[900px] mt-[60px]">
            Predict
          </button>
        </div>
      </div>
    </Reveal>
  );
};

export default LappDataset;
