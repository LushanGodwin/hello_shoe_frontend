export class ProductListApi{
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

    async saveGender(genderModel) {
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/inventory/genderSave", "POST", genderModel);
    }

    async updateGender(genderModel, genId) {
        return this.handleHttpRequest(`http://localhost:8080/shoe/api/v1/inventory/genderUpdate?id=${genId}`, "PUT", genderModel);
    }

    async deleteGender(genId) {
        return this.handleHttpRequest(`http://localhost:8080/shoe/api/v1/inventory/genderDelete?id=${genId}`, "DELETE");
    }

    async getAllGenders() {
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/inventory/genderGetAll", "GET");
    }

    async saveOccasion(occasionModel){
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/inventory/occasionSave", "POST", occasionModel);
    }

    async updateOccasion(occasionModel, occId){
        return this.handleHttpRequest(`http://localhost:8080/shoe/api/v1/inventory/occasionUpdate?id=${occId}`, "PUT", occasionModel);
    }

    async deleteOccasion(occId){
        return this.handleHttpRequest(`http://localhost:8080/shoe/api/v1/inventory/occasionDelete?id=${occId}`, "DELETE");
    }

    async getAllOccasions(){
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/inventory/occasionGetAll", "GET");
    }

    async saveSize(sizeModel) {
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/inventory/sizeSave", "POST", sizeModel);
    }

    async updateSize(sizeModel, sizeId) {
        return this.handleHttpRequest(`http://localhost:8080/shoe/api/v1/inventory/sizeUpdate?id=${sizeId}`, "PUT", sizeModel);
    }

    async getAllSizes() {
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/inventory/sizeGetAll", "GET");
    }

    async deleteSize(sizeId) {
        return this.handleHttpRequest(`http://localhost:8080/shoe/api/v1/inventory/sizeDelete?id=${sizeId}`, "DELETE");
    }

    generateSizeId() {
        return this.handleHttpRequest(`http://localhost:8080/shoe/api/v1/inventory/nextSizeId`, "GET");
    }

    async saveVariety(varietyModel) {
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/inventory/varietySave", "POST", varietyModel);
    }

    async updateVariety(varietyModel, varId) {
        return this.handleHttpRequest(`http://localhost:8080/shoe/api/v1/inventory/varietyUpdate?id=${varId}`, "PUT", varietyModel);
    }

    async getAllVarieties() {
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/inventory/varietyGetAll", "GET");
    }

    async deleteVariety(varId) {
        return this.handleHttpRequest(`http://localhost:8080/shoe/api/v1/inventory/varietyDelete?id=${varId}`, "DELETE");
    }

}