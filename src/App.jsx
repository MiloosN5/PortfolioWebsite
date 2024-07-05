import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import PageLayout from './layouts/PageLayout'
import HomeRoute from './routes/HomeRoute'
import ProjectsRoute from './routes/ProjectsRoute'
import ProjectDetailRoute from './routes/ProjectDetailRoute'
import SkillsRoute from './routes/SkillsRoute'
import ContactRoute from './routes/ContactRoute'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<PageLayout />}>
//       <Route index element={<HomeRoute />} />
//       <Route path='projects' element={<ProjectsRoute />} />
//       <Route path='project/:socialName/:projectName' element={<ProjectDetailRoute />} />
//       <Route path='skills' element={<SkillsRoute />} />
//       <Route path='contact' element={<ContactRoute />} />
//     </Route>
//   )
// )

const App = () => {
  return (
    // <RouterProvider router={router} />
    <div>adasd</div>
  )
}

export default App