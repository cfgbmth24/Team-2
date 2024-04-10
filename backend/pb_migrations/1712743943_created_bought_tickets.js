/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nhsbb3q6fn61nhb",
    "created": "2024-04-10 10:12:23.113Z",
    "updated": "2024-04-10 10:12:23.113Z",
    "name": "bought_tickets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vmzxyj0k",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "7w9uvevd",
        "name": "ticketType",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "uaxl5q08s33qi5o",
          "cascadeDelete": false,
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
  const collection = dao.findCollectionByNameOrId("nhsbb3q6fn61nhb");

  return dao.deleteCollection(collection);
})
