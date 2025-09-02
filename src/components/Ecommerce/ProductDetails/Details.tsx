import React from "react";
import { FullProduct } from "../../../types/product.type";

const Details = ({ product }: { product: FullProduct }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mx-auto">
      <h1 className="text-lg font-bold  text-[#202020] mb-4 border-b ">
        Product Details
      </h1>

      <div className="mb-6">
        <p className="text-gray-700 mb-4 text-[14px]">{product.description}</p>
      </div>

      {/* <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Power and performance</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            11-inch Dynamic AMOLED 2X screen lets you enjoy intense colours,
            deep contrasts, and incredible brilliance
          </li>
          <li>
            128GB built-in flash memory and 8GB memory card reader provide
            incredible storage capacity for your files, photos, and videos
          </li>
          <li>
            Unleash every potential with the superfast, super powerful
            Snapdragon 8 Gen 2 processor and 8GB RAM
          </li>
          <li>
            Integrated Wi-Fi 6E and Bluetooth allow for a reliable and efficient
            wireless connectivity
          </li>
          <li>
            Battery lasts long so you can browse, create, stream, and do other
            things you love
          </li>
          <li>
            High resolution front camera makes you look sharp on video calls.
            Hear rich, detailed sound clearly from quad speakers
          </li>
          <li>
            Durable tablet with IP68 rating lets you work and play with
            confidence, knowing your Galaxy Tab S9 is built to protect against
            bumps, dust, splashes
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">
          Stay connected with synced devices
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Take calls and send texts directly from your Galaxy Tab S9 Series
            tablet
          </li>
          <li>
            Quick Share lets you send and receive files easily. Transfer
            documents or photos to and from your Galaxy Tab S9 Series tablet in
            a jiffy. It even works when sending to compatible non-Galaxy devices
          </li>
          <li>
            Use your Galaxy Tab S9 Series tablet to click, type, copy or paste
            on your synced devices
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Details;
