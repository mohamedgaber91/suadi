/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0yn0ep1wdmhebnq")

  collection.listRule = "owner.id=@request.auth.id||'admin' = @request.auth.role.role"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0yn0ep1wdmhebnq")

  collection.listRule = null

  return dao.saveCollection(collection)
})
