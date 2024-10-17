import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    <div
                        className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.header}
                    </div>
                    <div
                        className="accordion-content"
                        style={{
                            display: activeIndex === index ? 'block' : 'none',
                            transition: 'max-height 0.2s ease-out',
                        }}
                    >
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
