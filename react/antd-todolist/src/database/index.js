// 数据业务 模块化
import Loki from 'lokijs'   // js的数据库(database)  localStorage  IndexDB  封装

// db 数据库句柄 notes(数据库名字)
export const db = new Loki('notes', {
  autoload: true,
  autoloadCallback: databaseInitialize,  // 第一次链接  执行的回调函数
  autosave: true,
  autosaveInterval: 3000,
  persistenceMethod: 'localStorage'    // 持久化  localStorage
})

function databaseInitialize () {       // 做一个初始化
  const notes = db.getCollection('notes')  // 有notes  数据表吗？  collection  table
  if (notes === null) {                     // 没有
    db.addCollection('notes')              // 添加一个表  notes
  }
}

export function loadCollection (collection) {   // 打开表的操作
  return new Promise(resolve => {              
    db.loadDatabase({}, () => { 
      const _collection = db.getCollection(collection) || db.addCollection(collection)
      resolve(_collection)
    })
  })
}