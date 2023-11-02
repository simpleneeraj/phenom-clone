export const dynamic = 'force-dynamic';

import React from 'react';
import css from '@/styles/main.module.scss';
import { getAllRoles } from '@/network';

import HeroContent from '@/components/hero-content';
import { RolesDataType } from '@/typings/roles';
import Accordion from '@/components/accordion';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recruiters',
  description: `Discover, engage and hire phenomenal people — with speed and velocity.`,
};

export default async function Home() {
  /**
   * Fetch data from API
   */
  const data = await getAllRoles<RolesDataType[]>();
  const currentRole = data[0];
  return (
    <React.Fragment>
      <header className={css['header']}>
        <div className={css['logo']}>Logo</div>
        <div>
          <button>Login</button>
        </div>
      </header>
      <main className={css['main']}>
        <div className={css['container']}>
          <HeroContent slug={currentRole.slug} data={data} />
        </div>
        <div className={css['large-text']}>
          <p>
            {currentRole?.content.description.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item.type === 'gradient' ? (
                    <span className={css['text-gradient']}>{item.text}</span>
                  ) : (
                    item.text
                  )}
                </React.Fragment>
              );
            })}
          </p>
        </div>
        <Accordion />
      </main>
    </React.Fragment>
  );
}
