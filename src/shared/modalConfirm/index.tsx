import { Button } from '@mui/material';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modalSlice';
import { AuthBox } from '../authBox/authBox';
import styles from './modal.module.scss';
interface IProps {
  visible?: boolean;
  title?: any;
  acceptButton?: boolean;
  acceptButtonLabel?: any;
  description?: any;
}

/**
* @author
* @function @ModalConfirm

**/

export const ModalConfirm: FC<IProps> = ({
  visible = false,
  title,
  acceptButtonLabel = 'Accept',
  acceptButton = true,
  description = '',
}) => {
  const dispatch = useDispatch();
  return (
    <>
      {visible && (
        <div className={styles.modalWrapper}>
          <AuthBox
            style={{ padding: '16px' }}
            body={
              <div>
                {title && <div className={styles.formcontrol}>{title}</div>}
                {description && <div className={styles.formcontrol}>{description}</div>}
                {acceptButton && (
                  <div className={`${styles.formcontrol} ${styles.buttonModal}`}>
                    <Button
                      variant="contained"
                      className="button-primary"
                      style={{ textAlign: 'right', textTransform: 'capitalize' }}
                      onClick={() => {
                        dispatch(closeModal());
                      }}
                    >
                      {acceptButtonLabel}
                    </Button>
                  </div>
                )}
              </div>
            }
          />
        </div>
      )}
    </>
  );
};
