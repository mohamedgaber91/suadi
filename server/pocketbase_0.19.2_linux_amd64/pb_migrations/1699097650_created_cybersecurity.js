/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0yn0ep1wdmhebnq",
    "created": "2023-11-04 11:34:10.854Z",
    "updated": "2023-11-04 11:34:10.854Z",
    "name": "cybersecurity",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aifiducv",
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
        "id": "tkroox9y",
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
  const collection = dao.findCollectionByNameOrId("0yn0ep1wdmhebnq");

  return dao.deleteCollection(collection);
})
