'use client';
import React from 'react';
import Image from 'next/image';
import css from '@/styles/dropdown.module.scss';
import Arrowdown from '../icons/Arrowdown';
import ArrowUp from '../icons/ArrowUp';
import { RolesDataType } from '@/typings/roles';

type ItemProps = {
  title: string;
  image: string;
  href: string;
};

type DropdownProps = {
  onSelect: (href: string) => void;
  items: {} & ItemProps[];
  currentRole: RolesDataType;
};

/**
 * Hero Dropdown Component
 * @returns
 */

const Dropdown = ({ items, onSelect, currentRole }: DropdownProps) => {
  return (
    <div className={css['dropdown']}>
      <div className={css['image']}>
        <Image
          src={currentRole?.image.small as string}
          alt={currentRole?.name as string}
          width={24}
          height={24}
        />
      </div>
      <div className={css['text']}>
        <h4>{currentRole?.name as string}</h4>
        <span>
          <Arrowdown width={24} height={24} fill="#fff" />
        </span>
      </div>
      {/* Dropdown Model */}
      <div className={css['dropdown-model']}>
        <div className={css['header']}>
          <span>Role</span>
          <span>
            <ArrowUp width={24} height={24} fill="#000" />
          </span>
        </div>
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index} onClick={() => onSelect(item.href)}>
                <Item {...item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Dropdown;

const Item = ({ image, title }: ItemProps) => {
  return (
    <React.Fragment>
      <div className={css['image']}>
        <Image
          src={image as string}
          alt={title as string}
          width={24}
          height={24}
        />
      </div>
      <div className={css['text']}>
        <h4>{title}</h4>
        <span>
          <Arrowdown width={24} height={24} fill="#fff" />
        </span>
      </div>
    </React.Fragment>
  );
};
