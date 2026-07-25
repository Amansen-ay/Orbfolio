import illustration from '@/shared/assets/rocketImage.png';
import logo from '@/shared/assets/logo.png';
export function WelcomeHero() {
  return (
    <div
      className="
        relative
        flex
        h-full
        w-full
        flex-col
        items-center
        justify-center
      "
    >
      {/* Logo */}

      <div className="absolute left-12 top-10 flex items-center  gap-3">
        <img
          src={logo}
          alt="Orbfolio"
          className="h-18 w-18"
        />

        <h2 className="text-3xl font-bold text-slate-900">
          Orbfolio
        </h2>
      </div>

      {/* Rocket Placeholder */}
      <img src={illustration} alt="Img not found" />

      
      {/* Progress */}

      <div className="absolute bottom-14 flex items-center gap-2">
        <div className="h-2 w-12 rounded-full bg-orange-500" />

        <div className="h-2 w-12 rounded-full bg-slate-200" />
        <div className="h-2 w-12 rounded-full bg-slate-200" />
        <div className="h-2 w-12 rounded-full bg-slate-200" />
        <div className="h-2 w-12 rounded-full bg-slate-200" />
        <div className="h-2 w-12 rounded-full bg-slate-200" />
        <div className="h-2 w-12 rounded-full bg-slate-200" />
      </div>
    </div>
  );
}