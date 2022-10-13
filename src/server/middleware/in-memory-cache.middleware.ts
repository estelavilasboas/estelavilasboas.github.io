import { RequestHandler } from 'express';
import NodeCache from 'node-cache';

const memCache = new NodeCache();

interface CacheMiddlewareConfigParams {
  cacheExpirationSeconds: number;
  cspScriptHash: string;
}

export const getCacheMiddleware = ({
  cacheExpirationSeconds,
  cspScriptHash,
}: CacheMiddlewareConfigParams): RequestHandler => {
  return function (req, res, next) {
    const isPage = (req.originalUrl || req.url).endsWith('/');

    if (!isPage) {
      return next();
    }

    const key = (req.originalUrl || req.url) + '-' + cspScriptHash;

    const cacheContent = memCache.get(key);

    if (cacheContent) {
      return res.send(cacheContent);
    }

    const originalSendFn = res.send.bind(res);

    res.send = (body) => {
      memCache.set(key, body, cacheExpirationSeconds);
      return originalSendFn(body);
    };

    return next();
  };
};
