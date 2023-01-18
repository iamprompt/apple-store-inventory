const gaMeasurementID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export function analyticsEvent(event: string, value?: unknown): void {
  const Window = window as any

  if (gaMeasurementID && typeof Window.gtag === 'function') {
    Window.gtag('event', event, value)
  }
}
