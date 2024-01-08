'use client';
import { useClientTranslation } from '@/config/i18n/client';
import { BaseClientComponent } from '@/types';
import { Checkbox, FormControlLabel } from '@mui/material';
import React, { FC } from 'react';
import { RegisterFormValues } from '.';
import { IFormEntries } from './types';
interface IProps extends BaseClientComponent, IFormEntries<RegisterFormValues> {}
/**
 * @author
 * @function @EmailAnnouncement
 **/
export const EmailAnnouncement: FC<IProps> = ({ lang, register }) => {
  const { t } = useClientTranslation(lang as string, 'register');
  const fieldName = 'emailInformRegistry';
  return (
    <div className="my-4 flex items-start justify-center">
      <FormControlLabel
        control={<Checkbox size="medium" className="shrink-0 p-0" />}
        label={t('registerMailAnnouncement')}
        {...register(fieldName)}
      />
    </div>
  );
};
