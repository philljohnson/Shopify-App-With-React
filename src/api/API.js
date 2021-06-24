import API from './Config.api'

export function getData(field,pageNumber, rowNumber) {
  // get example :
  //  http://localhost:3001/products?_page=2&_limit=3
  return API.get(`/${field}?_page=${pageNumber}&_limit=${rowNumber}`)
    .then(response => {
    
      console.log(response.headers['x-total-count'])
      return response
    })
    .catch(error => {
      console.log(error)
      return error
    })
}