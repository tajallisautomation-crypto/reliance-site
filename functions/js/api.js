async function fetchProducts() {
    try {
        const response = await fetch('/api/products');
        const products = await response.json();
        console.log("Products loaded:", products);
        // Logic to render products to HTML goes here
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }
}