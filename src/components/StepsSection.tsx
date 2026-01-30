import StepCard from "./StepCard";
const StepsSection = () => {
  const steps = [{
    stepNumber: 1,
    title: "Secure Clinic Location",
    duration: "1 week",
    items: ["Identify a site close to our virtual office or within our DBA area.", "Ensure it meets zoning, accessibility, and budget requirements.", "Sign lease and initiate space planning and utility setup immediately."]
  }, {
    stepNumber: 2,
    title: "Set Up Core Systems",
    duration: "2 days",
    items: ["Enroll the new location in our Nurture Beast CRM & marketing platform.", "Register location in payroll, initiate internet and phone setup.", "Create internal calendar, staff inbox, and documentation templates."]
  }, {
    stepNumber: 3,
    title: "Staff Preparation",
    duration: "2–4 weeks",
    items: ["Leverage pre-approved LPCs and QMHP network for rapid deployment.", "Onboard new staff using LMS and prebuilt Texas Care training paths.", "Complete credentialing, role assignments, and shadowing plans."]
  }, {
    stepNumber: 4,
    title: "Community Outreach",
    duration: "~30 days",
    items: ["Distribute outreach roles among investors and existing team members.", "Engage schools, teacher networks, correctional officers, thrift stores, etc.", "Set up tables at high-traffic areas like YMCAs and grocery stores.", "Launch cold email, flyer drops, and direct contact campaigns."]
  }, {
    stepNumber: 5,
    title: "Begin Client Intake & Services",
    duration: "7 days",
    items: ["Schedule intakes, conduct assessments, and assign therapists.", "Prioritize quick engagement with families reached through outreach.", "Deliver high-touch onboarding experience to build trust and retention."]
  }, {
    stepNumber: 6,
    title: "Medicaid Reimbursement",
    duration: "5 weeks",
    items: ["Ensure timely submission of clean claims.", "Monitor reimbursements weekly and flag exceptions.", "Provide financial reporting to track break-even status and sustainability."]
  }];
  return <section className="py-16 bg-background sm:py-[30px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Clinic Launch Process Steps</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Steps to ensure a successful clinic launch</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => <StepCard key={index} stepNumber={step.stepNumber} title={step.title} duration={step.duration} items={step.items} />)}
        </div>
      </div>
    </section>;
};
export default StepsSection;