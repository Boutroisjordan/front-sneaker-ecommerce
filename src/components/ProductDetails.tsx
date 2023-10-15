import React, { FC, useContext, useEffect, useState } from "react";
import ButtonAdd from "./Button";
import Color, { useColor } from "color-thief-react";
import { useNavigate, useParams } from "react-router-dom";
import { MainContexte } from "../Contexte/MainContexte";
import { Sneaker, SneakerDetailsProps, SneakersData } from "../Types/Sneaker";

interface ObjectData {
  id: number;
  url: string;
  classname: string;
}

function ProductDetails() {
  const { productId } = useParams<{ productId?: string }>(); // Notez le '?' pour indiquer que c'est optionnel
  const { jsonData } = useContext(MainContexte);
  const [sneaker, setSneaker] = useState<Sneaker | null>(null);
  const data = jsonData;
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifiez si productId existe avant de le traiter
    if (productId !== undefined) {
      const sneakerIdParam = parseInt(productId, 10);
      const foundSneaker = data.find(
        (sneaker: Sneaker) => sneaker.id === sneakerIdParam
      );

      if (foundSneaker) {
        console.log("found sneaker: ", foundSneaker);
        setSneaker(foundSneaker);
      } else {
        console.error("Sneaker not found");
      }
    }
  }, []);

  return (
    <section className=" w-screen grid bg-[#FCF6F3] lg:grid-cols-2 lg:gap-x-2 pt-32 grid-cols-1 gap-y-2 h-auto">
      {/* Col-1 */}
      <div className=" flex gap-y-16 flex-col py-10 lg:sticky top-32 z-0 self-start">
        {sneaker ? <ProductCaroussel sneaker={sneaker} /> : ""}
      </div>
      {/* Col2 */}
      <div className="pt-32">
        <div className="flex flex-col gap-y-16 px-32">
          <h2 className="font-neue text-black text-4xl font-bold">
            Air Jordan 1 - Retro High OG 'Shadow' 2018
          </h2>
          <p className=" text-red-500 font-light font-inter text-3xl">
            $160.00
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <ProductSize size="US 7" />
              <ProductSize size="US 8" />
              <ProductSize size="US 9" />
            </div>
            <ButtonAdd
              labelBtn="Add +"
              classname="bg-red-500 text-white font-bold uppercase font-inter px-5 py-7 rounded-none hover:bg-white hover:text-red-500 hover:border-red-500"
            />
          </div>
        </div>
        <div className="bg-[#E6DBD5] text-black mt-16">
          <div className="px-32">
            <div className="py-16">
              <h3 className="text-normal font-semibold uppercase tracking-tight ">
                Product details
              </h3>
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                aperiam reiciendis quisquam, ea dolorum vitae architecto
                temporibus! Atque earum iste nesciunt accusantium accusamus!
                Ipsam mollitia repellendus dignissimos voluptates, accusantium
                laudantium!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const ProductCaroussel = (sneaker: Sneaker) => {
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    undefined
  );
  const [colorHex, setColorHex] = useState<string | undefined>("");

  const { data, loading, error } = useColor(
    sneaker.sneaker.main_picture_url,
    "hex"
  );

  const handleChangeImage = (newImageUrl: string) => {
    // Mettez à jour l'état pour changer l'image de la preview
    setImagePreview(newImageUrl);
  };

  useEffect(() => {
    if (sneaker.sneaker) {
      setImagePreview(sneaker.sneaker.main_picture_url);
    }
  }, [sneaker]);

  if (sneaker.sneaker && imagePreview) {
    return (
      <Color src={imagePreview} format="hex" crossOrigin="anonymous">
        {({ data, loading, error }) => (
          <>
            <div
              className={`rounded-full w-[500px] h-[500px] mx-auto relative`}
              style={{ backgroundColor: `${data}` }}
            >
              <img
                src={imagePreview}
                width="130%"
                className=" max-w-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-custom "
              />
            </div>
            <div className="flex items-align justify-center gap-x-5 text-black">
              {/* {objectData.map((item) => {
          return (
            <div
              onMouseEnter={() => handleChangeImage(item.url)}
              key={item.id}
              className=" w-20 h-20 "
            >
              <img src={item.url} />
            </div>
          );
        })} */}
              {/* hey Batario {data + " "+ sneaker.main_picture_url} */}
              {/* {" " + error} */}
            </div>
          </>
        )}
      </Color>
    );
  } else {
    return <>Loading..</>;
  }
};
export const ProductCarousselModal = (sneaker: Sneaker) => {
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    undefined
  );
  const [colorHex, setColorHex] = useState<string | undefined>("");

  const { data, loading, error } = useColor(
    sneaker.sneaker.main_picture_url,
    "hex"
  );

  const handleChangeImage = (newImageUrl: string) => {
    // Mettez à jour l'état pour changer l'image de la preview
    setImagePreview(newImageUrl);
  };

  useEffect(() => {
    if (sneaker.sneaker) {
      setImagePreview(sneaker.sneaker.main_picture_url);
    }
  }, [sneaker]);

  if (sneaker.sneaker && imagePreview) {
    return (
      <Color src={imagePreview} format="hex" crossOrigin="anonymous">
        {({ data, loading, error }) => (
          <>
            <div
              className={`rounded-full w-[250px] h-[250px] mx-auto relative`}
              style={{ backgroundColor: `${data}` }}
            >
              <img
                src={imagePreview}
                width="130%"
                className=" max-w-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-custom "
              />
            </div>
            <div className="flex items-align justify-center gap-x-5 text-black">
              {/* {objectData.map((item) => {
          return (
            <div
              onMouseEnter={() => handleChangeImage(item.url)}
              key={item.id}
              className=" w-20 h-20 "
            >
              <img src={item.url} />
            </div>
          );
        })} */}
              {/* hey Batario {data + " "+ sneaker.main_picture_url} */}
              {/* {" " + error} */}
            </div>
          </>
        )}
      </Color>
    );
  } else {
    return <>Loading..</>;
  }
};

type Props = {
  size: string;
  classname?: string | null;
};

const ProductSize: React.FC<Props> = ({ size }) => {
  return (
    <div className=" font-bold font-neue text-base text-black hover:text-white hover:bg-black px-3 py-5 ">
      {size}
    </div>
  );
};

export default ProductDetails;
