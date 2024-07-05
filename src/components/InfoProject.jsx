import { projects } from '../data/projects'
import { useNavigate } from 'react-router-dom'

const InfoProject = ({ socialName, projectName }) => {

    const navigate = useNavigate()

    const foundWebsite = projects.find((website) => website.slug === socialName)
    const foundProject = foundWebsite.list.find((project) => project.slug === projectName)

    const return_back = async () => {
        navigate('/projects')
    }

    return (
        <article className='info--project'>
            <div className='info--project__wrapper'>
                {
                    foundProject
                        ?
                        (
                            <>
                                <h4 className='sr-only'>Info about {foundProject.title}</h4>
                                <div className='info--project__content'>
                                    <div className='info--project__visual'>
                                        <img
                                            className='thumbnail'
                                            src={foundProject.image}
                                            alt={`Thumbnail of project ${foundProject.title}`}
                                        />
                                    </div>
                                    <div className='info--project__text'>
                                        <h5>{foundProject.title}</h5>
                                        <span className='sr-only' id='info--project__features'>Features</span>
                                        <ul aria-labelledby='info--project__features'>
                                            {
                                                foundProject.features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))
                                            }
                                        </ul>
                                        <div className='info--project__CTA'>
                                            <a className='white-outline white-boxShadow' href={`${foundProject.link.code}`}>Code</a>
                                            <a className='white-outline white-boxShadow' href={`${foundProject.link.live}`}>Live</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                        :
                        (
                            <>
                                <h4>Unknown project</h4>
                                <div>
                                    <p>There is no project under this name</p>
                                </div>
                            </>
                        )
                }
                <div className='info--project__return'>
                    <a className='black-outline black-boxShadow' onClick={() => return_back()}>RETURN BACK</a>
                </div>
            </div>
        </article>
    )
}

export default InfoProject