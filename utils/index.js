export const emailValidator = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  if (cellphone.length <= 14 && cellphone.length >= 15) return 'Por favor, preencha seu celular corretamente com DDD.';
  return '';
}

export const cpfValidator = (cpf) => {
  if (cpf.length <= 10) return 'Por favor, preencha um CPF válido.';
  return '';
}
