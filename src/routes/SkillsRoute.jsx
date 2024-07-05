import Accordion from '../components/Accordion'
import { skills } from '../data/skills'

const SkillsRoute = () => {

  return (
    <section className='skills'>
      <div className='skills__wrapper'>
        <h2>Skills & Learning experience</h2>
        <section className='resume-section'>
          <div className='resume-section__wrapper'>
            <h3>RESUME</h3>
            <p>
              Computer Graphics Engineer focused on web and app development.
              Specializing in full-stack development with a strong emphasis on frontend technologies.
              Passionate about both the visual and logical aspects of development.
              I approach problem-solving from a logical point of view, utilizing libraries when necessary.
              My goal is to create readable, reusable, and clean code with clear organization that is easily understandable by others. Eager to learn new technologies and explore innovative problem-solving methods.
              Proficient with various tools and demonstrate my knowledge through practical projects.
            </p>
          </div>
        </section>
        <section className='accordion-section'>
          <div className='accordion-section__wrapper'>
            <h3>Skills</h3>
            <Accordion data={skills} />
          </div>
        </section>
      </div>
    </section >
  )
}

export default SkillsRoute