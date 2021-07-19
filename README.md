# newsapiorg-node-api
NewsApiOrg-Node-Api is an open source system desinged to be a __'Convenience Interface'__ for developers planning to use the API system from 
(https://newsapi.org/)[https://newsapi.org/]. This system is primarily desinged for the _Free Tier_ pricing option with NewsApi thus may have 
the capacity to scale up to other pricing options as well. Built with __NodeJs/Express__ with an easy to understand directory structure.

NewsApiOrg-Node-Api is subject to changes in the future. All responses received through making API calls is subject to the response received from 
its source. __You would need to create an account with https://newsapi.org/ to get your secret API key that you would eventually need to interact 
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

## Feature Requests or Raising Issues
If you would like to suggest a new feature for this app or perhaps you have experienced some problems, go ahead and raise a good old github issue. 
I'll work on this at the earliest possible depending on my schedule and keep you posted as well.

## Support this Project
I'd be very grateful if you could support this project with a Github star as this would go a long way in building more apps like these. 
Happy Coding!
