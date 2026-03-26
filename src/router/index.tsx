import { createBrowserRouter } from 'react-router-dom';
import { PageTransition } from '../components/transitions/PageTransition';
import { Home } from '../pages/Home';
import { ProjectDetail } from '../pages/ProjectDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PageTransition>
        <Home />
      </PageTransition>
    ),
  },
  {
    path: '/projet/:slug',
    element: <ProjectDetail />,
  },
]);
