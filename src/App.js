import './App.css';
import HeadaboutDA from './HeadAboutDA';
import { InfoPartOne } from './InfoPartOne';
import StepOne from './StepOne';

import { InfoPartTwo } from './infoPartTwo';


function App() {
  return (
    <div className="App">
      <StepOne text='Шаг 1 из 2 | Личная информация' />
      <InfoPartOne />
      <StepOne text='Шаг 2 из 2 | О квартире' />
      <HeadaboutDA />
      <InfoPartTwo />
    </div>
  );
}

export default App;
