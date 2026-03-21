import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Divider = () => <hr className="border-none h-px bg-[#1f1f1f]" />;

export default function Home() {
  return (
    <>
      <Nav />
      <Divider />
      <main>
        <Hero />
      </main>
      <Divider />
      <Footer />
    </>
  );
}
