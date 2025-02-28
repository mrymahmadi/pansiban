
/**
 * Client
**/

import * as runtime from '.././runtime/library.d.ts';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Position
 * 
 */
export type Position = $Result.DefaultSelection<Prisma.$PositionPayload>
/**
 * Model Pansion
 * 
 */
export type Pansion = $Result.DefaultSelection<Prisma.$PansionPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Province
 * 
 */
export type Province = $Result.DefaultSelection<Prisma.$ProvincePayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model PosInPansion
 * 
 */
export type PosInPansion = $Result.DefaultSelection<Prisma.$PosInPansionPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Options
 * 
 */
export type Options = $Result.DefaultSelection<Prisma.$OptionsPayload>
/**
 * Model ponsionOptions
 * 
 */
export type ponsionOptions = $Result.DefaultSelection<Prisma.$ponsionOptionsPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Contract: {
  ANNUALLY: 'ANNUALLY',
  FOUR_MONTHS: 'FOUR_MONTHS'
};

export type Contract = (typeof Contract)[keyof typeof Contract]


export const PansionType: {
  EMPLOYEE: 'EMPLOYEE',
  STUDENT: 'STUDENT'
};

export type PansionType = (typeof PansionType)[keyof typeof PansionType]


export const Role: {
  GHOST: 'GHOST',
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Contract = $Enums.Contract

export const Contract: typeof $Enums.Contract

export type PansionType = $Enums.PansionType

export const PansionType: typeof $Enums.PansionType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **Position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.PositionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pansion`: Exposes CRUD operations for the **Pansion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pansions
    * const pansions = await prisma.pansion.findMany()
    * ```
    */
  get pansion(): Prisma.PansionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.province`: Exposes CRUD operations for the **Province** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.province.findMany()
    * ```
    */
  get province(): Prisma.ProvinceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posInPansion`: Exposes CRUD operations for the **PosInPansion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PosInPansions
    * const posInPansions = await prisma.posInPansion.findMany()
    * ```
    */
  get posInPansion(): Prisma.PosInPansionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.options`: Exposes CRUD operations for the **Options** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.options.findMany()
    * ```
    */
  get options(): Prisma.OptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ponsionOptions`: Exposes CRUD operations for the **ponsionOptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PonsionOptions
    * const ponsionOptions = await prisma.ponsionOptions.findMany()
    * ```
    */
  get ponsionOptions(): Prisma.ponsionOptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Position: 'Position',
    Pansion: 'Pansion',
    Room: 'Room',
    Province: 'Province',
    City: 'City',
    PosInPansion: 'PosInPansion',
    Comment: 'Comment',
    Options: 'Options',
    ponsionOptions: 'ponsionOptions',
    Category: 'Category'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "position" | "pansion" | "room" | "province" | "city" | "posInPansion" | "comment" | "options" | "ponsionOptions" | "category"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Position: {
        payload: Prisma.$PositionPayload<ExtArgs>
        fields: Prisma.PositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findFirst: {
            args: Prisma.PositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findMany: {
            args: Prisma.PositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          create: {
            args: Prisma.PositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          createMany: {
            args: Prisma.PositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          delete: {
            args: Prisma.PositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          update: {
            args: Prisma.PositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          deleteMany: {
            args: Prisma.PositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PositionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          upsert: {
            args: Prisma.PositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          aggregate: {
            args: Prisma.PositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosition>
          }
          groupBy: {
            args: Prisma.PositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionCountArgs<ExtArgs>
            result: $Utils.Optional<PositionCountAggregateOutputType> | number
          }
        }
      }
      Pansion: {
        payload: Prisma.$PansionPayload<ExtArgs>
        fields: Prisma.PansionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PansionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PansionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PansionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PansionPayload>
          }
          findFirst: {
            args: Prisma.PansionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PansionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PansionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PansionPayload>
          }
          findMany: {
            args: Prisma.PansionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PansionPayload>[]
          }
          create: {
            args: Prisma.PansionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PansionPayload>
          }
          createMany: {
            args: Prisma.PansionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PansionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PansionPayload>[]
          }
          delete: {
            args: Prisma.PansionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PansionPayload>
          }
          update: {
            args: Prisma.PansionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PansionPayload>
          }
          deleteMany: {
            args: Prisma.PansionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PansionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PansionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PansionPayload>[]
          }
          upsert: {
            args: Prisma.PansionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PansionPayload>
          }
          aggregate: {
            args: Prisma.PansionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePansion>
          }
          groupBy: {
            args: Prisma.PansionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PansionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PansionCountArgs<ExtArgs>
            result: $Utils.Optional<PansionCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Province: {
        payload: Prisma.$ProvincePayload<ExtArgs>
        fields: Prisma.ProvinceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProvinceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvinceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          findFirst: {
            args: Prisma.ProvinceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvinceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          findMany: {
            args: Prisma.ProvinceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          create: {
            args: Prisma.ProvinceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          createMany: {
            args: Prisma.ProvinceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProvinceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          delete: {
            args: Prisma.ProvinceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          update: {
            args: Prisma.ProvinceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          deleteMany: {
            args: Prisma.ProvinceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProvinceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProvinceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          upsert: {
            args: Prisma.ProvinceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          aggregate: {
            args: Prisma.ProvinceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvince>
          }
          groupBy: {
            args: Prisma.ProvinceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvinceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProvinceCountArgs<ExtArgs>
            result: $Utils.Optional<ProvinceCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      PosInPansion: {
        payload: Prisma.$PosInPansionPayload<ExtArgs>
        fields: Prisma.PosInPansionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PosInPansionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosInPansionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PosInPansionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosInPansionPayload>
          }
          findFirst: {
            args: Prisma.PosInPansionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosInPansionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PosInPansionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosInPansionPayload>
          }
          findMany: {
            args: Prisma.PosInPansionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosInPansionPayload>[]
          }
          create: {
            args: Prisma.PosInPansionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosInPansionPayload>
          }
          createMany: {
            args: Prisma.PosInPansionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PosInPansionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosInPansionPayload>[]
          }
          delete: {
            args: Prisma.PosInPansionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosInPansionPayload>
          }
          update: {
            args: Prisma.PosInPansionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosInPansionPayload>
          }
          deleteMany: {
            args: Prisma.PosInPansionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PosInPansionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PosInPansionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosInPansionPayload>[]
          }
          upsert: {
            args: Prisma.PosInPansionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosInPansionPayload>
          }
          aggregate: {
            args: Prisma.PosInPansionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosInPansion>
          }
          groupBy: {
            args: Prisma.PosInPansionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PosInPansionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PosInPansionCountArgs<ExtArgs>
            result: $Utils.Optional<PosInPansionCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Options: {
        payload: Prisma.$OptionsPayload<ExtArgs>
        fields: Prisma.OptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsPayload>
          }
          findFirst: {
            args: Prisma.OptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsPayload>
          }
          findMany: {
            args: Prisma.OptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsPayload>[]
          }
          create: {
            args: Prisma.OptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsPayload>
          }
          createMany: {
            args: Prisma.OptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsPayload>[]
          }
          delete: {
            args: Prisma.OptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsPayload>
          }
          update: {
            args: Prisma.OptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsPayload>
          }
          deleteMany: {
            args: Prisma.OptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsPayload>[]
          }
          upsert: {
            args: Prisma.OptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsPayload>
          }
          aggregate: {
            args: Prisma.OptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOptions>
          }
          groupBy: {
            args: Prisma.OptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionsCountArgs<ExtArgs>
            result: $Utils.Optional<OptionsCountAggregateOutputType> | number
          }
        }
      }
      ponsionOptions: {
        payload: Prisma.$ponsionOptionsPayload<ExtArgs>
        fields: Prisma.ponsionOptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ponsionOptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ponsionOptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ponsionOptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ponsionOptionsPayload>
          }
          findFirst: {
            args: Prisma.ponsionOptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ponsionOptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ponsionOptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ponsionOptionsPayload>
          }
          findMany: {
            args: Prisma.ponsionOptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ponsionOptionsPayload>[]
          }
          create: {
            args: Prisma.ponsionOptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ponsionOptionsPayload>
          }
          createMany: {
            args: Prisma.ponsionOptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ponsionOptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ponsionOptionsPayload>[]
          }
          delete: {
            args: Prisma.ponsionOptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ponsionOptionsPayload>
          }
          update: {
            args: Prisma.ponsionOptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ponsionOptionsPayload>
          }
          deleteMany: {
            args: Prisma.ponsionOptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ponsionOptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ponsionOptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ponsionOptionsPayload>[]
          }
          upsert: {
            args: Prisma.ponsionOptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ponsionOptionsPayload>
          }
          aggregate: {
            args: Prisma.PonsionOptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePonsionOptions>
          }
          groupBy: {
            args: Prisma.ponsionOptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PonsionOptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ponsionOptionsCountArgs<ExtArgs>
            result: $Utils.Optional<PonsionOptionsCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    position?: PositionOmit
    pansion?: PansionOmit
    room?: RoomOmit
    province?: ProvinceOmit
    city?: CityOmit
    posInPansion?: PosInPansionOmit
    comment?: CommentOmit
    options?: OptionsOmit
    ponsionOptions?: ponsionOptionsOmit
    category?: CategoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    PosInPansion: number
    ponsionOptions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PosInPansion?: boolean | UserCountOutputTypeCountPosInPansionArgs
    ponsionOptions?: boolean | UserCountOutputTypeCountPonsionOptionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPosInPansionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosInPansionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPonsionOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ponsionOptionsWhereInput
  }


  /**
   * Count Type PositionCountOutputType
   */

  export type PositionCountOutputType = {
    PosInPansion: number
    users: number
  }

  export type PositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PosInPansion?: boolean | PositionCountOutputTypeCountPosInPansionArgs
    users?: boolean | PositionCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionCountOutputType
     */
    select?: PositionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeCountPosInPansionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosInPansionWhereInput
  }

  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type PansionCountOutputType
   */

  export type PansionCountOutputType = {
    positions: number
    rooms: number
    users: number
    ponsionOptions: number
  }

  export type PansionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    positions?: boolean | PansionCountOutputTypeCountPositionsArgs
    rooms?: boolean | PansionCountOutputTypeCountRoomsArgs
    users?: boolean | PansionCountOutputTypeCountUsersArgs
    ponsionOptions?: boolean | PansionCountOutputTypeCountPonsionOptionsArgs
  }

  // Custom InputTypes
  /**
   * PansionCountOutputType without action
   */
  export type PansionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PansionCountOutputType
     */
    select?: PansionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PansionCountOutputType without action
   */
  export type PansionCountOutputTypeCountPositionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosInPansionWhereInput
  }

  /**
   * PansionCountOutputType without action
   */
  export type PansionCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * PansionCountOutputType without action
   */
  export type PansionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * PansionCountOutputType without action
   */
  export type PansionCountOutputTypeCountPonsionOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ponsionOptionsWhereInput
  }


  /**
   * Count Type ProvinceCountOutputType
   */

  export type ProvinceCountOutputType = {
    cities: number
    pansions: number
    users: number
  }

  export type ProvinceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | ProvinceCountOutputTypeCountCitiesArgs
    pansions?: boolean | ProvinceCountOutputTypeCountPansionsArgs
    users?: boolean | ProvinceCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvinceCountOutputType
     */
    select?: ProvinceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeCountCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
  }

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeCountPansionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PansionWhereInput
  }

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    pansions: number
    users: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pansions?: boolean | CityCountOutputTypeCountPansionsArgs
    users?: boolean | CityCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountPansionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PansionWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    pansions: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pansions?: boolean | CommentCountOutputTypeCountPansionsArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountPansionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PansionWhereInput
  }


  /**
   * Count Type OptionsCountOutputType
   */

  export type OptionsCountOutputType = {
    ponsionOptions: number
  }

  export type OptionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ponsionOptions?: boolean | OptionsCountOutputTypeCountPonsionOptionsArgs
  }

  // Custom InputTypes
  /**
   * OptionsCountOutputType without action
   */
  export type OptionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionsCountOutputType
     */
    select?: OptionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OptionsCountOutputType without action
   */
  export type OptionsCountOutputTypeCountPonsionOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ponsionOptionsWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    rooms: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | CategoryCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    positionId: number | null
    pansionId: number | null
    provinceId: number | null
    cityId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    positionId: number | null
    pansionId: number | null
    provinceId: number | null
    cityId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    email: string | null
    positionId: number | null
    pansionId: number | null
    provinceId: number | null
    cityId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    email: string | null
    positionId: number | null
    pansionId: number | null
    provinceId: number | null
    cityId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    phone: number
    email: number
    positionId: number
    pansionId: number
    provinceId: number
    cityId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    positionId?: true
    pansionId?: true
    provinceId?: true
    cityId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    positionId?: true
    pansionId?: true
    provinceId?: true
    cityId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    email?: true
    positionId?: true
    pansionId?: true
    provinceId?: true
    cityId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    email?: true
    positionId?: true
    pansionId?: true
    provinceId?: true
    cityId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    email?: true
    positionId?: true
    pansionId?: true
    provinceId?: true
    cityId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    phone: string
    email: string
    positionId: number
    pansionId: number
    provinceId: number
    cityId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    positionId?: boolean
    pansionId?: boolean
    provinceId?: boolean
    cityId?: boolean
    PosInPansion?: boolean | User$PosInPansionArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
    ponsionOptions?: boolean | User$ponsionOptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    positionId?: boolean
    pansionId?: boolean
    provinceId?: boolean
    cityId?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    positionId?: boolean
    pansionId?: boolean
    provinceId?: boolean
    cityId?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    positionId?: boolean
    pansionId?: boolean
    provinceId?: boolean
    cityId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "phone" | "email" | "positionId" | "pansionId" | "provinceId" | "cityId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PosInPansion?: boolean | User$PosInPansionArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
    ponsionOptions?: boolean | User$ponsionOptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      PosInPansion: Prisma.$PosInPansionPayload<ExtArgs>[]
      city: Prisma.$CityPayload<ExtArgs>
      pansion: Prisma.$PansionPayload<ExtArgs>
      position: Prisma.$PositionPayload<ExtArgs>
      province: Prisma.$ProvincePayload<ExtArgs>
      ponsionOptions: Prisma.$ponsionOptionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      phone: string
      email: string
      positionId: number
      pansionId: number
      provinceId: number
      cityId: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PosInPansion<T extends User$PosInPansionArgs<ExtArgs> = {}>(args?: Subset<T, User$PosInPansionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosInPansionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    pansion<T extends PansionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PansionDefaultArgs<ExtArgs>>): Prisma__PansionClient<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    position<T extends PositionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PositionDefaultArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    province<T extends ProvinceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvinceDefaultArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    ponsionOptions<T extends User$ponsionOptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$ponsionOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ponsionOptionsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly positionId: FieldRef<"User", 'Int'>
    readonly pansionId: FieldRef<"User", 'Int'>
    readonly provinceId: FieldRef<"User", 'Int'>
    readonly cityId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.PosInPansion
   */
  export type User$PosInPansionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosInPansion
     */
    select?: PosInPansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosInPansion
     */
    omit?: PosInPansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInPansionInclude<ExtArgs> | null
    where?: PosInPansionWhereInput
    orderBy?: PosInPansionOrderByWithRelationInput | PosInPansionOrderByWithRelationInput[]
    cursor?: PosInPansionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PosInPansionScalarFieldEnum | PosInPansionScalarFieldEnum[]
  }

  /**
   * User.ponsionOptions
   */
  export type User$ponsionOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ponsionOptions
     */
    select?: ponsionOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ponsionOptions
     */
    omit?: ponsionOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ponsionOptionsInclude<ExtArgs> | null
    where?: ponsionOptionsWhereInput
    orderBy?: ponsionOptionsOrderByWithRelationInput | ponsionOptionsOrderByWithRelationInput[]
    cursor?: ponsionOptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PonsionOptionsScalarFieldEnum | PonsionOptionsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Position
   */

  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionAvgAggregateOutputType = {
    id: number | null
  }

  export type PositionSumAggregateOutputType = {
    id: number | null
  }

  export type PositionMinAggregateOutputType = {
    id: number | null
    name: string | null
    level: $Enums.Role | null
  }

  export type PositionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    level: $Enums.Role | null
  }

  export type PositionCountAggregateOutputType = {
    id: number
    name: number
    level: number
    _all: number
  }


  export type PositionAvgAggregateInputType = {
    id?: true
  }

  export type PositionSumAggregateInputType = {
    id?: true
  }

  export type PositionMinAggregateInputType = {
    id?: true
    name?: true
    level?: true
  }

  export type PositionMaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
  }

  export type PositionCountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    _all?: true
  }

  export type PositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Position to aggregate.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type PositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithAggregationInput | PositionOrderByWithAggregationInput[]
    by: PositionScalarFieldEnum[] | PositionScalarFieldEnum
    having?: PositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _avg?: PositionAvgAggregateInputType
    _sum?: PositionSumAggregateInputType
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }

  export type PositionGroupByOutputType = {
    id: number
    name: string
    level: $Enums.Role
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends PositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type PositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    PosInPansion?: boolean | Position$PosInPansionArgs<ExtArgs>
    users?: boolean | Position$usersArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
  }, ExtArgs["result"]["position"]>

  export type PositionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
  }, ExtArgs["result"]["position"]>

  export type PositionSelectScalar = {
    id?: boolean
    name?: boolean
    level?: boolean
  }

  export type PositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "level", ExtArgs["result"]["position"]>
  export type PositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PosInPansion?: boolean | Position$PosInPansionArgs<ExtArgs>
    users?: boolean | Position$usersArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PositionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Position"
    objects: {
      PosInPansion: Prisma.$PosInPansionPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      level: $Enums.Role
    }, ExtArgs["result"]["position"]>
    composites: {}
  }

  type PositionGetPayload<S extends boolean | null | undefined | PositionDefaultArgs> = $Result.GetResult<Prisma.$PositionPayload, S>

  type PositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionCountAggregateInputType | true
    }

  export interface PositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Position'], meta: { name: 'Position' } }
    /**
     * Find zero or one Position that matches the filter.
     * @param {PositionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PositionFindUniqueArgs>(args: SelectSubset<T, PositionFindUniqueArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Position that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PositionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs>(args: SelectSubset<T, PositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PositionFindFirstArgs>(args?: SelectSubset<T, PositionFindFirstArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs>(args?: SelectSubset<T, PositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionWithIdOnly = await prisma.position.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PositionFindManyArgs>(args?: SelectSubset<T, PositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Position.
     * @param {PositionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
     */
    create<T extends PositionCreateArgs>(args: SelectSubset<T, PositionCreateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Positions.
     * @param {PositionCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PositionCreateManyArgs>(args?: SelectSubset<T, PositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Positions and returns the data saved in the database.
     * @param {PositionCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Positions and only return the `id`
     * const positionWithIdOnly = await prisma.position.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PositionCreateManyAndReturnArgs>(args?: SelectSubset<T, PositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Position.
     * @param {PositionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
     */
    delete<T extends PositionDeleteArgs>(args: SelectSubset<T, PositionDeleteArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Position.
     * @param {PositionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PositionUpdateArgs>(args: SelectSubset<T, PositionUpdateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Positions.
     * @param {PositionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PositionDeleteManyArgs>(args?: SelectSubset<T, PositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PositionUpdateManyArgs>(args: SelectSubset<T, PositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions and returns the data updated in the database.
     * @param {PositionUpdateManyAndReturnArgs} args - Arguments to update many Positions.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Positions and only return the `id`
     * const positionWithIdOnly = await prisma.position.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PositionUpdateManyAndReturnArgs>(args: SelectSubset<T, PositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Position.
     * @param {PositionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
     */
    upsert<T extends PositionUpsertArgs>(args: SelectSubset<T, PositionUpsertArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionCountArgs>(
      args?: Subset<T, PositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionGroupByArgs['orderBy'] }
        : { orderBy?: PositionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Position model
   */
  readonly fields: PositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PosInPansion<T extends Position$PosInPansionArgs<ExtArgs> = {}>(args?: Subset<T, Position$PosInPansionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosInPansionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    users<T extends Position$usersArgs<ExtArgs> = {}>(args?: Subset<T, Position$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Position model
   */ 
  interface PositionFieldRefs {
    readonly id: FieldRef<"Position", 'Int'>
    readonly name: FieldRef<"Position", 'String'>
    readonly level: FieldRef<"Position", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Position findUnique
   */
  export type PositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findUniqueOrThrow
   */
  export type PositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findFirst
   */
  export type PositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findFirstOrThrow
   */
  export type PositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findMany
   */
  export type PositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position create
   */
  export type PositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to create a Position.
     */
    data: XOR<PositionCreateInput, PositionUncheckedCreateInput>
  }

  /**
   * Position createMany
   */
  export type PositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Position createManyAndReturn
   */
  export type PositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Position update
   */
  export type PositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to update a Position.
     */
    data: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    /**
     * Choose, which Position to update.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position updateMany
   */
  export type PositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Position updateManyAndReturn
   */
  export type PositionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Position upsert
   */
  export type PositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The filter to search for the Position to update in case it exists.
     */
    where: PositionWhereUniqueInput
    /**
     * In case the Position found by the `where` argument doesn't exist, create a new Position with this data.
     */
    create: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    /**
     * In case the Position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
  }

  /**
   * Position delete
   */
  export type PositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter which Position to delete.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position deleteMany
   */
  export type PositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to delete
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to delete.
     */
    limit?: number
  }

  /**
   * Position.PosInPansion
   */
  export type Position$PosInPansionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosInPansion
     */
    select?: PosInPansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosInPansion
     */
    omit?: PosInPansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInPansionInclude<ExtArgs> | null
    where?: PosInPansionWhereInput
    orderBy?: PosInPansionOrderByWithRelationInput | PosInPansionOrderByWithRelationInput[]
    cursor?: PosInPansionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PosInPansionScalarFieldEnum | PosInPansionScalarFieldEnum[]
  }

  /**
   * Position.users
   */
  export type Position$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Position without action
   */
  export type PositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
  }


  /**
   * Model Pansion
   */

  export type AggregatePansion = {
    _count: PansionCountAggregateOutputType | null
    _avg: PansionAvgAggregateOutputType | null
    _sum: PansionSumAggregateOutputType | null
    _min: PansionMinAggregateOutputType | null
    _max: PansionMaxAggregateOutputType | null
  }

  export type PansionAvgAggregateOutputType = {
    id: number | null
    Capacity: number | null
    advancePayment: number | null
    chargeMony: number | null
    commentId: number | null
    provinceId: number | null
    cityId: number | null
    numberOfRoom: number | null
    numberOfBed: number | null
  }

  export type PansionSumAggregateOutputType = {
    id: number | null
    Capacity: number | null
    advancePayment: number | null
    chargeMony: number | null
    commentId: number | null
    provinceId: number | null
    cityId: number | null
    numberOfRoom: number | null
    numberOfBed: number | null
  }

  export type PansionMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    address: string | null
    codeParvane: string | null
    Capacity: number | null
    advancePayment: number | null
    chargeMony: number | null
    active: boolean | null
    typeOfContract: $Enums.Contract | null
    imageUrl: string | null
    description: string | null
    commentId: number | null
    provinceId: number | null
    cityId: number | null
    typeOfPansion: $Enums.PansionType | null
    numberOfRoom: number | null
    numberOfBed: number | null
  }

  export type PansionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    address: string | null
    codeParvane: string | null
    Capacity: number | null
    advancePayment: number | null
    chargeMony: number | null
    active: boolean | null
    typeOfContract: $Enums.Contract | null
    imageUrl: string | null
    description: string | null
    commentId: number | null
    provinceId: number | null
    cityId: number | null
    typeOfPansion: $Enums.PansionType | null
    numberOfRoom: number | null
    numberOfBed: number | null
  }

  export type PansionCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    address: number
    codeParvane: number
    Capacity: number
    advancePayment: number
    chargeMony: number
    active: number
    typeOfContract: number
    imageUrl: number
    description: number
    commentId: number
    provinceId: number
    cityId: number
    typeOfPansion: number
    numberOfRoom: number
    numberOfBed: number
    _all: number
  }


  export type PansionAvgAggregateInputType = {
    id?: true
    Capacity?: true
    advancePayment?: true
    chargeMony?: true
    commentId?: true
    provinceId?: true
    cityId?: true
    numberOfRoom?: true
    numberOfBed?: true
  }

  export type PansionSumAggregateInputType = {
    id?: true
    Capacity?: true
    advancePayment?: true
    chargeMony?: true
    commentId?: true
    provinceId?: true
    cityId?: true
    numberOfRoom?: true
    numberOfBed?: true
  }

  export type PansionMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    codeParvane?: true
    Capacity?: true
    advancePayment?: true
    chargeMony?: true
    active?: true
    typeOfContract?: true
    imageUrl?: true
    description?: true
    commentId?: true
    provinceId?: true
    cityId?: true
    typeOfPansion?: true
    numberOfRoom?: true
    numberOfBed?: true
  }

  export type PansionMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    codeParvane?: true
    Capacity?: true
    advancePayment?: true
    chargeMony?: true
    active?: true
    typeOfContract?: true
    imageUrl?: true
    description?: true
    commentId?: true
    provinceId?: true
    cityId?: true
    typeOfPansion?: true
    numberOfRoom?: true
    numberOfBed?: true
  }

  export type PansionCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    codeParvane?: true
    Capacity?: true
    advancePayment?: true
    chargeMony?: true
    active?: true
    typeOfContract?: true
    imageUrl?: true
    description?: true
    commentId?: true
    provinceId?: true
    cityId?: true
    typeOfPansion?: true
    numberOfRoom?: true
    numberOfBed?: true
    _all?: true
  }

  export type PansionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pansion to aggregate.
     */
    where?: PansionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pansions to fetch.
     */
    orderBy?: PansionOrderByWithRelationInput | PansionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PansionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pansions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pansions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pansions
    **/
    _count?: true | PansionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PansionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PansionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PansionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PansionMaxAggregateInputType
  }

  export type GetPansionAggregateType<T extends PansionAggregateArgs> = {
        [P in keyof T & keyof AggregatePansion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePansion[P]>
      : GetScalarType<T[P], AggregatePansion[P]>
  }




  export type PansionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PansionWhereInput
    orderBy?: PansionOrderByWithAggregationInput | PansionOrderByWithAggregationInput[]
    by: PansionScalarFieldEnum[] | PansionScalarFieldEnum
    having?: PansionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PansionCountAggregateInputType | true
    _avg?: PansionAvgAggregateInputType
    _sum?: PansionSumAggregateInputType
    _min?: PansionMinAggregateInputType
    _max?: PansionMaxAggregateInputType
  }

  export type PansionGroupByOutputType = {
    id: number
    name: string
    phone: string
    address: string
    codeParvane: string
    Capacity: number
    advancePayment: number | null
    chargeMony: number
    active: boolean
    typeOfContract: $Enums.Contract
    imageUrl: string | null
    description: string
    commentId: number | null
    provinceId: number
    cityId: number
    typeOfPansion: $Enums.PansionType
    numberOfRoom: number
    numberOfBed: number
    _count: PansionCountAggregateOutputType | null
    _avg: PansionAvgAggregateOutputType | null
    _sum: PansionSumAggregateOutputType | null
    _min: PansionMinAggregateOutputType | null
    _max: PansionMaxAggregateOutputType | null
  }

  type GetPansionGroupByPayload<T extends PansionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PansionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PansionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PansionGroupByOutputType[P]>
            : GetScalarType<T[P], PansionGroupByOutputType[P]>
        }
      >
    >


  export type PansionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    codeParvane?: boolean
    Capacity?: boolean
    advancePayment?: boolean
    chargeMony?: boolean
    active?: boolean
    typeOfContract?: boolean
    imageUrl?: boolean
    description?: boolean
    commentId?: boolean
    provinceId?: boolean
    cityId?: boolean
    typeOfPansion?: boolean
    numberOfRoom?: boolean
    numberOfBed?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    comment?: boolean | Pansion$commentArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
    positions?: boolean | Pansion$positionsArgs<ExtArgs>
    rooms?: boolean | Pansion$roomsArgs<ExtArgs>
    users?: boolean | Pansion$usersArgs<ExtArgs>
    ponsionOptions?: boolean | Pansion$ponsionOptionsArgs<ExtArgs>
    _count?: boolean | PansionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pansion"]>

  export type PansionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    codeParvane?: boolean
    Capacity?: boolean
    advancePayment?: boolean
    chargeMony?: boolean
    active?: boolean
    typeOfContract?: boolean
    imageUrl?: boolean
    description?: boolean
    commentId?: boolean
    provinceId?: boolean
    cityId?: boolean
    typeOfPansion?: boolean
    numberOfRoom?: boolean
    numberOfBed?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    comment?: boolean | Pansion$commentArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pansion"]>

  export type PansionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    codeParvane?: boolean
    Capacity?: boolean
    advancePayment?: boolean
    chargeMony?: boolean
    active?: boolean
    typeOfContract?: boolean
    imageUrl?: boolean
    description?: boolean
    commentId?: boolean
    provinceId?: boolean
    cityId?: boolean
    typeOfPansion?: boolean
    numberOfRoom?: boolean
    numberOfBed?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    comment?: boolean | Pansion$commentArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pansion"]>

  export type PansionSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    codeParvane?: boolean
    Capacity?: boolean
    advancePayment?: boolean
    chargeMony?: boolean
    active?: boolean
    typeOfContract?: boolean
    imageUrl?: boolean
    description?: boolean
    commentId?: boolean
    provinceId?: boolean
    cityId?: boolean
    typeOfPansion?: boolean
    numberOfRoom?: boolean
    numberOfBed?: boolean
  }

  export type PansionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "address" | "codeParvane" | "Capacity" | "advancePayment" | "chargeMony" | "active" | "typeOfContract" | "imageUrl" | "description" | "commentId" | "provinceId" | "cityId" | "typeOfPansion" | "numberOfRoom" | "numberOfBed", ExtArgs["result"]["pansion"]>
  export type PansionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    comment?: boolean | Pansion$commentArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
    positions?: boolean | Pansion$positionsArgs<ExtArgs>
    rooms?: boolean | Pansion$roomsArgs<ExtArgs>
    users?: boolean | Pansion$usersArgs<ExtArgs>
    ponsionOptions?: boolean | Pansion$ponsionOptionsArgs<ExtArgs>
    _count?: boolean | PansionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PansionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    comment?: boolean | Pansion$commentArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }
  export type PansionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    comment?: boolean | Pansion$commentArgs<ExtArgs>
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }

  export type $PansionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pansion"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
      comment: Prisma.$CommentPayload<ExtArgs> | null
      province: Prisma.$ProvincePayload<ExtArgs>
      positions: Prisma.$PosInPansionPayload<ExtArgs>[]
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      ponsionOptions: Prisma.$ponsionOptionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      address: string
      codeParvane: string
      Capacity: number
      advancePayment: number | null
      chargeMony: number
      active: boolean
      typeOfContract: $Enums.Contract
      imageUrl: string | null
      description: string
      commentId: number | null
      provinceId: number
      cityId: number
      typeOfPansion: $Enums.PansionType
      numberOfRoom: number
      numberOfBed: number
    }, ExtArgs["result"]["pansion"]>
    composites: {}
  }

  type PansionGetPayload<S extends boolean | null | undefined | PansionDefaultArgs> = $Result.GetResult<Prisma.$PansionPayload, S>

  type PansionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PansionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PansionCountAggregateInputType | true
    }

  export interface PansionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pansion'], meta: { name: 'Pansion' } }
    /**
     * Find zero or one Pansion that matches the filter.
     * @param {PansionFindUniqueArgs} args - Arguments to find a Pansion
     * @example
     * // Get one Pansion
     * const pansion = await prisma.pansion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PansionFindUniqueArgs>(args: SelectSubset<T, PansionFindUniqueArgs<ExtArgs>>): Prisma__PansionClient<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Pansion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PansionFindUniqueOrThrowArgs} args - Arguments to find a Pansion
     * @example
     * // Get one Pansion
     * const pansion = await prisma.pansion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PansionFindUniqueOrThrowArgs>(args: SelectSubset<T, PansionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PansionClient<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Pansion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PansionFindFirstArgs} args - Arguments to find a Pansion
     * @example
     * // Get one Pansion
     * const pansion = await prisma.pansion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PansionFindFirstArgs>(args?: SelectSubset<T, PansionFindFirstArgs<ExtArgs>>): Prisma__PansionClient<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Pansion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PansionFindFirstOrThrowArgs} args - Arguments to find a Pansion
     * @example
     * // Get one Pansion
     * const pansion = await prisma.pansion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PansionFindFirstOrThrowArgs>(args?: SelectSubset<T, PansionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PansionClient<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Pansions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PansionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pansions
     * const pansions = await prisma.pansion.findMany()
     * 
     * // Get first 10 Pansions
     * const pansions = await prisma.pansion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pansionWithIdOnly = await prisma.pansion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PansionFindManyArgs>(args?: SelectSubset<T, PansionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Pansion.
     * @param {PansionCreateArgs} args - Arguments to create a Pansion.
     * @example
     * // Create one Pansion
     * const Pansion = await prisma.pansion.create({
     *   data: {
     *     // ... data to create a Pansion
     *   }
     * })
     * 
     */
    create<T extends PansionCreateArgs>(args: SelectSubset<T, PansionCreateArgs<ExtArgs>>): Prisma__PansionClient<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Pansions.
     * @param {PansionCreateManyArgs} args - Arguments to create many Pansions.
     * @example
     * // Create many Pansions
     * const pansion = await prisma.pansion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PansionCreateManyArgs>(args?: SelectSubset<T, PansionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pansions and returns the data saved in the database.
     * @param {PansionCreateManyAndReturnArgs} args - Arguments to create many Pansions.
     * @example
     * // Create many Pansions
     * const pansion = await prisma.pansion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pansions and only return the `id`
     * const pansionWithIdOnly = await prisma.pansion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PansionCreateManyAndReturnArgs>(args?: SelectSubset<T, PansionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Pansion.
     * @param {PansionDeleteArgs} args - Arguments to delete one Pansion.
     * @example
     * // Delete one Pansion
     * const Pansion = await prisma.pansion.delete({
     *   where: {
     *     // ... filter to delete one Pansion
     *   }
     * })
     * 
     */
    delete<T extends PansionDeleteArgs>(args: SelectSubset<T, PansionDeleteArgs<ExtArgs>>): Prisma__PansionClient<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Pansion.
     * @param {PansionUpdateArgs} args - Arguments to update one Pansion.
     * @example
     * // Update one Pansion
     * const pansion = await prisma.pansion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PansionUpdateArgs>(args: SelectSubset<T, PansionUpdateArgs<ExtArgs>>): Prisma__PansionClient<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Pansions.
     * @param {PansionDeleteManyArgs} args - Arguments to filter Pansions to delete.
     * @example
     * // Delete a few Pansions
     * const { count } = await prisma.pansion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PansionDeleteManyArgs>(args?: SelectSubset<T, PansionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pansions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PansionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pansions
     * const pansion = await prisma.pansion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PansionUpdateManyArgs>(args: SelectSubset<T, PansionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pansions and returns the data updated in the database.
     * @param {PansionUpdateManyAndReturnArgs} args - Arguments to update many Pansions.
     * @example
     * // Update many Pansions
     * const pansion = await prisma.pansion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pansions and only return the `id`
     * const pansionWithIdOnly = await prisma.pansion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PansionUpdateManyAndReturnArgs>(args: SelectSubset<T, PansionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Pansion.
     * @param {PansionUpsertArgs} args - Arguments to update or create a Pansion.
     * @example
     * // Update or create a Pansion
     * const pansion = await prisma.pansion.upsert({
     *   create: {
     *     // ... data to create a Pansion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pansion we want to update
     *   }
     * })
     */
    upsert<T extends PansionUpsertArgs>(args: SelectSubset<T, PansionUpsertArgs<ExtArgs>>): Prisma__PansionClient<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Pansions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PansionCountArgs} args - Arguments to filter Pansions to count.
     * @example
     * // Count the number of Pansions
     * const count = await prisma.pansion.count({
     *   where: {
     *     // ... the filter for the Pansions we want to count
     *   }
     * })
    **/
    count<T extends PansionCountArgs>(
      args?: Subset<T, PansionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PansionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pansion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PansionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PansionAggregateArgs>(args: Subset<T, PansionAggregateArgs>): Prisma.PrismaPromise<GetPansionAggregateType<T>>

    /**
     * Group by Pansion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PansionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PansionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PansionGroupByArgs['orderBy'] }
        : { orderBy?: PansionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PansionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPansionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pansion model
   */
  readonly fields: PansionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pansion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PansionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    comment<T extends Pansion$commentArgs<ExtArgs> = {}>(args?: Subset<T, Pansion$commentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    province<T extends ProvinceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvinceDefaultArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    positions<T extends Pansion$positionsArgs<ExtArgs> = {}>(args?: Subset<T, Pansion$positionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosInPansionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    rooms<T extends Pansion$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Pansion$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    users<T extends Pansion$usersArgs<ExtArgs> = {}>(args?: Subset<T, Pansion$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    ponsionOptions<T extends Pansion$ponsionOptionsArgs<ExtArgs> = {}>(args?: Subset<T, Pansion$ponsionOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ponsionOptionsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pansion model
   */ 
  interface PansionFieldRefs {
    readonly id: FieldRef<"Pansion", 'Int'>
    readonly name: FieldRef<"Pansion", 'String'>
    readonly phone: FieldRef<"Pansion", 'String'>
    readonly address: FieldRef<"Pansion", 'String'>
    readonly codeParvane: FieldRef<"Pansion", 'String'>
    readonly Capacity: FieldRef<"Pansion", 'Int'>
    readonly advancePayment: FieldRef<"Pansion", 'Float'>
    readonly chargeMony: FieldRef<"Pansion", 'Float'>
    readonly active: FieldRef<"Pansion", 'Boolean'>
    readonly typeOfContract: FieldRef<"Pansion", 'Contract'>
    readonly imageUrl: FieldRef<"Pansion", 'String'>
    readonly description: FieldRef<"Pansion", 'String'>
    readonly commentId: FieldRef<"Pansion", 'Int'>
    readonly provinceId: FieldRef<"Pansion", 'Int'>
    readonly cityId: FieldRef<"Pansion", 'Int'>
    readonly typeOfPansion: FieldRef<"Pansion", 'PansionType'>
    readonly numberOfRoom: FieldRef<"Pansion", 'Int'>
    readonly numberOfBed: FieldRef<"Pansion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pansion findUnique
   */
  export type PansionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pansion
     */
    select?: PansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pansion
     */
    omit?: PansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PansionInclude<ExtArgs> | null
    /**
     * Filter, which Pansion to fetch.
     */
    where: PansionWhereUniqueInput
  }

  /**
   * Pansion findUniqueOrThrow
   */
  export type PansionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pansion
     */
    select?: PansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pansion
     */
    omit?: PansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PansionInclude<ExtArgs> | null
    /**
     * Filter, which Pansion to fetch.
     */
    where: PansionWhereUniqueInput
  }

  /**
   * Pansion findFirst
   */
  export type PansionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pansion
     */
    select?: PansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pansion
     */
    omit?: PansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PansionInclude<ExtArgs> | null
    /**
     * Filter, which Pansion to fetch.
     */
    where?: PansionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pansions to fetch.
     */
    orderBy?: PansionOrderByWithRelationInput | PansionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pansions.
     */
    cursor?: PansionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pansions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pansions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pansions.
     */
    distinct?: PansionScalarFieldEnum | PansionScalarFieldEnum[]
  }

  /**
   * Pansion findFirstOrThrow
   */
  export type PansionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pansion
     */
    select?: PansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pansion
     */
    omit?: PansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PansionInclude<ExtArgs> | null
    /**
     * Filter, which Pansion to fetch.
     */
    where?: PansionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pansions to fetch.
     */
    orderBy?: PansionOrderByWithRelationInput | PansionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pansions.
     */
    cursor?: PansionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pansions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pansions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pansions.
     */
    distinct?: PansionScalarFieldEnum | PansionScalarFieldEnum[]
  }

  /**
   * Pansion findMany
   */
  export type PansionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pansion
     */
    select?: PansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pansion
     */
    omit?: PansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PansionInclude<ExtArgs> | null
    /**
     * Filter, which Pansions to fetch.
     */
    where?: PansionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pansions to fetch.
     */
    orderBy?: PansionOrderByWithRelationInput | PansionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pansions.
     */
    cursor?: PansionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pansions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pansions.
     */
    skip?: number
    distinct?: PansionScalarFieldEnum | PansionScalarFieldEnum[]
  }

  /**
   * Pansion create
   */
  export type PansionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pansion
     */
    select?: PansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pansion
     */
    omit?: PansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PansionInclude<ExtArgs> | null
    /**
     * The data needed to create a Pansion.
     */
    data: XOR<PansionCreateInput, PansionUncheckedCreateInput>
  }

  /**
   * Pansion createMany
   */
  export type PansionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pansions.
     */
    data: PansionCreateManyInput | PansionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pansion createManyAndReturn
   */
  export type PansionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pansion
     */
    select?: PansionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pansion
     */
    omit?: PansionOmit<ExtArgs> | null
    /**
     * The data used to create many Pansions.
     */
    data: PansionCreateManyInput | PansionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PansionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pansion update
   */
  export type PansionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pansion
     */
    select?: PansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pansion
     */
    omit?: PansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PansionInclude<ExtArgs> | null
    /**
     * The data needed to update a Pansion.
     */
    data: XOR<PansionUpdateInput, PansionUncheckedUpdateInput>
    /**
     * Choose, which Pansion to update.
     */
    where: PansionWhereUniqueInput
  }

  /**
   * Pansion updateMany
   */
  export type PansionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pansions.
     */
    data: XOR<PansionUpdateManyMutationInput, PansionUncheckedUpdateManyInput>
    /**
     * Filter which Pansions to update
     */
    where?: PansionWhereInput
    /**
     * Limit how many Pansions to update.
     */
    limit?: number
  }

  /**
   * Pansion updateManyAndReturn
   */
  export type PansionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pansion
     */
    select?: PansionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pansion
     */
    omit?: PansionOmit<ExtArgs> | null
    /**
     * The data used to update Pansions.
     */
    data: XOR<PansionUpdateManyMutationInput, PansionUncheckedUpdateManyInput>
    /**
     * Filter which Pansions to update
     */
    where?: PansionWhereInput
    /**
     * Limit how many Pansions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PansionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pansion upsert
   */
  export type PansionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pansion
     */
    select?: PansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pansion
     */
    omit?: PansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PansionInclude<ExtArgs> | null
    /**
     * The filter to search for the Pansion to update in case it exists.
     */
    where: PansionWhereUniqueInput
    /**
     * In case the Pansion found by the `where` argument doesn't exist, create a new Pansion with this data.
     */
    create: XOR<PansionCreateInput, PansionUncheckedCreateInput>
    /**
     * In case the Pansion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PansionUpdateInput, PansionUncheckedUpdateInput>
  }

  /**
   * Pansion delete
   */
  export type PansionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pansion
     */
    select?: PansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pansion
     */
    omit?: PansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PansionInclude<ExtArgs> | null
    /**
     * Filter which Pansion to delete.
     */
    where: PansionWhereUniqueInput
  }

  /**
   * Pansion deleteMany
   */
  export type PansionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pansions to delete
     */
    where?: PansionWhereInput
    /**
     * Limit how many Pansions to delete.
     */
    limit?: number
  }

  /**
   * Pansion.comment
   */
  export type Pansion$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Pansion.positions
   */
  export type Pansion$positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosInPansion
     */
    select?: PosInPansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosInPansion
     */
    omit?: PosInPansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInPansionInclude<ExtArgs> | null
    where?: PosInPansionWhereInput
    orderBy?: PosInPansionOrderByWithRelationInput | PosInPansionOrderByWithRelationInput[]
    cursor?: PosInPansionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PosInPansionScalarFieldEnum | PosInPansionScalarFieldEnum[]
  }

  /**
   * Pansion.rooms
   */
  export type Pansion$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Pansion.users
   */
  export type Pansion$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Pansion.ponsionOptions
   */
  export type Pansion$ponsionOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ponsionOptions
     */
    select?: ponsionOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ponsionOptions
     */
    omit?: ponsionOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ponsionOptionsInclude<ExtArgs> | null
    where?: ponsionOptionsWhereInput
    orderBy?: ponsionOptionsOrderByWithRelationInput | ponsionOptionsOrderByWithRelationInput[]
    cursor?: ponsionOptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PonsionOptionsScalarFieldEnum | PonsionOptionsScalarFieldEnum[]
  }

  /**
   * Pansion without action
   */
  export type PansionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pansion
     */
    select?: PansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pansion
     */
    omit?: PansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PansionInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    numberRoom: number | null
    numberOfBeds: number | null
    rent: number | null
    pansionId: number | null
    categoryId: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    numberRoom: number | null
    numberOfBeds: number | null
    rent: number | null
    pansionId: number | null
    categoryId: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    numberRoom: number | null
    numberOfBeds: number | null
    rent: number | null
    pansionId: number | null
    categoryId: number | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    numberRoom: number | null
    numberOfBeds: number | null
    rent: number | null
    pansionId: number | null
    categoryId: number | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    numberRoom: number
    numberOfBeds: number
    rent: number
    pansionId: number
    categoryId: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    numberRoom?: true
    numberOfBeds?: true
    rent?: true
    pansionId?: true
    categoryId?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    numberRoom?: true
    numberOfBeds?: true
    rent?: true
    pansionId?: true
    categoryId?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    numberRoom?: true
    numberOfBeds?: true
    rent?: true
    pansionId?: true
    categoryId?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    numberRoom?: true
    numberOfBeds?: true
    rent?: true
    pansionId?: true
    categoryId?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    numberRoom?: true
    numberOfBeds?: true
    rent?: true
    pansionId?: true
    categoryId?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    numberRoom: number
    numberOfBeds: number
    rent: number
    pansionId: number
    categoryId: number
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numberRoom?: boolean
    numberOfBeds?: boolean
    rent?: boolean
    pansionId?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numberRoom?: boolean
    numberOfBeds?: boolean
    rent?: boolean
    pansionId?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numberRoom?: boolean
    numberOfBeds?: boolean
    rent?: boolean
    pansionId?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    numberRoom?: boolean
    numberOfBeds?: boolean
    rent?: boolean
    pansionId?: boolean
    categoryId?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numberRoom" | "numberOfBeds" | "rent" | "pansionId" | "categoryId", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      pansion: Prisma.$PansionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numberRoom: number
      numberOfBeds: number
      rent: number
      pansionId: number
      categoryId: number
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    pansion<T extends PansionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PansionDefaultArgs<ExtArgs>>): Prisma__PansionClient<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */ 
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly numberRoom: FieldRef<"Room", 'Int'>
    readonly numberOfBeds: FieldRef<"Room", 'Int'>
    readonly rent: FieldRef<"Room", 'Float'>
    readonly pansionId: FieldRef<"Room", 'Int'>
    readonly categoryId: FieldRef<"Room", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Province
   */

  export type AggregateProvince = {
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  export type ProvinceAvgAggregateOutputType = {
    id: number | null
  }

  export type ProvinceSumAggregateOutputType = {
    id: number | null
  }

  export type ProvinceMinAggregateOutputType = {
    id: number | null
    name: string | null
    enName: string | null
  }

  export type ProvinceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    enName: string | null
  }

  export type ProvinceCountAggregateOutputType = {
    id: number
    name: number
    enName: number
    _all: number
  }


  export type ProvinceAvgAggregateInputType = {
    id?: true
  }

  export type ProvinceSumAggregateInputType = {
    id?: true
  }

  export type ProvinceMinAggregateInputType = {
    id?: true
    name?: true
    enName?: true
  }

  export type ProvinceMaxAggregateInputType = {
    id?: true
    name?: true
    enName?: true
  }

  export type ProvinceCountAggregateInputType = {
    id?: true
    name?: true
    enName?: true
    _all?: true
  }

  export type ProvinceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Province to aggregate.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Provinces
    **/
    _count?: true | ProvinceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvinceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvinceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinceMaxAggregateInputType
  }

  export type GetProvinceAggregateType<T extends ProvinceAggregateArgs> = {
        [P in keyof T & keyof AggregateProvince]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvince[P]>
      : GetScalarType<T[P], AggregateProvince[P]>
  }




  export type ProvinceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvinceWhereInput
    orderBy?: ProvinceOrderByWithAggregationInput | ProvinceOrderByWithAggregationInput[]
    by: ProvinceScalarFieldEnum[] | ProvinceScalarFieldEnum
    having?: ProvinceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinceCountAggregateInputType | true
    _avg?: ProvinceAvgAggregateInputType
    _sum?: ProvinceSumAggregateInputType
    _min?: ProvinceMinAggregateInputType
    _max?: ProvinceMaxAggregateInputType
  }

  export type ProvinceGroupByOutputType = {
    id: number
    name: string
    enName: string
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  type GetProvinceGroupByPayload<T extends ProvinceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvinceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
        }
      >
    >


  export type ProvinceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enName?: boolean
    cities?: boolean | Province$citiesArgs<ExtArgs>
    pansions?: boolean | Province$pansionsArgs<ExtArgs>
    users?: boolean | Province$usersArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["province"]>

  export type ProvinceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enName?: boolean
  }, ExtArgs["result"]["province"]>

  export type ProvinceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enName?: boolean
  }, ExtArgs["result"]["province"]>

  export type ProvinceSelectScalar = {
    id?: boolean
    name?: boolean
    enName?: boolean
  }

  export type ProvinceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "enName", ExtArgs["result"]["province"]>
  export type ProvinceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | Province$citiesArgs<ExtArgs>
    pansions?: boolean | Province$pansionsArgs<ExtArgs>
    users?: boolean | Province$usersArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProvinceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProvinceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProvincePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Province"
    objects: {
      cities: Prisma.$CityPayload<ExtArgs>[]
      pansions: Prisma.$PansionPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      enName: string
    }, ExtArgs["result"]["province"]>
    composites: {}
  }

  type ProvinceGetPayload<S extends boolean | null | undefined | ProvinceDefaultArgs> = $Result.GetResult<Prisma.$ProvincePayload, S>

  type ProvinceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProvinceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvinceCountAggregateInputType | true
    }

  export interface ProvinceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Province'], meta: { name: 'Province' } }
    /**
     * Find zero or one Province that matches the filter.
     * @param {ProvinceFindUniqueArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvinceFindUniqueArgs>(args: SelectSubset<T, ProvinceFindUniqueArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Province that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProvinceFindUniqueOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvinceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProvinceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Province that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvinceFindFirstArgs>(args?: SelectSubset<T, ProvinceFindFirstArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Province that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvinceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProvinceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.province.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.province.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provinceWithIdOnly = await prisma.province.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProvinceFindManyArgs>(args?: SelectSubset<T, ProvinceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Province.
     * @param {ProvinceCreateArgs} args - Arguments to create a Province.
     * @example
     * // Create one Province
     * const Province = await prisma.province.create({
     *   data: {
     *     // ... data to create a Province
     *   }
     * })
     * 
     */
    create<T extends ProvinceCreateArgs>(args: SelectSubset<T, ProvinceCreateArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Provinces.
     * @param {ProvinceCreateManyArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProvinceCreateManyArgs>(args?: SelectSubset<T, ProvinceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Provinces and returns the data saved in the database.
     * @param {ProvinceCreateManyAndReturnArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Provinces and only return the `id`
     * const provinceWithIdOnly = await prisma.province.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProvinceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProvinceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Province.
     * @param {ProvinceDeleteArgs} args - Arguments to delete one Province.
     * @example
     * // Delete one Province
     * const Province = await prisma.province.delete({
     *   where: {
     *     // ... filter to delete one Province
     *   }
     * })
     * 
     */
    delete<T extends ProvinceDeleteArgs>(args: SelectSubset<T, ProvinceDeleteArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Province.
     * @param {ProvinceUpdateArgs} args - Arguments to update one Province.
     * @example
     * // Update one Province
     * const province = await prisma.province.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProvinceUpdateArgs>(args: SelectSubset<T, ProvinceUpdateArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Provinces.
     * @param {ProvinceDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.province.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProvinceDeleteManyArgs>(args?: SelectSubset<T, ProvinceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProvinceUpdateManyArgs>(args: SelectSubset<T, ProvinceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces and returns the data updated in the database.
     * @param {ProvinceUpdateManyAndReturnArgs} args - Arguments to update many Provinces.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Provinces and only return the `id`
     * const provinceWithIdOnly = await prisma.province.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProvinceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProvinceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Province.
     * @param {ProvinceUpsertArgs} args - Arguments to update or create a Province.
     * @example
     * // Update or create a Province
     * const province = await prisma.province.upsert({
     *   create: {
     *     // ... data to create a Province
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Province we want to update
     *   }
     * })
     */
    upsert<T extends ProvinceUpsertArgs>(args: SelectSubset<T, ProvinceUpsertArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.province.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends ProvinceCountArgs>(
      args?: Subset<T, ProvinceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvinceAggregateArgs>(args: Subset<T, ProvinceAggregateArgs>): Prisma.PrismaPromise<GetProvinceAggregateType<T>>

    /**
     * Group by Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProvinceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvinceGroupByArgs['orderBy'] }
        : { orderBy?: ProvinceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProvinceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Province model
   */
  readonly fields: ProvinceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Province.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProvinceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cities<T extends Province$citiesArgs<ExtArgs> = {}>(args?: Subset<T, Province$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    pansions<T extends Province$pansionsArgs<ExtArgs> = {}>(args?: Subset<T, Province$pansionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    users<T extends Province$usersArgs<ExtArgs> = {}>(args?: Subset<T, Province$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Province model
   */ 
  interface ProvinceFieldRefs {
    readonly id: FieldRef<"Province", 'Int'>
    readonly name: FieldRef<"Province", 'String'>
    readonly enName: FieldRef<"Province", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Province findUnique
   */
  export type ProvinceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province findUniqueOrThrow
   */
  export type ProvinceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province findFirst
   */
  export type ProvinceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province findFirstOrThrow
   */
  export type ProvinceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province findMany
   */
  export type ProvinceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province create
   */
  export type ProvinceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The data needed to create a Province.
     */
    data: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
  }

  /**
   * Province createMany
   */
  export type ProvinceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Provinces.
     */
    data: ProvinceCreateManyInput | ProvinceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Province createManyAndReturn
   */
  export type ProvinceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * The data used to create many Provinces.
     */
    data: ProvinceCreateManyInput | ProvinceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Province update
   */
  export type ProvinceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The data needed to update a Province.
     */
    data: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
    /**
     * Choose, which Province to update.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province updateMany
   */
  export type ProvinceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Provinces.
     */
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to update.
     */
    limit?: number
  }

  /**
   * Province updateManyAndReturn
   */
  export type ProvinceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * The data used to update Provinces.
     */
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to update.
     */
    limit?: number
  }

  /**
   * Province upsert
   */
  export type ProvinceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The filter to search for the Province to update in case it exists.
     */
    where: ProvinceWhereUniqueInput
    /**
     * In case the Province found by the `where` argument doesn't exist, create a new Province with this data.
     */
    create: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
    /**
     * In case the Province was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
  }

  /**
   * Province delete
   */
  export type ProvinceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter which Province to delete.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province deleteMany
   */
  export type ProvinceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provinces to delete
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to delete.
     */
    limit?: number
  }

  /**
   * Province.cities
   */
  export type Province$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    cursor?: CityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * Province.pansions
   */
  export type Province$pansionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pansion
     */
    select?: PansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pansion
     */
    omit?: PansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PansionInclude<ExtArgs> | null
    where?: PansionWhereInput
    orderBy?: PansionOrderByWithRelationInput | PansionOrderByWithRelationInput[]
    cursor?: PansionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PansionScalarFieldEnum | PansionScalarFieldEnum[]
  }

  /**
   * Province.users
   */
  export type Province$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Province without action
   */
  export type ProvinceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    id: number | null
    provinceId: number | null
  }

  export type CitySumAggregateOutputType = {
    id: number | null
    provinceId: number | null
  }

  export type CityMinAggregateOutputType = {
    id: number | null
    name: string | null
    enName: string | null
    provinceId: number | null
  }

  export type CityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    enName: string | null
    provinceId: number | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    enName: number
    provinceId: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    id?: true
    provinceId?: true
  }

  export type CitySumAggregateInputType = {
    id?: true
    provinceId?: true
  }

  export type CityMinAggregateInputType = {
    id?: true
    name?: true
    enName?: true
    provinceId?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
    enName?: true
    provinceId?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    enName?: true
    provinceId?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: number
    name: string
    enName: string
    provinceId: number
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enName?: boolean
    provinceId?: boolean
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
    pansions?: boolean | City$pansionsArgs<ExtArgs>
    users?: boolean | City$usersArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enName?: boolean
    provinceId?: boolean
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enName?: boolean
    provinceId?: boolean
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    id?: boolean
    name?: boolean
    enName?: boolean
    provinceId?: boolean
  }

  export type CityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "enName" | "provinceId", ExtArgs["result"]["city"]>
  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
    pansions?: boolean | City$pansionsArgs<ExtArgs>
    users?: boolean | City$usersArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }
  export type CityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      province: Prisma.$ProvincePayload<ExtArgs>
      pansions: Prisma.$PansionPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      enName: string
      provinceId: number
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {CityCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityCreateManyAndReturnArgs>(args?: SelectSubset<T, CityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities and returns the data updated in the database.
     * @param {CityUpdateManyAndReturnArgs} args - Arguments to update many Cities.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CityUpdateManyAndReturnArgs>(args: SelectSubset<T, CityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    province<T extends ProvinceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvinceDefaultArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    pansions<T extends City$pansionsArgs<ExtArgs> = {}>(args?: Subset<T, City$pansionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    users<T extends City$usersArgs<ExtArgs> = {}>(args?: Subset<T, City$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the City model
   */ 
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'Int'>
    readonly name: FieldRef<"City", 'String'>
    readonly enName: FieldRef<"City", 'String'>
    readonly provinceId: FieldRef<"City", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City createManyAndReturn
   */
  export type CityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City updateManyAndReturn
   */
  export type CityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to delete.
     */
    limit?: number
  }

  /**
   * City.pansions
   */
  export type City$pansionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pansion
     */
    select?: PansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pansion
     */
    omit?: PansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PansionInclude<ExtArgs> | null
    where?: PansionWhereInput
    orderBy?: PansionOrderByWithRelationInput | PansionOrderByWithRelationInput[]
    cursor?: PansionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PansionScalarFieldEnum | PansionScalarFieldEnum[]
  }

  /**
   * City.users
   */
  export type City$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model PosInPansion
   */

  export type AggregatePosInPansion = {
    _count: PosInPansionCountAggregateOutputType | null
    _avg: PosInPansionAvgAggregateOutputType | null
    _sum: PosInPansionSumAggregateOutputType | null
    _min: PosInPansionMinAggregateOutputType | null
    _max: PosInPansionMaxAggregateOutputType | null
  }

  export type PosInPansionAvgAggregateOutputType = {
    positionId: number | null
    pansionId: number | null
    assignedBy: number | null
  }

  export type PosInPansionSumAggregateOutputType = {
    positionId: number | null
    pansionId: number | null
    assignedBy: number | null
  }

  export type PosInPansionMinAggregateOutputType = {
    positionId: number | null
    pansionId: number | null
    assignedAt: Date | null
    assignedBy: number | null
  }

  export type PosInPansionMaxAggregateOutputType = {
    positionId: number | null
    pansionId: number | null
    assignedAt: Date | null
    assignedBy: number | null
  }

  export type PosInPansionCountAggregateOutputType = {
    positionId: number
    pansionId: number
    assignedAt: number
    assignedBy: number
    _all: number
  }


  export type PosInPansionAvgAggregateInputType = {
    positionId?: true
    pansionId?: true
    assignedBy?: true
  }

  export type PosInPansionSumAggregateInputType = {
    positionId?: true
    pansionId?: true
    assignedBy?: true
  }

  export type PosInPansionMinAggregateInputType = {
    positionId?: true
    pansionId?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type PosInPansionMaxAggregateInputType = {
    positionId?: true
    pansionId?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type PosInPansionCountAggregateInputType = {
    positionId?: true
    pansionId?: true
    assignedAt?: true
    assignedBy?: true
    _all?: true
  }

  export type PosInPansionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PosInPansion to aggregate.
     */
    where?: PosInPansionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosInPansions to fetch.
     */
    orderBy?: PosInPansionOrderByWithRelationInput | PosInPansionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PosInPansionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosInPansions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosInPansions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PosInPansions
    **/
    _count?: true | PosInPansionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PosInPansionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PosInPansionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PosInPansionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PosInPansionMaxAggregateInputType
  }

  export type GetPosInPansionAggregateType<T extends PosInPansionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosInPansion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosInPansion[P]>
      : GetScalarType<T[P], AggregatePosInPansion[P]>
  }




  export type PosInPansionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosInPansionWhereInput
    orderBy?: PosInPansionOrderByWithAggregationInput | PosInPansionOrderByWithAggregationInput[]
    by: PosInPansionScalarFieldEnum[] | PosInPansionScalarFieldEnum
    having?: PosInPansionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PosInPansionCountAggregateInputType | true
    _avg?: PosInPansionAvgAggregateInputType
    _sum?: PosInPansionSumAggregateInputType
    _min?: PosInPansionMinAggregateInputType
    _max?: PosInPansionMaxAggregateInputType
  }

  export type PosInPansionGroupByOutputType = {
    positionId: number
    pansionId: number
    assignedAt: Date
    assignedBy: number
    _count: PosInPansionCountAggregateOutputType | null
    _avg: PosInPansionAvgAggregateOutputType | null
    _sum: PosInPansionSumAggregateOutputType | null
    _min: PosInPansionMinAggregateOutputType | null
    _max: PosInPansionMaxAggregateOutputType | null
  }

  type GetPosInPansionGroupByPayload<T extends PosInPansionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PosInPansionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PosInPansionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PosInPansionGroupByOutputType[P]>
            : GetScalarType<T[P], PosInPansionGroupByOutputType[P]>
        }
      >
    >


  export type PosInPansionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    positionId?: boolean
    pansionId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    assigned?: boolean | UserDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posInPansion"]>

  export type PosInPansionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    positionId?: boolean
    pansionId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    assigned?: boolean | UserDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posInPansion"]>

  export type PosInPansionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    positionId?: boolean
    pansionId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    assigned?: boolean | UserDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posInPansion"]>

  export type PosInPansionSelectScalar = {
    positionId?: boolean
    pansionId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
  }

  export type PosInPansionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"positionId" | "pansionId" | "assignedAt" | "assignedBy", ExtArgs["result"]["posInPansion"]>
  export type PosInPansionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned?: boolean | UserDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }
  export type PosInPansionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned?: boolean | UserDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }
  export type PosInPansionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned?: boolean | UserDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }

  export type $PosInPansionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PosInPansion"
    objects: {
      assigned: Prisma.$UserPayload<ExtArgs>
      pansion: Prisma.$PansionPayload<ExtArgs>
      position: Prisma.$PositionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      positionId: number
      pansionId: number
      assignedAt: Date
      assignedBy: number
    }, ExtArgs["result"]["posInPansion"]>
    composites: {}
  }

  type PosInPansionGetPayload<S extends boolean | null | undefined | PosInPansionDefaultArgs> = $Result.GetResult<Prisma.$PosInPansionPayload, S>

  type PosInPansionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PosInPansionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PosInPansionCountAggregateInputType | true
    }

  export interface PosInPansionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PosInPansion'], meta: { name: 'PosInPansion' } }
    /**
     * Find zero or one PosInPansion that matches the filter.
     * @param {PosInPansionFindUniqueArgs} args - Arguments to find a PosInPansion
     * @example
     * // Get one PosInPansion
     * const posInPansion = await prisma.posInPansion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PosInPansionFindUniqueArgs>(args: SelectSubset<T, PosInPansionFindUniqueArgs<ExtArgs>>): Prisma__PosInPansionClient<$Result.GetResult<Prisma.$PosInPansionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PosInPansion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PosInPansionFindUniqueOrThrowArgs} args - Arguments to find a PosInPansion
     * @example
     * // Get one PosInPansion
     * const posInPansion = await prisma.posInPansion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PosInPansionFindUniqueOrThrowArgs>(args: SelectSubset<T, PosInPansionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PosInPansionClient<$Result.GetResult<Prisma.$PosInPansionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PosInPansion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosInPansionFindFirstArgs} args - Arguments to find a PosInPansion
     * @example
     * // Get one PosInPansion
     * const posInPansion = await prisma.posInPansion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PosInPansionFindFirstArgs>(args?: SelectSubset<T, PosInPansionFindFirstArgs<ExtArgs>>): Prisma__PosInPansionClient<$Result.GetResult<Prisma.$PosInPansionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PosInPansion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosInPansionFindFirstOrThrowArgs} args - Arguments to find a PosInPansion
     * @example
     * // Get one PosInPansion
     * const posInPansion = await prisma.posInPansion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PosInPansionFindFirstOrThrowArgs>(args?: SelectSubset<T, PosInPansionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PosInPansionClient<$Result.GetResult<Prisma.$PosInPansionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PosInPansions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosInPansionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PosInPansions
     * const posInPansions = await prisma.posInPansion.findMany()
     * 
     * // Get first 10 PosInPansions
     * const posInPansions = await prisma.posInPansion.findMany({ take: 10 })
     * 
     * // Only select the `positionId`
     * const posInPansionWithPositionIdOnly = await prisma.posInPansion.findMany({ select: { positionId: true } })
     * 
     */
    findMany<T extends PosInPansionFindManyArgs>(args?: SelectSubset<T, PosInPansionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosInPansionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PosInPansion.
     * @param {PosInPansionCreateArgs} args - Arguments to create a PosInPansion.
     * @example
     * // Create one PosInPansion
     * const PosInPansion = await prisma.posInPansion.create({
     *   data: {
     *     // ... data to create a PosInPansion
     *   }
     * })
     * 
     */
    create<T extends PosInPansionCreateArgs>(args: SelectSubset<T, PosInPansionCreateArgs<ExtArgs>>): Prisma__PosInPansionClient<$Result.GetResult<Prisma.$PosInPansionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PosInPansions.
     * @param {PosInPansionCreateManyArgs} args - Arguments to create many PosInPansions.
     * @example
     * // Create many PosInPansions
     * const posInPansion = await prisma.posInPansion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PosInPansionCreateManyArgs>(args?: SelectSubset<T, PosInPansionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PosInPansions and returns the data saved in the database.
     * @param {PosInPansionCreateManyAndReturnArgs} args - Arguments to create many PosInPansions.
     * @example
     * // Create many PosInPansions
     * const posInPansion = await prisma.posInPansion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PosInPansions and only return the `positionId`
     * const posInPansionWithPositionIdOnly = await prisma.posInPansion.createManyAndReturn({
     *   select: { positionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PosInPansionCreateManyAndReturnArgs>(args?: SelectSubset<T, PosInPansionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosInPansionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PosInPansion.
     * @param {PosInPansionDeleteArgs} args - Arguments to delete one PosInPansion.
     * @example
     * // Delete one PosInPansion
     * const PosInPansion = await prisma.posInPansion.delete({
     *   where: {
     *     // ... filter to delete one PosInPansion
     *   }
     * })
     * 
     */
    delete<T extends PosInPansionDeleteArgs>(args: SelectSubset<T, PosInPansionDeleteArgs<ExtArgs>>): Prisma__PosInPansionClient<$Result.GetResult<Prisma.$PosInPansionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PosInPansion.
     * @param {PosInPansionUpdateArgs} args - Arguments to update one PosInPansion.
     * @example
     * // Update one PosInPansion
     * const posInPansion = await prisma.posInPansion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PosInPansionUpdateArgs>(args: SelectSubset<T, PosInPansionUpdateArgs<ExtArgs>>): Prisma__PosInPansionClient<$Result.GetResult<Prisma.$PosInPansionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PosInPansions.
     * @param {PosInPansionDeleteManyArgs} args - Arguments to filter PosInPansions to delete.
     * @example
     * // Delete a few PosInPansions
     * const { count } = await prisma.posInPansion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PosInPansionDeleteManyArgs>(args?: SelectSubset<T, PosInPansionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PosInPansions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosInPansionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PosInPansions
     * const posInPansion = await prisma.posInPansion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PosInPansionUpdateManyArgs>(args: SelectSubset<T, PosInPansionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PosInPansions and returns the data updated in the database.
     * @param {PosInPansionUpdateManyAndReturnArgs} args - Arguments to update many PosInPansions.
     * @example
     * // Update many PosInPansions
     * const posInPansion = await prisma.posInPansion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PosInPansions and only return the `positionId`
     * const posInPansionWithPositionIdOnly = await prisma.posInPansion.updateManyAndReturn({
     *   select: { positionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PosInPansionUpdateManyAndReturnArgs>(args: SelectSubset<T, PosInPansionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosInPansionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PosInPansion.
     * @param {PosInPansionUpsertArgs} args - Arguments to update or create a PosInPansion.
     * @example
     * // Update or create a PosInPansion
     * const posInPansion = await prisma.posInPansion.upsert({
     *   create: {
     *     // ... data to create a PosInPansion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PosInPansion we want to update
     *   }
     * })
     */
    upsert<T extends PosInPansionUpsertArgs>(args: SelectSubset<T, PosInPansionUpsertArgs<ExtArgs>>): Prisma__PosInPansionClient<$Result.GetResult<Prisma.$PosInPansionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PosInPansions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosInPansionCountArgs} args - Arguments to filter PosInPansions to count.
     * @example
     * // Count the number of PosInPansions
     * const count = await prisma.posInPansion.count({
     *   where: {
     *     // ... the filter for the PosInPansions we want to count
     *   }
     * })
    **/
    count<T extends PosInPansionCountArgs>(
      args?: Subset<T, PosInPansionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PosInPansionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PosInPansion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosInPansionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PosInPansionAggregateArgs>(args: Subset<T, PosInPansionAggregateArgs>): Prisma.PrismaPromise<GetPosInPansionAggregateType<T>>

    /**
     * Group by PosInPansion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosInPansionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PosInPansionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PosInPansionGroupByArgs['orderBy'] }
        : { orderBy?: PosInPansionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PosInPansionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosInPansionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PosInPansion model
   */
  readonly fields: PosInPansionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PosInPansion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PosInPansionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assigned<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    pansion<T extends PansionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PansionDefaultArgs<ExtArgs>>): Prisma__PansionClient<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    position<T extends PositionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PositionDefaultArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PosInPansion model
   */ 
  interface PosInPansionFieldRefs {
    readonly positionId: FieldRef<"PosInPansion", 'Int'>
    readonly pansionId: FieldRef<"PosInPansion", 'Int'>
    readonly assignedAt: FieldRef<"PosInPansion", 'DateTime'>
    readonly assignedBy: FieldRef<"PosInPansion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PosInPansion findUnique
   */
  export type PosInPansionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosInPansion
     */
    select?: PosInPansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosInPansion
     */
    omit?: PosInPansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInPansionInclude<ExtArgs> | null
    /**
     * Filter, which PosInPansion to fetch.
     */
    where: PosInPansionWhereUniqueInput
  }

  /**
   * PosInPansion findUniqueOrThrow
   */
  export type PosInPansionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosInPansion
     */
    select?: PosInPansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosInPansion
     */
    omit?: PosInPansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInPansionInclude<ExtArgs> | null
    /**
     * Filter, which PosInPansion to fetch.
     */
    where: PosInPansionWhereUniqueInput
  }

  /**
   * PosInPansion findFirst
   */
  export type PosInPansionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosInPansion
     */
    select?: PosInPansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosInPansion
     */
    omit?: PosInPansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInPansionInclude<ExtArgs> | null
    /**
     * Filter, which PosInPansion to fetch.
     */
    where?: PosInPansionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosInPansions to fetch.
     */
    orderBy?: PosInPansionOrderByWithRelationInput | PosInPansionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PosInPansions.
     */
    cursor?: PosInPansionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosInPansions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosInPansions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PosInPansions.
     */
    distinct?: PosInPansionScalarFieldEnum | PosInPansionScalarFieldEnum[]
  }

  /**
   * PosInPansion findFirstOrThrow
   */
  export type PosInPansionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosInPansion
     */
    select?: PosInPansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosInPansion
     */
    omit?: PosInPansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInPansionInclude<ExtArgs> | null
    /**
     * Filter, which PosInPansion to fetch.
     */
    where?: PosInPansionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosInPansions to fetch.
     */
    orderBy?: PosInPansionOrderByWithRelationInput | PosInPansionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PosInPansions.
     */
    cursor?: PosInPansionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosInPansions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosInPansions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PosInPansions.
     */
    distinct?: PosInPansionScalarFieldEnum | PosInPansionScalarFieldEnum[]
  }

  /**
   * PosInPansion findMany
   */
  export type PosInPansionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosInPansion
     */
    select?: PosInPansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosInPansion
     */
    omit?: PosInPansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInPansionInclude<ExtArgs> | null
    /**
     * Filter, which PosInPansions to fetch.
     */
    where?: PosInPansionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosInPansions to fetch.
     */
    orderBy?: PosInPansionOrderByWithRelationInput | PosInPansionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PosInPansions.
     */
    cursor?: PosInPansionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosInPansions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosInPansions.
     */
    skip?: number
    distinct?: PosInPansionScalarFieldEnum | PosInPansionScalarFieldEnum[]
  }

  /**
   * PosInPansion create
   */
  export type PosInPansionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosInPansion
     */
    select?: PosInPansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosInPansion
     */
    omit?: PosInPansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInPansionInclude<ExtArgs> | null
    /**
     * The data needed to create a PosInPansion.
     */
    data: XOR<PosInPansionCreateInput, PosInPansionUncheckedCreateInput>
  }

  /**
   * PosInPansion createMany
   */
  export type PosInPansionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PosInPansions.
     */
    data: PosInPansionCreateManyInput | PosInPansionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PosInPansion createManyAndReturn
   */
  export type PosInPansionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosInPansion
     */
    select?: PosInPansionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PosInPansion
     */
    omit?: PosInPansionOmit<ExtArgs> | null
    /**
     * The data used to create many PosInPansions.
     */
    data: PosInPansionCreateManyInput | PosInPansionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInPansionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PosInPansion update
   */
  export type PosInPansionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosInPansion
     */
    select?: PosInPansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosInPansion
     */
    omit?: PosInPansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInPansionInclude<ExtArgs> | null
    /**
     * The data needed to update a PosInPansion.
     */
    data: XOR<PosInPansionUpdateInput, PosInPansionUncheckedUpdateInput>
    /**
     * Choose, which PosInPansion to update.
     */
    where: PosInPansionWhereUniqueInput
  }

  /**
   * PosInPansion updateMany
   */
  export type PosInPansionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PosInPansions.
     */
    data: XOR<PosInPansionUpdateManyMutationInput, PosInPansionUncheckedUpdateManyInput>
    /**
     * Filter which PosInPansions to update
     */
    where?: PosInPansionWhereInput
    /**
     * Limit how many PosInPansions to update.
     */
    limit?: number
  }

  /**
   * PosInPansion updateManyAndReturn
   */
  export type PosInPansionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosInPansion
     */
    select?: PosInPansionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PosInPansion
     */
    omit?: PosInPansionOmit<ExtArgs> | null
    /**
     * The data used to update PosInPansions.
     */
    data: XOR<PosInPansionUpdateManyMutationInput, PosInPansionUncheckedUpdateManyInput>
    /**
     * Filter which PosInPansions to update
     */
    where?: PosInPansionWhereInput
    /**
     * Limit how many PosInPansions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInPansionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PosInPansion upsert
   */
  export type PosInPansionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosInPansion
     */
    select?: PosInPansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosInPansion
     */
    omit?: PosInPansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInPansionInclude<ExtArgs> | null
    /**
     * The filter to search for the PosInPansion to update in case it exists.
     */
    where: PosInPansionWhereUniqueInput
    /**
     * In case the PosInPansion found by the `where` argument doesn't exist, create a new PosInPansion with this data.
     */
    create: XOR<PosInPansionCreateInput, PosInPansionUncheckedCreateInput>
    /**
     * In case the PosInPansion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PosInPansionUpdateInput, PosInPansionUncheckedUpdateInput>
  }

  /**
   * PosInPansion delete
   */
  export type PosInPansionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosInPansion
     */
    select?: PosInPansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosInPansion
     */
    omit?: PosInPansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInPansionInclude<ExtArgs> | null
    /**
     * Filter which PosInPansion to delete.
     */
    where: PosInPansionWhereUniqueInput
  }

  /**
   * PosInPansion deleteMany
   */
  export type PosInPansionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PosInPansions to delete
     */
    where?: PosInPansionWhereInput
    /**
     * Limit how many PosInPansions to delete.
     */
    limit?: number
  }

  /**
   * PosInPansion without action
   */
  export type PosInPansionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosInPansion
     */
    select?: PosInPansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosInPansion
     */
    omit?: PosInPansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosInPansionInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    title: string
    description: string
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    pansions?: boolean | Comment$pansionsArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pansions?: boolean | Comment$pansionsArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      pansions: Prisma.$PansionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pansions<T extends Comment$pansionsArgs<ExtArgs> = {}>(args?: Subset<T, Comment$pansionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly title: FieldRef<"Comment", 'String'>
    readonly description: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.pansions
   */
  export type Comment$pansionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pansion
     */
    select?: PansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pansion
     */
    omit?: PansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PansionInclude<ExtArgs> | null
    where?: PansionWhereInput
    orderBy?: PansionOrderByWithRelationInput | PansionOrderByWithRelationInput[]
    cursor?: PansionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PansionScalarFieldEnum | PansionScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Options
   */

  export type AggregateOptions = {
    _count: OptionsCountAggregateOutputType | null
    _avg: OptionsAvgAggregateOutputType | null
    _sum: OptionsSumAggregateOutputType | null
    _min: OptionsMinAggregateOutputType | null
    _max: OptionsMaxAggregateOutputType | null
  }

  export type OptionsAvgAggregateOutputType = {
    id: number | null
  }

  export type OptionsSumAggregateOutputType = {
    id: number | null
  }

  export type OptionsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OptionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OptionsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type OptionsAvgAggregateInputType = {
    id?: true
  }

  export type OptionsSumAggregateInputType = {
    id?: true
  }

  export type OptionsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type OptionsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type OptionsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type OptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to aggregate.
     */
    where?: OptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionsOrderByWithRelationInput | OptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Options
    **/
    _count?: true | OptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionsMaxAggregateInputType
  }

  export type GetOptionsAggregateType<T extends OptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateOptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOptions[P]>
      : GetScalarType<T[P], AggregateOptions[P]>
  }




  export type OptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionsWhereInput
    orderBy?: OptionsOrderByWithAggregationInput | OptionsOrderByWithAggregationInput[]
    by: OptionsScalarFieldEnum[] | OptionsScalarFieldEnum
    having?: OptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionsCountAggregateInputType | true
    _avg?: OptionsAvgAggregateInputType
    _sum?: OptionsSumAggregateInputType
    _min?: OptionsMinAggregateInputType
    _max?: OptionsMaxAggregateInputType
  }

  export type OptionsGroupByOutputType = {
    id: number
    name: string
    _count: OptionsCountAggregateOutputType | null
    _avg: OptionsAvgAggregateOutputType | null
    _sum: OptionsSumAggregateOutputType | null
    _min: OptionsMinAggregateOutputType | null
    _max: OptionsMaxAggregateOutputType | null
  }

  type GetOptionsGroupByPayload<T extends OptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionsGroupByOutputType[P]>
            : GetScalarType<T[P], OptionsGroupByOutputType[P]>
        }
      >
    >


  export type OptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ponsionOptions?: boolean | Options$ponsionOptionsArgs<ExtArgs>
    _count?: boolean | OptionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["options"]>

  export type OptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["options"]>

  export type OptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["options"]>

  export type OptionsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type OptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["options"]>
  export type OptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ponsionOptions?: boolean | Options$ponsionOptionsArgs<ExtArgs>
    _count?: boolean | OptionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OptionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OptionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Options"
    objects: {
      ponsionOptions: Prisma.$ponsionOptionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["options"]>
    composites: {}
  }

  type OptionsGetPayload<S extends boolean | null | undefined | OptionsDefaultArgs> = $Result.GetResult<Prisma.$OptionsPayload, S>

  type OptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionsCountAggregateInputType | true
    }

  export interface OptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Options'], meta: { name: 'Options' } }
    /**
     * Find zero or one Options that matches the filter.
     * @param {OptionsFindUniqueArgs} args - Arguments to find a Options
     * @example
     * // Get one Options
     * const options = await prisma.options.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionsFindUniqueArgs>(args: SelectSubset<T, OptionsFindUniqueArgs<ExtArgs>>): Prisma__OptionsClient<$Result.GetResult<Prisma.$OptionsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Options that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionsFindUniqueOrThrowArgs} args - Arguments to find a Options
     * @example
     * // Get one Options
     * const options = await prisma.options.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionsClient<$Result.GetResult<Prisma.$OptionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsFindFirstArgs} args - Arguments to find a Options
     * @example
     * // Get one Options
     * const options = await prisma.options.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionsFindFirstArgs>(args?: SelectSubset<T, OptionsFindFirstArgs<ExtArgs>>): Prisma__OptionsClient<$Result.GetResult<Prisma.$OptionsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Options that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsFindFirstOrThrowArgs} args - Arguments to find a Options
     * @example
     * // Get one Options
     * const options = await prisma.options.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionsClient<$Result.GetResult<Prisma.$OptionsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.options.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.options.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionsWithIdOnly = await prisma.options.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptionsFindManyArgs>(args?: SelectSubset<T, OptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Options.
     * @param {OptionsCreateArgs} args - Arguments to create a Options.
     * @example
     * // Create one Options
     * const Options = await prisma.options.create({
     *   data: {
     *     // ... data to create a Options
     *   }
     * })
     * 
     */
    create<T extends OptionsCreateArgs>(args: SelectSubset<T, OptionsCreateArgs<ExtArgs>>): Prisma__OptionsClient<$Result.GetResult<Prisma.$OptionsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Options.
     * @param {OptionsCreateManyArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const options = await prisma.options.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionsCreateManyArgs>(args?: SelectSubset<T, OptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Options and returns the data saved in the database.
     * @param {OptionsCreateManyAndReturnArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const options = await prisma.options.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Options and only return the `id`
     * const optionsWithIdOnly = await prisma.options.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, OptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Options.
     * @param {OptionsDeleteArgs} args - Arguments to delete one Options.
     * @example
     * // Delete one Options
     * const Options = await prisma.options.delete({
     *   where: {
     *     // ... filter to delete one Options
     *   }
     * })
     * 
     */
    delete<T extends OptionsDeleteArgs>(args: SelectSubset<T, OptionsDeleteArgs<ExtArgs>>): Prisma__OptionsClient<$Result.GetResult<Prisma.$OptionsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Options.
     * @param {OptionsUpdateArgs} args - Arguments to update one Options.
     * @example
     * // Update one Options
     * const options = await prisma.options.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionsUpdateArgs>(args: SelectSubset<T, OptionsUpdateArgs<ExtArgs>>): Prisma__OptionsClient<$Result.GetResult<Prisma.$OptionsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Options.
     * @param {OptionsDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.options.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionsDeleteManyArgs>(args?: SelectSubset<T, OptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const options = await prisma.options.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionsUpdateManyArgs>(args: SelectSubset<T, OptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options and returns the data updated in the database.
     * @param {OptionsUpdateManyAndReturnArgs} args - Arguments to update many Options.
     * @example
     * // Update many Options
     * const options = await prisma.options.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Options and only return the `id`
     * const optionsWithIdOnly = await prisma.options.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, OptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Options.
     * @param {OptionsUpsertArgs} args - Arguments to update or create a Options.
     * @example
     * // Update or create a Options
     * const options = await prisma.options.upsert({
     *   create: {
     *     // ... data to create a Options
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Options we want to update
     *   }
     * })
     */
    upsert<T extends OptionsUpsertArgs>(args: SelectSubset<T, OptionsUpsertArgs<ExtArgs>>): Prisma__OptionsClient<$Result.GetResult<Prisma.$OptionsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.options.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends OptionsCountArgs>(
      args?: Subset<T, OptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OptionsAggregateArgs>(args: Subset<T, OptionsAggregateArgs>): Prisma.PrismaPromise<GetOptionsAggregateType<T>>

    /**
     * Group by Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionsGroupByArgs['orderBy'] }
        : { orderBy?: OptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Options model
   */
  readonly fields: OptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Options.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ponsionOptions<T extends Options$ponsionOptionsArgs<ExtArgs> = {}>(args?: Subset<T, Options$ponsionOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ponsionOptionsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Options model
   */ 
  interface OptionsFieldRefs {
    readonly id: FieldRef<"Options", 'Int'>
    readonly name: FieldRef<"Options", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Options findUnique
   */
  export type OptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Options
     */
    select?: OptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Options
     */
    omit?: OptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where: OptionsWhereUniqueInput
  }

  /**
   * Options findUniqueOrThrow
   */
  export type OptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Options
     */
    select?: OptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Options
     */
    omit?: OptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where: OptionsWhereUniqueInput
  }

  /**
   * Options findFirst
   */
  export type OptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Options
     */
    select?: OptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Options
     */
    omit?: OptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionsOrderByWithRelationInput | OptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionsScalarFieldEnum | OptionsScalarFieldEnum[]
  }

  /**
   * Options findFirstOrThrow
   */
  export type OptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Options
     */
    select?: OptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Options
     */
    omit?: OptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionsOrderByWithRelationInput | OptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionsScalarFieldEnum | OptionsScalarFieldEnum[]
  }

  /**
   * Options findMany
   */
  export type OptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Options
     */
    select?: OptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Options
     */
    omit?: OptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionsOrderByWithRelationInput | OptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Options.
     */
    cursor?: OptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    distinct?: OptionsScalarFieldEnum | OptionsScalarFieldEnum[]
  }

  /**
   * Options create
   */
  export type OptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Options
     */
    select?: OptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Options
     */
    omit?: OptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Options.
     */
    data: XOR<OptionsCreateInput, OptionsUncheckedCreateInput>
  }

  /**
   * Options createMany
   */
  export type OptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Options.
     */
    data: OptionsCreateManyInput | OptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Options createManyAndReturn
   */
  export type OptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Options
     */
    select?: OptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Options
     */
    omit?: OptionsOmit<ExtArgs> | null
    /**
     * The data used to create many Options.
     */
    data: OptionsCreateManyInput | OptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Options update
   */
  export type OptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Options
     */
    select?: OptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Options
     */
    omit?: OptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Options.
     */
    data: XOR<OptionsUpdateInput, OptionsUncheckedUpdateInput>
    /**
     * Choose, which Options to update.
     */
    where: OptionsWhereUniqueInput
  }

  /**
   * Options updateMany
   */
  export type OptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Options.
     */
    data: XOR<OptionsUpdateManyMutationInput, OptionsUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionsWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
  }

  /**
   * Options updateManyAndReturn
   */
  export type OptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Options
     */
    select?: OptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Options
     */
    omit?: OptionsOmit<ExtArgs> | null
    /**
     * The data used to update Options.
     */
    data: XOR<OptionsUpdateManyMutationInput, OptionsUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionsWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
  }

  /**
   * Options upsert
   */
  export type OptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Options
     */
    select?: OptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Options
     */
    omit?: OptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Options to update in case it exists.
     */
    where: OptionsWhereUniqueInput
    /**
     * In case the Options found by the `where` argument doesn't exist, create a new Options with this data.
     */
    create: XOR<OptionsCreateInput, OptionsUncheckedCreateInput>
    /**
     * In case the Options was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionsUpdateInput, OptionsUncheckedUpdateInput>
  }

  /**
   * Options delete
   */
  export type OptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Options
     */
    select?: OptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Options
     */
    omit?: OptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsInclude<ExtArgs> | null
    /**
     * Filter which Options to delete.
     */
    where: OptionsWhereUniqueInput
  }

  /**
   * Options deleteMany
   */
  export type OptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to delete
     */
    where?: OptionsWhereInput
    /**
     * Limit how many Options to delete.
     */
    limit?: number
  }

  /**
   * Options.ponsionOptions
   */
  export type Options$ponsionOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ponsionOptions
     */
    select?: ponsionOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ponsionOptions
     */
    omit?: ponsionOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ponsionOptionsInclude<ExtArgs> | null
    where?: ponsionOptionsWhereInput
    orderBy?: ponsionOptionsOrderByWithRelationInput | ponsionOptionsOrderByWithRelationInput[]
    cursor?: ponsionOptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PonsionOptionsScalarFieldEnum | PonsionOptionsScalarFieldEnum[]
  }

  /**
   * Options without action
   */
  export type OptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Options
     */
    select?: OptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Options
     */
    omit?: OptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsInclude<ExtArgs> | null
  }


  /**
   * Model ponsionOptions
   */

  export type AggregatePonsionOptions = {
    _count: PonsionOptionsCountAggregateOutputType | null
    _avg: PonsionOptionsAvgAggregateOutputType | null
    _sum: PonsionOptionsSumAggregateOutputType | null
    _min: PonsionOptionsMinAggregateOutputType | null
    _max: PonsionOptionsMaxAggregateOutputType | null
  }

  export type PonsionOptionsAvgAggregateOutputType = {
    pansionId: number | null
    optionId: number | null
    assignedBy: number | null
  }

  export type PonsionOptionsSumAggregateOutputType = {
    pansionId: number | null
    optionId: number | null
    assignedBy: number | null
  }

  export type PonsionOptionsMinAggregateOutputType = {
    pansionId: number | null
    optionId: number | null
    assignedAt: Date | null
    assignedBy: number | null
  }

  export type PonsionOptionsMaxAggregateOutputType = {
    pansionId: number | null
    optionId: number | null
    assignedAt: Date | null
    assignedBy: number | null
  }

  export type PonsionOptionsCountAggregateOutputType = {
    pansionId: number
    optionId: number
    assignedAt: number
    assignedBy: number
    _all: number
  }


  export type PonsionOptionsAvgAggregateInputType = {
    pansionId?: true
    optionId?: true
    assignedBy?: true
  }

  export type PonsionOptionsSumAggregateInputType = {
    pansionId?: true
    optionId?: true
    assignedBy?: true
  }

  export type PonsionOptionsMinAggregateInputType = {
    pansionId?: true
    optionId?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type PonsionOptionsMaxAggregateInputType = {
    pansionId?: true
    optionId?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type PonsionOptionsCountAggregateInputType = {
    pansionId?: true
    optionId?: true
    assignedAt?: true
    assignedBy?: true
    _all?: true
  }

  export type PonsionOptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ponsionOptions to aggregate.
     */
    where?: ponsionOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ponsionOptions to fetch.
     */
    orderBy?: ponsionOptionsOrderByWithRelationInput | ponsionOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ponsionOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ponsionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ponsionOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ponsionOptions
    **/
    _count?: true | PonsionOptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PonsionOptionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PonsionOptionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PonsionOptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PonsionOptionsMaxAggregateInputType
  }

  export type GetPonsionOptionsAggregateType<T extends PonsionOptionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePonsionOptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePonsionOptions[P]>
      : GetScalarType<T[P], AggregatePonsionOptions[P]>
  }




  export type ponsionOptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ponsionOptionsWhereInput
    orderBy?: ponsionOptionsOrderByWithAggregationInput | ponsionOptionsOrderByWithAggregationInput[]
    by: PonsionOptionsScalarFieldEnum[] | PonsionOptionsScalarFieldEnum
    having?: ponsionOptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PonsionOptionsCountAggregateInputType | true
    _avg?: PonsionOptionsAvgAggregateInputType
    _sum?: PonsionOptionsSumAggregateInputType
    _min?: PonsionOptionsMinAggregateInputType
    _max?: PonsionOptionsMaxAggregateInputType
  }

  export type PonsionOptionsGroupByOutputType = {
    pansionId: number
    optionId: number
    assignedAt: Date
    assignedBy: number
    _count: PonsionOptionsCountAggregateOutputType | null
    _avg: PonsionOptionsAvgAggregateOutputType | null
    _sum: PonsionOptionsSumAggregateOutputType | null
    _min: PonsionOptionsMinAggregateOutputType | null
    _max: PonsionOptionsMaxAggregateOutputType | null
  }

  type GetPonsionOptionsGroupByPayload<T extends ponsionOptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PonsionOptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PonsionOptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PonsionOptionsGroupByOutputType[P]>
            : GetScalarType<T[P], PonsionOptionsGroupByOutputType[P]>
        }
      >
    >


  export type ponsionOptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pansionId?: boolean
    optionId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    assigned?: boolean | UserDefaultArgs<ExtArgs>
    options?: boolean | OptionsDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ponsionOptions"]>

  export type ponsionOptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pansionId?: boolean
    optionId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    assigned?: boolean | UserDefaultArgs<ExtArgs>
    options?: boolean | OptionsDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ponsionOptions"]>

  export type ponsionOptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pansionId?: boolean
    optionId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    assigned?: boolean | UserDefaultArgs<ExtArgs>
    options?: boolean | OptionsDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ponsionOptions"]>

  export type ponsionOptionsSelectScalar = {
    pansionId?: boolean
    optionId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
  }

  export type ponsionOptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pansionId" | "optionId" | "assignedAt" | "assignedBy", ExtArgs["result"]["ponsionOptions"]>
  export type ponsionOptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned?: boolean | UserDefaultArgs<ExtArgs>
    options?: boolean | OptionsDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
  }
  export type ponsionOptionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned?: boolean | UserDefaultArgs<ExtArgs>
    options?: boolean | OptionsDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
  }
  export type ponsionOptionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned?: boolean | UserDefaultArgs<ExtArgs>
    options?: boolean | OptionsDefaultArgs<ExtArgs>
    pansion?: boolean | PansionDefaultArgs<ExtArgs>
  }

  export type $ponsionOptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ponsionOptions"
    objects: {
      assigned: Prisma.$UserPayload<ExtArgs>
      options: Prisma.$OptionsPayload<ExtArgs>
      pansion: Prisma.$PansionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pansionId: number
      optionId: number
      assignedAt: Date
      assignedBy: number
    }, ExtArgs["result"]["ponsionOptions"]>
    composites: {}
  }

  type ponsionOptionsGetPayload<S extends boolean | null | undefined | ponsionOptionsDefaultArgs> = $Result.GetResult<Prisma.$ponsionOptionsPayload, S>

  type ponsionOptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ponsionOptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PonsionOptionsCountAggregateInputType | true
    }

  export interface ponsionOptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ponsionOptions'], meta: { name: 'ponsionOptions' } }
    /**
     * Find zero or one PonsionOptions that matches the filter.
     * @param {ponsionOptionsFindUniqueArgs} args - Arguments to find a PonsionOptions
     * @example
     * // Get one PonsionOptions
     * const ponsionOptions = await prisma.ponsionOptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ponsionOptionsFindUniqueArgs>(args: SelectSubset<T, ponsionOptionsFindUniqueArgs<ExtArgs>>): Prisma__ponsionOptionsClient<$Result.GetResult<Prisma.$ponsionOptionsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PonsionOptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ponsionOptionsFindUniqueOrThrowArgs} args - Arguments to find a PonsionOptions
     * @example
     * // Get one PonsionOptions
     * const ponsionOptions = await prisma.ponsionOptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ponsionOptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, ponsionOptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ponsionOptionsClient<$Result.GetResult<Prisma.$ponsionOptionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PonsionOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ponsionOptionsFindFirstArgs} args - Arguments to find a PonsionOptions
     * @example
     * // Get one PonsionOptions
     * const ponsionOptions = await prisma.ponsionOptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ponsionOptionsFindFirstArgs>(args?: SelectSubset<T, ponsionOptionsFindFirstArgs<ExtArgs>>): Prisma__ponsionOptionsClient<$Result.GetResult<Prisma.$ponsionOptionsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PonsionOptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ponsionOptionsFindFirstOrThrowArgs} args - Arguments to find a PonsionOptions
     * @example
     * // Get one PonsionOptions
     * const ponsionOptions = await prisma.ponsionOptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ponsionOptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, ponsionOptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ponsionOptionsClient<$Result.GetResult<Prisma.$ponsionOptionsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PonsionOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ponsionOptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PonsionOptions
     * const ponsionOptions = await prisma.ponsionOptions.findMany()
     * 
     * // Get first 10 PonsionOptions
     * const ponsionOptions = await prisma.ponsionOptions.findMany({ take: 10 })
     * 
     * // Only select the `pansionId`
     * const ponsionOptionsWithPansionIdOnly = await prisma.ponsionOptions.findMany({ select: { pansionId: true } })
     * 
     */
    findMany<T extends ponsionOptionsFindManyArgs>(args?: SelectSubset<T, ponsionOptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ponsionOptionsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PonsionOptions.
     * @param {ponsionOptionsCreateArgs} args - Arguments to create a PonsionOptions.
     * @example
     * // Create one PonsionOptions
     * const PonsionOptions = await prisma.ponsionOptions.create({
     *   data: {
     *     // ... data to create a PonsionOptions
     *   }
     * })
     * 
     */
    create<T extends ponsionOptionsCreateArgs>(args: SelectSubset<T, ponsionOptionsCreateArgs<ExtArgs>>): Prisma__ponsionOptionsClient<$Result.GetResult<Prisma.$ponsionOptionsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PonsionOptions.
     * @param {ponsionOptionsCreateManyArgs} args - Arguments to create many PonsionOptions.
     * @example
     * // Create many PonsionOptions
     * const ponsionOptions = await prisma.ponsionOptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ponsionOptionsCreateManyArgs>(args?: SelectSubset<T, ponsionOptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PonsionOptions and returns the data saved in the database.
     * @param {ponsionOptionsCreateManyAndReturnArgs} args - Arguments to create many PonsionOptions.
     * @example
     * // Create many PonsionOptions
     * const ponsionOptions = await prisma.ponsionOptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PonsionOptions and only return the `pansionId`
     * const ponsionOptionsWithPansionIdOnly = await prisma.ponsionOptions.createManyAndReturn({
     *   select: { pansionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ponsionOptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, ponsionOptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ponsionOptionsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PonsionOptions.
     * @param {ponsionOptionsDeleteArgs} args - Arguments to delete one PonsionOptions.
     * @example
     * // Delete one PonsionOptions
     * const PonsionOptions = await prisma.ponsionOptions.delete({
     *   where: {
     *     // ... filter to delete one PonsionOptions
     *   }
     * })
     * 
     */
    delete<T extends ponsionOptionsDeleteArgs>(args: SelectSubset<T, ponsionOptionsDeleteArgs<ExtArgs>>): Prisma__ponsionOptionsClient<$Result.GetResult<Prisma.$ponsionOptionsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PonsionOptions.
     * @param {ponsionOptionsUpdateArgs} args - Arguments to update one PonsionOptions.
     * @example
     * // Update one PonsionOptions
     * const ponsionOptions = await prisma.ponsionOptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ponsionOptionsUpdateArgs>(args: SelectSubset<T, ponsionOptionsUpdateArgs<ExtArgs>>): Prisma__ponsionOptionsClient<$Result.GetResult<Prisma.$ponsionOptionsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PonsionOptions.
     * @param {ponsionOptionsDeleteManyArgs} args - Arguments to filter PonsionOptions to delete.
     * @example
     * // Delete a few PonsionOptions
     * const { count } = await prisma.ponsionOptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ponsionOptionsDeleteManyArgs>(args?: SelectSubset<T, ponsionOptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PonsionOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ponsionOptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PonsionOptions
     * const ponsionOptions = await prisma.ponsionOptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ponsionOptionsUpdateManyArgs>(args: SelectSubset<T, ponsionOptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PonsionOptions and returns the data updated in the database.
     * @param {ponsionOptionsUpdateManyAndReturnArgs} args - Arguments to update many PonsionOptions.
     * @example
     * // Update many PonsionOptions
     * const ponsionOptions = await prisma.ponsionOptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PonsionOptions and only return the `pansionId`
     * const ponsionOptionsWithPansionIdOnly = await prisma.ponsionOptions.updateManyAndReturn({
     *   select: { pansionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ponsionOptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, ponsionOptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ponsionOptionsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PonsionOptions.
     * @param {ponsionOptionsUpsertArgs} args - Arguments to update or create a PonsionOptions.
     * @example
     * // Update or create a PonsionOptions
     * const ponsionOptions = await prisma.ponsionOptions.upsert({
     *   create: {
     *     // ... data to create a PonsionOptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PonsionOptions we want to update
     *   }
     * })
     */
    upsert<T extends ponsionOptionsUpsertArgs>(args: SelectSubset<T, ponsionOptionsUpsertArgs<ExtArgs>>): Prisma__ponsionOptionsClient<$Result.GetResult<Prisma.$ponsionOptionsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PonsionOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ponsionOptionsCountArgs} args - Arguments to filter PonsionOptions to count.
     * @example
     * // Count the number of PonsionOptions
     * const count = await prisma.ponsionOptions.count({
     *   where: {
     *     // ... the filter for the PonsionOptions we want to count
     *   }
     * })
    **/
    count<T extends ponsionOptionsCountArgs>(
      args?: Subset<T, ponsionOptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PonsionOptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PonsionOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PonsionOptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PonsionOptionsAggregateArgs>(args: Subset<T, PonsionOptionsAggregateArgs>): Prisma.PrismaPromise<GetPonsionOptionsAggregateType<T>>

    /**
     * Group by PonsionOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ponsionOptionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ponsionOptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ponsionOptionsGroupByArgs['orderBy'] }
        : { orderBy?: ponsionOptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ponsionOptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPonsionOptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ponsionOptions model
   */
  readonly fields: ponsionOptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ponsionOptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ponsionOptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assigned<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    options<T extends OptionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OptionsDefaultArgs<ExtArgs>>): Prisma__OptionsClient<$Result.GetResult<Prisma.$OptionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    pansion<T extends PansionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PansionDefaultArgs<ExtArgs>>): Prisma__PansionClient<$Result.GetResult<Prisma.$PansionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ponsionOptions model
   */ 
  interface ponsionOptionsFieldRefs {
    readonly pansionId: FieldRef<"ponsionOptions", 'Int'>
    readonly optionId: FieldRef<"ponsionOptions", 'Int'>
    readonly assignedAt: FieldRef<"ponsionOptions", 'DateTime'>
    readonly assignedBy: FieldRef<"ponsionOptions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ponsionOptions findUnique
   */
  export type ponsionOptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ponsionOptions
     */
    select?: ponsionOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ponsionOptions
     */
    omit?: ponsionOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ponsionOptionsInclude<ExtArgs> | null
    /**
     * Filter, which ponsionOptions to fetch.
     */
    where: ponsionOptionsWhereUniqueInput
  }

  /**
   * ponsionOptions findUniqueOrThrow
   */
  export type ponsionOptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ponsionOptions
     */
    select?: ponsionOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ponsionOptions
     */
    omit?: ponsionOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ponsionOptionsInclude<ExtArgs> | null
    /**
     * Filter, which ponsionOptions to fetch.
     */
    where: ponsionOptionsWhereUniqueInput
  }

  /**
   * ponsionOptions findFirst
   */
  export type ponsionOptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ponsionOptions
     */
    select?: ponsionOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ponsionOptions
     */
    omit?: ponsionOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ponsionOptionsInclude<ExtArgs> | null
    /**
     * Filter, which ponsionOptions to fetch.
     */
    where?: ponsionOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ponsionOptions to fetch.
     */
    orderBy?: ponsionOptionsOrderByWithRelationInput | ponsionOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ponsionOptions.
     */
    cursor?: ponsionOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ponsionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ponsionOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ponsionOptions.
     */
    distinct?: PonsionOptionsScalarFieldEnum | PonsionOptionsScalarFieldEnum[]
  }

  /**
   * ponsionOptions findFirstOrThrow
   */
  export type ponsionOptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ponsionOptions
     */
    select?: ponsionOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ponsionOptions
     */
    omit?: ponsionOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ponsionOptionsInclude<ExtArgs> | null
    /**
     * Filter, which ponsionOptions to fetch.
     */
    where?: ponsionOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ponsionOptions to fetch.
     */
    orderBy?: ponsionOptionsOrderByWithRelationInput | ponsionOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ponsionOptions.
     */
    cursor?: ponsionOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ponsionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ponsionOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ponsionOptions.
     */
    distinct?: PonsionOptionsScalarFieldEnum | PonsionOptionsScalarFieldEnum[]
  }

  /**
   * ponsionOptions findMany
   */
  export type ponsionOptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ponsionOptions
     */
    select?: ponsionOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ponsionOptions
     */
    omit?: ponsionOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ponsionOptionsInclude<ExtArgs> | null
    /**
     * Filter, which ponsionOptions to fetch.
     */
    where?: ponsionOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ponsionOptions to fetch.
     */
    orderBy?: ponsionOptionsOrderByWithRelationInput | ponsionOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ponsionOptions.
     */
    cursor?: ponsionOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ponsionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ponsionOptions.
     */
    skip?: number
    distinct?: PonsionOptionsScalarFieldEnum | PonsionOptionsScalarFieldEnum[]
  }

  /**
   * ponsionOptions create
   */
  export type ponsionOptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ponsionOptions
     */
    select?: ponsionOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ponsionOptions
     */
    omit?: ponsionOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ponsionOptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a ponsionOptions.
     */
    data: XOR<ponsionOptionsCreateInput, ponsionOptionsUncheckedCreateInput>
  }

  /**
   * ponsionOptions createMany
   */
  export type ponsionOptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ponsionOptions.
     */
    data: ponsionOptionsCreateManyInput | ponsionOptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ponsionOptions createManyAndReturn
   */
  export type ponsionOptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ponsionOptions
     */
    select?: ponsionOptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ponsionOptions
     */
    omit?: ponsionOptionsOmit<ExtArgs> | null
    /**
     * The data used to create many ponsionOptions.
     */
    data: ponsionOptionsCreateManyInput | ponsionOptionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ponsionOptionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ponsionOptions update
   */
  export type ponsionOptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ponsionOptions
     */
    select?: ponsionOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ponsionOptions
     */
    omit?: ponsionOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ponsionOptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a ponsionOptions.
     */
    data: XOR<ponsionOptionsUpdateInput, ponsionOptionsUncheckedUpdateInput>
    /**
     * Choose, which ponsionOptions to update.
     */
    where: ponsionOptionsWhereUniqueInput
  }

  /**
   * ponsionOptions updateMany
   */
  export type ponsionOptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ponsionOptions.
     */
    data: XOR<ponsionOptionsUpdateManyMutationInput, ponsionOptionsUncheckedUpdateManyInput>
    /**
     * Filter which ponsionOptions to update
     */
    where?: ponsionOptionsWhereInput
    /**
     * Limit how many ponsionOptions to update.
     */
    limit?: number
  }

  /**
   * ponsionOptions updateManyAndReturn
   */
  export type ponsionOptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ponsionOptions
     */
    select?: ponsionOptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ponsionOptions
     */
    omit?: ponsionOptionsOmit<ExtArgs> | null
    /**
     * The data used to update ponsionOptions.
     */
    data: XOR<ponsionOptionsUpdateManyMutationInput, ponsionOptionsUncheckedUpdateManyInput>
    /**
     * Filter which ponsionOptions to update
     */
    where?: ponsionOptionsWhereInput
    /**
     * Limit how many ponsionOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ponsionOptionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ponsionOptions upsert
   */
  export type ponsionOptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ponsionOptions
     */
    select?: ponsionOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ponsionOptions
     */
    omit?: ponsionOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ponsionOptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the ponsionOptions to update in case it exists.
     */
    where: ponsionOptionsWhereUniqueInput
    /**
     * In case the ponsionOptions found by the `where` argument doesn't exist, create a new ponsionOptions with this data.
     */
    create: XOR<ponsionOptionsCreateInput, ponsionOptionsUncheckedCreateInput>
    /**
     * In case the ponsionOptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ponsionOptionsUpdateInput, ponsionOptionsUncheckedUpdateInput>
  }

  /**
   * ponsionOptions delete
   */
  export type ponsionOptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ponsionOptions
     */
    select?: ponsionOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ponsionOptions
     */
    omit?: ponsionOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ponsionOptionsInclude<ExtArgs> | null
    /**
     * Filter which ponsionOptions to delete.
     */
    where: ponsionOptionsWhereUniqueInput
  }

  /**
   * ponsionOptions deleteMany
   */
  export type ponsionOptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ponsionOptions to delete
     */
    where?: ponsionOptionsWhereInput
    /**
     * Limit how many ponsionOptions to delete.
     */
    limit?: number
  }

  /**
   * ponsionOptions without action
   */
  export type ponsionOptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ponsionOptions
     */
    select?: ponsionOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ponsionOptions
     */
    omit?: ponsionOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ponsionOptionsInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    minAdvancePay: number | null
    maxAdvancePay: number | null
    minRent: number | null
    maxRent: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    minAdvancePay: number | null
    maxAdvancePay: number | null
    minRent: number | null
    maxRent: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    minAdvancePay: number | null
    maxAdvancePay: number | null
    minRent: number | null
    maxRent: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    minAdvancePay: number | null
    maxAdvancePay: number | null
    minRent: number | null
    maxRent: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    minAdvancePay: number
    maxAdvancePay: number
    minRent: number
    maxRent: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    minAdvancePay?: true
    maxAdvancePay?: true
    minRent?: true
    maxRent?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    minAdvancePay?: true
    maxAdvancePay?: true
    minRent?: true
    maxRent?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    minAdvancePay?: true
    maxAdvancePay?: true
    minRent?: true
    maxRent?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    minAdvancePay?: true
    maxAdvancePay?: true
    minRent?: true
    maxRent?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    minAdvancePay?: true
    maxAdvancePay?: true
    minRent?: true
    maxRent?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    minAdvancePay: number
    maxAdvancePay: number
    minRent: number
    maxRent: number
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    minAdvancePay?: boolean
    maxAdvancePay?: boolean
    minRent?: boolean
    maxRent?: boolean
    rooms?: boolean | Category$roomsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    minAdvancePay?: boolean
    maxAdvancePay?: boolean
    minRent?: boolean
    maxRent?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    minAdvancePay?: boolean
    maxAdvancePay?: boolean
    minRent?: boolean
    maxRent?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    minAdvancePay?: boolean
    maxAdvancePay?: boolean
    minRent?: boolean
    maxRent?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "minAdvancePay" | "maxAdvancePay" | "minRent" | "maxRent", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | Category$roomsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      minAdvancePay: number
      maxAdvancePay: number
      minRent: number
      maxRent: number
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends Category$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Category$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly minAdvancePay: FieldRef<"Category", 'Float'>
    readonly maxAdvancePay: FieldRef<"Category", 'Float'>
    readonly minRent: FieldRef<"Category", 'Float'>
    readonly maxRent: FieldRef<"Category", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.rooms
   */
  export type Category$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    email: 'email',
    positionId: 'positionId',
    pansionId: 'pansionId',
    provinceId: 'provinceId',
    cityId: 'cityId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PositionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const PansionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    address: 'address',
    codeParvane: 'codeParvane',
    Capacity: 'Capacity',
    advancePayment: 'advancePayment',
    chargeMony: 'chargeMony',
    active: 'active',
    typeOfContract: 'typeOfContract',
    imageUrl: 'imageUrl',
    description: 'description',
    commentId: 'commentId',
    provinceId: 'provinceId',
    cityId: 'cityId',
    typeOfPansion: 'typeOfPansion',
    numberOfRoom: 'numberOfRoom',
    numberOfBed: 'numberOfBed'
  };

  export type PansionScalarFieldEnum = (typeof PansionScalarFieldEnum)[keyof typeof PansionScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    numberRoom: 'numberRoom',
    numberOfBeds: 'numberOfBeds',
    rent: 'rent',
    pansionId: 'pansionId',
    categoryId: 'categoryId'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const ProvinceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    enName: 'enName'
  };

  export type ProvinceScalarFieldEnum = (typeof ProvinceScalarFieldEnum)[keyof typeof ProvinceScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    enName: 'enName',
    provinceId: 'provinceId'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const PosInPansionScalarFieldEnum: {
    positionId: 'positionId',
    pansionId: 'pansionId',
    assignedAt: 'assignedAt',
    assignedBy: 'assignedBy'
  };

  export type PosInPansionScalarFieldEnum = (typeof PosInPansionScalarFieldEnum)[keyof typeof PosInPansionScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const OptionsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type OptionsScalarFieldEnum = (typeof OptionsScalarFieldEnum)[keyof typeof OptionsScalarFieldEnum]


  export const PonsionOptionsScalarFieldEnum: {
    pansionId: 'pansionId',
    optionId: 'optionId',
    assignedAt: 'assignedAt',
    assignedBy: 'assignedBy'
  };

  export type PonsionOptionsScalarFieldEnum = (typeof PonsionOptionsScalarFieldEnum)[keyof typeof PonsionOptionsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    minAdvancePay: 'minAdvancePay',
    maxAdvancePay: 'maxAdvancePay',
    minRent: 'minRent',
    maxRent: 'maxRent'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Contract'
   */
  export type EnumContractFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Contract'>
    


  /**
   * Reference to a field of type 'Contract[]'
   */
  export type ListEnumContractFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Contract[]'>
    


  /**
   * Reference to a field of type 'PansionType'
   */
  export type EnumPansionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PansionType'>
    


  /**
   * Reference to a field of type 'PansionType[]'
   */
  export type ListEnumPansionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PansionType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    positionId?: IntFilter<"User"> | number
    pansionId?: IntFilter<"User"> | number
    provinceId?: IntFilter<"User"> | number
    cityId?: IntFilter<"User"> | number
    PosInPansion?: PosInPansionListRelationFilter
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    pansion?: XOR<PansionScalarRelationFilter, PansionWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    ponsionOptions?: PonsionOptionsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    positionId?: SortOrder
    pansionId?: SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
    PosInPansion?: PosInPansionOrderByRelationAggregateInput
    city?: CityOrderByWithRelationInput
    pansion?: PansionOrderByWithRelationInput
    position?: PositionOrderByWithRelationInput
    province?: ProvinceOrderByWithRelationInput
    ponsionOptions?: ponsionOptionsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    positionId?: IntFilter<"User"> | number
    pansionId?: IntFilter<"User"> | number
    provinceId?: IntFilter<"User"> | number
    cityId?: IntFilter<"User"> | number
    PosInPansion?: PosInPansionListRelationFilter
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    pansion?: XOR<PansionScalarRelationFilter, PansionWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    ponsionOptions?: PonsionOptionsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    positionId?: SortOrder
    pansionId?: SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    positionId?: IntWithAggregatesFilter<"User"> | number
    pansionId?: IntWithAggregatesFilter<"User"> | number
    provinceId?: IntWithAggregatesFilter<"User"> | number
    cityId?: IntWithAggregatesFilter<"User"> | number
  }

  export type PositionWhereInput = {
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    id?: IntFilter<"Position"> | number
    name?: StringFilter<"Position"> | string
    level?: EnumRoleFilter<"Position"> | $Enums.Role
    PosInPansion?: PosInPansionListRelationFilter
    users?: UserListRelationFilter
  }

  export type PositionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    PosInPansion?: PosInPansionOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type PositionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    name?: StringFilter<"Position"> | string
    level?: EnumRoleFilter<"Position"> | $Enums.Role
    PosInPansion?: PosInPansionListRelationFilter
    users?: UserListRelationFilter
  }, "id">

  export type PositionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    _count?: PositionCountOrderByAggregateInput
    _avg?: PositionAvgOrderByAggregateInput
    _max?: PositionMaxOrderByAggregateInput
    _min?: PositionMinOrderByAggregateInput
    _sum?: PositionSumOrderByAggregateInput
  }

  export type PositionScalarWhereWithAggregatesInput = {
    AND?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    OR?: PositionScalarWhereWithAggregatesInput[]
    NOT?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Position"> | number
    name?: StringWithAggregatesFilter<"Position"> | string
    level?: EnumRoleWithAggregatesFilter<"Position"> | $Enums.Role
  }

  export type PansionWhereInput = {
    AND?: PansionWhereInput | PansionWhereInput[]
    OR?: PansionWhereInput[]
    NOT?: PansionWhereInput | PansionWhereInput[]
    id?: IntFilter<"Pansion"> | number
    name?: StringFilter<"Pansion"> | string
    phone?: StringFilter<"Pansion"> | string
    address?: StringFilter<"Pansion"> | string
    codeParvane?: StringFilter<"Pansion"> | string
    Capacity?: IntFilter<"Pansion"> | number
    advancePayment?: FloatNullableFilter<"Pansion"> | number | null
    chargeMony?: FloatFilter<"Pansion"> | number
    active?: BoolFilter<"Pansion"> | boolean
    typeOfContract?: EnumContractFilter<"Pansion"> | $Enums.Contract
    imageUrl?: StringNullableFilter<"Pansion"> | string | null
    description?: StringFilter<"Pansion"> | string
    commentId?: IntNullableFilter<"Pansion"> | number | null
    provinceId?: IntFilter<"Pansion"> | number
    cityId?: IntFilter<"Pansion"> | number
    typeOfPansion?: EnumPansionTypeFilter<"Pansion"> | $Enums.PansionType
    numberOfRoom?: IntFilter<"Pansion"> | number
    numberOfBed?: IntFilter<"Pansion"> | number
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    positions?: PosInPansionListRelationFilter
    rooms?: RoomListRelationFilter
    users?: UserListRelationFilter
    ponsionOptions?: PonsionOptionsListRelationFilter
  }

  export type PansionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    codeParvane?: SortOrder
    Capacity?: SortOrder
    advancePayment?: SortOrderInput | SortOrder
    chargeMony?: SortOrder
    active?: SortOrder
    typeOfContract?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    description?: SortOrder
    commentId?: SortOrderInput | SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
    typeOfPansion?: SortOrder
    numberOfRoom?: SortOrder
    numberOfBed?: SortOrder
    city?: CityOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
    province?: ProvinceOrderByWithRelationInput
    positions?: PosInPansionOrderByRelationAggregateInput
    rooms?: RoomOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    ponsionOptions?: ponsionOptionsOrderByRelationAggregateInput
  }

  export type PansionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codeParvane?: string
    AND?: PansionWhereInput | PansionWhereInput[]
    OR?: PansionWhereInput[]
    NOT?: PansionWhereInput | PansionWhereInput[]
    name?: StringFilter<"Pansion"> | string
    phone?: StringFilter<"Pansion"> | string
    address?: StringFilter<"Pansion"> | string
    Capacity?: IntFilter<"Pansion"> | number
    advancePayment?: FloatNullableFilter<"Pansion"> | number | null
    chargeMony?: FloatFilter<"Pansion"> | number
    active?: BoolFilter<"Pansion"> | boolean
    typeOfContract?: EnumContractFilter<"Pansion"> | $Enums.Contract
    imageUrl?: StringNullableFilter<"Pansion"> | string | null
    description?: StringFilter<"Pansion"> | string
    commentId?: IntNullableFilter<"Pansion"> | number | null
    provinceId?: IntFilter<"Pansion"> | number
    cityId?: IntFilter<"Pansion"> | number
    typeOfPansion?: EnumPansionTypeFilter<"Pansion"> | $Enums.PansionType
    numberOfRoom?: IntFilter<"Pansion"> | number
    numberOfBed?: IntFilter<"Pansion"> | number
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    positions?: PosInPansionListRelationFilter
    rooms?: RoomListRelationFilter
    users?: UserListRelationFilter
    ponsionOptions?: PonsionOptionsListRelationFilter
  }, "id" | "codeParvane">

  export type PansionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    codeParvane?: SortOrder
    Capacity?: SortOrder
    advancePayment?: SortOrderInput | SortOrder
    chargeMony?: SortOrder
    active?: SortOrder
    typeOfContract?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    description?: SortOrder
    commentId?: SortOrderInput | SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
    typeOfPansion?: SortOrder
    numberOfRoom?: SortOrder
    numberOfBed?: SortOrder
    _count?: PansionCountOrderByAggregateInput
    _avg?: PansionAvgOrderByAggregateInput
    _max?: PansionMaxOrderByAggregateInput
    _min?: PansionMinOrderByAggregateInput
    _sum?: PansionSumOrderByAggregateInput
  }

  export type PansionScalarWhereWithAggregatesInput = {
    AND?: PansionScalarWhereWithAggregatesInput | PansionScalarWhereWithAggregatesInput[]
    OR?: PansionScalarWhereWithAggregatesInput[]
    NOT?: PansionScalarWhereWithAggregatesInput | PansionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pansion"> | number
    name?: StringWithAggregatesFilter<"Pansion"> | string
    phone?: StringWithAggregatesFilter<"Pansion"> | string
    address?: StringWithAggregatesFilter<"Pansion"> | string
    codeParvane?: StringWithAggregatesFilter<"Pansion"> | string
    Capacity?: IntWithAggregatesFilter<"Pansion"> | number
    advancePayment?: FloatNullableWithAggregatesFilter<"Pansion"> | number | null
    chargeMony?: FloatWithAggregatesFilter<"Pansion"> | number
    active?: BoolWithAggregatesFilter<"Pansion"> | boolean
    typeOfContract?: EnumContractWithAggregatesFilter<"Pansion"> | $Enums.Contract
    imageUrl?: StringNullableWithAggregatesFilter<"Pansion"> | string | null
    description?: StringWithAggregatesFilter<"Pansion"> | string
    commentId?: IntNullableWithAggregatesFilter<"Pansion"> | number | null
    provinceId?: IntWithAggregatesFilter<"Pansion"> | number
    cityId?: IntWithAggregatesFilter<"Pansion"> | number
    typeOfPansion?: EnumPansionTypeWithAggregatesFilter<"Pansion"> | $Enums.PansionType
    numberOfRoom?: IntWithAggregatesFilter<"Pansion"> | number
    numberOfBed?: IntWithAggregatesFilter<"Pansion"> | number
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    numberRoom?: IntFilter<"Room"> | number
    numberOfBeds?: IntFilter<"Room"> | number
    rent?: FloatFilter<"Room"> | number
    pansionId?: IntFilter<"Room"> | number
    categoryId?: IntFilter<"Room"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    pansion?: XOR<PansionScalarRelationFilter, PansionWhereInput>
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    numberRoom?: SortOrder
    numberOfBeds?: SortOrder
    rent?: SortOrder
    pansionId?: SortOrder
    categoryId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    pansion?: PansionOrderByWithRelationInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    numberRoom?: IntFilter<"Room"> | number
    numberOfBeds?: IntFilter<"Room"> | number
    rent?: FloatFilter<"Room"> | number
    pansionId?: IntFilter<"Room"> | number
    categoryId?: IntFilter<"Room"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    pansion?: XOR<PansionScalarRelationFilter, PansionWhereInput>
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    numberRoom?: SortOrder
    numberOfBeds?: SortOrder
    rent?: SortOrder
    pansionId?: SortOrder
    categoryId?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    numberRoom?: IntWithAggregatesFilter<"Room"> | number
    numberOfBeds?: IntWithAggregatesFilter<"Room"> | number
    rent?: FloatWithAggregatesFilter<"Room"> | number
    pansionId?: IntWithAggregatesFilter<"Room"> | number
    categoryId?: IntWithAggregatesFilter<"Room"> | number
  }

  export type ProvinceWhereInput = {
    AND?: ProvinceWhereInput | ProvinceWhereInput[]
    OR?: ProvinceWhereInput[]
    NOT?: ProvinceWhereInput | ProvinceWhereInput[]
    id?: IntFilter<"Province"> | number
    name?: StringFilter<"Province"> | string
    enName?: StringFilter<"Province"> | string
    cities?: CityListRelationFilter
    pansions?: PansionListRelationFilter
    users?: UserListRelationFilter
  }

  export type ProvinceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    enName?: SortOrder
    cities?: CityOrderByRelationAggregateInput
    pansions?: PansionOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type ProvinceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProvinceWhereInput | ProvinceWhereInput[]
    OR?: ProvinceWhereInput[]
    NOT?: ProvinceWhereInput | ProvinceWhereInput[]
    name?: StringFilter<"Province"> | string
    enName?: StringFilter<"Province"> | string
    cities?: CityListRelationFilter
    pansions?: PansionListRelationFilter
    users?: UserListRelationFilter
  }, "id">

  export type ProvinceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    enName?: SortOrder
    _count?: ProvinceCountOrderByAggregateInput
    _avg?: ProvinceAvgOrderByAggregateInput
    _max?: ProvinceMaxOrderByAggregateInput
    _min?: ProvinceMinOrderByAggregateInput
    _sum?: ProvinceSumOrderByAggregateInput
  }

  export type ProvinceScalarWhereWithAggregatesInput = {
    AND?: ProvinceScalarWhereWithAggregatesInput | ProvinceScalarWhereWithAggregatesInput[]
    OR?: ProvinceScalarWhereWithAggregatesInput[]
    NOT?: ProvinceScalarWhereWithAggregatesInput | ProvinceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Province"> | number
    name?: StringWithAggregatesFilter<"Province"> | string
    enName?: StringWithAggregatesFilter<"Province"> | string
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: IntFilter<"City"> | number
    name?: StringFilter<"City"> | string
    enName?: StringFilter<"City"> | string
    provinceId?: IntFilter<"City"> | number
    province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    pansions?: PansionListRelationFilter
    users?: UserListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    enName?: SortOrder
    provinceId?: SortOrder
    province?: ProvinceOrderByWithRelationInput
    pansions?: PansionOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    name?: StringFilter<"City"> | string
    enName?: StringFilter<"City"> | string
    provinceId?: IntFilter<"City"> | number
    province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    pansions?: PansionListRelationFilter
    users?: UserListRelationFilter
  }, "id">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    enName?: SortOrder
    provinceId?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _avg?: CityAvgOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
    _sum?: CitySumOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"City"> | number
    name?: StringWithAggregatesFilter<"City"> | string
    enName?: StringWithAggregatesFilter<"City"> | string
    provinceId?: IntWithAggregatesFilter<"City"> | number
  }

  export type PosInPansionWhereInput = {
    AND?: PosInPansionWhereInput | PosInPansionWhereInput[]
    OR?: PosInPansionWhereInput[]
    NOT?: PosInPansionWhereInput | PosInPansionWhereInput[]
    positionId?: IntFilter<"PosInPansion"> | number
    pansionId?: IntFilter<"PosInPansion"> | number
    assignedAt?: DateTimeFilter<"PosInPansion"> | Date | string
    assignedBy?: IntFilter<"PosInPansion"> | number
    assigned?: XOR<UserScalarRelationFilter, UserWhereInput>
    pansion?: XOR<PansionScalarRelationFilter, PansionWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
  }

  export type PosInPansionOrderByWithRelationInput = {
    positionId?: SortOrder
    pansionId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    assigned?: UserOrderByWithRelationInput
    pansion?: PansionOrderByWithRelationInput
    position?: PositionOrderByWithRelationInput
  }

  export type PosInPansionWhereUniqueInput = Prisma.AtLeast<{
    positionId_pansionId?: PosInPansionPositionIdPansionIdCompoundUniqueInput
    AND?: PosInPansionWhereInput | PosInPansionWhereInput[]
    OR?: PosInPansionWhereInput[]
    NOT?: PosInPansionWhereInput | PosInPansionWhereInput[]
    positionId?: IntFilter<"PosInPansion"> | number
    pansionId?: IntFilter<"PosInPansion"> | number
    assignedAt?: DateTimeFilter<"PosInPansion"> | Date | string
    assignedBy?: IntFilter<"PosInPansion"> | number
    assigned?: XOR<UserScalarRelationFilter, UserWhereInput>
    pansion?: XOR<PansionScalarRelationFilter, PansionWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
  }, "positionId_pansionId">

  export type PosInPansionOrderByWithAggregationInput = {
    positionId?: SortOrder
    pansionId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    _count?: PosInPansionCountOrderByAggregateInput
    _avg?: PosInPansionAvgOrderByAggregateInput
    _max?: PosInPansionMaxOrderByAggregateInput
    _min?: PosInPansionMinOrderByAggregateInput
    _sum?: PosInPansionSumOrderByAggregateInput
  }

  export type PosInPansionScalarWhereWithAggregatesInput = {
    AND?: PosInPansionScalarWhereWithAggregatesInput | PosInPansionScalarWhereWithAggregatesInput[]
    OR?: PosInPansionScalarWhereWithAggregatesInput[]
    NOT?: PosInPansionScalarWhereWithAggregatesInput | PosInPansionScalarWhereWithAggregatesInput[]
    positionId?: IntWithAggregatesFilter<"PosInPansion"> | number
    pansionId?: IntWithAggregatesFilter<"PosInPansion"> | number
    assignedAt?: DateTimeWithAggregatesFilter<"PosInPansion"> | Date | string
    assignedBy?: IntWithAggregatesFilter<"PosInPansion"> | number
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    title?: StringFilter<"Comment"> | string
    description?: StringFilter<"Comment"> | string
    pansions?: PansionListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pansions?: PansionOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    title?: StringFilter<"Comment"> | string
    description?: StringFilter<"Comment"> | string
    pansions?: PansionListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    title?: StringWithAggregatesFilter<"Comment"> | string
    description?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type OptionsWhereInput = {
    AND?: OptionsWhereInput | OptionsWhereInput[]
    OR?: OptionsWhereInput[]
    NOT?: OptionsWhereInput | OptionsWhereInput[]
    id?: IntFilter<"Options"> | number
    name?: StringFilter<"Options"> | string
    ponsionOptions?: PonsionOptionsListRelationFilter
  }

  export type OptionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ponsionOptions?: ponsionOptionsOrderByRelationAggregateInput
  }

  export type OptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OptionsWhereInput | OptionsWhereInput[]
    OR?: OptionsWhereInput[]
    NOT?: OptionsWhereInput | OptionsWhereInput[]
    name?: StringFilter<"Options"> | string
    ponsionOptions?: PonsionOptionsListRelationFilter
  }, "id">

  export type OptionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: OptionsCountOrderByAggregateInput
    _avg?: OptionsAvgOrderByAggregateInput
    _max?: OptionsMaxOrderByAggregateInput
    _min?: OptionsMinOrderByAggregateInput
    _sum?: OptionsSumOrderByAggregateInput
  }

  export type OptionsScalarWhereWithAggregatesInput = {
    AND?: OptionsScalarWhereWithAggregatesInput | OptionsScalarWhereWithAggregatesInput[]
    OR?: OptionsScalarWhereWithAggregatesInput[]
    NOT?: OptionsScalarWhereWithAggregatesInput | OptionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Options"> | number
    name?: StringWithAggregatesFilter<"Options"> | string
  }

  export type ponsionOptionsWhereInput = {
    AND?: ponsionOptionsWhereInput | ponsionOptionsWhereInput[]
    OR?: ponsionOptionsWhereInput[]
    NOT?: ponsionOptionsWhereInput | ponsionOptionsWhereInput[]
    pansionId?: IntFilter<"ponsionOptions"> | number
    optionId?: IntFilter<"ponsionOptions"> | number
    assignedAt?: DateTimeFilter<"ponsionOptions"> | Date | string
    assignedBy?: IntFilter<"ponsionOptions"> | number
    assigned?: XOR<UserScalarRelationFilter, UserWhereInput>
    options?: XOR<OptionsScalarRelationFilter, OptionsWhereInput>
    pansion?: XOR<PansionScalarRelationFilter, PansionWhereInput>
  }

  export type ponsionOptionsOrderByWithRelationInput = {
    pansionId?: SortOrder
    optionId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    assigned?: UserOrderByWithRelationInput
    options?: OptionsOrderByWithRelationInput
    pansion?: PansionOrderByWithRelationInput
  }

  export type ponsionOptionsWhereUniqueInput = Prisma.AtLeast<{
    pansionId_optionId?: ponsionOptionsPansionIdOptionIdCompoundUniqueInput
    AND?: ponsionOptionsWhereInput | ponsionOptionsWhereInput[]
    OR?: ponsionOptionsWhereInput[]
    NOT?: ponsionOptionsWhereInput | ponsionOptionsWhereInput[]
    pansionId?: IntFilter<"ponsionOptions"> | number
    optionId?: IntFilter<"ponsionOptions"> | number
    assignedAt?: DateTimeFilter<"ponsionOptions"> | Date | string
    assignedBy?: IntFilter<"ponsionOptions"> | number
    assigned?: XOR<UserScalarRelationFilter, UserWhereInput>
    options?: XOR<OptionsScalarRelationFilter, OptionsWhereInput>
    pansion?: XOR<PansionScalarRelationFilter, PansionWhereInput>
  }, "pansionId_optionId">

  export type ponsionOptionsOrderByWithAggregationInput = {
    pansionId?: SortOrder
    optionId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    _count?: ponsionOptionsCountOrderByAggregateInput
    _avg?: ponsionOptionsAvgOrderByAggregateInput
    _max?: ponsionOptionsMaxOrderByAggregateInput
    _min?: ponsionOptionsMinOrderByAggregateInput
    _sum?: ponsionOptionsSumOrderByAggregateInput
  }

  export type ponsionOptionsScalarWhereWithAggregatesInput = {
    AND?: ponsionOptionsScalarWhereWithAggregatesInput | ponsionOptionsScalarWhereWithAggregatesInput[]
    OR?: ponsionOptionsScalarWhereWithAggregatesInput[]
    NOT?: ponsionOptionsScalarWhereWithAggregatesInput | ponsionOptionsScalarWhereWithAggregatesInput[]
    pansionId?: IntWithAggregatesFilter<"ponsionOptions"> | number
    optionId?: IntWithAggregatesFilter<"ponsionOptions"> | number
    assignedAt?: DateTimeWithAggregatesFilter<"ponsionOptions"> | Date | string
    assignedBy?: IntWithAggregatesFilter<"ponsionOptions"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    minAdvancePay?: FloatFilter<"Category"> | number
    maxAdvancePay?: FloatFilter<"Category"> | number
    minRent?: FloatFilter<"Category"> | number
    maxRent?: FloatFilter<"Category"> | number
    rooms?: RoomListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    minAdvancePay?: SortOrder
    maxAdvancePay?: SortOrder
    minRent?: SortOrder
    maxRent?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    minAdvancePay?: FloatFilter<"Category"> | number
    maxAdvancePay?: FloatFilter<"Category"> | number
    minRent?: FloatFilter<"Category"> | number
    maxRent?: FloatFilter<"Category"> | number
    rooms?: RoomListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    minAdvancePay?: SortOrder
    maxAdvancePay?: SortOrder
    minRent?: SortOrder
    maxRent?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    minAdvancePay?: FloatWithAggregatesFilter<"Category"> | number
    maxAdvancePay?: FloatWithAggregatesFilter<"Category"> | number
    minRent?: FloatWithAggregatesFilter<"Category"> | number
    maxRent?: FloatWithAggregatesFilter<"Category"> | number
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    phone: string
    email: string
    PosInPansion?: PosInPansionCreateNestedManyWithoutAssignedInput
    city: CityCreateNestedOneWithoutUsersInput
    pansion: PansionCreateNestedOneWithoutUsersInput
    position: PositionCreateNestedOneWithoutUsersInput
    province: ProvinceCreateNestedOneWithoutUsersInput
    ponsionOptions?: ponsionOptionsCreateNestedManyWithoutAssignedInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    email: string
    positionId: number
    pansionId: number
    provinceId: number
    cityId: number
    PosInPansion?: PosInPansionUncheckedCreateNestedManyWithoutAssignedInput
    ponsionOptions?: ponsionOptionsUncheckedCreateNestedManyWithoutAssignedInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    PosInPansion?: PosInPansionUpdateManyWithoutAssignedNestedInput
    city?: CityUpdateOneRequiredWithoutUsersNestedInput
    pansion?: PansionUpdateOneRequiredWithoutUsersNestedInput
    position?: PositionUpdateOneRequiredWithoutUsersNestedInput
    province?: ProvinceUpdateOneRequiredWithoutUsersNestedInput
    ponsionOptions?: ponsionOptionsUpdateManyWithoutAssignedNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    PosInPansion?: PosInPansionUncheckedUpdateManyWithoutAssignedNestedInput
    ponsionOptions?: ponsionOptionsUncheckedUpdateManyWithoutAssignedNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    email: string
    positionId: number
    pansionId: number
    provinceId: number
    cityId: number
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
  }

  export type PositionCreateInput = {
    name: string
    level?: $Enums.Role
    PosInPansion?: PosInPansionCreateNestedManyWithoutPositionInput
    users?: UserCreateNestedManyWithoutPositionInput
  }

  export type PositionUncheckedCreateInput = {
    id?: number
    name: string
    level?: $Enums.Role
    PosInPansion?: PosInPansionUncheckedCreateNestedManyWithoutPositionInput
    users?: UserUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    PosInPansion?: PosInPansionUpdateManyWithoutPositionNestedInput
    users?: UserUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    PosInPansion?: PosInPansionUncheckedUpdateManyWithoutPositionNestedInput
    users?: UserUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PositionCreateManyInput = {
    id?: number
    name: string
    level?: $Enums.Role
  }

  export type PositionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type PositionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type PansionCreateInput = {
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    city: CityCreateNestedOneWithoutPansionsInput
    comment?: CommentCreateNestedOneWithoutPansionsInput
    province: ProvinceCreateNestedOneWithoutPansionsInput
    positions?: PosInPansionCreateNestedManyWithoutPansionInput
    rooms?: RoomCreateNestedManyWithoutPansionInput
    users?: UserCreateNestedManyWithoutPansionInput
    ponsionOptions?: ponsionOptionsCreateNestedManyWithoutPansionInput
  }

  export type PansionUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    commentId?: number | null
    provinceId: number
    cityId: number
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    positions?: PosInPansionUncheckedCreateNestedManyWithoutPansionInput
    rooms?: RoomUncheckedCreateNestedManyWithoutPansionInput
    users?: UserUncheckedCreateNestedManyWithoutPansionInput
    ponsionOptions?: ponsionOptionsUncheckedCreateNestedManyWithoutPansionInput
  }

  export type PansionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    city?: CityUpdateOneRequiredWithoutPansionsNestedInput
    comment?: CommentUpdateOneWithoutPansionsNestedInput
    province?: ProvinceUpdateOneRequiredWithoutPansionsNestedInput
    positions?: PosInPansionUpdateManyWithoutPansionNestedInput
    rooms?: RoomUpdateManyWithoutPansionNestedInput
    users?: UserUpdateManyWithoutPansionNestedInput
    ponsionOptions?: ponsionOptionsUpdateManyWithoutPansionNestedInput
  }

  export type PansionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    positions?: PosInPansionUncheckedUpdateManyWithoutPansionNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutPansionNestedInput
    users?: UserUncheckedUpdateManyWithoutPansionNestedInput
    ponsionOptions?: ponsionOptionsUncheckedUpdateManyWithoutPansionNestedInput
  }

  export type PansionCreateManyInput = {
    id?: number
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    commentId?: number | null
    provinceId: number
    cityId: number
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
  }

  export type PansionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
  }

  export type PansionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
  }

  export type RoomCreateInput = {
    numberRoom: number
    numberOfBeds: number
    rent: number
    category: CategoryCreateNestedOneWithoutRoomsInput
    pansion: PansionCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    numberRoom: number
    numberOfBeds: number
    rent: number
    pansionId: number
    categoryId: number
  }

  export type RoomUpdateInput = {
    numberRoom?: IntFieldUpdateOperationsInput | number
    numberOfBeds?: IntFieldUpdateOperationsInput | number
    rent?: FloatFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutRoomsNestedInput
    pansion?: PansionUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberRoom?: IntFieldUpdateOperationsInput | number
    numberOfBeds?: IntFieldUpdateOperationsInput | number
    rent?: FloatFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type RoomCreateManyInput = {
    id?: number
    numberRoom: number
    numberOfBeds: number
    rent: number
    pansionId: number
    categoryId: number
  }

  export type RoomUpdateManyMutationInput = {
    numberRoom?: IntFieldUpdateOperationsInput | number
    numberOfBeds?: IntFieldUpdateOperationsInput | number
    rent?: FloatFieldUpdateOperationsInput | number
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberRoom?: IntFieldUpdateOperationsInput | number
    numberOfBeds?: IntFieldUpdateOperationsInput | number
    rent?: FloatFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ProvinceCreateInput = {
    name: string
    enName: string
    cities?: CityCreateNestedManyWithoutProvinceInput
    pansions?: PansionCreateNestedManyWithoutProvinceInput
    users?: UserCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateInput = {
    id?: number
    name: string
    enName: string
    cities?: CityUncheckedCreateNestedManyWithoutProvinceInput
    pansions?: PansionUncheckedCreateNestedManyWithoutProvinceInput
    users?: UserUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    cities?: CityUpdateManyWithoutProvinceNestedInput
    pansions?: PansionUpdateManyWithoutProvinceNestedInput
    users?: UserUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    cities?: CityUncheckedUpdateManyWithoutProvinceNestedInput
    pansions?: PansionUncheckedUpdateManyWithoutProvinceNestedInput
    users?: UserUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceCreateManyInput = {
    id?: number
    name: string
    enName: string
  }

  export type ProvinceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
  }

  export type CityCreateInput = {
    name: string
    enName: string
    province: ProvinceCreateNestedOneWithoutCitiesInput
    pansions?: PansionCreateNestedManyWithoutCityInput
    users?: UserCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: number
    name: string
    enName: string
    provinceId: number
    pansions?: PansionUncheckedCreateNestedManyWithoutCityInput
    users?: UserUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    province?: ProvinceUpdateOneRequiredWithoutCitiesNestedInput
    pansions?: PansionUpdateManyWithoutCityNestedInput
    users?: UserUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    pansions?: PansionUncheckedUpdateManyWithoutCityNestedInput
    users?: UserUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: number
    name: string
    enName: string
    provinceId: number
  }

  export type CityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
  }

  export type CityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
  }

  export type PosInPansionCreateInput = {
    assignedAt?: Date | string
    assigned: UserCreateNestedOneWithoutPosInPansionInput
    pansion: PansionCreateNestedOneWithoutPositionsInput
    position: PositionCreateNestedOneWithoutPosInPansionInput
  }

  export type PosInPansionUncheckedCreateInput = {
    positionId: number
    pansionId: number
    assignedAt?: Date | string
    assignedBy: number
  }

  export type PosInPansionUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned?: UserUpdateOneRequiredWithoutPosInPansionNestedInput
    pansion?: PansionUpdateOneRequiredWithoutPositionsNestedInput
    position?: PositionUpdateOneRequiredWithoutPosInPansionNestedInput
  }

  export type PosInPansionUncheckedUpdateInput = {
    positionId?: IntFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: IntFieldUpdateOperationsInput | number
  }

  export type PosInPansionCreateManyInput = {
    positionId: number
    pansionId: number
    assignedAt?: Date | string
    assignedBy: number
  }

  export type PosInPansionUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosInPansionUncheckedUpdateManyInput = {
    positionId?: IntFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateInput = {
    title: string
    description: string
    pansions?: PansionCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    pansions?: PansionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pansions?: PansionUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pansions?: PansionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: number
    title: string
    description: string
  }

  export type CommentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type OptionsCreateInput = {
    name: string
    ponsionOptions?: ponsionOptionsCreateNestedManyWithoutOptionsInput
  }

  export type OptionsUncheckedCreateInput = {
    id?: number
    name: string
    ponsionOptions?: ponsionOptionsUncheckedCreateNestedManyWithoutOptionsInput
  }

  export type OptionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    ponsionOptions?: ponsionOptionsUpdateManyWithoutOptionsNestedInput
  }

  export type OptionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ponsionOptions?: ponsionOptionsUncheckedUpdateManyWithoutOptionsNestedInput
  }

  export type OptionsCreateManyInput = {
    id?: number
    name: string
  }

  export type OptionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OptionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ponsionOptionsCreateInput = {
    assignedAt?: Date | string
    assigned: UserCreateNestedOneWithoutPonsionOptionsInput
    options: OptionsCreateNestedOneWithoutPonsionOptionsInput
    pansion: PansionCreateNestedOneWithoutPonsionOptionsInput
  }

  export type ponsionOptionsUncheckedCreateInput = {
    pansionId: number
    optionId: number
    assignedAt?: Date | string
    assignedBy: number
  }

  export type ponsionOptionsUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned?: UserUpdateOneRequiredWithoutPonsionOptionsNestedInput
    options?: OptionsUpdateOneRequiredWithoutPonsionOptionsNestedInput
    pansion?: PansionUpdateOneRequiredWithoutPonsionOptionsNestedInput
  }

  export type ponsionOptionsUncheckedUpdateInput = {
    pansionId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: IntFieldUpdateOperationsInput | number
  }

  export type ponsionOptionsCreateManyInput = {
    pansionId: number
    optionId: number
    assignedAt?: Date | string
    assignedBy: number
  }

  export type ponsionOptionsUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ponsionOptionsUncheckedUpdateManyInput = {
    pansionId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name: string
    minAdvancePay: number
    maxAdvancePay: number
    minRent: number
    maxRent: number
    rooms?: RoomCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    minAdvancePay: number
    maxAdvancePay: number
    minRent: number
    maxRent: number
    rooms?: RoomUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    minAdvancePay?: FloatFieldUpdateOperationsInput | number
    maxAdvancePay?: FloatFieldUpdateOperationsInput | number
    minRent?: FloatFieldUpdateOperationsInput | number
    maxRent?: FloatFieldUpdateOperationsInput | number
    rooms?: RoomUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minAdvancePay?: FloatFieldUpdateOperationsInput | number
    maxAdvancePay?: FloatFieldUpdateOperationsInput | number
    minRent?: FloatFieldUpdateOperationsInput | number
    maxRent?: FloatFieldUpdateOperationsInput | number
    rooms?: RoomUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    minAdvancePay: number
    maxAdvancePay: number
    minRent: number
    maxRent: number
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    minAdvancePay?: FloatFieldUpdateOperationsInput | number
    maxAdvancePay?: FloatFieldUpdateOperationsInput | number
    minRent?: FloatFieldUpdateOperationsInput | number
    maxRent?: FloatFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minAdvancePay?: FloatFieldUpdateOperationsInput | number
    maxAdvancePay?: FloatFieldUpdateOperationsInput | number
    minRent?: FloatFieldUpdateOperationsInput | number
    maxRent?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PosInPansionListRelationFilter = {
    every?: PosInPansionWhereInput
    some?: PosInPansionWhereInput
    none?: PosInPansionWhereInput
  }

  export type CityScalarRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type PansionScalarRelationFilter = {
    is?: PansionWhereInput
    isNot?: PansionWhereInput
  }

  export type PositionScalarRelationFilter = {
    is?: PositionWhereInput
    isNot?: PositionWhereInput
  }

  export type ProvinceScalarRelationFilter = {
    is?: ProvinceWhereInput
    isNot?: ProvinceWhereInput
  }

  export type PonsionOptionsListRelationFilter = {
    every?: ponsionOptionsWhereInput
    some?: ponsionOptionsWhereInput
    none?: ponsionOptionsWhereInput
  }

  export type PosInPansionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ponsionOptionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    positionId?: SortOrder
    pansionId?: SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    positionId?: SortOrder
    pansionId?: SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    positionId?: SortOrder
    pansionId?: SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    positionId?: SortOrder
    pansionId?: SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    positionId?: SortOrder
    pansionId?: SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PositionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
  }

  export type PositionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PositionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
  }

  export type PositionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
  }

  export type PositionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumContractFilter<$PrismaModel = never> = {
    equals?: $Enums.Contract | EnumContractFieldRefInput<$PrismaModel>
    in?: $Enums.Contract[] | ListEnumContractFieldRefInput<$PrismaModel>
    notIn?: $Enums.Contract[] | ListEnumContractFieldRefInput<$PrismaModel>
    not?: NestedEnumContractFilter<$PrismaModel> | $Enums.Contract
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumPansionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PansionType | EnumPansionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PansionType[] | ListEnumPansionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PansionType[] | ListEnumPansionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPansionTypeFilter<$PrismaModel> | $Enums.PansionType
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PansionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    codeParvane?: SortOrder
    Capacity?: SortOrder
    advancePayment?: SortOrder
    chargeMony?: SortOrder
    active?: SortOrder
    typeOfContract?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    commentId?: SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
    typeOfPansion?: SortOrder
    numberOfRoom?: SortOrder
    numberOfBed?: SortOrder
  }

  export type PansionAvgOrderByAggregateInput = {
    id?: SortOrder
    Capacity?: SortOrder
    advancePayment?: SortOrder
    chargeMony?: SortOrder
    commentId?: SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
    numberOfRoom?: SortOrder
    numberOfBed?: SortOrder
  }

  export type PansionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    codeParvane?: SortOrder
    Capacity?: SortOrder
    advancePayment?: SortOrder
    chargeMony?: SortOrder
    active?: SortOrder
    typeOfContract?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    commentId?: SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
    typeOfPansion?: SortOrder
    numberOfRoom?: SortOrder
    numberOfBed?: SortOrder
  }

  export type PansionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    codeParvane?: SortOrder
    Capacity?: SortOrder
    advancePayment?: SortOrder
    chargeMony?: SortOrder
    active?: SortOrder
    typeOfContract?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    commentId?: SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
    typeOfPansion?: SortOrder
    numberOfRoom?: SortOrder
    numberOfBed?: SortOrder
  }

  export type PansionSumOrderByAggregateInput = {
    id?: SortOrder
    Capacity?: SortOrder
    advancePayment?: SortOrder
    chargeMony?: SortOrder
    commentId?: SortOrder
    provinceId?: SortOrder
    cityId?: SortOrder
    numberOfRoom?: SortOrder
    numberOfBed?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumContractWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Contract | EnumContractFieldRefInput<$PrismaModel>
    in?: $Enums.Contract[] | ListEnumContractFieldRefInput<$PrismaModel>
    notIn?: $Enums.Contract[] | ListEnumContractFieldRefInput<$PrismaModel>
    not?: NestedEnumContractWithAggregatesFilter<$PrismaModel> | $Enums.Contract
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractFilter<$PrismaModel>
    _max?: NestedEnumContractFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPansionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PansionType | EnumPansionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PansionType[] | ListEnumPansionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PansionType[] | ListEnumPansionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPansionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PansionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPansionTypeFilter<$PrismaModel>
    _max?: NestedEnumPansionTypeFilter<$PrismaModel>
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    numberRoom?: SortOrder
    numberOfBeds?: SortOrder
    rent?: SortOrder
    pansionId?: SortOrder
    categoryId?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    numberRoom?: SortOrder
    numberOfBeds?: SortOrder
    rent?: SortOrder
    pansionId?: SortOrder
    categoryId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    numberRoom?: SortOrder
    numberOfBeds?: SortOrder
    rent?: SortOrder
    pansionId?: SortOrder
    categoryId?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    numberRoom?: SortOrder
    numberOfBeds?: SortOrder
    rent?: SortOrder
    pansionId?: SortOrder
    categoryId?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    numberRoom?: SortOrder
    numberOfBeds?: SortOrder
    rent?: SortOrder
    pansionId?: SortOrder
    categoryId?: SortOrder
  }

  export type CityListRelationFilter = {
    every?: CityWhereInput
    some?: CityWhereInput
    none?: CityWhereInput
  }

  export type PansionListRelationFilter = {
    every?: PansionWhereInput
    some?: PansionWhereInput
    none?: PansionWhereInput
  }

  export type CityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PansionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProvinceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enName?: SortOrder
  }

  export type ProvinceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProvinceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enName?: SortOrder
  }

  export type ProvinceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enName?: SortOrder
  }

  export type ProvinceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enName?: SortOrder
    provinceId?: SortOrder
  }

  export type CityAvgOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enName?: SortOrder
    provinceId?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enName?: SortOrder
    provinceId?: SortOrder
  }

  export type CitySumOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PosInPansionPositionIdPansionIdCompoundUniqueInput = {
    positionId: number
    pansionId: number
  }

  export type PosInPansionCountOrderByAggregateInput = {
    positionId?: SortOrder
    pansionId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type PosInPansionAvgOrderByAggregateInput = {
    positionId?: SortOrder
    pansionId?: SortOrder
    assignedBy?: SortOrder
  }

  export type PosInPansionMaxOrderByAggregateInput = {
    positionId?: SortOrder
    pansionId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type PosInPansionMinOrderByAggregateInput = {
    positionId?: SortOrder
    pansionId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type PosInPansionSumOrderByAggregateInput = {
    positionId?: SortOrder
    pansionId?: SortOrder
    assignedBy?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OptionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OptionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OptionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OptionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OptionsScalarRelationFilter = {
    is?: OptionsWhereInput
    isNot?: OptionsWhereInput
  }

  export type ponsionOptionsPansionIdOptionIdCompoundUniqueInput = {
    pansionId: number
    optionId: number
  }

  export type ponsionOptionsCountOrderByAggregateInput = {
    pansionId?: SortOrder
    optionId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type ponsionOptionsAvgOrderByAggregateInput = {
    pansionId?: SortOrder
    optionId?: SortOrder
    assignedBy?: SortOrder
  }

  export type ponsionOptionsMaxOrderByAggregateInput = {
    pansionId?: SortOrder
    optionId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type ponsionOptionsMinOrderByAggregateInput = {
    pansionId?: SortOrder
    optionId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type ponsionOptionsSumOrderByAggregateInput = {
    pansionId?: SortOrder
    optionId?: SortOrder
    assignedBy?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minAdvancePay?: SortOrder
    maxAdvancePay?: SortOrder
    minRent?: SortOrder
    maxRent?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    minAdvancePay?: SortOrder
    maxAdvancePay?: SortOrder
    minRent?: SortOrder
    maxRent?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minAdvancePay?: SortOrder
    maxAdvancePay?: SortOrder
    minRent?: SortOrder
    maxRent?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minAdvancePay?: SortOrder
    maxAdvancePay?: SortOrder
    minRent?: SortOrder
    maxRent?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    minAdvancePay?: SortOrder
    maxAdvancePay?: SortOrder
    minRent?: SortOrder
    maxRent?: SortOrder
  }

  export type PosInPansionCreateNestedManyWithoutAssignedInput = {
    create?: XOR<PosInPansionCreateWithoutAssignedInput, PosInPansionUncheckedCreateWithoutAssignedInput> | PosInPansionCreateWithoutAssignedInput[] | PosInPansionUncheckedCreateWithoutAssignedInput[]
    connectOrCreate?: PosInPansionCreateOrConnectWithoutAssignedInput | PosInPansionCreateOrConnectWithoutAssignedInput[]
    createMany?: PosInPansionCreateManyAssignedInputEnvelope
    connect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
  }

  export type CityCreateNestedOneWithoutUsersInput = {
    create?: XOR<CityCreateWithoutUsersInput, CityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CityCreateOrConnectWithoutUsersInput
    connect?: CityWhereUniqueInput
  }

  export type PansionCreateNestedOneWithoutUsersInput = {
    create?: XOR<PansionCreateWithoutUsersInput, PansionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PansionCreateOrConnectWithoutUsersInput
    connect?: PansionWhereUniqueInput
  }

  export type PositionCreateNestedOneWithoutUsersInput = {
    create?: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PositionCreateOrConnectWithoutUsersInput
    connect?: PositionWhereUniqueInput
  }

  export type ProvinceCreateNestedOneWithoutUsersInput = {
    create?: XOR<ProvinceCreateWithoutUsersInput, ProvinceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutUsersInput
    connect?: ProvinceWhereUniqueInput
  }

  export type ponsionOptionsCreateNestedManyWithoutAssignedInput = {
    create?: XOR<ponsionOptionsCreateWithoutAssignedInput, ponsionOptionsUncheckedCreateWithoutAssignedInput> | ponsionOptionsCreateWithoutAssignedInput[] | ponsionOptionsUncheckedCreateWithoutAssignedInput[]
    connectOrCreate?: ponsionOptionsCreateOrConnectWithoutAssignedInput | ponsionOptionsCreateOrConnectWithoutAssignedInput[]
    createMany?: ponsionOptionsCreateManyAssignedInputEnvelope
    connect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
  }

  export type PosInPansionUncheckedCreateNestedManyWithoutAssignedInput = {
    create?: XOR<PosInPansionCreateWithoutAssignedInput, PosInPansionUncheckedCreateWithoutAssignedInput> | PosInPansionCreateWithoutAssignedInput[] | PosInPansionUncheckedCreateWithoutAssignedInput[]
    connectOrCreate?: PosInPansionCreateOrConnectWithoutAssignedInput | PosInPansionCreateOrConnectWithoutAssignedInput[]
    createMany?: PosInPansionCreateManyAssignedInputEnvelope
    connect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
  }

  export type ponsionOptionsUncheckedCreateNestedManyWithoutAssignedInput = {
    create?: XOR<ponsionOptionsCreateWithoutAssignedInput, ponsionOptionsUncheckedCreateWithoutAssignedInput> | ponsionOptionsCreateWithoutAssignedInput[] | ponsionOptionsUncheckedCreateWithoutAssignedInput[]
    connectOrCreate?: ponsionOptionsCreateOrConnectWithoutAssignedInput | ponsionOptionsCreateOrConnectWithoutAssignedInput[]
    createMany?: ponsionOptionsCreateManyAssignedInputEnvelope
    connect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PosInPansionUpdateManyWithoutAssignedNestedInput = {
    create?: XOR<PosInPansionCreateWithoutAssignedInput, PosInPansionUncheckedCreateWithoutAssignedInput> | PosInPansionCreateWithoutAssignedInput[] | PosInPansionUncheckedCreateWithoutAssignedInput[]
    connectOrCreate?: PosInPansionCreateOrConnectWithoutAssignedInput | PosInPansionCreateOrConnectWithoutAssignedInput[]
    upsert?: PosInPansionUpsertWithWhereUniqueWithoutAssignedInput | PosInPansionUpsertWithWhereUniqueWithoutAssignedInput[]
    createMany?: PosInPansionCreateManyAssignedInputEnvelope
    set?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    disconnect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    delete?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    connect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    update?: PosInPansionUpdateWithWhereUniqueWithoutAssignedInput | PosInPansionUpdateWithWhereUniqueWithoutAssignedInput[]
    updateMany?: PosInPansionUpdateManyWithWhereWithoutAssignedInput | PosInPansionUpdateManyWithWhereWithoutAssignedInput[]
    deleteMany?: PosInPansionScalarWhereInput | PosInPansionScalarWhereInput[]
  }

  export type CityUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<CityCreateWithoutUsersInput, CityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CityCreateOrConnectWithoutUsersInput
    upsert?: CityUpsertWithoutUsersInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutUsersInput, CityUpdateWithoutUsersInput>, CityUncheckedUpdateWithoutUsersInput>
  }

  export type PansionUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<PansionCreateWithoutUsersInput, PansionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PansionCreateOrConnectWithoutUsersInput
    upsert?: PansionUpsertWithoutUsersInput
    connect?: PansionWhereUniqueInput
    update?: XOR<XOR<PansionUpdateToOneWithWhereWithoutUsersInput, PansionUpdateWithoutUsersInput>, PansionUncheckedUpdateWithoutUsersInput>
  }

  export type PositionUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PositionCreateOrConnectWithoutUsersInput
    upsert?: PositionUpsertWithoutUsersInput
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutUsersInput, PositionUpdateWithoutUsersInput>, PositionUncheckedUpdateWithoutUsersInput>
  }

  export type ProvinceUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ProvinceCreateWithoutUsersInput, ProvinceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutUsersInput
    upsert?: ProvinceUpsertWithoutUsersInput
    connect?: ProvinceWhereUniqueInput
    update?: XOR<XOR<ProvinceUpdateToOneWithWhereWithoutUsersInput, ProvinceUpdateWithoutUsersInput>, ProvinceUncheckedUpdateWithoutUsersInput>
  }

  export type ponsionOptionsUpdateManyWithoutAssignedNestedInput = {
    create?: XOR<ponsionOptionsCreateWithoutAssignedInput, ponsionOptionsUncheckedCreateWithoutAssignedInput> | ponsionOptionsCreateWithoutAssignedInput[] | ponsionOptionsUncheckedCreateWithoutAssignedInput[]
    connectOrCreate?: ponsionOptionsCreateOrConnectWithoutAssignedInput | ponsionOptionsCreateOrConnectWithoutAssignedInput[]
    upsert?: ponsionOptionsUpsertWithWhereUniqueWithoutAssignedInput | ponsionOptionsUpsertWithWhereUniqueWithoutAssignedInput[]
    createMany?: ponsionOptionsCreateManyAssignedInputEnvelope
    set?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    disconnect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    delete?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    connect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    update?: ponsionOptionsUpdateWithWhereUniqueWithoutAssignedInput | ponsionOptionsUpdateWithWhereUniqueWithoutAssignedInput[]
    updateMany?: ponsionOptionsUpdateManyWithWhereWithoutAssignedInput | ponsionOptionsUpdateManyWithWhereWithoutAssignedInput[]
    deleteMany?: ponsionOptionsScalarWhereInput | ponsionOptionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PosInPansionUncheckedUpdateManyWithoutAssignedNestedInput = {
    create?: XOR<PosInPansionCreateWithoutAssignedInput, PosInPansionUncheckedCreateWithoutAssignedInput> | PosInPansionCreateWithoutAssignedInput[] | PosInPansionUncheckedCreateWithoutAssignedInput[]
    connectOrCreate?: PosInPansionCreateOrConnectWithoutAssignedInput | PosInPansionCreateOrConnectWithoutAssignedInput[]
    upsert?: PosInPansionUpsertWithWhereUniqueWithoutAssignedInput | PosInPansionUpsertWithWhereUniqueWithoutAssignedInput[]
    createMany?: PosInPansionCreateManyAssignedInputEnvelope
    set?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    disconnect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    delete?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    connect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    update?: PosInPansionUpdateWithWhereUniqueWithoutAssignedInput | PosInPansionUpdateWithWhereUniqueWithoutAssignedInput[]
    updateMany?: PosInPansionUpdateManyWithWhereWithoutAssignedInput | PosInPansionUpdateManyWithWhereWithoutAssignedInput[]
    deleteMany?: PosInPansionScalarWhereInput | PosInPansionScalarWhereInput[]
  }

  export type ponsionOptionsUncheckedUpdateManyWithoutAssignedNestedInput = {
    create?: XOR<ponsionOptionsCreateWithoutAssignedInput, ponsionOptionsUncheckedCreateWithoutAssignedInput> | ponsionOptionsCreateWithoutAssignedInput[] | ponsionOptionsUncheckedCreateWithoutAssignedInput[]
    connectOrCreate?: ponsionOptionsCreateOrConnectWithoutAssignedInput | ponsionOptionsCreateOrConnectWithoutAssignedInput[]
    upsert?: ponsionOptionsUpsertWithWhereUniqueWithoutAssignedInput | ponsionOptionsUpsertWithWhereUniqueWithoutAssignedInput[]
    createMany?: ponsionOptionsCreateManyAssignedInputEnvelope
    set?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    disconnect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    delete?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    connect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    update?: ponsionOptionsUpdateWithWhereUniqueWithoutAssignedInput | ponsionOptionsUpdateWithWhereUniqueWithoutAssignedInput[]
    updateMany?: ponsionOptionsUpdateManyWithWhereWithoutAssignedInput | ponsionOptionsUpdateManyWithWhereWithoutAssignedInput[]
    deleteMany?: ponsionOptionsScalarWhereInput | ponsionOptionsScalarWhereInput[]
  }

  export type PosInPansionCreateNestedManyWithoutPositionInput = {
    create?: XOR<PosInPansionCreateWithoutPositionInput, PosInPansionUncheckedCreateWithoutPositionInput> | PosInPansionCreateWithoutPositionInput[] | PosInPansionUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: PosInPansionCreateOrConnectWithoutPositionInput | PosInPansionCreateOrConnectWithoutPositionInput[]
    createMany?: PosInPansionCreateManyPositionInputEnvelope
    connect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutPositionInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    createMany?: UserCreateManyPositionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PosInPansionUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<PosInPansionCreateWithoutPositionInput, PosInPansionUncheckedCreateWithoutPositionInput> | PosInPansionCreateWithoutPositionInput[] | PosInPansionUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: PosInPansionCreateOrConnectWithoutPositionInput | PosInPansionCreateOrConnectWithoutPositionInput[]
    createMany?: PosInPansionCreateManyPositionInputEnvelope
    connect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    createMany?: UserCreateManyPositionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type PosInPansionUpdateManyWithoutPositionNestedInput = {
    create?: XOR<PosInPansionCreateWithoutPositionInput, PosInPansionUncheckedCreateWithoutPositionInput> | PosInPansionCreateWithoutPositionInput[] | PosInPansionUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: PosInPansionCreateOrConnectWithoutPositionInput | PosInPansionCreateOrConnectWithoutPositionInput[]
    upsert?: PosInPansionUpsertWithWhereUniqueWithoutPositionInput | PosInPansionUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: PosInPansionCreateManyPositionInputEnvelope
    set?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    disconnect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    delete?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    connect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    update?: PosInPansionUpdateWithWhereUniqueWithoutPositionInput | PosInPansionUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: PosInPansionUpdateManyWithWhereWithoutPositionInput | PosInPansionUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: PosInPansionScalarWhereInput | PosInPansionScalarWhereInput[]
  }

  export type UserUpdateManyWithoutPositionNestedInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPositionInput | UserUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: UserCreateManyPositionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPositionInput | UserUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPositionInput | UserUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PosInPansionUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<PosInPansionCreateWithoutPositionInput, PosInPansionUncheckedCreateWithoutPositionInput> | PosInPansionCreateWithoutPositionInput[] | PosInPansionUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: PosInPansionCreateOrConnectWithoutPositionInput | PosInPansionCreateOrConnectWithoutPositionInput[]
    upsert?: PosInPansionUpsertWithWhereUniqueWithoutPositionInput | PosInPansionUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: PosInPansionCreateManyPositionInputEnvelope
    set?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    disconnect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    delete?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    connect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    update?: PosInPansionUpdateWithWhereUniqueWithoutPositionInput | PosInPansionUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: PosInPansionUpdateManyWithWhereWithoutPositionInput | PosInPansionUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: PosInPansionScalarWhereInput | PosInPansionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPositionInput | UserUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: UserCreateManyPositionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPositionInput | UserUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPositionInput | UserUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutPansionsInput = {
    create?: XOR<CityCreateWithoutPansionsInput, CityUncheckedCreateWithoutPansionsInput>
    connectOrCreate?: CityCreateOrConnectWithoutPansionsInput
    connect?: CityWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutPansionsInput = {
    create?: XOR<CommentCreateWithoutPansionsInput, CommentUncheckedCreateWithoutPansionsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutPansionsInput
    connect?: CommentWhereUniqueInput
  }

  export type ProvinceCreateNestedOneWithoutPansionsInput = {
    create?: XOR<ProvinceCreateWithoutPansionsInput, ProvinceUncheckedCreateWithoutPansionsInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutPansionsInput
    connect?: ProvinceWhereUniqueInput
  }

  export type PosInPansionCreateNestedManyWithoutPansionInput = {
    create?: XOR<PosInPansionCreateWithoutPansionInput, PosInPansionUncheckedCreateWithoutPansionInput> | PosInPansionCreateWithoutPansionInput[] | PosInPansionUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: PosInPansionCreateOrConnectWithoutPansionInput | PosInPansionCreateOrConnectWithoutPansionInput[]
    createMany?: PosInPansionCreateManyPansionInputEnvelope
    connect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutPansionInput = {
    create?: XOR<RoomCreateWithoutPansionInput, RoomUncheckedCreateWithoutPansionInput> | RoomCreateWithoutPansionInput[] | RoomUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPansionInput | RoomCreateOrConnectWithoutPansionInput[]
    createMany?: RoomCreateManyPansionInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutPansionInput = {
    create?: XOR<UserCreateWithoutPansionInput, UserUncheckedCreateWithoutPansionInput> | UserCreateWithoutPansionInput[] | UserUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPansionInput | UserCreateOrConnectWithoutPansionInput[]
    createMany?: UserCreateManyPansionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ponsionOptionsCreateNestedManyWithoutPansionInput = {
    create?: XOR<ponsionOptionsCreateWithoutPansionInput, ponsionOptionsUncheckedCreateWithoutPansionInput> | ponsionOptionsCreateWithoutPansionInput[] | ponsionOptionsUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: ponsionOptionsCreateOrConnectWithoutPansionInput | ponsionOptionsCreateOrConnectWithoutPansionInput[]
    createMany?: ponsionOptionsCreateManyPansionInputEnvelope
    connect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
  }

  export type PosInPansionUncheckedCreateNestedManyWithoutPansionInput = {
    create?: XOR<PosInPansionCreateWithoutPansionInput, PosInPansionUncheckedCreateWithoutPansionInput> | PosInPansionCreateWithoutPansionInput[] | PosInPansionUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: PosInPansionCreateOrConnectWithoutPansionInput | PosInPansionCreateOrConnectWithoutPansionInput[]
    createMany?: PosInPansionCreateManyPansionInputEnvelope
    connect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutPansionInput = {
    create?: XOR<RoomCreateWithoutPansionInput, RoomUncheckedCreateWithoutPansionInput> | RoomCreateWithoutPansionInput[] | RoomUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPansionInput | RoomCreateOrConnectWithoutPansionInput[]
    createMany?: RoomCreateManyPansionInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPansionInput = {
    create?: XOR<UserCreateWithoutPansionInput, UserUncheckedCreateWithoutPansionInput> | UserCreateWithoutPansionInput[] | UserUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPansionInput | UserCreateOrConnectWithoutPansionInput[]
    createMany?: UserCreateManyPansionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ponsionOptionsUncheckedCreateNestedManyWithoutPansionInput = {
    create?: XOR<ponsionOptionsCreateWithoutPansionInput, ponsionOptionsUncheckedCreateWithoutPansionInput> | ponsionOptionsCreateWithoutPansionInput[] | ponsionOptionsUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: ponsionOptionsCreateOrConnectWithoutPansionInput | ponsionOptionsCreateOrConnectWithoutPansionInput[]
    createMany?: ponsionOptionsCreateManyPansionInputEnvelope
    connect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumContractFieldUpdateOperationsInput = {
    set?: $Enums.Contract
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPansionTypeFieldUpdateOperationsInput = {
    set?: $Enums.PansionType
  }

  export type CityUpdateOneRequiredWithoutPansionsNestedInput = {
    create?: XOR<CityCreateWithoutPansionsInput, CityUncheckedCreateWithoutPansionsInput>
    connectOrCreate?: CityCreateOrConnectWithoutPansionsInput
    upsert?: CityUpsertWithoutPansionsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutPansionsInput, CityUpdateWithoutPansionsInput>, CityUncheckedUpdateWithoutPansionsInput>
  }

  export type CommentUpdateOneWithoutPansionsNestedInput = {
    create?: XOR<CommentCreateWithoutPansionsInput, CommentUncheckedCreateWithoutPansionsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutPansionsInput
    upsert?: CommentUpsertWithoutPansionsInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutPansionsInput, CommentUpdateWithoutPansionsInput>, CommentUncheckedUpdateWithoutPansionsInput>
  }

  export type ProvinceUpdateOneRequiredWithoutPansionsNestedInput = {
    create?: XOR<ProvinceCreateWithoutPansionsInput, ProvinceUncheckedCreateWithoutPansionsInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutPansionsInput
    upsert?: ProvinceUpsertWithoutPansionsInput
    connect?: ProvinceWhereUniqueInput
    update?: XOR<XOR<ProvinceUpdateToOneWithWhereWithoutPansionsInput, ProvinceUpdateWithoutPansionsInput>, ProvinceUncheckedUpdateWithoutPansionsInput>
  }

  export type PosInPansionUpdateManyWithoutPansionNestedInput = {
    create?: XOR<PosInPansionCreateWithoutPansionInput, PosInPansionUncheckedCreateWithoutPansionInput> | PosInPansionCreateWithoutPansionInput[] | PosInPansionUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: PosInPansionCreateOrConnectWithoutPansionInput | PosInPansionCreateOrConnectWithoutPansionInput[]
    upsert?: PosInPansionUpsertWithWhereUniqueWithoutPansionInput | PosInPansionUpsertWithWhereUniqueWithoutPansionInput[]
    createMany?: PosInPansionCreateManyPansionInputEnvelope
    set?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    disconnect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    delete?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    connect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    update?: PosInPansionUpdateWithWhereUniqueWithoutPansionInput | PosInPansionUpdateWithWhereUniqueWithoutPansionInput[]
    updateMany?: PosInPansionUpdateManyWithWhereWithoutPansionInput | PosInPansionUpdateManyWithWhereWithoutPansionInput[]
    deleteMany?: PosInPansionScalarWhereInput | PosInPansionScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutPansionNestedInput = {
    create?: XOR<RoomCreateWithoutPansionInput, RoomUncheckedCreateWithoutPansionInput> | RoomCreateWithoutPansionInput[] | RoomUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPansionInput | RoomCreateOrConnectWithoutPansionInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPansionInput | RoomUpsertWithWhereUniqueWithoutPansionInput[]
    createMany?: RoomCreateManyPansionInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPansionInput | RoomUpdateWithWhereUniqueWithoutPansionInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPansionInput | RoomUpdateManyWithWhereWithoutPansionInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type UserUpdateManyWithoutPansionNestedInput = {
    create?: XOR<UserCreateWithoutPansionInput, UserUncheckedCreateWithoutPansionInput> | UserCreateWithoutPansionInput[] | UserUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPansionInput | UserCreateOrConnectWithoutPansionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPansionInput | UserUpsertWithWhereUniqueWithoutPansionInput[]
    createMany?: UserCreateManyPansionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPansionInput | UserUpdateWithWhereUniqueWithoutPansionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPansionInput | UserUpdateManyWithWhereWithoutPansionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ponsionOptionsUpdateManyWithoutPansionNestedInput = {
    create?: XOR<ponsionOptionsCreateWithoutPansionInput, ponsionOptionsUncheckedCreateWithoutPansionInput> | ponsionOptionsCreateWithoutPansionInput[] | ponsionOptionsUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: ponsionOptionsCreateOrConnectWithoutPansionInput | ponsionOptionsCreateOrConnectWithoutPansionInput[]
    upsert?: ponsionOptionsUpsertWithWhereUniqueWithoutPansionInput | ponsionOptionsUpsertWithWhereUniqueWithoutPansionInput[]
    createMany?: ponsionOptionsCreateManyPansionInputEnvelope
    set?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    disconnect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    delete?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    connect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    update?: ponsionOptionsUpdateWithWhereUniqueWithoutPansionInput | ponsionOptionsUpdateWithWhereUniqueWithoutPansionInput[]
    updateMany?: ponsionOptionsUpdateManyWithWhereWithoutPansionInput | ponsionOptionsUpdateManyWithWhereWithoutPansionInput[]
    deleteMany?: ponsionOptionsScalarWhereInput | ponsionOptionsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PosInPansionUncheckedUpdateManyWithoutPansionNestedInput = {
    create?: XOR<PosInPansionCreateWithoutPansionInput, PosInPansionUncheckedCreateWithoutPansionInput> | PosInPansionCreateWithoutPansionInput[] | PosInPansionUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: PosInPansionCreateOrConnectWithoutPansionInput | PosInPansionCreateOrConnectWithoutPansionInput[]
    upsert?: PosInPansionUpsertWithWhereUniqueWithoutPansionInput | PosInPansionUpsertWithWhereUniqueWithoutPansionInput[]
    createMany?: PosInPansionCreateManyPansionInputEnvelope
    set?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    disconnect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    delete?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    connect?: PosInPansionWhereUniqueInput | PosInPansionWhereUniqueInput[]
    update?: PosInPansionUpdateWithWhereUniqueWithoutPansionInput | PosInPansionUpdateWithWhereUniqueWithoutPansionInput[]
    updateMany?: PosInPansionUpdateManyWithWhereWithoutPansionInput | PosInPansionUpdateManyWithWhereWithoutPansionInput[]
    deleteMany?: PosInPansionScalarWhereInput | PosInPansionScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutPansionNestedInput = {
    create?: XOR<RoomCreateWithoutPansionInput, RoomUncheckedCreateWithoutPansionInput> | RoomCreateWithoutPansionInput[] | RoomUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPansionInput | RoomCreateOrConnectWithoutPansionInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPansionInput | RoomUpsertWithWhereUniqueWithoutPansionInput[]
    createMany?: RoomCreateManyPansionInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPansionInput | RoomUpdateWithWhereUniqueWithoutPansionInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPansionInput | RoomUpdateManyWithWhereWithoutPansionInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPansionNestedInput = {
    create?: XOR<UserCreateWithoutPansionInput, UserUncheckedCreateWithoutPansionInput> | UserCreateWithoutPansionInput[] | UserUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPansionInput | UserCreateOrConnectWithoutPansionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPansionInput | UserUpsertWithWhereUniqueWithoutPansionInput[]
    createMany?: UserCreateManyPansionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPansionInput | UserUpdateWithWhereUniqueWithoutPansionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPansionInput | UserUpdateManyWithWhereWithoutPansionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ponsionOptionsUncheckedUpdateManyWithoutPansionNestedInput = {
    create?: XOR<ponsionOptionsCreateWithoutPansionInput, ponsionOptionsUncheckedCreateWithoutPansionInput> | ponsionOptionsCreateWithoutPansionInput[] | ponsionOptionsUncheckedCreateWithoutPansionInput[]
    connectOrCreate?: ponsionOptionsCreateOrConnectWithoutPansionInput | ponsionOptionsCreateOrConnectWithoutPansionInput[]
    upsert?: ponsionOptionsUpsertWithWhereUniqueWithoutPansionInput | ponsionOptionsUpsertWithWhereUniqueWithoutPansionInput[]
    createMany?: ponsionOptionsCreateManyPansionInputEnvelope
    set?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    disconnect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    delete?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    connect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    update?: ponsionOptionsUpdateWithWhereUniqueWithoutPansionInput | ponsionOptionsUpdateWithWhereUniqueWithoutPansionInput[]
    updateMany?: ponsionOptionsUpdateManyWithWhereWithoutPansionInput | ponsionOptionsUpdateManyWithWhereWithoutPansionInput[]
    deleteMany?: ponsionOptionsScalarWhereInput | ponsionOptionsScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutRoomsInput = {
    create?: XOR<CategoryCreateWithoutRoomsInput, CategoryUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutRoomsInput
    connect?: CategoryWhereUniqueInput
  }

  export type PansionCreateNestedOneWithoutRoomsInput = {
    create?: XOR<PansionCreateWithoutRoomsInput, PansionUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: PansionCreateOrConnectWithoutRoomsInput
    connect?: PansionWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<CategoryCreateWithoutRoomsInput, CategoryUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutRoomsInput
    upsert?: CategoryUpsertWithoutRoomsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutRoomsInput, CategoryUpdateWithoutRoomsInput>, CategoryUncheckedUpdateWithoutRoomsInput>
  }

  export type PansionUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<PansionCreateWithoutRoomsInput, PansionUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: PansionCreateOrConnectWithoutRoomsInput
    upsert?: PansionUpsertWithoutRoomsInput
    connect?: PansionWhereUniqueInput
    update?: XOR<XOR<PansionUpdateToOneWithWhereWithoutRoomsInput, PansionUpdateWithoutRoomsInput>, PansionUncheckedUpdateWithoutRoomsInput>
  }

  export type CityCreateNestedManyWithoutProvinceInput = {
    create?: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput> | CityCreateWithoutProvinceInput[] | CityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CityCreateOrConnectWithoutProvinceInput | CityCreateOrConnectWithoutProvinceInput[]
    createMany?: CityCreateManyProvinceInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type PansionCreateNestedManyWithoutProvinceInput = {
    create?: XOR<PansionCreateWithoutProvinceInput, PansionUncheckedCreateWithoutProvinceInput> | PansionCreateWithoutProvinceInput[] | PansionUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: PansionCreateOrConnectWithoutProvinceInput | PansionCreateOrConnectWithoutProvinceInput[]
    createMany?: PansionCreateManyProvinceInputEnvelope
    connect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutProvinceInput = {
    create?: XOR<UserCreateWithoutProvinceInput, UserUncheckedCreateWithoutProvinceInput> | UserCreateWithoutProvinceInput[] | UserUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProvinceInput | UserCreateOrConnectWithoutProvinceInput[]
    createMany?: UserCreateManyProvinceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CityUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput> | CityCreateWithoutProvinceInput[] | CityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CityCreateOrConnectWithoutProvinceInput | CityCreateOrConnectWithoutProvinceInput[]
    createMany?: CityCreateManyProvinceInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type PansionUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<PansionCreateWithoutProvinceInput, PansionUncheckedCreateWithoutProvinceInput> | PansionCreateWithoutProvinceInput[] | PansionUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: PansionCreateOrConnectWithoutProvinceInput | PansionCreateOrConnectWithoutProvinceInput[]
    createMany?: PansionCreateManyProvinceInputEnvelope
    connect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<UserCreateWithoutProvinceInput, UserUncheckedCreateWithoutProvinceInput> | UserCreateWithoutProvinceInput[] | UserUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProvinceInput | UserCreateOrConnectWithoutProvinceInput[]
    createMany?: UserCreateManyProvinceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CityUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput> | CityCreateWithoutProvinceInput[] | CityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CityCreateOrConnectWithoutProvinceInput | CityCreateOrConnectWithoutProvinceInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutProvinceInput | CityUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: CityCreateManyProvinceInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutProvinceInput | CityUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: CityUpdateManyWithWhereWithoutProvinceInput | CityUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type PansionUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<PansionCreateWithoutProvinceInput, PansionUncheckedCreateWithoutProvinceInput> | PansionCreateWithoutProvinceInput[] | PansionUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: PansionCreateOrConnectWithoutProvinceInput | PansionCreateOrConnectWithoutProvinceInput[]
    upsert?: PansionUpsertWithWhereUniqueWithoutProvinceInput | PansionUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: PansionCreateManyProvinceInputEnvelope
    set?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    disconnect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    delete?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    connect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    update?: PansionUpdateWithWhereUniqueWithoutProvinceInput | PansionUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: PansionUpdateManyWithWhereWithoutProvinceInput | PansionUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: PansionScalarWhereInput | PansionScalarWhereInput[]
  }

  export type UserUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<UserCreateWithoutProvinceInput, UserUncheckedCreateWithoutProvinceInput> | UserCreateWithoutProvinceInput[] | UserUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProvinceInput | UserCreateOrConnectWithoutProvinceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProvinceInput | UserUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: UserCreateManyProvinceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProvinceInput | UserUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProvinceInput | UserUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CityUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput> | CityCreateWithoutProvinceInput[] | CityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CityCreateOrConnectWithoutProvinceInput | CityCreateOrConnectWithoutProvinceInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutProvinceInput | CityUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: CityCreateManyProvinceInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutProvinceInput | CityUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: CityUpdateManyWithWhereWithoutProvinceInput | CityUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type PansionUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<PansionCreateWithoutProvinceInput, PansionUncheckedCreateWithoutProvinceInput> | PansionCreateWithoutProvinceInput[] | PansionUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: PansionCreateOrConnectWithoutProvinceInput | PansionCreateOrConnectWithoutProvinceInput[]
    upsert?: PansionUpsertWithWhereUniqueWithoutProvinceInput | PansionUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: PansionCreateManyProvinceInputEnvelope
    set?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    disconnect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    delete?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    connect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    update?: PansionUpdateWithWhereUniqueWithoutProvinceInput | PansionUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: PansionUpdateManyWithWhereWithoutProvinceInput | PansionUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: PansionScalarWhereInput | PansionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<UserCreateWithoutProvinceInput, UserUncheckedCreateWithoutProvinceInput> | UserCreateWithoutProvinceInput[] | UserUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProvinceInput | UserCreateOrConnectWithoutProvinceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProvinceInput | UserUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: UserCreateManyProvinceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProvinceInput | UserUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProvinceInput | UserUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProvinceCreateNestedOneWithoutCitiesInput = {
    create?: XOR<ProvinceCreateWithoutCitiesInput, ProvinceUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutCitiesInput
    connect?: ProvinceWhereUniqueInput
  }

  export type PansionCreateNestedManyWithoutCityInput = {
    create?: XOR<PansionCreateWithoutCityInput, PansionUncheckedCreateWithoutCityInput> | PansionCreateWithoutCityInput[] | PansionUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PansionCreateOrConnectWithoutCityInput | PansionCreateOrConnectWithoutCityInput[]
    createMany?: PansionCreateManyCityInputEnvelope
    connect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCityInput = {
    create?: XOR<UserCreateWithoutCityInput, UserUncheckedCreateWithoutCityInput> | UserCreateWithoutCityInput[] | UserUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCityInput | UserCreateOrConnectWithoutCityInput[]
    createMany?: UserCreateManyCityInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PansionUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<PansionCreateWithoutCityInput, PansionUncheckedCreateWithoutCityInput> | PansionCreateWithoutCityInput[] | PansionUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PansionCreateOrConnectWithoutCityInput | PansionCreateOrConnectWithoutCityInput[]
    createMany?: PansionCreateManyCityInputEnvelope
    connect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<UserCreateWithoutCityInput, UserUncheckedCreateWithoutCityInput> | UserCreateWithoutCityInput[] | UserUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCityInput | UserCreateOrConnectWithoutCityInput[]
    createMany?: UserCreateManyCityInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProvinceUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: XOR<ProvinceCreateWithoutCitiesInput, ProvinceUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutCitiesInput
    upsert?: ProvinceUpsertWithoutCitiesInput
    connect?: ProvinceWhereUniqueInput
    update?: XOR<XOR<ProvinceUpdateToOneWithWhereWithoutCitiesInput, ProvinceUpdateWithoutCitiesInput>, ProvinceUncheckedUpdateWithoutCitiesInput>
  }

  export type PansionUpdateManyWithoutCityNestedInput = {
    create?: XOR<PansionCreateWithoutCityInput, PansionUncheckedCreateWithoutCityInput> | PansionCreateWithoutCityInput[] | PansionUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PansionCreateOrConnectWithoutCityInput | PansionCreateOrConnectWithoutCityInput[]
    upsert?: PansionUpsertWithWhereUniqueWithoutCityInput | PansionUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: PansionCreateManyCityInputEnvelope
    set?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    disconnect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    delete?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    connect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    update?: PansionUpdateWithWhereUniqueWithoutCityInput | PansionUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: PansionUpdateManyWithWhereWithoutCityInput | PansionUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: PansionScalarWhereInput | PansionScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCityNestedInput = {
    create?: XOR<UserCreateWithoutCityInput, UserUncheckedCreateWithoutCityInput> | UserCreateWithoutCityInput[] | UserUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCityInput | UserCreateOrConnectWithoutCityInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCityInput | UserUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: UserCreateManyCityInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCityInput | UserUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCityInput | UserUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PansionUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<PansionCreateWithoutCityInput, PansionUncheckedCreateWithoutCityInput> | PansionCreateWithoutCityInput[] | PansionUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PansionCreateOrConnectWithoutCityInput | PansionCreateOrConnectWithoutCityInput[]
    upsert?: PansionUpsertWithWhereUniqueWithoutCityInput | PansionUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: PansionCreateManyCityInputEnvelope
    set?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    disconnect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    delete?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    connect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    update?: PansionUpdateWithWhereUniqueWithoutCityInput | PansionUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: PansionUpdateManyWithWhereWithoutCityInput | PansionUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: PansionScalarWhereInput | PansionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<UserCreateWithoutCityInput, UserUncheckedCreateWithoutCityInput> | UserCreateWithoutCityInput[] | UserUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCityInput | UserCreateOrConnectWithoutCityInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCityInput | UserUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: UserCreateManyCityInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCityInput | UserUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCityInput | UserUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPosInPansionInput = {
    create?: XOR<UserCreateWithoutPosInPansionInput, UserUncheckedCreateWithoutPosInPansionInput>
    connectOrCreate?: UserCreateOrConnectWithoutPosInPansionInput
    connect?: UserWhereUniqueInput
  }

  export type PansionCreateNestedOneWithoutPositionsInput = {
    create?: XOR<PansionCreateWithoutPositionsInput, PansionUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: PansionCreateOrConnectWithoutPositionsInput
    connect?: PansionWhereUniqueInput
  }

  export type PositionCreateNestedOneWithoutPosInPansionInput = {
    create?: XOR<PositionCreateWithoutPosInPansionInput, PositionUncheckedCreateWithoutPosInPansionInput>
    connectOrCreate?: PositionCreateOrConnectWithoutPosInPansionInput
    connect?: PositionWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPosInPansionNestedInput = {
    create?: XOR<UserCreateWithoutPosInPansionInput, UserUncheckedCreateWithoutPosInPansionInput>
    connectOrCreate?: UserCreateOrConnectWithoutPosInPansionInput
    upsert?: UserUpsertWithoutPosInPansionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPosInPansionInput, UserUpdateWithoutPosInPansionInput>, UserUncheckedUpdateWithoutPosInPansionInput>
  }

  export type PansionUpdateOneRequiredWithoutPositionsNestedInput = {
    create?: XOR<PansionCreateWithoutPositionsInput, PansionUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: PansionCreateOrConnectWithoutPositionsInput
    upsert?: PansionUpsertWithoutPositionsInput
    connect?: PansionWhereUniqueInput
    update?: XOR<XOR<PansionUpdateToOneWithWhereWithoutPositionsInput, PansionUpdateWithoutPositionsInput>, PansionUncheckedUpdateWithoutPositionsInput>
  }

  export type PositionUpdateOneRequiredWithoutPosInPansionNestedInput = {
    create?: XOR<PositionCreateWithoutPosInPansionInput, PositionUncheckedCreateWithoutPosInPansionInput>
    connectOrCreate?: PositionCreateOrConnectWithoutPosInPansionInput
    upsert?: PositionUpsertWithoutPosInPansionInput
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutPosInPansionInput, PositionUpdateWithoutPosInPansionInput>, PositionUncheckedUpdateWithoutPosInPansionInput>
  }

  export type PansionCreateNestedManyWithoutCommentInput = {
    create?: XOR<PansionCreateWithoutCommentInput, PansionUncheckedCreateWithoutCommentInput> | PansionCreateWithoutCommentInput[] | PansionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: PansionCreateOrConnectWithoutCommentInput | PansionCreateOrConnectWithoutCommentInput[]
    createMany?: PansionCreateManyCommentInputEnvelope
    connect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
  }

  export type PansionUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<PansionCreateWithoutCommentInput, PansionUncheckedCreateWithoutCommentInput> | PansionCreateWithoutCommentInput[] | PansionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: PansionCreateOrConnectWithoutCommentInput | PansionCreateOrConnectWithoutCommentInput[]
    createMany?: PansionCreateManyCommentInputEnvelope
    connect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
  }

  export type PansionUpdateManyWithoutCommentNestedInput = {
    create?: XOR<PansionCreateWithoutCommentInput, PansionUncheckedCreateWithoutCommentInput> | PansionCreateWithoutCommentInput[] | PansionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: PansionCreateOrConnectWithoutCommentInput | PansionCreateOrConnectWithoutCommentInput[]
    upsert?: PansionUpsertWithWhereUniqueWithoutCommentInput | PansionUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: PansionCreateManyCommentInputEnvelope
    set?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    disconnect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    delete?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    connect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    update?: PansionUpdateWithWhereUniqueWithoutCommentInput | PansionUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: PansionUpdateManyWithWhereWithoutCommentInput | PansionUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: PansionScalarWhereInput | PansionScalarWhereInput[]
  }

  export type PansionUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<PansionCreateWithoutCommentInput, PansionUncheckedCreateWithoutCommentInput> | PansionCreateWithoutCommentInput[] | PansionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: PansionCreateOrConnectWithoutCommentInput | PansionCreateOrConnectWithoutCommentInput[]
    upsert?: PansionUpsertWithWhereUniqueWithoutCommentInput | PansionUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: PansionCreateManyCommentInputEnvelope
    set?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    disconnect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    delete?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    connect?: PansionWhereUniqueInput | PansionWhereUniqueInput[]
    update?: PansionUpdateWithWhereUniqueWithoutCommentInput | PansionUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: PansionUpdateManyWithWhereWithoutCommentInput | PansionUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: PansionScalarWhereInput | PansionScalarWhereInput[]
  }

  export type ponsionOptionsCreateNestedManyWithoutOptionsInput = {
    create?: XOR<ponsionOptionsCreateWithoutOptionsInput, ponsionOptionsUncheckedCreateWithoutOptionsInput> | ponsionOptionsCreateWithoutOptionsInput[] | ponsionOptionsUncheckedCreateWithoutOptionsInput[]
    connectOrCreate?: ponsionOptionsCreateOrConnectWithoutOptionsInput | ponsionOptionsCreateOrConnectWithoutOptionsInput[]
    createMany?: ponsionOptionsCreateManyOptionsInputEnvelope
    connect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
  }

  export type ponsionOptionsUncheckedCreateNestedManyWithoutOptionsInput = {
    create?: XOR<ponsionOptionsCreateWithoutOptionsInput, ponsionOptionsUncheckedCreateWithoutOptionsInput> | ponsionOptionsCreateWithoutOptionsInput[] | ponsionOptionsUncheckedCreateWithoutOptionsInput[]
    connectOrCreate?: ponsionOptionsCreateOrConnectWithoutOptionsInput | ponsionOptionsCreateOrConnectWithoutOptionsInput[]
    createMany?: ponsionOptionsCreateManyOptionsInputEnvelope
    connect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
  }

  export type ponsionOptionsUpdateManyWithoutOptionsNestedInput = {
    create?: XOR<ponsionOptionsCreateWithoutOptionsInput, ponsionOptionsUncheckedCreateWithoutOptionsInput> | ponsionOptionsCreateWithoutOptionsInput[] | ponsionOptionsUncheckedCreateWithoutOptionsInput[]
    connectOrCreate?: ponsionOptionsCreateOrConnectWithoutOptionsInput | ponsionOptionsCreateOrConnectWithoutOptionsInput[]
    upsert?: ponsionOptionsUpsertWithWhereUniqueWithoutOptionsInput | ponsionOptionsUpsertWithWhereUniqueWithoutOptionsInput[]
    createMany?: ponsionOptionsCreateManyOptionsInputEnvelope
    set?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    disconnect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    delete?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    connect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    update?: ponsionOptionsUpdateWithWhereUniqueWithoutOptionsInput | ponsionOptionsUpdateWithWhereUniqueWithoutOptionsInput[]
    updateMany?: ponsionOptionsUpdateManyWithWhereWithoutOptionsInput | ponsionOptionsUpdateManyWithWhereWithoutOptionsInput[]
    deleteMany?: ponsionOptionsScalarWhereInput | ponsionOptionsScalarWhereInput[]
  }

  export type ponsionOptionsUncheckedUpdateManyWithoutOptionsNestedInput = {
    create?: XOR<ponsionOptionsCreateWithoutOptionsInput, ponsionOptionsUncheckedCreateWithoutOptionsInput> | ponsionOptionsCreateWithoutOptionsInput[] | ponsionOptionsUncheckedCreateWithoutOptionsInput[]
    connectOrCreate?: ponsionOptionsCreateOrConnectWithoutOptionsInput | ponsionOptionsCreateOrConnectWithoutOptionsInput[]
    upsert?: ponsionOptionsUpsertWithWhereUniqueWithoutOptionsInput | ponsionOptionsUpsertWithWhereUniqueWithoutOptionsInput[]
    createMany?: ponsionOptionsCreateManyOptionsInputEnvelope
    set?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    disconnect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    delete?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    connect?: ponsionOptionsWhereUniqueInput | ponsionOptionsWhereUniqueInput[]
    update?: ponsionOptionsUpdateWithWhereUniqueWithoutOptionsInput | ponsionOptionsUpdateWithWhereUniqueWithoutOptionsInput[]
    updateMany?: ponsionOptionsUpdateManyWithWhereWithoutOptionsInput | ponsionOptionsUpdateManyWithWhereWithoutOptionsInput[]
    deleteMany?: ponsionOptionsScalarWhereInput | ponsionOptionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPonsionOptionsInput = {
    create?: XOR<UserCreateWithoutPonsionOptionsInput, UserUncheckedCreateWithoutPonsionOptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPonsionOptionsInput
    connect?: UserWhereUniqueInput
  }

  export type OptionsCreateNestedOneWithoutPonsionOptionsInput = {
    create?: XOR<OptionsCreateWithoutPonsionOptionsInput, OptionsUncheckedCreateWithoutPonsionOptionsInput>
    connectOrCreate?: OptionsCreateOrConnectWithoutPonsionOptionsInput
    connect?: OptionsWhereUniqueInput
  }

  export type PansionCreateNestedOneWithoutPonsionOptionsInput = {
    create?: XOR<PansionCreateWithoutPonsionOptionsInput, PansionUncheckedCreateWithoutPonsionOptionsInput>
    connectOrCreate?: PansionCreateOrConnectWithoutPonsionOptionsInput
    connect?: PansionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPonsionOptionsNestedInput = {
    create?: XOR<UserCreateWithoutPonsionOptionsInput, UserUncheckedCreateWithoutPonsionOptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPonsionOptionsInput
    upsert?: UserUpsertWithoutPonsionOptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPonsionOptionsInput, UserUpdateWithoutPonsionOptionsInput>, UserUncheckedUpdateWithoutPonsionOptionsInput>
  }

  export type OptionsUpdateOneRequiredWithoutPonsionOptionsNestedInput = {
    create?: XOR<OptionsCreateWithoutPonsionOptionsInput, OptionsUncheckedCreateWithoutPonsionOptionsInput>
    connectOrCreate?: OptionsCreateOrConnectWithoutPonsionOptionsInput
    upsert?: OptionsUpsertWithoutPonsionOptionsInput
    connect?: OptionsWhereUniqueInput
    update?: XOR<XOR<OptionsUpdateToOneWithWhereWithoutPonsionOptionsInput, OptionsUpdateWithoutPonsionOptionsInput>, OptionsUncheckedUpdateWithoutPonsionOptionsInput>
  }

  export type PansionUpdateOneRequiredWithoutPonsionOptionsNestedInput = {
    create?: XOR<PansionCreateWithoutPonsionOptionsInput, PansionUncheckedCreateWithoutPonsionOptionsInput>
    connectOrCreate?: PansionCreateOrConnectWithoutPonsionOptionsInput
    upsert?: PansionUpsertWithoutPonsionOptionsInput
    connect?: PansionWhereUniqueInput
    update?: XOR<XOR<PansionUpdateToOneWithWhereWithoutPonsionOptionsInput, PansionUpdateWithoutPonsionOptionsInput>, PansionUncheckedUpdateWithoutPonsionOptionsInput>
  }

  export type RoomCreateNestedManyWithoutCategoryInput = {
    create?: XOR<RoomCreateWithoutCategoryInput, RoomUncheckedCreateWithoutCategoryInput> | RoomCreateWithoutCategoryInput[] | RoomUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCategoryInput | RoomCreateOrConnectWithoutCategoryInput[]
    createMany?: RoomCreateManyCategoryInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<RoomCreateWithoutCategoryInput, RoomUncheckedCreateWithoutCategoryInput> | RoomCreateWithoutCategoryInput[] | RoomUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCategoryInput | RoomCreateOrConnectWithoutCategoryInput[]
    createMany?: RoomCreateManyCategoryInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<RoomCreateWithoutCategoryInput, RoomUncheckedCreateWithoutCategoryInput> | RoomCreateWithoutCategoryInput[] | RoomUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCategoryInput | RoomCreateOrConnectWithoutCategoryInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCategoryInput | RoomUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: RoomCreateManyCategoryInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCategoryInput | RoomUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCategoryInput | RoomUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<RoomCreateWithoutCategoryInput, RoomUncheckedCreateWithoutCategoryInput> | RoomCreateWithoutCategoryInput[] | RoomUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCategoryInput | RoomCreateOrConnectWithoutCategoryInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCategoryInput | RoomUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: RoomCreateManyCategoryInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCategoryInput | RoomUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCategoryInput | RoomUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumContractFilter<$PrismaModel = never> = {
    equals?: $Enums.Contract | EnumContractFieldRefInput<$PrismaModel>
    in?: $Enums.Contract[] | ListEnumContractFieldRefInput<$PrismaModel>
    notIn?: $Enums.Contract[] | ListEnumContractFieldRefInput<$PrismaModel>
    not?: NestedEnumContractFilter<$PrismaModel> | $Enums.Contract
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPansionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PansionType | EnumPansionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PansionType[] | ListEnumPansionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PansionType[] | ListEnumPansionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPansionTypeFilter<$PrismaModel> | $Enums.PansionType
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumContractWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Contract | EnumContractFieldRefInput<$PrismaModel>
    in?: $Enums.Contract[] | ListEnumContractFieldRefInput<$PrismaModel>
    notIn?: $Enums.Contract[] | ListEnumContractFieldRefInput<$PrismaModel>
    not?: NestedEnumContractWithAggregatesFilter<$PrismaModel> | $Enums.Contract
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractFilter<$PrismaModel>
    _max?: NestedEnumContractFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumPansionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PansionType | EnumPansionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PansionType[] | ListEnumPansionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PansionType[] | ListEnumPansionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPansionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PansionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPansionTypeFilter<$PrismaModel>
    _max?: NestedEnumPansionTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PosInPansionCreateWithoutAssignedInput = {
    assignedAt?: Date | string
    pansion: PansionCreateNestedOneWithoutPositionsInput
    position: PositionCreateNestedOneWithoutPosInPansionInput
  }

  export type PosInPansionUncheckedCreateWithoutAssignedInput = {
    positionId: number
    pansionId: number
    assignedAt?: Date | string
  }

  export type PosInPansionCreateOrConnectWithoutAssignedInput = {
    where: PosInPansionWhereUniqueInput
    create: XOR<PosInPansionCreateWithoutAssignedInput, PosInPansionUncheckedCreateWithoutAssignedInput>
  }

  export type PosInPansionCreateManyAssignedInputEnvelope = {
    data: PosInPansionCreateManyAssignedInput | PosInPansionCreateManyAssignedInput[]
    skipDuplicates?: boolean
  }

  export type CityCreateWithoutUsersInput = {
    name: string
    enName: string
    province: ProvinceCreateNestedOneWithoutCitiesInput
    pansions?: PansionCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    enName: string
    provinceId: number
    pansions?: PansionUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutUsersInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutUsersInput, CityUncheckedCreateWithoutUsersInput>
  }

  export type PansionCreateWithoutUsersInput = {
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    city: CityCreateNestedOneWithoutPansionsInput
    comment?: CommentCreateNestedOneWithoutPansionsInput
    province: ProvinceCreateNestedOneWithoutPansionsInput
    positions?: PosInPansionCreateNestedManyWithoutPansionInput
    rooms?: RoomCreateNestedManyWithoutPansionInput
    ponsionOptions?: ponsionOptionsCreateNestedManyWithoutPansionInput
  }

  export type PansionUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    commentId?: number | null
    provinceId: number
    cityId: number
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    positions?: PosInPansionUncheckedCreateNestedManyWithoutPansionInput
    rooms?: RoomUncheckedCreateNestedManyWithoutPansionInput
    ponsionOptions?: ponsionOptionsUncheckedCreateNestedManyWithoutPansionInput
  }

  export type PansionCreateOrConnectWithoutUsersInput = {
    where: PansionWhereUniqueInput
    create: XOR<PansionCreateWithoutUsersInput, PansionUncheckedCreateWithoutUsersInput>
  }

  export type PositionCreateWithoutUsersInput = {
    name: string
    level?: $Enums.Role
    PosInPansion?: PosInPansionCreateNestedManyWithoutPositionInput
  }

  export type PositionUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    level?: $Enums.Role
    PosInPansion?: PosInPansionUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionCreateOrConnectWithoutUsersInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
  }

  export type ProvinceCreateWithoutUsersInput = {
    name: string
    enName: string
    cities?: CityCreateNestedManyWithoutProvinceInput
    pansions?: PansionCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    enName: string
    cities?: CityUncheckedCreateNestedManyWithoutProvinceInput
    pansions?: PansionUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceCreateOrConnectWithoutUsersInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutUsersInput, ProvinceUncheckedCreateWithoutUsersInput>
  }

  export type ponsionOptionsCreateWithoutAssignedInput = {
    assignedAt?: Date | string
    options: OptionsCreateNestedOneWithoutPonsionOptionsInput
    pansion: PansionCreateNestedOneWithoutPonsionOptionsInput
  }

  export type ponsionOptionsUncheckedCreateWithoutAssignedInput = {
    pansionId: number
    optionId: number
    assignedAt?: Date | string
  }

  export type ponsionOptionsCreateOrConnectWithoutAssignedInput = {
    where: ponsionOptionsWhereUniqueInput
    create: XOR<ponsionOptionsCreateWithoutAssignedInput, ponsionOptionsUncheckedCreateWithoutAssignedInput>
  }

  export type ponsionOptionsCreateManyAssignedInputEnvelope = {
    data: ponsionOptionsCreateManyAssignedInput | ponsionOptionsCreateManyAssignedInput[]
    skipDuplicates?: boolean
  }

  export type PosInPansionUpsertWithWhereUniqueWithoutAssignedInput = {
    where: PosInPansionWhereUniqueInput
    update: XOR<PosInPansionUpdateWithoutAssignedInput, PosInPansionUncheckedUpdateWithoutAssignedInput>
    create: XOR<PosInPansionCreateWithoutAssignedInput, PosInPansionUncheckedCreateWithoutAssignedInput>
  }

  export type PosInPansionUpdateWithWhereUniqueWithoutAssignedInput = {
    where: PosInPansionWhereUniqueInput
    data: XOR<PosInPansionUpdateWithoutAssignedInput, PosInPansionUncheckedUpdateWithoutAssignedInput>
  }

  export type PosInPansionUpdateManyWithWhereWithoutAssignedInput = {
    where: PosInPansionScalarWhereInput
    data: XOR<PosInPansionUpdateManyMutationInput, PosInPansionUncheckedUpdateManyWithoutAssignedInput>
  }

  export type PosInPansionScalarWhereInput = {
    AND?: PosInPansionScalarWhereInput | PosInPansionScalarWhereInput[]
    OR?: PosInPansionScalarWhereInput[]
    NOT?: PosInPansionScalarWhereInput | PosInPansionScalarWhereInput[]
    positionId?: IntFilter<"PosInPansion"> | number
    pansionId?: IntFilter<"PosInPansion"> | number
    assignedAt?: DateTimeFilter<"PosInPansion"> | Date | string
    assignedBy?: IntFilter<"PosInPansion"> | number
  }

  export type CityUpsertWithoutUsersInput = {
    update: XOR<CityUpdateWithoutUsersInput, CityUncheckedUpdateWithoutUsersInput>
    create: XOR<CityCreateWithoutUsersInput, CityUncheckedCreateWithoutUsersInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutUsersInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutUsersInput, CityUncheckedUpdateWithoutUsersInput>
  }

  export type CityUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    province?: ProvinceUpdateOneRequiredWithoutCitiesNestedInput
    pansions?: PansionUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    pansions?: PansionUncheckedUpdateManyWithoutCityNestedInput
  }

  export type PansionUpsertWithoutUsersInput = {
    update: XOR<PansionUpdateWithoutUsersInput, PansionUncheckedUpdateWithoutUsersInput>
    create: XOR<PansionCreateWithoutUsersInput, PansionUncheckedCreateWithoutUsersInput>
    where?: PansionWhereInput
  }

  export type PansionUpdateToOneWithWhereWithoutUsersInput = {
    where?: PansionWhereInput
    data: XOR<PansionUpdateWithoutUsersInput, PansionUncheckedUpdateWithoutUsersInput>
  }

  export type PansionUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    city?: CityUpdateOneRequiredWithoutPansionsNestedInput
    comment?: CommentUpdateOneWithoutPansionsNestedInput
    province?: ProvinceUpdateOneRequiredWithoutPansionsNestedInput
    positions?: PosInPansionUpdateManyWithoutPansionNestedInput
    rooms?: RoomUpdateManyWithoutPansionNestedInput
    ponsionOptions?: ponsionOptionsUpdateManyWithoutPansionNestedInput
  }

  export type PansionUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    positions?: PosInPansionUncheckedUpdateManyWithoutPansionNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutPansionNestedInput
    ponsionOptions?: ponsionOptionsUncheckedUpdateManyWithoutPansionNestedInput
  }

  export type PositionUpsertWithoutUsersInput = {
    update: XOR<PositionUpdateWithoutUsersInput, PositionUncheckedUpdateWithoutUsersInput>
    create: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
    where?: PositionWhereInput
  }

  export type PositionUpdateToOneWithWhereWithoutUsersInput = {
    where?: PositionWhereInput
    data: XOR<PositionUpdateWithoutUsersInput, PositionUncheckedUpdateWithoutUsersInput>
  }

  export type PositionUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    PosInPansion?: PosInPansionUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    PosInPansion?: PosInPansionUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type ProvinceUpsertWithoutUsersInput = {
    update: XOR<ProvinceUpdateWithoutUsersInput, ProvinceUncheckedUpdateWithoutUsersInput>
    create: XOR<ProvinceCreateWithoutUsersInput, ProvinceUncheckedCreateWithoutUsersInput>
    where?: ProvinceWhereInput
  }

  export type ProvinceUpdateToOneWithWhereWithoutUsersInput = {
    where?: ProvinceWhereInput
    data: XOR<ProvinceUpdateWithoutUsersInput, ProvinceUncheckedUpdateWithoutUsersInput>
  }

  export type ProvinceUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    cities?: CityUpdateManyWithoutProvinceNestedInput
    pansions?: PansionUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    cities?: CityUncheckedUpdateManyWithoutProvinceNestedInput
    pansions?: PansionUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type ponsionOptionsUpsertWithWhereUniqueWithoutAssignedInput = {
    where: ponsionOptionsWhereUniqueInput
    update: XOR<ponsionOptionsUpdateWithoutAssignedInput, ponsionOptionsUncheckedUpdateWithoutAssignedInput>
    create: XOR<ponsionOptionsCreateWithoutAssignedInput, ponsionOptionsUncheckedCreateWithoutAssignedInput>
  }

  export type ponsionOptionsUpdateWithWhereUniqueWithoutAssignedInput = {
    where: ponsionOptionsWhereUniqueInput
    data: XOR<ponsionOptionsUpdateWithoutAssignedInput, ponsionOptionsUncheckedUpdateWithoutAssignedInput>
  }

  export type ponsionOptionsUpdateManyWithWhereWithoutAssignedInput = {
    where: ponsionOptionsScalarWhereInput
    data: XOR<ponsionOptionsUpdateManyMutationInput, ponsionOptionsUncheckedUpdateManyWithoutAssignedInput>
  }

  export type ponsionOptionsScalarWhereInput = {
    AND?: ponsionOptionsScalarWhereInput | ponsionOptionsScalarWhereInput[]
    OR?: ponsionOptionsScalarWhereInput[]
    NOT?: ponsionOptionsScalarWhereInput | ponsionOptionsScalarWhereInput[]
    pansionId?: IntFilter<"ponsionOptions"> | number
    optionId?: IntFilter<"ponsionOptions"> | number
    assignedAt?: DateTimeFilter<"ponsionOptions"> | Date | string
    assignedBy?: IntFilter<"ponsionOptions"> | number
  }

  export type PosInPansionCreateWithoutPositionInput = {
    assignedAt?: Date | string
    assigned: UserCreateNestedOneWithoutPosInPansionInput
    pansion: PansionCreateNestedOneWithoutPositionsInput
  }

  export type PosInPansionUncheckedCreateWithoutPositionInput = {
    pansionId: number
    assignedAt?: Date | string
    assignedBy: number
  }

  export type PosInPansionCreateOrConnectWithoutPositionInput = {
    where: PosInPansionWhereUniqueInput
    create: XOR<PosInPansionCreateWithoutPositionInput, PosInPansionUncheckedCreateWithoutPositionInput>
  }

  export type PosInPansionCreateManyPositionInputEnvelope = {
    data: PosInPansionCreateManyPositionInput | PosInPansionCreateManyPositionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPositionInput = {
    firstName: string
    lastName: string
    phone: string
    email: string
    PosInPansion?: PosInPansionCreateNestedManyWithoutAssignedInput
    city: CityCreateNestedOneWithoutUsersInput
    pansion: PansionCreateNestedOneWithoutUsersInput
    province: ProvinceCreateNestedOneWithoutUsersInput
    ponsionOptions?: ponsionOptionsCreateNestedManyWithoutAssignedInput
  }

  export type UserUncheckedCreateWithoutPositionInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    email: string
    pansionId: number
    provinceId: number
    cityId: number
    PosInPansion?: PosInPansionUncheckedCreateNestedManyWithoutAssignedInput
    ponsionOptions?: ponsionOptionsUncheckedCreateNestedManyWithoutAssignedInput
  }

  export type UserCreateOrConnectWithoutPositionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput>
  }

  export type UserCreateManyPositionInputEnvelope = {
    data: UserCreateManyPositionInput | UserCreateManyPositionInput[]
    skipDuplicates?: boolean
  }

  export type PosInPansionUpsertWithWhereUniqueWithoutPositionInput = {
    where: PosInPansionWhereUniqueInput
    update: XOR<PosInPansionUpdateWithoutPositionInput, PosInPansionUncheckedUpdateWithoutPositionInput>
    create: XOR<PosInPansionCreateWithoutPositionInput, PosInPansionUncheckedCreateWithoutPositionInput>
  }

  export type PosInPansionUpdateWithWhereUniqueWithoutPositionInput = {
    where: PosInPansionWhereUniqueInput
    data: XOR<PosInPansionUpdateWithoutPositionInput, PosInPansionUncheckedUpdateWithoutPositionInput>
  }

  export type PosInPansionUpdateManyWithWhereWithoutPositionInput = {
    where: PosInPansionScalarWhereInput
    data: XOR<PosInPansionUpdateManyMutationInput, PosInPansionUncheckedUpdateManyWithoutPositionInput>
  }

  export type UserUpsertWithWhereUniqueWithoutPositionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPositionInput, UserUncheckedUpdateWithoutPositionInput>
    create: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPositionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPositionInput, UserUncheckedUpdateWithoutPositionInput>
  }

  export type UserUpdateManyWithWhereWithoutPositionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPositionInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    positionId?: IntFilter<"User"> | number
    pansionId?: IntFilter<"User"> | number
    provinceId?: IntFilter<"User"> | number
    cityId?: IntFilter<"User"> | number
  }

  export type CityCreateWithoutPansionsInput = {
    name: string
    enName: string
    province: ProvinceCreateNestedOneWithoutCitiesInput
    users?: UserCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutPansionsInput = {
    id?: number
    name: string
    enName: string
    provinceId: number
    users?: UserUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutPansionsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutPansionsInput, CityUncheckedCreateWithoutPansionsInput>
  }

  export type CommentCreateWithoutPansionsInput = {
    title: string
    description: string
  }

  export type CommentUncheckedCreateWithoutPansionsInput = {
    id?: number
    title: string
    description: string
  }

  export type CommentCreateOrConnectWithoutPansionsInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPansionsInput, CommentUncheckedCreateWithoutPansionsInput>
  }

  export type ProvinceCreateWithoutPansionsInput = {
    name: string
    enName: string
    cities?: CityCreateNestedManyWithoutProvinceInput
    users?: UserCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateWithoutPansionsInput = {
    id?: number
    name: string
    enName: string
    cities?: CityUncheckedCreateNestedManyWithoutProvinceInput
    users?: UserUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceCreateOrConnectWithoutPansionsInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutPansionsInput, ProvinceUncheckedCreateWithoutPansionsInput>
  }

  export type PosInPansionCreateWithoutPansionInput = {
    assignedAt?: Date | string
    assigned: UserCreateNestedOneWithoutPosInPansionInput
    position: PositionCreateNestedOneWithoutPosInPansionInput
  }

  export type PosInPansionUncheckedCreateWithoutPansionInput = {
    positionId: number
    assignedAt?: Date | string
    assignedBy: number
  }

  export type PosInPansionCreateOrConnectWithoutPansionInput = {
    where: PosInPansionWhereUniqueInput
    create: XOR<PosInPansionCreateWithoutPansionInput, PosInPansionUncheckedCreateWithoutPansionInput>
  }

  export type PosInPansionCreateManyPansionInputEnvelope = {
    data: PosInPansionCreateManyPansionInput | PosInPansionCreateManyPansionInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutPansionInput = {
    numberRoom: number
    numberOfBeds: number
    rent: number
    category: CategoryCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutPansionInput = {
    id?: number
    numberRoom: number
    numberOfBeds: number
    rent: number
    categoryId: number
  }

  export type RoomCreateOrConnectWithoutPansionInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPansionInput, RoomUncheckedCreateWithoutPansionInput>
  }

  export type RoomCreateManyPansionInputEnvelope = {
    data: RoomCreateManyPansionInput | RoomCreateManyPansionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPansionInput = {
    firstName: string
    lastName: string
    phone: string
    email: string
    PosInPansion?: PosInPansionCreateNestedManyWithoutAssignedInput
    city: CityCreateNestedOneWithoutUsersInput
    position: PositionCreateNestedOneWithoutUsersInput
    province: ProvinceCreateNestedOneWithoutUsersInput
    ponsionOptions?: ponsionOptionsCreateNestedManyWithoutAssignedInput
  }

  export type UserUncheckedCreateWithoutPansionInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    email: string
    positionId: number
    provinceId: number
    cityId: number
    PosInPansion?: PosInPansionUncheckedCreateNestedManyWithoutAssignedInput
    ponsionOptions?: ponsionOptionsUncheckedCreateNestedManyWithoutAssignedInput
  }

  export type UserCreateOrConnectWithoutPansionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPansionInput, UserUncheckedCreateWithoutPansionInput>
  }

  export type UserCreateManyPansionInputEnvelope = {
    data: UserCreateManyPansionInput | UserCreateManyPansionInput[]
    skipDuplicates?: boolean
  }

  export type ponsionOptionsCreateWithoutPansionInput = {
    assignedAt?: Date | string
    assigned: UserCreateNestedOneWithoutPonsionOptionsInput
    options: OptionsCreateNestedOneWithoutPonsionOptionsInput
  }

  export type ponsionOptionsUncheckedCreateWithoutPansionInput = {
    optionId: number
    assignedAt?: Date | string
    assignedBy: number
  }

  export type ponsionOptionsCreateOrConnectWithoutPansionInput = {
    where: ponsionOptionsWhereUniqueInput
    create: XOR<ponsionOptionsCreateWithoutPansionInput, ponsionOptionsUncheckedCreateWithoutPansionInput>
  }

  export type ponsionOptionsCreateManyPansionInputEnvelope = {
    data: ponsionOptionsCreateManyPansionInput | ponsionOptionsCreateManyPansionInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithoutPansionsInput = {
    update: XOR<CityUpdateWithoutPansionsInput, CityUncheckedUpdateWithoutPansionsInput>
    create: XOR<CityCreateWithoutPansionsInput, CityUncheckedCreateWithoutPansionsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutPansionsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutPansionsInput, CityUncheckedUpdateWithoutPansionsInput>
  }

  export type CityUpdateWithoutPansionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    province?: ProvinceUpdateOneRequiredWithoutCitiesNestedInput
    users?: UserUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutPansionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CommentUpsertWithoutPansionsInput = {
    update: XOR<CommentUpdateWithoutPansionsInput, CommentUncheckedUpdateWithoutPansionsInput>
    create: XOR<CommentCreateWithoutPansionsInput, CommentUncheckedCreateWithoutPansionsInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutPansionsInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutPansionsInput, CommentUncheckedUpdateWithoutPansionsInput>
  }

  export type CommentUpdateWithoutPansionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateWithoutPansionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinceUpsertWithoutPansionsInput = {
    update: XOR<ProvinceUpdateWithoutPansionsInput, ProvinceUncheckedUpdateWithoutPansionsInput>
    create: XOR<ProvinceCreateWithoutPansionsInput, ProvinceUncheckedCreateWithoutPansionsInput>
    where?: ProvinceWhereInput
  }

  export type ProvinceUpdateToOneWithWhereWithoutPansionsInput = {
    where?: ProvinceWhereInput
    data: XOR<ProvinceUpdateWithoutPansionsInput, ProvinceUncheckedUpdateWithoutPansionsInput>
  }

  export type ProvinceUpdateWithoutPansionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    cities?: CityUpdateManyWithoutProvinceNestedInput
    users?: UserUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateWithoutPansionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    cities?: CityUncheckedUpdateManyWithoutProvinceNestedInput
    users?: UserUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type PosInPansionUpsertWithWhereUniqueWithoutPansionInput = {
    where: PosInPansionWhereUniqueInput
    update: XOR<PosInPansionUpdateWithoutPansionInput, PosInPansionUncheckedUpdateWithoutPansionInput>
    create: XOR<PosInPansionCreateWithoutPansionInput, PosInPansionUncheckedCreateWithoutPansionInput>
  }

  export type PosInPansionUpdateWithWhereUniqueWithoutPansionInput = {
    where: PosInPansionWhereUniqueInput
    data: XOR<PosInPansionUpdateWithoutPansionInput, PosInPansionUncheckedUpdateWithoutPansionInput>
  }

  export type PosInPansionUpdateManyWithWhereWithoutPansionInput = {
    where: PosInPansionScalarWhereInput
    data: XOR<PosInPansionUpdateManyMutationInput, PosInPansionUncheckedUpdateManyWithoutPansionInput>
  }

  export type RoomUpsertWithWhereUniqueWithoutPansionInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutPansionInput, RoomUncheckedUpdateWithoutPansionInput>
    create: XOR<RoomCreateWithoutPansionInput, RoomUncheckedCreateWithoutPansionInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutPansionInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutPansionInput, RoomUncheckedUpdateWithoutPansionInput>
  }

  export type RoomUpdateManyWithWhereWithoutPansionInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutPansionInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: IntFilter<"Room"> | number
    numberRoom?: IntFilter<"Room"> | number
    numberOfBeds?: IntFilter<"Room"> | number
    rent?: FloatFilter<"Room"> | number
    pansionId?: IntFilter<"Room"> | number
    categoryId?: IntFilter<"Room"> | number
  }

  export type UserUpsertWithWhereUniqueWithoutPansionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPansionInput, UserUncheckedUpdateWithoutPansionInput>
    create: XOR<UserCreateWithoutPansionInput, UserUncheckedCreateWithoutPansionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPansionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPansionInput, UserUncheckedUpdateWithoutPansionInput>
  }

  export type UserUpdateManyWithWhereWithoutPansionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPansionInput>
  }

  export type ponsionOptionsUpsertWithWhereUniqueWithoutPansionInput = {
    where: ponsionOptionsWhereUniqueInput
    update: XOR<ponsionOptionsUpdateWithoutPansionInput, ponsionOptionsUncheckedUpdateWithoutPansionInput>
    create: XOR<ponsionOptionsCreateWithoutPansionInput, ponsionOptionsUncheckedCreateWithoutPansionInput>
  }

  export type ponsionOptionsUpdateWithWhereUniqueWithoutPansionInput = {
    where: ponsionOptionsWhereUniqueInput
    data: XOR<ponsionOptionsUpdateWithoutPansionInput, ponsionOptionsUncheckedUpdateWithoutPansionInput>
  }

  export type ponsionOptionsUpdateManyWithWhereWithoutPansionInput = {
    where: ponsionOptionsScalarWhereInput
    data: XOR<ponsionOptionsUpdateManyMutationInput, ponsionOptionsUncheckedUpdateManyWithoutPansionInput>
  }

  export type CategoryCreateWithoutRoomsInput = {
    name: string
    minAdvancePay: number
    maxAdvancePay: number
    minRent: number
    maxRent: number
  }

  export type CategoryUncheckedCreateWithoutRoomsInput = {
    id?: number
    name: string
    minAdvancePay: number
    maxAdvancePay: number
    minRent: number
    maxRent: number
  }

  export type CategoryCreateOrConnectWithoutRoomsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutRoomsInput, CategoryUncheckedCreateWithoutRoomsInput>
  }

  export type PansionCreateWithoutRoomsInput = {
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    city: CityCreateNestedOneWithoutPansionsInput
    comment?: CommentCreateNestedOneWithoutPansionsInput
    province: ProvinceCreateNestedOneWithoutPansionsInput
    positions?: PosInPansionCreateNestedManyWithoutPansionInput
    users?: UserCreateNestedManyWithoutPansionInput
    ponsionOptions?: ponsionOptionsCreateNestedManyWithoutPansionInput
  }

  export type PansionUncheckedCreateWithoutRoomsInput = {
    id?: number
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    commentId?: number | null
    provinceId: number
    cityId: number
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    positions?: PosInPansionUncheckedCreateNestedManyWithoutPansionInput
    users?: UserUncheckedCreateNestedManyWithoutPansionInput
    ponsionOptions?: ponsionOptionsUncheckedCreateNestedManyWithoutPansionInput
  }

  export type PansionCreateOrConnectWithoutRoomsInput = {
    where: PansionWhereUniqueInput
    create: XOR<PansionCreateWithoutRoomsInput, PansionUncheckedCreateWithoutRoomsInput>
  }

  export type CategoryUpsertWithoutRoomsInput = {
    update: XOR<CategoryUpdateWithoutRoomsInput, CategoryUncheckedUpdateWithoutRoomsInput>
    create: XOR<CategoryCreateWithoutRoomsInput, CategoryUncheckedCreateWithoutRoomsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutRoomsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutRoomsInput, CategoryUncheckedUpdateWithoutRoomsInput>
  }

  export type CategoryUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    minAdvancePay?: FloatFieldUpdateOperationsInput | number
    maxAdvancePay?: FloatFieldUpdateOperationsInput | number
    minRent?: FloatFieldUpdateOperationsInput | number
    maxRent?: FloatFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minAdvancePay?: FloatFieldUpdateOperationsInput | number
    maxAdvancePay?: FloatFieldUpdateOperationsInput | number
    minRent?: FloatFieldUpdateOperationsInput | number
    maxRent?: FloatFieldUpdateOperationsInput | number
  }

  export type PansionUpsertWithoutRoomsInput = {
    update: XOR<PansionUpdateWithoutRoomsInput, PansionUncheckedUpdateWithoutRoomsInput>
    create: XOR<PansionCreateWithoutRoomsInput, PansionUncheckedCreateWithoutRoomsInput>
    where?: PansionWhereInput
  }

  export type PansionUpdateToOneWithWhereWithoutRoomsInput = {
    where?: PansionWhereInput
    data: XOR<PansionUpdateWithoutRoomsInput, PansionUncheckedUpdateWithoutRoomsInput>
  }

  export type PansionUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    city?: CityUpdateOneRequiredWithoutPansionsNestedInput
    comment?: CommentUpdateOneWithoutPansionsNestedInput
    province?: ProvinceUpdateOneRequiredWithoutPansionsNestedInput
    positions?: PosInPansionUpdateManyWithoutPansionNestedInput
    users?: UserUpdateManyWithoutPansionNestedInput
    ponsionOptions?: ponsionOptionsUpdateManyWithoutPansionNestedInput
  }

  export type PansionUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    positions?: PosInPansionUncheckedUpdateManyWithoutPansionNestedInput
    users?: UserUncheckedUpdateManyWithoutPansionNestedInput
    ponsionOptions?: ponsionOptionsUncheckedUpdateManyWithoutPansionNestedInput
  }

  export type CityCreateWithoutProvinceInput = {
    name: string
    enName: string
    pansions?: PansionCreateNestedManyWithoutCityInput
    users?: UserCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutProvinceInput = {
    id?: number
    name: string
    enName: string
    pansions?: PansionUncheckedCreateNestedManyWithoutCityInput
    users?: UserUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutProvinceInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput>
  }

  export type CityCreateManyProvinceInputEnvelope = {
    data: CityCreateManyProvinceInput | CityCreateManyProvinceInput[]
    skipDuplicates?: boolean
  }

  export type PansionCreateWithoutProvinceInput = {
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    city: CityCreateNestedOneWithoutPansionsInput
    comment?: CommentCreateNestedOneWithoutPansionsInput
    positions?: PosInPansionCreateNestedManyWithoutPansionInput
    rooms?: RoomCreateNestedManyWithoutPansionInput
    users?: UserCreateNestedManyWithoutPansionInput
    ponsionOptions?: ponsionOptionsCreateNestedManyWithoutPansionInput
  }

  export type PansionUncheckedCreateWithoutProvinceInput = {
    id?: number
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    commentId?: number | null
    cityId: number
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    positions?: PosInPansionUncheckedCreateNestedManyWithoutPansionInput
    rooms?: RoomUncheckedCreateNestedManyWithoutPansionInput
    users?: UserUncheckedCreateNestedManyWithoutPansionInput
    ponsionOptions?: ponsionOptionsUncheckedCreateNestedManyWithoutPansionInput
  }

  export type PansionCreateOrConnectWithoutProvinceInput = {
    where: PansionWhereUniqueInput
    create: XOR<PansionCreateWithoutProvinceInput, PansionUncheckedCreateWithoutProvinceInput>
  }

  export type PansionCreateManyProvinceInputEnvelope = {
    data: PansionCreateManyProvinceInput | PansionCreateManyProvinceInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProvinceInput = {
    firstName: string
    lastName: string
    phone: string
    email: string
    PosInPansion?: PosInPansionCreateNestedManyWithoutAssignedInput
    city: CityCreateNestedOneWithoutUsersInput
    pansion: PansionCreateNestedOneWithoutUsersInput
    position: PositionCreateNestedOneWithoutUsersInput
    ponsionOptions?: ponsionOptionsCreateNestedManyWithoutAssignedInput
  }

  export type UserUncheckedCreateWithoutProvinceInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    email: string
    positionId: number
    pansionId: number
    cityId: number
    PosInPansion?: PosInPansionUncheckedCreateNestedManyWithoutAssignedInput
    ponsionOptions?: ponsionOptionsUncheckedCreateNestedManyWithoutAssignedInput
  }

  export type UserCreateOrConnectWithoutProvinceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProvinceInput, UserUncheckedCreateWithoutProvinceInput>
  }

  export type UserCreateManyProvinceInputEnvelope = {
    data: UserCreateManyProvinceInput | UserCreateManyProvinceInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithWhereUniqueWithoutProvinceInput = {
    where: CityWhereUniqueInput
    update: XOR<CityUpdateWithoutProvinceInput, CityUncheckedUpdateWithoutProvinceInput>
    create: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput>
  }

  export type CityUpdateWithWhereUniqueWithoutProvinceInput = {
    where: CityWhereUniqueInput
    data: XOR<CityUpdateWithoutProvinceInput, CityUncheckedUpdateWithoutProvinceInput>
  }

  export type CityUpdateManyWithWhereWithoutProvinceInput = {
    where: CityScalarWhereInput
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyWithoutProvinceInput>
  }

  export type CityScalarWhereInput = {
    AND?: CityScalarWhereInput | CityScalarWhereInput[]
    OR?: CityScalarWhereInput[]
    NOT?: CityScalarWhereInput | CityScalarWhereInput[]
    id?: IntFilter<"City"> | number
    name?: StringFilter<"City"> | string
    enName?: StringFilter<"City"> | string
    provinceId?: IntFilter<"City"> | number
  }

  export type PansionUpsertWithWhereUniqueWithoutProvinceInput = {
    where: PansionWhereUniqueInput
    update: XOR<PansionUpdateWithoutProvinceInput, PansionUncheckedUpdateWithoutProvinceInput>
    create: XOR<PansionCreateWithoutProvinceInput, PansionUncheckedCreateWithoutProvinceInput>
  }

  export type PansionUpdateWithWhereUniqueWithoutProvinceInput = {
    where: PansionWhereUniqueInput
    data: XOR<PansionUpdateWithoutProvinceInput, PansionUncheckedUpdateWithoutProvinceInput>
  }

  export type PansionUpdateManyWithWhereWithoutProvinceInput = {
    where: PansionScalarWhereInput
    data: XOR<PansionUpdateManyMutationInput, PansionUncheckedUpdateManyWithoutProvinceInput>
  }

  export type PansionScalarWhereInput = {
    AND?: PansionScalarWhereInput | PansionScalarWhereInput[]
    OR?: PansionScalarWhereInput[]
    NOT?: PansionScalarWhereInput | PansionScalarWhereInput[]
    id?: IntFilter<"Pansion"> | number
    name?: StringFilter<"Pansion"> | string
    phone?: StringFilter<"Pansion"> | string
    address?: StringFilter<"Pansion"> | string
    codeParvane?: StringFilter<"Pansion"> | string
    Capacity?: IntFilter<"Pansion"> | number
    advancePayment?: FloatNullableFilter<"Pansion"> | number | null
    chargeMony?: FloatFilter<"Pansion"> | number
    active?: BoolFilter<"Pansion"> | boolean
    typeOfContract?: EnumContractFilter<"Pansion"> | $Enums.Contract
    imageUrl?: StringNullableFilter<"Pansion"> | string | null
    description?: StringFilter<"Pansion"> | string
    commentId?: IntNullableFilter<"Pansion"> | number | null
    provinceId?: IntFilter<"Pansion"> | number
    cityId?: IntFilter<"Pansion"> | number
    typeOfPansion?: EnumPansionTypeFilter<"Pansion"> | $Enums.PansionType
    numberOfRoom?: IntFilter<"Pansion"> | number
    numberOfBed?: IntFilter<"Pansion"> | number
  }

  export type UserUpsertWithWhereUniqueWithoutProvinceInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProvinceInput, UserUncheckedUpdateWithoutProvinceInput>
    create: XOR<UserCreateWithoutProvinceInput, UserUncheckedCreateWithoutProvinceInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProvinceInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProvinceInput, UserUncheckedUpdateWithoutProvinceInput>
  }

  export type UserUpdateManyWithWhereWithoutProvinceInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutProvinceInput>
  }

  export type ProvinceCreateWithoutCitiesInput = {
    name: string
    enName: string
    pansions?: PansionCreateNestedManyWithoutProvinceInput
    users?: UserCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateWithoutCitiesInput = {
    id?: number
    name: string
    enName: string
    pansions?: PansionUncheckedCreateNestedManyWithoutProvinceInput
    users?: UserUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceCreateOrConnectWithoutCitiesInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutCitiesInput, ProvinceUncheckedCreateWithoutCitiesInput>
  }

  export type PansionCreateWithoutCityInput = {
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    comment?: CommentCreateNestedOneWithoutPansionsInput
    province: ProvinceCreateNestedOneWithoutPansionsInput
    positions?: PosInPansionCreateNestedManyWithoutPansionInput
    rooms?: RoomCreateNestedManyWithoutPansionInput
    users?: UserCreateNestedManyWithoutPansionInput
    ponsionOptions?: ponsionOptionsCreateNestedManyWithoutPansionInput
  }

  export type PansionUncheckedCreateWithoutCityInput = {
    id?: number
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    commentId?: number | null
    provinceId: number
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    positions?: PosInPansionUncheckedCreateNestedManyWithoutPansionInput
    rooms?: RoomUncheckedCreateNestedManyWithoutPansionInput
    users?: UserUncheckedCreateNestedManyWithoutPansionInput
    ponsionOptions?: ponsionOptionsUncheckedCreateNestedManyWithoutPansionInput
  }

  export type PansionCreateOrConnectWithoutCityInput = {
    where: PansionWhereUniqueInput
    create: XOR<PansionCreateWithoutCityInput, PansionUncheckedCreateWithoutCityInput>
  }

  export type PansionCreateManyCityInputEnvelope = {
    data: PansionCreateManyCityInput | PansionCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCityInput = {
    firstName: string
    lastName: string
    phone: string
    email: string
    PosInPansion?: PosInPansionCreateNestedManyWithoutAssignedInput
    pansion: PansionCreateNestedOneWithoutUsersInput
    position: PositionCreateNestedOneWithoutUsersInput
    province: ProvinceCreateNestedOneWithoutUsersInput
    ponsionOptions?: ponsionOptionsCreateNestedManyWithoutAssignedInput
  }

  export type UserUncheckedCreateWithoutCityInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    email: string
    positionId: number
    pansionId: number
    provinceId: number
    PosInPansion?: PosInPansionUncheckedCreateNestedManyWithoutAssignedInput
    ponsionOptions?: ponsionOptionsUncheckedCreateNestedManyWithoutAssignedInput
  }

  export type UserCreateOrConnectWithoutCityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCityInput, UserUncheckedCreateWithoutCityInput>
  }

  export type UserCreateManyCityInputEnvelope = {
    data: UserCreateManyCityInput | UserCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type ProvinceUpsertWithoutCitiesInput = {
    update: XOR<ProvinceUpdateWithoutCitiesInput, ProvinceUncheckedUpdateWithoutCitiesInput>
    create: XOR<ProvinceCreateWithoutCitiesInput, ProvinceUncheckedCreateWithoutCitiesInput>
    where?: ProvinceWhereInput
  }

  export type ProvinceUpdateToOneWithWhereWithoutCitiesInput = {
    where?: ProvinceWhereInput
    data: XOR<ProvinceUpdateWithoutCitiesInput, ProvinceUncheckedUpdateWithoutCitiesInput>
  }

  export type ProvinceUpdateWithoutCitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    pansions?: PansionUpdateManyWithoutProvinceNestedInput
    users?: UserUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateWithoutCitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    pansions?: PansionUncheckedUpdateManyWithoutProvinceNestedInput
    users?: UserUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type PansionUpsertWithWhereUniqueWithoutCityInput = {
    where: PansionWhereUniqueInput
    update: XOR<PansionUpdateWithoutCityInput, PansionUncheckedUpdateWithoutCityInput>
    create: XOR<PansionCreateWithoutCityInput, PansionUncheckedCreateWithoutCityInput>
  }

  export type PansionUpdateWithWhereUniqueWithoutCityInput = {
    where: PansionWhereUniqueInput
    data: XOR<PansionUpdateWithoutCityInput, PansionUncheckedUpdateWithoutCityInput>
  }

  export type PansionUpdateManyWithWhereWithoutCityInput = {
    where: PansionScalarWhereInput
    data: XOR<PansionUpdateManyMutationInput, PansionUncheckedUpdateManyWithoutCityInput>
  }

  export type UserUpsertWithWhereUniqueWithoutCityInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCityInput, UserUncheckedUpdateWithoutCityInput>
    create: XOR<UserCreateWithoutCityInput, UserUncheckedCreateWithoutCityInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCityInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCityInput, UserUncheckedUpdateWithoutCityInput>
  }

  export type UserUpdateManyWithWhereWithoutCityInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCityInput>
  }

  export type UserCreateWithoutPosInPansionInput = {
    firstName: string
    lastName: string
    phone: string
    email: string
    city: CityCreateNestedOneWithoutUsersInput
    pansion: PansionCreateNestedOneWithoutUsersInput
    position: PositionCreateNestedOneWithoutUsersInput
    province: ProvinceCreateNestedOneWithoutUsersInput
    ponsionOptions?: ponsionOptionsCreateNestedManyWithoutAssignedInput
  }

  export type UserUncheckedCreateWithoutPosInPansionInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    email: string
    positionId: number
    pansionId: number
    provinceId: number
    cityId: number
    ponsionOptions?: ponsionOptionsUncheckedCreateNestedManyWithoutAssignedInput
  }

  export type UserCreateOrConnectWithoutPosInPansionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPosInPansionInput, UserUncheckedCreateWithoutPosInPansionInput>
  }

  export type PansionCreateWithoutPositionsInput = {
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    city: CityCreateNestedOneWithoutPansionsInput
    comment?: CommentCreateNestedOneWithoutPansionsInput
    province: ProvinceCreateNestedOneWithoutPansionsInput
    rooms?: RoomCreateNestedManyWithoutPansionInput
    users?: UserCreateNestedManyWithoutPansionInput
    ponsionOptions?: ponsionOptionsCreateNestedManyWithoutPansionInput
  }

  export type PansionUncheckedCreateWithoutPositionsInput = {
    id?: number
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    commentId?: number | null
    provinceId: number
    cityId: number
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    rooms?: RoomUncheckedCreateNestedManyWithoutPansionInput
    users?: UserUncheckedCreateNestedManyWithoutPansionInput
    ponsionOptions?: ponsionOptionsUncheckedCreateNestedManyWithoutPansionInput
  }

  export type PansionCreateOrConnectWithoutPositionsInput = {
    where: PansionWhereUniqueInput
    create: XOR<PansionCreateWithoutPositionsInput, PansionUncheckedCreateWithoutPositionsInput>
  }

  export type PositionCreateWithoutPosInPansionInput = {
    name: string
    level?: $Enums.Role
    users?: UserCreateNestedManyWithoutPositionInput
  }

  export type PositionUncheckedCreateWithoutPosInPansionInput = {
    id?: number
    name: string
    level?: $Enums.Role
    users?: UserUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionCreateOrConnectWithoutPosInPansionInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutPosInPansionInput, PositionUncheckedCreateWithoutPosInPansionInput>
  }

  export type UserUpsertWithoutPosInPansionInput = {
    update: XOR<UserUpdateWithoutPosInPansionInput, UserUncheckedUpdateWithoutPosInPansionInput>
    create: XOR<UserCreateWithoutPosInPansionInput, UserUncheckedCreateWithoutPosInPansionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPosInPansionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPosInPansionInput, UserUncheckedUpdateWithoutPosInPansionInput>
  }

  export type UserUpdateWithoutPosInPansionInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutUsersNestedInput
    pansion?: PansionUpdateOneRequiredWithoutUsersNestedInput
    position?: PositionUpdateOneRequiredWithoutUsersNestedInput
    province?: ProvinceUpdateOneRequiredWithoutUsersNestedInput
    ponsionOptions?: ponsionOptionsUpdateManyWithoutAssignedNestedInput
  }

  export type UserUncheckedUpdateWithoutPosInPansionInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    ponsionOptions?: ponsionOptionsUncheckedUpdateManyWithoutAssignedNestedInput
  }

  export type PansionUpsertWithoutPositionsInput = {
    update: XOR<PansionUpdateWithoutPositionsInput, PansionUncheckedUpdateWithoutPositionsInput>
    create: XOR<PansionCreateWithoutPositionsInput, PansionUncheckedCreateWithoutPositionsInput>
    where?: PansionWhereInput
  }

  export type PansionUpdateToOneWithWhereWithoutPositionsInput = {
    where?: PansionWhereInput
    data: XOR<PansionUpdateWithoutPositionsInput, PansionUncheckedUpdateWithoutPositionsInput>
  }

  export type PansionUpdateWithoutPositionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    city?: CityUpdateOneRequiredWithoutPansionsNestedInput
    comment?: CommentUpdateOneWithoutPansionsNestedInput
    province?: ProvinceUpdateOneRequiredWithoutPansionsNestedInput
    rooms?: RoomUpdateManyWithoutPansionNestedInput
    users?: UserUpdateManyWithoutPansionNestedInput
    ponsionOptions?: ponsionOptionsUpdateManyWithoutPansionNestedInput
  }

  export type PansionUncheckedUpdateWithoutPositionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    rooms?: RoomUncheckedUpdateManyWithoutPansionNestedInput
    users?: UserUncheckedUpdateManyWithoutPansionNestedInput
    ponsionOptions?: ponsionOptionsUncheckedUpdateManyWithoutPansionNestedInput
  }

  export type PositionUpsertWithoutPosInPansionInput = {
    update: XOR<PositionUpdateWithoutPosInPansionInput, PositionUncheckedUpdateWithoutPosInPansionInput>
    create: XOR<PositionCreateWithoutPosInPansionInput, PositionUncheckedCreateWithoutPosInPansionInput>
    where?: PositionWhereInput
  }

  export type PositionUpdateToOneWithWhereWithoutPosInPansionInput = {
    where?: PositionWhereInput
    data: XOR<PositionUpdateWithoutPosInPansionInput, PositionUncheckedUpdateWithoutPosInPansionInput>
  }

  export type PositionUpdateWithoutPosInPansionInput = {
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    users?: UserUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateWithoutPosInPansionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    users?: UserUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PansionCreateWithoutCommentInput = {
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    city: CityCreateNestedOneWithoutPansionsInput
    province: ProvinceCreateNestedOneWithoutPansionsInput
    positions?: PosInPansionCreateNestedManyWithoutPansionInput
    rooms?: RoomCreateNestedManyWithoutPansionInput
    users?: UserCreateNestedManyWithoutPansionInput
    ponsionOptions?: ponsionOptionsCreateNestedManyWithoutPansionInput
  }

  export type PansionUncheckedCreateWithoutCommentInput = {
    id?: number
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    provinceId: number
    cityId: number
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    positions?: PosInPansionUncheckedCreateNestedManyWithoutPansionInput
    rooms?: RoomUncheckedCreateNestedManyWithoutPansionInput
    users?: UserUncheckedCreateNestedManyWithoutPansionInput
    ponsionOptions?: ponsionOptionsUncheckedCreateNestedManyWithoutPansionInput
  }

  export type PansionCreateOrConnectWithoutCommentInput = {
    where: PansionWhereUniqueInput
    create: XOR<PansionCreateWithoutCommentInput, PansionUncheckedCreateWithoutCommentInput>
  }

  export type PansionCreateManyCommentInputEnvelope = {
    data: PansionCreateManyCommentInput | PansionCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type PansionUpsertWithWhereUniqueWithoutCommentInput = {
    where: PansionWhereUniqueInput
    update: XOR<PansionUpdateWithoutCommentInput, PansionUncheckedUpdateWithoutCommentInput>
    create: XOR<PansionCreateWithoutCommentInput, PansionUncheckedCreateWithoutCommentInput>
  }

  export type PansionUpdateWithWhereUniqueWithoutCommentInput = {
    where: PansionWhereUniqueInput
    data: XOR<PansionUpdateWithoutCommentInput, PansionUncheckedUpdateWithoutCommentInput>
  }

  export type PansionUpdateManyWithWhereWithoutCommentInput = {
    where: PansionScalarWhereInput
    data: XOR<PansionUpdateManyMutationInput, PansionUncheckedUpdateManyWithoutCommentInput>
  }

  export type ponsionOptionsCreateWithoutOptionsInput = {
    assignedAt?: Date | string
    assigned: UserCreateNestedOneWithoutPonsionOptionsInput
    pansion: PansionCreateNestedOneWithoutPonsionOptionsInput
  }

  export type ponsionOptionsUncheckedCreateWithoutOptionsInput = {
    pansionId: number
    assignedAt?: Date | string
    assignedBy: number
  }

  export type ponsionOptionsCreateOrConnectWithoutOptionsInput = {
    where: ponsionOptionsWhereUniqueInput
    create: XOR<ponsionOptionsCreateWithoutOptionsInput, ponsionOptionsUncheckedCreateWithoutOptionsInput>
  }

  export type ponsionOptionsCreateManyOptionsInputEnvelope = {
    data: ponsionOptionsCreateManyOptionsInput | ponsionOptionsCreateManyOptionsInput[]
    skipDuplicates?: boolean
  }

  export type ponsionOptionsUpsertWithWhereUniqueWithoutOptionsInput = {
    where: ponsionOptionsWhereUniqueInput
    update: XOR<ponsionOptionsUpdateWithoutOptionsInput, ponsionOptionsUncheckedUpdateWithoutOptionsInput>
    create: XOR<ponsionOptionsCreateWithoutOptionsInput, ponsionOptionsUncheckedCreateWithoutOptionsInput>
  }

  export type ponsionOptionsUpdateWithWhereUniqueWithoutOptionsInput = {
    where: ponsionOptionsWhereUniqueInput
    data: XOR<ponsionOptionsUpdateWithoutOptionsInput, ponsionOptionsUncheckedUpdateWithoutOptionsInput>
  }

  export type ponsionOptionsUpdateManyWithWhereWithoutOptionsInput = {
    where: ponsionOptionsScalarWhereInput
    data: XOR<ponsionOptionsUpdateManyMutationInput, ponsionOptionsUncheckedUpdateManyWithoutOptionsInput>
  }

  export type UserCreateWithoutPonsionOptionsInput = {
    firstName: string
    lastName: string
    phone: string
    email: string
    PosInPansion?: PosInPansionCreateNestedManyWithoutAssignedInput
    city: CityCreateNestedOneWithoutUsersInput
    pansion: PansionCreateNestedOneWithoutUsersInput
    position: PositionCreateNestedOneWithoutUsersInput
    province: ProvinceCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPonsionOptionsInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    email: string
    positionId: number
    pansionId: number
    provinceId: number
    cityId: number
    PosInPansion?: PosInPansionUncheckedCreateNestedManyWithoutAssignedInput
  }

  export type UserCreateOrConnectWithoutPonsionOptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPonsionOptionsInput, UserUncheckedCreateWithoutPonsionOptionsInput>
  }

  export type OptionsCreateWithoutPonsionOptionsInput = {
    name: string
  }

  export type OptionsUncheckedCreateWithoutPonsionOptionsInput = {
    id?: number
    name: string
  }

  export type OptionsCreateOrConnectWithoutPonsionOptionsInput = {
    where: OptionsWhereUniqueInput
    create: XOR<OptionsCreateWithoutPonsionOptionsInput, OptionsUncheckedCreateWithoutPonsionOptionsInput>
  }

  export type PansionCreateWithoutPonsionOptionsInput = {
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    city: CityCreateNestedOneWithoutPansionsInput
    comment?: CommentCreateNestedOneWithoutPansionsInput
    province: ProvinceCreateNestedOneWithoutPansionsInput
    positions?: PosInPansionCreateNestedManyWithoutPansionInput
    rooms?: RoomCreateNestedManyWithoutPansionInput
    users?: UserCreateNestedManyWithoutPansionInput
  }

  export type PansionUncheckedCreateWithoutPonsionOptionsInput = {
    id?: number
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    commentId?: number | null
    provinceId: number
    cityId: number
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
    positions?: PosInPansionUncheckedCreateNestedManyWithoutPansionInput
    rooms?: RoomUncheckedCreateNestedManyWithoutPansionInput
    users?: UserUncheckedCreateNestedManyWithoutPansionInput
  }

  export type PansionCreateOrConnectWithoutPonsionOptionsInput = {
    where: PansionWhereUniqueInput
    create: XOR<PansionCreateWithoutPonsionOptionsInput, PansionUncheckedCreateWithoutPonsionOptionsInput>
  }

  export type UserUpsertWithoutPonsionOptionsInput = {
    update: XOR<UserUpdateWithoutPonsionOptionsInput, UserUncheckedUpdateWithoutPonsionOptionsInput>
    create: XOR<UserCreateWithoutPonsionOptionsInput, UserUncheckedCreateWithoutPonsionOptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPonsionOptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPonsionOptionsInput, UserUncheckedUpdateWithoutPonsionOptionsInput>
  }

  export type UserUpdateWithoutPonsionOptionsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    PosInPansion?: PosInPansionUpdateManyWithoutAssignedNestedInput
    city?: CityUpdateOneRequiredWithoutUsersNestedInput
    pansion?: PansionUpdateOneRequiredWithoutUsersNestedInput
    position?: PositionUpdateOneRequiredWithoutUsersNestedInput
    province?: ProvinceUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPonsionOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    PosInPansion?: PosInPansionUncheckedUpdateManyWithoutAssignedNestedInput
  }

  export type OptionsUpsertWithoutPonsionOptionsInput = {
    update: XOR<OptionsUpdateWithoutPonsionOptionsInput, OptionsUncheckedUpdateWithoutPonsionOptionsInput>
    create: XOR<OptionsCreateWithoutPonsionOptionsInput, OptionsUncheckedCreateWithoutPonsionOptionsInput>
    where?: OptionsWhereInput
  }

  export type OptionsUpdateToOneWithWhereWithoutPonsionOptionsInput = {
    where?: OptionsWhereInput
    data: XOR<OptionsUpdateWithoutPonsionOptionsInput, OptionsUncheckedUpdateWithoutPonsionOptionsInput>
  }

  export type OptionsUpdateWithoutPonsionOptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OptionsUncheckedUpdateWithoutPonsionOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PansionUpsertWithoutPonsionOptionsInput = {
    update: XOR<PansionUpdateWithoutPonsionOptionsInput, PansionUncheckedUpdateWithoutPonsionOptionsInput>
    create: XOR<PansionCreateWithoutPonsionOptionsInput, PansionUncheckedCreateWithoutPonsionOptionsInput>
    where?: PansionWhereInput
  }

  export type PansionUpdateToOneWithWhereWithoutPonsionOptionsInput = {
    where?: PansionWhereInput
    data: XOR<PansionUpdateWithoutPonsionOptionsInput, PansionUncheckedUpdateWithoutPonsionOptionsInput>
  }

  export type PansionUpdateWithoutPonsionOptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    city?: CityUpdateOneRequiredWithoutPansionsNestedInput
    comment?: CommentUpdateOneWithoutPansionsNestedInput
    province?: ProvinceUpdateOneRequiredWithoutPansionsNestedInput
    positions?: PosInPansionUpdateManyWithoutPansionNestedInput
    rooms?: RoomUpdateManyWithoutPansionNestedInput
    users?: UserUpdateManyWithoutPansionNestedInput
  }

  export type PansionUncheckedUpdateWithoutPonsionOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    positions?: PosInPansionUncheckedUpdateManyWithoutPansionNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutPansionNestedInput
    users?: UserUncheckedUpdateManyWithoutPansionNestedInput
  }

  export type RoomCreateWithoutCategoryInput = {
    numberRoom: number
    numberOfBeds: number
    rent: number
    pansion: PansionCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutCategoryInput = {
    id?: number
    numberRoom: number
    numberOfBeds: number
    rent: number
    pansionId: number
  }

  export type RoomCreateOrConnectWithoutCategoryInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutCategoryInput, RoomUncheckedCreateWithoutCategoryInput>
  }

  export type RoomCreateManyCategoryInputEnvelope = {
    data: RoomCreateManyCategoryInput | RoomCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutCategoryInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutCategoryInput, RoomUncheckedUpdateWithoutCategoryInput>
    create: XOR<RoomCreateWithoutCategoryInput, RoomUncheckedCreateWithoutCategoryInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutCategoryInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutCategoryInput, RoomUncheckedUpdateWithoutCategoryInput>
  }

  export type RoomUpdateManyWithWhereWithoutCategoryInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PosInPansionCreateManyAssignedInput = {
    positionId: number
    pansionId: number
    assignedAt?: Date | string
  }

  export type ponsionOptionsCreateManyAssignedInput = {
    pansionId: number
    optionId: number
    assignedAt?: Date | string
  }

  export type PosInPansionUpdateWithoutAssignedInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pansion?: PansionUpdateOneRequiredWithoutPositionsNestedInput
    position?: PositionUpdateOneRequiredWithoutPosInPansionNestedInput
  }

  export type PosInPansionUncheckedUpdateWithoutAssignedInput = {
    positionId?: IntFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosInPansionUncheckedUpdateManyWithoutAssignedInput = {
    positionId?: IntFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ponsionOptionsUpdateWithoutAssignedInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionsUpdateOneRequiredWithoutPonsionOptionsNestedInput
    pansion?: PansionUpdateOneRequiredWithoutPonsionOptionsNestedInput
  }

  export type ponsionOptionsUncheckedUpdateWithoutAssignedInput = {
    pansionId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ponsionOptionsUncheckedUpdateManyWithoutAssignedInput = {
    pansionId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosInPansionCreateManyPositionInput = {
    pansionId: number
    assignedAt?: Date | string
    assignedBy: number
  }

  export type UserCreateManyPositionInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    email: string
    pansionId: number
    provinceId: number
    cityId: number
  }

  export type PosInPansionUpdateWithoutPositionInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned?: UserUpdateOneRequiredWithoutPosInPansionNestedInput
    pansion?: PansionUpdateOneRequiredWithoutPositionsNestedInput
  }

  export type PosInPansionUncheckedUpdateWithoutPositionInput = {
    pansionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: IntFieldUpdateOperationsInput | number
  }

  export type PosInPansionUncheckedUpdateManyWithoutPositionInput = {
    pansionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutPositionInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    PosInPansion?: PosInPansionUpdateManyWithoutAssignedNestedInput
    city?: CityUpdateOneRequiredWithoutUsersNestedInput
    pansion?: PansionUpdateOneRequiredWithoutUsersNestedInput
    province?: ProvinceUpdateOneRequiredWithoutUsersNestedInput
    ponsionOptions?: ponsionOptionsUpdateManyWithoutAssignedNestedInput
  }

  export type UserUncheckedUpdateWithoutPositionInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pansionId?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    PosInPansion?: PosInPansionUncheckedUpdateManyWithoutAssignedNestedInput
    ponsionOptions?: ponsionOptionsUncheckedUpdateManyWithoutAssignedNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPositionInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pansionId?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
  }

  export type PosInPansionCreateManyPansionInput = {
    positionId: number
    assignedAt?: Date | string
    assignedBy: number
  }

  export type RoomCreateManyPansionInput = {
    id?: number
    numberRoom: number
    numberOfBeds: number
    rent: number
    categoryId: number
  }

  export type UserCreateManyPansionInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    email: string
    positionId: number
    provinceId: number
    cityId: number
  }

  export type ponsionOptionsCreateManyPansionInput = {
    optionId: number
    assignedAt?: Date | string
    assignedBy: number
  }

  export type PosInPansionUpdateWithoutPansionInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned?: UserUpdateOneRequiredWithoutPosInPansionNestedInput
    position?: PositionUpdateOneRequiredWithoutPosInPansionNestedInput
  }

  export type PosInPansionUncheckedUpdateWithoutPansionInput = {
    positionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: IntFieldUpdateOperationsInput | number
  }

  export type PosInPansionUncheckedUpdateManyWithoutPansionInput = {
    positionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: IntFieldUpdateOperationsInput | number
  }

  export type RoomUpdateWithoutPansionInput = {
    numberRoom?: IntFieldUpdateOperationsInput | number
    numberOfBeds?: IntFieldUpdateOperationsInput | number
    rent?: FloatFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutPansionInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberRoom?: IntFieldUpdateOperationsInput | number
    numberOfBeds?: IntFieldUpdateOperationsInput | number
    rent?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type RoomUncheckedUpdateManyWithoutPansionInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberRoom?: IntFieldUpdateOperationsInput | number
    numberOfBeds?: IntFieldUpdateOperationsInput | number
    rent?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutPansionInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    PosInPansion?: PosInPansionUpdateManyWithoutAssignedNestedInput
    city?: CityUpdateOneRequiredWithoutUsersNestedInput
    position?: PositionUpdateOneRequiredWithoutUsersNestedInput
    province?: ProvinceUpdateOneRequiredWithoutUsersNestedInput
    ponsionOptions?: ponsionOptionsUpdateManyWithoutAssignedNestedInput
  }

  export type UserUncheckedUpdateWithoutPansionInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    PosInPansion?: PosInPansionUncheckedUpdateManyWithoutAssignedNestedInput
    ponsionOptions?: ponsionOptionsUncheckedUpdateManyWithoutAssignedNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPansionInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
  }

  export type ponsionOptionsUpdateWithoutPansionInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned?: UserUpdateOneRequiredWithoutPonsionOptionsNestedInput
    options?: OptionsUpdateOneRequiredWithoutPonsionOptionsNestedInput
  }

  export type ponsionOptionsUncheckedUpdateWithoutPansionInput = {
    optionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: IntFieldUpdateOperationsInput | number
  }

  export type ponsionOptionsUncheckedUpdateManyWithoutPansionInput = {
    optionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: IntFieldUpdateOperationsInput | number
  }

  export type CityCreateManyProvinceInput = {
    id?: number
    name: string
    enName: string
  }

  export type PansionCreateManyProvinceInput = {
    id?: number
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    commentId?: number | null
    cityId: number
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
  }

  export type UserCreateManyProvinceInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    email: string
    positionId: number
    pansionId: number
    cityId: number
  }

  export type CityUpdateWithoutProvinceInput = {
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    pansions?: PansionUpdateManyWithoutCityNestedInput
    users?: UserUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
    pansions?: PansionUncheckedUpdateManyWithoutCityNestedInput
    users?: UserUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateManyWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    enName?: StringFieldUpdateOperationsInput | string
  }

  export type PansionUpdateWithoutProvinceInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    city?: CityUpdateOneRequiredWithoutPansionsNestedInput
    comment?: CommentUpdateOneWithoutPansionsNestedInput
    positions?: PosInPansionUpdateManyWithoutPansionNestedInput
    rooms?: RoomUpdateManyWithoutPansionNestedInput
    users?: UserUpdateManyWithoutPansionNestedInput
    ponsionOptions?: ponsionOptionsUpdateManyWithoutPansionNestedInput
  }

  export type PansionUncheckedUpdateWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    cityId?: IntFieldUpdateOperationsInput | number
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    positions?: PosInPansionUncheckedUpdateManyWithoutPansionNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutPansionNestedInput
    users?: UserUncheckedUpdateManyWithoutPansionNestedInput
    ponsionOptions?: ponsionOptionsUncheckedUpdateManyWithoutPansionNestedInput
  }

  export type PansionUncheckedUpdateManyWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    cityId?: IntFieldUpdateOperationsInput | number
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutProvinceInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    PosInPansion?: PosInPansionUpdateManyWithoutAssignedNestedInput
    city?: CityUpdateOneRequiredWithoutUsersNestedInput
    pansion?: PansionUpdateOneRequiredWithoutUsersNestedInput
    position?: PositionUpdateOneRequiredWithoutUsersNestedInput
    ponsionOptions?: ponsionOptionsUpdateManyWithoutAssignedNestedInput
  }

  export type UserUncheckedUpdateWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    PosInPansion?: PosInPansionUncheckedUpdateManyWithoutAssignedNestedInput
    ponsionOptions?: ponsionOptionsUncheckedUpdateManyWithoutAssignedNestedInput
  }

  export type UserUncheckedUpdateManyWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
  }

  export type PansionCreateManyCityInput = {
    id?: number
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    commentId?: number | null
    provinceId: number
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
  }

  export type UserCreateManyCityInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    email: string
    positionId: number
    pansionId: number
    provinceId: number
  }

  export type PansionUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    comment?: CommentUpdateOneWithoutPansionsNestedInput
    province?: ProvinceUpdateOneRequiredWithoutPansionsNestedInput
    positions?: PosInPansionUpdateManyWithoutPansionNestedInput
    rooms?: RoomUpdateManyWithoutPansionNestedInput
    users?: UserUpdateManyWithoutPansionNestedInput
    ponsionOptions?: ponsionOptionsUpdateManyWithoutPansionNestedInput
  }

  export type PansionUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    provinceId?: IntFieldUpdateOperationsInput | number
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    positions?: PosInPansionUncheckedUpdateManyWithoutPansionNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutPansionNestedInput
    users?: UserUncheckedUpdateManyWithoutPansionNestedInput
    ponsionOptions?: ponsionOptionsUncheckedUpdateManyWithoutPansionNestedInput
  }

  export type PansionUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    provinceId?: IntFieldUpdateOperationsInput | number
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutCityInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    PosInPansion?: PosInPansionUpdateManyWithoutAssignedNestedInput
    pansion?: PansionUpdateOneRequiredWithoutUsersNestedInput
    position?: PositionUpdateOneRequiredWithoutUsersNestedInput
    province?: ProvinceUpdateOneRequiredWithoutUsersNestedInput
    ponsionOptions?: ponsionOptionsUpdateManyWithoutAssignedNestedInput
  }

  export type UserUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    PosInPansion?: PosInPansionUncheckedUpdateManyWithoutAssignedNestedInput
    ponsionOptions?: ponsionOptionsUncheckedUpdateManyWithoutAssignedNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
  }

  export type PansionCreateManyCommentInput = {
    id?: number
    name: string
    phone: string
    address?: string
    codeParvane: string
    Capacity?: number
    advancePayment?: number | null
    chargeMony: number
    active?: boolean
    typeOfContract?: $Enums.Contract
    imageUrl?: string | null
    description?: string
    provinceId: number
    cityId: number
    typeOfPansion?: $Enums.PansionType
    numberOfRoom?: number
    numberOfBed?: number
  }

  export type PansionUpdateWithoutCommentInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    city?: CityUpdateOneRequiredWithoutPansionsNestedInput
    province?: ProvinceUpdateOneRequiredWithoutPansionsNestedInput
    positions?: PosInPansionUpdateManyWithoutPansionNestedInput
    rooms?: RoomUpdateManyWithoutPansionNestedInput
    users?: UserUpdateManyWithoutPansionNestedInput
    ponsionOptions?: ponsionOptionsUpdateManyWithoutPansionNestedInput
  }

  export type PansionUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
    positions?: PosInPansionUncheckedUpdateManyWithoutPansionNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutPansionNestedInput
    users?: UserUncheckedUpdateManyWithoutPansionNestedInput
    ponsionOptions?: ponsionOptionsUncheckedUpdateManyWithoutPansionNestedInput
  }

  export type PansionUncheckedUpdateManyWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    codeParvane?: StringFieldUpdateOperationsInput | string
    Capacity?: IntFieldUpdateOperationsInput | number
    advancePayment?: NullableFloatFieldUpdateOperationsInput | number | null
    chargeMony?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    typeOfContract?: EnumContractFieldUpdateOperationsInput | $Enums.Contract
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    typeOfPansion?: EnumPansionTypeFieldUpdateOperationsInput | $Enums.PansionType
    numberOfRoom?: IntFieldUpdateOperationsInput | number
    numberOfBed?: IntFieldUpdateOperationsInput | number
  }

  export type ponsionOptionsCreateManyOptionsInput = {
    pansionId: number
    assignedAt?: Date | string
    assignedBy: number
  }

  export type ponsionOptionsUpdateWithoutOptionsInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned?: UserUpdateOneRequiredWithoutPonsionOptionsNestedInput
    pansion?: PansionUpdateOneRequiredWithoutPonsionOptionsNestedInput
  }

  export type ponsionOptionsUncheckedUpdateWithoutOptionsInput = {
    pansionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: IntFieldUpdateOperationsInput | number
  }

  export type ponsionOptionsUncheckedUpdateManyWithoutOptionsInput = {
    pansionId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: IntFieldUpdateOperationsInput | number
  }

  export type RoomCreateManyCategoryInput = {
    id?: number
    numberRoom: number
    numberOfBeds: number
    rent: number
    pansionId: number
  }

  export type RoomUpdateWithoutCategoryInput = {
    numberRoom?: IntFieldUpdateOperationsInput | number
    numberOfBeds?: IntFieldUpdateOperationsInput | number
    rent?: FloatFieldUpdateOperationsInput | number
    pansion?: PansionUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberRoom?: IntFieldUpdateOperationsInput | number
    numberOfBeds?: IntFieldUpdateOperationsInput | number
    rent?: FloatFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
  }

  export type RoomUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberRoom?: IntFieldUpdateOperationsInput | number
    numberOfBeds?: IntFieldUpdateOperationsInput | number
    rent?: FloatFieldUpdateOperationsInput | number
    pansionId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}