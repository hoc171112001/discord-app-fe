'use client';
import { useClientTranslation } from '@/config/i18n/client';
import { BaseClientComponent } from '@/types';
import React, { FC } from 'react';
interface IProps extends BaseClientComponent {}
/**
 * @author
 * @function @MoreInfo
 **/
export const MoreInfo: FC<IProps> = ({ lang }) => {
  const { t } = useClientTranslation(lang as string, 'register');
  return (
    <div className="text-desc text-ss mt-1">
      <span>{t('policyDesc')}</span>
      <span className="text-blue-500 hover:underline hover:cursor-pointer px-1">{t('termOfService')}</span>
      <span>and</span>
      <span className="text-blue-500 hover:underline hover:cursor-pointer px-1">{t('privacy')}</span>
    </div>
  );
};
