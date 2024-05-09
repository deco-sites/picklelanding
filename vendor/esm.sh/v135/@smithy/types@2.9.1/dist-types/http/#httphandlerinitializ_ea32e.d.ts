/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
import type { Agent as hAgent } from "https://esm.sh/v135/@types/node@18.16.19/http.d.ts";
import type { Agent as hsAgent } from "https://esm.sh/v135/@types/node@18.16.19/https.d.ts";
/**
 *
 * This type represents an alternate client constructor option for the entry
 * "requestHandler". Instead of providing an instance of a requestHandler, the user
 * may provide the requestHandler's constructor options for either the
 * NodeHttpHandler or FetchHttpHandler.
 *
 * For other RequestHandlers like HTTP2 or WebSocket,
 * constructor parameter passthrough is not currently available.
 *
 * @public
 */
export type RequestHandlerParams = NodeHttpHandlerOptions | FetchHttpHandlerOptions;
/**
 * Represents the http options that can be passed to a node http client.
 * @public
 */
export interface NodeHttpHandlerOptions {
    /**
     * The maximum time in milliseconds that the connection phase of a request
     * may take before the connection attempt is abandoned.
     *
     * Defaults to 0, which disables the timeout.
     */
    connectionTimeout?: number;
    /**
     * The number of milliseconds a request can take before automatically being terminated.
     * Defaults to 0, which disables the timeout.
     */
    requestTimeout?: number;
    /**
     * @deprecated Use {@link requestTimeout}
     *
     * The maximum time in milliseconds that a socket may remain idle before it
     * is closed.
     */
    socketTimeout?: number;
    httpAgent?: hAgent;
    httpsAgent?: hsAgent;
}
/**
 * Represents the http options that can be passed to a browser http client.
 * @public
 */
export interface FetchHttpHandlerOptions {
    /**
     * The number of milliseconds a request can take before being automatically
     * terminated.
     */
    requestTimeout?: number;
    /**
     * Whether to allow the request to outlive the page. Default value is false.
     *
     * There may be limitations to the payload size, number of concurrent requests,
     * request duration etc. when using keepalive in browsers.
     *
     * These may change over time, so look for up to date information about
     * these limitations before enabling keepalive.
     */
    keepAlive?: boolean;
}
