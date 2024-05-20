export class AuthApi{
    async handleHttpRequest(url,method,data = null){
        try{
            const response = await fetch(url,{
                method:method,
                headers:{
                    'Content-Type':'application/json'
                },
                body:data ? JSON.stringify(data): null,
            });

            if(!response.ok){
                const error = await response.text();
                throw new Error(error);
            }
            const contentType = response.headers.get('Content-Type');
            if(contentType && contentType.includes('application/json')){
                return await response.json();
            }else {
                return await response.text();
            }
        }catch (error){
            throw new Error(`Error Http Request : ${error.message}`);
        }
    }

    async signIn(signIn){
        return this.handleHttpRequest("http://localhost:8080/shoe/api/v1/auth/signIn", "POST", signIn);
    }
}