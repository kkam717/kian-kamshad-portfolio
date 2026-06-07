import type { Metadata } from "next";
import Link from "next/link";
import { CoRBarChart } from "@/components/writeup/CoRBarChart";
import { WriteupSection } from "@/components/writeup/WriteupSection";
import { WriteupTable } from "@/components/writeup/WriteupTable";
import { PageContainer } from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Squash Ball Rebound Research",
  description:
    "Research on the coefficient of restitution in squash balls — Zenit Lab, Brown University.",
};

const hypotheses = [
  {
    title: "Temperature",
    detail:
      "A warmer ball would have a higher CoR, because internal air pressure increases and the rubber becomes more elastic.",
  },
  {
    title: "Age",
    detail:
      "An older ball would have a lower CoR, because repeated high-velocity impacts cause microcracking and permanent deformation in the rubber.",
  },
  {
    title: "Ball level",
    detail:
      "A single-dot ball would have a higher CoR than a double-dot ball, which uses denser rubber to bounce less.",
  },
  {
    title: "Initial velocity",
    detail:
      "No initial expectation of whether impact velocity would increase or decrease the CoR.",
  },
];

export default function SquashWriteupPage() {
  return (
    <article className="py-10 sm:py-16 md:py-24">
      <PageContainer>
        <Link
          href="/projects"
          className="link-underline font-mono text-[10px] uppercase tracking-widest text-slate hover:text-navy"
        >
          ← Back to projects
        </Link>

        <header className="mt-8 max-w-3xl border-b border-line pb-8 sm:mt-10 sm:pb-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
            Zenit Research Lab · Brown University · 2025
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl md:text-5xl">
            Sport Mechanics: The Influence of the Coefficient of Restitution on
            the Agility to Play Squash
          </h1>
          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-wider text-slate">
            <div>
              <dt className="text-gold">Role</dt>
              <dd className="mt-1 normal-case tracking-normal text-navy">
                Undergraduate research assistant
              </dd>
            </div>
            <div>
              <dt className="text-gold">Supervisor</dt>
              <dd className="mt-1 normal-case tracking-normal text-navy">
                Professor Roberto Zenit
              </dd>
            </div>
          </dl>
        </header>

        <div className="mt-8 max-w-3xl">
          <div className="border-l-2 border-gold bg-ivory px-5 py-4 sm:px-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-gold">
              Abstract
            </p>
            <p className="mt-3 text-sm italic leading-relaxed text-slate sm:text-base">
              The purpose of this project was to understand the relationship
              between the coefficients of restitution (CoRs) for squash balls
              with different physical features under different conditions. We
              calculated CoRs for squash balls of different ratings and ages at
              different starting temperatures fired using an airgun at various
              pressure levels. Images of the ball trajectory were captured using
              a high-speed camera which allowed us to compute the pre- and
              post-impact velocity of the balls. Preliminary findings indicate
              that temperature plays a strongly significant and positive role in
              the CoR. Furthermore, an increase in initial velocity seems to
              cause the CoR to decrease, and this effect is more pronounced at a
              higher temperature. It initially appeared that double-dot balls
              had lower CoRs than single-dot ones, but the effect of ball type
              on CoR was statistically insignificant. It also initially appeared
              that old balls unexpectedly had higher CoRs than new balls;
              however, this effect was also insignificant.
            </p>
          </div>

          <WriteupSection id="introduction" number="§ 01" title="Introduction">
            <p>
              Squash is played in an indoor court, where two players hit a ball
              against the front wall and can use the side and back walls. The ball
              may bounce on the floor once per shot, only after it has hit the
              front wall. Players can select different ball types, usually
              depending on their level. Conventional wisdom holds that the
              bouncier the ball, the easier it is to play with, because it allows
              more time to react and move.
            </p>
            <p>
              The single yellow dot ball is a competition ball, which bounces
              more than the double yellow dot professional ball. Players often
              heat balls before matches to increase bounce. An old ball typically
              shows wear, becomes softer, and is considered less bouncy than a
              new one.
            </p>
            <p>
              Squash is a high-intensity sport, and efficient court movement is
              critical at the highest levels. Players ideally strike their shots
              and return to the T at the centre of the court. If the ball bounces
              less, a player has less time to recover position and is less likely
              to reach the next shot.
            </p>
            <p>
              The objective of this research was to understand the relationship
              between coefficients of restitution and the physical attributes of
              squash balls — helping players select ball type, age, and
              temperature with clearer evidence. Given pre- and post-impact
              velocities for each ball and condition, a coefficient of
              restitution (CoR) can be calculated to measure bounciness under
              each circumstance.
            </p>
          </WriteupSection>

          <WriteupSection id="hypotheses" number="§ 02" title="Hypotheses">
            <div className="grid gap-3 sm:grid-cols-2">
              {hypotheses.map((item) => (
                <div
                  key={item.title}
                  className="border border-line bg-cream p-4"
                >
                  <h3 className="font-serif text-lg font-medium text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{item.detail}</p>
                </div>
              ))}
            </div>
          </WriteupSection>

          <WriteupSection
            id="methods"
            number="§ 03"
            title="Materials & method"
          >
            <h3 className="font-serif text-lg font-medium text-navy">
              The experiment
            </h3>
            <p>
              An airgun was used in a lab to fire balls into a wall clamped to a
              desk surface. A 1 cm × 1 cm grid was placed behind the wall to
              track motion and provide a distance reference. Collisions were
              recorded under bright lighting with a high-speed camera at 4000
              fps.
            </p>
            <p>
              Four squash balls were tested — two single-dot and two double-dot,
              including one new and one old ball of each type. Each ball was
              fired at room temperature (22 °C) and when heated (35 °C) using an
              electric heating blanket; temperature was recorded with a laser
              thermometer. For each ball and temperature combination, the airgun
              was filled to 5, 7.5, and 10 psi to vary initial velocity.
            </p>
            <p>
              High-speed images were used to calculate pre- and post-impact
              velocity. A MATLAB script tracked the x-position of the ball over
              time, producing calculations for initial velocity, final velocity,
              and CoR. The script accepted an 8 cm reference to convert pixel
              distance into real distance.
            </p>
            <div className="my-6 border border-line bg-navy px-5 py-4 text-cream sm:px-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gold">
                Coefficient of restitution
              </p>
              <p className="mt-3 font-mono text-sm sm:text-base">
                e = |v₂ − v₁| / |u₂ − u₁|
              </p>
              <p className="mt-3 text-sm text-cream/80">
                With a stationary wall, this reduces to e = v / u, where u is
                pre-impact velocity and v is post-impact velocity. A CoR of 1
                would mean no energy loss; values lie between 0 and 1. CoRs were
                calculated across 24 ball type / temperature / age / velocity
                combinations.
              </p>
            </div>
          </WriteupSection>

          <WriteupSection id="results" number="§ 04" title="Results">
            <h3 className="font-serif text-lg font-medium text-navy">
              Temperature & initial velocity
            </h3>
            <p>
              Temperature plays a significant and positive role in the value of
              e. An increase in initial velocity appears to cause e to decrease,
              and this effect is more pronounced at 35 °C than at 22 °C.
            </p>

            <h3 className="mt-8 font-serif text-lg font-medium text-navy">
              Temperature & ball type
            </h3>
            <p>
              At first glance, double-dot balls appear to have somewhat lower
              average CoR. A two-tailed, paired-dependent t-test between
              averages at each temperature showed neither difference was
              significant. Results for ball type may be unreliable given
              confounding variables and only six observations per measurement.
              For each ball type, however, higher temperature consistently
              produced higher CoRs; t-tests on temperature differences were
              highly significant.
            </p>

            <WriteupTable
              caption="Average CoR by ball type and temperature"
              headers={[
                "Temperature (°C)",
                "1-dot CoR",
                "2-dot CoR",
                "Type p-value",
              ]}
              rows={[
                [22, 0.291, 0.262, 0.255],
                [35, 0.394, 0.376, 0.715],
              ]}
              footnote="Temperature difference p-values: 0.038* (1-dot) and 0.017* (2-dot). *Significant at 5%."
            />

            <CoRBarChart
              title="Average CoR by ball type"
              groups={[
                {
                  label: "22 °C",
                  values: [
                    { name: "1 Dot", value: 0.291 },
                    { name: "2 Dot", value: 0.262 },
                  ],
                },
                {
                  label: "35 °C",
                  values: [
                    { name: "1 Dot", value: 0.394 },
                    { name: "2 Dot", value: 0.376 },
                  ],
                },
              ]}
            />

            <h3 className="mt-8 font-serif text-lg font-medium text-navy">
              Temperature & ball age
            </h3>
            <p>
              Old balls initially appeared to have slightly higher e, but the
              difference was statistically insignificant; temperature remained
              the dominant factor. Paired t-tests between old and new averages at
              each temperature were not significant, likely for the same
              confounding and sample-size reasons as ball type.
            </p>

            <WriteupTable
              caption="Average CoR by ball age and temperature"
              headers={[
                "Temperature (°C)",
                "Old balls CoR",
                "New balls CoR",
                "Age p-value",
              ]}
              rows={[
                [22, 0.291, 0.263, 0.271],
                [35, 0.395, 0.375, 0.686],
              ]}
              footnote="Temperature difference p-values: 0.045* (old) and 0.011** (new). *Significant at 5%; **significant at 1%."
            />

            <CoRBarChart
              title="Average CoR by ball age"
              groups={[
                {
                  label: "22 °C",
                  values: [
                    { name: "Old", value: 0.291 },
                    { name: "New", value: 0.263 },
                  ],
                },
                {
                  label: "35 °C",
                  values: [
                    { name: "Old", value: 0.395 },
                    { name: "New", value: 0.375 },
                  ],
                },
              ]}
            />
          </WriteupSection>

          <WriteupSection id="discussion" number="§ 05" title="Discussion">
            <p>
              CoR as a function of initial velocity decreases, and this effect
              is more prominent at 35 °C than at 22 °C. Across all analyses,
              temperature is the greatest factor: at a given velocity, higher
              temperatures consistently yield higher e — consistent with the
              initial hypothesis.
            </p>
            <p>
              Ball type and age show small apparent differences that are
              statistically insignificant — surprising given how much players
              emphasise both factors. These findings should be treated cautiously
              because several variables changed when producing averages and
              sample sizes were small.
            </p>
            <p>
              The next step is to repeat the experiment many more times with
              tighter control of confounding variables, more temperature and
              velocity observations, and regression analysis to estimate CoRs
              while controlling for all factors simultaneously.
            </p>
          </WriteupSection>

          <WriteupSection id="conclusion" number="§ 06" title="Conclusion">
            <p>
              The coefficient of restitution was strongly dependent on
              temperature, with significant increases in CoR between 22 °C and
              35 °C across all conditions. Ball age and ball type did not show
              significant effects. CoR also decreased as impact velocity
              increased, though this relationship was secondary to temperature.
            </p>
            <p>
              Players&apos; habit of warming balls appears grounded in genuine
              physical results. The advantage of hitting the ball hard is real
              in most situations, abstracting from strategic plays like drop
              shots. This research casts doubt on whether ball level or age
              materially affects difficulty of play.
            </p>
          </WriteupSection>

          <WriteupSection id="next-stage" number="§ 07" title="Next stage">
            <p>
              The next stage is determining how CoR affects player agility in
              match conditions. Matches will be recorded with players using balls
              of known CoR — varying ball type and temperature — using a
              wide-angle camera mounted on the back wall. Player motion can then
              be tracked to measure average speed and total distance travelled,
              indicating whether players move more and rallies last longer with
              bouncier balls. Software such as smartsquash.ai may support this
              analysis when players wear distinguishable clothing.
            </p>
          </WriteupSection>
        </div>
      </PageContainer>
    </article>
  );
}
