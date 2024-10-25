class ServerApi {
  public sendRequest<T>(method: string, url: string, data?: T): Promise<T> {
    return this.fetch(method, url, data);
  }
}

/* Плохо: дублирование кода
   Улучшено: написана более общирная функция
 */