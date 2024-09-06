/**
 * Q3. What is the same-origin policy in the context of AJAX requests, and how can you work around it?
    Same-Origin Policy (SOP) is a security measure implemented in web browsers to restrict how a document or script loaded from one origin can interact with resources from another origin. An origin is defined by the scheme (protocol), host (domain), and port number.

    When making AJAX requests, the same-origin policy blocks web pages from making requests to a different domain than the one from which the page was loaded.

    Workarounds:

    CORS (Cross-Origin Resource Sharing): The server can allow cross-origin requests by including appropriate headers (Access-Control-Allow-Origin).
    JSONP (JSON with Padding): A technique where you load a script tag with a callback to bypass the SOP (not commonly used today).
    Proxy Server: A server on the same origin as the website acts as a middleman to fetch data from the target server and send it to the client.
 */