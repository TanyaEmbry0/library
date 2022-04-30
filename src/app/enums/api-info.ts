export class API {
  static Get(endpoint: string) {
    return `https://schoolofdotnet2022-staraplanina-api.azurewebsites.net/api/v1${endpoint}`;
  }
}
