/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC1155HandlerUpgradeable } from "../ERC1155HandlerUpgradeable";

export class ERC1155HandlerUpgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC1155HandlerUpgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC1155HandlerUpgradeable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155HandlerUpgradeable {
    return super.attach(address) as ERC1155HandlerUpgradeable;
  }
  connect(signer: Signer): ERC1155HandlerUpgradeable__factory {
    return super.connect(signer) as ERC1155HandlerUpgradeable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155HandlerUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155HandlerUpgradeable;
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
    name: "_burnList",
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
    name: "_resourceIDToTokenContractAddress",
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
    name: "_tokenContractAddressToResourceID",
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
    stateMutability: "payable",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isNative",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
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
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "setBurnable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nativeAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isNative",
        type: "bool",
      },
    ],
    name: "setNative",
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
    name: "setResource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "withdrawETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061148a806100206000396000f3fe6080604052600436106101095760003560e01c8063ab5c7bf111610095578063bc197c8111610064578063bc197c8114610327578063c4d66de81461036c578063c8ba6c871461038c578063e248cff2146103c7578063f23a6e61146103e757600080fd5b8063ab5c7bf114610299578063b07e54bb146102b7578063b2b8b5dd146102d7578063b8fa37361461030757600080fd5b8063318c136e116100dc578063318c136e146101d35780636a70d081146101f9578063789d7711146102295780637f79bea814610249578063a98157511461027957600080fd5b806301ffc9a71461010e57806307b7ed99146101435780630968f264146101655780630a6d55d814610185575b600080fd5b34801561011a57600080fd5b5061012e610129366004610b9e565b610413565b60405190151581526020015b60405180910390f35b34801561014f57600080fd5b5061016361015e366004610be4565b61044a565b005b34801561017157600080fd5b50610163610180366004610cc6565b61045b565b34801561019157600080fd5b506101bb6101a0366004610d03565b6001602052600090815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200161013a565b3480156101df57600080fd5b506000546101bb906201000090046001600160a01b031681565b34801561020557600080fd5b5061012e610214366004610be4565b60046020526000908152604090205460ff1681565b34801561023557600080fd5b50610163610244366004610d1c565b6104a1565b34801561025557600080fd5b5061012e610264366004610be4565b60036020526000908152604090205460ff1681565b34801561028557600080fd5b50610163610294366004610d5a565b6104d4565b3480156102a557600080fd5b506101636102b4366004610cc6565b50565b6102ca6102c5366004610dc8565b610527565b60405161013a9190610e80565b3480156102e357600080fd5b5061012e6102f2366004610be4565b60056020526000908152604090205460ff1681565b34801561031357600080fd5b50610163610322366004610d5a565b610663565b34801561033357600080fd5b50610353610342366004610f1d565b63bc197c8160e01b95945050505050565b6040516001600160e01b0319909116815260200161013a565b34801561037857600080fd5b50610163610387366004610be4565b6106bb565b34801561039857600080fd5b506103b96103a7366004610be4565b60026020526000908152604090205481565b60405190815260200161013a565b3480156103d357600080fd5b506101636103e2366004610fcb565b610787565b3480156103f357600080fd5b50610353610402366004611017565b63f23a6e6160e01b95945050505050565b60006001600160e01b03198216630271189760e51b148061044457506301ffc9a760e01b6001600160e01b03198316145b92915050565b610452610888565b6102b4816108ea565b610463610888565b60008060608060608580602001905181019061047f91906110db565b939850919650945092509050610499853086868686610982565b505050505050565b6104a9610888565b6001600160a01b03919091166000908152600560205260409020805460ff1916911515919091179055565b6104dc610888565b600091825260016020908152604080842080546001600160a01b03191690556001600160a01b0392909216835260028152818320839055600390529020805460ff19169055565b5050565b6060610531610888565b34156105755760405162461bcd60e51b815260206004820152600e60248201526d06d73672e76616c756520213d20360941b60448201526064015b60405180910390fd5b606080610584848601866111c7565b60008981526001602052604090205491935091506001600160a01b0316806105f95760405162461bcd60e51b815260206004820152602260248201527f70726f7669646564207265736f75726365494420646f6573206e6f74206578696044820152611cdd60f21b606482015260840161056c565b6001600160a01b03811660009081526004602052604090205460ff161561062b57610626818885856109f3565b610648565b610648818830868660405180602001604052806000815250610982565b50506040805160008152602081019091529695505050505050565b61066b610888565b600082815260016020818152604080842080546001600160a01b0319166001600160a01b0387169081179091558452600282528084208690556003909152909120805460ff191690911790555050565b600054610100900460ff16158080156106db5750600054600160ff909116105b806106f55750303b1580156106f5575060005460ff166001145b6107115760405162461bcd60e51b815260040161056c9061122b565b6000805460ff191660011790558015610734576000805461ff0019166101001790555b61073d82610a53565b8015610523576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a15050565b61078f610888565b60608080806107a085870187611279565b60208083015160008d8152600183526040808220546001600160a01b031680835260039094529020549599509397509195509350909160ff166108365760405162461bcd60e51b815260206004820152602860248201527f70726f766964656420746f6b656e41646472657373206973206e6f74207768696044820152671d195b1a5cdd195960c21b606482015260840161056c565b6001600160a01b03811660009081526004602052604090205460ff161561086c57610867818360601c888887610b30565b61087d565b61087d81308460601c898988610982565b505050505050505050565b6000546201000090046001600160a01b031633146108e85760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206d7573742062652062726964676520636f6e74726163740000604482015260640161056c565b565b6001600160a01b03811660009081526003602052604090205460ff1661095e5760405162461bcd60e51b8152602060048201526024808201527f70726f766964656420636f6e7472616374206973206e6f742077686974656c696044820152631cdd195960e21b606482015260840161056c565b6001600160a01b03166000908152600460205260409020805460ff19166001179055565b604051631759616b60e11b815286906001600160a01b03821690632eb2c2d6906109b89089908990899089908990600401611361565b600060405180830381600087803b1580156109d257600080fd5b505af11580156109e6573d6000803e3d6000fd5b5050505050505050505050565b604051631ac8311560e21b815284906001600160a01b03821690636b20c45490610a25908790879087906004016113bf565b600060405180830381600087803b158015610a3f57600080fd5b505af115801561087d573d6000803e3d6000fd5b600054610100900460ff1615808015610a735750600054600160ff909116105b80610a8d5750303b158015610a8d575060005460ff166001145b610aa95760405162461bcd60e51b815260040161056c9061122b565b6000805460ff191660011790558015610acc576000805461ff0019166101001790555b6000805462010000600160b01b031916620100006001600160a01b038516021790558015610523576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200161077b565b604051630fbfeffd60e11b815285906001600160a01b03821690631f7fdffa90610b649088908890889088906004016113ff565b600060405180830381600087803b158015610b7e57600080fd5b505af1158015610b92573d6000803e3d6000fd5b50505050505050505050565b600060208284031215610bb057600080fd5b81356001600160e01b031981168114610bc857600080fd5b9392505050565b6001600160a01b03811681146102b457600080fd5b600060208284031215610bf657600080fd5b8135610bc881610bcf565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610c4057610c40610c01565b604052919050565b600067ffffffffffffffff821115610c6257610c62610c01565b50601f01601f191660200190565b600082601f830112610c8157600080fd5b8135610c94610c8f82610c48565b610c17565b818152846020838601011115610ca957600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215610cd857600080fd5b813567ffffffffffffffff811115610cef57600080fd5b610cfb84828501610c70565b949350505050565b600060208284031215610d1557600080fd5b5035919050565b60008060408385031215610d2f57600080fd5b8235610d3a81610bcf565b915060208301358015158114610d4f57600080fd5b809150509250929050565b60008060408385031215610d6d57600080fd5b823591506020830135610d4f81610bcf565b60008083601f840112610d9157600080fd5b50813567ffffffffffffffff811115610da957600080fd5b602083019150836020828501011115610dc157600080fd5b9250929050565b60008060008060608587031215610dde57600080fd5b843593506020850135610df081610bcf565b9250604085013567ffffffffffffffff811115610e0c57600080fd5b610e1887828801610d7f565b95989497509550505050565b60005b83811015610e3f578181015183820152602001610e27565b83811115610e4e576000848401525b50505050565b60008151808452610e6c816020860160208601610e24565b601f01601f19169290920160200192915050565b602081526000610bc86020830184610e54565b600067ffffffffffffffff821115610ead57610ead610c01565b5060051b60200190565b600082601f830112610ec857600080fd5b81356020610ed8610c8f83610e93565b82815260059290921b84018101918181019086841115610ef757600080fd5b8286015b84811015610f125780358352918301918301610efb565b509695505050505050565b600080600080600060a08688031215610f3557600080fd5b8535610f4081610bcf565b94506020860135610f5081610bcf565b9350604086013567ffffffffffffffff80821115610f6d57600080fd5b610f7989838a01610eb7565b94506060880135915080821115610f8f57600080fd5b610f9b89838a01610eb7565b93506080880135915080821115610fb157600080fd5b50610fbe88828901610c70565b9150509295509295909350565b600080600060408486031215610fe057600080fd5b83359250602084013567ffffffffffffffff811115610ffe57600080fd5b61100a86828701610d7f565b9497909650939450505050565b600080600080600060a0868803121561102f57600080fd5b853561103a81610bcf565b9450602086013561104a81610bcf565b93506040860135925060608601359150608086013567ffffffffffffffff81111561107457600080fd5b610fbe88828901610c70565b600082601f83011261109157600080fd5b815160206110a1610c8f83610e93565b82815260059290921b840181019181810190868411156110c057600080fd5b8286015b84811015610f1257805183529183019183016110c4565b600080600080600060a086880312156110f357600080fd5b85516110fe81610bcf565b602087015190955061110f81610bcf565b604087015190945067ffffffffffffffff8082111561112d57600080fd5b61113989838a01611080565b9450606088015191508082111561114f57600080fd5b61115b89838a01611080565b9350608088015191508082111561117157600080fd5b508601601f8101881361118357600080fd5b8051611191610c8f82610c48565b8181528960208385010111156111a657600080fd5b6111b7826020830160208601610e24565b8093505050509295509295909350565b600080604083850312156111da57600080fd5b823567ffffffffffffffff808211156111f257600080fd5b6111fe86838701610eb7565b9350602085013591508082111561121457600080fd5b5061122185828601610eb7565b9150509250929050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6000806000806080858703121561128f57600080fd5b843567ffffffffffffffff808211156112a757600080fd5b6112b388838901610eb7565b955060208701359150808211156112c957600080fd5b6112d588838901610eb7565b945060408701359150808211156112eb57600080fd5b6112f788838901610c70565b9350606087013591508082111561130d57600080fd5b5061131a87828801610c70565b91505092959194509250565b600081518084526020808501945080840160005b838110156113565781518752958201959082019060010161133a565b509495945050505050565b6001600160a01b0386811682528516602082015260a06040820181905260009061138d90830186611326565b828103606084015261139f8186611326565b905082810360808401526113b38185610e54565b98975050505050505050565b6001600160a01b03841681526060602082018190526000906113e390830185611326565b82810360408401526113f58185611326565b9695505050505050565b6001600160a01b038516815260806020820181905260009061142390830186611326565b82810360408401526114358186611326565b905082810360608401526114498185610e54565b97965050505050505056fea26469706673582212205edf9f014a0649ea4f0dab3b851c9acabe85c46a685fb9c7fec4c1ebbaf561f564736f6c634300080b0033";
