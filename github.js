class GitHub {
  constructor() {
    this.client_id = "63ec38c2dd7db3ce7771";
    this.client_secret = "5ad43ca9bdb46a168992c1414daafa7ac7166c69";
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    
   // User response
   const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    
    // Repo response
    const reposResponse = await fetch(
     `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
   );


    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    };
  }
}
