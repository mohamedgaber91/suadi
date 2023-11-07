/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("7unewuyw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kbyoza5b",
    "name": "rule",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "admin",
        "user",
        "employee"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7unewuyw",
    "name": "role",
    "type": "relation",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "bg3gt3vz9kuo80v",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("kbyoza5b")

  return dao.saveCollection(collection)
})
