/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TestForwarder } from "../TestForwarder";

export class TestForwarder__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestForwarder> {
    return super.deploy(overrides || {}) as Promise<TestForwarder>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestForwarder {
    return super.attach(address) as TestForwarder;
  }
  connect(signer: Signer): TestForwarder__factory {
    return super.connect(signer) as TestForwarder__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestForwarder {
    return new Contract(address, _abi, signerOrProvider) as TestForwarder;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102cc806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806398c0fc3414610030575b600080fd5b61004361003e366004610149565b610045565b005b6000838260405160200161005a929190610256565b60405160208183030381529060405290506000836001600160a01b0316826040516100859190610283565b6000604051808303816000865af19150503d80600081146100c2576040519150601f19603f3d011682016040523d82523d6000602084013e6100c7565b606091505b50509050806101105760405162461bcd60e51b815260206004820152601160248201527014995b185e4818d85b1b0819985a5b1959607a1b604482015260640160405180910390fd5b5050505050565b634e487b7160e01b600052604160045260246000fd5b80356001600160a01b038116811461014457600080fd5b919050565b60008060006060848603121561015e57600080fd5b833567ffffffffffffffff8082111561017657600080fd5b818601915086601f83011261018a57600080fd5b81358181111561019c5761019c610117565b604051601f8201601f19908116603f011681019083821181831017156101c4576101c4610117565b816040528281528960208487010111156101dd57600080fd5b8260208601602083013760006020848301015280975050505050506102046020850161012d565b91506102126040850161012d565b90509250925092565b6000815160005b8181101561023c5760208185018101518683015201610222565b8181111561024b576000828601525b509290920192915050565b6000610262828561021b565b60609390931b6bffffffffffffffffffffffff191683525050601401919050565b600061028f828461021b565b939250505056fea2646970667358221220bbb58241b223d6eeb9b80908439b4e00d2592d3f2fc4fb858bbced5f7e95e8ea64736f6c634300080b0033";
