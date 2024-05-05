        // Regular expression to validate LinkedIn profile URL
        function validateURL() {
            const urlInput = document.getElementById("url");
            const url = urlInput.value.trim();

            // Regular expression for LinkedIn profile URL validation
            const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;

            // Get the result element
            const resultElement = document.getElementById("result");

            // Validate the URL using the regular expression
            if (regex.test(url)) {
                // URL is valid
                resultElement.textContent = "The URL is a valid LinkedIn profile URL.";
                resultElement.className = "result valid";
            } else {
                // URL is invalid
                resultElement.textContent = "The URL is not a valid LinkedIn profile URL.";
                resultElement.className = "result invalid";
            }
        }