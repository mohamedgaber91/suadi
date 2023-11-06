/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xx2qxdubmifba6e",
    "created": "2023-11-04 11:35:52.645Z",
    "updated": "2023-11-04 11:35:52.645Z",
    "name": "finance",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5r296t1q",
        "name": "messeage",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ubac1nry",
        "name": "owner",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("xx2qxdubmifba6e");

  return dao.deleteCollection(collection);
})
