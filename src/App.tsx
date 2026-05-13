import { useEffect, useState } from "react";

const stats = [
  {
    number: "94%",
    label: "Improvement in sleep quality",
  },
  {
    number: "28m",
    label: "Average faster time to sleep",
  },
  {
    number: "2.4×",
    label: "More deep sleep per night",
  },
  {
    number: "180k",
    label: "Nights tracked worldwide",
  },
];

const features = [
  {
    title: "Adaptive Soundscapes",
    desc: "Generative audio that shifts with your sleep stage.",
  },
  {
    title: "Smart Light Cues",
    desc: "Circadian tuned sunrise and sunset simulation.",
  },
  {
    title: "HRV Monitoring",
    desc: "Track nervous system recovery every night.",
  },
  {
    title: "Temperature Intelligence",
    desc: "AI-guided body cooling for deeper sleep.",
  },
  {
    title: "Precision Wake Window",
    desc: "Wake at your lightest sleep stage.",
  },
  {
    title: "Sleep Coaching",
    desc: "AI-powered weekly sleep improvement insights.",
  },
];

const testimonials = [
  {
    initials: "AR",
    name: "Aiko R.",
    role: "Product Designer",
    quote:
      "This completely transformed my sleep routine. I wake up refreshed every morning.",
  },
  {
    initials: "DM",
    name: "Dr. Mehta",
    role: "Sleep Specialist",
    quote:
      "The biometric tracking quality is surprisingly accurate and insightful.",
  },
  {
    initials: "SL",
    name: "Sam L.",
    role: "Marathon Runner",
    quote:
      "The smart wake feature alone changed how I feel throughout the day.",
  },
];

