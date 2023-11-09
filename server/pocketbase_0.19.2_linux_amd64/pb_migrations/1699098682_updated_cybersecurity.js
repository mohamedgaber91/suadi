/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0yn0ep1wdmhebnq")

  collection.listRule = "owner.id=@request.auth.id||'admin' = @request.auth.role.role|| 'eemploee'= @request.auth.role.role"
  collection.viewRule = "owner.id=@request.auth.id||'admin' = @request.auth.role.role|| 'eemploee'= @request.auth.role.role"
  collection.createRule = "owner.id=@request.auth.id||'admin' = @request.auth.role.role|| 'eemploee'= @request.auth.role.role"
  collection.updateRule = "owner.id=@request.auth.id||'admin' = @request.auth.role.role|| 'eemploee'= @request.auth.role.role"
  collection.deleteRule = "owner.id=@request.auth.id||'admin' = @request.auth.role.role|| 'eemploee'= @request.auth.role.role"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0yn0ep1wdmhebnq")

  collection.listRule = "owner.id=@request.auth.id||'admin' = @request.auth.role.role"
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
