<div align="center">
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/graphql.svg"/>
  <img width="55" src="https://user-images.githubusercontent.com/41551585/164946645-3b1c1a78-e077-4481-8c45-6509a5bb4260.svg"/>
  <img width="55" src="https://user-images.githubusercontent.com/41551585/164946644-7ba6dd2e-023a-41a5-b514-9a0b0c43fada.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/eslint.svg"/>
</div>


### This collection of open-source GraphQL APIs helps developers produce mock/fake data for their applications.

This is a GraphQL version of [Fake Faker REST API](https://github.com/Fake-faker-API/Fake-faker-REST-API). 
Docs for the **REST API** can be found [here](https://fakefaker-docs.herokuapp.com]).


### How to use:

- navigate to https://fakefaker-graphql.herokuapp.com/
the page loads GraphQL IDE by default

here is an example query:

```
query Users($rowNum: Int) {
  users(rowNum: $rowNum) {
    first_name
    last_name
    email
    password
    id
  }
}
```
In **QUERY VARIABLES** include:
```
{
  "rowNum": 16,
}
```


- Curl

`Example request:`
```
 curl --request POST \
         --header 'content-type: application/json' \
         --url 'http://localhost:3000/' \
         --data '{"query":"query { addresses {id street_name city } }"}'
```

`Example Response:`

```
{"data":{"addresses":[{"id":"1","street_name":"Buckingham Drive","city":"Beach"},{"id":"2","street_name":"2nd Avenue","city":"Pryor"},{"id":"3","street_name":"2nd Street","city":"Phenix"}]}}
```


