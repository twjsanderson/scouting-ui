import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

// routes
import { appRoutes } from 'routes';

// styles
import './index.css';

const App: FC = (): JSX.Element => {
  const routing = useRoutes(appRoutes);

  return (
    <>
      {routing}
    </>
  );
}

export default App;