/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gatd75uncaus0qg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nc2sy3ym",
    "name": "comment",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gatd75uncaus0qg")

  // remove
  collection.schema.removeField("nc2sy3ym")

  return dao.saveCollection(collection)
})
