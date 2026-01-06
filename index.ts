import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(request) {
        const url = new URL(request.url);

        if (url.pathname === "/") {
            const body = figlet.textSync('Olá, Mundo!!', { horizontalLayout: 'full' });
            return new Response(body, { status: 200 });
        }

        if (url.pathname === "/health") {
            return new Response("OK", { status: 200 });
        }

        if (url.pathname === '/about') {
            return new Response("About Page", { status: 200 });
        }

        return new Response("Not Found", { status: 404 });
    },
});

console.log(`Server listening at http://localhost:${server.port}/`);