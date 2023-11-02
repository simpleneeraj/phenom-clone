export const dynamic = 'force-dynamic';

import React from 'react';
import css from '@/styles/main.module.scss';
import { getAllRoles } from '@/network';

import HeroContent from '@/components/hero-content';
import { RolesDataType } from '@/typings/roles';
import Accordion from '@/components/accordion';

type RolePageProps = {
  params: {
    role: string;
  };
};

import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: RolePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await getAllRoles<RolesDataType[]>();
  const currentRole = data.find((item) => item.slug === params.role);
  return {
    title: currentRole?.name,
    description: currentRole?.content.quote,
  };
}

export default async function RolePage({ params }: RolePageProps) {
  /**
   * Fetch data from API
   */
  const data = await getAllRoles<RolesDataType[]>();
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
        <Accordion />
      </main>
    </React.Fragment>
  );
}
