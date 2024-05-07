export const environment = {
  production: true,
};

// @ts-ignore
export const BASE_URL = (window['env']['apiUrl']==null) ? "" : window['env']['apiUrl'];

/* -- ERRORS -- */
export const SAVE_ERROR: String =
  'No se pudo guardar. Verificá que todos los campos estén completos.';
export const LOGIN_ERROR: String = 'Usuario y/o contraseña incorrecto(s)';

/* -- SUCCESS -- */
export const SAVED_TIP: String = 'Tip guardado';
export const SAVED_IMAGE: String = 'Imagen guardada';
export const SAVED_PODCAST: String = 'Podcast guardado';
export const SAVED_MSG: String =
  'Gracias por comunicarte. Pronto nos ponemos en contacto.';
export const SAVED_EXPERIENCE: String =
  'Gracias por contarnos tu experiencia, cuando sea aprobada aparecerá en el listado.';
export const SAVED_CHANGES: String = 'Cambios guardados';
export const SAVED_RESPONSE: String = 'Respuesta guardada';

/* -- CLASS -- */
export const SUCCESS_CLASS: String = 'success';
export const ERROR_CLASS: String = 'error';

/* -- WARNINGS -- */

export const PRIVATE_DATA: String =
  'Tus datos están a salvo, sólo serán visibles para los administradores.';
export const PENDING_DATA: String =
  'Tu mensaje se hará visible cuando sea aprobado por un/a administrador/a';
