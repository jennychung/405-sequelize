// setTimeout(function () {
//
// }, 3000)

// function getArtist(callbackFunction){
//   //let artist = some db call that's async
//   callbackFunction(artist)
// }
//
// getArtist(function(artist){
//
// })

//
// function getArtist(){
//     // returns promise
// }
// let artist = await getArtist();



//sucess call that would have been executed becomes variable


 // getArtist().then(function(artist) {
 //
 // }, function(error) {
 //
 // })
 //
 // try {
 //   let artist = await getArtist();
 // } catch(error) {
 //
 // }

// try {
//
// } catch (error) {
//   console.log(error)
//   console.log(error.constructor.name)
// }


doAsync1().then((a) => {
  doAsync2().then((b) => {
    // a and b here
  });
});

let a = await doAsync1();
let b = await doAsync2();
// a and b here
