"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { Suspense, useEffect, useMemo, useRef } from "react";

const METRIKA_ID = 105426640;
const INIT_EVENT = `yacounter${METRIKA_ID}inited`;

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

const buildUrl = (
  pathname: string | null,
  searchParams: ReturnType<typeof useSearchParams> | null
) => {
  if (!pathname) {
    return null;
  }

  const search = searchParams?.toString();
  const url = search ? `${pathname}?${search}` : pathname;
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return `${origin}${url}`;
};

const YandexMetrikaInner = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousUrl = useRef<string | null>(
    typeof document !== "undefined" ? document.referrer || null : null
  );

  const currentUrl = useMemo(
    () => buildUrl(pathname, searchParams),
    [pathname, searchParams]
  );

  useEffect(() => {
    if (!currentUrl || typeof window === "undefined") {
      return;
    }

    const sendHit = () => {
      if (typeof window.ym !== "function") {
        return;
      }

      window.ym(METRIKA_ID, "hit", currentUrl, {
        referer: previousUrl.current || undefined,
      });

      previousUrl.current = currentUrl;
    };

    if (typeof window.ym === "function") {
      sendHit();
      return;
    }

    const handleInit = () => {
      sendHit();
      window.removeEventListener(INIT_EVENT, handleInit);
    };

    window.addEventListener(INIT_EVENT, handleInit);

    return () => {
      window.removeEventListener(INIT_EVENT, handleInit);
    };
  }, [currentUrl]);

  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive" // не ломает Lighthouse
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
                }
                k=e.createElement(t),a=e.getElementsByTagName(t)[0];
                k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}', 'ym');

            ym(${METRIKA_ID}, 'init', {
              defer:true,
              ssr:true,
              webvisor:true,
              clickmap:true,
              ecommerce:"dataLayer",
              accurateTrackBounce:true,
              trackLinks:true,
              triggerEvent:true
            });
          `,
        }}
      />
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${METRIKA_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};

export const YandexMetrika = () => (
  <Suspense fallback={null}>
    <YandexMetrikaInner />
  </Suspense>
);
