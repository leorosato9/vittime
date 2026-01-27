import Head from "next/head";
import { useEffect, useRef } from "react";

export default function CorpoTemplate({
  title,
  subtitle,
  heroImage = "/default-hero.jpg",
  heroColor = "#7AA3C7",
  sections = [],
  quote,
  quoteAuthor,
}) {
  const heroSentinelRef = useRef(null);

  /* =========================
     Header inversion logic
     ========================= */
  useEffect(() => {
    const headerEl = document.getElementById("site-header");
    if (!headerEl || !heroSentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headerEl.classList.add("header--inverted");
        } else {
          headerEl.classList.remove("header--inverted");
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(heroSentinelRef.current);

    return () => {
      headerEl.classList.remove("header--inverted");
      observer.disconnect();
    };
  }, []);

  const scrollToContent = () => {
    const target = document.getElementById("corpo-content");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {/* =========================
         HERO
         ========================= */}
      <section
        className="corpoHero"
        style={{ "--hero-color": heroColor }}
      >
        {/* Sentinel per header */}
        <div ref={heroSentinelRef} className="corpoHeroSentinel" />

        {/* Immagine hero */}
        <img
          src={heroImage}
          alt=""
          className="corpoHeroImage"
        />

        {/* Contenuto hero */}
        <div className="corpoContainer corpoHeroInner">
          <div className="corpoKicker"></div>

          <h1 className="corpoTitle">{title}</h1>

          {subtitle && (
            <p className="corpoSubtitle">{subtitle}</p>
          )}
        </div>
      </section>

      {/* =========================
         CONTENUTO
         ========================= */}
      <section className="corpoMain" id="corpo-content">
        <div className="corpoContainer">
          {sections.map((s, idx) => (
            <div
              key={idx}
              className={`corpoSection ${idx % 2 ? "isReverse" : ""}`}
            >
              {/* Testo */}
              <div className="corpoText">
                {s.blockTitle && (
                  <h2 className="corpoBlockTitle">
                    {s.blockTitle}
                  </h2>
                )}

                {s.paragraphs?.map((p, i) => (
                  <p key={i} className="corpoParagraph">
                    {p}
                  </p>
                ))}
              </div>

              {/* Media */}
              {s.image && (
                <div className="corpoMedia">
                  <img
                    src={s.image}
                    alt={s.imageAlt || ""}
                  />
                </div>
              )}

              {/* Quote dopo il primo blocco */}
              {idx === 0 && quote && (
                <div className="corpoQuoteWrap">
                  <div className="corpoQuote">
                    <p className="corpoQuoteText">
                      {quote}
                    </p>
                    {quoteAuthor && (
                      <p className="corpoQuoteAuthor">
                        {quoteAuthor}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
