export async function onRequest(context) {
  const { request, env } = context;

  const base = env.SHEETS_API_BASE_URL;
  const token = env.SHEETS_API_TOKEN;

  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  if (!key) {
    return new Response(JSON.stringify({ ok:false, error:"Missing key" }), { status:400 });
  }

  const url = new URL(base);
  url.searchParams.set("route", "product");
  url.searchParams.set("key", key);
  url.searchParams.set("token", token);

  const res = await fetch(url.toString());
  const data = await res.text();

  return new Response(data, {
    headers: { "Content-Type": "application/json" }
  });
}
