export function callAPI(reqmethod, url, data, responseHandler) {

    let options;

    if (reqmethod === "GET" || reqmethod === "DELETE") {

        options = {
            method: reqmethod,
            headers: {
                "Content-Type": "application/json"
            }
        };

    } else {

        options = {
            method: reqmethod,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
    }

    fetch(url, options)

        .then(response => {

            if (!response.ok) {
                throw new Error(response.status + ": " + response.statusText);
            }

            return response.json();
        })

        .then(data => {
            responseHandler(data);
        })

        .catch(error => {
            alert(error);
        });
}