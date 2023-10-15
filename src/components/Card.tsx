import React, { useContext, useEffect, useState } from "react";
import Shoe from "../assets/shoe.png";
import Eye from "../assets/oeil.png";
import LinkIcon from "../assets/link.png";
import { useNavigate } from "react-router-dom";
import { Sneaker } from "../Types/Sneaker";
import Color from "color-thief-react";
import removeHTMLTags from "../utils/removeHTMLTages";
import { ProductCaroussel, ProductCarousselModal } from "./ProductDetails";
import { MainContexte } from "../Contexte/MainContexte";

type SneakersData = {
  data: JSON;
  onPreview: (
    event: React.MouseEvent<HTMLButtonElement>,
    sneaker: Sneaker
  ) => void;
};

function Card({ data, onPreview }: SneakersData) {
  const navigate = useNavigate();

  return (
    <>
      {data.map((item: Sneaker) => {
        return (
          // <div key={item.id} className='text-black p-4 w-full ' onClick={() => navigate(`/product/${item.id}`)}>
          <div key={item.id} className="text-black p-4 w-full " onClick={(event) => onPreview(event, item)}>
            <div className="bg-[#f6f6f6]">
              <img src={item.main_picture_url} loading="lazy" />
              {/* <button
                onClick={}
                className=" bg-gray-200 p-2 my-2 mx-2"
              >
                <img src={Eye} width="20px" />
              </button> */}
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-black font-bold font-neue">{item.name}</p>
              <p className="text-[#707072] font-neue font-semi">{item.color}</p>
              <p className="text-black font-neue font-semi">
                {item.retail_price_cents / 100}$
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export function CardModal({ sneaker }: Sneaker) {
  const navigate = useNavigate()
  console.log("sneaky: ", sneaker)
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    undefined
  );
  const { addToCart } = useContext(MainContexte);

  useEffect(() => {
    if (sneaker) {
      setImagePreview(sneaker.main_picture_url);
    }
  }, [sneaker]);

  console.log("les sneasnea les sneaker: ", sneaker);

  if (sneaker && imagePreview) {


    return (
      <>

          <div className=" grid gap-y-4">

            <div className="grid grid-cols-2 text-black gap-6 ">

 <div className='bg-[#f6f6f6] relative'>
                <img src={sneaker.main_picture_url} />
                <img src={LinkIcon} className=" w-4 absolute bottom-0 right-0 mr-2 mb-2" onClick={() => navigate(`/product/${sneaker.id}`)} />
              </div> 

              <div className=" pt-2 flex flex-col gap-2">
                <h2 className="">{sneaker.name}</h2>
                <p className="">Marque: {sneaker.brand_name}</p>
                <p className="">{sneaker.color}</p>
                <p className="">{sneaker.retail_price_cents / 100}$</p>
                <h3>Sizes:</h3>
                <div className="flex flex-row gap-2 overflow-x-scroll">

                  {sneaker.size_range.map((size: Number) => {
                    return (
                      <div className={` bg-black px-2 py-1 text-white hover:bg-[#f6f6f6] hover:text-black duration-200 cursor-pointer`}>
                        {size}
                      </div>
                    )
                  })}
                 
                </div>
                <button className="text-white bg-green-600" onClick={() => addToCart({sneaker})} >Add </button>
              </div>
            </div>
            <div className="text-black">
            <p className=" text-xs text-justify">
                {sneaker.story_html ? removeHTMLTags(sneaker.story_html) : ''}
                </p>
            </div>
          </div>
      </>
    );
  }
}

export default Card;
