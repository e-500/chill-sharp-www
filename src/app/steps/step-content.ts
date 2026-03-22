export interface StepCta {
  label: string;
  route: string;
}

export interface StepContent {
  id: number | string;
  route: string;
  shortTitle: string;
  eyebrow: string;
  title: string;
  intro: string;
  paragraphs: string[];
  bullets: string[];
  sideTitle: string;
  sideText: string;
  codeLanguage: string;
  codeUrl: string;
  cta: StepCta;
  videoUrl: string | null;
}

export const SERVER_SIDE_CONTENT: StepContent[] = [
  {
    id: 'dbcontext-to-api',
    route: 'server-side/dbcontext-to-api',
    shortTitle: 'From DbContext to API',
    eyebrow: 'From DbContext to API',
    title: 'Transform your DbContext into an API in minutes',
    intro:
      'The current ChillSharp documentation starts from a pragmatic assumption: your data model already exists, your EF Core context is already meaningful, and writing another layer of repetitive CRUD code is not where the project should spend its energy.',
    paragraphs: [
      'The minimal registration flow is intentionally small. Register the EF Core context, add AddChillApi<TContext>(), map the Chill API, and the host is already able to expose the standard query, create, update, delete, and chunk operations. That means the first useful milestone arrives quickly, without spending days on controllers, DTO mappers, endpoint conventions, and manual request plumbing.',
      'This is where ChillSharp reduces time to market in a concrete way. Instead of inventing infrastructure before validating the product shape, the team can move from model to working backend almost immediately. The documentation then layers optional modules only when they are needed, so the first deployment stays lighter in packaging, easier to compile, and much easier to explain to the next developer who opens the project.'
    ],
    bullets: [
      'Your existing DbContext remains the source of truth instead of being duplicated in parallel API models.',
      'The host stays compact while still exposing a production-oriented HTTP surface.',
      'Schema, auth, permissions, and internationalization (i18n) can be added later without rewriting the starting point.'
    ],
    sideTitle: 'Prepare your DBContext for ChillSharp API',
    sideText:
      'This is a walkthrough video that shows the how to prepare you DbContext, from project start to mapped endpoints. As you can see in the code snippet below: Is necessary only 1 line of code to enable endpoints.',
    codeLanguage: 'csharp',
    codeUrl: 'assets/snippets/server-side-1-dbcontext-to-api.cs',
    cta: {
      label: 'Continue to: query and schema',
      route: '/server-side/query-and-schema'
    },
    videoUrl: "https://www.youtube.com/embed/mvKPkKyPmKg?si=lKknH0qLygm9A3pc"
  },
  {
    id: 'query-and-schema',
    route: 'server-side/query-and-schema',
    shortTitle: 'Query and schema',
    eyebrow: 'Query and schema',
    title: 'How to get data and retrive only you need',
    intro:
      'Once the API is up, the next practical question is simple: how do you get the data you need without moving far more than the client actually has to render? This page focuses on querying with precision and using schema information to understand exactly what is available.',
    paragraphs: [
      'With ChillSharp, querying is not about loading a full entity graph and filtering it later on the client. You can ask only for the properties that matter for the current screen or operation, keeping payloads lighter and responses easier to consume. That is especially useful when lists, previews, dashboards, or integrations need focused data instead of a full object every time.',
      'Schema support completes that story. The code snippet shows the shape of this approach: query the backend with explicit result properties and rely on schema metadata when the client needs to understand how a type should be presented. In practice, this gives the application a cleaner contract between what the server can expose and what the frontend really needs to read.'
    ],
    bullets: [
      'Request only the fields needed by the current page, component, or workflow.',
      'Use schema information to understand available properties and shape client rendering more safely.',
      'Keep responses smaller and clearer instead of sending oversized payloads to every consumer.'
    ],
    sideTitle: 'Why this matters',
    sideText:
      'This is the point where the API starts becoming efficient, not just available. Good queries and clear schema information help the client retrieve only what is needed and nothing more.',
    codeLanguage: 'csharp',
    codeUrl: 'assets/snippets/server-side-2-query-and-schema.cs',
    cta: {
      label: 'Continue to: schema metadata',
      route: '/server-side/schema-metadata'
    },
    videoUrl: "https://www.youtube.com/embed/okoMlwt9GWM?si=bzSfzZ7Jn_sQRFsm"
  },
  {
    id: 'schema-metadata',
    route: 'server-side/schema-metadata',
    shortTitle: 'Schema metadata',
    eyebrow: 'Schema metadata',
    title: 'Decorate ChillQuery and ChillEntity classes to let ChillSharp build the UI in the user culture',
    intro:
      'After precise queries come meaningful labels. ChillSharp can return the metadata needed to build user interfaces, but that only works when entities and queries are decorated so the platform knows how every type and property should be described.',
    paragraphs: [
      'This is where ChillEntity and ChillQuery become more than transport classes. By decorating them with ChillEntity and ChillProperty attributes, the backend can expose display names and field metadata that frontend layers can consume directly. That gives the UI a cleaner source of truth for labels, forms, and lists instead of scattering translated captions across multiple clients.',
      'The code snippet shows the pattern clearly: decorate both the entity and the query classes, assign stable keys, and provide primary and secondary language labels. ChillSharp can then return metadata aligned with the current user culture, helping the application build interfaces that feel consistent, localized, and much easier to maintain over time.'
    ],
    bullets: [
      'Decorate ChillEntity and ChillQuery classes so the backend can describe types and fields explicitly.',
      'Attach localized labels to properties so the UI can render captions according to the active user culture.',
      'Keep schema information close to the model instead of duplicating presentation labels across clients.'
    ],
    sideTitle: 'UI metadata from the model',
    sideText:
      'This step turns the model into a culture-aware UI contract. Once metadata lives on entities and queries, ChillSharp can return the information needed to build screens that match the user language and remain consistent across applications.',
    codeLanguage: 'csharp',
    codeUrl: 'assets/snippets/server-side-3-schema-and-metadata.cs',
    cta: {
      label: 'Continue to: Authentication',
      route: '/server-side/authentication'
    },
    videoUrl: "https://www.youtube.com/embed/okoMlwt9GWM?si=bzSfzZ7Jn_sQRFsm"
  },
  {
    id: 'authentication',
    route: 'server-side/authentication',
    shortTitle: 'Authentication',
    eyebrow: 'Authentication',
    title: 'Protect endopints with Authentication',
    intro:
      'Security should not appear only after the API is already in use. ChillSharp treats authentication as part of the normal startup path, so the application can expose protected endpoints from the beginning instead of retrofitting the whole host later.',
    paragraphs: [
      'The documented setup protects the core Chill API and layers ASP.NET Core Identity-backed account flows on top of it. Registration, login, token refresh, password change, and password reset are already provided, so the host does not need a second custom authentication layer just to become usable. In day-to-day application work, that means the normal login and logout lifecycle is ready to wire into the frontend while ChillSharp handles the authentication surface consistently on the backend.',
      'Reset by email is also part of the story. If you want the password-reset flow to send a real email to the user, remember to configure SMTP correctly in the host application. Once that is in place, ChillSharp can support the usual recovery path without pushing the team into custom account-management endpoints or fragmented auth logic.'
    ],
    bullets: [
      'ProtectedApi = true closes the core API to anonymous traffic.',
      'AddChillAuthIdentityApi<TContext, TUser>() adds ready-to-use register, login, refresh, password-change, and reset flows.',
      'Email-based password reset is supported when SMTP is configured.'
    ],
    sideTitle: 'Operational payoff',
    sideText:
      'You avoid the common trap of launching fast and then rebuilding the host around authentication later. The secure account flow is already part of the baseline, so the team can integrate it immediately.',
    codeLanguage: 'csharp',
    codeUrl: 'assets/snippets/server-side-4-authentication.cs',
    cta: {
      label: 'Continue to: permissions without the drag',
      route: '/server-side/permissions'
    },
    videoUrl: "https://www.youtube.com/embed/okoMlwt9GWM?si=bzSfzZ7Jn_sQRFsm"
  },
  {
    id: 'permissions',
    route: 'server-side/permissions',
    shortTitle: 'Permissions',
    eyebrow: 'Permissions',
    title: 'Permissions to property scope',
    intro:
      'Strong permission systems often become heavy because they try to solve everything with custom logic. ChillSharp keeps the model explicit and strict, but still small enough to stay usable during day-to-day delivery.',
    paragraphs: [
      'The permission model is default-deny, understands module, entity, and property scopes, and resolves precedence in a predictable way. User rules override role rules, property rules refine broader entity access, and deny wins where it should. This gives the system a serious security posture without turning every screen into a pile of special cases.',
      'That balance matters in NIS2-style contexts where access control must be demonstrable, not improvised. Developers can grant broad access where the workflow is safe, selectively deny changes to sensitive fields, and use permission evaluation endpoints so the UI reflects the same truth enforced by the server. The result is governance without becoming tedious, and speed without becoming careless.'
    ],
    bullets: [
      'Grant wide permissions where the role genuinely needs them.',
      'Deny only the sensitive actions or properties that require tighter control.',
      'Use evaluation endpoints to keep frontend behavior aligned with server-side enforcement.'
    ],
    sideTitle: 'NIS2 without the drag',
    sideText:
      'The model stays compact enough for real teams to maintain, while still being explicit enough to support audits, role reviews, and controlled data exposure.',
    codeLanguage: 'csharp',
    codeUrl: 'assets/snippets/server-side-5-permissions.cs',
    cta: {
      label: 'Continue to: dockerize your application',
      route: '/server-side/dockerize'
    },
    videoUrl: "https://www.youtube.com/embed/okoMlwt9GWM?si=bzSfzZ7Jn_sQRFsm"
  },
  {
    id: 'dockerize',
    route: 'server-side/dockerize',
    shortTitle: 'Dockerize',
    eyebrow: 'Dockerize',
    title: 'How to dockerize your application',
    intro:
      'After the API surface is ready, the final server-side step is packaging the application so it runs the same way across machines, environments, and deployment stages.',
    paragraphs: [
      'Dockerization gives the ChillSharp host a predictable runtime shape. Instead of relying on machine-specific setup, you can package the application with its runtime dependencies and launch it in a consistent way for development, staging, or production. That reduces environment drift and makes the handoff from coding to deployment much calmer.',
      'The snippet below keeps the entry point practical by placing both the Dockerfile and docker-compose.yml in one place. It shows the usual container story for a ChillSharp service: build the application image, expose the API port, and mount persistent storage or local data in a way that is easy to run and easy to adapt.'
    ],
    bullets: [
      'Use a Dockerfile to package the ChillSharp host into a reproducible runtime image.',
      'Use docker-compose to define ports, volumes, and startup settings in one place.',
      'Keep the application easier to ship, test, and operate across different environments.'
    ],
    sideTitle: 'Deployment readiness',
    sideText:
      'This final step turns the project from a local application into something that is easier to share with the team and much easier to move toward real deployment workflows.',
    codeLanguage: 'xml',
    codeUrl: 'assets/snippets/server-side-6-dockerize.txt',
    cta: {
      label: 'Continue on client side',
      route: '/client-side/typescript'
    },
    videoUrl: "https://www.youtube.com/embed/okoMlwt9GWM?si=bzSfzZ7Jn_sQRFsm"
  }
];

