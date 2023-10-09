export default {
  forms: {
    login: {
      caption: 'Вход в систему',
    },
    register: {
      caption: 'Регистрация нового пользователя',
    },
    'pwd-reset': {
      caption: 'Восстановление пароля',
    },

    'user-profile': {
      caption: 'Профиль пользователя'
    },

    'reg-end': {
      caption: 'Спасибо за регистрацию! На указанный вами Email отправлено письмо со ссылкой для активации аккаунта.'
    },

    'email-confirmation': {
      confirm: 'Активировать аккаунт',
      'error-header': 'Ошибка активации',
      'error-text': 'Ссылка недействительна. Либо, аккаунт уже активирован, либо вы переходите по неверной ссылке.'
    }
  },

  components: {
    login: {
      'username-label': 'Логин (E-mail)',
      'password-label': 'Пароль',
      'remember-label': 'Запомнить',
      'login-button-title': 'Выполнить вход в систему по логину и паролю',
      'login-button-text': 'Войти',
      'login-with-label': 'Войти с помощью:',
      'register-button-title': 'Пройти быструю процедуру регистрации',
      'register-button-text': 'Зарегистрироваться',
      'pwd-reset-button-title': 'Если пароль был утерян, то его можно восстановить',
      'pwd-reset-button-text': 'Восстановить пароль'
    },
    register: {
      'username-label': 'Логин (E-mail):',
      'full-name-label': 'ФИО',
      'register-button-title': 'Зарегистрировать пользователя',
      'register-button-text': 'Регистрация',
      'register-with-label': 'Зарегистрироваться при помощи:',
      'login-reset-label': 'Регистрировались ранее?',
      'login-button-title': 'Войти в систему по логину и паролю',
      'login-button-text': 'Войти',
      'pwd-reset-button-title': 'Если пароль был утерян, то его можно восстановить',
      'pwd-reset-button-text': 'Восстановить пароль'
    },
    'pwd-reset': {
      'username-label': 'Логин (E-mail)',
      'pwd-reset-button-title': 'Запрос на восстановление пароля для указанного логина',
      'pwd-reset-button-text': 'Восстановить пароль',
      'login-button-title': 'Войти в систему по логину и паролю',
      'login-button-text': 'Войти',
      'register-button-title': 'Пройти быструю процедуру регистрации',
      'register-button-text': 'Зарегистрироваться'
    },
    'user-profile': {
    }
  }
};
