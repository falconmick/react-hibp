export const  debounce = (callback, wait, context = this) => {
  let timeout = null;
  let callbackArgs = null;

  const later = () => {
    callback.apply(context, callbackArgs);
    timeout = null
  };

  return function() {
    if (timeout) {
      timeout = clearTimeout(timeout);
    }

    callbackArgs = arguments;
    timeout = setTimeout(later, wait);
  }
};

/*

-        if (timeout) {
 -            timeout = clearTimeout(timeout);
 -        }
 -        timeout = setTimeout(fn.bind(null, ...arguments), time);
 */