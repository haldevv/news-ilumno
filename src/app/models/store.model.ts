export interface IStoreResponse <T> {
  isLoading: boolean
  data: T
  error?: IStoreResponseError
}

export interface IStoreResponseError {
  message: string
  error: any
}
