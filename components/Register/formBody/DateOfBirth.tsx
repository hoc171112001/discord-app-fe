import { MONTH_KEYS } from '@/app/authen/register/constants';
import { useClientTranslation } from '@/config/i18n/client';
import { StatusAdditionLabel } from '@/shared/StatusAdditionLabel';
import { BaseClientComponent } from '@/types';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { MenuItem, Select } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

const selectProps: any = {
  displayEmpty: true,
  fullWidth: true,
  size: 'small',
  IconComponent: () => <KeyboardArrowDownSharpIcon style={{ color: '#aaa' }} />,
  inputProps: { 'aria-label': 'Without label' },
  defaultValue: '',
  MenuProps: {
    classes: { list: 'custom-select' },
    PaperProps: {
      style: {
        maxHeight: 160,
        color: '#aaa'
      }
    }
  }
};

const getMonthsOption = (t: Function) => {
  return MONTH_KEYS.map((month: { key: string; value: number }) => (
    <MenuItem key={month.key} value={(month.value + 1).toString()}>
      {t(month.key)}
    </MenuItem>
  ));
};

const generateDaysInMonth = () => {
  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  return days.map(days => (
    <MenuItem key={days} value={(days + 1).toString()}>
      {days}
    </MenuItem>
  ));
};

const generateYear = () => {
  const years = Array.from({ length: 100 }, (_, index) => {
    if (index + 1970 > 2020) return;
    return index + 1970;
  });
  return years.map(years =>
    years ? (
      <MenuItem key={years} value={years.toString()}>
        {years}
      </MenuItem>
    ) : null
  );
};

interface IDobValues {
  day: string;
  month: string;
  year: string;
}

const defaultValue: IDobValues = {
  day: '',
  month: '',
  year: ''
};

const fieldName = 'dob';

const isAllKeyHasValue = (object: Object) => {
  const rs = Object.values(object).every(v => !!v);
  console.log('rs :', rs);
  return rs;
};

interface IProps extends BaseClientComponent {
  isSubmited: boolean;
  setFormValue: (_name: 'dob', _value: string) => void;
}

/**
 * @author
 * @function @DateOfBirth
 **/

export const DateOfBirth: FC<IProps> = ({ lang, isSubmited, setFormValue }) => {
  const [dobValues, setDobValues] = useState<IDobValues>(defaultValue);
  const [showAdditionText, setShowAdditionText] = useState<boolean>(false);
  const { t } = useClientTranslation(lang as string, 'register');
  const onChangeDob = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDobValues(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };
  useEffect(() => {
    if (!isAllKeyHasValue(dobValues)) {
      if (!isSubmited) return;
      setShowAdditionText(true);
      return;
    }
    setFormValue('dob', `${dobValues.day}/${dobValues.month}/${dobValues.year}`);
    setShowAdditionText(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dobValues, isSubmited]);

  return (
    <div className="my-4">
      <StatusAdditionLabel
        type="error"
        htmlFor={fieldName}
        required={true}
        showAdditionText={showAdditionText}
        additionText={t('required')}
      >
        {t('dobLabel')}
      </StatusAdditionLabel>
      <div className="select-group flex gap-2">
        <Select {...selectProps} name="month" onChange={onChangeDob}>
          <MenuItem value="" style={{ display: 'none' }}>
            <em>{t('monthPlaceholder')}</em>
          </MenuItem>
          {getMonthsOption(t)}
        </Select>
        <Select {...selectProps} name="day" onChange={onChangeDob}>
          <MenuItem style={{ display: 'none' }} value="">
            <em>{t('dayPlaceholder')}</em>
          </MenuItem>
          {generateDaysInMonth()}
        </Select>
        <Select {...selectProps} name="year" onChange={onChangeDob}>
          <MenuItem style={{ display: 'none' }} value="">
            <em>{t('yearPlaceholder')}</em>
          </MenuItem>
          {generateYear()}
        </Select>
      </div>
    </div>
  );
};
