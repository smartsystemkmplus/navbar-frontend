export default function formatTextToBulleted(e, callback) {
  if (e.key === "Enter") {
    e.preventDefault();
    const prev = e.target.value;
    const result = (() => {
      if (!prev.includes("•")) {
        const prevValue = prev?.split("\n") || [];
        const newValue = prevValue?.map((v) => `• ${v}`) || [];
        return newValue.join("\n");
      }
      return `${prev}\n• `;
    })();
    callback(result);
  }
}
