/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC20Safe } from "../ERC20Safe";

export class ERC20Safe__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC20Safe> {
    return super.deploy(overrides || {}) as Promise<ERC20Safe>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20Safe {
    return super.attach(address) as ERC20Safe;
  }
  connect(signer: Signer): ERC20Safe__factory {
    return super.connect(signer) as ERC20Safe__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Safe {
    return new Contract(address, _abi, signerOrProvider) as ERC20Safe;
  }
}

const _abi = [
  {
    inputs: [],
    name: "ETHReserve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50607d8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063ddafda4614602d575b600080fd5b603560005481565b60405190815260200160405180910390f3fea26469706673582212201bd2c2b0563676c6dedade18977050c876a2c776a9b7f7368a6ca35d8c207a4c64736f6c634300080b0033";