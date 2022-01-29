import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

// routes
import { routes } from 'routes';

// styles
import './index.css';

const App: FC = (): JSX.Element => {
  const routing = useRoutes(routes);

  return (
    <>
      {routing}
    </>
  );
}

export default App;