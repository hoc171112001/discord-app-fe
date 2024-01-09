'use client';
import React, { FC } from 'react';
import { CollapseDescription } from '../../../shared/CollapseText/CollapseDescriptionText';
import { TextField } from '@mui/material';
import { useCollapse } from '@/shared/hooks/useCollapseHook';
import { BaseClientComponent } from '@/types';
import { IFormEntries } from './types';
import { RegisterFormValues } from '.';
import { useClientTranslation } from '@/config/i18n/client';

const fieldName = 'displayName';

interface IProps extends BaseClientComponent, IFormEntries<RegisterFormValues> {}

/**
 * @author
 * @function @DisplayName
 **/

export const DisplayName: FC<IProps> = ({ register, lang, control }) => {
  const { open, onOpen, onCollapse } = useCollapse();
  const { t } = useClientTranslation(lang as string, 'register');
  return (
    <div className="my-4">
      <label htmlFor={fieldName} className="text-desc font-semibold mb-2 text-xs inline-block">
        {t('displayNameLabel')}
      </label>
      <TextField {...register(fieldName)} size="small" id={fieldName} fullWidth onFocus={onOpen} onBlur={onCollapse} />
      <CollapseDescription open={open}>{t('displayNameDescription')}</CollapseDescription>
    </div>
  );
};
