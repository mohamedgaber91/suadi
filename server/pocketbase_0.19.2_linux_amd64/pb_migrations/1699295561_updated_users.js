/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("l6vzfhkd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "atofjja6",
    "name": "employeeRule",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l6vzfhkd",
    "name": "employeeRule",
    "type": "relation",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "m8gw6snfwgijqnr",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("atofjja6")

  return dao.saveCollection(collection)
})
