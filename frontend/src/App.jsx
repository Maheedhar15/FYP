import { useState } from 'react';
import Dropdown from './components/dropdown';
import Reveal from './components/Reveal';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  const [SelectedModel, setSelectedModel] = useState('framingham');
  const options = [{ value: 'framingham', label: 'Framingham Dataset' }];

  return (
    <>
      <div className="main">
        <Reveal>
          <h1 className="font-poppins ml-[0px] mb-[40px]">Predict Here</h1>
        </Reveal>
        <div className="card ml-[42px]">
          <Dropdown />
        </div>
      </div>
    </>
  );
}

export default App;
