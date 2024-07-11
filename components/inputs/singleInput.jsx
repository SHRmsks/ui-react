import Label from "./label";
import { useState, useRef } from "react";
function SgInput({ direction, labelName, incomplete, expand, variant }) {
  // console.log(direction);
  // console.log(labelName);
  const [file, setFile] = useState([]);
  const handleFileButton = (e) => {
    fileInput.current.click();
  };
  const fileInput = useRef(null);
  const handleFileChange = (e) => {
    setFile([...file, ...e.target.files]);
  };
  const submithandler = (e) => {
    e.preventDefault();
    if (file.length > 0) {
      console.log(file.length);
      console.log("Selected files:", file);
    } else {
      console.log("No files selected");
    }
  };
  const expanded = (
    <div>
      <div className="relative w-[240px] h-[32px]">
        <input className="w-full h-full rounded-[3px] border ring-[1px] ring-border_std border-border_std placeholder:italic placeholder:text-placeholder_color" placeholder="请输入内容" type="text" />
        <input className="hidden" ref={fileInput} type="file" onChange={handleFileChange} />
        <button onClick={handleFileButton}>
          <img className="absolute right-[8px] top-1/2 transform -translate-y-1/2" referrerPolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng390dfc5b62c5e9390b015106b98672df6fc3cb0982b7d9127d9ef0cd411a44cc" alt="icon" />
        </button>
      </div>
      {file && file.length > 0 ? <p className="text-center text-std text-xxs">以选择{file.map((f) => f.name).join(", ")}</p> : null}
    </div>
  );
  const expandedTextarea = (
    <div>
      <div className="relative w-[400px] h-[54px]">
        <textarea className="w-full h-full rounded-[3px] border ring-[1px] ring-border_std border-border_std placeholder:italic placeholder:text-placeholder_color" placeholder="请输入内容" />
        <input className="hidden" ref={fileInput} type="file" onChange={handleFileChange} />
        <button onClick={handleFileButton}>
          <img className="absolute right-[8px] top-1/2 transform -translate-y-1/2" referrerPolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng390dfc5b62c5e9390b015106b98672df6fc3cb0982b7d9127d9ef0cd411a44cc" alt="icon" />
        </button>
      </div>
      {file && file.length > 0 ? <p className="text-center text-std text-xxs">以选择{file.map((f) => f.name).join(", ")}</p> : null}
    </div>
  );
  if (variant === "normal") {
    if (direction === "left") {
      if (incomplete) {
        return (
          <form onSubmit={submithandler}>
            <div className="w-[366px] h-[32px] flex justify-center gap-[56px]">
              <div className="flex content-center gap-[2px] justify-start">
                <p className="text-asterisk">*</p>
                <Label name={labelName} />
              </div>
              {expand ? expanded : <input className="w-[240px] h-[32px] rounded-[3px] border ring-[1px] ring-border_std border-border_std border-1 placeholder:italic placeholder: text-placeholder_color placehold-text-s" placeholder="请输入内容" />}
            </div>
          </form>
        );
      } else {
        return (
          <form onSubmit={submithandler}>
            <div className="w-[366px] h-[32px] flex justify-center gap-[56px]">
              <div className="flex justify-start">
                <Label name={labelName} />
              </div>
              <input className="w-[240px] h-[32px] rounded-[3px] border ring-[1px] ring-border_std border-border_std border-1 placeholder:italic placeholder: text-placeholder_color placehold-text-s" placeholder="请输入内容" />
            </div>
            <button type="submit">submit</button>
          </form>
        );
      }
    } else if (direction === "right") {
      if (incomplete) {
        return (
          <form onSubmit={submithandler}>
            <div className="w-[366px] h-[32px] flex justify-center gap-[56px]">
              <div className="flex content-center gap-[2px] justify-start">
                <p className="text-asterisk">*</p>
                <Label name={labelName} />
              </div>
              {expand ? expanded : <input className="w-[240px] h-[32px] rounded-[3px] border ring-[1px] ring-border_std border-border_std border-1 placeholder:italic placeholder: text-placeholder_color placehold-text-s" placeholder="请输入内容" />}
            </div>
          </form>
        );
      } else {
        return (
          <form onSubmit={submithandler}>
            <div className="w-[366px] h-[32px] flex justify-center gap-[56px]">
              <div className="flex justify-start">
                <Label name={labelName} />
              </div>
              <input className="w-[240px] h-[32px] rounded-[3px] border ring-[1px] ring-border_std border-border_std border-1 placeholder:italic placeholder: text-placeholder_color placehold-text-s" placeholder="请输入内容" />
            </div>
            <button type="submit">submit</button>
          </form>
        );
      }
    } else if (direction === "top") {
      if (incomplete) {
        return (
          <form onSubmit={submithandler}>
            <div className="w-[248px] h-[58px] grid grid-rows-2 gap-y-[4px] justify-start">
              {/* the grid part we need to fix */}
              <div className="flex content-center gap-[2px] justify-start">
                <p className="text-asterisk">*</p>
                <Label name={labelName} />
              </div>
              {expand ? expanded : <input className="w-[240px] h-[32px] rounded-[3px] border ring-[1px] ring-border_std border-border_std border-1 placeholder:italic placeholder: text-placeholder_color placehold-text-s" placeholder="请输入内容" />}
            </div>
          </form>
        );
      } else {
        return (
          <form onSubmit={submithandler}>
            <div className="w-[248px] h-[58px] grid grid-rows-2 gap-y-[4px] justify-start">
              <div className="flex justify-start">
                <Label name={labelName} />
              </div>
              <input className="w-[240px] h-[32px] rounded-[3px] border ring-[1px] ring-border_std border-border_std border-1 placeholder:italic placeholder: text-placeholder_color placehold-text-s" placeholder="请输入内容" />
            </div>
            <button type="submit">submit</button>
          </form>
        );
      }
    }
  }

  // textarea
  else if (variant === "textarea") {
    if (direction === "left") {
      if (incomplete) {
        return (
          <form onSubmit={submithandler}>
            <div className="w-[366px] h-[32px] flex justify-center gap-[56px]">
              <div className="flex content-center gap-[2px] justify-start">
                <p className="text-asterisk">*</p>
                <Label name={labelName} />
              </div>
               <input className="w-[240px] h-[32px] rounded-[3px] border ring-[1px] ring-border_std border-border_std border-1 placeholder:italic placeholder: text-placeholder_color placehold-text-s" placeholder="请输入内容" />
            </div>
          </form>
        );
      } else {
        return (
          <form onSubmit={submithandler}>
            <div className="w-[366px] h-[32px] flex justify-center gap-[56px]">
              <div className="flex justify-start">
                <Label name={labelName} />
              </div>
              <input className="w-[240px] h-[32px] rounded-[3px] border ring-[1px] ring-border_std border-border_std border-1 placeholder:italic placeholder: text-placeholder_color placehold-text-s" placeholder="请输入内容" />
            </div>
            <button type="submit">submit</button>
          </form>
        );
      }
    } else if (direction === "right") {
      if (incomplete) {
        return (
          <form onSubmit={submithandler}>
            <div className="w-[366px] h-[32px] flex justify-center gap-[56px]">
              <div className="flex content-center gap-[2px] justify-start">
                <p className="text-asterisk">*</p>
                <Label name={labelName} />
              </div>
              {expand ? expanded : <input className="w-[240px] h-[32px] rounded-[3px] border ring-[1px] ring-border_std border-border_std border-1 placeholder:italic placeholder: text-placeholder_color placehold-text-s" placeholder="请输入内容" />}
            </div>
          </form>
        );
      } else {
        return (
          <form onSubmit={submithandler}>
            <div className="w-[366px] h-[32px] flex justify-center gap-[56px]">
              <div className="flex justify-start">
                <Label name={labelName} />
              </div>
              <input className="w-[240px] h-[32px] rounded-[3px] border ring-[1px] ring-border_std border-border_std border-1 placeholder:italic placeholder: text-placeholder_color placehold-text-s" placeholder="请输入内容" />
            </div>
            <button type="submit">submit</button>
          </form>
        );
      }
    } else if (direction === "top") {
      if (incomplete) {
        return (
          <form onSubmit={submithandler}>
            <div className="w-[248px] h-[58px] grid grid-rows-2 gap-y-[4px] justify-start">
              {/* the grid part we need to fix */}
              <div className="flex content-center gap-[2px] justify-start">
                <p className="text-asterisk">*</p>
                <Label name={labelName} />
              </div>
              {expand ? expanded : <input className="w-[240px] h-[32px] rounded-[3px] border ring-[1px] ring-border_std border-border_std border-1 placeholder:italic placeholder: text-placeholder_color placehold-text-s" placeholder="请输入内容" />}
            </div>
          </form>
        );
      } else {
        return (
          <form onSubmit={submithandler}>
            <div className="w-[248px] h-[58px] grid grid-rows-2 gap-y-[4px] justify-start">
              <div className="flex justify-start">
                <Label name={labelName} />
              </div>
              <input className="w-[240px] h-[32px] rounded-[3px] border ring-[1px] ring-border_std border-border_std border-1 placeholder:italic placeholder: text-placeholder_color placehold-text-s" placeholder="请输入内容" />
            </div>
            <button type="submit">submit</button>
          </form>
        );
      }
    }
  }
}
export default SgInput;
