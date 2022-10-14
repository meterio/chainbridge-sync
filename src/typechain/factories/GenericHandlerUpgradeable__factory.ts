/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { GenericHandlerUpgradeable } from "../GenericHandlerUpgradeable";

export class GenericHandlerUpgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<GenericHandlerUpgradeable> {
    return super.deploy(overrides || {}) as Promise<GenericHandlerUpgradeable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GenericHandlerUpgradeable {
    return super.attach(address) as GenericHandlerUpgradeable;
  }
  connect(signer: Signer): GenericHandlerUpgradeable__factory {
    return super.connect(signer) as GenericHandlerUpgradeable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GenericHandlerUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GenericHandlerUpgradeable;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "_bridgeAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_contractAddressToDepositFunctionDepositorOffset",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_contractAddressToDepositFunctionSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_contractAddressToExecuteFunctionSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_contractAddressToResourceID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_contractWhitelist",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "_resourceIDToContractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "executeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bridgeAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "removeResource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "depositFunctionSig",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "depositFunctionDepositorOffset",
        type: "uint256",
      },
      {
        internalType: "bytes4",
        name: "executeFunctionSig",
        type: "bytes4",
      },
    ],
    name: "setResource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610da6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063c4d66de811610071578063c4d66de8146101c1578063c54c2a11146101d4578063cb624463146101fd578063de319d9914610220578063e248cff214610233578063ec97d3b41461024657600080fd5b8063318c136e146100b95780637f79bea8146100ef5780638843a70a14610122578063a5c3a98514610150578063a98157511461018c578063b07e54bb146101a1575b600080fd5b6000546100d2906201000090046001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6101126100fd366004610a60565b60066020526000908152604090205460ff1681565b60405190151581526020016100e6565b610142610130366004610a60565b60046020526000908152604090205481565b6040519081526020016100e6565b61017361015e366004610a60565b60056020526000908152604090205460e01b81565b6040516001600160e01b031990911681526020016100e6565b61019f61019a366004610a82565b610266565b005b6101b46101af366004610af7565b6102e6565b6040516100e69190610b81565b61019f6101cf366004610a60565b610541565b6100d26101e2366004610bb4565b6001602052600090815260409020546001600160a01b031681565b61017361020b366004610a60565b60036020526000908152604090205460e01b81565b61019f61022e366004610be5565b61066c565b61019f610241366004610c3c565b610688565b610142610254366004610a60565b60026020526000908152604090205481565b61026e610845565b600091825260016020908152604080842080546001600160a01b03191690556001600160a01b039290921683526002815281832083905560038152818320805463ffffffff19908116909155600482528284208490556005825282842080549091169055600690529020805460ff19169055565b5050565b60606102f0610845565b6000606061030084860186610bb4565b9150846020856103108583610c88565b9261031d93929190610cae565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052508b8152600160209081526040808320546001600160a01b031680845260049092529091205494955093925050811590506103eb57828101602001516001600160a01b038916606082901c146103e95760405162461bcd60e51b815260206004820152601f60248201527f696e636f7272656374206465706f7369746f7220696e2074686520646174610060448201526064015b60405180910390fd5b505b6001600160a01b03821660009081526006602052604090205460ff166104235760405162461bcd60e51b81526004016103e090610cd8565b6001600160a01b03821660009081526003602052604090205460e01b6001600160e01b03198116156105335760008185604051602001610464929190610d23565b6040516020818303038152906040529050600080856001600160a01b0316836040516104909190610d54565b6000604051808303816000865af19150503d80600081146104cd576040519150601f19603f3d011682016040523d82523d6000602084013e6104d2565b606091505b5091509150816105245760405162461bcd60e51b815260206004820152601e60248201527f63616c6c20746f20636f6e747261637441646472657373206661696c6564000060448201526064016103e0565b97506105399650505050505050565b50505050505b949350505050565b600054610100900460ff16158080156105615750600054600160ff909116105b8061057b5750303b15801561057b575060005460ff166001145b6105de5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016103e0565b6000805460ff191660011790558015610601576000805461ff0019166101001790555b6000805462010000600160b01b031916620100006001600160a01b0385160217905580156102e2576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b610674610845565b61068185858585856108a7565b5050505050565b610690610845565b600060606106a083850185610bb4565b9150836020846106b08583610c88565b926106bd93929190610cae565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250898152600160209081526040808320546001600160a01b03168084526006909252909120549495509360ff16925061073a9150505760405162461bcd60e51b81526004016103e090610cd8565b6001600160a01b03811660009081526005602052604090205460e01b6001600160e01b031981161561083c576000818460405160200161077b929190610d23565b60405160208183030381529060405290506000836001600160a01b0316826040516107a69190610d54565b6000604051808303816000865af19150503d80600081146107e3576040519150601f19603f3d011682016040523d82523d6000602084013e6107e8565b606091505b50509050806108395760405162461bcd60e51b815260206004820152601e60248201527f63616c6c20746f20636f6e747261637441646472657373206661696c6564000060448201526064016103e0565b50505b50505050505050565b6000546201000090046001600160a01b031633146108a55760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206d7573742062652062726964676520636f6e7472616374000060448201526064016103e0565b565b6000858152600160205260409020546001600160a01b03161561092b5760405162461bcd60e51b815260206004820152603660248201527f5f7265736f757263654944546f436f6e7472616374416464726573735b7265736044820152756f7572636549445d20213d206164647265737328302960501b60648201526084016103e0565b600085815260016020908152604080832080546001600160a01b0319166001600160a01b03891690811790915583526002909152902054156109d55760405162461bcd60e51b815260206004820152603b60248201527f5f636f6e747261637441646472657373546f5265736f7572636549445b636f6e60448201527f7472616374416464726573735d20213d2062797465733332283029000000000060648201526084016103e0565b6001600160a01b039390931660009081526002602090815260408083209690965560038152858220805463ffffffff1990811660e096871c1790915560048252868320939093556005815285822080549093169490931c9390931790556006905220805460ff19166001179055565b80356001600160a01b0381168114610a5b57600080fd5b919050565b600060208284031215610a7257600080fd5b610a7b82610a44565b9392505050565b60008060408385031215610a9557600080fd5b82359150610aa560208401610a44565b90509250929050565b60008083601f840112610ac057600080fd5b50813567ffffffffffffffff811115610ad857600080fd5b602083019150836020828501011115610af057600080fd5b9250929050565b60008060008060608587031215610b0d57600080fd5b84359350610b1d60208601610a44565b9250604085013567ffffffffffffffff811115610b3957600080fd5b610b4587828801610aae565b95989497509550505050565b60005b83811015610b6c578181015183820152602001610b54565b83811115610b7b576000848401525b50505050565b6020815260008251806020840152610ba0816040850160208701610b51565b601f01601f19169190910160400192915050565b600060208284031215610bc657600080fd5b5035919050565b80356001600160e01b031981168114610a5b57600080fd5b600080600080600060a08688031215610bfd57600080fd5b85359450610c0d60208701610a44565b9350610c1b60408701610bcd565b925060608601359150610c3060808701610bcd565b90509295509295909350565b600080600060408486031215610c5157600080fd5b83359250602084013567ffffffffffffffff811115610c6f57600080fd5b610c7b86828701610aae565b9497909650939450505050565b60008219821115610ca957634e487b7160e01b600052601160045260246000fd5b500190565b60008085851115610cbe57600080fd5b83861115610ccb57600080fd5b5050820193919092039150565b6020808252602b908201527f70726f766964656420636f6e747261637441646472657373206973206e6f742060408201526a1dda1a5d195b1a5cdd195960aa1b606082015260800190565b6001600160e01b0319831681528151600090610d46816004850160208701610b51565b919091016004019392505050565b60008251610d66818460208701610b51565b919091019291505056fea26469706673582212206f5c8238d518fccdec8db0d9e00fdd064e723d69c6cde090ddffc924ab77b7d364736f6c634300080b0033";
