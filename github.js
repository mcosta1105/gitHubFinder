class GitHub{
    constructor(){
        this.clientId = 'acc7e888af9fc4ec8eb1';
        this.clientSecret = '12306ed9b45067a202c049871ca20b673f528ceb';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        
        const profile = await profileResponse.json();

        return{
            profile:profile
        }
    }
    
}