export default function App() {
  const [joined, setJoined] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const hiddenElements = document.querySelectorAll(".reveal");

    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleJoin = () => {
    if (!email.includes("@")) return;

    setJoined(true);
    setEmail("");
  };

  return (
    <div className="relative overflow-hidden bg-[var(--midnight)] text-[var(--text-primary)]">
      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <h1
            className="text-2xl uppercase tracking-[0.3em] text-[var(--teal)]"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Lumiq
          </h1>

          <div className="hidden items-center gap-10 text-sm uppercase tracking-[0.15em] text-[var(--text-secondary)] md:flex">
            <a
              href="#how"
              className="transition hover:text-[var(--teal)]"
            >
              How it works
            </a>

            <a
              href="#features"
              className="transition hover:text-[var(--teal)]"
            >
              Features
            </a>

            <a
              href="#reviews"
              className="transition hover:text-[var(--teal)]"
            >
              Reviews
            </a>
          </div>

          <button className="border border-[var(--border-strong)] px-5 py-2 text-xs uppercase tracking-[0.1em] text-[var(--teal)] transition-all duration-500 hover:bg-[var(--teal-glow)] hover:shadow-[0_0_25px_rgba(45,212,191,0.2)]">
            Early Access
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        {/* Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="ring ring-3" />
        </div>

        {/* Glow Orb */}
        <div className="hero-orb absolute h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.18)_0%,rgba(45,212,191,0.04)_60%,transparent_70%)] blur-xl" />

        <div className="reveal relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-2 text-xs uppercase tracking-[0.2em] text-[var(--teal)]">
            <span className="h-2 w-2 rounded-full bg-[var(--teal)]" />
            AI Powered Sleep Science
          </div>

          <h1
            className="mt-10 text-5xl font-light leading-none md:text-7xl lg:text-8xl"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Your sleep,
            <br />
            <span className="italic text-[var(--teal)]">decoded.</span>
            <br />
            Perfected.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            LUMIQ learns the rhythm of your body and crafts personalized
            soundscapes, temperature cues, and intelligent sleep optimization.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <button className="bg-[var(--teal)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(45,212,191,0.45)]">
              Start Sleeping Better
            </button>

            <a
              href="#how"
              className="text-[var(--text-secondary)] transition hover:text-[var(--teal)]"
            >
              See how it works →
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-[var(--border)] bg-[var(--navy)]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`reveal reveal-delay-${(index % 3) + 1} border border-[var(--border)] p-8 text-center lg:p-12`}
            >
              <div
                className="text-5xl text-[var(--teal)]"
                style={{ fontFamily: "Cormorant Garamond" }}
              >
                {item.number}
              </div>

              <div className="mt-3 text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="reveal text-xs uppercase tracking-[0.25em] text-[var(--teal)]">
              How It Works
            </div>

            <h2
              className="reveal reveal-delay-1 mt-6 text-5xl font-light leading-tight"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Intelligence that
              <br />
              <span className="italic text-[var(--teal)]">
                sleeps with you
              </span>
            </h2>

            <p className="reveal reveal-delay-2 mt-8 max-w-xl leading-8 text-[var(--text-secondary)]">
              LUMIQ processes over 400 biometric data points every night to
              create your personal sleep optimization profile.
            </p>

            <div className="mt-16 space-y-10">
              {[
                "Wear & Calibrate",
                "Sense & Adapt",
                "Wake & Restore",
                "Learn & Refine",
              ].map((step, i) => (
                <div
                  key={step}
                  className={`reveal reveal-delay-${(i % 3) + 1} flex gap-6`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--teal)]">
                    {i + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">{step}</h3>

                    <p className="mt-2 leading-7 text-[var(--text-secondary)]">
                      AI-powered sleep optimization designed for deeper and more
                      restorative rest.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PHONE */}
          <div className="float-phone reveal reveal-delay-3 flex justify-center">
            <div className="w-[290px] rounded-[40px] border border-[var(--border-strong)] bg-[var(--deep)] p-5 shadow-[0_0_60px_rgba(45,212,191,0.08)]">
              <div className="mx-auto h-6 w-24 rounded-b-2xl bg-black" />

              <div className="pt-6 text-center">
                <div
                  className="text-6xl"
                  style={{ fontFamily: "Cormorant Garamond" }}
                >
                  02:47
                </div>

                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  Stage · Deep Sleep
                </div>

                <div className="mt-10 flex items-center justify-center">
                  <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full border-[10px] border-[var(--teal)]">
                    <div
                      className="text-5xl text-[var(--teal)]"
                      style={{ fontFamily: "Cormorant Garamond" }}
                    >
                      82
                    </div>

                    <div className="text-xs tracking-[0.2em] text-[var(--text-muted)]">
                      SLEEP SCORE
                    </div>
                  </div>
                </div>

                <div className="mt-10 space-y-4 text-left">
                  {[
                    ["REM", "23%"],
                    ["Light", "38%"],
                    ["Deep", "35%"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="flex justify-between text-xs text-[var(--text-secondary)]">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>

                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/20">
                        <div
                          className="h-full rounded-full bg-[var(--teal)]"
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--teal-faint)] p-4 text-left">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--teal)]">
                    AI Insight
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                    Peak deep sleep detected. Soundscape shifted to gamma tones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="border-y border-[var(--border)] bg-[var(--navy)] px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="reveal mx-auto max-w-3xl text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--teal)]">
              Features
            </div>

            <h2
              className="mt-6 text-5xl font-light"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Every detail,
              <span className="italic text-[var(--teal)]"> tuned </span>
              for rest
            </h2>
          </div>

          <div className="mt-20 grid gap-px bg-[var(--border)] md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`reveal reveal-delay-${(index % 3) + 1} bg-[var(--navy)] p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-[var(--panel)] hover:shadow-[0_0_30px_rgba(45,212,191,0.12)]`}
              >
                <div className="mb-6 h-14 w-14 rounded-xl border border-[var(--border-strong)] bg-[var(--teal-faint)]" />

                <h3 className="text-xl font-medium">{feature.title}</h3>

                <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal text-xs uppercase tracking-[0.25em] text-[var(--teal)]">
            Reviews
          </div>

          <h2
            className="reveal reveal-delay-1 mt-6 text-5xl font-light"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Waking up to
            <span className="italic text-[var(--teal)]">
              {" "}
              better mornings
            </span>
          </h2>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={item.name}
                className={`reveal reveal-delay-${index + 1} rounded-2xl border border-[var(--border)] bg-[var(--teal-faint)] p-8 transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-3 w-3 rounded-full bg-[var(--teal)]"
                    />
                  ))}
                </div>

                <p
                  className="text-lg italic leading-8 text-[var(--text-secondary)]"
                  style={{ fontFamily: "Cormorant Garamond" }}
                >
                  “{item.quote}”
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--border-strong)] text-[var(--teal)]">
                    {item.initials}
                  </div>

                  <div>
                    <div className="font-medium">{item.name}</div>

                    <div className="text-sm text-[var(--text-muted)]">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-32 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(45,212,191,0.08)_0%,transparent_70%)]" />

        <div className="reveal relative z-10 mx-auto max-w-4xl">
          <h2
            className="text-6xl font-light leading-tight"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            The night you
            <br />
            <span className="italic text-[var(--teal)]">deserve</span>
            starts here.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            Join the early access waitlist and receive 40% off at launch.
          </p>

          <div className="mx-auto mt-12 flex max-w-xl flex-col overflow-hidden border border-[var(--border-strong)] sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-[rgba(45,212,191,0.04)] px-6 py-5 outline-none"
            />

            <button
              onClick={handleJoin}
              className="bg-[var(--teal)] px-8 py-5 text-sm font-semibold uppercase tracking-[0.1em] text-black transition-all duration-500 hover:bg-[var(--cyan)]"
            >
              {joined ? "You're In!" : "Join Waitlist"}
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="reveal border-t border-[var(--border)] bg-[var(--navy)] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 lg:flex-row">
          <div
            className="text-2xl uppercase tracking-[0.3em] text-[var(--teal)]"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Lumiq
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Science</a>
            <a href="#">Press</a>
            <a href="#">Contact</a>
          </div>

          <div className="text-xs text-[var(--text-muted)]">
            © 2026 Lumiq Inc.
          </div>
        </div>
      </footer>
    </div>
  );
}