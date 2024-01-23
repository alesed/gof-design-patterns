class Request {
  public url: string;
  public method: string;
  public payload: string;
  constructor() {
    this.url = "";
    this.method = "";
    this.payload = "";
  }
}

class RequestBuilder {
  private request: Request;

  constructor() {
    this.request = new Request();
  }

  setUrl(url: string): RequestBuilder {
    this.request.url = url;
    return this;
  }

  setMethod(method: string): RequestBuilder {
    this.request.method = method;
    return this;
  }

  setPayload(payload: string): RequestBuilder {
    this.request.payload = payload;
    return this;
  }

  build(): Request {
    return this.request;
  }

  reset(): void {
    this.request = new Request();
  }
}

const requestBuilder = new RequestBuilder();
const request = requestBuilder
  .setUrl("https://example.com")
  .setMethod("GET")
  .setPayload("Hello")
  .build();
requestBuilder.reset();
console.log(`Request: ${JSON.stringify(request)}`);
