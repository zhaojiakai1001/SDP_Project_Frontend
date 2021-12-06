// import $ from 'jquery'

export const ajax = (url, params, callback) => {
  let sendData = new URLSearchParams()
  Object.keys(params).forEach((key) =>
    sendData.set(key, params[key])
  )

  // $.ajax({
  //   url: url,
  //   type: "POST",
  //   data: sendData,
  //   success: function (data) {
  //     console.log(data)
  //     callback(data)
  //   }
  // })

  fetch(url, {
    method: "POST",
    body: sendData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    },
    //mode: "no-cors",

  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log("data: ",data);
      callback(data)
    })
    .catch((error) => {
      console.log(error);
    })
}
