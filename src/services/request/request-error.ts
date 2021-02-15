interface ErrorTtpe {
  statusText: string;
  status: number;
}

export default class RequestError extends Error {
  message: string;
  status: number;
  constructor(response: ErrorTtpe) {
    super();
    this.message = response.statusText;
    this.status = response.status;
  }
}
