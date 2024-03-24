"use client";

function CurveAnimation() {
  const initialPath = `M0 200 H${window.innerWidth + 1000} -50 Q${
    window.innerWidth / 2
  } 30 ${window.innerWidth + 1000} 200`;
  return (
    <>
      <svg className="absolute bottom-0 w-full h-[12rem] fill-zinc-800">
        <path d={initialPath} className="w-full" />
      </svg>
    </>
  );
}

export default CurveAnimation;
