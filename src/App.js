import { Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'
import Navbar from './navbar/Navbar'
import { Home, Inputanimation, Stagger, Grid, TimelinePage } from './pages/index'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/inputanimation" element={<Inputanimation />} />
        <Route path="/stagger" element={<Stagger />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/timeline" element={<TimelinePage />} />
      </Routes>
    </>
  );
}

export default App;
