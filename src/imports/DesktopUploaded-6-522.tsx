import imgLogo from "figma:asset/7105fef6686ea050cf76287ceb3090bce5cafc52.png";
import imgTopLeft from "figma:asset/061af8973f677e8aed5b217bc1ec1e1f6d01c178.png";
import imgTopRight from "figma:asset/306f84c00667e09b43a9b8c2ce230e88e8160cbf.png";
import imgBottomLeft from "figma:asset/1d41e0bf3aedffac7d8b4098063ce1069bb9fd3f.png";
import imgBottomRight from "figma:asset/54cfc412d0c93acc0ba718557c2b57ad12e85833.png";

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['Cabin_Sketch:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">Upload Offering</p>
    </div>
  );
}

function ButtonUpload() {
  return (
    <div className="bg-[#ffde00] box-border content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[8px] shrink-0" data-name="Button upload">
      <div aria-hidden="true" className="absolute border border-[#e0aa36] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame3 />
    </div>
  );
}

function FileList() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Cabin_Sketch:Regular',_sans-serif] gap-[8px] grow items-start leading-[normal] min-h-px min-w-px not-italic overflow-x-clip overflow-y-auto relative shrink-0 text-[#ffde00] text-[20px] text-center w-full" data-name="File List">
      <p className="relative shrink-0 w-full">File_Alpha123</p>
      <p className="relative shrink-0 w-full">Document_Beta456</p>
      <p className="relative shrink-0 w-full">Report_Gamma789</p>
      <p className="relative shrink-0 w-full">Data_Delta012</p>
      <p className="relative shrink-0 w-full">Notes_Epsilon345</p>
      <p className="relative shrink-0 w-full">File_Alpha123</p>
      <p className="relative shrink-0 w-full">Document_Beta456</p>
      <p className="relative shrink-0 w-full">Report_Gamma789</p>
      <p className="relative shrink-0 w-full">Data_Delta012</p>
      <p className="relative shrink-0 w-full">Notes_Epsilon345</p>
      <p className="relative shrink-0 w-full">File_Alpha123</p>
      <p className="relative shrink-0 w-full">Document_Beta456</p>
      <p className="relative shrink-0 w-full">Report_Gamma789</p>
      <p className="relative shrink-0 w-full">Data_Delta012</p>
      <p className="relative shrink-0 w-full">Notes_Epsilon345</p>
      <p className="relative shrink-0 w-full">File_Alpha123</p>
      <p className="relative shrink-0 w-full">Document_Beta456</p>
      <p className="relative shrink-0 w-full">Report_Gamma789</p>
      <p className="relative shrink-0 w-full">Data_Delta012</p>
      <p className="relative shrink-0 w-full">Notes_Epsilon345</p>
      <p className="relative shrink-0 w-full">File_Alpha123</p>
      <p className="relative shrink-0 w-full">Document_Beta456</p>
      <p className="relative shrink-0 w-full">Report_Gamma789</p>
      <p className="relative shrink-0 w-full">Data_Delta012</p>
      <p className="relative shrink-0 w-full">Notes_Epsilon345</p>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[860px] items-center left-[579px] overflow-clip top-[104px] w-[282px]" data-name="Content">
      <div className="h-[263.167px] relative shrink-0 w-[282.374px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <ButtonUpload />
      <FileList />
    </div>
  );
}

function Top() {
  return (
    <div className="absolute content-stretch flex h-[213.5px] items-center justify-between left-[24px] top-[24px] w-[1392px]" data-name="Top">
      <div className="h-[213.5px] relative shrink-0 w-[149.128px]" data-name="Top left">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTopLeft} />
      </div>
      <div className="h-[213.5px] relative shrink-0 w-[149.128px]" data-name="Top right">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTopRight} />
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="absolute content-stretch flex h-[160px] items-end justify-between left-[24px] top-[840px] w-[1392px]" data-name="Bottom">
      <div className="h-[160px] relative shrink-0 w-[177.92px]" data-name="Bottom left">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[159.2%] left-0 max-w-none top-[-23.4%] w-full" src={imgBottomLeft} />
        </div>
      </div>
      <p className="font-['Cabin_Sketch:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ffde00] text-[0px] text-[14px] text-nowrap whitespace-pre">
        <span>{`© 2025 by `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://www.instagram.com/orcyworld/">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal]" href="https://www.instagram.com/orcyworld/">
            ORCYWORLD | Gilang Anom Manapu Manik
          </span>
        </a>
        <span>{` • Made by `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://www.instagram.com/i.pppanggg/">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] text-[14px]" href="https://www.instagram.com/i.pppanggg/">
            IPANG
          </span>
        </a>
      </p>
      <div className="h-[160px] relative shrink-0 w-[177.92px]" data-name="Bottom right">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[159.2%] left-0 max-w-none top-[-31.53%] w-full" src={imgBottomRight} />
        </div>
      </div>
    </div>
  );
}

export default function DesktopUploaded() {
  return (
    <div className="bg-[#121212] relative size-full" data-name="Desktop / Uploaded">
      <Top />
      <Bottom />
      <Content />
    </div>
  );
}