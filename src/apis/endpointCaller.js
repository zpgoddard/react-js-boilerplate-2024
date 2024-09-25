import axios from 'axios';
import loggers from '../utils/loggers';

const MAX_ATTEMPTS = 3;
const TIMEOUT = 7000;

export const call = (data, headers, method, url, route) => axios({
  data,
  headers: { ...headers },
  method,
  TIMEOUT,
  url,
}).then(res => { 
  if (res.data.error) {
    loggers.logError(`FAILED CALL ${route}`, res.error);
  } else {
    loggers.log(`SUCCESSFULL CALL ${route}`, res);
    return res;
  }
}).catch(_ => false);

export const backendCaller = async ({
  endpoint: {route, method}, 
  headers,
  routeparams = [], 
  service: {
    baseUrl, 
    name, 
    socketAddress
  }, 
  data
}) => {
  const joinedRoutes = routeparams ? routeparams.join('/') : '';
  loggers.log(`Calling "${route}" endpoint.`, {data, headers, method, url: socketAddress.concat(baseUrl, route, joinedRoutes === '' ? '' : '/',joinedRoutes)});
  let result = await call(data, headers, method, socketAddress.concat(baseUrl, route, joinedRoutes === '' ? '' : '/',joinedRoutes));
  for (let attempt = 1; !result  && attempt <= MAX_ATTEMPTS; attempt++) { 
    // user feedback for loading multiple attempts
    loggers.log(`Call failed, retying (Attempt #${attempt})`);
    result = await call(data, headers, method, socketAddress.concat(baseUrl, route, joinedRoutes === '' ? '' : '/',joinedRoutes));
    if (attempt === MAX_ATTEMPTS) {
      // user feedback for all attempts failing
    }
  }
  return result;
};

export default backendCaller;