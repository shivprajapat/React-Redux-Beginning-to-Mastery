import { AR, EN, ES, RU } from '../constants'
const langa = { locale: 'en' }
export const lang = (state = langa, action = {}) => {
  switch (action.type) {
    case EN:
      return {
        ...state,
        locale: 'en'
      }
    case ES:
      return {
        ...state,
        locale: 'es'
      }
    case RU:
      return {
        ...state,
        locale: 'ru'
      }

    case AR:
      return {
        ...state,
        locale: 'ar'
      }
    default:
      return state
  }
}
