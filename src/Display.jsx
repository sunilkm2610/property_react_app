export default function Display({ property_name, description, size }) {
  return (
    <>
      <div className="display">
        <span>{property_name}</span>
        <span>{description === "" ? "-" : description}</span>
        <span>{size === "" ? "-" : size} sq ft</span>
      </div>
    </>
  );
}
