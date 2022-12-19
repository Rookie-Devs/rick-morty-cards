import { Routes, Route } from 'react-router-dom';

import { Home } from './routes/Home/Home';
import { About } from './routes/About/About';
import { Navigation } from './components/Navigation/Navigation';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path=":page" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
