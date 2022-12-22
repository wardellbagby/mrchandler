interface AnalyticsEvent {
  path: string;
  title?: string;
  referrer?: string;
  event: boolean;
}

interface Goatcounter {
  url?: (event: AnalyticsEvent) => string;
  filter?: () => boolean;
}

interface Window {
  goatcounter?: Goatcounter;
}
