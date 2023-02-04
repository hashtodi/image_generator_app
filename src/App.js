import './App.css';
import ImageArea from './components/ImageArea';
import PromptArea from './components/PromptArea';
// import { img_url } from './response';


function App() {

  return (
    <div className="App">
      <h1 className='title'>Image Genenrator</h1>
      <PromptArea />
      <ImageArea />
    </div>
  );
}

export default App;
