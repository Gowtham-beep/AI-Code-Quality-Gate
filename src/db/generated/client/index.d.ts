
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Repository
 * 
 */
export type Repository = $Result.DefaultSelection<Prisma.$RepositoryPayload>
/**
 * Model AnalysisJob
 * 
 */
export type AnalysisJob = $Result.DefaultSelection<Prisma.$AnalysisJobPayload>
/**
 * Model Finding
 * 
 */
export type Finding = $Result.DefaultSelection<Prisma.$FindingPayload>
/**
 * Model AnalysisReport
 * 
 */
export type AnalysisReport = $Result.DefaultSelection<Prisma.$AnalysisReportPayload>
/**
 * Model WebhookEvent
 * 
 */
export type WebhookEvent = $Result.DefaultSelection<Prisma.$WebhookEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AnalysisStatus: {
  PENDING: 'PENDING',
  QUEUED: 'QUEUED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type AnalysisStatus = (typeof AnalysisStatus)[keyof typeof AnalysisStatus]


export const QualityGateResult: {
  PASS: 'PASS',
  FAIL: 'FAIL',
  SKIPPED: 'SKIPPED'
};

export type QualityGateResult = (typeof QualityGateResult)[keyof typeof QualityGateResult]


export const Severity: {
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
  CRITICAL: 'CRITICAL'
};

export type Severity = (typeof Severity)[keyof typeof Severity]

}

export type AnalysisStatus = $Enums.AnalysisStatus

export const AnalysisStatus: typeof $Enums.AnalysisStatus

export type QualityGateResult = $Enums.QualityGateResult

