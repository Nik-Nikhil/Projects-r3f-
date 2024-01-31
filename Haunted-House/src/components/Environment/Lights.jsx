
function Lights() {
  return (
    <>
       <ambientLight intensity={0.12} />
       <directionalLight color="lightcyan" castShadow intensity={0.12} position={[0, 10, 0]} />
    </>

  );
}

export {Lights}