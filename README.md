# Souha Alioua Portfolio

## Analytics

Production builds support Google Analytics 4 page-view and CTA click tracking. Analytics is disabled in development, when Do Not Track is enabled, or when no valid measurement ID is configured.

1. Create a GA4 property and web data stream for the portfolio URL.
2. Copy `.env.example` to `.env.production`.
3. Replace `G-XXXXXXXXXX` with the stream's Measurement ID.
4. Run `npm run deploy`.

Tracked clicks use the `link_click` event with non-personal `link_id` and `link_type` parameters. To track another link, add `data-analytics="unique-name"` and, optionally, `data-analytics-type="category"` to it. Never put a visitor's name, email address, or other personal data in these attributes.

In GA4, page views appear under **Reports → Engagement → Pages and screens**. Click events appear under **Reports → Engagement → Events**; Realtime and DebugView are useful for validating a deployment.

If your visitors are covered by laws that require consent for analytics cookies, add a consent banner and update the privacy notice before enabling the measurement ID.

## Development

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
