import { Profile, Technologies, Myproject, CtaSection } from './layout/index'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBFBFB] text-black cursor-default scroll-smooth">
      <Profile />
      <div className='bg-[#EEEEEC]'>
        <Technologies />
        <Myproject />
        <CtaSection />
      </div>
    </div>
  );
}
