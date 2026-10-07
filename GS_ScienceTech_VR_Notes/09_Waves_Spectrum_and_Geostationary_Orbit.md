# 09 — Waves, the Spectrum, and the Geostationary Orbit

### Lecture 13 — 5 October 2026

> **Date of Lecture:** 5 October 2026
> **Date Added:** 2026-10-07
> **Faculty:** **Vinay Krishna** (GS Science and Technology — space). Same teacher as Lectures 10–12.
> **Source:** Vajiram & Ravi class + audio transcript (`S_T-VLecture051026`) + 4 handwritten sheets (SAT-V, circled **1**, dated **5/10/26**)
> **Also relevant for:** Prelims (spectrum order, microwave inside radio, usable window, geostationary is one orbit and regional); **GS-III** (space applications, bands, transponder)

**How to read class shortcuts:** full form on first use. Glossary at the end. Do not invent a number the sheet or the class did not give.

The sitting opened on the video he had already set: private firms moving from vendors to end-to-end work, and the Indian Space Research Organisation (ISRO) shifting toward research and priorities. That chapter, the missing space law, and the Thumba church as a modest beginning stay on the **29 September** note (`07_Situational_Awareness_and_the_Indian_Space_Programme.md`). One new workforce fact from this morning is patched there. He then started a new topic: **waves used in satellite communication**. Lagrangian points are parked. He expects a question on them this year and did not teach them.

---

## 1. What a wave is (ST-12-01)

A wave is a **disturbance that propagates with predictable periodicity**. The disturbance has energy, and it does not move at random. Predictable means the motion can be written as a formula: if the wave is here at time T0, the formula says where it is, and in what phase, after T seconds. He used the **sinusoidal / transverse** waveform only. Types of waves were postponed.

**Wavelength** (λ, lambda) is the distance between two consecutive similar points. One wavelength is also one **cycle**. The unit is a length: metres, centimetres, kilometres, micrometres, nanometres.

**Frequency** (ν, nu) is how many wavelengths cross a fixed point in one second. Cycles per second are **hertz (Hz)**.

For two waves of the **same type**, moving at the **same speed**, wavelength and frequency are **inversely** related. The longer wave has the smaller frequency. His illustration, not a measured pair: 5 Hz against 50 Hz.

For an **electromagnetic** wave, energy is **directly** proportional to frequency. Higher frequency, more energy. The shorter, higher-frequency wave is the more energetic one.

---

## 2. The electromagnetic spectrum is a range (ST-12-02)

**Spectrum** means a **range**, not one wave. The electromagnetic spectrum, left to right, is always the **increasing** order of frequency, and therefore of energy, and the **decreasing** order of wavelength:

**radio → microwave → infrared → visible → ultraviolet → X-rays → gamma**

Gamma rays have the maximum frequency and the maximum energy. Radio waves are the longest. He said they may run to hundreds of metres. The order is not free to jumble. The same left-to-right rise in frequency is the convention on a musical instrument as well.

Each of those seven names is a **chapter**, a packet of waves, not a single wave. “Visible spectrum” means every wave a human eye can see.

Inside the visible chapter the same convention holds. **Violet has the maximum frequency. Red has the longest wavelength.** The childhood rainbow, remembered from red toward violet, runs **against** that convention. He called the childhood order a teaching convenience, and the frequency order the one to keep.

<div style="overflow-x:auto;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 168" role="img" aria-label="Electromagnetic spectrum, frequency rising to the right" style="display:block;margin:0 auto;width:100%;min-width:340px;max-width:720px;font-family:system-ui,Segoe UI,Arial,sans-serif;">
<rect x="1" y="1" width="678" height="166" rx="12" fill="#f8fafc" stroke="#e2e8f0"/>
<text x="340" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Left to right: frequency and energy rise, wavelength falls</text>
<rect x="16" y="48" width="86" height="52" rx="6" fill="#dbeafe" stroke="#60a5fa"/>
<text x="59" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#1e3a8a">Radio</text>
<rect x="110" y="48" width="86" height="52" rx="6" fill="#e0e7ff" stroke="#818cf8"/>
<text x="153" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#312e81">Micro</text>
<rect x="204" y="48" width="86" height="52" rx="6" fill="#fce7f3" stroke="#f472b6"/>
<text x="247" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#9d174d">Infrared</text>
<rect x="298" y="48" width="86" height="52" rx="6" fill="#fef9c3" stroke="#eab308"/>
<text x="341" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#854d0e">Visible</text>
<rect x="392" y="48" width="86" height="52" rx="6" fill="#ede9fe" stroke="#a78bfa"/>
<text x="435" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#5b21b6">UV</text>
<rect x="486" y="48" width="86" height="52" rx="6" fill="#ffedd5" stroke="#fb923c"/>
<text x="529" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#9a3412">X-ray</text>
<rect x="580" y="48" width="84" height="52" rx="6" fill="#fee2e2" stroke="#f87171"/>
<text x="622" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">Gamma</text>
<text x="59" y="128" text-anchor="middle" font-size="11" fill="#334155">longest</text>
<text x="622" y="128" text-anchor="middle" font-size="11" fill="#334155">most energy</text>
<text x="340" y="152" text-anchor="middle" font-size="11" fill="#64748b">Visible: violet is the high-frequency end, red the long-wavelength end</text>
</svg>
</div>

