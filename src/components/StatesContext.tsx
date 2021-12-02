import React, { useEffect, useState } from "react";
import useEthers from "src/ethereum/useEthers";
import useListeners from "src/ethereum/useListeners";
import useSigner from "src/ethereum/useSigner";
import { ProviderProps, SignerProps } from "../ethereum/types";

const StatesContext = React.createContext({
  provider: null,
  setProvider: null,
  signer: null,
  setSigner: null,
  address: null,
});

export interface StatesProviderProps {
  children?: React.ReactNode;
}

const StatesProvider = ({ children }: StatesProviderProps): JSX.Element => {
  const [providerInstance, setProviderInstance, ethers] = useEthers();
  const [signerInstance, setSignersInstance] = useSigner(providerInstance);
  const [address, setAddress] = useState<string>("");
  const [provider, setProvider] = useState<ProviderProps>(null);
  const [signer, setSigner] = useState<SignerProps>(null);

  useListeners(providerInstance, setProvider, setSigner);

  const getAddress = async () => {
    try {
      const address = await signerInstance.getAddress();
      setAddress(address);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (providerInstance) {
      setProvider(providerInstance);
    }
    if (signerInstance) {
      setSigner(signerInstance);
      getAddress();
    }
  }, [providerInstance, signerInstance]);

  useEffect(() => {
    if (signer) {
      getAddress();
    }
  }, [signer]);

  return (
    <StatesContext.Provider
      value={{
        provider,
        signer,
        setProvider,
        setSigner,
        address,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export { StatesContext, StatesProvider };
