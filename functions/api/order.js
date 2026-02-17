export async function onRequest(context) {
  const { request, env } = context;

  const base = env.SHEETS_API_BASE_URL;
  const token = env.SHEETS_API_TOKEN;

  const body = await request.text();

  const url = new URL(base);
  url.searchParams.set("route", "order");
  url.searchParams.set("token", token);

  const res = await fetch(url.toString(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body
  });

  const data = await res.text();

  return new Response(data, {
    headers: { "Content-Type": "application/json" }
  });
}
