import React, { useState } from 'react';
import '../index.css';
import Reveal from '../components/Reveal';
const LappDataset = () => {
  const [Data, setData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    cholestrol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: '',
  });

  const handleDataChange = (event) => {
    const { name, value } = event.target;
    setData({ ...Data, [name]: value });
  };

  const handlePredict = async () => {
    await axios
      .post('https://maheedhar.pythonanywhere.com/predict_davidlapp', Data)
      .then((res) => {
        if (res.data.value == '0') {
          toast.success(res.data.prediction, {
            duration: 4000,
            position: 'top-center',
          });
        } else {
          toast.error(res.data.prediction, {
            duration: 4000,
            position: 'top-center',
          });
        }
      });
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
                value={Data.sex}
                name="sex"
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
            <span className="input-text">
              Enter you chest pain level on a scale of 1 to 4:
            </span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="text"
                className="box-text"
                required={true}
                value={Data.cp}
                name="cp"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">Resting Blood Pressure:</span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.trestbps}
                name="trestbps"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">
              Serum Cholestrol level (in mg/dl):
            </span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.cholestrol}
                name="cholestrol"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">Fasting blood sugar level:</span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.fbs}
                name="fbs"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">
              Resting electrocardiographic results (values 0,1,2):
            </span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.restecg}
                name="restecg"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">Maximum heart rate achieved:</span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.thalach}
                name="thalach"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">Exercise induced angina:</span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="text"
                className="box-text"
                required={true}
                value={Data.exang}
                name="exang"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">
              ST depression induced by exercise relative to rest
            </span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.oldpeak}
                name="oldpeak"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">
              The slope of the peak exercise ST segment:
            </span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.slope}
                name="slope"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">
              Number of major vessels (0-3) colored by flourosopynumber of major
              vessels (0-3) colored by flourosopy:
            </span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.ca}
                name="slope"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px]">
            <span className="input-text">
              Enter the value of thal: 0 = normal; 1 = fixed defect; 2 =
              reversable defect :
            </span>
            <div className="border-2 border-[#7EFF66] rounded">
              <input
                type="number"
                className="box-text"
                required={true}
                value={Data.thal}
                name="thal"
                onChange={(e) => handleDataChange(e)}
              />
            </div>
          </div>
        </div>
        <div>
          <button className="font-poppins py-[10px] px-[10px] bg-[#7EFF66] border-[1px] border-[#fff] text-[#000] rounded-[10px] font-semibold text-[18px] ml-[700px] mt-[60px]">
            Predict
          </button>
        </div>
      </div>
    </Reveal>
  );
};

export default LappDataset;
