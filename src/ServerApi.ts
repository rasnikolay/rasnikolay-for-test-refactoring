class ServerApi {
  public processAddAccountRequest(url: string, account: TAccount) {
    return this.fetch('POST', url, account);
  }

  public sendDeleteAccountRequest(url: string, accountId: string) {
    return this.fetch('DELETE', url, accountId);
  }

  public requestAuth(url: string, credentials: TCredentials) {
    return this.fetch('GET', url, credentials);
  }
