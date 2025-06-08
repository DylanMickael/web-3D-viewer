import GoogleViewer from '../components/GoogleViewer';
import ThreeViewer from '../components/ThreeViewer';
import ViewerControls from '../components/ViewerControls';
import my3DModel from '../assets/models/my3DModel.glb';
import { useState } from 'react';

const MainFrame = () => {
  const [file, setFile] = useState<string>(my3DModel);
  const [viewerType, setViewerType] = useState<'google' | 'three'>('google');

  return (
    <div className='w-full h-screen flex flex-col'>
      <ViewerControls
        viewerType={viewerType}
        onViewerTypeChange={setViewerType}
        setFile={setFile}
      />
      <div className='flex-1'>
        {viewerType === 'google' ? (
          <GoogleViewer file={file} />
        ) : (
          <ThreeViewer file={file} />
        )}
      </div>
    </div>
  );
}

export default MainFrame;