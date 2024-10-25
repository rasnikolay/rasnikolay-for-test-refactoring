const hasStatus = (response: Response, statusCode: number) => {
  return response.status === statusCode;
};

const hasNotFoundStatus = (response: Response) => hasStatus(response, HttpStatusCode.NOT_FOUND_404);
const hasForbiddenStatus = (response: Response) => hasStatus(response, HttpStatusCode.FORBIDDEN_403);
const hasServiceUnavailableStatus = (response: Response) => hasStatus(response, 503);

/* Плохо: нарушен принцип DRY не повторяйся.
   Улучшено: переиспольуземость при помощи hasStatus
 */