<p style="text-align:center;"><em><strong>Figure:</strong> The spectrum is read toward gamma. Microwave sits inside radio, which the next sections pin down.</em></p>

**Waves and signals are not the same word.** A wave is propagating energy. It becomes a **signal** only if two things are true: the receiver can **perceive** the wave, and the message loaded on it can be **decoded**. A dog whistle carries a message a human cannot perceive, so it is not a signal for the human. A wave that is perceived, but whose message cannot be read, is **noise**. Noise and signal are the two functional variants of a perceptible wave, and the split is **relative**. What is noise for one listener can be a signal for another.

---

## 3. Attenuation, and why the low-energy waves travel farther (ST-12-03)

High-frequency waves look like the logical choice for a craft that is very far away. They are not. As they cross the atmosphere they suffer a **loss of intensity**, also called **attenuation**. His picture: a source fires 100 waves of one frequency, and the sensor on the far side receives one. The 99 that never arrive are the loss. For General Studies he allowed one safe line: **higher the frequency, more the attenuation.** Radio and microwave have less energy and still travel farthest, because they attenuate the least. He used **700 million kilometres** as the picture of how far Mangalyaan went. Treat that as his illustration of “very far,” not as a new official distance.

Attenuation has **two** causes.

**Absorption.** Any substance, by its chemistry, absorbs a **specific** frequency. He called that the **signature absorption frequency**. Ozone absorbs ultraviolet and does not volunteer to absorb infrared, visible, X-rays, or gamma. The same fact run backwards is a detector. Fire ultraviolet across a room. If almost none returns, and the far surface is plain, the medium in between held ozone.

That method is **spectrometry**. The tool is a **spectrometer**. Chandrayaan did not sample lunar water by touch. Water’s frequencies failed to come back, so water was inferred. The same return identifies **sodium, magnesium, calcium, aluminium, iron, silicon, and sulphur** on the lunar surface. It also reads **quantity**: how much of a wave a cloud absorbs is how much water the cloud holds. Set that against the dew point at that height and you can say whether the cloud will precipitate. Irrigation and nutrient status of a field use the same idea. This year’s question on satellites and climate-resilient smart agriculture stays on Lecture 10. Do not reopen it.

A pulse **oximeter** is a spectrometer built for oxygen. One arm of the clip shows a red light; red is the visible part, and infrared goes with it. Oxygen in soft tissue absorbs that frequency. The other arm measures what comes through, and the screen reports saturation. The same trick finds **sucrose mixed into honey**, so food inspection uses it. On any mission beyond Earth — Moon, Mars, Venus, an asteroid — a spectrometer goes, because chemistry of the place is a standing goal.

Atmosphere holds many gases, each with its own absorbed range, so most high-frequency radiation is lost on the way through. **Water** is the wide absorber. That is why rain is tied to signal disturbance.

**Scattering.** A particle suspended in air scatters a wave whose wavelength is similar to the particle’s size. Smaller particles stay suspended in greater number. He used **particulate matter of 2.5 micrometres (PM2.5)** and **10 micrometres (PM10)**. Smaller waves, which are the higher frequencies, scatter more. A red stop signal scatters less because red’s wavelength is longer.

It is **good** that high-frequency radiation does not cross the atmosphere. Stars already emit it. X-rays, ultraviolet, and gamma rays are **ionising** and damage tissue. The atmosphere is a blanket against what the stars send.

