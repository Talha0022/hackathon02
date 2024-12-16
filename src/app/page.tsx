import Image from "next/image";
import nike from "../../public/nike.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="airmax-container">
      {/* Header Section */}
      <div className="header">
        <h1 className="title1">Hello Nike App</h1>
        <p className="text1">
          Download the app to access everything Nike.{" "}
          <Link href="./">
            <u>Get Your Great</u>
          </Link>
        </p>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <Image
          src={nike}
          alt="Nike Air Max Pulse"
          layout="responsive"
          width={1344}
          height={700}
          priority
        />
      </div>

      {/* Text Content Section */}
      <div className="text-section">
        <h1 className="title">NIKE AIR MAX PULSE</h1>
        <p className="description">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —
          designed to push you past your limits and help you go to the max.
        </p>
        <div className="buttons">
          <button className="button notify">Notify Me</button>
          <button className="button shop">Shop Air Max</button>
        </div>
      </div>
    </div>
  );
}
