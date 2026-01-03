export const organizerLandingRoutes = {
  sv: '/sv/for-arrangorer/',
  en: '/en/for-organizers/',
} as const;

export type OrganizerLandingLang = keyof typeof organizerLandingRoutes;

export const getOrganizerLandingUrl = (lang: OrganizerLandingLang) =>
  organizerLandingRoutes[lang];

export const getOrganizerLandingAlternateUrl = (lang: OrganizerLandingLang) =>
  lang === 'sv' ? organizerLandingRoutes.en : organizerLandingRoutes.sv;
