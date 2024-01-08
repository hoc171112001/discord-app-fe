'use client';
import React, { FC } from 'react';

interface IProps {
  children: React.ReactNode;
  type: 'error';
  htmlFor: string;
  required: boolean;
  showAdditionText?: boolean;
  additionText?: React.ReactNode;
}

const generateClass = ({
  type,
  required,
  showAdditionText
}: {
  type: string;
  required: boolean;
  showAdditionText?: boolean;
}) => {
  const classArr = ['text-desc', 'font-semibold', 'mb-2', 'text-xs', 'inline-block'];
  if (showAdditionText && type) {
    classArr.push(`${type}-color`);
  }
  if (!showAdditionText && required) {
    classArr.push('label-required');
  }
  return classArr.join(' ');
};

/**
 * @author
 * @function @StatusAdditionLabel use to perform addition text at the end of children, with colors and also can control hidden props
 **/

export const StatusAdditionLabel: FC<IProps> = ({
  children,
  type,
  htmlFor,
  additionText,
  required,
  showAdditionText
}) => {
  return (
    <label htmlFor={htmlFor} className={`${generateClass({ type, required, showAdditionText })}`}>
      {children}
      {showAdditionText && (
        <>
          <span
            style={{ padding: '0 4px', margin: 0 }}
            className={`${generateClass({ type, required, showAdditionText })}`}
          >
            -
          </span>
          <span
            style={{
              fontWeight: '300',
              fontStyle: 'italic',
              margin: 0
            }}
            className={`${generateClass({ type, required, showAdditionText })}`}
          >
            {additionText}
          </span>{' '}
        </>
      )}
    </label>
  );
};
