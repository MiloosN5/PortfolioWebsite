import { useState } from 'react'

const AccordionItem = ({ item, index }) => {

    const [active, setActive] = useState(false);

    const toggleStatus = () => {
        setActive(!active);
    };

    return (
        <article className='accordion-item'>
            <div className='accordion-item__wrapper'>
                <h5 className='sr-only'>Item</h5>
                <div className='accordion-item__content'>
                    <header
                        className={`accordion-item__title ${active ? 'active' : 'inactive'}`}
                        onClick={() => toggleStatus(index)}
                    >
                        <button className='button--filled'>{item.title}</button>
                        <span className={`icon--expand ${active ? 'active' : ''}`}>✚</span>
                    </header>
                    <div className={`accordion-item__description ${active ? 'active' : 'inactive'}`}>
                        {
                            Array.isArray(item.desc) ?
                                (
                                    item.desc.map((subitem, index) => (
                                        <div className='accordion-item__subitem' key={index}>
                                            <h6>{subitem.title}</h6>
                                            <p style={{ whiteSpace: 'pre-line' }}>{subitem.desc}</p>
                                        </div>
                                    ))
                                ) :
                                (
                                    <>
                                        <p style={{ whiteSpace: 'pre-line' }}>{item.desc}</p>
                                    </>
                                )
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}

export default AccordionItem