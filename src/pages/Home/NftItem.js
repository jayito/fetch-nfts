import { useState } from "react";
import Modal from "react-modal";

const ModalStyles = {
  overlay: {
    backgroundColor: 'rgb(18 18 23 / 53%)',
    overflow: 'scroll'
  }
};

const NftItem = ({ data, addr }) => {
  const metadata = JSON.parse(data.metadata);
  const openseaURL = `https://opensea.io/assets/ethereum/${addr}/${data.token_id}`;
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const PropertyItem = ({ attr }) => {
    return (
      <div className="border px-4 py-1">
        <h3 className="font-bold text-black-light">
          {attr.trait_type}
        </h3>
        <h3>
          {attr.value}
        </h3>
      </div>
    );
  }

  return (
    <>
      <div className="grid-item bg-black-light p-2 rounded-md cursor-pointer" onClick={openModal}>
        <img src={metadata?.image} alt="nft img" className="w-full rounded-md" />
        <h3 className="text-center text-xl pt-4 pb-2">
          {metadata?.name}
        </h3>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={ModalStyles}
        className="w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3 2xl:w-1/2 bg-white mx-auto mt-6 sm:mt-12 lg:mt-24 px-6 py-8 rounded-md"
      >
        <div className="">
          <div className="grid grid-cols-12 gap-6">
            <div className="grid-item col-span-12 sm:col-span-5">
              <img src={metadata?.image} alt="nft img" className="w-full rounded-md" />
            </div>
            <div className="grid-item col-span-12 sm:col-span-7">
              <h2 className="text-3xl font-nidus_sans__reguar">
                {metadata?.name}
              </h2>
              <div className="mt-2">
                {metadata?.description}
              </div>
              <div>
                <h3 className="text-xl mt-4 font-nidus_sans__reguar">Owner</h3>
                <h4 className="text-sm sm:text-base">{data.owner_of}</h4>
              </div>
              <div>
                <h3 className="text-xl mt-4 font-nidus_sans__reguar">Property</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {
                    metadata?.attributes.length > 0 ?
                      metadata?.attributes.map((item, index) => (
                        <PropertyItem attr={item} key={index} />
                      ))
                      : (
                        <PropertyItem attr={metadata?.attributes} />
                      )
                  }
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <a href={openseaURL} target="_blank" rel="noreferrer" className="bg-blue text-white font-nidus_sans__reguar text-lg px-8 py-2 rounded-lg cursor-pointer hover:scale-105 transform duration-300">
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default NftItem;