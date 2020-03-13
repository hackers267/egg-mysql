interface LiteralAble {
  now: ()=>string
  Literal: any
}
declare module 'egg'{
  interface Application {
    mysql: {
      get:()=>{},
      select: ()=>{},
      insert: ()=>{},
      update: ()=>{},
      delete: ()=>{},
      query: ()=>{},
      escape: ()=>{},
      beginTransaction: ()=>{},
      beginTransactionScope: ()=>{},
      literals: LiteralAble
    }
  }
}
