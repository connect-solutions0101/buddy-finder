import React, { useState } from 'react';
import styles from "./Accordion.module.css";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    <div className={styles["accordion-header-content"]}>
                        <div
                            className={`${styles['accordion-header']} ${activeIndex === index ? styles['active'] : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.header}
                        </div>
                        {/* <div className={styles["accordion-header-arrow"]}>
                            v
                        </div> */}
                    </div>

                    <div
                        className={styles['accordion-content']}
                        style={{
                            display: activeIndex === index ? 'block' : 'none',
                            transition: 'max-height 1s ease-out',
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
