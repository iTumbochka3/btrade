// import { message } from 'ant-design-vue'

const localCode = (code) => {
  switch (code) {
    case "KEYCLOAK_USER_ALREADY_EXIST":
      return "Пользователь с таким email уже зарегистрирован";
    case "UnknownException":
      return "Непредвиденная ошибка системы";
    case "Invalid user credentials":
      return "Не верный логин или пароль";
    case "FILE_NOT_FOUND_ON_SERVER":
      return "Файл не найден на сервере";
    default:
      return code;
  }
};

const showErrors = (error) => {
  error?.response?.data?.result?.errors.forEach((el) => {
    if (el.message) {
      // return message.error(el.message);
    } else {
      // return message.error(localCode(el.code));
    }
  });
};

export const errorCatcher = (error) => {
  if (error?.response?.data?.result) {
    error?.response?.data?.result?.errors.forEach((el) => {
      if (el.message) {
        throw new Error(el.message);
      } else {
        throw new Error(localCode(el.code));
      }
    });
  } else {
    throw new Error(localCode(error?.response?.data?.message));
  }
};

export const errorKeycloakCatcher = (error) => {
  throw new Error(localCode(error?.response?.data?.error_description));
};

export default showErrors;
