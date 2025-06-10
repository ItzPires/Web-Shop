import Product from '../models/Product';

class Service {
    /**
     * Processes JSON data to create an array of Products.
     * @param {JSON} jsonData - JSON data.
     * @returns {Array<Product>} An array of Products.
     */
    static processJSON(jsonData) {
        try {
            return jsonData.map(item => new Product(item));

        } catch (error) {
            console.error('Failed to process products:', error);
            return [];
        }
    }

    /**
     * Processes a JSON file and returns an array of Products.
     * @param {File} file - A JSON file.
     * @returns {Promise<Array<Product>>} A Promise that resolves to an array of Products.
     * @throws {Error} If the file is not a valid JSON file.
     */
    static processFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                try {
                    const jsonData = JSON.parse(e.target.result);
                    resolve(this.processJSON(jsonData));
                } catch (err) {
                    reject(new Error('Invalid JSON format'));
                }
            };

            reader.onerror = () => reject(new Error('File reading failed'));
            reader.readAsText(file);
        });
    }
}

export default Service;
