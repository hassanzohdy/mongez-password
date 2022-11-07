import { compareSync, hashSync } from "bcryptjs";

let defaultSalt = 15;

export function setDefaultPasswordSalt(salt: number) {
  defaultSalt = salt;
}

/**
 * Hash the given password
 */
export function hash(data: any, salt = defaultSalt): string {
  return hashSync(String(data), salt);
}

/**
 * Verify the given password against the given hash
 */
export function verify(cipherText: string, data: any): boolean {
  return compareSync(String(data), cipherText);
}

const Password = {
  /**
   * Generate a hash from a password
   */
  generate: hash,
  /**
   * Verify a password against a hash
   */
  verify,
};

export default Password;
