import AccordionItem from './AccordionItem'

const Accordion = ({ data }) => {
    return (
        <article className='accordion'>
            <div className='accordion__wrapper'>
                <h4 className='sr-only'>Accordion</h4>
                <div className='accordion__content'>
                    {
                        data.map((item, index) => (
                            <AccordionItem key={index} item={item} index={index} />
                        ))
                    }
                </div>
            </div>
        </article>
    )
}

export default Accordion