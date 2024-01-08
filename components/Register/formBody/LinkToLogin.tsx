'use client';
import { useClientTranslation } from '@/config/i18n/client';
import { BaseClientComponent } from '@/types';
import Link from 'next/link';
import React, { FC } from 'react';

interface IProps extends BaseClientComponent {}

/**
 * @author
 * @function @LinkToLogin
 **/

export const LinkToLogin: FC<IProps> = ({ lang }) => {
  const { t } = useClientTranslation(lang as string, 'register');
  return (
    <div className="text-sm mt-5 text-blue-500 hover:cursor-pointer hover:underline">
      <Link href={'/authen/login'}>{t('haveAnAccount')}</Link>
    </div>
  );
};
