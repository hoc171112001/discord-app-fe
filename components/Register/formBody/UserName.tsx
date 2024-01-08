'use client';
import React, { FC } from 'react';
import { CollapseDescription } from '../../../shared/CollapseText/CollapseDescriptionText';
import { TextField } from '@mui/material';
import { useCollapse } from '@/shared/hooks/useCollapseHook';
import { BaseClientComponent } from '@/types';
import { IFormEntries } from './types';
import { RegisterFormValues } from '.';
import { useClientTranslation } from '@/config/i18n/client';
import { useShowAdditionText } from '@/shared/hooks/useShowAdditionText';
import { StatusAdditionLabel } from '@/shared/StatusAdditionLabel';
import { useCheckValidFormValueByRegex } from '@/shared/hooks/useValidFormValueByRegex';
import { VALIDATE_USERNAME_REGEX } from '@/constants';

interface IProps extends BaseClientComponent, IFormEntries<RegisterFormValues> {}

/**
 * @author
 * @function @UserName
 **/

export const UserName: FC<IProps> = ({ register, control, isSubmited, lang }) => {
  const { open, onOpen, onCollapse } = useCollapse();
  const fieldName = 'userName';
  const { showAdditionText } = useShowAdditionText<RegisterFormValues>({
    control,
    fieldName,
    isSubmited
  });
  const { t } = useClientTranslation(lang as string, 'register');

  const { isValid, value } = useCheckValidFormValueByRegex<RegisterFormValues>({
    control,
    name: fieldName,
    patern: VALIDATE_USERNAME_REGEX
  });

  const onBlurTextField = () => {
    if (!isValid && value) return;
    onCollapse();
  };

  const getColor = () => {
    if (!value) return 'default';
    if (!isValid) {
      return 'error';
    }
    return 'success';
  };

  return (
    <>
      <StatusAdditionLabel
        type="error"
        htmlFor={fieldName}
        required={true}
        showAdditionText={showAdditionText}
        additionText={t('required')}
      >
        {t('userNameLabel')}
      </StatusAdditionLabel>
      <TextField
        {...register(fieldName)}
        size="small"
        id={fieldName}
        fullWidth
        onFocus={onOpen}
        onBlur={onBlurTextField}
      />
      <CollapseDescription open={open} color={getColor()}>
        {t('userNameDescription')}
      </CollapseDescription>
    </>
  );
};
