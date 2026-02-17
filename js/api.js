(function () {

  async function getHealth() {
    const r = await fetch("/api/products?route=health");
    return r.json();
  }

  async function getProducts() {
    const r = await fetch("/api/products");
    return r.json();
  }

  async function getProduct(key) {
    const r = await fetch("/api/product?key=" + encodeURIComponent(key));
    return r.json();
  }

  async function createLead(payload) {
    const r = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    return r.json();
  }

  async function createOrder(payload) {
    const r = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    return r.json();
  }

  window.RELIANCE_API = { getHealth, getProducts, getProduct, createLead, createOrder };

})();
