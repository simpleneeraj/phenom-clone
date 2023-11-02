'use client';

import React from 'react';
import css from '@/styles/accordion.module.scss';
import Image from 'next/image';
import accordionData from '@/constant/dropdown';
import { AccordionType } from '@/typings/accordion';
import Arrowdown from '../icons/Arrowdown';

const Accordion = () => {
  /**
   * @description This is the state of the accordion
   */
  const [state, setState] = React.useState<AccordionType>(accordionData[0]);

  /**
   * @description This function is used to set the state of the accordion
   */
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
            {accordionData.map((item, index) => {
              const active = state.question === item.question;
              return (
                <li key={index}>
                  <button
                    onClick={() => {
                      if (!active) {
                        onSelect(item);
                      }
                    }}
                    className={css['list-item']}
                    style={{
                      //   borderBottom: active ? 'none' : '1px solid #e1e1e1',
                      borderTop: active ? 'none' : '1px solid #e1e1e1',
                      padding: active ? '0px' : '1rem 0px',
                      transition: 'padding 0.3s ease-in-out',
                    }}
                  >
                    <span>{item.question}</span>
                    <span>
                      <Arrowdown
                        height={24}
                        width={24}
                        fill={
                          state.question === item.question ? '#fff' : '#000'
                        }
                      />
                    </span>
                  </button>
                  <p
                    className={css['content']}
                    style={{
                      maxHeight: active ? '300px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease-in-out',
                      padding: active ? '1rem 0px' : '0px',
                    }}
                  >
                    {item.answer}
                  </p>
                </li>
              );
            })}
            {/* <li>
              <button
                onClick={() => onSelect(accordionData[0])}
                className={css['list-item']}
              >
                {accordionData[0].question}
              </button>
              <span>
                <Arrowdown />
              </span>
            </li> */}
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
