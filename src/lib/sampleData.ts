import { ServiceCategory } from "./constants";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface Service {
  title: string;
  slug: string;
  category: ServiceCategory;
  shortDescription: string;
  overview: string;
  whyNeeded: string;
  eligibility: string[];
  procedureSteps: { step: number; title: string; description: string }[];
  recoveryTimeline: { period: string; description: string }[];
  results: string;
  safetyNotes: string;
  faqs: { question: string; answer: string }[];
  heroImage: string;
  seoTitle: string;
  seoDescription: string;
  relatedServices: string[];
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  procedure: string;
}

export interface ResultItem {
  id: string;
  beforeImage: string;
  afterImage: string;
  caption: string;
  serviceSlug: string;
  serviceTitle: string;
  location: string;
}

export interface DoctorInfo {
  name: string;
  title: string;
  qualifications: string[];
  specializations: string[];
  experience: number;
  proceduresDone: number;
  bio: string;
  philosophy: string;
  image: string;
}

const clinicImages = {
  doctor:   "/images/doctor.jpg",

  resultRhinoplastyBefore:  "/images/result-rhinoplasty-before.jpg",
  resultRhinoplastyAfter:   "/images/result-rhinoplasty-after.jpg",
  resultGynecomastiaBefore: "/images/result-gynecomastia-before.jpg",
  resultGynecomastiaAfter:  "/images/result-gynecomastia-after.jpg",
  resultLiposuctionBefore:  "/images/result-liposuction-before.jpg",
  resultLiposuctionAfter:   "/images/result-liposuction-after.jpg",
  resultHairBefore:         "/images/result-hair-before.jpg",
  resultHairAfter:          "/images/result-hair-after.jpg",
  resultFaceBefore:         "/images/result-facelift-before.jpg",
  resultFaceAfter:          "/images/result-facelift-after.jpg",
  resultTummyBefore:        "/images/result-tummy-before.jpg",
  resultTummyAfter:         "/images/result-tummy-after.jpg",
  resultBlepharoplastyBefore: "/images/result-blepharoplasty-before.jpg",
  resultBlepharoplastyAfter:  "/images/result-blepharoplasty-after.jpg",
  resultBreastAugBefore:    "/images/result-breast-aug-before.jpg",
  resultBreastAugAfter:     "/images/result-breast-aug-after.jpg",
  resultLipBefore:          "/images/result-lip-before.jpg",
  resultLipAfter:           "/images/result-lip-after.jpg",
  resultEarBefore:          "/images/result-ear-before.jpg",
  resultEarAfter:           "/images/result-ear-after.jpg",
};

/* ------------------------------------------------------------------ */
/*  Doctor Info                                                        */
/* ------------------------------------------------------------------ */

export const doctorInfo: DoctorInfo = {
  name: "Dr. Sarika Gangwar",
  title: "Senior Consultant — Plastic & Cosmetic Surgery",
  qualifications: [
    "MBBS",
    "DrNB (Plastic Surgery)"
  ],
  specializations: [
    "Facial Rejuvenation & Rhinoplasty",
    "Body Contouring & Liposuction",
    "Breast Surgery",
    "Reconstructive Surgery",
  ],
  experience: 8,
  proceduresDone: 1200,
  bio: "Dr. Sarika Gangwar is one of the most trusted plastic and cosmetic surgeons in Haldwani, Uttarakhand. With over 8 years of specialized experience and more than 1,200 successful procedures, she combines surgical precision with an artistic eye to deliver natural, life-changing results. Trained at premier medical institutions across India, Dr. Gangwar brings world-class cosmetic surgery expertise to the Kumaun region, making advanced aesthetic procedures accessible without the need to travel to metro cities.",
  philosophy:
    "Every patient is unique. My approach begins with truly understanding your goals and concerns, followed by an honest assessment of what can be achieved. I believe in enhancing your natural beauty — not changing who you are. Safety, precision, and natural-looking results are the cornerstones of my practice.",
  image: clinicImages.doctor,
};

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */

