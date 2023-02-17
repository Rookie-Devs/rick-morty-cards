import { Routes, Route } from 'react-router-dom';

import { Home, About } from './routes/';
import { Navigation } from './components';

import { Theme } from './Theme';
import { GlobalStyle } from './GlobalStyles';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="page/:page" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Theme>
  );
};

export default App;
