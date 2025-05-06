function fakeRequest(url, callback) {
  setTimeout(() => {
    callback(null, "OK");
  }, 1000);
}

// Encadeamento
fakeRequest('url1', (err, res1) => {
  console.log(res1);
  fakeRequest('url2', (err, res2) => {
    console.log(res2);
    fakeRequest('url3', (err, res3) => {
      console.log(res3);
    });
  });
});
