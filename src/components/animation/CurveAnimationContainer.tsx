import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./CurveAnimation"), {
  ssr: false,
});

function CurveAnimationContainer() {
  return (
    <>
      <DynamicComponent />
    </>
  );
}

export default CurveAnimationContainer;
