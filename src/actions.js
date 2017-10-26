 

export const GET_TRAKILA_PRODUCTS = 'GET_TRAKILA_PRODUCT'
export const GOT_TRAKILA_PRODUCTS = 'GOT_TRAKILA_PRODUCT'
export const GOT_TRAKILA_PRODUCTS_ERROR = 'GOT_TRAKILA_PRODUCT_ERROR'
 
export function gotData( json) {
    console.log("receiveProduct",json)
   return {
    type:  GOT_TRAKILA_PRODUCTS,
    offers: json.output,
    error: json.error,
    message: json.message,
    receivedAt: Date.now()
  }
}

export function getTrakilaData(bool) {
   return {
    type: GET_TRAKILA_PRODUCTS,
    isLoading:bool
  }
}

export function fetchTrakilaProducts() {
  console.log("fetchTrakilaProduct","https://api.trakila.com/product/diff/?page=1" )
  return (dispatch) => {
    console.log("getTrakilaData","https://api.trakila.com/product/diff/?page=1" )
    
   dispatch(getTrakilaData(true))
    return fetch("https://api.trakila.com/product/diff/?page=1" )
    .then((response) => {
      console.log("response---------",response)
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(getTrakilaData(false));

                return response;
            })
      .then(response =>    response.json())
      .then(json => dispatch(gotData(json)))
  }

  
}


 