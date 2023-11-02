'use client';
import React from 'react';
import Image from 'next/image';
import css from '@/styles/main.module.scss';
import Dropdown from '@/components/hero-dropdown';
import { useRouter } from 'next/navigation';
import { RolesDataType } from '@/typings/roles';

type HeroContentProps = {
  slug: string;
  data: RolesDataType[];
};

const HeroContent = ({ slug, data }: HeroContentProps) => {
  const router = useRouter();
  /**
   * Navigate to selected role
   * @param href
   */
  const onSelect = (href: string) => {
    router.push(href);
  };
  /**
   * Get current role from data
   */
  const currentRole = data.find((item) => item.slug === slug);
  /**
   * Remove current role from dropdown
   */
  const removeCurrentRole = data
    .filter((item) => item.slug !== slug)
    .map((item) => {
      return {
        title: item.name as string,
        image: item.image.small as string,
        href: item.slug as string,
      };
    });
  return (
    <React.Fragment>
      <div className={css['hero_content']}>
        <div className={css['content']}>
          <Dropdown
            currentRole={currentRole as RolesDataType}
            onSelect={onSelect}
            items={removeCurrentRole}
          />
          <div className={css['heading']}>
            <h1>
              {currentRole?.content.headings.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    {item.type === 'gradient' ? (
                      <div className={css['text-gradient']}>{item.text}</div>
                    ) : (
                      item.text
                    )}
                  </React.Fragment>
                );
              })}
            </h1>
          </div>
        </div>
        <div className={css['description']}>
          {currentRole?.content.quote.split('—').map((item, index) => {
            return (
              <React.Fragment key={index}>
                <p>
                  {index === 1 && '—'}
                  {item}
                </p>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className={css['hero_image']}>
        <Image
          src={currentRole?.image?.large as string}
          alt={currentRole?.name as string}
          width={512}
          height={512}
        />
      </div>
    </React.Fragment>
  );
};
export default HeroContent;