Star **temperature** is read indirectly, the way a blacksmith’s rod is read. Red-hot is cooler. Yellow is hotter. Blue is hotter still. As temperature rises, the frequency of the light rises, and a real star emits beyond the visible, into ultraviolet, X-rays, and gamma. Those frequencies often do not reach the ground, so the observatory goes to them, above the Kármán line. The line itself stays Lecture 10. He named **Hubble**, India’s **AstroSat**, the **James Webb** telescope, and the **Nancy Grace Roman** telescope, which he said was sent **this year, in September**. James Webb and Nancy Grace Roman also take infrared and other bands that do not arrive uniformly. One use of that starlight is the search for Earth-like planets. He postponed the method.

---

## 4. Radio, microwave, and the usable window (ST-12-04)

**Radio** is every electromagnetic wave from **3 kilohertz** (3,000 hertz) up to **300 gigahertz**.

**There is no separate microwave chapter.** Microwave is a **section inside radio**, from **300 megahertz to 300 gigahertz**. Mega is 10 to the power 6. Three traps he dictated:

| Statement | Verdict |
|:---|:---|
| All radio waves are microwaves | **False** |
| All microwaves are radio waves | **True** |
| Microwaves are low-energy radio waves | **False** — they sit on the **higher-frequency, higher-energy** side of radio |

Even that section is not all usable. Satellite communication, loading a message and getting it back, uses only **30 megahertz to 30 gigahertz**. He called this the **usable window**. Above it, attenuation wins. Below it, the energy is too small. Bands outside this window exist. He set them aside as not very useful for satellite communication at the moment.

Waves in the window are a **resource**, though not a physical one like coal. Each user is given a different frequency, so two services cannot share one frequency. The window is therefore a **limited** resource, not an inexhaustible one, and it is also a **strategic** resource. Limited supply plus many takers needs a regulator. Inside India that regulator is the **government**, and the act is **spectrum allocation**.

What is allocated is not a thing. It is the **right to generate and use** a specific range of frequencies.

**Two routes.**

1. **Auction**, when many people want a service and many private players can provide it. A band is tendered. Jio, Airtel, Tata Sky, Vodafone bid. The highest bidder gets an exclusive right inside that range. The government earns revenue. If the principle of natural justice was not followed — no public tender, favouritism, a sale below what the tender would have fetched — that revenue loss is a **scam**. His example is the **2G spectrum scam**. He did not dictate a rupee figure or a verdict.
2. **Administrative allocation**, with no payment. Military communication (Air Force, Navy, Army) is not asked to bid against itself. The government may also hand a range to its own firms, which he named as Bharat Sanchar Nigam Limited (BSNL) and Mahanagar Telephone Nigam Limited (MTNL), or to a **private** firm when the service is a governance priority and providers are few. An auction with one bidder is pointless. Fibre cannot be laid everywhere, and a disaster can knock a network out, so satellite internet can be that priority. **Last year** (this class is October 2026, so he means **2025**), on a **pilot / testing** basis and not as a common practice, **Starlink (SpaceX)** was given a range by the administrative route. Airtel and Jio said their cable broadband would be outcompeted. He reported the government’s answer: policy follows governance priorities, not the abilities of the existing firms.

The same window is global, so the fight is between countries. The international regulator is the **International Telecommunication Union (ITU)**, a **United Nations** body. It rations parts of the usable window to regions of the world. India then allocates inside what it has received. ITU is also the regulator for space activity in the practical sense he used: before a launch you take from ITU both an **orbital slot** and a **frequency**.

Of the range India holds, only a **little** is auctioned. The **lion’s share stays with the government**, often unused, so that a spare frequency exists when a service is suddenly needed. His Airtel example, **20 to 200**, was **arbitrary**. Do not learn it as a real holding.

---

## 5. Band and bandwidth (ST-12-05)

A company that has bought a range then **splits** it. Each split is a **band**, identified by its frequency range, the way a subject in a notebook is “page X to page Y.” His splits, again arbitrary: 20 to 40 hertz, 40 to 80, 80 to 200. Do not learn those edges.

**Bandwidth** is the thickness of a band: the upper frequency minus the lower one. Pages carry notes. Waves carry data. **Higher bandwidth, greater volume of data.**

Two bands of the **same** bandwidth can still be **qualitatively different** if they are taken from significantly different regions of the frequency ladder, because the higher region attenuates more. A lower frequency reaches farther and suits a thinly populated village. A dense city can be served on a higher frequency. Operators therefore hold both a low piece and a high piece from different auctions.

