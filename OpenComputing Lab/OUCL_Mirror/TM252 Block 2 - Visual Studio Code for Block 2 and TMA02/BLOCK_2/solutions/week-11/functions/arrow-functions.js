function fetchRemoteData(url, callback) {
    console.log("Fetching simulated data from " + url);
    callback("<html><head><title>Example</title></head></html>");
}

fetchRemoteData("https://example.com", (data) => {
    console.log(data);
});
