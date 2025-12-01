import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Learn about our team and mission. This page is coming soon!
        </p>
      </main>
    </div>
  );
};

export default About;
