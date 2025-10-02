import React, { useState, useRef } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Import images from Figma assets dengan fallback URL
const figmaAssets = {
  topLeft: "https://images.unsplash.com/photo-1628269999893-10b89d4ce324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvcm5lciUyMGRlY29yYXRpdmUlMjBlbGVtZW50cyUyMGRhcmt8ZW58MXx8fHwxNzU5NDMyNTU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  topRight: "https://images.unsplash.com/photo-1628269999893-10b89d4ce324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvcm5lciUyMGRlY29yYXRpdmUlMjBlbGVtZW50cyUyMGRhcmt8ZW58MXx8fHwxNzU5NDMyNTU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  sunLogo: "https://images.unsplash.com/photo-1621246475858-92fa411bb838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHN1biUyMGxvZ28lMjBnb2xkZW4lMjB5ZWxsb3d8ZW58MXx8fHwxNzU5NDMyNTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  bottomLeft: "https://images.unsplash.com/photo-1628269999893-10b89d4ce324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvcm5lciUyMGRlY29yYXRpdmUlMjBlbGVtZW50cyUyMGRhcmt8ZW58MXx8fHwxNzU5NDMyNTU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  bottomRight: "https://images.unsplash.com/photo-1628269999893-10b89d4ce324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvcm5lciUyMGRlY29yYXRpdmUlMjBlbGVtZW50cyUyMGRhcmt8ZW58MXx8fHwxNzU5NDMyNTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
};

interface UploadedFile {
  id: string;
  name: string;
  uploadedAt: Date;
}

function Top() {
  return (
    <div className="absolute flex items-start justify-between left-6 top-6 right-6 z-10" data-name="Top">
      <div className="w-24 h-24 relative shrink-0" data-name="Top left">
        <ImageWithFallback 
          alt="" 
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-80" 
          src={figmaAssets.topLeft} 
        />
      </div>
      <div className="w-24 h-24 relative shrink-0" data-name="Top right">
        <ImageWithFallback 
          alt="" 
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-80" 
          src={figmaAssets.topRight} 
        />
      </div>
    </div>
  );
}

function Frame3({ isUploading }: { isUploading: boolean }) {
  return (
    <div className="flex gap-2 items-center justify-center relative">
      <p className="font-['Cabin_Sketch:Regular',_sans-serif] text-lg text-black whitespace-nowrap">
        {isUploading ? "Uploading..." : "Upload Offering"}
      </p>
    </div>
  );
}

function Frame4({ onClick, isUploading }: { onClick: () => void; isUploading: boolean }) {
  return (
    <div 
      className="bg-[#ffde00] border-2 border-[#e0aa36] flex items-center justify-center px-6 py-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#e6c84a] disabled:opacity-50 disabled:cursor-not-allowed relative"
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
    <div className="flex flex-col gap-4 items-center w-full max-w-sm mx-auto">
      <div className="w-64 h-48 relative" data-name="IMG_3647">
        <ImageWithFallback 
          alt="Sun Logo" 
          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" 
          src={figmaAssets.sunLogo} 
        />
      </div>
      <Frame4 onClick={onUploadClick} isUploading={isUploading} />
    </div>
  );
}

function Frame7({ uploadedFiles }: { uploadedFiles: UploadedFile[] }) {
  return (
    <div className="flex-1 w-full overflow-hidden">
      <div className="h-full overflow-y-auto overflow-x-hidden pr-2" style={{ maxHeight: 'calc(100vh - 300px)' }}>
        <div className="flex flex-col font-['Cabin_Sketch:Regular',_sans-serif] gap-2 text-[#ffde00] items-center">
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
    <div className="absolute flex flex-col gap-12 items-center left-1/2 top-20 w-80 -translate-x-1/2" data-name="Content">
      <Frame5 onUploadClick={onUploadClick} isUploading={isUploading} />
      <p className="font-['Cabin_Sketch:Regular',_sans-serif] text-[#ffde00] text-center w-full">
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
    <div className="absolute flex flex-col gap-6 items-center left-1/2 overflow-hidden top-20 w-[90vw] max-w-4xl -translate-x-1/2" style={{ height: 'calc(100vh - 120px)' }} data-name="Content">
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
          <ImageWithFallback 
            alt="" 
            className="absolute max-w-none w-full h-full object-cover opacity-80" 
            src={figmaAssets.bottomLeft} 
          />
        </div>
      </div>

      <p className="font-['Cabin_Sketch:Regular',_sans-serif] text-[#ffde00] text-xs text-center flex-1 mx-4 hidden sm:block">
        <span>© 2025 by </span>
        <a className="underline cursor-pointer" href="https://www.instagram.com/orcyworld/">
          ORCYWORLD | Gilang Anom Manapu Manik
        </a>
        <span> • Made by </span>
        <a className="underline cursor-pointer" href="https://www.instagram.com/i.pppanggg/">
          IPANG
        </a>
      </p>

      <div className="w-24 h-24 relative shrink-0" data-name="Bottom right">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <ImageWithFallback 
            alt="" 
            className="absolute max-w-none w-full h-full object-cover opacity-80" 
            src={figmaAssets.bottomRight} 
          />
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
    }, 1500);
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
