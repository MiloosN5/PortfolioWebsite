import { useState } from 'react';
import { NavLink } from 'react-router-dom'

const Tab = ({ data, type }) => {

    const [tab, setTab] = useState('My work');
    const [activeIndex, setActiveIndex] = useState(1);

    const handleTabChange = (index, id) => {
        setTab(id);
        setActiveIndex(index);
    };

    return (
        <article className='tab'>
            <div className='tab__wrapper'>
                <h4 className='sr-only'>Tabs</h4>
                <header className='buttons--tab'>
                    <div className='buttons--tab__wrapper'>
                        <h4 className='sr-only'>Tab buttons</h4>
                        <div className='buttons--tab__content'>
                            {
                                data.map((item, index) => (
                                    <button className={`button--outline ${activeIndex === index ? 'active' : ''}`} key={index} onClick={() => handleTabChange(index, item.title)}>
                                        {item.title}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </header>
                <section className='content--tab'>
                    <div className='content--tab__wrapper'>
                        <h4>{data.find((currTab) => currTab.title === tab).title}</h4>
                        {
                            data.map((currTab, index) => currTab.title === tab && type === 'projects'
                                ?
                                (
                                    <div className='content--tab__content' key={index}>
                                        <div className='content--tab__desc'>
                                            <p>{currTab.description}</p>
                                        </div>
                                        <div className='content--tab__projects'>
                                            {currTab.list.map((project, index) => (
                                                <article key={index} className='content--tab__project-preview'>
                                                    <h4 className='sr-only'>{project.title}</h4>
                                                    <img className='thumbnail' src={project.image} alt={`Preview image of ${project.title}`} />
                                                    <NavLink className='black-outline' to={project.details}>View Project</NavLink>
                                                </article>
                                            ))}
                                        </div>
                                    </div>
                                )
                                : null
                            )}
                    </div>
                </section>
            </div>
        </article>
    )
}

export default Tab