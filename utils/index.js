export const emailValidator = (email) => {
    const re = /\S+@\S+\.\S+/;
    if (!email || email.length <= 0) return 'Por favor, preencha seu email.';
    if (!re.test(email)) return 'Ooops! Nós precisamos de um email que seja válido.';
    return '';
  };
  
  export const passwordValidator = (password) => {
    if (!password || password.length <= 0) return 'Por favor, preencha sua senha.';
    return '';
  };
  
  export const nameValidator = (name) => {
    if (!name || name.length <= 0) return 'Por favor, preencha seu nome completo.';
    return '';
  };

  export const cellphoneValidator = (cellphone) => {
    if (cellphone.length <= 13) return 'Por favor, preencha seu celular corretamente.';
    return '';
  }