export class CustomerApi {
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

    async saveCustomer(customer) {
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/customer", "POST", customer);
    }

    async getCustomer(custId) {
        return this.handleHttpRequest(`http://localhost:8080/shoe/api/v1/customer/${custId}`, "GET");
    }

    async updateCustomer(customer,customer_id) {
        console.log(customer_id);
        return this.handleHttpRequest(`http://localhost:8080/shoe/api/v1/customer/${customer_id}`, "PUT", customer);
    }

    async deleteCustomer(custId) {
        return this.handleHttpRequest(`http://localhost:8080/shoe/api/v1/customer/${custId}`, "DELETE");
    }

    async getAllCustomers() {
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/customer?action=getAllCustomers", "GET");
    }

    async generateCustomerId(){
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/customer/nextCustId", "GET");
    }
}