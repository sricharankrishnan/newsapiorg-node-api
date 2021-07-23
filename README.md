# newsapi-node-api (Open Source API Interface)

![Status](https://img.shields.io/github/checks-status/sricharankrishnan/newsapiorg-node-api/master)
![Open Issues](https://img.shields.io/github/issues-raw/sricharankrishnan/newsapiorg-node-api)
![Closed Issues](https://img.shields.io/github/issues-closed-raw/sricharankrishnan/newsapiorg-node-api)
![License](https://img.shields.io/github/license/sricharankrishnan/newsapiorg-node-api)
<br/>
<br/>

### About

NewsApi-Node-Api is an open source system desinged to be a **'Convenience Interface'** for developers planning to use the API system from
<https://newsapi.org/>. This system is primarily desinged for the _Free Tier_ pricing option with NewsApi thus may have
the capacity to scale up to other pricing options as well. Built with **NodeJs/Express** with an easy to understand directory structure.

NewsApi-Node-Api is subject to changes in the future. All responses received through making API calls is subject to the response received from
its source. **You would need to create an account with <https://newsapi.org/> to get your secret API key that you would eventually need to interact
with this system**.<br/><br/>

### Objectives

- Provide a free/open source system to developers which can be consumed either by direct download or interacting with the hosted enpoint (_which
  we would talk about in subsequent sections_)
- A system that can cater to as many users as it possibly can irrespective of the pricing tier that has been chosen
- Help developers reduce time to build with an easy to use interface and documenation
  <br/><br/>

### Getting Started

The first and the easiest way to use this system, is through the API endpoints mentioned below. Here there is a clear indication of the type of request that needs to be used along with a payload (if applicable). Alternatively, you could download or clone this repository, perform `npm install` to fetch all the required NPM Packages and run the server locally.<br/><br/>

### Prerequisites

The only major requirement is a current and stable version of NodeJS with ES2015 support.
<br/><br/>

### Built Using

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
  <br/><br/>

### Response Format

All api calls made through this system will have a standardized response. The structure of the response is as shown below:

```
{
  code: // 'some-code'
  message: // 'some example message'
  payload: // some stuff that you can use
}
```

- **code**:<br/>
  ![api ok](https://img.shields.io/badge/code-api%20ok-green) no error and most likely, the payload will have information that you can consume.<br/>
  ![api no data](https://img.shields.io/badge/code-api%20no%20data-green) no error but there were no records that could be found based on your request.<br/>
  ![api fail](https://img.shields.io/badge/code-api%20fail-red) some error involved with the request, the payload may have some information for you.

- **message**:<br/>
  ![message](https://img.shields.io/badge/message-human%20readable%20information-blue) Generally meant to be a human readble portion of the response, the purpose of this field is to give some form of clarity for the response recieved.

- **payload**:<br/>
  ![payload](https://img.shields.io/badge/payload-%7B%7D-orange) This is the place where we place the response from our source, which would carry all the information that you would need for consuming data. There may be certain conditions where there would be non-sensible payloads (_when you've experienced an exception possibly!_) but overall, check this space for the data that needs to be consumed for your project.<br/><br/>

### Usage

The base url for the endpoint is <https://newsapiorg-node-api.glitch.me> and this would now be refered to simply as '**BASE-URL**' for convenince.
You can refer to the json respnse from _'/api/options'_ endpoint to see the list of short codes that you can use here. **Responses may
work successfully for certain fields if you enter only 1 option at a time**. Here are the details of the endpoints:

- ![Get Request](https://img.shields.io/badge/method-get-orange) **BASE-URL/**<br/>
  Gives you a response containing details about the application along with author details
  ```console
  foo@bar:~$ curl -XGET -H "Content-type: application/json" 'https://newsapiorg-node-api.glitch.me'
  ```
  <br/>
- ![Get Request](https://img.shields.io/badge/method-get-orange) **BASE-URL/api/options**<br/>
  Provides you a json payload that contains all the different codes for options that are accepted by <https://newsapi.org/>. This is useful when you need to know
  what short codes are accepted values for making various endpoints
  ```console
  foo@bar:~$ curl -XGET -H "Content-type: application/json" 'https://newsapiorg-node-api.glitch.me/api/options'
  ```
  <br/>
- ![Post Request](https://img.shields.io/badge/method-post-orange) **BASE-URL/api/fetch-sources**<br/>
  Helps you to fetch the various sources from which <https://newsapi.org/> provides you news articles from. There are various post request fields that you need
  to use for this. _Kindly note that you may need to experiment with various combinations to get your required results_.

  ```console
  foo@bar:~$ curl -H "Content-type: application/json" -XPOST -d '{"apiKey": "your-secret-api-key", "category": "category-value", "language": "2-char language code", "country": "2-char country code"}' 'https://newsapiorg-node-api.glitch.me/api/fetch-sources'
  ```

  An example request would be:

  ```console
  foo@bar:~$ curl -H "Content-type: application/json" -XPOST -d '{"apiKey": "your-secret-api-key", "category": "business", "language": "en", "country": "us" }' 'https://newsapiorg-node-api.glitch.me/api/fetch-sources'
  ```

  Please refer to _{app}/sample-response-schemas/fetch-sources-response.json_ in the directory structure to get an idea of the kind of response you would get.

  <br/>

- ![Post Request](https://img.shields.io/badge/method-post-orange) **BASE-URL/api/fetch-top-headlines**<br/>
  Helps you to fetch all the various top headlines from <https://newsapi.org/> based on the information being sent to the endpoint. These are the various
  request fields that you would need to use for this. _Kindly note that you may need to experiment with various combinations to get your required results_.
  ```console
  foo@bar:~$ curl -H "Content-type: application/json" -XPOST -d '{ "apiKey": "your-secret-api-key", "category": "category-value", "country": "2-char country code", "q": "some example query, "pageSize": integer, "page": integer}' 'https://newsapiorg-node-api.glitch.me/api/fetch-top-headlines'
  ```
  (or)
  ```console
  foo@bar:~$ curl -H "Content-type: application/json" -XPOST -d '{"apiKey": "your-secret-api-key", "sources": "source-1[, source-2...]", "q": "some example query", "pageSize": integer, "page": integer}' 'https://newsapiorg-node-api.glitch.me/api/fetch-top-headlines'
  ```
  **'sources'** is basically the comma seperated list of short codes for a particular news channel. You can get these short codes from _/api/fetch-sources_
  endpoint. So for example, 'Times of India' code to be used here is 'times-of-india'. You cannot use this along with 'country' or 'category' fields.
  An example request would be:
  ```console
  foo@bar:~$ curl -H "Content-type: application/json" -XPOST -d '{"apiKey": "your-secret-api-key", "category": "technology", "q": "bitcoin", "pageSize": 5, "page": 1}' 'https://newsapiorg-node-api.glitch.me/api/fetch-top-headlines'
  ```
  Another example of a request to this endpoint would be:
  ```console
  foo@bar:~$ curl -H "Content-type: application/json" -XPOST -d '{"apiKey": "your-secret-api-key", "sources": "axios,wired", "q": "bitcoin", "pageSize": 5, "page": 1}' 'https://newsapiorg-node-api.glitch.me/api/fetch-top-headlines'
  ```
  Please refer to _{app}/sample-response-schemas/fetch-top-headlines-1.json_ and _{app}/sample-response-schemas/fetch-top-headlines-2.json_ for sample
  responses.<br/><br/>
- ![Post Request](https://img.shields.io/badge/method-post-orange) **BASE-URL/api/fetch-everything**<br/>
  Provides a list of all articles from <https://newsapi.org/> based on the information being sent to the endpoint. These are the various
  request fields that you would need to use for this. _Kindly note that you may need to experiment with various combinations to get your required results_.
  ```console
  foo@bar:~$ curl -H "Content-type: application/json" -XPOST -d '{"apiKey": "your-secret-api-key", "q": "some query text", "sources": "source-1[,source-2]...", "domain": "domain-1[,domain-2]...", "from": "yyyy-mm-dd", "to": "yyyy-mm-dd", "language": "2-char language code", "sortBy": "relevancy (or) popularity (or) publishedAt", "pageSize": integer, "page": integer}' 'https://newsapiorg-node-api.glitch.me/api/fetch-everything'
  ```
  A slightly simplified approach to help make things happen. The range limit for **from** and **to** fields depends upon the type of pricing option you choose
  with <https://newsapi.org/>. If you would like to have a detailed explanation for the payload, check it out at <https://newsapi.org/docs/endpoints/everything>.
  In the meanwhile, here is a sample request payload you can send:
  ```console
  foo@bar:~$ curl -XPOST -d '{"apiKey": "your-secret-api-key", "q": "covid 19", "sortBy": "publishedAt", "language": "en", "pageSize": 5, "page": 1}' 'https://newsapiorg-node-api.glitch.me/api/fetch-everything'
  ```
  Please refer to {app}/sample-response-schemas/fetch-everything-response.json for sample responses.
  <br/><br/>

### Feature Requests or Raising Issues

If you would like to suggest a new feature for this app or perhaps you have experienced some problems, go ahead and raise a good old github issue.
I'll work on this at the earliest possible depending on my schedule and keep you posted as well.
<br/><br/>

### Support this Project

I'd be very grateful if you could support this project with a Github star as this would go a long way in building more apps like these.
Happy Coding!

