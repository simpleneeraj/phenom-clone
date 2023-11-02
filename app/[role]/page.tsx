export const dynamic = 'force-dynamic';

import React from 'react';
import css from '@/styles/main.module.scss';
import { getAllRoles } from '@/network';

import HeroContent from '@/components/hero-content';
import { RolesDataType } from '@/typings/roles';

type RolePageProps = {
  params: {
    role: string;
  };
};

export default async function RolePage({ params }: RolePageProps) {
  /**
   * Fetch data from API
   */
  const data = await getAllRoles<RolesDataType[]>(params.role);
  const currentRole = data.find((item) => item.slug === params.role);
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
          <HeroContent slug={params.role} data={data} />
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
      </main>
    </React.Fragment>
  );
}
