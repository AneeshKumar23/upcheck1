
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";export default function Feedback() {
  return (
    <div className="min-h-screen bg-site-gradient">
        <Navigation />

      <section className="pt-32 pb-20 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Help Shape the Future of Aquaculture
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          Share your experiences, suggestions and industry insights.
        </p>
      </section>

    <section className="py-16 px-6">
  <h2 className="text-3xl font-bold text-center mb-8">
    Why Feedback Matters
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    <div className="border rounded-xl p-6">
      Improve Farm Operations
    </div>

    <div className="border rounded-xl p-6">
      Drive Better Solutions
    </div>

    <div className="border rounded-xl p-6">
      Strengthen Community
    </div>
  </div>
</section>
<section className="py-16 px-6 max-w-3xl mx-auto">
  <h2 className="text-3xl font-bold mb-8 text-center">
    Submit Feedback
  </h2>

  <div className="space-y-4">
    <input
      className="w-full border rounded-lg p-3"
      placeholder="Your Name"
    />

    <input
      className="w-full border rounded-lg p-3"
      placeholder="Email Address"
    />

    <textarea
      rows={5}
      className="w-full border rounded-lg p-3"
      placeholder="Share your feedback"
    />

    <button className="w-full rounded-lg bg-cyan-500 py-3 font-semibold">
      Submit Feedback
    </button>
  </div>
</section>
<Footer />
</div>

      
        
    
  );
}