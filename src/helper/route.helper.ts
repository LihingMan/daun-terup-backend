import express from "express";
// export a wrapper that catches errors and passes it to next(),

export function wrapHandler(fn: any) {
  return function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    // Make sure to `.catch()` any errors and pass them along to the `next()`
    fn(req, res, next).catch(next);
  };
}
