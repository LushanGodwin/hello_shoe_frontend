export class SupplierApi{
    async handleHttpRequest(url, method, data = null) {
        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: data ? JSON.stringify(data) : null,
            });

            if (response.ok) {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    return await response.json();
                } else {
                    return await response.text();
                }
            } else {
                throw new Error(await response.text());
            }
        } catch (error) {
            throw new Error(`Error during HTTP request: ${error.message}`);
        }
    }

    async generateSupplierId() {
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/supplier/nextSupId", "GET");
    }

    async saveSupplier(supplier) {
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/supplier", "POST", supplier);
    }

    async updateSupplier(supplierModel, supplierId) {
        return this.handleHttpRequest(`http://localhost:8080/shoe/api/v1/supplier/${supplierId}`, "PUT", supplierModel);
    }

    async deleteSupplier(supplierId) {
        return this.handleHttpRequest(`http://localhost:8080/shoe/api/v1/supplier/${supplierId}`, "DELETE");
    }

    async getAllSuppliers() {
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/supplier", "GET");
    }

    async getSupplier(supplierId) {
        return this.handleHttpRequest(`http://localhost:8080/shoe/api/v1/supplier/${supplierId}`, "GET");
    }
}