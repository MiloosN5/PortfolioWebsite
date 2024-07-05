import { useParams } from 'react-router-dom'
import InfoProject from '../components/InfoProject'

const ProjectDetailRoute = () => {

  const { socialName, projectName } = useParams()

  return (
    <section className='project-detail'>
      <div className='project-detail__wrapper'>
        <h2>Project info</h2>
        <section className='info-section'>
          <div className='info-section__wrapper'>
            <h3 className='sr-only'>Details about project</h3>
            <InfoProject
              socialName={socialName}
              projectName={projectName}
            />
          </div>
        </section>
      </div>
    </section>
  )
}

export default ProjectDetailRoute