The ITU’s **official** split of the usable window, which he said not to memorise as numbers, runs **L, S, C, X, Ku, K, Ka**. The audio bunched the last three as “K, U, K, K.” The later sentences name **Ku** for television and **Ka** as the wide, lossy end, so those are the seven. Edges he wrote and then withdrew from rote memory: **L is 1 to 2 gigahertz, S is 2 to 4, C is 4 to 8**, and so on. Down that ladder, bandwidth rises, frequency rises, and attenuation rises. **L carries the least and attenuates the least. Ka carries the most and attenuates the most.**

**Deep space** is not “anything above 100 kilometres.” Outer space begins beyond the Kármán line. **Deep space means beyond Earth’s orbit.** Chandrayaan, Mangalyaan, and Shukrayaan are deep-space objects. Talking to them allows **no** tolerance for noise. He recalled Chandrayaan-2: the lander was fine until the last moment, communication dropped for a **microsecond**, and there was no time to recover it. **L and S** are the bands for deep-space communication.

**Navigation** satellites also speak in **L and S**. They guide fast objects — missiles and launch vehicles. He pictured those at **hypersonic** speed, **5 to 10 times the speed of sound**. That is his picture of why a microsecond matters, not the published speed of a named missile. A small navigation error in a fast vehicle is the same reason a driver is told not to use a phone.

**Television** moved. His generation’s cable networks took the satellite feed in the **C band**, through one large rooftop antenna, and wired it into houses. Direct-to-home dishes are small and work in the **Ku band**. Ku has the higher bandwidth, so more data, so high-definition pictures. The cost is accepted: weather noise is tolerable because the programme is recreation. If the picture fails, nothing breaks.

The dish shrank because wavelength shrank. C is the longer wave, so the receiving surface had to be larger. Ku is shorter, so the dish is smaller. The surface is sized to the wave it has to catch.

The same water absorption that ruins a Ku picture in rain is why a **microwave oven** heats food and leaves a paper plate cold. The food holds water. The plate does not. A satellite also cannot see a plane that has vanished **under** water, because these waves do not penetrate deep. Under water the tool is a **sound** wave, not an electromagnetic one.

He refused a clean “X band means military surveillance” line. Surveillance can sit on X, and it also uses other frequencies. The principle is the one above: distance and tolerance for noise pick the band. Do not memorise a band-to-service table beyond L and S for deep space and navigation, and Ku for direct-to-home television.

---

## 6. The transponder (ST-12-06)

A satellite is named for the path. **Communication, remote sensing, navigation** name the tool it carries.

Every **communication** satellite has a **transponder**. A transponder **receives and transmits back**. An ordinary antenna only receives. The signal from the ground up is the **uplink**. The transponder sends it down on a **slightly different frequency**. He said the Union Public Service Commission will not ask what that shift is. The signal coming down is the **downlink**. His picture was a match feed leaving the stadium, riding up, and landing on a television somewhere else.

A news line such as “this satellite has N transponders in a certain band” means it can receive and send in that band. N, in his examples, might be 2, 4, 8, 10, or 20. None of those counts is a satellite to memorise. Seeing **Ku** should bring up television. A remote-sensing craft may carry a spectrometer. He did not say every satellite does.

---

## 7. What an orbit is, and what keeps a craft in it (ST-12-07)

An **orbit** is a **mathematically predictable path followed by satellites**.

Three factors choose it.

1. **Area of coverage.** A higher orbit sees more ground than a lower one. You cannot keep climbing forever.
2. **Clarity, or resolution, of the image.** Clarity is the ordinary word. Resolution is the mathematical one: the **minimum distance between two or more objects up to which they can still be told apart**. A forest satellite of **10 metre** resolution counts two trees as two only while they are at least 10 metres apart. Closer than that, the distinction is lost. A coarse mountain image shows snow, green, water, and bare rock. A finer one lets you measure each patch and see a road being metalled. Resolution is the limit on how high the imaging craft may sit.
3. **Consistency of the signal, or of satellite availability.** Some jobs need the craft overhead for a while, then gone, then back after days. Some jobs need it overhead all the time.

An object that repeats a circle needs a constant force toward the centre. That force is **centripetal**. Gravity supplies it. **Centrifugal** force is what a passenger feels when a cab takes a fast corner. It is **not a real force**. It is the equal and opposite **reaction** to the centripetal force. He slipped once and called the centrifugal force the real one, then corrected himself. **What keeps the satellite in orbit is the centripetal force. The centrifugal force is not real.**

