import React from 'react';
import {is3DFileValid} from '../utils/FileValidation';

type ViewerType = 'google' | 'three';

interface ViewerControlsProps {
  viewerType: ViewerType;
  onViewerTypeChange: (type: ViewerType) => void;
  setFile: (fileUrl: string) => void;
}

const ViewerControls: React.FC<ViewerControlsProps> = ({
  viewerType,
  onViewerTypeChange,
  setFile,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && is3DFileValid(selectedFile)) {
        setFile(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <div className="p-4 flex flex-col items-stretch gap-4 md:flex-row md:gap-8 md:items-center bg-gray-900 rounded-lg shadow-md w-full">
      <label className="flex flex-col gap-1">
        <span className="mb-1 font-semibold">Viewer Type</span>
        <select
          className="bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={viewerType}
          onChange={e => onViewerTypeChange(e.target.value as ViewerType)}
        >
          <option value="google">Google Viewer</option>
          <option value="three">Three.js Viewer</option>
        </select>
      </label>
      <label className="flex flex-col gap-1">
        <span className="mb-1 font-semibold">3D File</span>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <input
            id="fileInput"
            type="file"
            name="fileInput"
            accept=".glb,.gltf"
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor="fileInput" className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-4xl cursor-pointer transition-colors duration-200 text-center">
            Choose a file
          </label>
          <span className="text-sm text-gray-400">(.glb or .gltf)</span>
        </div>
      </label>
    </div>
  );
};

export default ViewerControls;
