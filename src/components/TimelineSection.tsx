const TimelineSection = () => {
  return <section className="py-16 bg-gradient-section sm:py-[30px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Launch Timeline Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive view of our clinic launch process, from location setup to full operation
          </p>
        </div>
        
        <div className="bg-card rounded-xl shadow-section p-6 sm:p-8">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img alt="Clinic Launch Timeline Chart showing 6 phases over 6 weeks" className="w-full h-full object-contain" src="/lovable-uploads/d307e0a6-e872-4770-9323-2ba13cd4f62a.png" />
          </div>
        </div>
      </div>
    </section>;
};
export default TimelineSection;