import * as Sentry from "@sentry/cloudflare";

export const onRequest = [
  // Make sure Sentry is the first middleware
  Sentry.sentryPagesPlugin((context) => ({
    dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
    // Set tracesSampleRate to 1.0 to capture 100% of spans for tracing.
    tracesSampleRate: 1.0,
  })),
  // Add more middlewares here
];