export const services: Service[] = [
  /* ==================== FACE ==================== */
  {
    title: "Face Lift",
    slug: "face-lift",
    category: "Face",
    shortDescription:
      "Turn back the clock with a natural-looking face lift that restores youthful contours and tightens sagging skin.",
    overview:
      "A face lift (rhytidectomy) is a surgical procedure that reduces visible signs of aging in the face and neck. Dr. Sarika Gangwar uses advanced techniques to reposition deep facial tissues, remove excess skin, and smooth wrinkles — delivering results that look refreshed, never pulled. This procedure is ideal for patients experiencing jowling, deep creases, and loss of facial definition.",
    whyNeeded:
      "As we age, the face loses fat and elasticity, leading to sagging skin, deep folds, and jowls. Environmental factors, genetics, and gravity accelerate these changes. A face lift addresses these concerns at the structural level, restoring a naturally youthful facial profile that creams and non-surgical treatments cannot achieve.",
    eligibility: [
      "Adults aged 40–70 with visible facial sagging",
      "Non-smokers or willing to quit 4 weeks before surgery",
      "Good overall health without uncontrolled medical conditions",
      "Realistic expectations about outcomes",
      "Skin with some elasticity remaining",
    ],
    procedureSteps: [
      { step: 1, title: "Consultation & Planning", description: "Detailed facial analysis, 3D imaging, discussion of goals, and customized surgical plan." },
      { step: 2, title: "Anesthesia", description: "General anesthesia or IV sedation is administered for your comfort." },
      { step: 3, title: "Incisions", description: "Discreet incisions along the hairline and around the ears, hidden in natural creases." },
      { step: 4, title: "Tissue Repositioning", description: "Deep facial tissues (SMAS layer) are lifted and repositioned for long-lasting results." },
      { step: 5, title: "Closure & Recovery", description: "Excess skin is removed, incisions are closed with fine sutures, and a compression bandage is applied." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Rest at home. Mild swelling and bruising. Pain managed with medication." },
      { period: "Week 1", description: "Sutures removed. Swelling begins to subside. Avoid strenuous activity." },
      { period: "Week 2–4", description: "Most bruising resolves. Gradual return to daily activities." },
      { period: "Month 2–3", description: "Final results visible. Scars continue to fade over the following months." },
    ],
    results:
      "Patients typically look 8–12 years younger with natural, refreshed facial contours. Results last 7–10 years, and many patients report a significant boost in confidence and quality of life.",
    safetyNotes:
      "Face lift surgery is performed in a fully equipped operating theater with board-certified anesthesiologists. Dr. Gangwar follows strict safety protocols, and all procedures include pre-operative health screening and post-operative monitoring to ensure optimal outcomes.",
    faqs: [
      { question: "How long does a face lift last?", answer: "Results typically last 7–10 years. While aging continues naturally, you will always look younger than if you hadn't had the procedure." },
      { question: "Will my face look 'pulled' or unnatural?", answer: "No. Dr. Gangwar specializes in natural-looking results by repositioning deep tissues rather than simply pulling skin tight." },
      { question: "What is the ideal age for a face lift?", answer: "Most patients are between 40 and 70, but candidacy depends on skin quality and facial aging rather than age alone." },
      { question: "Can a face lift be combined with other procedures?", answer: "Yes. It is commonly combined with eyelid surgery (blepharoplasty), brow lift, or fat grafting for comprehensive facial rejuvenation." },
    ],
    heroImage: "/images/svc-face-lift.jpg",
    seoTitle: "Face Lift Surgery in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Get a natural-looking face lift in Haldwani, Uttarakhand with Dr. Sarika Gangwar. Advanced rhytidectomy techniques for lasting facial rejuvenation. Book consultation.",
    relatedServices: ["brow-lift", "blepharoplasty", "rhinoplasty"],
  },
  {
    title: "Brow Lift",
    slug: "brow-lift",
    category: "Face",
    shortDescription:
      "Elevate drooping brows and smooth forehead wrinkles for a refreshed, more alert appearance.",
    overview:
      "A brow lift (forehead lift) elevates the eyebrows and reduces forehead creases, frown lines, and hooding over the eyes. Dr. Sarika Gangwar performs endoscopic brow lifts through small hidden incisions, minimizing scarring and recovery time while delivering a naturally refreshed look.",
    whyNeeded:
      "Drooping eyebrows can make you look tired, sad, or angry — even when you feel great. A brow lift corrects the position of the brows to open up the eye area and smooth deep forehead lines that resist Botox or fillers.",
    eligibility: [
      "Adults with drooping or asymmetric brows",
      "Deep forehead lines or frown lines",
      "Good general health",
      "Non-smokers or willing to quit before surgery",
    ],
    procedureSteps: [
      { step: 1, title: "Consultation", description: "Assessment of brow position, forehead lines, and overall facial harmony." },
      { step: 2, title: "Anesthesia", description: "General anesthesia or sedation for patient comfort." },
      { step: 3, title: "Endoscopic Technique", description: "Small incisions behind the hairline; an endoscope guides tissue repositioning." },
      { step: 4, title: "Brow Elevation", description: "Underlying tissues are adjusted and secured at a higher, more youthful position." },
      { step: 5, title: "Recovery", description: "Minimal swelling; results visible within 2 weeks." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Mild swelling around forehead and eyes. Rest recommended." },
      { period: "Week 1", description: "Most swelling resolves. Return to light activities." },
      { period: "Week 2–3", description: "Resume normal activities. Avoid heavy exercise." },
      { period: "Month 1–2", description: "Final results settle. Scars fade completely." },
    ],
    results: "A more youthful, alert appearance with smoother forehead skin. Results last 5–10 years.",
    safetyNotes: "Endoscopic technique minimizes risk and scarring. Performed under strict surgical safety protocols.",
    faqs: [
      { question: "Is a brow lift the same as Botox?", answer: "No. Botox temporarily relaxes muscles, while a brow lift physically repositions the brow for longer-lasting results." },
      { question: "Will I have visible scars?", answer: "Incisions are hidden behind the hairline and become virtually invisible once healed." },
      { question: "Can it be combined with eyelid surgery?", answer: "Yes. A brow lift pairs beautifully with blepharoplasty for complete upper-face rejuvenation." },
    ],
    heroImage: "/images/svc-brow-lift.jpg",
    seoTitle: "Brow Lift Surgery in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Expert brow lift surgery in Haldwani, Uttarakhand. Endoscopic forehead lift by Dr. Sarika Gangwar for a refreshed, youthful look.",
    relatedServices: ["face-lift", "blepharoplasty", "rhinoplasty"],
  },
  {
    title: "Blepharoplasty (Baggy Eyelids)",
    slug: "blepharoplasty",
    category: "Face",
    shortDescription:
      "Remove puffy bags, excess skin, and drooping eyelids to reveal brighter, more youthful eyes.",
    overview:
      "Blepharoplasty is a precise surgical procedure that corrects droopy eyelids, under-eye bags, and puffiness by removing or repositioning excess fat and skin around the eyes. Dr. Sarika Gangwar customizes upper and lower blepharoplasty to each patient's anatomy for results that look natural and refreshed.",
    whyNeeded:
      "Aging, genetics, and sun exposure cause the delicate skin around the eyes to stretch and sag. This creates a tired, aged appearance and can even impair peripheral vision. Blepharoplasty restores a youthful, alert look to the eye area.",
    eligibility: [
      "Adults with drooping upper eyelids or under-eye bags",
      "Good overall eye health (no glaucoma or dry eye issues)",
      "Non-smokers",
      "Realistic expectations",
    ],
    procedureSteps: [
      { step: 1, title: "Evaluation", description: "Detailed eye examination and facial analysis to plan the procedure." },
      { step: 2, title: "Anesthesia", description: "Local anesthesia with sedation for comfort." },
      { step: 3, title: "Upper Lid Correction", description: "Incision in the natural crease; excess skin and fat removed." },
      { step: 4, title: "Lower Lid Correction", description: "Incision just below lashes or inside the lid; fat repositioned to smooth contour." },
      { step: 5, title: "Closure", description: "Fine sutures close incisions along natural lines for minimal scarring." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Cold compresses, head elevation. Mild bruising and swelling." },
      { period: "Week 1", description: "Sutures removed. Bruising fades significantly." },
      { period: "Week 2", description: "Return to normal activities. Makeup can conceal residual marks." },
      { period: "Month 1", description: "Final results visible. Scars hidden in natural creases." },
    ],
    results: "Brighter, more open eyes with a refreshed appearance. Results are long-lasting, typically 10+ years.",
    safetyNotes: "Performed with meticulous precision to protect delicate eye structures. Pre-operative eye health screening is mandatory.",
    faqs: [
      { question: "Will blepharoplasty change my eye shape?", answer: "No. The goal is to rejuvenate the area around the eyes while preserving your natural eye shape and expression." },
      { question: "Can I get upper and lower lids done together?", answer: "Yes. Many patients opt for a combined procedure for comprehensive rejuvenation." },
      { question: "At what age is blepharoplasty recommended?", answer: "While most common in patients 35+, it depends on individual anatomy. Some patients seek it earlier for genetic under-eye bags." },
    ],
    heroImage: "/images/svc-blepharoplasty.jpg",
    seoTitle: "Blepharoplasty (Eyelid Surgery) in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Expert eyelid surgery in Haldwani, Uttarakhand. Remove baggy eyelids and under-eye bags. Consult Dr. Sarika Gangwar for blepharoplasty.",
    relatedServices: ["face-lift", "brow-lift", "lip-enhancement-reduction"],
  },
  {
    title: "Rhinoplasty (Nose Job)",
    slug: "rhinoplasty",
    category: "Face",
    shortDescription:
      "Reshape your nose for better proportion, symmetry, and breathing with expert rhinoplasty surgery.",
    overview:
      "Rhinoplasty is one of the most transformative facial procedures. Dr. Sarika Gangwar performs both cosmetic and functional rhinoplasty — reshaping the nose to achieve facial harmony while improving breathing when needed. Using advanced open and closed techniques, she delivers precise, natural results tailored to Indian facial anatomy.",
    whyNeeded:
      "The nose is the central feature of the face. A disproportionate, crooked, or bulbous nose can affect facial balance and self-confidence. Additionally, structural issues like a deviated septum can cause breathing difficulties. Rhinoplasty addresses both aesthetic concerns and functional problems in a single procedure.",
    eligibility: [
      "Adults with cosmetic concerns about nasal shape or size",
      "Patients with breathing difficulties due to nasal structure",
      "Nasal growth must be complete (typically age 16+)",
      "Good overall health",
      "Non-smokers",
    ],
    procedureSteps: [
      { step: 1, title: "In-Depth Consultation", description: "3D imaging and detailed discussion of desired changes. Analysis of nasal structure and skin thickness." },
      { step: 2, title: "Anesthesia", description: "General anesthesia for patient comfort and precision." },
      { step: 3, title: "Surgical Reshaping", description: "Bone and cartilage reshaped through closed (internal) or open (external) approach based on complexity." },
      { step: 4, title: "Septum Correction", description: "If needed, deviated septum is straightened to improve airflow." },
      { step: 5, title: "Splinting & Recovery", description: "Nasal splint applied for support. Internal packing removed within 1–2 days." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Nasal splint in place. Mild discomfort and congestion. Rest required." },
      { period: "Week 1", description: "Splint removed. Significant swelling subsides. Avoid glasses." },
      { period: "Week 2–4", description: "Most visible swelling resolves. Return to work." },
      { period: "Month 3–12", description: "Subtle refinements continue as the nose settles into its final shape." },
    ],
    results: "A balanced, proportionate nose that harmonizes with your facial features. Improved breathing in functional cases. Results are permanent.",
    safetyNotes: "Rhinoplasty demands the highest surgical precision. Dr. Gangwar's extensive training and experience ensure safe, predictable outcomes. Revision rates are minimized through meticulous pre-operative planning.",
    faqs: [
      { question: "Will my nose look natural?", answer: "Absolutely. Dr. Gangwar designs each rhinoplasty to complement your unique facial features, avoiding the 'done' look." },
      { question: "Can rhinoplasty fix breathing problems?", answer: "Yes. Functional rhinoplasty corrects structural issues like a deviated septum while improving nasal aesthetics." },
      { question: "How long until I see the final result?", answer: "While major changes are visible at 4–6 weeks, the final result with all subtle refinements is typically seen at 12 months." },
      { question: "Is rhinoplasty painful?", answer: "Most patients report mild discomfort rather than pain. Congestion is the primary sensation during the first week." },
    ],
    heroImage: "/images/svc-rhinoplasty.jpg",
    seoTitle: "Rhinoplasty (Nose Job) in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Best rhinoplasty surgeon in Haldwani, Uttarakhand. Expert nose reshaping by Dr. Sarika Gangwar. Cosmetic + functional nose surgery. Book now.",
    relatedServices: ["face-lift", "chin-correction", "lip-enhancement-reduction"],
  },
  {
    title: "Lip Enhancement / Reduction",
    slug: "lip-enhancement-reduction",
    category: "Face",
    shortDescription:
      "Achieve perfectly proportioned lips — whether you want fuller volume or a refined reduction.",
    overview:
      "Dr. Sarika Gangwar offers both lip augmentation and lip reduction procedures to create beautifully balanced, natural-looking lips. Using advanced techniques including fat grafting, lip lifts, and surgical reduction, she helps patients achieve their desired lip shape and proportion.",
    whyNeeded:
      "Lip proportions significantly impact facial aesthetics. Thin lips can appear aged, while overly full lips may feel disproportionate. Lip procedures restore or create harmony with the rest of your facial features.",
    eligibility: [
      "Adults seeking lip volume or reduction",
      "Good oral and overall health",
      "No active cold sores or oral infections",
      "Realistic expectations about outcomes",
    ],
    procedureSteps: [
      { step: 1, title: "Consultation", description: "Assessment of lip shape, facial proportions, and desired outcome." },
      { step: 2, title: "Anesthesia", description: "Local anesthesia with optional sedation." },
      { step: 3, title: "Procedure", description: "Fat grafting for enhancement or tissue removal for reduction, using precise techniques." },
      { step: 4, title: "Recovery", description: "Sutures close incisions. Lips heal rapidly with proper care." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Swelling is significant but expected. Soft diet recommended." },
      { period: "Week 1", description: "Swelling reduces noticeably. Resume normal eating." },
      { period: "Week 2–4", description: "Final shape begins to emerge. Normal activities resume." },
    ],
    results: "Beautifully proportioned lips that complement your facial features. Results from fat grafting are long-lasting.",
    safetyNotes: "All lip procedures are performed under sterile conditions with precise technique to minimize scarring. Incisions are placed within natural lip lines.",
    faqs: [
      { question: "Is lip enhancement permanent?", answer: "Fat grafting provides long-lasting results. Some volume may settle in the first few months, so slight overcorrection is planned." },
      { question: "How noticeable are scars?", answer: "Incisions are hidden within the lip border and become virtually invisible once healed." },
    ],
    heroImage: "/images/svc-lip-enhancement.jpg",
    seoTitle: "Lip Enhancement & Reduction in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Expert lip enhancement and lip reduction surgery in Haldwani. Natural-looking lip procedures by Dr. Sarika Gangwar. Consultation available.",
    relatedServices: ["rhinoplasty", "chin-correction", "face-lift"],
  },
  {
    title: "Chin Correction",
    slug: "chin-correction",
    category: "Face",
    shortDescription:
      "Sculpt a stronger, more balanced chin profile with genioplasty or chin implants.",
    overview:
      "Chin correction (genioplasty or mentoplasty) reshapes the chin to create better facial balance and profile. Dr. Sarika Gangwar uses bone repositioning or implants depending on the patient's anatomy and goals, delivering a more defined jawline and harmonious profile.",
    whyNeeded:
      "A weak, receding, or overly prominent chin disrupts facial proportion. Chin correction restores balance between the nose, lips, and chin — often producing a dramatic improvement in overall facial aesthetics.",
    eligibility: [
      "Adults with chin disproportion",
      "Good dental and jaw health",
      "Facial bone growth complete (typically 18+)",
      "Good overall health",
    ],
    procedureSteps: [
      { step: 1, title: "Facial Analysis", description: "Cephalometric analysis and imaging to plan precise chin repositioning." },
      { step: 2, title: "Anesthesia", description: "General anesthesia for sliding genioplasty; local for implants." },
      { step: 3, title: "Surgical Correction", description: "Bone is repositioned (genioplasty) or a custom implant is placed through a concealed incision." },
      { step: 4, title: "Recovery", description: "Supportive bandage applied. Soft diet for the first week." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Chin swelling and numbness. Pain managed with medication." },
      { period: "Week 1–2", description: "Swelling subsides. Soft diet transitions to normal eating." },
      { period: "Week 3–6", description: "Return to full activities. Final contour emerges." },
    ],
    results: "A more defined, proportionate chin that enhances your entire facial profile. Results are permanent.",
    safetyNotes: "Procedure performed with careful nerve monitoring to preserve chin sensation. Dr. Gangwar uses anatomically precise techniques.",
    faqs: [
      { question: "Implant or bone surgery — which is better?", answer: "It depends on your anatomy. Sliding genioplasty offers more options for repositioning, while implants are simpler for augmentation-only cases." },
      { question: "Are chin implants safe?", answer: "Yes. Modern biocompatible implants are well-tolerated and have a long safety record." },
    ],
    heroImage: "/images/svc-chin-correction.jpg",
    seoTitle: "Chin Correction Surgery in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Expert chin correction and genioplasty in Haldwani, Uttarakhand. Improve your facial profile with Dr. Sarika Gangwar.",
    relatedServices: ["rhinoplasty", "face-lift", "lip-enhancement-reduction"],
  },
  {
    title: "Ear Reshaping",
    slug: "ear-reshaping",
    category: "Face",
    shortDescription:
      "Correct protruding, asymmetric, or misshapen ears with otoplasty for a more natural look.",
    overview:
      "Ear reshaping (otoplasty) corrects prominent, protruding, or misshapen ears. Dr. Sarika Gangwar reshapes the ear cartilage through discreet incisions behind the ears, creating a natural contour that sits closer to the head and boosts confidence.",
    whyNeeded:
      "Prominent or asymmetric ears can cause self-consciousness, especially in children and young adults. Otoplasty provides a permanent correction that looks completely natural.",
    eligibility: [
      "Children aged 5+ (ears are nearly fully grown by age 5)",
      "Adults with prominent or asymmetric ears",
      "Good general health",
      "No ear infections",
    ],
    procedureSteps: [
      { step: 1, title: "Consultation", description: "Assessment of ear shape, symmetry, and surgical goals." },
      { step: 2, title: "Anesthesia", description: "Local anesthesia (adults) or general anesthesia (children)." },
      { step: 3, title: "Cartilage Reshaping", description: "Incisions behind the ear; cartilage is reshaped and secured." },
      { step: 4, title: "Recovery", description: "Headband worn for protection. Rapid healing." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Mild discomfort. Protective headband worn continuously." },
      { period: "Week 1", description: "Sutures dissolve. Resume light activities." },
      { period: "Week 2–4", description: "Normal activities resume. Wear headband at night." },
    ],
    results: "Naturally shaped, symmetrical ears with scars hidden behind the ear. Results are permanent.",
    safetyNotes: "A gentle procedure with high patient satisfaction. Safe for both children and adults.",
    faqs: [
      { question: "At what age can children have otoplasty?", answer: "Children as young as 5 years old can have otoplasty, as ear cartilage is sufficiently developed by this age." },
      { question: "Will otoplasty leave visible scars?", answer: "No. Incisions are made behind the ear and become virtually invisible." },
    ],
    heroImage: "/images/svc-ear-reshaping.jpg",
    seoTitle: "Ear Reshaping (Otoplasty) in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Expert otoplasty in Haldwani, Uttarakhand. Correct prominent or misshapen ears with Dr. Sarika Gangwar.",
    relatedServices: ["rhinoplasty", "face-lift", "chin-correction"],
  },

  /* ==================== BREAST ==================== */
  {
    title: "Breast Augmentation",
    slug: "breast-augmentation",
    category: "Breast",
    shortDescription:
      "Enhance breast size and shape with implants or fat transfer for natural, proportionate results.",
    overview:
      "Breast augmentation enhances the size, shape, and symmetry of the breasts using silicone or saline implants, or autologous fat transfer. Dr. Sarika Gangwar tailors implant type, size, and placement to each patient's body frame and aesthetic goals, ensuring results that look and feel natural.",
    whyNeeded:
      "Many women feel self-conscious about naturally small breasts, asymmetry, or volume loss after pregnancy and breastfeeding. Breast augmentation restores or creates fuller, proportionate breasts that enhance confidence and body image.",
    eligibility: [
      "Women 18+ (saline implants) or 22+ (silicone implants)",
      "Good overall health",
      "Not currently pregnant or breastfeeding",
      "Breasts are fully developed",
      "Realistic expectations about outcomes",
    ],
    procedureSteps: [
      { step: 1, title: "Detailed Consultation", description: "Measurement, size simulation, and selection of implant type, shape, and placement." },
      { step: 2, title: "Anesthesia", description: "General anesthesia for patient safety and comfort." },
      { step: 3, title: "Incision & Placement", description: "Discreet incision (inframammary, periareolar, or axillary). Implant placed above or below the muscle." },
      { step: 4, title: "Symmetry & Closure", description: "Final positioning checked. Incisions closed in layers for minimal scarring." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Surgical bra worn. Mild pain managed with medication. Rest required." },
      { period: "Week 1–2", description: "Return to light activities. Avoid lifting." },
      { period: "Week 4–6", description: "Resume exercise. Implants begin to settle." },
      { period: "Month 3–6", description: "Final shape achieved as implants drop and soften." },
    ],
    results: "Fuller, natural-looking breasts with improved symmetry. Modern implants feel soft and natural. Results are long-lasting with proper care.",
    safetyNotes: "Dr. Gangwar uses only FDA-approved implants from leading manufacturers. Comprehensive pre-operative screening and post-operative follow-up ensure safety.",
    faqs: [
      { question: "Silicone or saline — which is better?", answer: "Silicone implants feel more natural and are the most popular choice worldwide. Dr. Gangwar will help you choose based on your anatomy and goals." },
      { question: "Can I breastfeed after augmentation?", answer: "In most cases, yes. Implant placement technique is chosen to preserve breast tissue and milk ducts." },
      { question: "How long do implants last?", answer: "Modern implants can last 15–20+ years. They are not considered lifetime devices and may eventually need replacement." },
    ],
    heroImage: "/images/svc-breast-augmentation.jpg",
    seoTitle: "Breast Augmentation in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Expert breast augmentation surgery in Haldwani, Uttarakhand. Natural-looking breast implants by Dr. Sarika Gangwar. Book consultation today.",
    relatedServices: ["breast-reduction", "breast-lift-mastopexy", "gynecomastia"],
  },
  {
    title: "Breast Reduction",
    slug: "breast-reduction",
    category: "Breast",
    shortDescription:
      "Relieve discomfort and achieve a proportionate bust with breast reduction surgery.",
    overview:
      "Breast reduction (reduction mammaplasty) removes excess breast tissue, fat, and skin to achieve a breast size proportionate to the body. Dr. Sarika Gangwar uses advanced techniques that minimize scarring while providing relief from physical discomfort caused by overly large breasts.",
    whyNeeded:
      "Excessively large breasts cause chronic neck pain, back pain, skin irritation, and difficulty exercising. Beyond physical discomfort, they can cause emotional distress and limit clothing options. Breast reduction provides immediate and lasting relief.",
    eligibility: [
      "Women experiencing physical symptoms from large breasts",
      "Breasts are fully developed",
      "Non-smokers",
      "Good overall health",
      "No plans for future pregnancy (which may alter results)",
    ],
    procedureSteps: [
      { step: 1, title: "Assessment", description: "Evaluation of breast size, symptoms, and desired outcome. Surgical plan marked." },
      { step: 2, title: "Anesthesia", description: "General anesthesia administered." },
      { step: 3, title: "Tissue Removal & Reshaping", description: "Excess tissue, fat, and skin removed. Breast reshaped with lifted nipple position." },
      { step: 4, title: "Closure", description: "Layered closure with drain placement if needed." },
    ],
    recoveryTimeline: [
      { period: "Day 1–5", description: "Surgical bra required. Moderate discomfort managed with medication." },
      { period: "Week 1–2", description: "Drains removed. Light activities resume." },
      { period: "Week 4–6", description: "Return to exercise. Scars begin to mature." },
      { period: "Month 3–6", description: "Final shape settled. Scars continue to fade." },
    ],
    results: "Immediate relief from back and neck pain. Proportionate, lifted breasts with improved body contour. High patient satisfaction.",
    safetyNotes: "Comprehensive pre-operative mammography or ultrasound. Meticulous surgical technique preserves nipple sensation and blood supply.",
    faqs: [
      { question: "Will I lose nipple sensation?", answer: "Most patients retain normal sensation. Temporary numbness may occur but typically resolves within months." },
      { question: "Can I breastfeed after reduction?", answer: "There is a possibility of reduced breastfeeding ability. This is discussed in detail during consultation." },
      { question: "Will insurance cover breast reduction?", answer: "When performed for medical reasons with documented symptoms, breast reduction may be covered. We can provide necessary documentation." },
    ],
    heroImage: "/images/svc-breast-reduction.jpg",
    seoTitle: "Breast Reduction Surgery in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Expert breast reduction in Haldwani, Uttarakhand. Relief from back pain with proportionate results. Consult Dr. Sarika Gangwar.",
    relatedServices: ["breast-augmentation", "breast-lift-mastopexy", "liposuction"],
  },
  {
    title: "Breast Lift (Mastopexy)",
    slug: "breast-lift-mastopexy",
    category: "Breast",
    shortDescription:
      "Restore youthful breast shape and position with a breast lift that combats sagging.",
    overview:
      "A breast lift (mastopexy) raises and reshapes sagging breasts by removing excess skin and tightening surrounding tissue. Dr. Sarika Gangwar repositions the nipple-areola complex to a youthful height and creates a firmer, perkier breast contour — restoring confidence and comfort.",
    whyNeeded:
      "Pregnancy, breastfeeding, weight fluctuations, aging, and gravity cause breasts to lose their youthful shape and firmness. A breast lift addresses sagging (ptosis) that no exercise or bra can correct, restoring a lifted, natural breast profile.",
    eligibility: [
      "Women with breast sagging (ptosis grade II or III)",
      "Completed pregnancies (recommended but not required)",
      "Stable weight",
      "Good overall health",
      "Non-smokers",
    ],
    procedureSteps: [
      { step: 1, title: "Consultation & Marking", description: "Assessment of ptosis grade. Surgical plan marked on the skin for precision." },
      { step: 2, title: "Anesthesia", description: "General anesthesia for patient comfort." },
      { step: 3, title: "Tissue Reshaping", description: "Excess skin removed. Breast tissue reshaped and lifted. Nipple repositioned." },
      { step: 4, title: "Closure & Support", description: "Layered closure. Surgical bra applied for support." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Moderate discomfort. Rest with surgical bra." },
      { period: "Week 1–2", description: "Sutures removed. Swelling subsides. Light activities." },
      { period: "Week 4–6", description: "Resume exercise. Shape continues to settle." },
      { period: "Month 3", description: "Final results visible. Scars fading." },
    ],
    results: "Lifted, firmer breasts with a youthful contour. Nipples at a natural, elevated position. Results last many years with stable weight.",
    safetyNotes: "Performed with preservation of blood supply and nipple sensation. Strict infection prevention protocols followed.",
    faqs: [
      { question: "Can a breast lift be combined with implants?", answer: "Yes. Augmentation-mastopexy is popular for patients who want both lift and additional volume." },
      { question: "Will a breast lift leave scars?", answer: "Scars are placed around the areola and in the natural breast fold. They fade significantly over 12–18 months." },
      { question: "How long do results last?", answer: "Results are long-lasting, especially with stable weight. Gravity will continue its natural effect over years." },
    ],
    heroImage: "/images/svc-breast-lift.jpg",
    seoTitle: "Breast Lift (Mastopexy) in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Best breast lift surgery in Haldwani, Uttarakhand. Correct sagging breasts with mastopexy by Dr. Sarika Gangwar.",
    relatedServices: ["breast-augmentation", "breast-reduction", "tummy-tuck"],
  },
  {
    title: "Gynecomastia",
    slug: "gynecomastia",
    category: "Breast",
    shortDescription:
      "Eliminate enlarged male breasts and restore a flat, masculine chest contour.",
    overview:
      "Gynecomastia surgery treats enlarged male breast tissue — a condition that affects up to 60% of men. Dr. Sarika Gangwar uses a combination of liposuction and gland excision to create a flat, masculine chest contour with minimal scarring, restoring confidence and comfort.",
    whyNeeded:
      "Enlarged breast tissue in men (gynecomastia) can be caused by hormonal changes, medications, or genetics. It causes significant embarrassment and limits activities like swimming or wearing fitted clothing. Surgery provides a permanent solution when exercise and diet fail.",
    eligibility: [
      "Men with persistent breast enlargement unresponsive to other treatments",
      "Stable weight",
      "Good overall health",
      "Hormonal evaluation completed",
    ],
    procedureSteps: [
      { step: 1, title: "Evaluation", description: "Physical exam, hormonal screening, and imaging to assess gland vs. fat composition." },
      { step: 2, title: "Anesthesia", description: "General or local anesthesia with sedation." },
      { step: 3, title: "Liposuction", description: "Excess fat removed through tiny incisions using power-assisted liposuction." },
      { step: 4, title: "Gland Excision", description: "Dense breast gland tissue excised through a small periareolar incision." },
      { step: 5, title: "Contouring", description: "Chest sculpted for a natural, masculine appearance." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Compression vest worn. Mild soreness. Rest recommended." },
      { period: "Week 1–2", description: "Light activities resume. Continue wearing compression garment." },
      { period: "Week 4–6", description: "Resume gym and sports. Swelling mostly resolved." },
      { period: "Month 3", description: "Final chest contour visible." },
    ],
    results: "A flat, well-contoured masculine chest. Results are permanent when underlying cause is addressed. High patient satisfaction.",
    safetyNotes: "Hormonal causes must be investigated before surgery. Procedure performed with careful attention to symmetry and smooth contour.",
    faqs: [
      { question: "Will gynecomastia come back after surgery?", answer: "Recurrence is rare when the gland is properly excised and hormonal causes are addressed." },
      { question: "Is gynecomastia surgery painful?", answer: "Most patients report mild to moderate discomfort for the first few days, well-managed with medication." },
      { question: "Will there be visible scars?", answer: "Scars from liposuction are tiny (3–4mm). The periareolar scar blends with the areola border and becomes barely visible." },
    ],
    heroImage: "/images/svc-gynecomastia.jpg",
    seoTitle: "Gynecomastia Surgery in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Best gynecomastia surgery in Haldwani, Uttarakhand. Male breast reduction by Dr. Sarika Gangwar. Flat, masculine chest. Book consultation.",
    relatedServices: ["liposuction", "breast-reduction", "abdominal-etching"],
  },
  {
    title: "Nipple & Areola Correction",
    slug: "nipple-areola-correction",
    category: "Breast",
    shortDescription:
      "Correct inverted nipples, enlarged areolas, or asymmetry for improved breast aesthetics.",
    overview:
      "Nipple and areola correction addresses inverted nipples, enlarged areolas, or asymmetry through precise surgical techniques. Dr. Sarika Gangwar performs these procedures with attention to symmetry and natural appearance, often as standalone procedures or combined with breast surgery.",
    whyNeeded:
      "Inverted nipples can affect breastfeeding ability and cause self-consciousness. Enlarged or asymmetric areolas may result from genetics, pregnancy, or previous surgery. Correction improves breast aesthetics and function.",
    eligibility: [
      "Adults with nipple or areola concerns",
      "Good breast and overall health",
      "Not currently breastfeeding",
    ],
    procedureSteps: [
      { step: 1, title: "Assessment", description: "Evaluation of nipple/areola concerns and surgical planning." },
      { step: 2, title: "Local Anesthesia", description: "Local anesthesia for patient comfort." },
      { step: 3, title: "Correction", description: "Release of inverted nipples or reduction of areola size through precise techniques." },
      { step: 4, title: "Recovery", description: "Minimal downtime. Light dressing applied." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Mild tenderness. Dressing kept clean and dry." },
      { period: "Week 1", description: "Sutures removed or dissolve. Resume normal activities." },
      { period: "Week 2–4", description: "Full healing. Final results visible." },
    ],
    results: "Natural-looking nipples and areolas with improved symmetry. Minimal scarring.",
    safetyNotes: "Performed with preservation of milk ducts when possible. Quick procedure with high satisfaction rates.",
    faqs: [
      { question: "Can I breastfeed after nipple correction?", answer: "Breastfeeding ability depends on the technique used. Milk duct preservation is prioritized when future breastfeeding is desired." },
      { question: "Is this done under general anesthesia?", answer: "No. It is typically performed under local anesthesia as an outpatient procedure." },
    ],
    heroImage: "/images/svc-nipple-areola.jpg",
    seoTitle: "Nipple & Areola Correction in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Expert nipple and areola correction in Haldwani, Uttarakhand. Fix inverted nipples and areola concerns with Dr. Sarika Gangwar.",
    relatedServices: ["breast-augmentation", "breast-lift-mastopexy", "breast-reduction"],
  },

  /* ==================== BODY ==================== */
  {
    title: "Liposuction",
    slug: "liposuction",
    category: "Body",
    shortDescription:
      "Remove stubborn fat deposits and sculpt your body contours with advanced liposuction techniques.",
    overview:
      "Liposuction is the most popular body contouring procedure worldwide. Dr. Sarika Gangwar uses advanced power-assisted and tumescent liposuction techniques to permanently remove stubborn fat deposits from the abdomen, thighs, flanks, arms, chin, and more — sculpting a slimmer, more defined body contour.",
    whyNeeded:
      "Diet and exercise cannot always eliminate localized fat deposits caused by genetics. Liposuction precisely targets these resistant pockets, sculpting the body into a more proportionate and defined shape. It is not a weight-loss procedure but a body-shaping tool.",
    eligibility: [
      "Adults within 20–30% of ideal body weight",
      "Firm, elastic skin for best results",
      "Good overall health",
      "Non-smokers",
      "Stable weight for at least 6 months",
    ],
    procedureSteps: [
      { step: 1, title: "Body Assessment", description: "Detailed analysis of fat distribution, skin quality, and body proportions." },
      { step: 2, title: "Tumescent Infusion", description: "Tumescent fluid injected to minimize bleeding and ease fat removal." },
      { step: 3, title: "Fat Removal", description: "Tiny cannula inserted through small incisions. Fat suctioned with controlled technique." },
      { step: 4, title: "Contouring", description: "Multiple passes ensure smooth, even results with no irregularities." },
      { step: 5, title: "Compression", description: "Compression garment applied immediately for optimal results." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Soreness and swelling. Compression garment worn 24/7." },
      { period: "Week 1–2", description: "Light activities resume. Bruising begins to fade." },
      { period: "Week 4–6", description: "Resume exercise. Significant improvement visible." },
      { period: "Month 3–6", description: "Final contour achieved as all swelling resolves." },
    ],
    results: "Slimmer, more defined body contours with permanent fat removal. Results are proportionate and natural-looking. Maintaining a healthy lifestyle ensures lasting results.",
    safetyNotes: "Modern tumescent technique minimizes blood loss and bruising. Dr. Gangwar limits fat removal volumes to safe levels per session, following international safety guidelines.",
    faqs: [
      { question: "Is liposuction a weight loss procedure?", answer: "No. Liposuction is a body contouring procedure best for removing localized fat deposits, not for significant weight loss." },
      { question: "Will fat come back after liposuction?", answer: "Fat cells removed by liposuction do not return. However, remaining cells can enlarge with significant weight gain." },
      { question: "How many areas can be treated at once?", answer: "Multiple areas can be treated in a single session, depending on the total volume and patient safety considerations." },
      { question: "What areas can be treated?", answer: "Common areas include abdomen, flanks (love handles), thighs, arms, chin, back, and male chest." },
    ],
    heroImage: "/images/svc-liposuction.jpg",
    seoTitle: "Liposuction in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Best liposuction surgery in Haldwani, Uttarakhand. Advanced body contouring by Dr. Sarika Gangwar. Remove stubborn fat. Book now.",
    relatedServices: ["tummy-tuck", "body-lift", "abdominal-etching"],
  },
  {
    title: "Tummy Tuck",
    slug: "tummy-tuck",
    category: "Body",
    shortDescription:
      "Flatten and tighten your abdomen by removing excess skin and repairing weakened muscles.",
    overview:
      "A tummy tuck (abdominoplasty) removes excess abdominal skin and fat while repairing separated or weakened abdominal muscles. Dr. Sarika Gangwar performs both full and mini tummy tucks, customizing the approach to each patient's anatomy for a flatter, more toned midsection.",
    whyNeeded:
      "Pregnancy, significant weight loss, and aging can leave excess abdominal skin, stretch marks, and weakened muscles that no amount of exercise can correct. A tummy tuck addresses all these concerns in one procedure, restoring a firm, flat abdomen.",
    eligibility: [
      "Adults with excess abdominal skin or muscle laxity",
      "Stable weight (not planning significant weight loss)",
      "Completed pregnancies (recommended)",
      "Non-smokers",
      "Good overall health",
    ],
    procedureSteps: [
      { step: 1, title: "Consultation", description: "Assessment of skin excess, muscle separation, and surgical planning." },
      { step: 2, title: "Anesthesia", description: "General anesthesia administered." },
      { step: 3, title: "Incision", description: "Hip-to-hip incision low in the bikini line. Navel preserved and repositioned." },
      { step: 4, title: "Muscle Repair", description: "Separated abdominal muscles (diastasis recti) sutured together for a firmer core." },
      { step: 5, title: "Skin Removal & Closure", description: "Excess skin removed. Remaining skin draped smoothly. Drains placed." },
    ],
    recoveryTimeline: [
      { period: "Day 1–5", description: "Walking encouraged. Abdominal binder worn. Moderate discomfort." },
      { period: "Week 1–2", description: "Drains removed. Light activities resume." },
      { period: "Week 4–6", description: "Gradual return to exercise. Avoid heavy lifting." },
      { period: "Month 3–6", description: "Final results visible. Scar continues to fade." },
    ],
    results: "A flat, toned abdomen with repaired core muscles. Scar is hidden in the bikini line. Dramatic improvement in body contour and confidence.",
    safetyNotes: "Performed with deep vein thrombosis prevention measures. Drain management and compression minimize complications.",
    faqs: [
      { question: "Can a tummy tuck remove stretch marks?", answer: "Yes. Stretch marks on the removed skin are eliminated. Marks above the navel may be improved but not completely removed." },
      { question: "Should I lose weight before a tummy tuck?", answer: "Ideally, reach a stable weight close to your goal. A tummy tuck is not a weight-loss procedure." },
      { question: "Full or mini tummy tuck — which do I need?", answer: "A mini tummy tuck addresses the area below the navel only. A full tummy tuck addresses the entire abdomen. Dr. Gangwar will recommend based on your anatomy." },
    ],
    heroImage: "/images/svc-tummy-tuck.jpg",
    seoTitle: "Tummy Tuck (Abdominoplasty) in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Expert tummy tuck surgery in Haldwani, Uttarakhand. Flat, toned abdomen by Dr. Sarika Gangwar. Book consultation.",
    relatedServices: ["liposuction", "mommy-makeover", "body-lift"],
  },
  {
    title: "Mommy Makeover",
    slug: "mommy-makeover",
    category: "Body",
    shortDescription:
      "Restore your pre-pregnancy body with a customized combination of breast and body procedures.",
    overview:
      "A mommy makeover is a personalized combination of procedures designed to restore a woman's body after pregnancy and breastfeeding. Dr. Sarika Gangwar typically combines a tummy tuck, breast lift or augmentation, and liposuction into one surgical session — reducing overall recovery time and cost.",
    whyNeeded:
      "Pregnancy and breastfeeding cause significant changes to the breasts and abdomen — sagging, volume loss, stretch marks, and weakened muscles. A mommy makeover addresses multiple concerns simultaneously, restoring your pre-pregnancy confidence.",
    eligibility: [
      "Women who have completed their families",
      "At least 6 months postpartum",
      "Finished breastfeeding for at least 3 months",
      "Stable weight",
      "Good overall health and non-smoker",
    ],
    procedureSteps: [
      { step: 1, title: "Personalized Plan", description: "Detailed assessment of all concerns. Custom combination of procedures designed." },
      { step: 2, title: "Anesthesia", description: "General anesthesia for the combined procedure." },
      { step: 3, title: "Breast Procedure", description: "Lift, augmentation, or reduction performed based on individual needs." },
      { step: 4, title: "Body Procedure", description: "Tummy tuck and/or liposuction performed to restore body contour." },
      { step: 5, title: "Recovery", description: "Combined recovery means one downtime period instead of multiple." },
    ],
    recoveryTimeline: [
      { period: "Week 1", description: "Rest essential. Help at home needed. Pain managed with medication." },
      { period: "Week 2–3", description: "Light activities resume. Support garments worn." },
      { period: "Week 6–8", description: "Return to exercise and most normal activities." },
      { period: "Month 3–6", description: "Full results visible. All swelling resolved." },
    ],
    results: "Comprehensive body restoration — lifted breasts, flat abdomen, and sculpted contours. One recovery period for multiple improvements.",
    safetyNotes: "Combining procedures reduces total anesthesia time compared to separate surgeries. Dr. Gangwar carefully plans the procedure combination for optimal safety.",
    faqs: [
      { question: "How many procedures can be combined?", answer: "Typically 2–3 procedures are combined safely. The combination depends on your goals and overall health." },
      { question: "When should I have a mommy makeover?", answer: "Wait until you've completed your family, finished breastfeeding for at least 3 months, and reached a stable weight." },
      { question: "Is one recovery easier than separate recoveries?", answer: "Yes. While initial recovery may be more involved, total downtime is significantly less than having procedures separately." },
    ],
    heroImage: "/images/svc-mommy-makeover.jpg",
    seoTitle: "Mommy Makeover in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Comprehensive mommy makeover in Haldwani, Uttarakhand. Restore your body after pregnancy. Dr. Sarika Gangwar. Book consultation.",
    relatedServices: ["tummy-tuck", "breast-lift-mastopexy", "liposuction"],
  },
  {
    title: "Body Lift",
    slug: "body-lift",
    category: "Body",
    shortDescription:
      "Remove excess sagging skin from the abdomen, thighs, and buttocks after major weight loss.",
    overview:
      "A body lift removes excess skin and tissue from the abdomen, buttocks, thighs, and flanks — often after significant weight loss. Dr. Sarika Gangwar performs circumferential and lower body lifts to create a smoother, more contoured body silhouette when massive weight loss leaves behind loose, hanging skin.",
    whyNeeded:
      "After significant weight loss (from bariatric surgery or lifestyle changes), patients are often left with excess skin that causes hygiene issues, skin irritation, and severely impacts quality of life. A body lift removes this excess and completes the weight loss transformation.",
    eligibility: [
      "Adults with significant excess skin after weight loss",
      "Weight stable for at least 6–12 months",
      "BMI ideally under 32",
      "Good nutritional status",
      "Non-smokers",
    ],
    procedureSteps: [
      { step: 1, title: "Comprehensive Assessment", description: "Full-body evaluation of skin excess. Multi-area surgical plan created." },
      { step: 2, title: "Anesthesia", description: "General anesthesia for this extensive procedure." },
      { step: 3, title: "Circumferential Incision", description: "Belt-like incision around the body to remove excess tissue." },
      { step: 4, title: "Contouring", description: "Remaining skin tightened and re-draped for smooth contour." },
      { step: 5, title: "Closure & Drains", description: "Layered closure with drains placed for fluid management." },
    ],
    recoveryTimeline: [
      { period: "Week 1", description: "Hospital stay may be needed. Significant rest required." },
      { period: "Week 2–4", description: "Drains removed. Light walking encouraged. Support garments worn." },
      { period: "Month 2–3", description: "Gradual return to activities. Swelling continues to resolve." },
      { period: "Month 6", description: "Final results visible. Scars maturing." },
    ],
    results: "Dramatically improved body contour with removal of excess skin. Better hygiene, comfort, and confidence. Completes the weight loss journey.",
    safetyNotes: "This is a major procedure requiring careful patient selection. Nutritional optimization and DVT prevention are essential components of care.",
    faqs: [
      { question: "How much skin is removed?", answer: "Several kilograms of excess skin may be removed, depending on the extent of skin laxity." },
      { question: "Will there be significant scars?", answer: "Scars are extensive but placed strategically along the bikini line and natural body contours. They fade significantly over time." },
      { question: "How long is the surgery?", answer: "A body lift typically takes 4–6 hours depending on the areas treated." },
    ],
    heroImage: "/images/svc-body-lift.jpg",
    seoTitle: "Body Lift Surgery in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Expert body lift after weight loss in Haldwani, Uttarakhand. Remove excess skin with Dr. Sarika Gangwar. Transform your body.",
    relatedServices: ["tummy-tuck", "liposuction", "mommy-makeover"],
  },
  {
    title: "Abdominal Etching",
    slug: "abdominal-etching",
    category: "Body",
    shortDescription:
      "Sculpt visible six-pack abs through precision liposuction — the athletic body you've always wanted.",
    overview:
      "Abdominal etching is a specialized form of high-definition liposuction that sculpts visible abdominal muscle definition — creating the appearance of a six-pack. Dr. Sarika Gangwar uses precise fat removal along the natural muscle lines to reveal athletic contours that diet and exercise alone may not achieve.",
    whyNeeded:
      "Even with low body fat and regular exercise, many people cannot achieve visible abdominal muscle definition due to genetics. Abdominal etching selectively removes fat overlying the muscle borders, creating natural-looking athletic contours.",
    eligibility: [
      "Fit individuals near ideal body weight",
      "Good skin elasticity",
      "Existing muscle development underneath",
      "Realistic expectations",
      "Non-smokers",
    ],
    procedureSteps: [
      { step: 1, title: "Body Analysis", description: "Assessment of muscle anatomy, fat distribution, and desired definition level." },
      { step: 2, title: "Muscle Mapping", description: "Natural abdominal muscle lines marked while patient flexes." },
      { step: 3, title: "Precision Liposuction", description: "Fat selectively removed along muscle borders using fine cannulas." },
      { step: 4, title: "Sculpting", description: "Gradations created for natural-looking definition." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Compression garment worn. Mild soreness." },
      { period: "Week 1–2", description: "Light activities resume. Muscle definition begins to show." },
      { period: "Week 4–6", description: "Resume full workouts. Definition improves as swelling resolves." },
      { period: "Month 3", description: "Final sculpted results visible." },
    ],
    results: "Visible six-pack definition with natural-looking athletic contours. Results are permanent with maintained fitness.",
    safetyNotes: "Requires precise technique to avoid irregularities. Dr. Gangwar's experience ensures smooth, symmetric results.",
    faqs: [
      { question: "Do I need to be fit for abdominal etching?", answer: "Yes. Best results are achieved in patients who are already fit with some muscle development. This is a sculpting procedure, not weight loss." },
      { question: "Will the abs look natural?", answer: "Absolutely. The sculpting follows your actual muscle anatomy, so results look completely natural — like you achieved them through training." },
    ],
    heroImage: "/images/svc-abdominal-etching.jpg",
    seoTitle: "Abdominal Etching in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Six-pack sculpting with abdominal etching in Haldwani. HD liposuction by Dr. Sarika Gangwar for athletic body contours.",
    relatedServices: ["liposuction", "tummy-tuck", "gynecomastia"],
  },

  /* ==================== GENITALS ==================== */
  {
    title: "Vaginal Tightening",
    slug: "vaginal-tightening",
    category: "Genitals",
    shortDescription:
      "Restore vaginal tone and confidence with expert vaginoplasty in a safe, private setting.",
    overview:
      "Vaginal tightening (vaginoplasty) is a surgical procedure that tightens the vaginal canal and surrounding muscles. Dr. Sarika Gangwar performs this procedure with the highest standards of privacy, safety, and care — helping women regain comfort and confidence after childbirth or with aging.",
    whyNeeded:
      "Vaginal laxity from childbirth or aging can affect physical comfort and confidence. Vaginoplasty tightens the vaginal canal and muscles, addressing both functional and aesthetic concerns in a safe, confidential setting.",
    eligibility: [
      "Women experiencing vaginal laxity",
      "Completed childbirths (recommended)",
      "Good pelvic health",
      "No active infections",
    ],
    procedureSteps: [
      { step: 1, title: "Private Consultation", description: "Confidential assessment and discussion of concerns and goals." },
      { step: 2, title: "Anesthesia", description: "General or regional anesthesia." },
      { step: 3, title: "Procedure", description: "Excess tissue removed. Vaginal muscles tightened and repaired." },
      { step: 4, title: "Recovery", description: "Dissolvable sutures used. Specific post-operative care instructions provided." },
    ],
    recoveryTimeline: [
      { period: "Week 1", description: "Rest required. Mild discomfort managed with medication." },
      { period: "Week 2–4", description: "Light activities resume. Avoid strenuous exercise." },
      { period: "Week 6–8", description: "Full activities resume including intimacy." },
    ],
    results: "Improved vaginal tone and comfort. Enhanced confidence. Results are long-lasting.",
    safetyNotes: "Performed in a sterile surgical environment with complete confidentiality. Pre-operative screening ensures safety.",
    faqs: [
      { question: "Is the procedure confidential?", answer: "Absolutely. Patient privacy is our highest priority. All consultations and procedures are conducted with complete confidentiality." },
      { question: "When can I return to normal activities?", answer: "Light activities can resume in 2 weeks. Full activities including intimacy after 6–8 weeks." },
    ],
    heroImage: "/images/svc-vaginal-tightening.jpg",
    seoTitle: "Vaginal Tightening in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Confidential vaginal tightening surgery in Haldwani, Uttarakhand. Expert vaginoplasty by Dr. Sarika Gangwar.",
    relatedServices: ["hymenoplasty", "mommy-makeover", "tummy-tuck"],
  },
  {
    title: "Hymenoplasty",
    slug: "hymenoplasty",
    category: "Genitals",
    shortDescription:
      "Hymen restoration performed with utmost privacy, care, and surgical precision.",
    overview:
      "Hymenoplasty is a surgical procedure to repair or reconstruct the hymen. Dr. Sarika Gangwar performs this delicate procedure with the highest level of privacy, discretion, and surgical expertise, ensuring patient comfort throughout the process.",
    whyNeeded:
      "Women seek hymenoplasty for personal, cultural, or psychological reasons. Regardless of the motivation, every patient is treated with respect, confidentiality, and non-judgmental care.",
    eligibility: [
      "Adult women seeking the procedure",
      "Good pelvic health",
      "No active infections",
      "Consultation to discuss expectations",
    ],
    procedureSteps: [
      { step: 1, title: "Confidential Consultation", description: "Private discussion of concerns, expectations, and procedure details." },
      { step: 2, title: "Local Anesthesia", description: "Local anesthesia for patient comfort." },
      { step: 3, title: "Reconstruction", description: "Delicate surgical repair using dissolvable sutures." },
      { step: 4, title: "Recovery", description: "Quick procedure with same-day discharge. Specific care instructions provided." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Mild discomfort. Rest recommended." },
      { period: "Week 1–2", description: "Healing progresses. Avoid strenuous activity." },
      { period: "Week 4–6", description: "Full healing complete." },
    ],
    results: "Successful reconstruction with natural results. Complete confidentiality maintained throughout.",
    safetyNotes: "Performed as a quick outpatient procedure under local anesthesia. Strict infection prevention protocols followed.",
    faqs: [
      { question: "Is this procedure confidential?", answer: "Yes. Complete confidentiality is guaranteed. No information is shared without your explicit consent." },
      { question: "Is it painful?", answer: "Local anesthesia ensures the procedure is comfortable. Mild discomfort after surgery is managed with medication." },
    ],
    heroImage: "/images/svc-hymenoplasty.jpg",
    seoTitle: "Hymenoplasty in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Confidential hymenoplasty in Haldwani, Uttarakhand. Expert hymen restoration by Dr. Sarika Gangwar.",
    relatedServices: ["vaginal-tightening", "mommy-makeover"],
  },
  {
    title: "Male Genital Procedures",
    slug: "male-genital-procedures",
    category: "Genitals",
    shortDescription:
      "Confidential male genital surgical procedures performed with expert care and precision.",
    overview:
      "Dr. Sarika Gangwar offers a range of male genital surgical procedures including penile enhancement, correction of congenital abnormalities, and reconstructive surgery. All procedures are performed with the highest level of confidentiality and surgical expertise.",
    whyNeeded:
      "Male genital concerns — whether cosmetic, functional, or congenital — can significantly impact quality of life and confidence. Expert surgical intervention addresses these concerns safely and effectively.",
    eligibility: [
      "Adult men with specific genital concerns",
      "Good overall health",
      "Consultation to discuss individual needs",
      "Realistic expectations",
    ],
    procedureSteps: [
      { step: 1, title: "Private Consultation", description: "Confidential discussion of concerns and surgical options." },
      { step: 2, title: "Evaluation", description: "Physical examination and surgical planning." },
      { step: 3, title: "Procedure", description: "Surgery performed under appropriate anesthesia with precision techniques." },
      { step: 4, title: "Recovery", description: "Post-operative care and follow-up instructions provided." },
    ],
    recoveryTimeline: [
      { period: "Week 1", description: "Rest required. Medication for comfort." },
      { period: "Week 2–4", description: "Light activities resume. Follow-up appointments." },
      { period: "Week 6–8", description: "Full activities resume." },
    ],
    results: "Improved function and appearance. Results vary by procedure type. Comprehensive follow-up ensures optimal outcomes.",
    safetyNotes: "All procedures performed in a fully equipped surgical facility with complete patient confidentiality.",
    faqs: [
      { question: "Are these procedures safe?", answer: "Yes. All procedures follow established surgical protocols with proven safety records." },
      { question: "Is confidentiality guaranteed?", answer: "Absolutely. Patient privacy is our highest priority." },
    ],
    heroImage: "/images/svc-male-genital.jpg",
    seoTitle: "Male Genital Procedures in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Confidential male genital surgery in Haldwani, Uttarakhand by Dr. Sarika Gangwar. Expert care and precision.",
    relatedServices: ["gynecomastia", "liposuction"],
  },
 

  /* ==================== HAIR & SKIN ==================== */
  {
    title: "Hair Transplant",
    slug: "hair-transplant",
    category: "Hair & Skin",
    shortDescription:
      "Restore natural hair growth with advanced FUE and FUT hair transplant techniques.",
    overview:
      "Hair transplant surgery restores natural hair growth in areas affected by hair loss or baldness. Dr. Sarika Gangwar performs both FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation) techniques, choosing the optimal approach based on each patient's hair loss pattern, donor area, and goals.",
    whyNeeded:
      "Hair loss affects self-confidence and can impact social and professional life. Modern hair transplant techniques offer permanent, natural-looking results by redistributing your own healthy hair follicles to thinning or bald areas.",
    eligibility: [
      "Men and women with pattern hair loss",
      "Sufficient donor hair density",
      "Age 25+ (hair loss pattern should be established)",
      "Good overall health",
      "Realistic expectations about density and coverage",
    ],
    procedureSteps: [
      { step: 1, title: "Hair Analysis", description: "Assessment of hair loss pattern, donor area, and graft count planning." },
      { step: 2, title: "Local Anesthesia", description: "Scalp numbed for a comfortable, pain-free experience." },
      { step: 3, title: "Graft Extraction", description: "Individual follicular units extracted (FUE) or a donor strip harvested (FUT)." },
      { step: 4, title: "Recipient Site Creation", description: "Tiny incisions made at precise angles and directions for natural growth pattern." },
      { step: 5, title: "Graft Placement", description: "Each graft meticulously placed for maximum density and natural appearance." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Mild swelling possible. Sleep with head elevated. Follow washing instructions." },
      { period: "Week 1–2", description: "Scabs fall off. Return to work. Transplanted hair sheds (normal)." },
      { period: "Month 3–4", description: "New hair growth begins. Gradual thickening over time." },
      { period: "Month 8–12", description: "Full results visible with dense, natural-looking hair growth." },
    ],
    results: "Permanent, natural-looking hair restoration. Transplanted hair grows for life as it retains donor area characteristics. Significant improvement in appearance and confidence.",
    safetyNotes: "Performed under strict sterile conditions. Local anesthesia ensures patient comfort throughout. Meticulous technique minimizes graft damage for maximum survival.",
    faqs: [
      { question: "FUE or FUT — which is better?", answer: "Both techniques have advantages. FUE leaves no linear scar and is preferred for short hairstyles. FUT may yield more grafts per session. Dr. Gangwar recommends based on your specific needs." },
      { question: "Is hair transplant permanent?", answer: "Yes. Transplanted hair follicles are resistant to the hormone that causes hair loss and will grow permanently." },
      { question: "When will I see results?", answer: "New growth starts at 3–4 months, with full results visible at 8–12 months. Patience is key — the wait is worth it." },
      { question: "How many grafts will I need?", answer: "This depends on the area of hair loss and desired density. Typically 1,500–4,000 grafts per session." },
    ],
    heroImage: "/images/svc-hair-transplant.jpg",
    seoTitle: "Hair Transplant in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Best hair transplant in Haldwani, Uttarakhand. FUE & FUT techniques by Dr. Sarika Gangwar. Natural results. Book consultation.",
    relatedServices: ["scar-removal", "vitiligo-surgery", "mole-wart-removal"],
  },
  {
    title: "Scar Removal",
    slug: "scar-removal",
    category: "Hair & Skin",
    shortDescription:
      "Minimize or eliminate scars from surgery, injury, acne, or burns with expert scar revision.",
    overview:
      "Scar removal and revision surgery improves the appearance of scars from injuries, burns, surgery, or acne. Dr. Sarika Gangwar uses a combination of surgical excision, laser therapy, dermabrasion, and tissue rearrangement to minimize scars and restore smooth skin texture.",
    whyNeeded:
      "Visible scars can affect self-confidence and be a constant reminder of trauma. Scar revision techniques can significantly improve the appearance, texture, and color of scars, making them less noticeable or virtually invisible.",
    eligibility: [
      "Anyone with bothersome scars",
      "Scars at least 6–12 months old (fully matured)",
      "Good overall health",
      "No active skin infections in the scar area",
    ],
    procedureSteps: [
      { step: 1, title: "Scar Assessment", description: "Evaluation of scar type, size, location, and treatment options." },
      { step: 2, title: "Treatment Selection", description: "Custom treatment plan — surgical, laser, or combination approach." },
      { step: 3, title: "Procedure", description: "Scar treated using the selected technique under local anesthesia." },
      { step: 4, title: "Aftercare", description: "Specific wound care and scar management instructions provided." },
    ],
    recoveryTimeline: [
      { period: "Day 1–7", description: "Wound care as directed. Keep area clean and protected." },
      { period: "Week 2–4", description: "Sutures removed. Begin scar management regimen." },
      { period: "Month 2–6", description: "Scar continues to improve. Sun protection essential." },
      { period: "Month 6–12", description: "Final results. Scar significantly less noticeable." },
    ],
    results: "Significantly less visible scars with improved texture and color. Multiple sessions may be needed for optimal results.",
    safetyNotes: "Treatment approach is customized to scar type. Multiple techniques may be combined for best results.",
    faqs: [
      { question: "Can scars be completely removed?", answer: "While scars cannot be made completely invisible, expert revision can make them dramatically less noticeable — often blending seamlessly with surrounding skin." },
      { question: "What types of scars can be treated?", answer: "All types — keloids, hypertrophic scars, atrophic (acne) scars, burn scars, and surgical scars." },
    ],
    heroImage: "/images/svc-scar-removal.jpg",
    seoTitle: "Scar Removal Surgery in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Expert scar removal and revision in Haldwani, Uttarakhand. Keloid, acne scar, burn scar treatment by Dr. Sarika Gangwar.",
    relatedServices: ["vitiligo-surgery", "mole-wart-removal", "hair-transplant"],
  },
  {
    title: "Vitiligo Surgery",
    slug: "vitiligo-surgery",
    category: "Hair & Skin",
    shortDescription:
      "Restore natural skin color in stable vitiligo patches with advanced surgical techniques.",
    overview:
      "Vitiligo surgery restores natural skin pigmentation in stable vitiligo patches using melanocyte transplantation, punch grafting, or suction blister grafting. Dr. Sarika Gangwar offers these advanced techniques to patients with stable vitiligo who have not responded to medical therapy.",
    whyNeeded:
      "Vitiligo causes depigmented patches that significantly impact appearance and self-esteem, especially in Indian skin tones. When medical treatment fails to restore color, surgical techniques can transplant healthy melanocytes to achieve natural repigmentation.",
    eligibility: [
      "Stable vitiligo (no new patches for at least 1 year)",
      "Failed or inadequate response to medical treatment",
      "No history of koebnerization",
      "Good overall health",
      "Non-smoker for optimal graft survival",
    ],
    procedureSteps: [
      { step: 1, title: "Assessment", description: "Evaluation of vitiligo stability, patch location, and size. Treatment method selected." },
      { step: 2, title: "Donor Area Preparation", description: "Healthy skin prepared from a concealed donor site." },
      { step: 3, title: "Melanocyte Transplant", description: "Melanocytes harvested and transferred to depigmented areas." },
      { step: 4, title: "Post-Procedure Care", description: "UV therapy may follow to stimulate pigment production in grafted areas." },
    ],
    recoveryTimeline: [
      { period: "Week 1", description: "Dressing care. Avoid sun on treated areas." },
      { period: "Week 2–4", description: "Initial pigmentation begins to appear." },
      { period: "Month 2–3", description: "Progressive color development. UV therapy if prescribed." },
      { period: "Month 4–6", description: "Optimal repigmentation achieved." },
    ],
    results: "Natural repigmentation of vitiligo patches with color matching surrounding skin. Success rates are high (70–90%) in stable vitiligo.",
    safetyNotes: "Only stable vitiligo is treated surgically. Pre-operative stability assessment is crucial for success.",
    faqs: [
      { question: "What is the success rate?", answer: "Surgical vitiligo treatment has a 70–90% success rate in properly selected patients with stable disease." },
      { question: "Will the vitiligo come back after surgery?", answer: "In stable vitiligo, recurrence in treated areas is uncommon. However, new patches may develop elsewhere." },
    ],
    heroImage: "/images/svc-vitiligo.jpg",
    seoTitle: "Vitiligo Surgery in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Advanced vitiligo surgery in Haldwani, Uttarakhand. Melanocyte transplant for repigmentation by Dr. Sarika Gangwar.",
    relatedServices: ["scar-removal", "mole-wart-removal", "hair-transplant"],
  },
  {
    title: "Mole / Wart Removal",
    slug: "mole-wart-removal",
    category: "Hair & Skin",
    shortDescription:
      "Safe removal of moles, warts, skin tags, and benign skin lesions with minimal scarring.",
    overview:
      "Dr. Sarika Gangwar safely removes moles, warts, skin tags, and other benign skin lesions using surgical excision, radiofrequency, or laser techniques. Each lesion is assessed for safety, and removal is performed with emphasis on minimal scarring and complete excision.",
    whyNeeded:
      "Moles and warts can be cosmetically bothersome or cause discomfort. Some lesions may need removal for medical reasons (suspicious changes). Expert removal ensures complete excision with optimal cosmetic outcome and proper pathological examination when needed.",
    eligibility: [
      "Anyone with bothersome moles, warts, or skin lesions",
      "Lesions assessed for any concerning features",
      "Good overall health",
    ],
    procedureSteps: [
      { step: 1, title: "Assessment", description: "Clinical evaluation of the lesion. Dermoscopy if needed." },
      { step: 2, title: "Local Anesthesia", description: "Area numbed for a pain-free procedure." },
      { step: 3, title: "Removal", description: "Lesion removed using the most appropriate technique for its type and location." },
      { step: 4, title: "Pathology", description: "Specimen sent for examination when indicated." },
    ],
    recoveryTimeline: [
      { period: "Day 1–3", description: "Keep area clean and dry. Minimal discomfort." },
      { period: "Week 1", description: "Wound healing progresses. Sutures removed if applicable." },
      { period: "Week 2–4", description: "Complete healing. Scar management begins." },
    ],
    results: "Complete removal with minimal scarring. Pathology report provides peace of mind.",
    safetyNotes: "All removed lesions are sent for pathological examination when indicated. This ensures early detection of any concerning changes.",
    faqs: [
      { question: "Will mole removal leave a scar?", answer: "Some scarring is expected but is minimized with proper technique. Scars are typically much less noticeable than the original mole." },
      { question: "Can moles grow back after removal?", answer: "Properly excised moles rarely recur. Any recurrence should be re-evaluated." },
    ],
    heroImage: "/images/svc-mole-wart.jpg",
    seoTitle: "Mole & Wart Removal in Haldwani | Dr. Sarika Gangwar",
    seoDescription: "Safe mole and wart removal in Haldwani, Uttarakhand. Expert skin lesion treatment by Dr. Sarika Gangwar.",
    relatedServices: ["scar-removal", "vitiligo-surgery", "hair-transplant"],
  },
];

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */

export const testimonials: Testimonial[] = [
  {
    name: "Priya S.",
    text: "Dr. Sarika Gangwar transformed my confidence with rhinoplasty. The results are so natural — my friends just say I look 'refreshed'. The entire experience from consultation to recovery was exceptional.",
    rating: 5,
    procedure: "Rhinoplasty",
  },
  {
    name: "Rahul M.",
    text: "I struggled with gynecomastia for years and it affected every aspect of my life. Dr. Gangwar understood my concerns and the surgery changed everything. I can finally wear fitted clothes with confidence.",
    rating: 5,
    procedure: "Gynecomastia",
  },
  {
    name: "Anjali K.",
    text: "After two pregnancies, I felt like I'd lost my body. The mommy makeover gave me back my confidence. Dr. Gangwar is incredibly skilled and the clinic staff made me feel comfortable throughout.",
    rating: 5,
    procedure: "Mommy Makeover",
  },
  {
    name: "Vikram T.",
    text: "I researched extensively before choosing Dr. Gangwar for my hair transplant. Best decision ever. Natural results, minimal pain, and the team was professional from day one. Highly recommend.",
    rating: 5,
    procedure: "Hair Transplant",
  },
  {
    name: "Meera D.",
    text: "The face lift results exceeded my expectations. I look years younger but still look like myself. Dr. Gangwar's artistic eye and surgical skill are truly remarkable. Thank you for giving me my confidence back.",
    rating: 5,
    procedure: "Face Lift",
  },
  {
    name: "Deepak R.",
    text: "Liposuction with Dr. Gangwar was life-changing. The stubborn fat that wouldn't budge with diet and exercise is finally gone. The contour is smooth and natural. Excellent surgeon.",
    rating: 5,
    procedure: "Liposuction",
  },
];

/* ------------------------------------------------------------------ */
/*  Before / After Results                                             */
/* ------------------------------------------------------------------ */

export const results: ResultItem[] = [
  {
    id: "result-1",
    beforeImage: clinicImages.resultRhinoplastyBefore,
    afterImage: clinicImages.resultRhinoplastyAfter,
    caption: "Rhinoplasty — Natural nose reshaping for improved facial harmony",
    serviceSlug: "rhinoplasty",
    serviceTitle: "Rhinoplasty",
    location: "Haldwani, Uttarakhand",
  },
  {
    id: "result-2",
    beforeImage: clinicImages.resultGynecomastiaBefore,
    afterImage: clinicImages.resultGynecomastiaAfter,
    caption: "Gynecomastia — Flat, masculine chest contour achieved",
    serviceSlug: "gynecomastia",
    serviceTitle: "Gynecomastia",
    location: "Haldwani, Uttarakhand",
  },
  {
    id: "result-3",
    beforeImage: clinicImages.resultLiposuctionBefore,
    afterImage: clinicImages.resultLiposuctionAfter,
    caption: "Liposuction — Sculpted body contours with permanent fat removal",
    serviceSlug: "liposuction",
    serviceTitle: "Liposuction",
    location: "Haldwani, Uttarakhand",
  },
  {
    id: "result-4",
    beforeImage: clinicImages.resultHairBefore,
    afterImage: clinicImages.resultHairAfter,
    caption: "Hair Transplant — Dense, natural hair growth restored",
    serviceSlug: "hair-transplant",
    serviceTitle: "Hair Transplant",
    location: "Haldwani, Uttarakhand",
  },
  {
    id: "result-5",
    beforeImage: clinicImages.resultFaceBefore,
    afterImage: clinicImages.resultFaceAfter,
    caption: "Face Lift — Youthful facial contours restored naturally",
    serviceSlug: "face-lift",
    serviceTitle: "Face Lift",
    location: "Haldwani, Uttarakhand",
  },
  {
    id: "result-6",
    beforeImage: clinicImages.resultTummyBefore,
    afterImage: clinicImages.resultTummyAfter,
    caption: "Tummy Tuck — Flat, toned abdomen after pregnancy",
    serviceSlug: "tummy-tuck",
    serviceTitle: "Tummy Tuck",
    location: "Haldwani, Uttarakhand",
  },
  {
    id: "result-7",
    beforeImage: clinicImages.resultBlepharoplastyBefore,
    afterImage: clinicImages.resultBlepharoplastyAfter,
    caption: "Blepharoplasty — Refreshed, youthful eyes with excess skin removed",
    serviceSlug: "blepharoplasty",
    serviceTitle: "Blepharoplasty",
    location: "Haldwani, Uttarakhand",
  },
  {
    id: "result-8",
    beforeImage: clinicImages.resultBreastAugBefore,
    afterImage: clinicImages.resultBreastAugAfter,
    caption: "Breast Augmentation — Fuller, natural-looking breasts achieved",
    serviceSlug: "breast-augmentation",
    serviceTitle: "Breast Augmentation",
    location: "Haldwani, Uttarakhand",
  },
  {
    id: "result-9",
    beforeImage: clinicImages.resultLipBefore,
    afterImage: clinicImages.resultLipAfter,
    caption: "Lip Enhancement — Naturally fuller, better-defined lips",
    serviceSlug: "lip-enhancement-reduction",
    serviceTitle: "Lip Enhancement",
    location: "Haldwani, Uttarakhand",
  },
  {
    id: "result-10",
    beforeImage: clinicImages.resultEarBefore,
    afterImage: clinicImages.resultEarAfter,
    caption: "Ear Reshaping — Natural, symmetrical ears close to the head",
    serviceSlug: "ear-reshaping",
    serviceTitle: "Ear Reshaping",
    location: "Haldwani, Uttarakhand",
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return services.filter((s) => slugs.includes(s.slug));
}
