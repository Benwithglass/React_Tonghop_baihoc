import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeTemplate from './Templates/HomeTemplate';
import DemoLifeCycle from './Pages/DemoLifeCycle/DemoLifeCycle';
import DemoRedux from './Pages/DemoRedux/DemoRedux';
import ShoeStore from './Pages/ShoeStore/ShoeStore';
import ShoeDetail from './Pages/ShoeStore/ShoeDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route path="LifeCycle">
            <Route path=":id" element={<DemoLifeCycle/>}></Route>
          </Route>
          <Route path="demoredux" element={<DemoRedux/>}></Route>
          <Route path="shoeshop" element={<ShoeStore/>}></Route>
          <Route path="shoes-detail">
            <Route path=":id" element={<ShoeDetail/>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
