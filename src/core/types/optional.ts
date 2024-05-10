/**
 * Make some or all of the properties of an object optional.
 *
 * @template T The type of the object to make optional.
 * @template K The names of the properties to make optional.
 *
 * @example
 * interface User {
 *   name: string;
 *   age: number;
 * }
 *
 * // The `age` property is optional.
 * type OptionalUser = Optional<User, 'age'>;
 *
 * function getUser(): OptionalUser {
 *   return { name: 'Alice' };
 * }
 *
 * @see {@link https://github.com/pillarjs/optional-js#readme|optional-js}
 */
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
