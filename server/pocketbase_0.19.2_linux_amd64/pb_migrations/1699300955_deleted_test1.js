/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fjkot7lqq0zxc4m");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "fjkot7lqq0zxc4m",
    "created": "2023-11-06 19:43:49.919Z",
    "updated": "2023-11-06 19:43:49.919Z",
    "name": "test1",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "62jwnz5e",
        "name": "testfield",
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