export const CLIENT_SIDE_CONTENT: StepContent[] = [
  {
    id: 'typescript',
    route: '/client-side/typescript',
    shortTitle: 'TypeScript',
    eyebrow: 'Client side · TypeScript',
    title: 'TypeScript client for web teams that want a fast and clean starting point',
    intro:
      'When frontend teams need to move quickly, the generic TypeScript client is the most direct bridge to a ChillSharp backend. It speaks the standard API surface and keeps the first integration practical instead of ceremonial.',
    paragraphs: [
      'The TypeScript package talks directly to /api/chill, /api/chill-auth, and /api/chill-i18n, so a web application can start with real API calls immediately. That matters because client-side teams usually do not need another generated layer on day one. They need a transport that is clear, predictable, and already aligned with the backend conventions.',
      'This client stays intentionally lightweight. Payloads remain plain objects, schema access is already available, auth flows can be handled from the same client, and the team can postpone stronger typing until the host stabilizes. In practice, that means a faster first delivery and less ceremony while product assumptions are still moving.'
    ],
    bullets: [
      'Use one client for core entities, auth flows, schema access, and i18n.',
      'Start with generic objects and move to generated types later only if the project truly benefits from them.',
      'Keep the early frontend stack small without losing access to the important backend capabilities.'
    ],
    sideTitle: 'Best fit',
    sideText:
      'TypeScript is the natural starting point when the team wants one reusable client that works across multiple UI stacks and does not force a framework decision too early.',
    codeLanguage: 'typescript',
    codeUrl: 'assets/snippets/dev-typescript.ts',
    cta: {
      label: 'Continue to React developers',
      route: '/client-side/react'
    },
    videoUrl: null
  },
  {
    id: 'react',
    route: '/client-side/react',
    shortTitle: 'React',
    eyebrow: 'Client side · React',
    title: 'React integration that stays generic but still feels native to application code',
    intro:
      'React teams often want more than a raw HTTP client but less than a rigid generated SDK. The ChillSharp React package sits in that middle ground with provider-based setup and hooks that map naturally into a React codebase.',
    paragraphs: [
      'The React wrapper builds on the generic TypeScript client and adds the pieces React developers actually reach for: a provider, direct client access, schema hooks, text hooks, health checks, and generic mutations. That shortens the path from backend availability to a usable React screen because the data-access layer already fits the component model.',
      'Just as importantly, it remains intentionally generic. It does not pretend to know the application domain better than the application itself. React teams can use the hooks to move fast with schema-driven screens and generic mutations, then keep full control over local state, caching, or more opinionated query layers when the product demands them.'
    ],
    bullets: [
      'Provider setup makes the client available application-wide with one consistent base URL.',
      'Hooks expose schema, i18n, status, and mutation flows without forcing model-specific code generation.',
      'The package works well when React teams want speed first and stronger specialization later.'
    ],
    sideTitle: 'React mindset',
    sideText:
      'This package helps React teams stay in their normal workflow instead of wrapping the backend in another custom layer before the first useful screen exists.',
    codeLanguage: 'typescript',
    codeUrl: 'assets/snippets/dev-react.tsx',
    cta: {
      label: 'Continue to Angular developers',
      route: '/client-side/angular'
    },
    videoUrl: null
  },
  {
    id: 'angular',
    route: '/client-side/angular',
    shortTitle: 'Angular',
    eyebrow: 'Client side · Angular',
    title: 'Angular helpers that fit dependency injection and Observable-based applications',
    intro:
      'Angular teams usually want the client layer to feel like part of the framework, not a foreign helper object. The ChillSharp Angular package is shaped around that expectation.',
    paragraphs: [
      'The Angular wrapper adds provider-based setup, a DI token for the raw client, and an Observable-oriented service surface. That means the integration fits naturally inside Angular bootstrap, service injection, and template-driven reactive flows. The team does not have to build another application-specific wrapper before it can start loading schemas, sending mutations, or wiring authentication.',
      'This matters most in structured frontend environments where consistency is part of maintainability. A shared Angular client setup keeps the application easier to reason about, especially when multiple teams or modules touch the same backend. The result is less duplicated transport logic and a cleaner line between UI concerns and backend contracts.'
    ],
    bullets: [
      'Use Angular DI to make the client available everywhere without manual wiring.',
      'Observable-based helpers fit naturally with existing Angular service patterns.',
      'Raw client access is still available when a feature needs direct control.'
    ],
    sideTitle: 'Angular discipline',
    sideText:
      'The Angular package works best when the frontend values consistency, centralized configuration, and a client layer that behaves like a first-class Angular service.',
    codeLanguage: 'typescript',
    codeUrl: 'assets/snippets/dev-angular.ts',
    cta: {
      label: 'Continue to Vue developers',
      route: '/client-side/vue'
    },
    videoUrl: "https://www.youtube.com/embed/UBYzrDzyK1k?si=gKgm0YWk-1tZN09r"
  },
  {
    id: 'vue',
    route: '/client-side/vue',
    shortTitle: 'Vue',
    eyebrow: 'Client side · Vue',
    title: 'Vue helpers for teams that want composables, plugin setup, and a lightweight integration surface',
    intro:
      'Vue teams often prefer a small integration layer that respects the framework style instead of dominating it. The ChillSharp Vue package follows that approach with plugin registration and composables.',
    paragraphs: [
      'The Vue wrapper builds on the same generic TypeScript client and exposes the backend through plugin configuration, client access, schema composables, text retrieval, health checks, and mutation helpers. That makes it easy to keep the API layer close to the Composition API style that Vue developers already use every day.',
      'The result is a frontend integration that remains light while still being complete enough for real products. Teams can wire the plugin once, reach the backend from composables and components, and preserve the flexibility that usually makes Vue attractive in the first place. It is a good fit for teams that want momentum without giving up architectural clarity.'
    ],
    bullets: [
      'Plugin setup keeps the client configuration centralized and easy to reason about.',
      'Composables expose the same core backend capabilities in a Vue-friendly way.',
      'The package stays generic so the application can evolve without being trapped in generated abstractions.'
    ],
    sideTitle: 'Vue flexibility',
    sideText:
      'This package keeps the integration small enough to stay elegant, but complete enough to support serious applications and shared frontend conventions.',
    codeLanguage: 'typescript',
    codeUrl: 'assets/snippets/dev-vue.ts',
    cta: {
      label: 'Continue to Python and research workflows',
      route: '/client-side/python'
    },
    videoUrl: null
  },
  {
    id: 'python',
    route: '/client-side/python',
    shortTitle: 'Python',
    eyebrow: 'Client side · Python',
    title: 'Python for research teams that need consistent data handling with professional tooling',
    intro:
      'The Python page tells a different story. Not every client is a browser application, and not every ChillSharp consumer is building an admin panel. Research, analytics, and scientific workflows often need the same data consistency with a different set of daily tools.',
    paragraphs: [
      'Where research teams have to store data consistently, validate what enters the system, and keep a dependable bridge between acquisition, processing, and publication, ChillSharp is already ready with a professional client path. The Python package targets the same backend surface and lets laboratories, analysis pipelines, and technical teams work with structured data without abandoning their normal ecosystem.',
      'That matters because scientific and professional environments rarely want a toy integration. They want something that binds cleanly with the tools they already trust: scripts, notebooks, ETL tasks, scheduled jobs, or domain-specific pipelines. ChillSharp fits that story by keeping the transport predictable, the payloads explicit, and the backend model shared across research and application layers.'
    ],
    bullets: [
      'Use the Python client in scripts, services, notebooks, and data-processing workflows.',
      'Keep research data entry and retrieval consistent with the same backend rules used by the application stack.',
      'Adopt a professional integration path that works with usual Python tools instead of forcing a separate ecosystem.'
    ],
    sideTitle: 'Professional research workflows',
    sideText:
      'When correctness, repeatability, and consistent storage matter as much as speed, the Python client gives ChillSharp a natural place inside research and technical operations.',
    codeLanguage: 'python',
    codeUrl: 'assets/snippets/dev-python.py',
    cta: {
      label: 'Return to the teaser overview',
      route: '/'
    },
    videoUrl: null
  }
];

export function getServerSideContent(id: string): StepContent | undefined {
  return SERVER_SIDE_CONTENT.find(step => step.id === id);
}

export function getClientSideContent(id: string): StepContent | undefined {
  return CLIENT_SIDE_CONTENT.find(step => step.id === id);
}
