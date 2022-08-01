import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modalSlice';

export const useModal = () => {
  const dispatch = useDispatch();
  return {
    openModalConfirm: (
      title: any,
      description: any,
      acceptButton?: boolean,
      acceptButtonLabel?: any,
    ) => {
      dispatch(openModal({ title, description, acceptButton, acceptButtonLabel }));
    },
  };
};
