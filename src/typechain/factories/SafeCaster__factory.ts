/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SafeCaster } from "../SafeCaster";

export class SafeCaster__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SafeCaster> {
    return super.deploy(overrides || {}) as Promise<SafeCaster>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SafeCaster {
    return super.attach(address) as SafeCaster;
  }
  connect(signer: Signer): SafeCaster__factory {
    return super.connect(signer) as SafeCaster__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeCaster {
    return new Contract(address, _abi, signerOrProvider) as SafeCaster;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "input",
        type: "uint256",
      },
    ],
    name: "toUint200",
    outputs: [
      {
        internalType: "uint200",
        name: "",
        type: "uint200",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610111806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063720ad67414602d575b600080fd5b603c603836600460c3565b6058565b6040516001600160c81b03909116815260200160405180910390f35b60006061826067565b92915050565b6000600160c81b821060bf5760405162461bcd60e51b815260206004820152601e60248201527f76616c756520646f6573206e6f742066697420696e2032303020626974730000604482015260640160405180910390fd5b5090565b60006020828403121560d457600080fd5b503591905056fea26469706673582212207cd5bfbe0390485a51f6975c28d1d9811bc532990ad37d34644d8c2bec170fff64736f6c634300080b0033";
