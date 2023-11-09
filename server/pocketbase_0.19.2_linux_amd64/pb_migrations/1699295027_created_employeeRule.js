/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "m8gw6snfwgijqnr",
    "created": "2023-11-06 18:23:47.014Z",
    "updated": "2023-11-06 18:23:47.014Z",
    "name": "employeeRule",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8olrxmmb",
        "name": "status",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "disabled",
            "active"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("m8gw6snfwgijqnr");

  return dao.deleteCollection(collection);
})
