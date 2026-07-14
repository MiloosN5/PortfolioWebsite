import { NavLink } from 'react-router-dom'

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://portfoliowebsite-rslz.onrender.com/#person",
  "name": "Milos Novakovic",
  "jobTitle": "Web-App Developer",
  "url": "https://portfoliowebsite-rslz.onrender.com/"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://portfoliowebsite-rslz.onrender.com/#website",
  "url": "https://portfoliowebsite-rslz.onrender.com/",
  "name": "Milos Novakovic Portfolio"
};

const HomeRoute = () => {
  return (
    <>
      <StructuredData data={personSchema} />
      <StructuredData data={websiteSchema} />
      <section className='home'>
        <div className='home__wrapper'>
          <h2 className='sr-only'>Home</h2>
          <section className='hero-section'>
            <div className='hero-section__wrapper'>
              <div className='hero-section__main'>
                <h1>Milos Novakovic</h1>
                <span>Portfolio website</span>
                <span>Web/app developer</span>
              </div>
              <div className='hero-section__getToKnow'>
                <p>
                  Computer Graphics Engineer focused on both the visual and logical aspects of web and app development... ...
                </p>
                <NavLink className='black-outline black-boxShadow' to='/skills'>Read more</NavLink>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default HomeRoute