/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ForwarderUpgradeable } from "../ForwarderUpgradeable";

export class ForwarderUpgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ForwarderUpgradeable> {
    return super.deploy(overrides || {}) as Promise<ForwarderUpgradeable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ForwarderUpgradeable {
    return super.attach(address) as ForwarderUpgradeable;
  }
  connect(signer: Signer): ForwarderUpgradeable__factory {
    return super.connect(signer) as ForwarderUpgradeable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ForwarderUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ForwarderUpgradeable;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct ForwarderUpgradeable.ForwardRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
    ],
    name: "getNonce",
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
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct ForwarderUpgradeable.ForwardRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610c9c806100206000396000f3fe60806040526004361061003f5760003560e01c80632d0335ab1461004457806347153f821461008d5780638129fc1c146100ae578063bf5d3bdb146100c5575b600080fd5b34801561005057600080fd5b5061007a61005f3660046109d3565b6001600160a01b031660009081526035602052604090205490565b6040519081526020015b60405180910390f35b6100a061009b366004610a03565b6100f5565b604051610084929190610ad2565b3480156100ba57600080fd5b506100c3610295565b005b3480156100d157600080fd5b506100e56100e0366004610a03565b610395565b6040519015158152602001610084565b60006060610104858585610395565b6101705760405162461bcd60e51b815260206004820152603260248201527f4d696e696d616c466f727761726465723a207369676e617475726520646f6573604482015271081b9bdd081b585d18da081c995c5d595cdd60721b60648201526084015b60405180910390fd5b61017f60808601356001610b0e565b6035600061019060208901896109d3565b6001600160a01b03166001600160a01b03168152602001908152602001600020819055506000808660200160208101906101ca91906109d3565b6001600160a01b0316606088013560408901356101ea60a08b018b610b34565b6101f760208d018d6109d3565b60405160200161020993929190610b7b565b60408051601f198184030181529082905261022391610ba1565b600060405180830381858888f193505050503d8060008114610261576040519150601f19603f3d011682016040523d82523d6000602084013e610266565b606091505b50909250905061027b603f6060890135610bbd565b5a1161028957610289610bdf565b90969095509350505050565b600054610100900460ff166102b05760005460ff16156102b4565b303b155b6103175760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610167565b600054610100900460ff16158015610339576000805461ffff19166101011790555b610380604051806040016040528060098152602001682337b93bb0b93232b960b91b81525060405180604001604052806004815260200163076312e360e41b815250610514565b8015610392576000805461ff00191690555b50565b6000806104a884848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506104a292507fdd8f4b70b0f4393e889bd39128a30628a78b61816a9eb8199759e7a349657e489150610405905060208a018a6109d3565b61041560408b0160208c016109d3565b60408b013560608c013560808d013561043160a08f018f610b34565b60405161043f929190610bf5565b6040805191829003822060208301989098526001600160a01b0396871690820152949093166060850152608084019190915260a083015260c082015260e08101919091526101000160405160208183030381529060405280519060200120610549565b9061059d565b90506080850135603560006104c060208901896109d3565b6001600160a01b03166001600160a01b031681526020019081526020016000205414801561050b57506104f660208601866109d3565b6001600160a01b0316816001600160a01b0316145b95945050505050565b600054610100900460ff1661053b5760405162461bcd60e51b815260040161016790610c05565b61054582826105c1565b5050565b6000610597610556610602565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b92915050565b60008060006105ac8585610682565b915091506105b9816106f2565b509392505050565b600054610100900460ff166105e85760405162461bcd60e51b815260040161016790610c05565b815160209283012081519190920120600191909155600255565b600061067d7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61063160015490565b6002546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b905090565b6000808251604114156106b95760208301516040840151606085015160001a6106ad878285856108ad565b945094505050506106eb565b8251604014156106e357602083015160408401516106d886838361099a565b9350935050506106eb565b506000905060025b9250929050565b600081600481111561070657610706610c50565b141561070f5750565b600181600481111561072357610723610c50565b14156107715760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610167565b600281600481111561078557610785610c50565b14156107d35760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610167565b60038160048111156107e7576107e7610c50565b14156108405760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610167565b600481600481111561085457610854610c50565b14156103925760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610167565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156108e45750600090506003610991565b8460ff16601b141580156108fc57508460ff16601c14155b1561090d5750600090506004610991565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610961573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661098a57600060019250925050610991565b9150600090505b94509492505050565b6000806001600160ff1b038316816109b760ff86901c601b610b0e565b90506109c5878288856108ad565b935093505050935093915050565b6000602082840312156109e557600080fd5b81356001600160a01b03811681146109fc57600080fd5b9392505050565b600080600060408486031215610a1857600080fd5b833567ffffffffffffffff80821115610a3057600080fd5b9085019060c08288031215610a4457600080fd5b90935060208501359080821115610a5a57600080fd5b818601915086601f830112610a6e57600080fd5b813581811115610a7d57600080fd5b876020828501011115610a8f57600080fd5b6020830194508093505050509250925092565b60005b83811015610abd578181015183820152602001610aa5565b83811115610acc576000848401525b50505050565b82151581526040602082015260008251806040840152610af9816060850160208701610aa2565b601f01601f1916919091016060019392505050565b60008219821115610b2f57634e487b7160e01b600052601160045260246000fd5b500190565b6000808335601e19843603018112610b4b57600080fd5b83018035915067ffffffffffffffff821115610b6657600080fd5b6020019150368190038213156106eb57600080fd5b8284823760609190911b6bffffffffffffffffffffffff19169101908152601401919050565b60008251610bb3818460208701610aa2565b9190910192915050565b600082610bda57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052600160045260246000fd5b8183823760009101908152919050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052602160045260246000fdfea26469706673582212200bcd62f5eda935891ba1c127a12e0571fef86939fd1b70e4e8fb988bd7ac749164736f6c634300080b0033";
