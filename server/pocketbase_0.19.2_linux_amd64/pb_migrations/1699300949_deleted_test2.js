/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nudsb0w1fh3b1fd");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "nudsb0w1fh3b1fd",
    "created": "2023-11-06 19:44:10.399Z",
    "updated": "2023-11-06 19:44:10.399Z",
    "name": "test2",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kgeuobp0",
        "name": "testfield2",
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
