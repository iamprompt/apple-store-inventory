import { useRouter } from 'next/router'
import Script from 'next/script'
import { FC, useEffect } from 'react'
import { analyticsEvent } from '~/utils/analytics'

const gaMeasurementID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const GoogleAnalytics: FC = () => {
  const { asPath } = useRouter()

  useEffect(() => {
    analyticsEvent('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: asPath,
    })
  }, [asPath])

  return (
    <>
      <Script defer src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementID}`} />
      <Script
        defer
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${gaMeasurementID}', { send_page_view: false });`,
        }}
      />
    </>
  )
}
