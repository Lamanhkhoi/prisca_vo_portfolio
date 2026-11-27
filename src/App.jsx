import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/HomePage'
import TeachingPage from '@/pages/TeachingPage'
import ResearchPage from '@/pages/ResearchPage'
import IndustryPage from '@/pages/IndustryPage'
import TalksPage from '@/pages/TalksPage'
import EvidencePage from '@/pages/EvidencePage'
import NotFoundPage from '@/pages/NotFoundPage'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/teaching', element: <TeachingPage /> },
      { path: '/research', element: <ResearchPage /> },
      { path: '/industry', element: <IndustryPage /> },
      { path: '/talks', element: <TalksPage /> },
      { path: '/evidence', element: <EvidencePage /> },
      // Old URLs from the first version
      { path: '/about', element: <Navigate to="/" replace /> },
      { path: '/recognition', element: <Navigate to="/teaching" replace /> },
      { path: '/talks-events', element: <Navigate to="/talks" replace /> },
      { path: '/other', element: <Navigate to="/industry" replace /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
