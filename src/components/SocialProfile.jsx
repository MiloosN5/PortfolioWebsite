const SocialProfile = ({ title, imgSrc, imgAlt, link }) => {
  return (
    <article className='socialProfile'>
      <img className='thumbnail' src={imgSrc} alt={imgAlt} />
      <h4>{title}</h4>
      <a className='white-filled' href={link}>{link}</a>
    </article>
  )
}

export default SocialProfile