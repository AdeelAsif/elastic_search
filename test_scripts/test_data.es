
POST /inspections/_doc
{
  "title": "Product2",
  "desc": "Product2 Description"
}


PUT /inspections/_doc/ZOEq_WoBwlDqyhwXg78U
{
  "title": "Product3",
  "desc": "Product3 Description"
}

GET /inspections/_search

DELETE /inspections


POST _bulk
{ "index" : { "_index" : "inspections", "_type" : "_doc", "_id" : "1" } }
{ "title": "Product1", "desc": "Product1 Description"}
{ "index" : { "_index" : "inspections", "_type" : "_doc", "_id" : "2" } }
{ "title": "Product2", "desc": "Product2 Description"}
{ "index" : { "_index" : "inspections", "_type" : "_doc", "_id" : "3" } }
{ "title": "Product3", "desc": "Product3 Description"}


GET /inspections/_doc/_search 




# Second

PUT /inspections2 
{
  "settings": {
    "index.number_of_shards": 1,
    "index.number_of_replicas": 0
  }
}

POST /inpesctions2/_doc
{
  "title": "Product2",
  "desc": "Product2 Description"
}


PUT /inpesctions2/_doc/ZOEq_WoBwlDqyhwXg78U
{
  "title": "Product3",
  "desc": "Product3 Description"
}

GET /inpesctions2/_doc/_search
{

}

DELETE /inspections2