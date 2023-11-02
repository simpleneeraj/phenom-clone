'use client';

import React from 'react';
import css from '@/styles/accordion.module.scss';
import Image from 'next/image';
import accordionData from '@/constant/dropdown';
import { AccordionType } from '@/typings/accordion';
import Arrowdown from '../icons/Arrowdown';

const Accordion = () => {
  const [state, setState] = React.useState<AccordionType>(accordionData[0]);

  const onSelect = React.useCallback((item: AccordionType) => {
    setState(item);
  }, []);

  return (
    <div className={css['container']}>
      <div className={css['heading']}>
        <h2>
          Find and keep the best with end-to-end talent experience management.
        </h2>
      </div>
      <div className={css['grid']}>
        <div className={css['list']}>
          <ul>
            <li>
              <button
                onClick={() => onSelect(accordionData[0])}
                className={css['list-item']}
              >
                {accordionData[0].question}
              </button>
              <span>
                <Arrowdown />
              </span>
            </li>
          </ul>
        </div>

        <div className={css['accordion_image']}>
          <Image
            src={state.image}
            alt={state.question}
            width={512}
            height={512}
          />
        </div>
      </div>
    </div>
  );
};
export default Accordion;
