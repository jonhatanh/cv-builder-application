function CVPreview({ personalDetails }) {
  return (
    <div className="border-2 border-blue-500">
      PREVIEW:
      <p>{personalDetails.name}</p>
      <p>{personalDetails.email}</p>
      <p>{personalDetails.phone}</p>
    </div>
  );
}

export default CVPreview;