The felt outward force is mv²/r, with m the satellite’s mass, v its **linear** velocity (not angular), and r the distance from the centre, which is also the distance from Earth’s centre. The inward force is Newton’s, GMm/r². G is Newton’s gravitational constant. Capital M is Earth’s mass. Small m cancels. One r cancels. What remains is **v² = GM/r**. He said the formula is not for rote memory. The relation is: velocity required to stay in an orbit is **inversely** related to distance from the centre. He added that the square root is in that relation. **Closer means faster**, because gravity pulls harder and the craft must not fall in. **Farther means slower.**

If orbit 1 is the closest and orbit 3 the farthest, **v1 > v2 > v3**.

The path length of one loop is the circumference, 2πr. Distance and speed give the **orbital time period (OTP)**: the time to cover one orbit. He warned that OTP is not a one-time password. Because the outer orbit is both longer and slower, **OTP rises with distance**. **OTP1 < OTP2 < OTP3**. Those two relations — velocity inverse to distance, OTP direct with distance — are what “mathematically predictable” meant in this class. The same arithmetic, he said, will matter for Lagrangian points. Those points are the next sitting, not this one.

---

## 8. The geostationary orbit is one orbit, and it is regional (ST-12-08)

Take a **circular** orbit **35,786 kilometres from Earth’s surface**. The radius used in v² = GM/r is measured from the **centre**. The 35,786 kilometres is from the **surface**, because that is where the rocket leaves. He warned that a question may ask the distance from the centre. Add Earth’s **average radius**. He did not dictate that radius. A sketch on the sheet has rough kilometre marks. Do not learn them as the radius.

At that height the OTP is **23 hours 56 minutes 4 seconds**. That is the same as Earth’s **rotational time period**, which he called one **sidereal** day (audio: “one side real day”). Calendars use 24 hours and repair the gap with **29 February** every fourth year. He called that repair a corruption of the true period. For the angular-velocity story below he then used **24 hours, for ease**. The period to memorise is **23 hours 56 minutes 4 seconds**, not 24.

**Condition 1:** circular orbit at **35,786 km** from the surface, so the OTP matches Earth’s rotation.

**Condition 2:** the **orbital plane overlaps the equatorial plane**. Orbit, equator, and Earth’s centre lie on one plane. His picture was a hat: the band on the head is the equator, the brim’s outer edge is the orbit, and the two share a plane.

Two results follow. Observer and satellite have the **same angular velocity** (a full circle, 360 degrees, in that period). They also share a plane, so the observer **never falls off the line** that joins them. Relative velocity between observer and satellite is **zero**. The satellite appears **fixed**. That orbit is the **geostationary orbit**, shortened **GEO**. The craft is a **geostationary satellite**.

<div style="overflow-x:auto;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 200" role="img" aria-label="Two conditions for a geostationary orbit" style="display:block;margin:0 auto;width:100%;min-width:340px;max-width:680px;font-family:system-ui,Segoe UI,Arial,sans-serif;">
<rect x="1" y="1" width="638" height="198" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
<circle cx="168" cy="108" r="36" fill="#dbeafe" stroke="#2563eb"/>
<text x="168" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">Earth</text>
<ellipse cx="168" cy="108" rx="92" ry="28" fill="none" stroke="#0f766e" stroke-width="2"/>
<circle cx="260" cy="108" r="7" fill="#0f766e"/>
<text x="168" y="44" text-anchor="middle" font-size="12" fill="#0f766e">35,786 km from the surface</text>
<text x="168" y="168" text-anchor="middle" font-size="11" fill="#334155">OTP 23 h 56 min 4 s · equatorial plane</text>
<rect x="360" y="28" width="250" height="64" rx="8" fill="#f0fdf4" stroke="#86efac"/>
<text x="485" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#166534">Same angular velocity</text>
<text x="485" y="72" text-anchor="middle" font-size="11" fill="#334155">Zero relative velocity · appears fixed</text>
<rect x="360" y="108" width="250" height="64" rx="8" fill="#fff7ed" stroke="#fdba74"/>
<text x="485" y="132" text-anchor="middle" font-size="12" font-weight="700" fill="#9a3412">One orbit, not many</text>
<text x="485" y="152" text-anchor="middle" font-size="11" fill="#334155">One satellite sees one face · regional</text>
</svg>
</div>

