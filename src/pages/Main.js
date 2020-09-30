import React, { useCallback, useRef, useState } from 'react';
import { Empty, message } from 'antd';
import { useDropzone } from 'react-dropzone';
import { Viewer as HWPViewer } from 'hwp.js'

function Main() {
  const viewRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const handleOnDrop = useCallback((files) => {
    const [file] = files;
    const reader = new FileReader();
    reader.onloadend = (result) => {
      const data = result.target?.result;
      if (data) {
        try {
          new HWPViewer(viewRef.current, data);
          setLoaded(true);
        } catch (error) {
          message.error('해당 파일을 읽어올 수 없어요.');
        }
      }
    }

    reader.readAsBinaryString(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleOnDrop,
  });

  return (
    <div ref={viewRef} style={{
      overflow: loaded ? "scroll" : "hidden",
      maxHeight: "calc(100vh - 64px)",
    }}>
      {!loaded && (

        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 64px)" }}>
            <Empty description={"HWP 파일을 여기로 드래그하세요."} />
          </div>
        </div>
      )
      }
    </div >
  )
}

export default Main
