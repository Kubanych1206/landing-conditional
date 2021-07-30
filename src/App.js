import './App.css';
import RenderFirstCard from './Components/Block4';
import Devka from './Components/Girl';
import Header from './Components/Header';
import { RenderSecondCard } from './Components/Kulp';


export function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Devka/>
      <RenderFirstCard/>
      <RenderSecondCard/>
      

      </div>
  );
}

// export default App;