export const QualityGateResult: typeof $Enums.QualityGateResult

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Repositories
 * const repositories = await prisma.repository.findMany()
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
   * // Fetch zero or more Repositories
   * const repositories = await prisma.repository.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.repository`: Exposes CRUD operations for the **Repository** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repositories
    * const repositories = await prisma.repository.findMany()
    * ```
    */
  get repository(): Prisma.RepositoryDelegate<ExtArgs>;

  /**
   * `prisma.analysisJob`: Exposes CRUD operations for the **AnalysisJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalysisJobs
    * const analysisJobs = await prisma.analysisJob.findMany()
    * ```
    */
  get analysisJob(): Prisma.AnalysisJobDelegate<ExtArgs>;

  /**
   * `prisma.finding`: Exposes CRUD operations for the **Finding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Findings
    * const findings = await prisma.finding.findMany()
    * ```
    */
  get finding(): Prisma.FindingDelegate<ExtArgs>;

  /**
   * `prisma.analysisReport`: Exposes CRUD operations for the **AnalysisReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalysisReports
    * const analysisReports = await prisma.analysisReport.findMany()
    * ```
    */
  get analysisReport(): Prisma.AnalysisReportDelegate<ExtArgs>;

  /**
   * `prisma.webhookEvent`: Exposes CRUD operations for the **WebhookEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookEvents
    * const webhookEvents = await prisma.webhookEvent.findMany()
    * ```
    */
  get webhookEvent(): Prisma.WebhookEventDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    Repository: 'Repository',
    AnalysisJob: 'AnalysisJob',
    Finding: 'Finding',
    AnalysisReport: 'AnalysisReport',
    WebhookEvent: 'WebhookEvent'
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
      modelProps: "repository" | "analysisJob" | "finding" | "analysisReport" | "webhookEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Repository: {
        payload: Prisma.$RepositoryPayload<ExtArgs>
        fields: Prisma.RepositoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepositoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepositoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findFirst: {
            args: Prisma.RepositoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepositoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findMany: {
            args: Prisma.RepositoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          create: {
            args: Prisma.RepositoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          createMany: {
            args: Prisma.RepositoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepositoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          delete: {
            args: Prisma.RepositoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          update: {
            args: Prisma.RepositoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          deleteMany: {
            args: Prisma.RepositoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepositoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RepositoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          aggregate: {
            args: Prisma.RepositoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepository>
          }
          groupBy: {
            args: Prisma.RepositoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepositoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepositoryCountArgs<ExtArgs>
            result: $Utils.Optional<RepositoryCountAggregateOutputType> | number
          }
        }
      }
      AnalysisJob: {
        payload: Prisma.$AnalysisJobPayload<ExtArgs>
        fields: Prisma.AnalysisJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>
          }
          findFirst: {
            args: Prisma.AnalysisJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>
          }
          findMany: {
            args: Prisma.AnalysisJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>[]
          }
          create: {
            args: Prisma.AnalysisJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>
          }
          createMany: {
            args: Prisma.AnalysisJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>[]
          }
          delete: {
            args: Prisma.AnalysisJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>
          }
          update: {
            args: Prisma.AnalysisJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnalysisJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>
          }
          aggregate: {
            args: Prisma.AnalysisJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysisJob>
          }
          groupBy: {
            args: Prisma.AnalysisJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisJobCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisJobCountAggregateOutputType> | number
          }
        }
      }
      Finding: {
        payload: Prisma.$FindingPayload<ExtArgs>
        fields: Prisma.FindingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FindingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FindingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          findFirst: {
            args: Prisma.FindingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FindingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          findMany: {
            args: Prisma.FindingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>[]
          }
          create: {
            args: Prisma.FindingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          createMany: {
            args: Prisma.FindingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FindingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>[]
          }
          delete: {
            args: Prisma.FindingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          update: {
            args: Prisma.FindingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          deleteMany: {
            args: Prisma.FindingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FindingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FindingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          aggregate: {
            args: Prisma.FindingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinding>
          }
          groupBy: {
            args: Prisma.FindingGroupByArgs<ExtArgs>
            result: $Utils.Optional<FindingGroupByOutputType>[]
          }
          count: {
            args: Prisma.FindingCountArgs<ExtArgs>
            result: $Utils.Optional<FindingCountAggregateOutputType> | number
          }
        }
      }
      AnalysisReport: {
        payload: Prisma.$AnalysisReportPayload<ExtArgs>
        fields: Prisma.AnalysisReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          findFirst: {
            args: Prisma.AnalysisReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          findMany: {
            args: Prisma.AnalysisReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>[]
          }
          create: {
            args: Prisma.AnalysisReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          createMany: {
            args: Prisma.AnalysisReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>[]
          }
          delete: {
            args: Prisma.AnalysisReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          update: {
            args: Prisma.AnalysisReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnalysisReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          aggregate: {
            args: Prisma.AnalysisReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysisReport>
          }
          groupBy: {
            args: Prisma.AnalysisReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisReportCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisReportCountAggregateOutputType> | number
          }
        }
      }
      WebhookEvent: {
        payload: Prisma.$WebhookEventPayload<ExtArgs>
        fields: Prisma.WebhookEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          findFirst: {
            args: Prisma.WebhookEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          findMany: {
            args: Prisma.WebhookEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          create: {
            args: Prisma.WebhookEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          createMany: {
            args: Prisma.WebhookEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          delete: {
            args: Prisma.WebhookEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          update: {
            args: Prisma.WebhookEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          deleteMany: {
            args: Prisma.WebhookEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WebhookEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          aggregate: {
            args: Prisma.WebhookEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookEvent>
          }
          groupBy: {
            args: Prisma.WebhookEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookEventCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookEventCountAggregateOutputType> | number
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
   * Count Type RepositoryCountOutputType
   */

  export type RepositoryCountOutputType = {
    analyses: number
  }

  export type RepositoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyses?: boolean | RepositoryCountOutputTypeCountAnalysesArgs
  }

  // Custom InputTypes
  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepositoryCountOutputType
     */
    select?: RepositoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisJobWhereInput
  }


  /**
   * Count Type AnalysisJobCountOutputType
   */

  export type AnalysisJobCountOutputType = {
    findings: number
  }

  export type AnalysisJobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    findings?: boolean | AnalysisJobCountOutputTypeCountFindingsArgs
  }

  // Custom InputTypes
  /**
   * AnalysisJobCountOutputType without action
   */
  export type AnalysisJobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJobCountOutputType
     */
    select?: AnalysisJobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnalysisJobCountOutputType without action
   */
  export type AnalysisJobCountOutputTypeCountFindingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FindingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Repository
   */

  export type AggregateRepository = {
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  export type RepositoryAvgAggregateOutputType = {
    githubId: number | null
    installationId: number | null
  }

  export type RepositorySumAggregateOutputType = {
    githubId: number | null
    installationId: number | null
  }

  export type RepositoryMinAggregateOutputType = {
    id: string | null
    githubId: number | null
    owner: string | null
    name: string | null
    fullName: string | null
    defaultBranch: string | null
    installationId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepositoryMaxAggregateOutputType = {
    id: string | null
    githubId: number | null
    owner: string | null
    name: string | null
    fullName: string | null
    defaultBranch: string | null
    installationId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepositoryCountAggregateOutputType = {
    id: number
    githubId: number
    owner: number
    name: number
    fullName: number
    defaultBranch: number
    installationId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RepositoryAvgAggregateInputType = {
    githubId?: true
    installationId?: true
  }

  export type RepositorySumAggregateInputType = {
    githubId?: true
    installationId?: true
  }

  export type RepositoryMinAggregateInputType = {
    id?: true
    githubId?: true
    owner?: true
    name?: true
    fullName?: true
    defaultBranch?: true
    installationId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepositoryMaxAggregateInputType = {
    id?: true
    githubId?: true
    owner?: true
    name?: true
    fullName?: true
    defaultBranch?: true
    installationId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepositoryCountAggregateInputType = {
    id?: true
    githubId?: true
    owner?: true
    name?: true
    fullName?: true
    defaultBranch?: true
    installationId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RepositoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repository to aggregate.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repositories
    **/
    _count?: true | RepositoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepositoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepositorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepositoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepositoryMaxAggregateInputType
  }

  export type GetRepositoryAggregateType<T extends RepositoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRepository]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepository[P]>
      : GetScalarType<T[P], AggregateRepository[P]>
  }




  export type RepositoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepositoryWhereInput
    orderBy?: RepositoryOrderByWithAggregationInput | RepositoryOrderByWithAggregationInput[]
    by: RepositoryScalarFieldEnum[] | RepositoryScalarFieldEnum
    having?: RepositoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepositoryCountAggregateInputType | true
    _avg?: RepositoryAvgAggregateInputType
    _sum?: RepositorySumAggregateInputType
    _min?: RepositoryMinAggregateInputType
    _max?: RepositoryMaxAggregateInputType
  }

  export type RepositoryGroupByOutputType = {
    id: string
    githubId: number
    owner: string
    name: string
    fullName: string
    defaultBranch: string
    installationId: number | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  type GetRepositoryGroupByPayload<T extends RepositoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepositoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepositoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
            : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
        }
      >
    >


  export type RepositorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubId?: boolean
    owner?: boolean
    name?: boolean
    fullName?: boolean
    defaultBranch?: boolean
    installationId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    analyses?: boolean | Repository$analysesArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubId?: boolean
    owner?: boolean
    name?: boolean
    fullName?: boolean
    defaultBranch?: boolean
    installationId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectScalar = {
    id?: boolean
    githubId?: boolean
    owner?: boolean
    name?: boolean
    fullName?: boolean
    defaultBranch?: boolean
    installationId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RepositoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyses?: boolean | Repository$analysesArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepositoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RepositoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repository"
    objects: {
      analyses: Prisma.$AnalysisJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      githubId: number
      owner: string
      name: string
      fullName: string
      defaultBranch: string
      installationId: number | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["repository"]>
    composites: {}
  }

  type RepositoryGetPayload<S extends boolean | null | undefined | RepositoryDefaultArgs> = $Result.GetResult<Prisma.$RepositoryPayload, S>

  type RepositoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RepositoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RepositoryCountAggregateInputType | true
    }

  export interface RepositoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repository'], meta: { name: 'Repository' } }
    /**
     * Find zero or one Repository that matches the filter.
     * @param {RepositoryFindUniqueArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepositoryFindUniqueArgs>(args: SelectSubset<T, RepositoryFindUniqueArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Repository that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RepositoryFindUniqueOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepositoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RepositoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Repository that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepositoryFindFirstArgs>(args?: SelectSubset<T, RepositoryFindFirstArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Repository that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepositoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RepositoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Repositories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repositories
     * const repositories = await prisma.repository.findMany()
     * 
     * // Get first 10 Repositories
     * const repositories = await prisma.repository.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repositoryWithIdOnly = await prisma.repository.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepositoryFindManyArgs>(args?: SelectSubset<T, RepositoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Repository.
     * @param {RepositoryCreateArgs} args - Arguments to create a Repository.
     * @example
     * // Create one Repository
     * const Repository = await prisma.repository.create({
     *   data: {
     *     // ... data to create a Repository
     *   }
     * })
     * 
     */
    create<T extends RepositoryCreateArgs>(args: SelectSubset<T, RepositoryCreateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Repositories.
     * @param {RepositoryCreateManyArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepositoryCreateManyArgs>(args?: SelectSubset<T, RepositoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repositories and returns the data saved in the database.
     * @param {RepositoryCreateManyAndReturnArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepositoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RepositoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Repository.
     * @param {RepositoryDeleteArgs} args - Arguments to delete one Repository.
     * @example
     * // Delete one Repository
     * const Repository = await prisma.repository.delete({
     *   where: {
     *     // ... filter to delete one Repository
     *   }
     * })
     * 
     */
    delete<T extends RepositoryDeleteArgs>(args: SelectSubset<T, RepositoryDeleteArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Repository.
     * @param {RepositoryUpdateArgs} args - Arguments to update one Repository.
     * @example
     * // Update one Repository
     * const repository = await prisma.repository.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepositoryUpdateArgs>(args: SelectSubset<T, RepositoryUpdateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Repositories.
     * @param {RepositoryDeleteManyArgs} args - Arguments to filter Repositories to delete.
     * @example
     * // Delete a few Repositories
     * const { count } = await prisma.repository.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepositoryDeleteManyArgs>(args?: SelectSubset<T, RepositoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepositoryUpdateManyArgs>(args: SelectSubset<T, RepositoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Repository.
     * @param {RepositoryUpsertArgs} args - Arguments to update or create a Repository.
     * @example
     * // Update or create a Repository
     * const repository = await prisma.repository.upsert({
     *   create: {
     *     // ... data to create a Repository
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repository we want to update
     *   }
     * })
     */
    upsert<T extends RepositoryUpsertArgs>(args: SelectSubset<T, RepositoryUpsertArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryCountArgs} args - Arguments to filter Repositories to count.
     * @example
     * // Count the number of Repositories
     * const count = await prisma.repository.count({
     *   where: {
     *     // ... the filter for the Repositories we want to count
     *   }
     * })
    **/
    count<T extends RepositoryCountArgs>(
      args?: Subset<T, RepositoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepositoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepositoryAggregateArgs>(args: Subset<T, RepositoryAggregateArgs>): Prisma.PrismaPromise<GetRepositoryAggregateType<T>>

    /**
     * Group by Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryGroupByArgs} args - Group by arguments.
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
      T extends RepositoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepositoryGroupByArgs['orderBy'] }
        : { orderBy?: RepositoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RepositoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepositoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repository model
   */
  readonly fields: RepositoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repository.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepositoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analyses<T extends Repository$analysesArgs<ExtArgs> = {}>(args?: Subset<T, Repository$analysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Repository model
   */ 
  interface RepositoryFieldRefs {
    readonly id: FieldRef<"Repository", 'String'>
    readonly githubId: FieldRef<"Repository", 'Int'>
    readonly owner: FieldRef<"Repository", 'String'>
    readonly name: FieldRef<"Repository", 'String'>
    readonly fullName: FieldRef<"Repository", 'String'>
    readonly defaultBranch: FieldRef<"Repository", 'String'>
    readonly installationId: FieldRef<"Repository", 'Int'>
    readonly isActive: FieldRef<"Repository", 'Boolean'>
    readonly createdAt: FieldRef<"Repository", 'DateTime'>
    readonly updatedAt: FieldRef<"Repository", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Repository findUnique
   */
  export type RepositoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findUniqueOrThrow
   */
  export type RepositoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findFirst
   */
  export type RepositoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findFirstOrThrow
   */
  export type RepositoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findMany
   */
  export type RepositoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repositories to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository create
   */
  export type RepositoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Repository.
     */
    data: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
  }

  /**
   * Repository createMany
   */
  export type RepositoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repository createManyAndReturn
   */
  export type RepositoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repository update
   */
  export type RepositoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Repository.
     */
    data: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
    /**
     * Choose, which Repository to update.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository updateMany
   */
  export type RepositoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repositories.
     */
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     */
    where?: RepositoryWhereInput
  }

  /**
   * Repository upsert
   */
  export type RepositoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Repository to update in case it exists.
     */
    where: RepositoryWhereUniqueInput
    /**
     * In case the Repository found by the `where` argument doesn't exist, create a new Repository with this data.
     */
    create: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
    /**
     * In case the Repository was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
  }

  /**
   * Repository delete
   */
  export type RepositoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter which Repository to delete.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository deleteMany
   */
  export type RepositoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repositories to delete
     */
    where?: RepositoryWhereInput
  }

  /**
   * Repository.analyses
   */
  export type Repository$analysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    where?: AnalysisJobWhereInput
    orderBy?: AnalysisJobOrderByWithRelationInput | AnalysisJobOrderByWithRelationInput[]
    cursor?: AnalysisJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisJobScalarFieldEnum | AnalysisJobScalarFieldEnum[]
  }

  /**
   * Repository without action
   */
  export type RepositoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
  }


  /**
   * Model AnalysisJob
   */

  export type AggregateAnalysisJob = {
    _count: AnalysisJobCountAggregateOutputType | null
    _avg: AnalysisJobAvgAggregateOutputType | null
    _sum: AnalysisJobSumAggregateOutputType | null
    _min: AnalysisJobMinAggregateOutputType | null
    _max: AnalysisJobMaxAggregateOutputType | null
  }

  export type AnalysisJobAvgAggregateOutputType = {
    prNumber: number | null
  }

  export type AnalysisJobSumAggregateOutputType = {
    prNumber: number | null
  }

  export type AnalysisJobMinAggregateOutputType = {
    id: string | null
    repositoryId: string | null
    prNumber: number | null
    prTitle: string | null
    commitSha: string | null
    baseSha: string | null
    headBranch: string | null
    baseBranch: string | null
    status: $Enums.AnalysisStatus | null
    gateResult: $Enums.QualityGateResult | null
    triggeredBy: string | null
    startedAt: Date | null
    completedAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnalysisJobMaxAggregateOutputType = {
    id: string | null
    repositoryId: string | null
    prNumber: number | null
    prTitle: string | null
    commitSha: string | null
    baseSha: string | null
    headBranch: string | null
    baseBranch: string | null
    status: $Enums.AnalysisStatus | null
    gateResult: $Enums.QualityGateResult | null
    triggeredBy: string | null
    startedAt: Date | null
    completedAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnalysisJobCountAggregateOutputType = {
    id: number
    repositoryId: number
    prNumber: number
    prTitle: number
    commitSha: number
    baseSha: number
    headBranch: number
    baseBranch: number
    status: number
    gateResult: number
    triggeredBy: number
    startedAt: number
    completedAt: number
    errorMessage: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnalysisJobAvgAggregateInputType = {
    prNumber?: true
  }

  export type AnalysisJobSumAggregateInputType = {
    prNumber?: true
  }

  export type AnalysisJobMinAggregateInputType = {
    id?: true
    repositoryId?: true
    prNumber?: true
    prTitle?: true
    commitSha?: true
    baseSha?: true
    headBranch?: true
    baseBranch?: true
    status?: true
    gateResult?: true
    triggeredBy?: true
    startedAt?: true
    completedAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnalysisJobMaxAggregateInputType = {
    id?: true
    repositoryId?: true
    prNumber?: true
    prTitle?: true
    commitSha?: true
    baseSha?: true
    headBranch?: true
    baseBranch?: true
    status?: true
    gateResult?: true
    triggeredBy?: true
    startedAt?: true
    completedAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnalysisJobCountAggregateInputType = {
    id?: true
    repositoryId?: true
    prNumber?: true
    prTitle?: true
    commitSha?: true
    baseSha?: true
    headBranch?: true
    baseBranch?: true
    status?: true
    gateResult?: true
    triggeredBy?: true
    startedAt?: true
    completedAt?: true
    errorMessage?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnalysisJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisJob to aggregate.
     */
    where?: AnalysisJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisJobs to fetch.
     */
    orderBy?: AnalysisJobOrderByWithRelationInput | AnalysisJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalysisJobs
    **/
    _count?: true | AnalysisJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisJobMaxAggregateInputType
  }

  export type GetAnalysisJobAggregateType<T extends AnalysisJobAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysisJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysisJob[P]>
      : GetScalarType<T[P], AggregateAnalysisJob[P]>
  }




  export type AnalysisJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisJobWhereInput
    orderBy?: AnalysisJobOrderByWithAggregationInput | AnalysisJobOrderByWithAggregationInput[]
    by: AnalysisJobScalarFieldEnum[] | AnalysisJobScalarFieldEnum
    having?: AnalysisJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisJobCountAggregateInputType | true
    _avg?: AnalysisJobAvgAggregateInputType
    _sum?: AnalysisJobSumAggregateInputType
    _min?: AnalysisJobMinAggregateInputType
    _max?: AnalysisJobMaxAggregateInputType
  }

  export type AnalysisJobGroupByOutputType = {
    id: string
    repositoryId: string
    prNumber: number
    prTitle: string
    commitSha: string
    baseSha: string
    headBranch: string
    baseBranch: string
    status: $Enums.AnalysisStatus
    gateResult: $Enums.QualityGateResult | null
    triggeredBy: string | null
    startedAt: Date | null
    completedAt: Date | null
    errorMessage: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: AnalysisJobCountAggregateOutputType | null
    _avg: AnalysisJobAvgAggregateOutputType | null
    _sum: AnalysisJobSumAggregateOutputType | null
    _min: AnalysisJobMinAggregateOutputType | null
    _max: AnalysisJobMaxAggregateOutputType | null
  }

  type GetAnalysisJobGroupByPayload<T extends AnalysisJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisJobGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisJobGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repositoryId?: boolean
    prNumber?: boolean
    prTitle?: boolean
    commitSha?: boolean
    baseSha?: boolean
    headBranch?: boolean
    baseBranch?: boolean
    status?: boolean
    gateResult?: boolean
    triggeredBy?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
    findings?: boolean | AnalysisJob$findingsArgs<ExtArgs>
    report?: boolean | AnalysisJob$reportArgs<ExtArgs>
    _count?: boolean | AnalysisJobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisJob"]>

  export type AnalysisJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repositoryId?: boolean
    prNumber?: boolean
    prTitle?: boolean
    commitSha?: boolean
    baseSha?: boolean
    headBranch?: boolean
    baseBranch?: boolean
    status?: boolean
    gateResult?: boolean
    triggeredBy?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisJob"]>

  export type AnalysisJobSelectScalar = {
    id?: boolean
    repositoryId?: boolean
    prNumber?: boolean
    prTitle?: boolean
    commitSha?: boolean
    baseSha?: boolean
    headBranch?: boolean
    baseBranch?: boolean
    status?: boolean
    gateResult?: boolean
    triggeredBy?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnalysisJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
    findings?: boolean | AnalysisJob$findingsArgs<ExtArgs>
    report?: boolean | AnalysisJob$reportArgs<ExtArgs>
    _count?: boolean | AnalysisJobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnalysisJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }

  export type $AnalysisJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalysisJob"
    objects: {
      repository: Prisma.$RepositoryPayload<ExtArgs>
      findings: Prisma.$FindingPayload<ExtArgs>[]
      report: Prisma.$AnalysisReportPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      repositoryId: string
      prNumber: number
      prTitle: string
      commitSha: string
      baseSha: string
      headBranch: string
      baseBranch: string
      status: $Enums.AnalysisStatus
      gateResult: $Enums.QualityGateResult | null
      triggeredBy: string | null
      startedAt: Date | null
      completedAt: Date | null
      errorMessage: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["analysisJob"]>
    composites: {}
  }

  type AnalysisJobGetPayload<S extends boolean | null | undefined | AnalysisJobDefaultArgs> = $Result.GetResult<Prisma.$AnalysisJobPayload, S>

  type AnalysisJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnalysisJobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnalysisJobCountAggregateInputType | true
    }

  export interface AnalysisJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalysisJob'], meta: { name: 'AnalysisJob' } }
    /**
     * Find zero or one AnalysisJob that matches the filter.
     * @param {AnalysisJobFindUniqueArgs} args - Arguments to find a AnalysisJob
     * @example
     * // Get one AnalysisJob
     * const analysisJob = await prisma.analysisJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisJobFindUniqueArgs>(args: SelectSubset<T, AnalysisJobFindUniqueArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AnalysisJob that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnalysisJobFindUniqueOrThrowArgs} args - Arguments to find a AnalysisJob
     * @example
     * // Get one AnalysisJob
     * const analysisJob = await prisma.analysisJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisJobFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AnalysisJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisJobFindFirstArgs} args - Arguments to find a AnalysisJob
     * @example
     * // Get one AnalysisJob
     * const analysisJob = await prisma.analysisJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisJobFindFirstArgs>(args?: SelectSubset<T, AnalysisJobFindFirstArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AnalysisJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisJobFindFirstOrThrowArgs} args - Arguments to find a AnalysisJob
     * @example
     * // Get one AnalysisJob
     * const analysisJob = await prisma.analysisJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisJobFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AnalysisJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalysisJobs
     * const analysisJobs = await prisma.analysisJob.findMany()
     * 
     * // Get first 10 AnalysisJobs
     * const analysisJobs = await prisma.analysisJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisJobWithIdOnly = await prisma.analysisJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisJobFindManyArgs>(args?: SelectSubset<T, AnalysisJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AnalysisJob.
     * @param {AnalysisJobCreateArgs} args - Arguments to create a AnalysisJob.
     * @example
     * // Create one AnalysisJob
     * const AnalysisJob = await prisma.analysisJob.create({
     *   data: {
     *     // ... data to create a AnalysisJob
     *   }
     * })
     * 
     */
    create<T extends AnalysisJobCreateArgs>(args: SelectSubset<T, AnalysisJobCreateArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AnalysisJobs.
     * @param {AnalysisJobCreateManyArgs} args - Arguments to create many AnalysisJobs.
     * @example
     * // Create many AnalysisJobs
     * const analysisJob = await prisma.analysisJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisJobCreateManyArgs>(args?: SelectSubset<T, AnalysisJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalysisJobs and returns the data saved in the database.
     * @param {AnalysisJobCreateManyAndReturnArgs} args - Arguments to create many AnalysisJobs.
     * @example
     * // Create many AnalysisJobs
     * const analysisJob = await prisma.analysisJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalysisJobs and only return the `id`
     * const analysisJobWithIdOnly = await prisma.analysisJob.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisJobCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AnalysisJob.
     * @param {AnalysisJobDeleteArgs} args - Arguments to delete one AnalysisJob.
     * @example
     * // Delete one AnalysisJob
     * const AnalysisJob = await prisma.analysisJob.delete({
     *   where: {
     *     // ... filter to delete one AnalysisJob
     *   }
     * })
     * 
     */
    delete<T extends AnalysisJobDeleteArgs>(args: SelectSubset<T, AnalysisJobDeleteArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AnalysisJob.
     * @param {AnalysisJobUpdateArgs} args - Arguments to update one AnalysisJob.
     * @example
     * // Update one AnalysisJob
     * const analysisJob = await prisma.analysisJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisJobUpdateArgs>(args: SelectSubset<T, AnalysisJobUpdateArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AnalysisJobs.
     * @param {AnalysisJobDeleteManyArgs} args - Arguments to filter AnalysisJobs to delete.
     * @example
     * // Delete a few AnalysisJobs
     * const { count } = await prisma.analysisJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisJobDeleteManyArgs>(args?: SelectSubset<T, AnalysisJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalysisJobs
     * const analysisJob = await prisma.analysisJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisJobUpdateManyArgs>(args: SelectSubset<T, AnalysisJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnalysisJob.
     * @param {AnalysisJobUpsertArgs} args - Arguments to update or create a AnalysisJob.
     * @example
     * // Update or create a AnalysisJob
     * const analysisJob = await prisma.analysisJob.upsert({
     *   create: {
     *     // ... data to create a AnalysisJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalysisJob we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisJobUpsertArgs>(args: SelectSubset<T, AnalysisJobUpsertArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AnalysisJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisJobCountArgs} args - Arguments to filter AnalysisJobs to count.
     * @example
     * // Count the number of AnalysisJobs
     * const count = await prisma.analysisJob.count({
     *   where: {
     *     // ... the filter for the AnalysisJobs we want to count
     *   }
     * })
    **/
    count<T extends AnalysisJobCountArgs>(
      args?: Subset<T, AnalysisJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalysisJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalysisJobAggregateArgs>(args: Subset<T, AnalysisJobAggregateArgs>): Prisma.PrismaPromise<GetAnalysisJobAggregateType<T>>

    /**
     * Group by AnalysisJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisJobGroupByArgs} args - Group by arguments.
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
      T extends AnalysisJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisJobGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalysisJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalysisJob model
   */
  readonly fields: AnalysisJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalysisJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repository<T extends RepositoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepositoryDefaultArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    findings<T extends AnalysisJob$findingsArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisJob$findingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findMany"> | Null>
    report<T extends AnalysisJob$reportArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisJob$reportArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the AnalysisJob model
   */ 
  interface AnalysisJobFieldRefs {
    readonly id: FieldRef<"AnalysisJob", 'String'>
    readonly repositoryId: FieldRef<"AnalysisJob", 'String'>
    readonly prNumber: FieldRef<"AnalysisJob", 'Int'>
    readonly prTitle: FieldRef<"AnalysisJob", 'String'>
    readonly commitSha: FieldRef<"AnalysisJob", 'String'>
    readonly baseSha: FieldRef<"AnalysisJob", 'String'>
    readonly headBranch: FieldRef<"AnalysisJob", 'String'>
    readonly baseBranch: FieldRef<"AnalysisJob", 'String'>
    readonly status: FieldRef<"AnalysisJob", 'AnalysisStatus'>
    readonly gateResult: FieldRef<"AnalysisJob", 'QualityGateResult'>
    readonly triggeredBy: FieldRef<"AnalysisJob", 'String'>
    readonly startedAt: FieldRef<"AnalysisJob", 'DateTime'>
    readonly completedAt: FieldRef<"AnalysisJob", 'DateTime'>
    readonly errorMessage: FieldRef<"AnalysisJob", 'String'>
    readonly metadata: FieldRef<"AnalysisJob", 'Json'>
    readonly createdAt: FieldRef<"AnalysisJob", 'DateTime'>
    readonly updatedAt: FieldRef<"AnalysisJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalysisJob findUnique
   */
  export type AnalysisJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisJob to fetch.
     */
    where: AnalysisJobWhereUniqueInput
  }

  /**
   * AnalysisJob findUniqueOrThrow
   */
  export type AnalysisJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisJob to fetch.
     */
    where: AnalysisJobWhereUniqueInput
  }

  /**
   * AnalysisJob findFirst
   */
  export type AnalysisJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisJob to fetch.
     */
    where?: AnalysisJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisJobs to fetch.
     */
    orderBy?: AnalysisJobOrderByWithRelationInput | AnalysisJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisJobs.
     */
    cursor?: AnalysisJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisJobs.
     */
    distinct?: AnalysisJobScalarFieldEnum | AnalysisJobScalarFieldEnum[]
  }

  /**
   * AnalysisJob findFirstOrThrow
   */
  export type AnalysisJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisJob to fetch.
     */
    where?: AnalysisJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisJobs to fetch.
     */
    orderBy?: AnalysisJobOrderByWithRelationInput | AnalysisJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisJobs.
     */
    cursor?: AnalysisJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisJobs.
     */
    distinct?: AnalysisJobScalarFieldEnum | AnalysisJobScalarFieldEnum[]
  }

  /**
   * AnalysisJob findMany
   */
  export type AnalysisJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisJobs to fetch.
     */
    where?: AnalysisJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisJobs to fetch.
     */
    orderBy?: AnalysisJobOrderByWithRelationInput | AnalysisJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalysisJobs.
     */
    cursor?: AnalysisJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisJobs.
     */
    skip?: number
    distinct?: AnalysisJobScalarFieldEnum | AnalysisJobScalarFieldEnum[]
  }

  /**
   * AnalysisJob create
   */
  export type AnalysisJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalysisJob.
     */
    data: XOR<AnalysisJobCreateInput, AnalysisJobUncheckedCreateInput>
  }

  /**
   * AnalysisJob createMany
   */
  export type AnalysisJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalysisJobs.
     */
    data: AnalysisJobCreateManyInput | AnalysisJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisJob createManyAndReturn
   */
  export type AnalysisJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AnalysisJobs.
     */
    data: AnalysisJobCreateManyInput | AnalysisJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisJob update
   */
  export type AnalysisJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalysisJob.
     */
    data: XOR<AnalysisJobUpdateInput, AnalysisJobUncheckedUpdateInput>
    /**
     * Choose, which AnalysisJob to update.
     */
    where: AnalysisJobWhereUniqueInput
  }

  /**
   * AnalysisJob updateMany
   */
  export type AnalysisJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalysisJobs.
     */
    data: XOR<AnalysisJobUpdateManyMutationInput, AnalysisJobUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisJobs to update
     */
    where?: AnalysisJobWhereInput
  }

  /**
   * AnalysisJob upsert
   */
  export type AnalysisJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalysisJob to update in case it exists.
     */
    where: AnalysisJobWhereUniqueInput
    /**
     * In case the AnalysisJob found by the `where` argument doesn't exist, create a new AnalysisJob with this data.
     */
    create: XOR<AnalysisJobCreateInput, AnalysisJobUncheckedCreateInput>
    /**
     * In case the AnalysisJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisJobUpdateInput, AnalysisJobUncheckedUpdateInput>
  }

  /**
   * AnalysisJob delete
   */
  export type AnalysisJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * Filter which AnalysisJob to delete.
     */
    where: AnalysisJobWhereUniqueInput
  }

  /**
   * AnalysisJob deleteMany
   */
  export type AnalysisJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisJobs to delete
     */
    where?: AnalysisJobWhereInput
  }

  /**
   * AnalysisJob.findings
   */
  export type AnalysisJob$findingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    where?: FindingWhereInput
    orderBy?: FindingOrderByWithRelationInput | FindingOrderByWithRelationInput[]
    cursor?: FindingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FindingScalarFieldEnum | FindingScalarFieldEnum[]
  }

  /**
   * AnalysisJob.report
   */
  export type AnalysisJob$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    where?: AnalysisReportWhereInput
  }

  /**
   * AnalysisJob without action
   */
  export type AnalysisJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
  }


  /**
   * Model Finding
   */

  export type AggregateFinding = {
    _count: FindingCountAggregateOutputType | null
    _avg: FindingAvgAggregateOutputType | null
    _sum: FindingSumAggregateOutputType | null
    _min: FindingMinAggregateOutputType | null
    _max: FindingMaxAggregateOutputType | null
  }

  export type FindingAvgAggregateOutputType = {
    lineStart: number | null
    lineEnd: number | null
  }

  export type FindingSumAggregateOutputType = {
    lineStart: number | null
    lineEnd: number | null
  }

  export type FindingMinAggregateOutputType = {
    id: string | null
    analysisJobId: string | null
    filePath: string | null
    lineStart: number | null
    lineEnd: number | null
    severity: $Enums.Severity | null
    ruleId: string | null
    message: string | null
    suggestion: string | null
    category: string | null
    createdAt: Date | null
  }

  export type FindingMaxAggregateOutputType = {
    id: string | null
    analysisJobId: string | null
    filePath: string | null
    lineStart: number | null
    lineEnd: number | null
    severity: $Enums.Severity | null
    ruleId: string | null
    message: string | null
    suggestion: string | null
    category: string | null
    createdAt: Date | null
  }

  export type FindingCountAggregateOutputType = {
    id: number
    analysisJobId: number
    filePath: number
    lineStart: number
    lineEnd: number
    severity: number
    ruleId: number
    message: number
    suggestion: number
    category: number
    createdAt: number
    _all: number
  }


  export type FindingAvgAggregateInputType = {
    lineStart?: true
    lineEnd?: true
  }

  export type FindingSumAggregateInputType = {
    lineStart?: true
    lineEnd?: true
  }

  export type FindingMinAggregateInputType = {
    id?: true
    analysisJobId?: true
    filePath?: true
    lineStart?: true
    lineEnd?: true
    severity?: true
    ruleId?: true
    message?: true
    suggestion?: true
    category?: true
    createdAt?: true
  }

  export type FindingMaxAggregateInputType = {
    id?: true
    analysisJobId?: true
    filePath?: true
    lineStart?: true
    lineEnd?: true
    severity?: true
    ruleId?: true
    message?: true
    suggestion?: true
    category?: true
    createdAt?: true
  }

  export type FindingCountAggregateInputType = {
    id?: true
    analysisJobId?: true
    filePath?: true
    lineStart?: true
    lineEnd?: true
    severity?: true
    ruleId?: true
    message?: true
    suggestion?: true
    category?: true
    createdAt?: true
    _all?: true
  }

  export type FindingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finding to aggregate.
     */
    where?: FindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Findings to fetch.
     */
    orderBy?: FindingOrderByWithRelationInput | FindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Findings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Findings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Findings
    **/
    _count?: true | FindingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FindingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FindingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FindingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FindingMaxAggregateInputType
  }

  export type GetFindingAggregateType<T extends FindingAggregateArgs> = {
        [P in keyof T & keyof AggregateFinding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinding[P]>
      : GetScalarType<T[P], AggregateFinding[P]>
  }




  export type FindingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FindingWhereInput
    orderBy?: FindingOrderByWithAggregationInput | FindingOrderByWithAggregationInput[]
    by: FindingScalarFieldEnum[] | FindingScalarFieldEnum
    having?: FindingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FindingCountAggregateInputType | true
    _avg?: FindingAvgAggregateInputType
    _sum?: FindingSumAggregateInputType
    _min?: FindingMinAggregateInputType
    _max?: FindingMaxAggregateInputType
  }

  export type FindingGroupByOutputType = {
    id: string
    analysisJobId: string
    filePath: string
    lineStart: number | null
    lineEnd: number | null
    severity: $Enums.Severity
    ruleId: string
    message: string
    suggestion: string | null
    category: string | null
    createdAt: Date
    _count: FindingCountAggregateOutputType | null
    _avg: FindingAvgAggregateOutputType | null
    _sum: FindingSumAggregateOutputType | null
    _min: FindingMinAggregateOutputType | null
    _max: FindingMaxAggregateOutputType | null
  }

  type GetFindingGroupByPayload<T extends FindingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FindingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FindingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FindingGroupByOutputType[P]>
            : GetScalarType<T[P], FindingGroupByOutputType[P]>
        }
      >
    >


  export type FindingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    analysisJobId?: boolean
    filePath?: boolean
    lineStart?: boolean
    lineEnd?: boolean
    severity?: boolean
    ruleId?: boolean
    message?: boolean
    suggestion?: boolean
    category?: boolean
    createdAt?: boolean
    analysisJob?: boolean | AnalysisJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finding"]>

  export type FindingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    analysisJobId?: boolean
    filePath?: boolean
    lineStart?: boolean
    lineEnd?: boolean
    severity?: boolean
    ruleId?: boolean
    message?: boolean
    suggestion?: boolean
    category?: boolean
    createdAt?: boolean
    analysisJob?: boolean | AnalysisJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finding"]>

  export type FindingSelectScalar = {
    id?: boolean
    analysisJobId?: boolean
    filePath?: boolean
    lineStart?: boolean
    lineEnd?: boolean
    severity?: boolean
    ruleId?: boolean
    message?: boolean
    suggestion?: boolean
    category?: boolean
    createdAt?: boolean
  }

  export type FindingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analysisJob?: boolean | AnalysisJobDefaultArgs<ExtArgs>
  }
  export type FindingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analysisJob?: boolean | AnalysisJobDefaultArgs<ExtArgs>
  }

  export type $FindingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Finding"
    objects: {
      analysisJob: Prisma.$AnalysisJobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      analysisJobId: string
      filePath: string
      lineStart: number | null
      lineEnd: number | null
      severity: $Enums.Severity
      ruleId: string
      message: string
      suggestion: string | null
      category: string | null
      createdAt: Date
    }, ExtArgs["result"]["finding"]>
    composites: {}
  }

  type FindingGetPayload<S extends boolean | null | undefined | FindingDefaultArgs> = $Result.GetResult<Prisma.$FindingPayload, S>

  type FindingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FindingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FindingCountAggregateInputType | true
    }

  export interface FindingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Finding'], meta: { name: 'Finding' } }
    /**
     * Find zero or one Finding that matches the filter.
     * @param {FindingFindUniqueArgs} args - Arguments to find a Finding
     * @example
     * // Get one Finding
     * const finding = await prisma.finding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FindingFindUniqueArgs>(args: SelectSubset<T, FindingFindUniqueArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Finding that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FindingFindUniqueOrThrowArgs} args - Arguments to find a Finding
     * @example
     * // Get one Finding
     * const finding = await prisma.finding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FindingFindUniqueOrThrowArgs>(args: SelectSubset<T, FindingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Finding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingFindFirstArgs} args - Arguments to find a Finding
     * @example
     * // Get one Finding
     * const finding = await prisma.finding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FindingFindFirstArgs>(args?: SelectSubset<T, FindingFindFirstArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Finding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingFindFirstOrThrowArgs} args - Arguments to find a Finding
     * @example
     * // Get one Finding
     * const finding = await prisma.finding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FindingFindFirstOrThrowArgs>(args?: SelectSubset<T, FindingFindFirstOrThrowArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Findings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Findings
     * const findings = await prisma.finding.findMany()
     * 
     * // Get first 10 Findings
     * const findings = await prisma.finding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const findingWithIdOnly = await prisma.finding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FindingFindManyArgs>(args?: SelectSubset<T, FindingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Finding.
     * @param {FindingCreateArgs} args - Arguments to create a Finding.
     * @example
     * // Create one Finding
     * const Finding = await prisma.finding.create({
     *   data: {
     *     // ... data to create a Finding
     *   }
     * })
     * 
     */
    create<T extends FindingCreateArgs>(args: SelectSubset<T, FindingCreateArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Findings.
     * @param {FindingCreateManyArgs} args - Arguments to create many Findings.
     * @example
     * // Create many Findings
     * const finding = await prisma.finding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FindingCreateManyArgs>(args?: SelectSubset<T, FindingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Findings and returns the data saved in the database.
     * @param {FindingCreateManyAndReturnArgs} args - Arguments to create many Findings.
     * @example
     * // Create many Findings
     * const finding = await prisma.finding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Findings and only return the `id`
     * const findingWithIdOnly = await prisma.finding.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FindingCreateManyAndReturnArgs>(args?: SelectSubset<T, FindingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Finding.
     * @param {FindingDeleteArgs} args - Arguments to delete one Finding.
     * @example
     * // Delete one Finding
     * const Finding = await prisma.finding.delete({
     *   where: {
     *     // ... filter to delete one Finding
     *   }
     * })
     * 
     */
    delete<T extends FindingDeleteArgs>(args: SelectSubset<T, FindingDeleteArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Finding.
     * @param {FindingUpdateArgs} args - Arguments to update one Finding.
     * @example
     * // Update one Finding
     * const finding = await prisma.finding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FindingUpdateArgs>(args: SelectSubset<T, FindingUpdateArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Findings.
     * @param {FindingDeleteManyArgs} args - Arguments to filter Findings to delete.
     * @example
     * // Delete a few Findings
     * const { count } = await prisma.finding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FindingDeleteManyArgs>(args?: SelectSubset<T, FindingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Findings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Findings
     * const finding = await prisma.finding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FindingUpdateManyArgs>(args: SelectSubset<T, FindingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Finding.
     * @param {FindingUpsertArgs} args - Arguments to update or create a Finding.
     * @example
     * // Update or create a Finding
     * const finding = await prisma.finding.upsert({
     *   create: {
     *     // ... data to create a Finding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finding we want to update
     *   }
     * })
     */
    upsert<T extends FindingUpsertArgs>(args: SelectSubset<T, FindingUpsertArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Findings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingCountArgs} args - Arguments to filter Findings to count.
     * @example
     * // Count the number of Findings
     * const count = await prisma.finding.count({
     *   where: {
     *     // ... the filter for the Findings we want to count
     *   }
     * })
    **/
    count<T extends FindingCountArgs>(
      args?: Subset<T, FindingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FindingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Finding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FindingAggregateArgs>(args: Subset<T, FindingAggregateArgs>): Prisma.PrismaPromise<GetFindingAggregateType<T>>

    /**
     * Group by Finding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingGroupByArgs} args - Group by arguments.
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
      T extends FindingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FindingGroupByArgs['orderBy'] }
        : { orderBy?: FindingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FindingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFindingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Finding model
   */
  readonly fields: FindingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Finding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FindingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analysisJob<T extends AnalysisJobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisJobDefaultArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Finding model
   */ 
  interface FindingFieldRefs {
    readonly id: FieldRef<"Finding", 'String'>
    readonly analysisJobId: FieldRef<"Finding", 'String'>
    readonly filePath: FieldRef<"Finding", 'String'>
    readonly lineStart: FieldRef<"Finding", 'Int'>
    readonly lineEnd: FieldRef<"Finding", 'Int'>
    readonly severity: FieldRef<"Finding", 'Severity'>
    readonly ruleId: FieldRef<"Finding", 'String'>
    readonly message: FieldRef<"Finding", 'String'>
    readonly suggestion: FieldRef<"Finding", 'String'>
    readonly category: FieldRef<"Finding", 'String'>
    readonly createdAt: FieldRef<"Finding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Finding findUnique
   */
  export type FindingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter, which Finding to fetch.
     */
    where: FindingWhereUniqueInput
  }

  /**
   * Finding findUniqueOrThrow
   */
  export type FindingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter, which Finding to fetch.
     */
    where: FindingWhereUniqueInput
  }

  /**
   * Finding findFirst
   */
  export type FindingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter, which Finding to fetch.
     */
    where?: FindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Findings to fetch.
     */
    orderBy?: FindingOrderByWithRelationInput | FindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Findings.
     */
    cursor?: FindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Findings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Findings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Findings.
     */
    distinct?: FindingScalarFieldEnum | FindingScalarFieldEnum[]
  }

  /**
   * Finding findFirstOrThrow
   */
  export type FindingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter, which Finding to fetch.
     */
    where?: FindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Findings to fetch.
     */
    orderBy?: FindingOrderByWithRelationInput | FindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Findings.
     */
    cursor?: FindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Findings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Findings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Findings.
     */
    distinct?: FindingScalarFieldEnum | FindingScalarFieldEnum[]
  }

  /**
   * Finding findMany
   */
  export type FindingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter, which Findings to fetch.
     */
    where?: FindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Findings to fetch.
     */
    orderBy?: FindingOrderByWithRelationInput | FindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Findings.
     */
    cursor?: FindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Findings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Findings.
     */
    skip?: number
    distinct?: FindingScalarFieldEnum | FindingScalarFieldEnum[]
  }

  /**
   * Finding create
   */
  export type FindingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * The data needed to create a Finding.
     */
    data: XOR<FindingCreateInput, FindingUncheckedCreateInput>
  }

  /**
   * Finding createMany
   */
  export type FindingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Findings.
     */
    data: FindingCreateManyInput | FindingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Finding createManyAndReturn
   */
  export type FindingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Findings.
     */
    data: FindingCreateManyInput | FindingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Finding update
   */
  export type FindingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * The data needed to update a Finding.
     */
    data: XOR<FindingUpdateInput, FindingUncheckedUpdateInput>
    /**
     * Choose, which Finding to update.
     */
    where: FindingWhereUniqueInput
  }

  /**
   * Finding updateMany
   */
  export type FindingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Findings.
     */
    data: XOR<FindingUpdateManyMutationInput, FindingUncheckedUpdateManyInput>
    /**
     * Filter which Findings to update
     */
    where?: FindingWhereInput
  }

  /**
   * Finding upsert
   */
  export type FindingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * The filter to search for the Finding to update in case it exists.
     */
    where: FindingWhereUniqueInput
    /**
     * In case the Finding found by the `where` argument doesn't exist, create a new Finding with this data.
     */
    create: XOR<FindingCreateInput, FindingUncheckedCreateInput>
    /**
     * In case the Finding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FindingUpdateInput, FindingUncheckedUpdateInput>
  }

  /**
   * Finding delete
   */
  export type FindingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter which Finding to delete.
     */
    where: FindingWhereUniqueInput
  }

  /**
   * Finding deleteMany
   */
  export type FindingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Findings to delete
     */
    where?: FindingWhereInput
  }

  /**
   * Finding without action
   */
  export type FindingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
  }


  /**
   * Model AnalysisReport
   */

  export type AggregateAnalysisReport = {
    _count: AnalysisReportCountAggregateOutputType | null
    _avg: AnalysisReportAvgAggregateOutputType | null
    _sum: AnalysisReportSumAggregateOutputType | null
    _min: AnalysisReportMinAggregateOutputType | null
    _max: AnalysisReportMaxAggregateOutputType | null
  }

  export type AnalysisReportAvgAggregateOutputType = {
    totalFindings: number | null
    criticalCount: number | null
    errorCount: number | null
    warningCount: number | null
    infoCount: number | null
    score: number | null
  }

  export type AnalysisReportSumAggregateOutputType = {
    totalFindings: number | null
    criticalCount: number | null
    errorCount: number | null
    warningCount: number | null
    infoCount: number | null
    score: number | null
  }

  export type AnalysisReportMinAggregateOutputType = {
    id: string | null
    analysisJobId: string | null
    summary: string | null
    totalFindings: number | null
    criticalCount: number | null
    errorCount: number | null
    warningCount: number | null
    infoCount: number | null
    score: number | null
    gateResult: $Enums.QualityGateResult | null
    createdAt: Date | null
  }

  export type AnalysisReportMaxAggregateOutputType = {
    id: string | null
    analysisJobId: string | null
    summary: string | null
    totalFindings: number | null
    criticalCount: number | null
    errorCount: number | null
    warningCount: number | null
    infoCount: number | null
    score: number | null
    gateResult: $Enums.QualityGateResult | null
    createdAt: Date | null
  }

  export type AnalysisReportCountAggregateOutputType = {
    id: number
    analysisJobId: number
    summary: number
    totalFindings: number
    criticalCount: number
    errorCount: number
    warningCount: number
    infoCount: number
    score: number
    gateResult: number
    rawOutput: number
    createdAt: number
    _all: number
  }


  export type AnalysisReportAvgAggregateInputType = {
    totalFindings?: true
    criticalCount?: true
    errorCount?: true
    warningCount?: true
    infoCount?: true
    score?: true
  }

  export type AnalysisReportSumAggregateInputType = {
    totalFindings?: true
    criticalCount?: true
    errorCount?: true
    warningCount?: true
    infoCount?: true
    score?: true
  }

  export type AnalysisReportMinAggregateInputType = {
    id?: true
    analysisJobId?: true
    summary?: true
    totalFindings?: true
    criticalCount?: true
    errorCount?: true
    warningCount?: true
    infoCount?: true
    score?: true
    gateResult?: true
    createdAt?: true
  }

  export type AnalysisReportMaxAggregateInputType = {
    id?: true
    analysisJobId?: true
    summary?: true
    totalFindings?: true
    criticalCount?: true
    errorCount?: true
    warningCount?: true
    infoCount?: true
    score?: true
    gateResult?: true
    createdAt?: true
  }

  export type AnalysisReportCountAggregateInputType = {
    id?: true
    analysisJobId?: true
    summary?: true
    totalFindings?: true
    criticalCount?: true
    errorCount?: true
    warningCount?: true
    infoCount?: true
    score?: true
    gateResult?: true
    rawOutput?: true
    createdAt?: true
    _all?: true
  }

  export type AnalysisReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisReport to aggregate.
     */
    where?: AnalysisReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisReports to fetch.
     */
    orderBy?: AnalysisReportOrderByWithRelationInput | AnalysisReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalysisReports
    **/
    _count?: true | AnalysisReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisReportMaxAggregateInputType
  }

  export type GetAnalysisReportAggregateType<T extends AnalysisReportAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysisReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysisReport[P]>
      : GetScalarType<T[P], AggregateAnalysisReport[P]>
  }




  export type AnalysisReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisReportWhereInput
    orderBy?: AnalysisReportOrderByWithAggregationInput | AnalysisReportOrderByWithAggregationInput[]
    by: AnalysisReportScalarFieldEnum[] | AnalysisReportScalarFieldEnum
    having?: AnalysisReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisReportCountAggregateInputType | true
    _avg?: AnalysisReportAvgAggregateInputType
    _sum?: AnalysisReportSumAggregateInputType
    _min?: AnalysisReportMinAggregateInputType
    _max?: AnalysisReportMaxAggregateInputType
  }

  export type AnalysisReportGroupByOutputType = {
    id: string
    analysisJobId: string
    summary: string
    totalFindings: number
    criticalCount: number
    errorCount: number
    warningCount: number
    infoCount: number
    score: number | null
    gateResult: $Enums.QualityGateResult
    rawOutput: JsonValue | null
    createdAt: Date
    _count: AnalysisReportCountAggregateOutputType | null
    _avg: AnalysisReportAvgAggregateOutputType | null
    _sum: AnalysisReportSumAggregateOutputType | null
    _min: AnalysisReportMinAggregateOutputType | null
    _max: AnalysisReportMaxAggregateOutputType | null
  }

  type GetAnalysisReportGroupByPayload<T extends AnalysisReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisReportGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisReportGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    analysisJobId?: boolean
    summary?: boolean
    totalFindings?: boolean
    criticalCount?: boolean
    errorCount?: boolean
    warningCount?: boolean
    infoCount?: boolean
    score?: boolean
    gateResult?: boolean
    rawOutput?: boolean
    createdAt?: boolean
    analysisJob?: boolean | AnalysisJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisReport"]>

  export type AnalysisReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    analysisJobId?: boolean
    summary?: boolean
    totalFindings?: boolean
    criticalCount?: boolean
    errorCount?: boolean
    warningCount?: boolean
    infoCount?: boolean
    score?: boolean
    gateResult?: boolean
    rawOutput?: boolean
    createdAt?: boolean
    analysisJob?: boolean | AnalysisJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisReport"]>

  export type AnalysisReportSelectScalar = {
    id?: boolean
    analysisJobId?: boolean
    summary?: boolean
    totalFindings?: boolean
    criticalCount?: boolean
    errorCount?: boolean
    warningCount?: boolean
    infoCount?: boolean
    score?: boolean
    gateResult?: boolean
    rawOutput?: boolean
    createdAt?: boolean
  }

  export type AnalysisReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analysisJob?: boolean | AnalysisJobDefaultArgs<ExtArgs>
  }
  export type AnalysisReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analysisJob?: boolean | AnalysisJobDefaultArgs<ExtArgs>
  }

  export type $AnalysisReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalysisReport"
    objects: {
      analysisJob: Prisma.$AnalysisJobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      analysisJobId: string
      summary: string
      totalFindings: number
      criticalCount: number
      errorCount: number
      warningCount: number
      infoCount: number
      score: number | null
      gateResult: $Enums.QualityGateResult
      rawOutput: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["analysisReport"]>
    composites: {}
  }

  type AnalysisReportGetPayload<S extends boolean | null | undefined | AnalysisReportDefaultArgs> = $Result.GetResult<Prisma.$AnalysisReportPayload, S>

  type AnalysisReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnalysisReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnalysisReportCountAggregateInputType | true
    }

  export interface AnalysisReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalysisReport'], meta: { name: 'AnalysisReport' } }
    /**
     * Find zero or one AnalysisReport that matches the filter.
     * @param {AnalysisReportFindUniqueArgs} args - Arguments to find a AnalysisReport
     * @example
     * // Get one AnalysisReport
     * const analysisReport = await prisma.analysisReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisReportFindUniqueArgs>(args: SelectSubset<T, AnalysisReportFindUniqueArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AnalysisReport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnalysisReportFindUniqueOrThrowArgs} args - Arguments to find a AnalysisReport
     * @example
     * // Get one AnalysisReport
     * const analysisReport = await prisma.analysisReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisReportFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AnalysisReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportFindFirstArgs} args - Arguments to find a AnalysisReport
     * @example
     * // Get one AnalysisReport
     * const analysisReport = await prisma.analysisReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisReportFindFirstArgs>(args?: SelectSubset<T, AnalysisReportFindFirstArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AnalysisReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportFindFirstOrThrowArgs} args - Arguments to find a AnalysisReport
     * @example
     * // Get one AnalysisReport
     * const analysisReport = await prisma.analysisReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisReportFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AnalysisReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalysisReports
     * const analysisReports = await prisma.analysisReport.findMany()
     * 
     * // Get first 10 AnalysisReports
     * const analysisReports = await prisma.analysisReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisReportWithIdOnly = await prisma.analysisReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisReportFindManyArgs>(args?: SelectSubset<T, AnalysisReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AnalysisReport.
     * @param {AnalysisReportCreateArgs} args - Arguments to create a AnalysisReport.
     * @example
     * // Create one AnalysisReport
     * const AnalysisReport = await prisma.analysisReport.create({
     *   data: {
     *     // ... data to create a AnalysisReport
     *   }
     * })
     * 
     */
    create<T extends AnalysisReportCreateArgs>(args: SelectSubset<T, AnalysisReportCreateArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AnalysisReports.
     * @param {AnalysisReportCreateManyArgs} args - Arguments to create many AnalysisReports.
     * @example
     * // Create many AnalysisReports
     * const analysisReport = await prisma.analysisReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisReportCreateManyArgs>(args?: SelectSubset<T, AnalysisReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalysisReports and returns the data saved in the database.
     * @param {AnalysisReportCreateManyAndReturnArgs} args - Arguments to create many AnalysisReports.
     * @example
     * // Create many AnalysisReports
     * const analysisReport = await prisma.analysisReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalysisReports and only return the `id`
     * const analysisReportWithIdOnly = await prisma.analysisReport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisReportCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AnalysisReport.
     * @param {AnalysisReportDeleteArgs} args - Arguments to delete one AnalysisReport.
     * @example
     * // Delete one AnalysisReport
     * const AnalysisReport = await prisma.analysisReport.delete({
     *   where: {
     *     // ... filter to delete one AnalysisReport
     *   }
     * })
     * 
     */
    delete<T extends AnalysisReportDeleteArgs>(args: SelectSubset<T, AnalysisReportDeleteArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AnalysisReport.
     * @param {AnalysisReportUpdateArgs} args - Arguments to update one AnalysisReport.
     * @example
     * // Update one AnalysisReport
     * const analysisReport = await prisma.analysisReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisReportUpdateArgs>(args: SelectSubset<T, AnalysisReportUpdateArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AnalysisReports.
     * @param {AnalysisReportDeleteManyArgs} args - Arguments to filter AnalysisReports to delete.
     * @example
     * // Delete a few AnalysisReports
     * const { count } = await prisma.analysisReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisReportDeleteManyArgs>(args?: SelectSubset<T, AnalysisReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalysisReports
     * const analysisReport = await prisma.analysisReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisReportUpdateManyArgs>(args: SelectSubset<T, AnalysisReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnalysisReport.
     * @param {AnalysisReportUpsertArgs} args - Arguments to update or create a AnalysisReport.
     * @example
     * // Update or create a AnalysisReport
     * const analysisReport = await prisma.analysisReport.upsert({
     *   create: {
     *     // ... data to create a AnalysisReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalysisReport we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisReportUpsertArgs>(args: SelectSubset<T, AnalysisReportUpsertArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AnalysisReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportCountArgs} args - Arguments to filter AnalysisReports to count.
     * @example
     * // Count the number of AnalysisReports
     * const count = await prisma.analysisReport.count({
     *   where: {
     *     // ... the filter for the AnalysisReports we want to count
     *   }
     * })
    **/
    count<T extends AnalysisReportCountArgs>(
      args?: Subset<T, AnalysisReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalysisReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalysisReportAggregateArgs>(args: Subset<T, AnalysisReportAggregateArgs>): Prisma.PrismaPromise<GetAnalysisReportAggregateType<T>>

    /**
     * Group by AnalysisReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportGroupByArgs} args - Group by arguments.
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
      T extends AnalysisReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisReportGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalysisReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalysisReport model
   */
  readonly fields: AnalysisReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalysisReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analysisJob<T extends AnalysisJobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisJobDefaultArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AnalysisReport model
   */ 
  interface AnalysisReportFieldRefs {
    readonly id: FieldRef<"AnalysisReport", 'String'>
    readonly analysisJobId: FieldRef<"AnalysisReport", 'String'>
    readonly summary: FieldRef<"AnalysisReport", 'String'>
    readonly totalFindings: FieldRef<"AnalysisReport", 'Int'>
    readonly criticalCount: FieldRef<"AnalysisReport", 'Int'>
    readonly errorCount: FieldRef<"AnalysisReport", 'Int'>
    readonly warningCount: FieldRef<"AnalysisReport", 'Int'>
    readonly infoCount: FieldRef<"AnalysisReport", 'Int'>
    readonly score: FieldRef<"AnalysisReport", 'Float'>
    readonly gateResult: FieldRef<"AnalysisReport", 'QualityGateResult'>
    readonly rawOutput: FieldRef<"AnalysisReport", 'Json'>
    readonly createdAt: FieldRef<"AnalysisReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalysisReport findUnique
   */
  export type AnalysisReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisReport to fetch.
     */
    where: AnalysisReportWhereUniqueInput
  }

  /**
   * AnalysisReport findUniqueOrThrow
   */
  export type AnalysisReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisReport to fetch.
     */
    where: AnalysisReportWhereUniqueInput
  }

  /**
   * AnalysisReport findFirst
   */
  export type AnalysisReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisReport to fetch.
     */
    where?: AnalysisReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisReports to fetch.
     */
    orderBy?: AnalysisReportOrderByWithRelationInput | AnalysisReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisReports.
     */
    cursor?: AnalysisReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisReports.
     */
    distinct?: AnalysisReportScalarFieldEnum | AnalysisReportScalarFieldEnum[]
  }

  /**
   * AnalysisReport findFirstOrThrow
   */
  export type AnalysisReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisReport to fetch.
     */
    where?: AnalysisReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisReports to fetch.
     */
    orderBy?: AnalysisReportOrderByWithRelationInput | AnalysisReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisReports.
     */
    cursor?: AnalysisReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisReports.
     */
    distinct?: AnalysisReportScalarFieldEnum | AnalysisReportScalarFieldEnum[]
  }

  /**
   * AnalysisReport findMany
   */
  export type AnalysisReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisReports to fetch.
     */
    where?: AnalysisReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisReports to fetch.
     */
    orderBy?: AnalysisReportOrderByWithRelationInput | AnalysisReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalysisReports.
     */
    cursor?: AnalysisReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisReports.
     */
    skip?: number
    distinct?: AnalysisReportScalarFieldEnum | AnalysisReportScalarFieldEnum[]
  }

  /**
   * AnalysisReport create
   */
  export type AnalysisReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalysisReport.
     */
    data: XOR<AnalysisReportCreateInput, AnalysisReportUncheckedCreateInput>
  }

  /**
   * AnalysisReport createMany
   */
  export type AnalysisReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalysisReports.
     */
    data: AnalysisReportCreateManyInput | AnalysisReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisReport createManyAndReturn
   */
  export type AnalysisReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AnalysisReports.
     */
    data: AnalysisReportCreateManyInput | AnalysisReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisReport update
   */
  export type AnalysisReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalysisReport.
     */
    data: XOR<AnalysisReportUpdateInput, AnalysisReportUncheckedUpdateInput>
    /**
     * Choose, which AnalysisReport to update.
     */
    where: AnalysisReportWhereUniqueInput
  }

  /**
   * AnalysisReport updateMany
   */
  export type AnalysisReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalysisReports.
     */
    data: XOR<AnalysisReportUpdateManyMutationInput, AnalysisReportUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisReports to update
     */
    where?: AnalysisReportWhereInput
  }

  /**
   * AnalysisReport upsert
   */
  export type AnalysisReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalysisReport to update in case it exists.
     */
    where: AnalysisReportWhereUniqueInput
    /**
     * In case the AnalysisReport found by the `where` argument doesn't exist, create a new AnalysisReport with this data.
     */
    create: XOR<AnalysisReportCreateInput, AnalysisReportUncheckedCreateInput>
    /**
     * In case the AnalysisReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisReportUpdateInput, AnalysisReportUncheckedUpdateInput>
  }

  /**
   * AnalysisReport delete
   */
  export type AnalysisReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter which AnalysisReport to delete.
     */
    where: AnalysisReportWhereUniqueInput
  }

  /**
   * AnalysisReport deleteMany
   */
  export type AnalysisReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisReports to delete
     */
    where?: AnalysisReportWhereInput
  }

  /**
   * AnalysisReport without action
   */
  export type AnalysisReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
  }


  /**
   * Model WebhookEvent
   */

  export type AggregateWebhookEvent = {
    _count: WebhookEventCountAggregateOutputType | null
    _min: WebhookEventMinAggregateOutputType | null
    _max: WebhookEventMaxAggregateOutputType | null
  }

  export type WebhookEventMinAggregateOutputType = {
    id: string | null
    eventType: string | null
    deliveryId: string | null
    processed: boolean | null
    processedAt: Date | null
    error: string | null
    createdAt: Date | null
  }

  export type WebhookEventMaxAggregateOutputType = {
    id: string | null
    eventType: string | null
    deliveryId: string | null
    processed: boolean | null
    processedAt: Date | null
    error: string | null
    createdAt: Date | null
  }

  export type WebhookEventCountAggregateOutputType = {
    id: number
    eventType: number
    deliveryId: number
    payload: number
    processed: number
    processedAt: number
    error: number
    createdAt: number
    _all: number
  }


  export type WebhookEventMinAggregateInputType = {
    id?: true
    eventType?: true
    deliveryId?: true
    processed?: true
    processedAt?: true
    error?: true
    createdAt?: true
  }

  export type WebhookEventMaxAggregateInputType = {
    id?: true
    eventType?: true
    deliveryId?: true
    processed?: true
    processedAt?: true
    error?: true
    createdAt?: true
  }

  export type WebhookEventCountAggregateInputType = {
    id?: true
    eventType?: true
    deliveryId?: true
    payload?: true
    processed?: true
    processedAt?: true
    error?: true
    createdAt?: true
    _all?: true
  }

  export type WebhookEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEvent to aggregate.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookEvents
    **/
    _count?: true | WebhookEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookEventMaxAggregateInputType
  }

  export type GetWebhookEventAggregateType<T extends WebhookEventAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookEvent[P]>
      : GetScalarType<T[P], AggregateWebhookEvent[P]>
  }




  export type WebhookEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookEventWhereInput
    orderBy?: WebhookEventOrderByWithAggregationInput | WebhookEventOrderByWithAggregationInput[]
    by: WebhookEventScalarFieldEnum[] | WebhookEventScalarFieldEnum
    having?: WebhookEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookEventCountAggregateInputType | true
    _min?: WebhookEventMinAggregateInputType
    _max?: WebhookEventMaxAggregateInputType
  }

  export type WebhookEventGroupByOutputType = {
    id: string
    eventType: string
    deliveryId: string
    payload: JsonValue
    processed: boolean
    processedAt: Date | null
    error: string | null
    createdAt: Date
    _count: WebhookEventCountAggregateOutputType | null
    _min: WebhookEventMinAggregateOutputType | null
    _max: WebhookEventMaxAggregateOutputType | null
  }

  type GetWebhookEventGroupByPayload<T extends WebhookEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookEventGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookEventGroupByOutputType[P]>
        }
      >
    >


  export type WebhookEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    deliveryId?: boolean
    payload?: boolean
    processed?: boolean
    processedAt?: boolean
    error?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    deliveryId?: boolean
    payload?: boolean
    processed?: boolean
    processedAt?: boolean
    error?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectScalar = {
    id?: boolean
    eventType?: boolean
    deliveryId?: boolean
    payload?: boolean
    processed?: boolean
    processedAt?: boolean
    error?: boolean
    createdAt?: boolean
  }


  export type $WebhookEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventType: string
      deliveryId: string
      payload: Prisma.JsonValue
      processed: boolean
      processedAt: Date | null
      error: string | null
      createdAt: Date
    }, ExtArgs["result"]["webhookEvent"]>
    composites: {}
  }

  type WebhookEventGetPayload<S extends boolean | null | undefined | WebhookEventDefaultArgs> = $Result.GetResult<Prisma.$WebhookEventPayload, S>

  type WebhookEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WebhookEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WebhookEventCountAggregateInputType | true
    }

  export interface WebhookEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookEvent'], meta: { name: 'WebhookEvent' } }
    /**
     * Find zero or one WebhookEvent that matches the filter.
     * @param {WebhookEventFindUniqueArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookEventFindUniqueArgs>(args: SelectSubset<T, WebhookEventFindUniqueArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WebhookEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WebhookEventFindUniqueOrThrowArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookEventFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WebhookEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindFirstArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookEventFindFirstArgs>(args?: SelectSubset<T, WebhookEventFindFirstArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WebhookEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindFirstOrThrowArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookEventFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WebhookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookEvents
     * const webhookEvents = await prisma.webhookEvent.findMany()
     * 
     * // Get first 10 WebhookEvents
     * const webhookEvents = await prisma.webhookEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookEventFindManyArgs>(args?: SelectSubset<T, WebhookEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WebhookEvent.
     * @param {WebhookEventCreateArgs} args - Arguments to create a WebhookEvent.
     * @example
     * // Create one WebhookEvent
     * const WebhookEvent = await prisma.webhookEvent.create({
     *   data: {
     *     // ... data to create a WebhookEvent
     *   }
     * })
     * 
     */
    create<T extends WebhookEventCreateArgs>(args: SelectSubset<T, WebhookEventCreateArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WebhookEvents.
     * @param {WebhookEventCreateManyArgs} args - Arguments to create many WebhookEvents.
     * @example
     * // Create many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookEventCreateManyArgs>(args?: SelectSubset<T, WebhookEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookEvents and returns the data saved in the database.
     * @param {WebhookEventCreateManyAndReturnArgs} args - Arguments to create many WebhookEvents.
     * @example
     * // Create many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookEvents and only return the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookEventCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WebhookEvent.
     * @param {WebhookEventDeleteArgs} args - Arguments to delete one WebhookEvent.
     * @example
     * // Delete one WebhookEvent
     * const WebhookEvent = await prisma.webhookEvent.delete({
     *   where: {
     *     // ... filter to delete one WebhookEvent
     *   }
     * })
     * 
     */
    delete<T extends WebhookEventDeleteArgs>(args: SelectSubset<T, WebhookEventDeleteArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WebhookEvent.
     * @param {WebhookEventUpdateArgs} args - Arguments to update one WebhookEvent.
     * @example
     * // Update one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookEventUpdateArgs>(args: SelectSubset<T, WebhookEventUpdateArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WebhookEvents.
     * @param {WebhookEventDeleteManyArgs} args - Arguments to filter WebhookEvents to delete.
     * @example
     * // Delete a few WebhookEvents
     * const { count } = await prisma.webhookEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookEventDeleteManyArgs>(args?: SelectSubset<T, WebhookEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookEventUpdateManyArgs>(args: SelectSubset<T, WebhookEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WebhookEvent.
     * @param {WebhookEventUpsertArgs} args - Arguments to update or create a WebhookEvent.
     * @example
     * // Update or create a WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.upsert({
     *   create: {
     *     // ... data to create a WebhookEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookEvent we want to update
     *   }
     * })
     */
    upsert<T extends WebhookEventUpsertArgs>(args: SelectSubset<T, WebhookEventUpsertArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventCountArgs} args - Arguments to filter WebhookEvents to count.
     * @example
     * // Count the number of WebhookEvents
     * const count = await prisma.webhookEvent.count({
     *   where: {
     *     // ... the filter for the WebhookEvents we want to count
     *   }
     * })
    **/
    count<T extends WebhookEventCountArgs>(
      args?: Subset<T, WebhookEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebhookEventAggregateArgs>(args: Subset<T, WebhookEventAggregateArgs>): Prisma.PrismaPromise<GetWebhookEventAggregateType<T>>

    /**
     * Group by WebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventGroupByArgs} args - Group by arguments.
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
      T extends WebhookEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookEventGroupByArgs['orderBy'] }
        : { orderBy?: WebhookEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebhookEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookEvent model
   */
  readonly fields: WebhookEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the WebhookEvent model
   */ 
  interface WebhookEventFieldRefs {
    readonly id: FieldRef<"WebhookEvent", 'String'>
    readonly eventType: FieldRef<"WebhookEvent", 'String'>
    readonly deliveryId: FieldRef<"WebhookEvent", 'String'>
    readonly payload: FieldRef<"WebhookEvent", 'Json'>
    readonly processed: FieldRef<"WebhookEvent", 'Boolean'>
    readonly processedAt: FieldRef<"WebhookEvent", 'DateTime'>
    readonly error: FieldRef<"WebhookEvent", 'String'>
    readonly createdAt: FieldRef<"WebhookEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookEvent findUnique
   */
  export type WebhookEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent findUniqueOrThrow
   */
  export type WebhookEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent findFirst
   */
  export type WebhookEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent findFirstOrThrow
   */
  export type WebhookEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent findMany
   */
  export type WebhookEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Filter, which WebhookEvents to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent create
   */
  export type WebhookEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * The data needed to create a WebhookEvent.
     */
    data: XOR<WebhookEventCreateInput, WebhookEventUncheckedCreateInput>
  }

  /**
   * WebhookEvent createMany
   */
  export type WebhookEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookEvents.
     */
    data: WebhookEventCreateManyInput | WebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookEvent createManyAndReturn
   */
  export type WebhookEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WebhookEvents.
     */
    data: WebhookEventCreateManyInput | WebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookEvent update
   */
  export type WebhookEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * The data needed to update a WebhookEvent.
     */
    data: XOR<WebhookEventUpdateInput, WebhookEventUncheckedUpdateInput>
    /**
     * Choose, which WebhookEvent to update.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent updateMany
   */
  export type WebhookEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookEvents.
     */
    data: XOR<WebhookEventUpdateManyMutationInput, WebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which WebhookEvents to update
     */
    where?: WebhookEventWhereInput
  }

  /**
   * WebhookEvent upsert
   */
  export type WebhookEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * The filter to search for the WebhookEvent to update in case it exists.
     */
    where: WebhookEventWhereUniqueInput
    /**
     * In case the WebhookEvent found by the `where` argument doesn't exist, create a new WebhookEvent with this data.
     */
    create: XOR<WebhookEventCreateInput, WebhookEventUncheckedCreateInput>
    /**
     * In case the WebhookEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookEventUpdateInput, WebhookEventUncheckedUpdateInput>
  }

  /**
   * WebhookEvent delete
   */
  export type WebhookEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Filter which WebhookEvent to delete.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent deleteMany
   */
  export type WebhookEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEvents to delete
     */
    where?: WebhookEventWhereInput
  }

  /**
   * WebhookEvent without action
   */
  export type WebhookEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
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


  export const RepositoryScalarFieldEnum: {
    id: 'id',
    githubId: 'githubId',
    owner: 'owner',
    name: 'name',
    fullName: 'fullName',
    defaultBranch: 'defaultBranch',
    installationId: 'installationId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RepositoryScalarFieldEnum = (typeof RepositoryScalarFieldEnum)[keyof typeof RepositoryScalarFieldEnum]


  export const AnalysisJobScalarFieldEnum: {
    id: 'id',
    repositoryId: 'repositoryId',
    prNumber: 'prNumber',
    prTitle: 'prTitle',
    commitSha: 'commitSha',
    baseSha: 'baseSha',
    headBranch: 'headBranch',
    baseBranch: 'baseBranch',
    status: 'status',
    gateResult: 'gateResult',
    triggeredBy: 'triggeredBy',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    errorMessage: 'errorMessage',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnalysisJobScalarFieldEnum = (typeof AnalysisJobScalarFieldEnum)[keyof typeof AnalysisJobScalarFieldEnum]


  export const FindingScalarFieldEnum: {
    id: 'id',
    analysisJobId: 'analysisJobId',
    filePath: 'filePath',
    lineStart: 'lineStart',
    lineEnd: 'lineEnd',
    severity: 'severity',
    ruleId: 'ruleId',
    message: 'message',
    suggestion: 'suggestion',
    category: 'category',
    createdAt: 'createdAt'
  };

  export type FindingScalarFieldEnum = (typeof FindingScalarFieldEnum)[keyof typeof FindingScalarFieldEnum]


  export const AnalysisReportScalarFieldEnum: {
    id: 'id',
    analysisJobId: 'analysisJobId',
    summary: 'summary',
    totalFindings: 'totalFindings',
    criticalCount: 'criticalCount',
    errorCount: 'errorCount',
    warningCount: 'warningCount',
    infoCount: 'infoCount',
    score: 'score',
    gateResult: 'gateResult',
    rawOutput: 'rawOutput',
    createdAt: 'createdAt'
  };

  export type AnalysisReportScalarFieldEnum = (typeof AnalysisReportScalarFieldEnum)[keyof typeof AnalysisReportScalarFieldEnum]


  export const WebhookEventScalarFieldEnum: {
    id: 'id',
    eventType: 'eventType',
    deliveryId: 'deliveryId',
    payload: 'payload',
    processed: 'processed',
    processedAt: 'processedAt',
    error: 'error',
    createdAt: 'createdAt'
  };

  export type WebhookEventScalarFieldEnum = (typeof WebhookEventScalarFieldEnum)[keyof typeof WebhookEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AnalysisStatus'
   */
  export type EnumAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisStatus'>
    


  /**
   * Reference to a field of type 'AnalysisStatus[]'
   */
  export type ListEnumAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisStatus[]'>
    


  /**
   * Reference to a field of type 'QualityGateResult'
   */
  export type EnumQualityGateResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QualityGateResult'>
    


  /**
   * Reference to a field of type 'QualityGateResult[]'
   */
  export type ListEnumQualityGateResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QualityGateResult[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    


  /**
   * Reference to a field of type 'Severity[]'
   */
  export type ListEnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RepositoryWhereInput = {
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    id?: StringFilter<"Repository"> | string
    githubId?: IntFilter<"Repository"> | number
    owner?: StringFilter<"Repository"> | string
    name?: StringFilter<"Repository"> | string
    fullName?: StringFilter<"Repository"> | string
    defaultBranch?: StringFilter<"Repository"> | string
    installationId?: IntNullableFilter<"Repository"> | number | null
    isActive?: BoolFilter<"Repository"> | boolean
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    updatedAt?: DateTimeFilter<"Repository"> | Date | string
    analyses?: AnalysisJobListRelationFilter
  }

  export type RepositoryOrderByWithRelationInput = {
    id?: SortOrder
    githubId?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    defaultBranch?: SortOrder
    installationId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    analyses?: AnalysisJobOrderByRelationAggregateInput
  }

  export type RepositoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    githubId?: number
    fullName?: string
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    owner?: StringFilter<"Repository"> | string
    name?: StringFilter<"Repository"> | string
    defaultBranch?: StringFilter<"Repository"> | string
    installationId?: IntNullableFilter<"Repository"> | number | null
    isActive?: BoolFilter<"Repository"> | boolean
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    updatedAt?: DateTimeFilter<"Repository"> | Date | string
    analyses?: AnalysisJobListRelationFilter
  }, "id" | "githubId" | "fullName">

  export type RepositoryOrderByWithAggregationInput = {
    id?: SortOrder
    githubId?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    defaultBranch?: SortOrder
    installationId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RepositoryCountOrderByAggregateInput
    _avg?: RepositoryAvgOrderByAggregateInput
    _max?: RepositoryMaxOrderByAggregateInput
    _min?: RepositoryMinOrderByAggregateInput
    _sum?: RepositorySumOrderByAggregateInput
  }

  export type RepositoryScalarWhereWithAggregatesInput = {
    AND?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    OR?: RepositoryScalarWhereWithAggregatesInput[]
    NOT?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Repository"> | string
    githubId?: IntWithAggregatesFilter<"Repository"> | number
    owner?: StringWithAggregatesFilter<"Repository"> | string
    name?: StringWithAggregatesFilter<"Repository"> | string
    fullName?: StringWithAggregatesFilter<"Repository"> | string
    defaultBranch?: StringWithAggregatesFilter<"Repository"> | string
    installationId?: IntNullableWithAggregatesFilter<"Repository"> | number | null
    isActive?: BoolWithAggregatesFilter<"Repository"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Repository"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Repository"> | Date | string
  }

  export type AnalysisJobWhereInput = {
    AND?: AnalysisJobWhereInput | AnalysisJobWhereInput[]
    OR?: AnalysisJobWhereInput[]
    NOT?: AnalysisJobWhereInput | AnalysisJobWhereInput[]
    id?: StringFilter<"AnalysisJob"> | string
    repositoryId?: StringFilter<"AnalysisJob"> | string
    prNumber?: IntFilter<"AnalysisJob"> | number
    prTitle?: StringFilter<"AnalysisJob"> | string
    commitSha?: StringFilter<"AnalysisJob"> | string
    baseSha?: StringFilter<"AnalysisJob"> | string
    headBranch?: StringFilter<"AnalysisJob"> | string
    baseBranch?: StringFilter<"AnalysisJob"> | string
    status?: EnumAnalysisStatusFilter<"AnalysisJob"> | $Enums.AnalysisStatus
    gateResult?: EnumQualityGateResultNullableFilter<"AnalysisJob"> | $Enums.QualityGateResult | null
    triggeredBy?: StringNullableFilter<"AnalysisJob"> | string | null
    startedAt?: DateTimeNullableFilter<"AnalysisJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"AnalysisJob"> | Date | string | null
    errorMessage?: StringNullableFilter<"AnalysisJob"> | string | null
    metadata?: JsonNullableFilter<"AnalysisJob">
    createdAt?: DateTimeFilter<"AnalysisJob"> | Date | string
    updatedAt?: DateTimeFilter<"AnalysisJob"> | Date | string
    repository?: XOR<RepositoryRelationFilter, RepositoryWhereInput>
    findings?: FindingListRelationFilter
    report?: XOR<AnalysisReportNullableRelationFilter, AnalysisReportWhereInput> | null
  }

  export type AnalysisJobOrderByWithRelationInput = {
    id?: SortOrder
    repositoryId?: SortOrder
    prNumber?: SortOrder
    prTitle?: SortOrder
    commitSha?: SortOrder
    baseSha?: SortOrder
    headBranch?: SortOrder
    baseBranch?: SortOrder
    status?: SortOrder
    gateResult?: SortOrderInput | SortOrder
    triggeredBy?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    repository?: RepositoryOrderByWithRelationInput
    findings?: FindingOrderByRelationAggregateInput
    report?: AnalysisReportOrderByWithRelationInput
  }

  export type AnalysisJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalysisJobWhereInput | AnalysisJobWhereInput[]
    OR?: AnalysisJobWhereInput[]
    NOT?: AnalysisJobWhereInput | AnalysisJobWhereInput[]
    repositoryId?: StringFilter<"AnalysisJob"> | string
    prNumber?: IntFilter<"AnalysisJob"> | number
    prTitle?: StringFilter<"AnalysisJob"> | string
    commitSha?: StringFilter<"AnalysisJob"> | string
    baseSha?: StringFilter<"AnalysisJob"> | string
    headBranch?: StringFilter<"AnalysisJob"> | string
    baseBranch?: StringFilter<"AnalysisJob"> | string
    status?: EnumAnalysisStatusFilter<"AnalysisJob"> | $Enums.AnalysisStatus
    gateResult?: EnumQualityGateResultNullableFilter<"AnalysisJob"> | $Enums.QualityGateResult | null
    triggeredBy?: StringNullableFilter<"AnalysisJob"> | string | null
    startedAt?: DateTimeNullableFilter<"AnalysisJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"AnalysisJob"> | Date | string | null
    errorMessage?: StringNullableFilter<"AnalysisJob"> | string | null
    metadata?: JsonNullableFilter<"AnalysisJob">
    createdAt?: DateTimeFilter<"AnalysisJob"> | Date | string
    updatedAt?: DateTimeFilter<"AnalysisJob"> | Date | string
    repository?: XOR<RepositoryRelationFilter, RepositoryWhereInput>
    findings?: FindingListRelationFilter
    report?: XOR<AnalysisReportNullableRelationFilter, AnalysisReportWhereInput> | null
  }, "id">

  export type AnalysisJobOrderByWithAggregationInput = {
    id?: SortOrder
    repositoryId?: SortOrder
    prNumber?: SortOrder
    prTitle?: SortOrder
    commitSha?: SortOrder
    baseSha?: SortOrder
    headBranch?: SortOrder
    baseBranch?: SortOrder
    status?: SortOrder
    gateResult?: SortOrderInput | SortOrder
    triggeredBy?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnalysisJobCountOrderByAggregateInput
    _avg?: AnalysisJobAvgOrderByAggregateInput
    _max?: AnalysisJobMaxOrderByAggregateInput
    _min?: AnalysisJobMinOrderByAggregateInput
    _sum?: AnalysisJobSumOrderByAggregateInput
  }

  export type AnalysisJobScalarWhereWithAggregatesInput = {
    AND?: AnalysisJobScalarWhereWithAggregatesInput | AnalysisJobScalarWhereWithAggregatesInput[]
    OR?: AnalysisJobScalarWhereWithAggregatesInput[]
    NOT?: AnalysisJobScalarWhereWithAggregatesInput | AnalysisJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalysisJob"> | string
    repositoryId?: StringWithAggregatesFilter<"AnalysisJob"> | string
    prNumber?: IntWithAggregatesFilter<"AnalysisJob"> | number
    prTitle?: StringWithAggregatesFilter<"AnalysisJob"> | string
    commitSha?: StringWithAggregatesFilter<"AnalysisJob"> | string
    baseSha?: StringWithAggregatesFilter<"AnalysisJob"> | string
    headBranch?: StringWithAggregatesFilter<"AnalysisJob"> | string
    baseBranch?: StringWithAggregatesFilter<"AnalysisJob"> | string
    status?: EnumAnalysisStatusWithAggregatesFilter<"AnalysisJob"> | $Enums.AnalysisStatus
    gateResult?: EnumQualityGateResultNullableWithAggregatesFilter<"AnalysisJob"> | $Enums.QualityGateResult | null
    triggeredBy?: StringNullableWithAggregatesFilter<"AnalysisJob"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"AnalysisJob"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"AnalysisJob"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"AnalysisJob"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"AnalysisJob">
    createdAt?: DateTimeWithAggregatesFilter<"AnalysisJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnalysisJob"> | Date | string
  }

  export type FindingWhereInput = {
    AND?: FindingWhereInput | FindingWhereInput[]
    OR?: FindingWhereInput[]
    NOT?: FindingWhereInput | FindingWhereInput[]
    id?: StringFilter<"Finding"> | string
    analysisJobId?: StringFilter<"Finding"> | string
    filePath?: StringFilter<"Finding"> | string
    lineStart?: IntNullableFilter<"Finding"> | number | null
    lineEnd?: IntNullableFilter<"Finding"> | number | null
    severity?: EnumSeverityFilter<"Finding"> | $Enums.Severity
    ruleId?: StringFilter<"Finding"> | string
    message?: StringFilter<"Finding"> | string
    suggestion?: StringNullableFilter<"Finding"> | string | null
    category?: StringNullableFilter<"Finding"> | string | null
    createdAt?: DateTimeFilter<"Finding"> | Date | string
    analysisJob?: XOR<AnalysisJobRelationFilter, AnalysisJobWhereInput>
  }

  export type FindingOrderByWithRelationInput = {
    id?: SortOrder
    analysisJobId?: SortOrder
    filePath?: SortOrder
    lineStart?: SortOrderInput | SortOrder
    lineEnd?: SortOrderInput | SortOrder
    severity?: SortOrder
    ruleId?: SortOrder
    message?: SortOrder
    suggestion?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    analysisJob?: AnalysisJobOrderByWithRelationInput
  }

  export type FindingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FindingWhereInput | FindingWhereInput[]
    OR?: FindingWhereInput[]
    NOT?: FindingWhereInput | FindingWhereInput[]
    analysisJobId?: StringFilter<"Finding"> | string
    filePath?: StringFilter<"Finding"> | string
    lineStart?: IntNullableFilter<"Finding"> | number | null
    lineEnd?: IntNullableFilter<"Finding"> | number | null
    severity?: EnumSeverityFilter<"Finding"> | $Enums.Severity
    ruleId?: StringFilter<"Finding"> | string
    message?: StringFilter<"Finding"> | string
    suggestion?: StringNullableFilter<"Finding"> | string | null
    category?: StringNullableFilter<"Finding"> | string | null
    createdAt?: DateTimeFilter<"Finding"> | Date | string
    analysisJob?: XOR<AnalysisJobRelationFilter, AnalysisJobWhereInput>
  }, "id">

  export type FindingOrderByWithAggregationInput = {
    id?: SortOrder
    analysisJobId?: SortOrder
    filePath?: SortOrder
    lineStart?: SortOrderInput | SortOrder
    lineEnd?: SortOrderInput | SortOrder
    severity?: SortOrder
    ruleId?: SortOrder
    message?: SortOrder
    suggestion?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FindingCountOrderByAggregateInput
    _avg?: FindingAvgOrderByAggregateInput
    _max?: FindingMaxOrderByAggregateInput
    _min?: FindingMinOrderByAggregateInput
    _sum?: FindingSumOrderByAggregateInput
  }

  export type FindingScalarWhereWithAggregatesInput = {
    AND?: FindingScalarWhereWithAggregatesInput | FindingScalarWhereWithAggregatesInput[]
    OR?: FindingScalarWhereWithAggregatesInput[]
    NOT?: FindingScalarWhereWithAggregatesInput | FindingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Finding"> | string
    analysisJobId?: StringWithAggregatesFilter<"Finding"> | string
    filePath?: StringWithAggregatesFilter<"Finding"> | string
    lineStart?: IntNullableWithAggregatesFilter<"Finding"> | number | null
    lineEnd?: IntNullableWithAggregatesFilter<"Finding"> | number | null
    severity?: EnumSeverityWithAggregatesFilter<"Finding"> | $Enums.Severity
    ruleId?: StringWithAggregatesFilter<"Finding"> | string
    message?: StringWithAggregatesFilter<"Finding"> | string
    suggestion?: StringNullableWithAggregatesFilter<"Finding"> | string | null
    category?: StringNullableWithAggregatesFilter<"Finding"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Finding"> | Date | string
  }

  export type AnalysisReportWhereInput = {
    AND?: AnalysisReportWhereInput | AnalysisReportWhereInput[]
    OR?: AnalysisReportWhereInput[]
    NOT?: AnalysisReportWhereInput | AnalysisReportWhereInput[]
    id?: StringFilter<"AnalysisReport"> | string
    analysisJobId?: StringFilter<"AnalysisReport"> | string
    summary?: StringFilter<"AnalysisReport"> | string
    totalFindings?: IntFilter<"AnalysisReport"> | number
    criticalCount?: IntFilter<"AnalysisReport"> | number
    errorCount?: IntFilter<"AnalysisReport"> | number
    warningCount?: IntFilter<"AnalysisReport"> | number
    infoCount?: IntFilter<"AnalysisReport"> | number
    score?: FloatNullableFilter<"AnalysisReport"> | number | null
    gateResult?: EnumQualityGateResultFilter<"AnalysisReport"> | $Enums.QualityGateResult
    rawOutput?: JsonNullableFilter<"AnalysisReport">
    createdAt?: DateTimeFilter<"AnalysisReport"> | Date | string
    analysisJob?: XOR<AnalysisJobRelationFilter, AnalysisJobWhereInput>
  }

  export type AnalysisReportOrderByWithRelationInput = {
    id?: SortOrder
    analysisJobId?: SortOrder
    summary?: SortOrder
    totalFindings?: SortOrder
    criticalCount?: SortOrder
    errorCount?: SortOrder
    warningCount?: SortOrder
    infoCount?: SortOrder
    score?: SortOrderInput | SortOrder
    gateResult?: SortOrder
    rawOutput?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    analysisJob?: AnalysisJobOrderByWithRelationInput
  }

  export type AnalysisReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    analysisJobId?: string
    AND?: AnalysisReportWhereInput | AnalysisReportWhereInput[]
    OR?: AnalysisReportWhereInput[]
    NOT?: AnalysisReportWhereInput | AnalysisReportWhereInput[]
    summary?: StringFilter<"AnalysisReport"> | string
    totalFindings?: IntFilter<"AnalysisReport"> | number
    criticalCount?: IntFilter<"AnalysisReport"> | number
    errorCount?: IntFilter<"AnalysisReport"> | number
    warningCount?: IntFilter<"AnalysisReport"> | number
    infoCount?: IntFilter<"AnalysisReport"> | number
    score?: FloatNullableFilter<"AnalysisReport"> | number | null
    gateResult?: EnumQualityGateResultFilter<"AnalysisReport"> | $Enums.QualityGateResult
    rawOutput?: JsonNullableFilter<"AnalysisReport">
    createdAt?: DateTimeFilter<"AnalysisReport"> | Date | string
    analysisJob?: XOR<AnalysisJobRelationFilter, AnalysisJobWhereInput>
  }, "id" | "analysisJobId">

  export type AnalysisReportOrderByWithAggregationInput = {
    id?: SortOrder
    analysisJobId?: SortOrder
    summary?: SortOrder
    totalFindings?: SortOrder
    criticalCount?: SortOrder
    errorCount?: SortOrder
    warningCount?: SortOrder
    infoCount?: SortOrder
    score?: SortOrderInput | SortOrder
    gateResult?: SortOrder
    rawOutput?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AnalysisReportCountOrderByAggregateInput
    _avg?: AnalysisReportAvgOrderByAggregateInput
    _max?: AnalysisReportMaxOrderByAggregateInput
    _min?: AnalysisReportMinOrderByAggregateInput
    _sum?: AnalysisReportSumOrderByAggregateInput
  }

  export type AnalysisReportScalarWhereWithAggregatesInput = {
    AND?: AnalysisReportScalarWhereWithAggregatesInput | AnalysisReportScalarWhereWithAggregatesInput[]
    OR?: AnalysisReportScalarWhereWithAggregatesInput[]
    NOT?: AnalysisReportScalarWhereWithAggregatesInput | AnalysisReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalysisReport"> | string
    analysisJobId?: StringWithAggregatesFilter<"AnalysisReport"> | string
    summary?: StringWithAggregatesFilter<"AnalysisReport"> | string
    totalFindings?: IntWithAggregatesFilter<"AnalysisReport"> | number
    criticalCount?: IntWithAggregatesFilter<"AnalysisReport"> | number
    errorCount?: IntWithAggregatesFilter<"AnalysisReport"> | number
    warningCount?: IntWithAggregatesFilter<"AnalysisReport"> | number
    infoCount?: IntWithAggregatesFilter<"AnalysisReport"> | number
    score?: FloatNullableWithAggregatesFilter<"AnalysisReport"> | number | null
    gateResult?: EnumQualityGateResultWithAggregatesFilter<"AnalysisReport"> | $Enums.QualityGateResult
    rawOutput?: JsonNullableWithAggregatesFilter<"AnalysisReport">
    createdAt?: DateTimeWithAggregatesFilter<"AnalysisReport"> | Date | string
  }

  export type WebhookEventWhereInput = {
    AND?: WebhookEventWhereInput | WebhookEventWhereInput[]
    OR?: WebhookEventWhereInput[]
    NOT?: WebhookEventWhereInput | WebhookEventWhereInput[]
    id?: StringFilter<"WebhookEvent"> | string
    eventType?: StringFilter<"WebhookEvent"> | string
    deliveryId?: StringFilter<"WebhookEvent"> | string
    payload?: JsonFilter<"WebhookEvent">
    processed?: BoolFilter<"WebhookEvent"> | boolean
    processedAt?: DateTimeNullableFilter<"WebhookEvent"> | Date | string | null
    error?: StringNullableFilter<"WebhookEvent"> | string | null
    createdAt?: DateTimeFilter<"WebhookEvent"> | Date | string
  }

  export type WebhookEventOrderByWithRelationInput = {
    id?: SortOrder
    eventType?: SortOrder
    deliveryId?: SortOrder
    payload?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type WebhookEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    deliveryId?: string
    AND?: WebhookEventWhereInput | WebhookEventWhereInput[]
    OR?: WebhookEventWhereInput[]
    NOT?: WebhookEventWhereInput | WebhookEventWhereInput[]
    eventType?: StringFilter<"WebhookEvent"> | string
    payload?: JsonFilter<"WebhookEvent">
    processed?: BoolFilter<"WebhookEvent"> | boolean
    processedAt?: DateTimeNullableFilter<"WebhookEvent"> | Date | string | null
    error?: StringNullableFilter<"WebhookEvent"> | string | null
    createdAt?: DateTimeFilter<"WebhookEvent"> | Date | string
  }, "id" | "deliveryId">

  export type WebhookEventOrderByWithAggregationInput = {
    id?: SortOrder
    eventType?: SortOrder
    deliveryId?: SortOrder
    payload?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WebhookEventCountOrderByAggregateInput
    _max?: WebhookEventMaxOrderByAggregateInput
    _min?: WebhookEventMinOrderByAggregateInput
  }

  export type WebhookEventScalarWhereWithAggregatesInput = {
    AND?: WebhookEventScalarWhereWithAggregatesInput | WebhookEventScalarWhereWithAggregatesInput[]
    OR?: WebhookEventScalarWhereWithAggregatesInput[]
    NOT?: WebhookEventScalarWhereWithAggregatesInput | WebhookEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookEvent"> | string
    eventType?: StringWithAggregatesFilter<"WebhookEvent"> | string
    deliveryId?: StringWithAggregatesFilter<"WebhookEvent"> | string
    payload?: JsonWithAggregatesFilter<"WebhookEvent">
    processed?: BoolWithAggregatesFilter<"WebhookEvent"> | boolean
    processedAt?: DateTimeNullableWithAggregatesFilter<"WebhookEvent"> | Date | string | null
    error?: StringNullableWithAggregatesFilter<"WebhookEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WebhookEvent"> | Date | string
  }

  export type RepositoryCreateInput = {
    id?: string
    githubId: number
    owner: string
    name: string
    fullName: string
    defaultBranch?: string
    installationId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisJobCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateInput = {
    id?: string
    githubId: number
    owner: string
    name: string
    fullName: string
    defaultBranch?: string
    installationId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisJobUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    defaultBranch?: StringFieldUpdateOperationsInput | string
    installationId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisJobUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    defaultBranch?: StringFieldUpdateOperationsInput | string
    installationId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisJobUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryCreateManyInput = {
    id?: string
    githubId: number
    owner: string
    name: string
    fullName: string
    defaultBranch?: string
    installationId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepositoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    defaultBranch?: StringFieldUpdateOperationsInput | string
    installationId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    defaultBranch?: StringFieldUpdateOperationsInput | string
    installationId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisJobCreateInput = {
    id?: string
    prNumber: number
    prTitle: string
    commitSha: string
    baseSha: string
    headBranch: string
    baseBranch: string
    status?: $Enums.AnalysisStatus
    gateResult?: $Enums.QualityGateResult | null
    triggeredBy?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    repository: RepositoryCreateNestedOneWithoutAnalysesInput
    findings?: FindingCreateNestedManyWithoutAnalysisJobInput
    report?: AnalysisReportCreateNestedOneWithoutAnalysisJobInput
  }

  export type AnalysisJobUncheckedCreateInput = {
    id?: string
    repositoryId: string
    prNumber: number
    prTitle: string
    commitSha: string
    baseSha: string
    headBranch: string
    baseBranch: string
    status?: $Enums.AnalysisStatus
    gateResult?: $Enums.QualityGateResult | null
    triggeredBy?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    findings?: FindingUncheckedCreateNestedManyWithoutAnalysisJobInput
    report?: AnalysisReportUncheckedCreateNestedOneWithoutAnalysisJobInput
  }

  export type AnalysisJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: StringFieldUpdateOperationsInput | string
    commitSha?: StringFieldUpdateOperationsInput | string
    baseSha?: StringFieldUpdateOperationsInput | string
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    gateResult?: NullableEnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult | null
    triggeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repository?: RepositoryUpdateOneRequiredWithoutAnalysesNestedInput
    findings?: FindingUpdateManyWithoutAnalysisJobNestedInput
    report?: AnalysisReportUpdateOneWithoutAnalysisJobNestedInput
  }

  export type AnalysisJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: StringFieldUpdateOperationsInput | string
    commitSha?: StringFieldUpdateOperationsInput | string
    baseSha?: StringFieldUpdateOperationsInput | string
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    gateResult?: NullableEnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult | null
    triggeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    findings?: FindingUncheckedUpdateManyWithoutAnalysisJobNestedInput
    report?: AnalysisReportUncheckedUpdateOneWithoutAnalysisJobNestedInput
  }

  export type AnalysisJobCreateManyInput = {
    id?: string
    repositoryId: string
    prNumber: number
    prTitle: string
    commitSha: string
    baseSha: string
    headBranch: string
    baseBranch: string
    status?: $Enums.AnalysisStatus
    gateResult?: $Enums.QualityGateResult | null
    triggeredBy?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalysisJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: StringFieldUpdateOperationsInput | string
    commitSha?: StringFieldUpdateOperationsInput | string
    baseSha?: StringFieldUpdateOperationsInput | string
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    gateResult?: NullableEnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult | null
    triggeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: StringFieldUpdateOperationsInput | string
    commitSha?: StringFieldUpdateOperationsInput | string
    baseSha?: StringFieldUpdateOperationsInput | string
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    gateResult?: NullableEnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult | null
    triggeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingCreateInput = {
    id?: string
    filePath: string
    lineStart?: number | null
    lineEnd?: number | null
    severity: $Enums.Severity
    ruleId: string
    message: string
    suggestion?: string | null
    category?: string | null
    createdAt?: Date | string
    analysisJob: AnalysisJobCreateNestedOneWithoutFindingsInput
  }

  export type FindingUncheckedCreateInput = {
    id?: string
    analysisJobId: string
    filePath: string
    lineStart?: number | null
    lineEnd?: number | null
    severity: $Enums.Severity
    ruleId: string
    message: string
    suggestion?: string | null
    category?: string | null
    createdAt?: Date | string
  }

  export type FindingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineStart?: NullableIntFieldUpdateOperationsInput | number | null
    lineEnd?: NullableIntFieldUpdateOperationsInput | number | null
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    ruleId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analysisJob?: AnalysisJobUpdateOneRequiredWithoutFindingsNestedInput
  }

  export type FindingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisJobId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineStart?: NullableIntFieldUpdateOperationsInput | number | null
    lineEnd?: NullableIntFieldUpdateOperationsInput | number | null
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    ruleId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingCreateManyInput = {
    id?: string
    analysisJobId: string
    filePath: string
    lineStart?: number | null
    lineEnd?: number | null
    severity: $Enums.Severity
    ruleId: string
    message: string
    suggestion?: string | null
    category?: string | null
    createdAt?: Date | string
  }

  export type FindingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineStart?: NullableIntFieldUpdateOperationsInput | number | null
    lineEnd?: NullableIntFieldUpdateOperationsInput | number | null
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    ruleId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisJobId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineStart?: NullableIntFieldUpdateOperationsInput | number | null
    lineEnd?: NullableIntFieldUpdateOperationsInput | number | null
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    ruleId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisReportCreateInput = {
    id?: string
    summary: string
    totalFindings?: number
    criticalCount?: number
    errorCount?: number
    warningCount?: number
    infoCount?: number
    score?: number | null
    gateResult: $Enums.QualityGateResult
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    analysisJob: AnalysisJobCreateNestedOneWithoutReportInput
  }

  export type AnalysisReportUncheckedCreateInput = {
    id?: string
    analysisJobId: string
    summary: string
    totalFindings?: number
    criticalCount?: number
    errorCount?: number
    warningCount?: number
    infoCount?: number
    score?: number | null
    gateResult: $Enums.QualityGateResult
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalysisReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    totalFindings?: IntFieldUpdateOperationsInput | number
    criticalCount?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    warningCount?: IntFieldUpdateOperationsInput | number
    infoCount?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    gateResult?: EnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analysisJob?: AnalysisJobUpdateOneRequiredWithoutReportNestedInput
  }

  export type AnalysisReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisJobId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    totalFindings?: IntFieldUpdateOperationsInput | number
    criticalCount?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    warningCount?: IntFieldUpdateOperationsInput | number
    infoCount?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    gateResult?: EnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisReportCreateManyInput = {
    id?: string
    analysisJobId: string
    summary: string
    totalFindings?: number
    criticalCount?: number
    errorCount?: number
    warningCount?: number
    infoCount?: number
    score?: number | null
    gateResult: $Enums.QualityGateResult
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalysisReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    totalFindings?: IntFieldUpdateOperationsInput | number
    criticalCount?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    warningCount?: IntFieldUpdateOperationsInput | number
    infoCount?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    gateResult?: EnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisJobId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    totalFindings?: IntFieldUpdateOperationsInput | number
    criticalCount?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    warningCount?: IntFieldUpdateOperationsInput | number
    infoCount?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    gateResult?: EnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventCreateInput = {
    id?: string
    eventType: string
    deliveryId: string
    payload: JsonNullValueInput | InputJsonValue
    processed?: boolean
    processedAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
  }

  export type WebhookEventUncheckedCreateInput = {
    id?: string
    eventType: string
    deliveryId: string
    payload: JsonNullValueInput | InputJsonValue
    processed?: boolean
    processedAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
  }

  export type WebhookEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventCreateManyInput = {
    id?: string
    eventType: string
    deliveryId: string
    payload: JsonNullValueInput | InputJsonValue
    processed?: boolean
    processedAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
  }

  export type WebhookEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    deliveryId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type AnalysisJobListRelationFilter = {
    every?: AnalysisJobWhereInput
    some?: AnalysisJobWhereInput
    none?: AnalysisJobWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnalysisJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepositoryCountOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    defaultBranch?: SortOrder
    installationId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepositoryAvgOrderByAggregateInput = {
    githubId?: SortOrder
    installationId?: SortOrder
  }

  export type RepositoryMaxOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    defaultBranch?: SortOrder
    installationId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepositoryMinOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    defaultBranch?: SortOrder
    installationId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepositorySumOrderByAggregateInput = {
    githubId?: SortOrder
    installationId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumAnalysisStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusFilter<$PrismaModel> | $Enums.AnalysisStatus
  }

  export type EnumQualityGateResultNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.QualityGateResult | EnumQualityGateResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumQualityGateResultNullableFilter<$PrismaModel> | $Enums.QualityGateResult | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RepositoryRelationFilter = {
    is?: RepositoryWhereInput
    isNot?: RepositoryWhereInput
  }

  export type FindingListRelationFilter = {
    every?: FindingWhereInput
    some?: FindingWhereInput
    none?: FindingWhereInput
  }

  export type AnalysisReportNullableRelationFilter = {
    is?: AnalysisReportWhereInput | null
    isNot?: AnalysisReportWhereInput | null
  }

  export type FindingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalysisJobCountOrderByAggregateInput = {
    id?: SortOrder
    repositoryId?: SortOrder
    prNumber?: SortOrder
    prTitle?: SortOrder
    commitSha?: SortOrder
    baseSha?: SortOrder
    headBranch?: SortOrder
    baseBranch?: SortOrder
    status?: SortOrder
    gateResult?: SortOrder
    triggeredBy?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    errorMessage?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalysisJobAvgOrderByAggregateInput = {
    prNumber?: SortOrder
  }

  export type AnalysisJobMaxOrderByAggregateInput = {
    id?: SortOrder
    repositoryId?: SortOrder
    prNumber?: SortOrder
    prTitle?: SortOrder
    commitSha?: SortOrder
    baseSha?: SortOrder
    headBranch?: SortOrder
    baseBranch?: SortOrder
    status?: SortOrder
    gateResult?: SortOrder
    triggeredBy?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalysisJobMinOrderByAggregateInput = {
    id?: SortOrder
    repositoryId?: SortOrder
    prNumber?: SortOrder
    prTitle?: SortOrder
    commitSha?: SortOrder
    baseSha?: SortOrder
    headBranch?: SortOrder
    baseBranch?: SortOrder
    status?: SortOrder
    gateResult?: SortOrder
    triggeredBy?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalysisJobSumOrderByAggregateInput = {
    prNumber?: SortOrder
  }

  export type EnumAnalysisStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisStatusFilter<$PrismaModel>
    _max?: NestedEnumAnalysisStatusFilter<$PrismaModel>
  }

  export type EnumQualityGateResultNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QualityGateResult | EnumQualityGateResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumQualityGateResultNullableWithAggregatesFilter<$PrismaModel> | $Enums.QualityGateResult | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumQualityGateResultNullableFilter<$PrismaModel>
    _max?: NestedEnumQualityGateResultNullableFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type AnalysisJobRelationFilter = {
    is?: AnalysisJobWhereInput
    isNot?: AnalysisJobWhereInput
  }

  export type FindingCountOrderByAggregateInput = {
    id?: SortOrder
    analysisJobId?: SortOrder
    filePath?: SortOrder
    lineStart?: SortOrder
    lineEnd?: SortOrder
    severity?: SortOrder
    ruleId?: SortOrder
    message?: SortOrder
    suggestion?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type FindingAvgOrderByAggregateInput = {
    lineStart?: SortOrder
    lineEnd?: SortOrder
  }

  export type FindingMaxOrderByAggregateInput = {
    id?: SortOrder
    analysisJobId?: SortOrder
    filePath?: SortOrder
    lineStart?: SortOrder
    lineEnd?: SortOrder
    severity?: SortOrder
    ruleId?: SortOrder
    message?: SortOrder
    suggestion?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type FindingMinOrderByAggregateInput = {
    id?: SortOrder
    analysisJobId?: SortOrder
    filePath?: SortOrder
    lineStart?: SortOrder
    lineEnd?: SortOrder
    severity?: SortOrder
    ruleId?: SortOrder
    message?: SortOrder
    suggestion?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type FindingSumOrderByAggregateInput = {
    lineStart?: SortOrder
    lineEnd?: SortOrder
  }

  export type EnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
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

  export type EnumQualityGateResultFilter<$PrismaModel = never> = {
    equals?: $Enums.QualityGateResult | EnumQualityGateResultFieldRefInput<$PrismaModel>
    in?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityGateResultFilter<$PrismaModel> | $Enums.QualityGateResult
  }

  export type AnalysisReportCountOrderByAggregateInput = {
    id?: SortOrder
    analysisJobId?: SortOrder
    summary?: SortOrder
    totalFindings?: SortOrder
    criticalCount?: SortOrder
    errorCount?: SortOrder
    warningCount?: SortOrder
    infoCount?: SortOrder
    score?: SortOrder
    gateResult?: SortOrder
    rawOutput?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisReportAvgOrderByAggregateInput = {
    totalFindings?: SortOrder
    criticalCount?: SortOrder
    errorCount?: SortOrder
    warningCount?: SortOrder
    infoCount?: SortOrder
    score?: SortOrder
  }

  export type AnalysisReportMaxOrderByAggregateInput = {
    id?: SortOrder
    analysisJobId?: SortOrder
    summary?: SortOrder
    totalFindings?: SortOrder
    criticalCount?: SortOrder
    errorCount?: SortOrder
    warningCount?: SortOrder
    infoCount?: SortOrder
    score?: SortOrder
    gateResult?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisReportMinOrderByAggregateInput = {
    id?: SortOrder
    analysisJobId?: SortOrder
    summary?: SortOrder
    totalFindings?: SortOrder
    criticalCount?: SortOrder
    errorCount?: SortOrder
    warningCount?: SortOrder
    infoCount?: SortOrder
    score?: SortOrder
    gateResult?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisReportSumOrderByAggregateInput = {
    totalFindings?: SortOrder
    criticalCount?: SortOrder
    errorCount?: SortOrder
    warningCount?: SortOrder
    infoCount?: SortOrder
    score?: SortOrder
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

  export type EnumQualityGateResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QualityGateResult | EnumQualityGateResultFieldRefInput<$PrismaModel>
    in?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityGateResultWithAggregatesFilter<$PrismaModel> | $Enums.QualityGateResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQualityGateResultFilter<$PrismaModel>
    _max?: NestedEnumQualityGateResultFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WebhookEventCountOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    deliveryId?: SortOrder
    payload?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookEventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    deliveryId?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookEventMinOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    deliveryId?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type AnalysisJobCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<AnalysisJobCreateWithoutRepositoryInput, AnalysisJobUncheckedCreateWithoutRepositoryInput> | AnalysisJobCreateWithoutRepositoryInput[] | AnalysisJobUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutRepositoryInput | AnalysisJobCreateOrConnectWithoutRepositoryInput[]
    createMany?: AnalysisJobCreateManyRepositoryInputEnvelope
    connect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
  }

  export type AnalysisJobUncheckedCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<AnalysisJobCreateWithoutRepositoryInput, AnalysisJobUncheckedCreateWithoutRepositoryInput> | AnalysisJobCreateWithoutRepositoryInput[] | AnalysisJobUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutRepositoryInput | AnalysisJobCreateOrConnectWithoutRepositoryInput[]
    createMany?: AnalysisJobCreateManyRepositoryInputEnvelope
    connect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnalysisJobUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<AnalysisJobCreateWithoutRepositoryInput, AnalysisJobUncheckedCreateWithoutRepositoryInput> | AnalysisJobCreateWithoutRepositoryInput[] | AnalysisJobUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutRepositoryInput | AnalysisJobCreateOrConnectWithoutRepositoryInput[]
    upsert?: AnalysisJobUpsertWithWhereUniqueWithoutRepositoryInput | AnalysisJobUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: AnalysisJobCreateManyRepositoryInputEnvelope
    set?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    disconnect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    delete?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    connect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    update?: AnalysisJobUpdateWithWhereUniqueWithoutRepositoryInput | AnalysisJobUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: AnalysisJobUpdateManyWithWhereWithoutRepositoryInput | AnalysisJobUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: AnalysisJobScalarWhereInput | AnalysisJobScalarWhereInput[]
  }

  export type AnalysisJobUncheckedUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<AnalysisJobCreateWithoutRepositoryInput, AnalysisJobUncheckedCreateWithoutRepositoryInput> | AnalysisJobCreateWithoutRepositoryInput[] | AnalysisJobUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutRepositoryInput | AnalysisJobCreateOrConnectWithoutRepositoryInput[]
    upsert?: AnalysisJobUpsertWithWhereUniqueWithoutRepositoryInput | AnalysisJobUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: AnalysisJobCreateManyRepositoryInputEnvelope
    set?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    disconnect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    delete?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    connect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    update?: AnalysisJobUpdateWithWhereUniqueWithoutRepositoryInput | AnalysisJobUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: AnalysisJobUpdateManyWithWhereWithoutRepositoryInput | AnalysisJobUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: AnalysisJobScalarWhereInput | AnalysisJobScalarWhereInput[]
  }

  export type RepositoryCreateNestedOneWithoutAnalysesInput = {
    create?: XOR<RepositoryCreateWithoutAnalysesInput, RepositoryUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutAnalysesInput
    connect?: RepositoryWhereUniqueInput
  }

  export type FindingCreateNestedManyWithoutAnalysisJobInput = {
    create?: XOR<FindingCreateWithoutAnalysisJobInput, FindingUncheckedCreateWithoutAnalysisJobInput> | FindingCreateWithoutAnalysisJobInput[] | FindingUncheckedCreateWithoutAnalysisJobInput[]
    connectOrCreate?: FindingCreateOrConnectWithoutAnalysisJobInput | FindingCreateOrConnectWithoutAnalysisJobInput[]
    createMany?: FindingCreateManyAnalysisJobInputEnvelope
    connect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
  }

  export type AnalysisReportCreateNestedOneWithoutAnalysisJobInput = {
    create?: XOR<AnalysisReportCreateWithoutAnalysisJobInput, AnalysisReportUncheckedCreateWithoutAnalysisJobInput>
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutAnalysisJobInput
    connect?: AnalysisReportWhereUniqueInput
  }

  export type FindingUncheckedCreateNestedManyWithoutAnalysisJobInput = {
    create?: XOR<FindingCreateWithoutAnalysisJobInput, FindingUncheckedCreateWithoutAnalysisJobInput> | FindingCreateWithoutAnalysisJobInput[] | FindingUncheckedCreateWithoutAnalysisJobInput[]
    connectOrCreate?: FindingCreateOrConnectWithoutAnalysisJobInput | FindingCreateOrConnectWithoutAnalysisJobInput[]
    createMany?: FindingCreateManyAnalysisJobInputEnvelope
    connect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
  }

  export type AnalysisReportUncheckedCreateNestedOneWithoutAnalysisJobInput = {
    create?: XOR<AnalysisReportCreateWithoutAnalysisJobInput, AnalysisReportUncheckedCreateWithoutAnalysisJobInput>
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutAnalysisJobInput
    connect?: AnalysisReportWhereUniqueInput
  }

  export type EnumAnalysisStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnalysisStatus
  }

  export type NullableEnumQualityGateResultFieldUpdateOperationsInput = {
    set?: $Enums.QualityGateResult | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RepositoryUpdateOneRequiredWithoutAnalysesNestedInput = {
    create?: XOR<RepositoryCreateWithoutAnalysesInput, RepositoryUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutAnalysesInput
    upsert?: RepositoryUpsertWithoutAnalysesInput
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutAnalysesInput, RepositoryUpdateWithoutAnalysesInput>, RepositoryUncheckedUpdateWithoutAnalysesInput>
  }

  export type FindingUpdateManyWithoutAnalysisJobNestedInput = {
    create?: XOR<FindingCreateWithoutAnalysisJobInput, FindingUncheckedCreateWithoutAnalysisJobInput> | FindingCreateWithoutAnalysisJobInput[] | FindingUncheckedCreateWithoutAnalysisJobInput[]
    connectOrCreate?: FindingCreateOrConnectWithoutAnalysisJobInput | FindingCreateOrConnectWithoutAnalysisJobInput[]
    upsert?: FindingUpsertWithWhereUniqueWithoutAnalysisJobInput | FindingUpsertWithWhereUniqueWithoutAnalysisJobInput[]
    createMany?: FindingCreateManyAnalysisJobInputEnvelope
    set?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    disconnect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    delete?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    connect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    update?: FindingUpdateWithWhereUniqueWithoutAnalysisJobInput | FindingUpdateWithWhereUniqueWithoutAnalysisJobInput[]
    updateMany?: FindingUpdateManyWithWhereWithoutAnalysisJobInput | FindingUpdateManyWithWhereWithoutAnalysisJobInput[]
    deleteMany?: FindingScalarWhereInput | FindingScalarWhereInput[]
  }

  export type AnalysisReportUpdateOneWithoutAnalysisJobNestedInput = {
    create?: XOR<AnalysisReportCreateWithoutAnalysisJobInput, AnalysisReportUncheckedCreateWithoutAnalysisJobInput>
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutAnalysisJobInput
    upsert?: AnalysisReportUpsertWithoutAnalysisJobInput
    disconnect?: AnalysisReportWhereInput | boolean
    delete?: AnalysisReportWhereInput | boolean
    connect?: AnalysisReportWhereUniqueInput
    update?: XOR<XOR<AnalysisReportUpdateToOneWithWhereWithoutAnalysisJobInput, AnalysisReportUpdateWithoutAnalysisJobInput>, AnalysisReportUncheckedUpdateWithoutAnalysisJobInput>
  }

  export type FindingUncheckedUpdateManyWithoutAnalysisJobNestedInput = {
    create?: XOR<FindingCreateWithoutAnalysisJobInput, FindingUncheckedCreateWithoutAnalysisJobInput> | FindingCreateWithoutAnalysisJobInput[] | FindingUncheckedCreateWithoutAnalysisJobInput[]
    connectOrCreate?: FindingCreateOrConnectWithoutAnalysisJobInput | FindingCreateOrConnectWithoutAnalysisJobInput[]
    upsert?: FindingUpsertWithWhereUniqueWithoutAnalysisJobInput | FindingUpsertWithWhereUniqueWithoutAnalysisJobInput[]
    createMany?: FindingCreateManyAnalysisJobInputEnvelope
    set?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    disconnect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    delete?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    connect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    update?: FindingUpdateWithWhereUniqueWithoutAnalysisJobInput | FindingUpdateWithWhereUniqueWithoutAnalysisJobInput[]
    updateMany?: FindingUpdateManyWithWhereWithoutAnalysisJobInput | FindingUpdateManyWithWhereWithoutAnalysisJobInput[]
    deleteMany?: FindingScalarWhereInput | FindingScalarWhereInput[]
  }

  export type AnalysisReportUncheckedUpdateOneWithoutAnalysisJobNestedInput = {
    create?: XOR<AnalysisReportCreateWithoutAnalysisJobInput, AnalysisReportUncheckedCreateWithoutAnalysisJobInput>
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutAnalysisJobInput
    upsert?: AnalysisReportUpsertWithoutAnalysisJobInput
    disconnect?: AnalysisReportWhereInput | boolean
    delete?: AnalysisReportWhereInput | boolean
    connect?: AnalysisReportWhereUniqueInput
    update?: XOR<XOR<AnalysisReportUpdateToOneWithWhereWithoutAnalysisJobInput, AnalysisReportUpdateWithoutAnalysisJobInput>, AnalysisReportUncheckedUpdateWithoutAnalysisJobInput>
  }

  export type AnalysisJobCreateNestedOneWithoutFindingsInput = {
    create?: XOR<AnalysisJobCreateWithoutFindingsInput, AnalysisJobUncheckedCreateWithoutFindingsInput>
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutFindingsInput
    connect?: AnalysisJobWhereUniqueInput
  }

  export type EnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity
  }

  export type AnalysisJobUpdateOneRequiredWithoutFindingsNestedInput = {
    create?: XOR<AnalysisJobCreateWithoutFindingsInput, AnalysisJobUncheckedCreateWithoutFindingsInput>
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutFindingsInput
    upsert?: AnalysisJobUpsertWithoutFindingsInput
    connect?: AnalysisJobWhereUniqueInput
    update?: XOR<XOR<AnalysisJobUpdateToOneWithWhereWithoutFindingsInput, AnalysisJobUpdateWithoutFindingsInput>, AnalysisJobUncheckedUpdateWithoutFindingsInput>
  }

  export type AnalysisJobCreateNestedOneWithoutReportInput = {
    create?: XOR<AnalysisJobCreateWithoutReportInput, AnalysisJobUncheckedCreateWithoutReportInput>
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutReportInput
    connect?: AnalysisJobWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumQualityGateResultFieldUpdateOperationsInput = {
    set?: $Enums.QualityGateResult
  }

  export type AnalysisJobUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<AnalysisJobCreateWithoutReportInput, AnalysisJobUncheckedCreateWithoutReportInput>
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutReportInput
    upsert?: AnalysisJobUpsertWithoutReportInput
    connect?: AnalysisJobWhereUniqueInput
    update?: XOR<XOR<AnalysisJobUpdateToOneWithWhereWithoutReportInput, AnalysisJobUpdateWithoutReportInput>, AnalysisJobUncheckedUpdateWithoutReportInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumAnalysisStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusFilter<$PrismaModel> | $Enums.AnalysisStatus
  }

  export type NestedEnumQualityGateResultNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.QualityGateResult | EnumQualityGateResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumQualityGateResultNullableFilter<$PrismaModel> | $Enums.QualityGateResult | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisStatusFilter<$PrismaModel>
    _max?: NestedEnumAnalysisStatusFilter<$PrismaModel>
  }

  export type NestedEnumQualityGateResultNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QualityGateResult | EnumQualityGateResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumQualityGateResultNullableWithAggregatesFilter<$PrismaModel> | $Enums.QualityGateResult | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumQualityGateResultNullableFilter<$PrismaModel>
    _max?: NestedEnumQualityGateResultNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type NestedEnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type NestedEnumQualityGateResultFilter<$PrismaModel = never> = {
    equals?: $Enums.QualityGateResult | EnumQualityGateResultFieldRefInput<$PrismaModel>
    in?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityGateResultFilter<$PrismaModel> | $Enums.QualityGateResult
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

  export type NestedEnumQualityGateResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QualityGateResult | EnumQualityGateResultFieldRefInput<$PrismaModel>
    in?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.QualityGateResult[] | ListEnumQualityGateResultFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityGateResultWithAggregatesFilter<$PrismaModel> | $Enums.QualityGateResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQualityGateResultFilter<$PrismaModel>
    _max?: NestedEnumQualityGateResultFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AnalysisJobCreateWithoutRepositoryInput = {
    id?: string
    prNumber: number
    prTitle: string
    commitSha: string
    baseSha: string
    headBranch: string
    baseBranch: string
    status?: $Enums.AnalysisStatus
    gateResult?: $Enums.QualityGateResult | null
    triggeredBy?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    findings?: FindingCreateNestedManyWithoutAnalysisJobInput
    report?: AnalysisReportCreateNestedOneWithoutAnalysisJobInput
  }

  export type AnalysisJobUncheckedCreateWithoutRepositoryInput = {
    id?: string
    prNumber: number
    prTitle: string
    commitSha: string
    baseSha: string
    headBranch: string
    baseBranch: string
    status?: $Enums.AnalysisStatus
    gateResult?: $Enums.QualityGateResult | null
    triggeredBy?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    findings?: FindingUncheckedCreateNestedManyWithoutAnalysisJobInput
    report?: AnalysisReportUncheckedCreateNestedOneWithoutAnalysisJobInput
  }

  export type AnalysisJobCreateOrConnectWithoutRepositoryInput = {
    where: AnalysisJobWhereUniqueInput
    create: XOR<AnalysisJobCreateWithoutRepositoryInput, AnalysisJobUncheckedCreateWithoutRepositoryInput>
  }

  export type AnalysisJobCreateManyRepositoryInputEnvelope = {
    data: AnalysisJobCreateManyRepositoryInput | AnalysisJobCreateManyRepositoryInput[]
    skipDuplicates?: boolean
  }

  export type AnalysisJobUpsertWithWhereUniqueWithoutRepositoryInput = {
    where: AnalysisJobWhereUniqueInput
    update: XOR<AnalysisJobUpdateWithoutRepositoryInput, AnalysisJobUncheckedUpdateWithoutRepositoryInput>
    create: XOR<AnalysisJobCreateWithoutRepositoryInput, AnalysisJobUncheckedCreateWithoutRepositoryInput>
  }

  export type AnalysisJobUpdateWithWhereUniqueWithoutRepositoryInput = {
    where: AnalysisJobWhereUniqueInput
    data: XOR<AnalysisJobUpdateWithoutRepositoryInput, AnalysisJobUncheckedUpdateWithoutRepositoryInput>
  }

  export type AnalysisJobUpdateManyWithWhereWithoutRepositoryInput = {
    where: AnalysisJobScalarWhereInput
    data: XOR<AnalysisJobUpdateManyMutationInput, AnalysisJobUncheckedUpdateManyWithoutRepositoryInput>
  }

  export type AnalysisJobScalarWhereInput = {
    AND?: AnalysisJobScalarWhereInput | AnalysisJobScalarWhereInput[]
    OR?: AnalysisJobScalarWhereInput[]
    NOT?: AnalysisJobScalarWhereInput | AnalysisJobScalarWhereInput[]
    id?: StringFilter<"AnalysisJob"> | string
    repositoryId?: StringFilter<"AnalysisJob"> | string
    prNumber?: IntFilter<"AnalysisJob"> | number
    prTitle?: StringFilter<"AnalysisJob"> | string
    commitSha?: StringFilter<"AnalysisJob"> | string
    baseSha?: StringFilter<"AnalysisJob"> | string
    headBranch?: StringFilter<"AnalysisJob"> | string
    baseBranch?: StringFilter<"AnalysisJob"> | string
    status?: EnumAnalysisStatusFilter<"AnalysisJob"> | $Enums.AnalysisStatus
    gateResult?: EnumQualityGateResultNullableFilter<"AnalysisJob"> | $Enums.QualityGateResult | null
    triggeredBy?: StringNullableFilter<"AnalysisJob"> | string | null
    startedAt?: DateTimeNullableFilter<"AnalysisJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"AnalysisJob"> | Date | string | null
    errorMessage?: StringNullableFilter<"AnalysisJob"> | string | null
    metadata?: JsonNullableFilter<"AnalysisJob">
    createdAt?: DateTimeFilter<"AnalysisJob"> | Date | string
    updatedAt?: DateTimeFilter<"AnalysisJob"> | Date | string
  }

  export type RepositoryCreateWithoutAnalysesInput = {
    id?: string
    githubId: number
    owner: string
    name: string
    fullName: string
    defaultBranch?: string
    installationId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepositoryUncheckedCreateWithoutAnalysesInput = {
    id?: string
    githubId: number
    owner: string
    name: string
    fullName: string
    defaultBranch?: string
    installationId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepositoryCreateOrConnectWithoutAnalysesInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutAnalysesInput, RepositoryUncheckedCreateWithoutAnalysesInput>
  }

  export type FindingCreateWithoutAnalysisJobInput = {
    id?: string
    filePath: string
    lineStart?: number | null
    lineEnd?: number | null
    severity: $Enums.Severity
    ruleId: string
    message: string
    suggestion?: string | null
    category?: string | null
    createdAt?: Date | string
  }

  export type FindingUncheckedCreateWithoutAnalysisJobInput = {
    id?: string
    filePath: string
    lineStart?: number | null
    lineEnd?: number | null
    severity: $Enums.Severity
    ruleId: string
    message: string
    suggestion?: string | null
    category?: string | null
    createdAt?: Date | string
  }

  export type FindingCreateOrConnectWithoutAnalysisJobInput = {
    where: FindingWhereUniqueInput
    create: XOR<FindingCreateWithoutAnalysisJobInput, FindingUncheckedCreateWithoutAnalysisJobInput>
  }

  export type FindingCreateManyAnalysisJobInputEnvelope = {
    data: FindingCreateManyAnalysisJobInput | FindingCreateManyAnalysisJobInput[]
    skipDuplicates?: boolean
  }

  export type AnalysisReportCreateWithoutAnalysisJobInput = {
    id?: string
    summary: string
    totalFindings?: number
    criticalCount?: number
    errorCount?: number
    warningCount?: number
    infoCount?: number
    score?: number | null
    gateResult: $Enums.QualityGateResult
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalysisReportUncheckedCreateWithoutAnalysisJobInput = {
    id?: string
    summary: string
    totalFindings?: number
    criticalCount?: number
    errorCount?: number
    warningCount?: number
    infoCount?: number
    score?: number | null
    gateResult: $Enums.QualityGateResult
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalysisReportCreateOrConnectWithoutAnalysisJobInput = {
    where: AnalysisReportWhereUniqueInput
    create: XOR<AnalysisReportCreateWithoutAnalysisJobInput, AnalysisReportUncheckedCreateWithoutAnalysisJobInput>
  }

  export type RepositoryUpsertWithoutAnalysesInput = {
    update: XOR<RepositoryUpdateWithoutAnalysesInput, RepositoryUncheckedUpdateWithoutAnalysesInput>
    create: XOR<RepositoryCreateWithoutAnalysesInput, RepositoryUncheckedCreateWithoutAnalysesInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutAnalysesInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutAnalysesInput, RepositoryUncheckedUpdateWithoutAnalysesInput>
  }

  export type RepositoryUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    defaultBranch?: StringFieldUpdateOperationsInput | string
    installationId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryUncheckedUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    defaultBranch?: StringFieldUpdateOperationsInput | string
    installationId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingUpsertWithWhereUniqueWithoutAnalysisJobInput = {
    where: FindingWhereUniqueInput
    update: XOR<FindingUpdateWithoutAnalysisJobInput, FindingUncheckedUpdateWithoutAnalysisJobInput>
    create: XOR<FindingCreateWithoutAnalysisJobInput, FindingUncheckedCreateWithoutAnalysisJobInput>
  }

  export type FindingUpdateWithWhereUniqueWithoutAnalysisJobInput = {
    where: FindingWhereUniqueInput
    data: XOR<FindingUpdateWithoutAnalysisJobInput, FindingUncheckedUpdateWithoutAnalysisJobInput>
  }

  export type FindingUpdateManyWithWhereWithoutAnalysisJobInput = {
    where: FindingScalarWhereInput
    data: XOR<FindingUpdateManyMutationInput, FindingUncheckedUpdateManyWithoutAnalysisJobInput>
  }

  export type FindingScalarWhereInput = {
    AND?: FindingScalarWhereInput | FindingScalarWhereInput[]
    OR?: FindingScalarWhereInput[]
    NOT?: FindingScalarWhereInput | FindingScalarWhereInput[]
    id?: StringFilter<"Finding"> | string
    analysisJobId?: StringFilter<"Finding"> | string
    filePath?: StringFilter<"Finding"> | string
    lineStart?: IntNullableFilter<"Finding"> | number | null
    lineEnd?: IntNullableFilter<"Finding"> | number | null
    severity?: EnumSeverityFilter<"Finding"> | $Enums.Severity
    ruleId?: StringFilter<"Finding"> | string
    message?: StringFilter<"Finding"> | string
    suggestion?: StringNullableFilter<"Finding"> | string | null
    category?: StringNullableFilter<"Finding"> | string | null
    createdAt?: DateTimeFilter<"Finding"> | Date | string
  }

  export type AnalysisReportUpsertWithoutAnalysisJobInput = {
    update: XOR<AnalysisReportUpdateWithoutAnalysisJobInput, AnalysisReportUncheckedUpdateWithoutAnalysisJobInput>
    create: XOR<AnalysisReportCreateWithoutAnalysisJobInput, AnalysisReportUncheckedCreateWithoutAnalysisJobInput>
    where?: AnalysisReportWhereInput
  }

  export type AnalysisReportUpdateToOneWithWhereWithoutAnalysisJobInput = {
    where?: AnalysisReportWhereInput
    data: XOR<AnalysisReportUpdateWithoutAnalysisJobInput, AnalysisReportUncheckedUpdateWithoutAnalysisJobInput>
  }

  export type AnalysisReportUpdateWithoutAnalysisJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    totalFindings?: IntFieldUpdateOperationsInput | number
    criticalCount?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    warningCount?: IntFieldUpdateOperationsInput | number
    infoCount?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    gateResult?: EnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisReportUncheckedUpdateWithoutAnalysisJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    totalFindings?: IntFieldUpdateOperationsInput | number
    criticalCount?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    warningCount?: IntFieldUpdateOperationsInput | number
    infoCount?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    gateResult?: EnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisJobCreateWithoutFindingsInput = {
    id?: string
    prNumber: number
    prTitle: string
    commitSha: string
    baseSha: string
    headBranch: string
    baseBranch: string
    status?: $Enums.AnalysisStatus
    gateResult?: $Enums.QualityGateResult | null
    triggeredBy?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    repository: RepositoryCreateNestedOneWithoutAnalysesInput
    report?: AnalysisReportCreateNestedOneWithoutAnalysisJobInput
  }

  export type AnalysisJobUncheckedCreateWithoutFindingsInput = {
    id?: string
    repositoryId: string
    prNumber: number
    prTitle: string
    commitSha: string
    baseSha: string
    headBranch: string
    baseBranch: string
    status?: $Enums.AnalysisStatus
    gateResult?: $Enums.QualityGateResult | null
    triggeredBy?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    report?: AnalysisReportUncheckedCreateNestedOneWithoutAnalysisJobInput
  }

  export type AnalysisJobCreateOrConnectWithoutFindingsInput = {
    where: AnalysisJobWhereUniqueInput
    create: XOR<AnalysisJobCreateWithoutFindingsInput, AnalysisJobUncheckedCreateWithoutFindingsInput>
  }

  export type AnalysisJobUpsertWithoutFindingsInput = {
    update: XOR<AnalysisJobUpdateWithoutFindingsInput, AnalysisJobUncheckedUpdateWithoutFindingsInput>
    create: XOR<AnalysisJobCreateWithoutFindingsInput, AnalysisJobUncheckedCreateWithoutFindingsInput>
    where?: AnalysisJobWhereInput
  }

  export type AnalysisJobUpdateToOneWithWhereWithoutFindingsInput = {
    where?: AnalysisJobWhereInput
    data: XOR<AnalysisJobUpdateWithoutFindingsInput, AnalysisJobUncheckedUpdateWithoutFindingsInput>
  }

  export type AnalysisJobUpdateWithoutFindingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: StringFieldUpdateOperationsInput | string
    commitSha?: StringFieldUpdateOperationsInput | string
    baseSha?: StringFieldUpdateOperationsInput | string
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    gateResult?: NullableEnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult | null
    triggeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repository?: RepositoryUpdateOneRequiredWithoutAnalysesNestedInput
    report?: AnalysisReportUpdateOneWithoutAnalysisJobNestedInput
  }

  export type AnalysisJobUncheckedUpdateWithoutFindingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: StringFieldUpdateOperationsInput | string
    commitSha?: StringFieldUpdateOperationsInput | string
    baseSha?: StringFieldUpdateOperationsInput | string
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    gateResult?: NullableEnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult | null
    triggeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: AnalysisReportUncheckedUpdateOneWithoutAnalysisJobNestedInput
  }

  export type AnalysisJobCreateWithoutReportInput = {
    id?: string
    prNumber: number
    prTitle: string
    commitSha: string
    baseSha: string
    headBranch: string
    baseBranch: string
    status?: $Enums.AnalysisStatus
    gateResult?: $Enums.QualityGateResult | null
    triggeredBy?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    repository: RepositoryCreateNestedOneWithoutAnalysesInput
    findings?: FindingCreateNestedManyWithoutAnalysisJobInput
  }

  export type AnalysisJobUncheckedCreateWithoutReportInput = {
    id?: string
    repositoryId: string
    prNumber: number
    prTitle: string
    commitSha: string
    baseSha: string
    headBranch: string
    baseBranch: string
    status?: $Enums.AnalysisStatus
    gateResult?: $Enums.QualityGateResult | null
    triggeredBy?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    findings?: FindingUncheckedCreateNestedManyWithoutAnalysisJobInput
  }

  export type AnalysisJobCreateOrConnectWithoutReportInput = {
    where: AnalysisJobWhereUniqueInput
    create: XOR<AnalysisJobCreateWithoutReportInput, AnalysisJobUncheckedCreateWithoutReportInput>
  }

  export type AnalysisJobUpsertWithoutReportInput = {
    update: XOR<AnalysisJobUpdateWithoutReportInput, AnalysisJobUncheckedUpdateWithoutReportInput>
    create: XOR<AnalysisJobCreateWithoutReportInput, AnalysisJobUncheckedCreateWithoutReportInput>
    where?: AnalysisJobWhereInput
  }

  export type AnalysisJobUpdateToOneWithWhereWithoutReportInput = {
    where?: AnalysisJobWhereInput
    data: XOR<AnalysisJobUpdateWithoutReportInput, AnalysisJobUncheckedUpdateWithoutReportInput>
  }

  export type AnalysisJobUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: StringFieldUpdateOperationsInput | string
    commitSha?: StringFieldUpdateOperationsInput | string
    baseSha?: StringFieldUpdateOperationsInput | string
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    gateResult?: NullableEnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult | null
    triggeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repository?: RepositoryUpdateOneRequiredWithoutAnalysesNestedInput
    findings?: FindingUpdateManyWithoutAnalysisJobNestedInput
  }

  export type AnalysisJobUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: StringFieldUpdateOperationsInput | string
    commitSha?: StringFieldUpdateOperationsInput | string
    baseSha?: StringFieldUpdateOperationsInput | string
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    gateResult?: NullableEnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult | null
    triggeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    findings?: FindingUncheckedUpdateManyWithoutAnalysisJobNestedInput
  }

  export type AnalysisJobCreateManyRepositoryInput = {
    id?: string
    prNumber: number
    prTitle: string
    commitSha: string
    baseSha: string
    headBranch: string
    baseBranch: string
    status?: $Enums.AnalysisStatus
    gateResult?: $Enums.QualityGateResult | null
    triggeredBy?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorMessage?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalysisJobUpdateWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: StringFieldUpdateOperationsInput | string
    commitSha?: StringFieldUpdateOperationsInput | string
    baseSha?: StringFieldUpdateOperationsInput | string
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    gateResult?: NullableEnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult | null
    triggeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    findings?: FindingUpdateManyWithoutAnalysisJobNestedInput
    report?: AnalysisReportUpdateOneWithoutAnalysisJobNestedInput
  }

  export type AnalysisJobUncheckedUpdateWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: StringFieldUpdateOperationsInput | string
    commitSha?: StringFieldUpdateOperationsInput | string
    baseSha?: StringFieldUpdateOperationsInput | string
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    gateResult?: NullableEnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult | null
    triggeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    findings?: FindingUncheckedUpdateManyWithoutAnalysisJobNestedInput
    report?: AnalysisReportUncheckedUpdateOneWithoutAnalysisJobNestedInput
  }

  export type AnalysisJobUncheckedUpdateManyWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: StringFieldUpdateOperationsInput | string
    commitSha?: StringFieldUpdateOperationsInput | string
    baseSha?: StringFieldUpdateOperationsInput | string
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    gateResult?: NullableEnumQualityGateResultFieldUpdateOperationsInput | $Enums.QualityGateResult | null
    triggeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingCreateManyAnalysisJobInput = {
    id?: string
    filePath: string
    lineStart?: number | null
    lineEnd?: number | null
    severity: $Enums.Severity
    ruleId: string
    message: string
    suggestion?: string | null
    category?: string | null
    createdAt?: Date | string
  }

  export type FindingUpdateWithoutAnalysisJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineStart?: NullableIntFieldUpdateOperationsInput | number | null
    lineEnd?: NullableIntFieldUpdateOperationsInput | number | null
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    ruleId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingUncheckedUpdateWithoutAnalysisJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineStart?: NullableIntFieldUpdateOperationsInput | number | null
    lineEnd?: NullableIntFieldUpdateOperationsInput | number | null
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    ruleId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingUncheckedUpdateManyWithoutAnalysisJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineStart?: NullableIntFieldUpdateOperationsInput | number | null
    lineEnd?: NullableIntFieldUpdateOperationsInput | number | null
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    ruleId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RepositoryCountOutputTypeDefaultArgs instead
     */
    export type RepositoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RepositoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnalysisJobCountOutputTypeDefaultArgs instead
     */
    export type AnalysisJobCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnalysisJobCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RepositoryDefaultArgs instead
     */
    export type RepositoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RepositoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnalysisJobDefaultArgs instead
     */
    export type AnalysisJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnalysisJobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FindingDefaultArgs instead
     */
    export type FindingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FindingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnalysisReportDefaultArgs instead
     */
    export type AnalysisReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnalysisReportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WebhookEventDefaultArgs instead
     */
    export type WebhookEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WebhookEventDefaultArgs<ExtArgs>

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