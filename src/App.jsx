import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ResearchPage from '@/pages/ResearchPage'
import TalksEventsPage from '@/pages/TalksEventsPage'
import RecognitionPage from '@/pages/RecognitionPage'
import OtherPage from '@/pages/OtherPage'
import NotFoundPage from '@/pages/NotFoundPage'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/research', element: <ResearchPage /> },
      { path: '/talks-events', element: <TalksEventsPage /> },
      { path: '/recognition', element: <RecognitionPage /> },
      { path: '/other', element: <OtherPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
