'use client';
import { useClientTranslation } from '@/config/i18n/client';
import { StatusAdditionLabel } from '@/shared/StatusAdditionLabel';
import { useShowAdditionText } from '@/shared/hooks/useShowAdditionText';
import { BaseClientComponent } from '@/types';
import { TextField } from '@mui/material';
import { FC } from 'react';
import { RegisterFormValues } from '.';
import { IFormEntries } from './types';

interface IProps extends BaseClientComponent, IFormEntries<RegisterFormValues> {}

/**
 * @author
 * @function @Password
 **/

export const Password: FC<IProps> = ({ control, isSubmited, lang, register }) => {
  const { t } = useClientTranslation(lang as string, 'register');
  const fieldName = 'password';
  const { showAdditionText } = useShowAdditionText<RegisterFormValues>({
    control,
    fieldName,
    isSubmited
  });

  return (
    <div className="my-4">
      <StatusAdditionLabel
        type="error"
        htmlFor={fieldName}
        required={true}
        showAdditionText={showAdditionText}
        additionText={t('required')}
      >
        {t('passwordLabel')}
      </StatusAdditionLabel>
      <TextField {...register(fieldName)} size="small" id={fieldName} type="password" fullWidth required />
    </div>
  );
};
