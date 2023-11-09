/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0yn0ep1wdmhebnq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jmzvjazm",
    "name": "status",
    "type": "select",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "completed",
        "pending"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0yn0ep1wdmhebnq")

  // remove
  collection.schema.removeField("jmzvjazm")

  return dao.saveCollection(collection)
})
