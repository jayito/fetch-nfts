import React, { useEffect, useState } from "react";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { MORALIS_API } from "@utils/constant";
import { Link } from 'react-router-dom'
import NftItem from "./NftItem";
import Loader from "@components/Loader";
import logo from '@images/logo.png';

const Home = () => {
  const [nftList, setNftList] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [collectionAddr, setCollectionAddr] = useState('');

  useEffect(() => {
    const moralisHandler = async () => {
      await Moralis.start({
        apiKey: MORALIS_API,
      });
    } 
    moralisHandler();
  }, []);

  const getData = async () => {
    setIsLoad(true);

    const address = collectionAddr;
    const chain = EvmChain.ETHEREUM;

    try {
      const response = await Moralis.EvmApi.nft.getNFTOwners({
        address,
        chain,
        disableTotal: true,
        limit: 10
      });
      const data = response.toJSON();
      setNftList(data['result']);
    } catch (error) {
      alert('Invalid Address');
    }
    setIsLoad(false);
  }

  return (
    <div className="bg-black-medium text-white min-h-screen">
      <div className="flex justify-between items-center px-4 sm:px-8 py-6">
        <Link to="/">
          <img src={logo} alt="logo" className="h-10 sm:h-14 lg:h-16" />
        </Link>
      </div>
      <div className="container mx-auto px-4 pb-16">
        <div className="pt-6 pb-16 sm:pb-32">
          <h1 className="font-phage__rough text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center">
            Discover Digital Art, Collect and Buy Specific NFTs.
          </h1>
        </div>
        <div className="flex items-stretch sm:items-center justify-between xl:justify-start flex-col sm:flex-row">
          <div className="flex flex-col xl:flex-row justify-center xl:justify-start items-stretch xl:items-center">
            <div className="flex sm:items-center flex-col sm:flex-row">
              <span className="font-nidus_sans__reguar md:text-xl xl:text-2xl">NFT Contract Address: </span>
              <input type="text" className="text-black-medium w-full sm:w-96 rounded-md mt-2 sm:mt-0 sm:ml-4 py-2 px-2 text-sm sm:text-base" onChange={(e) => setCollectionAddr(e.target.value)} />
            </div>
            <div className="flex items-center xl:ml-12 mt-4 xl:mt-0">
              <span className="font-nidus_sans__reguar md:text-xl xl:text-2xl">Chain: </span>
              <span className="font-phage__regular md:text-xl xl:text-2xl ml-4">Ethereum</span>
            </div>
          </div>
          <div className="flex justify-end">
            <button onClick={getData} className="bg-blue font-phage__regular md:text-xl xl:text-2xl px-6 sm:px-12 py-2 ml-24 mt-4 sm:mt-0 w-40 sm:w-auto rounded-lg hover:scale-105 transform duration-300">
              Fetch
            </button>
          </div>
        </div>
        <hr className="my-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {
            nftList.map((item, index) => (
              <NftItem data={item} addr={collectionAddr} key={index} />
            ))
          }
        </div>
      </div>
      {
        isLoad && <Loader/>
      }
    </div>
  )
}

export default Home;