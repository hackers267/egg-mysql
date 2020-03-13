interface LiteralAble {
  now: () => string
  Literal: any
}

interface SelectOption extends GetOptions {
  where?: AnyObject
  limit?: number
  offset?: number
}

interface AnyObject {
  [propsName: string]: any
}

interface GetOptions {
  orders?: string | string[]
  columns?: string | string[]
}

interface InsertOptions {
  columns?: string | string[]
}

type Result = Promise<any>;

interface UpdateOptions {
  columns?: string | string[]
  where?: AnyObject
}


interface Conn {
  commit: any,
  rollback: any
}

interface RDSTransaction {
  conn: Conn
}

declare module 'egg' {
  interface Application {
    mysql: {
      get: (table: string, where: any, options?: GetOptions) => Result,
      select: (table: string, options?: SelectOption) => Result,
      insert: (table: string, rows: AnyObject | AnyObject[], options: InsertOptions) => Result,
      update: (table: string, rows: AnyObject | AnyObject[], options: UpdateOptions) => Result,
      updateRows: any,
      count: (table: string, where: AnyObject) => Promise<number>,
      delete: (table: string, where: AnyObject) => {},
      query: (sql: string, values: any[]) => Result,
      queryOne: (sql: string, values: any[]) => Result,
      escape: () => {},
      beginTransaction: () => Promise<RDSTransaction>,
      beginTransactionScope: (scope: Function, ctx: AnyObject) => Promise<Object>,
      literals: LiteralAble
    }
  }
}
