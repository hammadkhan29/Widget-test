'use client'
export default function Home() {
  const handleIframeLoad = () => {
    const iframe = document.getElementById('widget-iframe');
    iframe.contentWindow.postMessage(
      {
        type: 'SEND_PARENT_ORIGIN',
        origin: window.location.origin, // sending the embedding site's origin
      },
      'http://localhost:3000' // replace this with your widget's domain
    );
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] h-screen bg-white items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <iframe
        id="widget-iframe" // Adding an id for reference
        src="http://localhost:3000/widget/72ea0de1-262f-46a4-8ab3-db015f4cc9ea?callerId=your-subscriber-id"
        width="100%"
        height="500px"
        frameborder="0"
        allow="microphone"
        onLoad={handleIframeLoad} // Trigger the script after iframe loads
      ></iframe>{" "}
    </div>
  );
}
