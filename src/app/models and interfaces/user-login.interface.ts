export interface UserLogin{
  "id": string,
  "approved": boolean,
  "token": {
    "result": string,
    "id": number,
    "exception": null,
    "status": number,
    "isCanceled": boolean,
    "isCompleted": boolean,
    "isCompletedSuccessfully": boolean,
    "creationOptions": number,
    "asyncState": null,
    "isFaulted": boolean
  }
}