<p style="text-align:center;"><em><strong>Figure:</strong> Both conditions are required. Drop the equator and the craft is no longer geostationary, even at the same height.</em></p>

**Arthur C. Clarke** suggested putting **communication** satellites there, because communication needs **consistency**. An antenna and the craft keep their link without either having to chase the other. The orbit is the **most common** home for communication satellites. It is **not** the only home, and the orbit is **not** reserved for communication alone. Both exclusives are wrong.

**Meteorological** satellites use it. India’s monsoon, this year and earlier years, has depended largely on **INSAT-3DR**, which sits in GEO.

**Navigation** satellites are **not regularly** placed there, but they can be. He said India’s own, **NavIC (Navigation with Indian Constellation)**, are planted in GEO. The 29 September note still holds that NavIC is not functional now and that a NavIC-3 launch was expected in mid-October. Do not erase that line.

**Imaging** from that far is **generally not** preferred, because **spatial resolution** is compromised. The answer to “can it” is still **yes**, and it is a **rarity**. The example is the launch of a few days earlier: **GISAT-1A**, the **geostationary imaging satellite**. Do not confuse it with **GSAT**. It is also **Earth Observation Satellite-05 (EOS-05)**. “An EOS can be placed in GEO” is **true**, and it is not the regular pattern. The 4 September note still records that the rocket put EOS-05 into a **transfer** orbit, to be raised. This class is the reason one would raise it: an imaging craft that stays loyal to one face.

Loyalty is the gain. Because OTP matches the rotational period, the craft stays over the **same face**. Planted over India, it keeps watching India at real-time intervals. **Spatial resolution is sacrificed. Temporal resolution is earned.** Temporal means time. One such satellite does **not** see the whole Earth. The question “is a GEO satellite regional or global?” is answered **regional**. Lecture 10’s three craft on one ring are how the globe gets covered. One craft is still regional.

Countries off the equator use the **same** orbit. There are not separate geostationary orbits at other latitudes. **Longitude** decides **where along the orbit** the craft is parked. He used **82½°** as the example: the satellite goes on that longitude, not on another. **Latitude** decides only the **bend of the antenna**. Dishes in one locality all point the same way. As long as relative velocity is zero, bending the neck is enough to keep the link.

**There is only one geostationary orbit.** “Geostationary orbits,” in the plural, is not a slip of grammar. He called it a technical impossibility.

<span style="color: #e53e3e;">**Prelims trap:** Microwave is **inside** radio, and it is the **high-energy** side, from **300 MHz to 300 GHz**. Radio itself runs **3 kHz to 300 GHz**. The usable window is **30 MHz to 30 GHz**. Violet is the **high-frequency** end of visible light. **Centrifugal force is not what holds the orbit.** **35,786 km is from the surface.** The period is **23 h 56 min 4 s**, not 24 hours. **GEO is singular and regional.** Communication satellites are **generally** there, not exclusively. **INSAT-3DR** is the meteorological one. **GISAT-1A is EOS-05**, not a GSAT. **Ku** is the direct-to-home band. **L and S** are deep space and navigation. Deep space means **beyond Earth’s orbit**, not merely beyond 100 km.</span>

---

## Abbreviations

| Short | Full form |
|:---|:---|
| Hz | hertz (cycles per second) |
| EM | electromagnetic |
| UV | ultraviolet |
| PM2.5 / PM10 | particulate matter of 2.5 micrometres / 10 micrometres |
| ITU | International Telecommunication Union |
| BSNL | Bharat Sanchar Nigam Limited |
| MTNL | Mahanagar Telephone Nigam Limited |
| GEO | geostationary orbit |
| OTP | orbital time period |
| NavIC | Navigation with Indian Constellation |
| GISAT | geostationary imaging satellite |
| EOS-05 | Earth Observation Satellite-05 |
| INSAT-3DR | the meteorological satellite he named in GEO; he did not expand the letters |
| ISRO | Indian Space Research Organisation |
| DTH | direct to home |

<!-- 2026-10-07: Vinay Sir space Lecture 13, class date 5 Oct. Cluster ST-12. First-pass 12 Oct Q1. Waves, usable window, bands, transponder, GEO. The 5,000-person letter is patched on ST-10. Lagrangian points parked. Karman line, three-satellite global cover, and NavIC’s outage stay Lectures 10 and 12. -->
