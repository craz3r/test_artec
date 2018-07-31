export const validateYear = value => {
  if (value) {
    return (value > 0 && value < (new Date()).getFullYear() + 1 ? undefined : 'Invalid year');
  } else {
    return undefined;
  }
}

export const validateText = value => (value ? undefined : 'Please fill this field');

export const validateRuntime = value => {
  if (value) {
    return (value > 0 ? undefined : 'Invalid runtime');
  } else {
    return undefined;
  }
}
