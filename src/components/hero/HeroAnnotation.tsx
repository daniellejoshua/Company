export function HeroAnnotation() {
  return (
    <div className="hero-annotation hero-reveal hero-delay-2 absolute top-[2%] right-0 z-20 hidden rotate-[7deg] text-[#334155]">
      <p className="hero-annotation-copy font-handwritten text-[24px] leading-[1.05] font-medium">
        Software
        <br />
        that grows
        <br />
        with you
      </p>
      <svg
        className="hero-annotation-arrow ml-10 h-[42px] w-[76px]"
        viewBox="0 0 150 105"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M138 5 C145 47 100 84 10 94"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 94 L27 78 M10 94 L31 100"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
