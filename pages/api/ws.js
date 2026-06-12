export const config = {
  api: {
    bodyParser: false,
  },
};

global.clients = global.clients || [];

export default function handler(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache, no-transform", // 'no-transform' stops proxies from buffering
    Connection: "keep-alive",
  });

  res.flushHeaders();

  global.clients.push(res);

  console.log("Client connected to SSE stream");

  // Send an initial message to confirm successful connection
  //   res.write("data: Connected to Next.js SSE stream\n\n");

  // 3. Set up an interval loop to continuously stream data
//   const intervalId = setInterval(() => {
//     const payload = {
//       timestamp: new Date().toISOString(),
//       message: "Live server update!",
//     };

//     // SSE requires the format to explicitly be "data: <string>\n\n"
//     res.write(`data: ${JSON.stringify(payload)}\n\n`);
//   }, 1000);

  // 4. Clean up the loop when the client closes the browser tab
  req.on("close", () => {
    console.log("Client disconnected. Clearing interval...");
    global.clients = global.clients.filter((client) => client !== res);
    // clearInterval(intervalId);
    res.end();
  });
}
