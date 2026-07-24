import { AuthHero } from "./ui/AuthHero";
import { LoginCard } from "./ui/LoginCard";

export function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FFF9F3]">
      {/* Decorative Background */}
      <div className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full bg-orange-300/40 blur-[180px]" />

      <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow-300/40 blur-[180px]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center px-8 lg:grid-cols-2 lg:px-16">
        <AuthHero />
        <LoginCard />
      </div>
    </main>
  );
}