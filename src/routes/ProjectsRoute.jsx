import { projects } from '../data/projects'
import Tab from '../components/Tab'

const ProjectsRoute = () => {
  return (
    <section className='projects'>
      <div className='projects__wrapper'>
        <h2>Projects</h2>
        <section className='approach-section'>
          <div className='approach-section__wrapper'>
            <h3>Project Approach</h3>
            <ul>
              <li><span>HTML Structure</span> - Understanding the structure and elements of a given design</li>
              <li><span>Mobile First</span> - Prioritize mobile design to ensure optimal user experience on smaller screens</li>
              <li><span>Responsive Design</span> - Create layouts that adapt seamlessly to different screen sizes.</li>
              <li><span>Relative Unites</span> - Use relative units like rem and em for scalable and maintainable styling.</li>
              <li><span>BEM Naming Convention</span> - Implement the BEM (Block Element Modifier) methodology for consistent and clear CSS class naming.</li>
              <li><span>VanillaJS</span> - Utilize plain JavaScript, incorporating libraries as needed for additional functionality.</li>
              <li><span>Component-Based Architecture</span> - Break down the application into smaller, reusable components.</li>
              <li><span>MVC Architecture</span> - Structuring the backend by dividing the application into Models, Views, and Controllers, ensuring better organization and maintainability.</li>
              <li><span>Accessibility</span> - Understanding the role of an element and providing essential information about it that is not visible in the UI</li>
              <li>
                <span>Editors</span>
                <ul>
                  <li><span>Visual Studio Code</span> - Preferred for working with React, Angular, Node.js, Python, and other web technologies.</li>
                  <li><span>IntelliJ IDEA/Apache NetBeans</span> - Preferred for Java development.</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section className='tab-section'>
          <div className='tab-section__wrapper'>
            <h3>Socials</h3>
            <Tab data={projects} type='projects' />
          </div>
        </section>
      </div>
    </section>
  )
}

export default ProjectsRoute