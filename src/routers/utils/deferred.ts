/**
 * deferred method found as solution for looping OCR process
 * https://stackoverflow.com/a/69027809
 */

export const deferred = <T>() => {
    let resolve!: (value: T | PromiseLike<T>) => void;
    let reject!: (reason?: unknown) => void;
    const promise = new Promise<T>((_resolve, _reject) => {
      resolve = _resolve;
      reject = _reject;
    });
    return { resolve, reject, promise };
  };


let {resolve, reject, promise} = deferred<string>();