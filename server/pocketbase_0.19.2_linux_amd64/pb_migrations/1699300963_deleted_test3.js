/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("29408z7s3e13wly");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "29408z7s3e13wly",
    "created": "2023-11-06 19:44:25.375Z",
    "updated": "2023-11-06 19:44:25.375Z",
    "name": "test3",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qvyjhoxi",
        "name": "testfield3",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
})
