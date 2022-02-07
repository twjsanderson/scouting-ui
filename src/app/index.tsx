import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

// routes
import { routes } from 'routes';

// styles
import './index.css';

const App: FC = (): JSX.Element => {
  const routing = useRoutes(routes);

  return (
    <RecoilRoot>
      {routing}
    </RecoilRoot>
  );
}

export default App;