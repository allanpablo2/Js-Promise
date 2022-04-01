let accept = true;
console.log("Request an Uber");
const promessa = new Promise((resolve, reject) => {
  if (accept) {
    return resolve("Accept Request");
  }
  return reject("Denied Request");
});
console.log("Wait a Drive");
promessa
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finish Request"));
