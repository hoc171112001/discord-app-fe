'use client';

import { useEffect, useState } from 'react';
import { Control, FieldValues, Path, useWatch } from 'react-hook-form';

type AddditionHook<T extends FieldValues> = {
  control?: Control<T>;
  fieldName: Path<T>;
  isSubmited?: boolean;
};

export const useShowAdditionText = <T extends FieldValues>({ control, fieldName, isSubmited }: AddditionHook<T>) => {
  const watchedValue = useWatch({ control, name: fieldName });
  const [showAdditionText, setShowAdditionText] = useState<boolean>(false);

  useEffect(() => {
    if (!watchedValue && isSubmited) {
      setShowAdditionText(true);
    }
  }, [watchedValue, isSubmited]);

  return {
    showAdditionText,
    watchedValue
  };
};
