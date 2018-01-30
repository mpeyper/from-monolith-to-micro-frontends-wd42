export const parent = `
import analyticsMiddleware from '@ioof/redux-middleware-analytics'
import gtm from '@ioof/analytics-forwarder-gtm'
import { analyticsHandler as exampleHandler } from '@ioof/example-micro-frontend'
import baseAnalyticsEventDecorator from './baseAnalyticsEventDecorator'

const handlers = [exampleHandler]
const decorators = [baseAnalyticsEventDecorator]
const forwarders = [gtm(configuration.GTM_CONTAINER)]

const store = createStore(reducer, analyticsMiddleware(handlers, decorators, forwarders))
`.trim()

export const child = `
export const analyticsHandler = (action) => {
  if (action.type === 'SOME_ACTION') {
    return action.someEventData;
  }
  return undefined;
};
`.trim()