export const VALIDATE_USERNAME_REGEX = /^[a-zA-Z0-9_.]+$/;

export const isValidRegex = (str: string, regex: RegExp): boolean => {
  return regex.test(str);
};
