import { useState } from 'react';
import Dropdown from './Components/Dropdown';
import Reveal from './components/Reveal';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import FraminghamDataset from './Components/FraminghamDataset';
import KEELDataset from './Components/KEELDataset';
import './index.css';
import LappDataset from './Components/LappDataset';

function App() {
  const [SelectedModel, setSelectedModel] = useState('framingham');

  return (
    <>
      <div className="main">
        <div className="px-[5px] py-[5px] flex w-full">
          <FaHandHoldingHeart className="fill-[#7EFF66] w-[50px] h-[50px] ml-[10px] mt-[10px]" />
          <span className="font-poppins text-[24px] font-bold text-center align-middle mt-[20px] ml-[15px]">
            HeartSolutions
          </span>

          <div className="justify-end items-end self-end align-self-end ml-[1620px]">
            <button>
              <AiOutlineUser className="fill-[#fff] px-[3px] py-[5px] mt-[20px] w-[40px] h-[40px] border-[1px] border-[#7EFF66] rounded-[20px]" />
            </button>
          </div>
        </div>

        <Reveal>
          <h1 className="font-poppins text-center justify-center ml-[20px] mt-[70px] text-[#7EFF66]">
            Select Model
          </h1>
        </Reveal>
        <div className="card ml-[20px]">
          <Dropdown
            SelectedModel={SelectedModel}
            setSelectedModel={setSelectedModel}
          />
        </div>
        <div>
          {SelectedModel == 'framingham' ? (
            <FraminghamDataset />
          ) : SelectedModel == 'keel' ? (
            <KEELDataset />
          ) : (
            <LappDataset />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
