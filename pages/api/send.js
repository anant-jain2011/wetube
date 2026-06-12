// Ensure the global tracking container exists here too
if (!global.clients) {
  global.clients = [];
}

export default function handler(req, res) {
  // 1. Enforce that this endpoint only accepts POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    // 2. Extract the body data sent by your client/system
    const { id, frameData } = req.body;

    if (!frameData) {
      return res.status(400).json({ error: "No data payload provided" });
    }

    // 3. Loop through all active SSE streams and push the new data out
    global.clients.forEach((clientStream) => {
        console.log(id, 22);
        clientStream.write(`id: ${id}\n`);
        clientStream.write(`data: ${JSON.stringify({ frameData })}\n\n`);
    });

    // 4. Respond to the sender that the broadcast succeeded
    return res.status(200).json({
      success: true,
      broadcastedTo: global.clients.length,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal broadcast failure" });
  }
}
