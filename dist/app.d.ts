export declare function bootstrap(port?: number | string): Promise<{
    app: import("express-serve-static-core").Express;
    server: import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
    port: string | number;
}>;
