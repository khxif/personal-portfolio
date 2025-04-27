import { SparklesCore } from './ui/sparkles';

export function SparkleBackGround() {
  return (
    <div className="fixed h-full -z-50 top-0 w-screen">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>
  );
}
