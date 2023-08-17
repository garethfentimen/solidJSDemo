const baseUrl = `wss://ws.coincap.io/prices?assets=`;

export class ConnectionService {

  async connect() {
    if (!this.nesClient || this.nesClient.closed) {
      this.nesClient = this.getClient();
      await this.nesClient.connect();
    }
    return this.nesClient;
  }
  
  getClient() {
    // import.meta.env.wsUrl
    return new Nes.Client('ws://demomocktradingserver.azurewebsites.net');
  }
}