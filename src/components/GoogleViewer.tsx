import '@google/model-viewer';
import '../types/model-viewer';

const MainCanvas = ({
  file
}: {
  file:string
}) => {
  return (
    <model-viewer
      src={file}
      alt="A simple 3D model"
      auto-rotate={false}
      camera-controls={true}
      className="w-full h-full"
    />
  );
};

export default MainCanvas;