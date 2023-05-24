export const BASE_URL = 'https://api.raccoondiploma.nomoredomains.sbs';

export const infoToolTipError = ({
  isOpen: true,
  type: 'error',
  text: 'Что-то пошло не так! Попробуйте ещё раз',
});


export const infoToolTipSuccess = ({
isOpen: true,
type: 'success',
text: 'Вы успешно зарегистрировались',
})

export const infoToolTipSelect = ({
  isOpen: true,
  type: 'select',
  text: 'Вы уверены?',
});

const shortMovieDuration = 40;

const SCREEN_PARAMS = {
  desktop: {
    width: 1024,
    cards: {
      total: 12,
      more: 4,
    },
  },
  tablet: {
    width: 680,
    cards: {
      total: 8,
      more: 2,
    },
  },
  mobile: {
    width: 585,
    cards: {
      total: 5,
      more: 2,
    },
  },
};

export { SCREEN_PARAMS, shortMovieDuration };