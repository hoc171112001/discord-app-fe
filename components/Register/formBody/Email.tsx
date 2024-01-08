// "use client";
import { useClientTranslation } from '@/config/i18n/client';
import { StatusAdditionLabel } from '@/shared/StatusAdditionLabel';
import { useShowAdditionText } from '@/shared/hooks/useShowAdditionText';
import { BaseClientComponent } from '@/types';
import { TextField } from '@mui/material';
import { FC } from 'react';
import { RegisterFormValues } from '.';
import { IFormEntries } from './types';

const fieldName = 'email';
interface IProps extends BaseClientComponent, IFormEntries<RegisterFormValues> {}

/**
 * @author
 * @function @Email
 **/

export const Email: FC<IProps> = ({ register, control, isSubmited, lang }) => {
  const { t } = useClientTranslation(lang as string, 'register');
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
        {t('emailLabel')}
      </StatusAdditionLabel>

      <TextField size="small" id={fieldName} type={fieldName} fullWidth {...register(fieldName)} />
    </div>
  );
};
