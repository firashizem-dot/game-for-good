import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Trophy, Heart } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Play. Share. <span className="text-primary">Change.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join gaming tournaments and challenges where every match creates a positive impact. 
            Experience competitive gaming while supporting human, social, and environmental causes.
          </p>
          <div className="flex gap-4 justify-center">
            <NavLink to="/tournaments">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Tournaments
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </NavLink>
            <NavLink to="/missions">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View Missions
              </Button>
            </NavLink>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Compete & Win</h3>
              <p className="text-muted-foreground">
                Join tournaments for all skill levels. Challenge yourself and climb the leaderboards.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Make an Impact</h3>
              <p className="text-muted-foreground">
                Every ticket purchased contributes to charitable donations supporting NGOs worldwide.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Build Community</h3>
              <p className="text-muted-foreground">
                Connect with gamers who share your passion for gaming and positive change.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-primary/20 to-gaming-accent/20 rounded-2xl p-12 text-center border border-primary/30">
            <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Play for Solidarity today and transform your gaming into a force for good.
            </p>
            <NavLink to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </NavLink>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
