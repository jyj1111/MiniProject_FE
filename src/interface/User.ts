/**
 * Defines Role of User
 *
 * @readonly
 * @enum { string } ADMIN, USER, UNDETERMINED
 */
export enum Role {
  /**
   * User's role is an admin
   */
  ADMIN = 'ADMIN',
  /**
   * User's role is a user
   */
  USER = 'USER',
  /**
   * User's role never assigned, may use for INITIAL VALUE
   */
  UNDETERMINED = 'UNDETERMINED',
}

/**
 * Default user interface.
 * @interface User
 *
 * @property { id } number
 * @property { username} string
 * @property { email } string
 */
interface User {
  /**
   * id: number
   */
  id: number;
  username: string;
  email: string;
}

/**
 * Usage: MyPage User Object
 * @interface MyUser
 *
 * @property { id } number
 * @property { username} string
 * @property { email } string
 * @property { role } enum
 *
 * {@link Role}
 */
export interface MyUser extends User {
  role: Role;
}

/**
 * Usage: Admin Page
 * @interface AuthUser
 * @extends MyUser
 *
 * @property { id } number
 * @property { username} string
 * @property { email } string
 * @property { role } enum
 *
 * @property { createAt } string
 * @property { imageUri } string
 *
 * {@link Role}
 *
 * {@link MyUser}
 */
export interface AuthUser extends MyUser {
  createAt: string;
  imageUri: string;
}
