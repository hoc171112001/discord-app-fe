import { isValidRegex } from '@/constants';
import { useEffect, useState } from 'react';
import { Control, FieldValues, Path, useWatch } from 'react-hook-form';

interface Params<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  patern: RegExp;
}

export const useCheckValidFormValueByRegex = <T extends FieldValues>({ control, name, patern }: Params<T>) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const value = useWatch({ control, name });

  useEffect(() => {
    if (!value) return;
    setIsValid(isValidRegex(value, patern));
  }, [value]);

  return { isValid, name, value };
};
