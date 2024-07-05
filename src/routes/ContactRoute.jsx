import SocialProfile from '../components/SocialProfile'
import { contacts } from '../data/contacts'

const ContactRoute = () => {
  return (
    <section className='contact'>
      <div className='contact__wrapper'>
        <h2>Contact</h2>
        <section className='socials-section--contact'>
          <div className='socials-section--contact__wrapper'>
            <h3>Socials</h3>
            <div className='socials-section--contact__content'>
              {
                contacts.map((contact, index) => (
                  <SocialProfile
                    key={index}
                    title={contact.title}
                    imgSrc={contact.imgSrc}
                    imgAlt={contact.imgAlt}
                    link={contact.link}
                  />
                ))
              }
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default ContactRoute