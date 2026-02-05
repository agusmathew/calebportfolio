export default function Home() {
  return (
    <div className="selection-ink bg-paper-pattern min-h-screen">
      <main className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:px-12">
        <header className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-float space-y-6">
            <p className="hero-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#2d3a33]">
              Compliance • AML • KYC
            </p>
            <h1 className="font-[var(--font-display)] text-4xl leading-tight md:text-6xl">
              Sibson Caleb Edakara
            </h1>
            <p className="max-w-xl text-lg text-[#393530]">
              Compliance professional with 5 years of experience in AML and KYC
              operations across major financial institutions. Specialist in
              onboarding complex client structures, enhanced due diligence, and
              financial crime prevention.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                className="link-chip rounded-full border border-[#1a1917]/20 px-4 py-2"
                href="mailto:sibsoncalebedakara@gmail.com"
              >
                sibsoncalebedakara@gmail.com
              </a>
              <a
                className="link-chip rounded-full border border-[#1a1917]/20 px-4 py-2"
                href="tel:+447747834458"
              >
                07747 834 458
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                className="cta-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition"
                href="/Sibson_Caleb_Edakara.pdf"
                download
              >
                Download CV
              </a>
              <a
                className="link-chip rounded-full border border-[#1a1917]/20 px-6 py-3 text-sm font-semibold"
                href="mailto:sibsoncalebedakara@gmail.com"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="section-card animate-float rounded-3xl p-8">
            <h2 className="font-[var(--font-display)] text-2xl">Focus Areas</h2>
            <ul className="mt-6 space-y-3 text-sm text-[#2f2b27]">
              <li>Enhanced due diligence for high-risk entities</li>
              <li>Complex ownership and UBO analysis</li>
              <li>Sanctions, PEP, and adverse media screening</li>
              <li>Suspicious activity investigations and reporting</li>
              <li>AML program support and process improvements</li>
            </ul>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#6a635a]">
                  Experience
                </p>
                <p className="text-2xl font-semibold">5 Years</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#6a635a]">
                  Specialisms
                </p>
                <p className="text-2xl font-semibold">AML / KYC</p>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="section-card rounded-3xl p-8">
            <h2 className="font-[var(--font-display)] text-2xl">
              Professional Summary
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#2f2b27]">
              Compliance professional with 5 years of hands-on experience in AML
              and KYC operations across major financial institutions. Proven
              track record in onboarding and conducting due diligence for
              complex client structures, including high-risk entities, corporate
              hierarchies, and international businesses. Skilled at analysing
              ownership structures, conducting enhanced due diligence, and
              performing sanctions and PEP screening using industry-standard
              platforms. Strong ability to collaborate with stakeholders to
              gather critical information while ensuring full regulatory
              compliance. Experienced in investigating suspicious activity,
              preparing compliance reports, and supporting AML programme
              administration. Committed to maintaining the highest standards of
              financial crime prevention while working efficiently to meet
              deadlines.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Customer Due Diligence",
                "Enhanced Due Diligence",
                "Risk Assessment",
                "Regulatory Compliance",
                "Training & Mentoring",
              ].map((item) => (
                <span key={item} className="tag rounded-full px-3 py-1 text-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="font-[var(--font-display)] text-3xl">
              Employment History
            </h2>

            <article className="section-card rounded-3xl p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">
                    Customer Service Advisor (Part-Time)
                  </h3>
                  <p className="text-sm text-[#6a635a]">Lloyds Banking Group</p>
                </div>
                <span className="text-sm text-[#6a635a]">
                  Apr 2024 – Dec 2024
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-[#2f2b27]">
                <li>
                  Provided data-driven insights to resolve customer issues while
                  maintaining high standards of data integrity.
                </li>
                <li>
                  Built strong client relationships to ensure accurate data
                  collection and improve service quality.
                </li>
                <li>
                  Investigated and escalated complex cases in line with
                  regulatory and internal service standards.
                </li>
                <li>
                  Proactively supported colleagues in resolving customer
                  complaints and complex requests.
                </li>
              </ul>
            </article>

            <article className="section-card rounded-3xl p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">AML QA Analyst</h3>
                  <p className="text-sm text-[#6a635a]">
                    StateStreet Corporate Services
                  </p>
                </div>
                <span className="text-sm text-[#6a635a]">
                  Apr 2022 – Sep 2023
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-[#2f2b27]">
                <li>
                  Performed quality checks on NTB, periodic reviews, and
                  event-driven reviews (EDR) for retail and institutional
                  investment clients.
                </li>
                <li>
                  Supported development and training of junior team members
                  through reviews and guidance.
                </li>
                <li>
                  Conducted client and matter risk assessments using a
                  risk-based approach.
                </li>
                <li>
                  Completed in-depth research into business models, ownership
                  structures, and related parties.
                </li>
                <li>
                  Investigated and escalated ML/CTF concerns to AML Compliance
                  Manager, MLCO, and MLRO.
                </li>
                <li>
                  Conducted periodic client reviews with Partners and Fee
                  Earners.
                </li>
                <li>
                  Assisted AML Compliance Manager with audits, policy updates,
                  and process improvements.
                </li>
                <li>
                  Reviewed AML and reputational risks associated with new client
                  and matter requests.
                </li>
                <li>
                  Completed CDD/KYC for corporate entities with complex and
                  cross-border ownership structures.
                </li>
                <li>
                  Performed sanctions, PEP, and adverse media screening,
                  including EDD for high-risk clients.
                </li>
                <li>Used LexisNexis and LSEG World-Check for screening.</li>
                <li>
                  Supported SAR assessments, sanctions reviews, onboarding
                  checks, and due diligence enhancements.
                </li>
              </ul>
            </article>

            <article className="section-card rounded-3xl p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">AML/KYC Analyst</h3>
                  <p className="text-sm text-[#6a635a]">
                    Royal Bank of Scotland
                  </p>
                </div>
                <span className="text-sm text-[#6a635a]">
                  Apr 2017 – Dec 2020
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-[#2f2b27]">
                <li>
                  Conducted client due diligence and onboarding across complex
                  entity structures including trusts, hedge funds, pension
                  funds, government bodies, and international clients.
                </li>
                <li>
                  Analysed data from Companies House and international
                  registries to verify UBOs.
                </li>
                <li>
                  Performed electronic ID checks and investigated
                  system-generated referrals.
                </li>
                <li>
                  Collaborated with Relationship Managers and internal teams to
                  resolve CDD gaps.
                </li>
                <li>
                  Supported sanctions, PEP, adverse media screening, and
                  periodic reviews.
                </li>
                <li>
                  Identified and escalated PSC discrepancies and complex
                  ownership issues.
                </li>
                <li>
                  Assisted AML Officer with policy updates, training, and
                  compliance projects.
                </li>
                <li>
                  Maintained strong knowledge of AML legislation, risk
                  frameworks, and best practices.
                </li>
                <li>
                  Managed multiple priorities under strict deadlines while
                  maintaining accuracy.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="section-card rounded-3xl p-8">
            <h2 className="font-[var(--font-display)] text-2xl">Education</h2>
            <p className="mt-6 text-lg font-semibold">MSc Business Analytics</p>
            <p className="text-sm text-[#6a635a]">
              University of Wolverhampton
            </p>
            <p className="mt-2 text-sm text-[#6a635a]">Sep 2023 – Dec 2024</p>
          </div>

          <div className="section-card rounded-3xl p-8 md:col-span-2">
            <h2 className="font-[var(--font-display)] text-2xl">
              Skills & Tools
            </h2>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {[
                "AML / KYC Compliance",
                "Customer Due Diligence (CDD)",
                "Enhanced Due Diligence (EDD)",
                "Regulatory Compliance",
                "Risk Assessment",
                "Data Analysis",
                "Project Coordination",
                "Training & Mentoring",
                "MS Excel",
                "Power BI",
                "SQL",
                "Actimize",
                "World-Check",
                "LexisNexis",
              ].map((skill) => (
                <span key={skill} className="tag rounded-full px-3 py-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="section-card rounded-3xl p-8">
            <h2 className="font-[var(--font-display)] text-2xl">
              Certification
            </h2>
            <p className="mt-6 text-sm text-[#2f2b27]">
              Global Association of Certified KYC Specialists
            </p>
          </div>
          <div className="soft-panel rounded-3xl p-8">
            <h2 className="font-[var(--font-display)] text-2xl">Download CV</h2>
            <p className="mt-4 text-sm text-[#2f2b27]">
              PDF version of the full CV, ready for sharing or printing.
            </p>
            <a
              className="cta-button mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition"
              href="/1770312147444_Sibson_Caleb_Edakara_Sibson-Caleb_Edakara.pdf"
              download
            >
              Download CV
            </a>
          </div>
        </section>

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#1a1917]/10 pt-6 text-xs text-[#6a635a]">
          <p>Available for compliance, AML, and KYC roles.</p>
          <p>References available upon request.</p>
        </footer>
      </main>
    </div>
  );
}
