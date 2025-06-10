class Product {
    constructor({ id, name, description, category, brand, condition, location, price, date}) {
        this.id = id || '';
        this.name = name || '';
        this.description = description || '';
        this.category = category || '';
        this.brand = brand || '';
        this.condition = condition || '';
        this.location = location || '';
        this.price = price || 0;
        this.date = date || new Date().toISOString();
    }

    // Method to create a new Product from a JSON object
    static fromJSON(jsonData) {
        if (Array.isArray(jsonData)) {
            return jsonData.map(item => new Product(item));
        }
        return new Product(jsonData);
    }
}

export default Product;
