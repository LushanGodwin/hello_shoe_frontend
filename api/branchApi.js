export class BranchApi {

    async handleHttpRequest(url, method, data = null) {
        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: data ? JSON.stringify(data) : null,
            });

            const contentType = response.headers.get("content-type");
            if (response.ok) {
                if (contentType && contentType.includes("application/json")) {
                    return await response.json();
                } else {
                    return await response.text();
                }
            } else {
                const errorText = contentType && contentType.includes("application/json")
                    ? await response.json()
                    : await response.text();
                throw new Error(errorText);
            }
        } catch (error) {
            throw new Error(`Error during HTTP request: ${error.message}`);
        }
    }

    async save(branch) {
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/auth/branch", "POST", branch);
    }
}