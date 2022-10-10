import { infoToolTipError } from '../utils/consts';

export const errorHandler = (err, setInfoToolTipType) => {
  if (err.message === '409') {
    setInfoToolTipType({ isOpen: true, type: 'error', text: 'Этот email уже занят!' });
  } else if (err.message === '401') {
    setInfoToolTipType({ isOpen: true, type: 'error', text: 'Неверный email или пароль!' });
  } else if (err.message === '400') {
    setInfoToolTipType({ isOpen: true, type: 'error', text: 'Одно или несколько полей заполнены некорректно!' });
  } else {
    setInfoToolTipType(infoToolTipError);
  }
}



