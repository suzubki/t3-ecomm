export const getErrorDescription = (status: number | undefined, cause: string | undefined) => {
  switch (status) {
    case 400:
      return 'Invalid data, please check it and try again'

    case 401:
      return 'Not authorized, bad credentials'

    case 403:
      return 'You are not allowed to perform this action'

    case 404:
      return 'Resource not found'

    case 500:
      if (cause?.includes('Unique constraint failed on the fields: (`email`)')) {
        return 'This email address is already in use. Please choose another one.'
      }
      return 'Internal server error'

    default:
      return 'An error has occurred, please try again later'
  }
}