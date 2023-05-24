import { infoToolTipError } from '../utils/consts';

export const errorHandler = (err, setInfoToolTipType) => {
  if (err.message === '409') {
    setInfoToolTipType({  ...infoToolTipError, text: 'Этот email уже занят!' });
  } else if (err.message === '401') {
    setInfoToolTipType({ ...infoToolTipError, text: 'Неверный email или пароль!' });
  } else if (err.message === '400') {
    setInfoToolTipType({ ...infoToolTipError, text: 'Одно или несколько полей заполнены некорректно!' });
  } else {
    setInfoToolTipType(infoToolTipError);
  }
};