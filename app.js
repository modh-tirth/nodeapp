const http = require("http");

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";

const server = http.createServer((req, res) => {
    
    console.log(`Request received: ${req.method} ${req.url}`);

    // Health check endpoint (used in DevOps)
    if (req.url === "/health") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            status: "UP",
            timestamp: new Date()
        }));
        return;
    }

    // Default route
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            message: "Hello from Docker + Jenkins 🚀",
            environment: process.env.NODE_ENV || "development",
            hostname: require("os").hostname()
        }));
        return;
    }

    // 404 route
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        error: "Not Found"
    }));
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
