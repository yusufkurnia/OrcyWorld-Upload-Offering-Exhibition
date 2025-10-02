import React, { useState, useRef } from 'react';
import imgTopLeft from "figma:asset/061af8973f677e8aed5b217bc1ec1e1f6d01c178.png";
import imgTopRight from "figma:asset/306f84c00667e09b43a9b8c2ce230e88e8160cbf.png";
import imgImg3647 from "figma:asset/7105fef6686ea050cf76287ceb3090bce5cafc52.png";
import imgBottomLeft from "figma:asset/1d41e0bf3aedffac7d8b4098063ce1069bb9fd3f.png";
import imgBottomRight from "figma:asset/54cfc412d0c93acc0ba718557c2b57ad12e85833.png";

interface UploadedFile {
  id: string;
  name: string;
  uploadedAt: Date;
}

function Top() {
  return (
    <div className="absolute flex items-start justify-between left-4 top-4 right-4 z-10" data-name="Top">
      <div className="w-24 h-24 relative shrink-0" data-name="Top left">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full opacity-80" src={imgTopLeft} />
      </div>
      <div className="w-24 h-24 relative shrink-0" data-name="Top right">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full opacity-80" src={imgTopRight} />
      </div>
    </div>
  );
}

function Frame3({ isUploading }: { isUploading: boolean }) {
  return (
    <div className="flex gap-2 items-center justify-center relative">
      <p className="font-['Cabin_Sketch:Regular',_sans-serif] text-lg text-black whitespace-nowrap text-[16px]">
        {isUploading ? "Uploading..." : "Upload Offering"}
      </p>
    </div>
  );
}

function Frame4({ onClick, isUploading }: { onClick: () => void; isUploading: boolean }) {
  return (
    <div 
      className="bg-[#ffde00] border-2 border-[#e0aa36] flex items-center justify-center px-6 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#e6c84a] disabled:opacity-50 disabled:cursor-not-allowed relative"
      onClick={onClick}
      style={{ opacity: isUploading ? 0.7 : 1 }}
    >
      <Frame3 isUploading={isUploading} />
      {isUploading && (
        <div className="absolute right-3">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
        </div>
      )}
    </div>
  );
}

function Frame5({ onUploadClick, isUploading }: { onUploadClick: () => void; isUploading: boolean }) {
  return (
    <div className="flex flex-col gap-6 items-center w-full max-w-sm mx-auto">
      <div className="w-64 h-48 relative" data-name="IMG_3647">
        <img alt="Logo" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg3647} />
      </div>
      <Frame4 onClick={onUploadClick} isUploading={isUploading} />
    </div>
  );
}

function Frame7({ uploadedFiles }: { uploadedFiles: UploadedFile[] }) {
  return (
    <div className="flex-1 w-full overflow-hidden">
      <div className="h-full overflow-y-auto overflow-x-hidden pr-2" style={{ maxHeight: 'calc(100vh - 300px)' }}>
        <div className="flex flex-col font-['Cabin_Sketch:Regular',_sans-serif] gap-[8px] text-[#ffde00] text-[16px] items-center">
          {uploadedFiles.map((file, index) => (
            <p 
              key={file.id} 
              className="whitespace-nowrap px-4 text-center"
              style={{
                animation: `slideIn 0.3s ease-out ${index * 0.1}s both`
              }}
            >
{file.name} - {file.uploadedAt.toLocaleDateString('id-ID')} - {file.uploadedAt.toLocaleTimeString('id-ID')}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentNoUpload({ onUploadClick, isUploading }: { onUploadClick: () => void; isUploading: boolean }) {
  return (
    <div className="absolute flex flex-col gap-[53px] items-center left-1/2 top-[74px] w-[320px] -translate-x-1/2" data-name="Content">
      <Frame5 onUploadClick={onUploadClick} isUploading={isUploading} />
      <p className="font-['Cabin_Sketch:Regular',_sans-serif] text-[#ffde00] text-[14px] text-center w-full">
        No offerings uploaded yet
      </p>
    </div>
  );
}

function ContentUploaded({ onUploadClick, isUploading, uploadedFiles }: { 
  onUploadClick: () => void; 
  isUploading: boolean; 
  uploadedFiles: UploadedFile[] 
}) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 overflow-hidden top-[74px] w-[90vw] max-w-4xl -translate-x-1/2" style={{ height: 'calc(100vh - 120px)' }} data-name="Content">
      <Frame5 onUploadClick={onUploadClick} isUploading={isUploading} />
      <div className="flex-1 w-full pb-5">
        <Frame7 uploadedFiles={uploadedFiles} />
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="absolute flex items-end justify-between left-6 bottom-6 right-6 h-32" data-name="Bottom">
      <div className="w-24 h-24 relative shrink-0" data-name="Bottom left">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute max-w-none w-full h-full object-cover opacity-80" src={imgBottomLeft} />
        </div>
      </div>

      <div className="w-24 h-24 relative shrink-0" data-name="Bottom right">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute max-w-none w-full h-full object-cover opacity-80" src={imgBottomRight} />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);

    // Simulate upload process dengan delay
    setTimeout(() => {
      const newFiles: UploadedFile[] = Array.from(files).map(file => ({
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: file.name,
        uploadedAt: new Date()
      }));

      setUploadedFiles(prev => [...newFiles, ...prev]);
      setIsUploading(false);
      
      // Reset input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 1500); // 1.5 detik delay untuk efek visual
  };

  const triggerFileUpload = () => {
    if (!isUploading) {
      fileInputRef.current?.click();
    }
  };

  const hasFiles = uploadedFiles.length > 0;

  return (
    <div className="bg-[#121212] relative min-h-screen w-full" data-name="Desktop">
      <Top />
      
      {hasFiles ? (
        <ContentUploaded 
          onUploadClick={triggerFileUpload} 
          isUploading={isUploading}
          uploadedFiles={uploadedFiles}
        />
      ) : (
        <ContentNoUpload 
          onUploadClick={triggerFileUpload} 
          isUploading={isUploading}
        />
      )}
      
      <Bottom />
      
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileUpload}
        className="hidden"
        accept="*"
      />

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}