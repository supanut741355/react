3 components:
- searchBar
- imageList
- imageShow

![overview](assets/overview.png)


APP -> HTTP Request and Response -> Unsplash

App -> Request API to Unsplash API 

Unsplash API reponse back ->  App

---

- React has no function for making HTTP request -> We can write a lot of custom business logic + data fecthing -> by Axios or Fetch
- React only cares about **showing content and handling user enve**


## Axios

axios.get(url, {
  headers: {

  },
  params: {
    
  }
})