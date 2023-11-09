/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bpazgk86h1udkox",
    "created": "2023-11-06 20:50:57.572Z",
    "updated": "2023-11-06 20:50:57.572Z",
    "name": "reports",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5ktu78wf",
        "name": "employee_name",
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
        "id": "q9vzmsad",
        "name": "report",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bpazgk86h1udkox");

  return dao.deleteCollection(collection);
})
