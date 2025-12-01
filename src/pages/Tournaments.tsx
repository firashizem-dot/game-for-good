import Navigation from "@/components/Navigation";

const Tournaments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Tournaments</h1>
        <p className="text-muted-foreground text-lg">
          Discover upcoming gaming tournaments and events. This page is coming soon!
        </p>
      </main>
    </div>
  );
};

export default Tournaments;
