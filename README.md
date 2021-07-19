# newsapi-node-api (Open Source API Interface)
NewsApi-Node-Api is an open source system desinged to be a __'Convenience Interface'__ for developers planning to use the API system from 
<https://newsapi.org/>. This system is primarily desinged for the _Free Tier_ pricing option with NewsApi thus may have 
the capacity to scale up to other pricing options as well. Built with __NodeJs/Express__ with an easy to understand directory structure.

NewsApi-Node-Api is subject to changes in the future. All responses received through making API calls is subject to the response received from 
its source. __You would need to create an account with <https://newsapi.org/> to get your secret API key that you would eventually need to interact 
with this system.__ 

## Objectives:
* Provide a free/open source system to developers which can be consumed either by direct download or interacting with the hosted enpoint (_which 
  we would talk about in subsequent sections_)
* A system that can cater to as many users as it possibly can irrespective of the pricing tier that has been chosen
* Help developers reduce time to build with an easy to use interface and documenation

## Response Format
All api calls made through this system will have a standardized response. The structure of the response is as shown below:
```
{
  code: // 'some-code'
  message: // 'some example message'
  payload: // some stuff that you can use
}
```
* __code__:<br/>
Responses marked with __'api-ok'__ means that there was no error and most likely, the payload will have information that you can consume.<br/>
Responses marked with __'api-no-data'__ means that there was no error but there were no records that could be found based on your request.<br/>
Responses marked with __'api-fail'__ means that there was some error involved with the request, the payload may have some information for you.

* __message__:<br/>
Generally meant to be a human readble portion of the response, the purpose of this field is to give some form of clarity for the response recieved. 
You could for example, gain some insight into the response received during debugging. Not adviseable to use as a constant or static portion in your 
code (_when writing conditional statements_)

* __payload__:<br/>
This is the place where we place the response from our source, which would carry all the information that you would need for consuming data. There may 
be certain conditions where there would be non-sensible payloads (_when you've experienced an exception possibly!_) but overall, check this space for 
the data that needs to be consumed for your project

## API Request Endpoints
The base url for the endpoint is 'https://www.example.com' and this would now be refered to simply as '__BASE-URL__' for convenince. 
You can refer to the json respnse from _'/api/options'_ endpoint to see the list of short codes that you can use here. __Responses may 
work successfully for certain fields if you enter only 1 option at a time__. Here are the details of the endpoints:
* __[GET Request]__ BASE-URL/<br/>
  Gives you a response containing details about the application along with author details

* __[GET Request]__ BASE-URL/api/options<br/>
  Provides you a json payload that contains all the different codes for options that are accepted by <https://newsapi.org/>. This is useful when you need to know 
  what short codes are accepted values for making various endpoints

* __[POST Request]__ BASE-URL/api/fetch-sources<br/>
  Helps you to fetch the various sources from which <https://newsapi.org/> provides you news articles from. There are various post request fields that you need 
  to use for this. _Kindly note that you may need to experiment with various combinations to get your required results_.
  ```
  {
    "apiKey": "your-secret-api-key", //mandatory
    "category": "category-value", //optional
    "language": "2-char language code", //optional
    "country": "2-char country code" //optional
  }
  ```
  An example request would be:
  ```
  {
    "apiKey": "your-secret-api-key",
    "category": "business",
    "language": "en",
    "country": "us"
  }
  ```
  Please refer to _{app}/sample-response-schemas/fetch-sources-response.json_ in the directory structure to get an idea of the kind of response you would get.

* __[POST Request]__ BASE-URL/api/fetch-top-headlines<br/>
  Helps you to fetch all the various top headlines from <https://newsapi.org/> based on the information being sent to the endpoint. These are the various 
  request fields that you would need to use for this. _Kindly note that you may need to experiment with various combinations to get your required results_.
  ```
  {
    "apiKey": "your-secret-api-key", //mandatory
    "category": "category-value", //optional
    "country": "2-char country code" //optional
    "q": "some example query //optional - Keywords or a phrase to search for
    "pageSize": integer //optional - number of results to return per page
    "page": integer //optional - to page through the results if the total results found is greater than the page size
  }
  ```
  (or)
  ```
  {
    "apiKey": "your-secret-api-key", //mandatory
    "sources": "source-1, source-2...", //optional - comma-seperated string of identifiers
    "q": "some example query //optional - Keywords or a phrase to search for
    "pageSize": integer //optional - number of results to return per page
    "page": integer //optional - to page through the results if the total results found is greater than the page size
  }
  ```
  __'sources'__ is basically the comma seperated list of short codes for a particular news channel. You can get these short codes from _/api/fetch-sources_ 
  endpoint. So for example, 'Times of India' code to be used here is 'times-of-india'. You cannot use this along with 'country' or 'category' fields. 
  An example request would be: 
  ```
  {
    "apiKey": "your-secret-api-key", //mandatory
    "category": "technology",
    "q": "bitcoin",
    "pageSize": 5 //meaning you would get a max of 5 results per page view
    "page": 1 //meaning you are now trying to access the 1st page of the set of results
  }
  ```
  Another example of a request to this endpoint would be:
  ```
  {
    "apiKey": "your-secret-api-key", //mandatory
    "sources": "axios,wired", //you can get more of these short codes from the endpoint _/api/fetch-sources_
    "q": "bitcoin",
    "pageSize": 5 //meaning you would get a max of 5 results per page view
    "page": 1 //meaning you are now trying to access the 1st page of the set of results
  }
  ```
  Please refer to _{app}/sample-response-schemas/fetch-top-headlines-1.json_ and _{app}/sample-response-schemas/fetch-top-headlines-2.json_ for sample 
  responses

* __[Post Request]__ BASE-URL/api/fetch-everything<br/>
  Provides a list of all articles from <https://newsapi.org/> based on the information being sent to the endpoint. These are the various 
  request fields that you would need to use for this. _Kindly note that you may need to experiment with various combinations to get your required results_.
  ```
  {
    "apiKey": "your-secret-api-key", //mandatory
    "q": "some query text", //Keywords or phrases to search
    "sources": "source-1, source-2...", //optional - comma-seperated string of identifiers
    "domain": "domain-1, domain-2", //optional - comma-seperated string of identifiers
    "from": "yyyy-mm-dd", //optional - ISO 8601 format 
    "to": "yyyy-mm-dd", //optional - ISO 8601 format
    "language": "2-char language code", //optional
    "sortBy": "relevancy (or) popularity (or) publishedAt", //optional
    "pageSize": integer //optional - number of results to return per page
    "page": integer //optional - to page through the results if the total results found is greater than the page size
  }
  ```
  A slightly simplified approach to help make things happen. The range limit for __from__ and __to__ fields depends upon the type of pricing option you choose 
  with <https://newsapi.org/>. If you would like to have a detailed explanation for the payload, check it out at <https://newsapi.org/docs/endpoints/everything>. 
  In the meanwhile, here is a sample request payload you can send:
  ```
  {
    "apiKey": "your-secret-api-key",
    "q": "covid 19",
    "sortBy": "publishedAt",
    "language": "en",
    "pageSize": 5,
    "page": 1
  }
  ```
  Please refer to {app}/sample-response-schemas/fetch-everything-response.json for sample responses.

## Feature Requests or Raising Issues
If you would like to suggest a new feature for this app or perhaps you have experienced some problems, go ahead and raise a good old github issue. 
I'll work on this at the earliest possible depending on my schedule and keep you posted as well.

## Support this Project
I'd be very grateful if you could support this project with a Github star as this would go a long way in building more apps like these. 
Happy Coding!
