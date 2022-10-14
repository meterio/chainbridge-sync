/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ERC721HandlerUpgradeableInterface extends ethers.utils.Interface {
  functions: {
    "_bridgeAddress()": FunctionFragment;
    "_burnList(address)": FunctionFragment;
    "_contractWhitelist(address)": FunctionFragment;
    "_resourceIDToTokenContractAddress(bytes32)": FunctionFragment;
    "_tokenContractAddressToResourceID(address)": FunctionFragment;
    "deposit(bytes32,address,bytes)": FunctionFragment;
    "executeProposal(bytes32,bytes)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isNative(address)": FunctionFragment;
    "removeResource(bytes32,address)": FunctionFragment;
    "setBurnable(address)": FunctionFragment;
    "setNative(address,bool)": FunctionFragment;
    "setResource(bytes32,address)": FunctionFragment;
    "withdraw(bytes)": FunctionFragment;
    "withdrawETH(bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_bridgeAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_burnList", values: [string]): string;
  encodeFunctionData(
    functionFragment: "_contractWhitelist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_resourceIDToTokenContractAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "_tokenContractAddressToResourceID",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BytesLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposal",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "isNative", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeResource",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "setBurnable", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setNative",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setResource",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "withdrawETH",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "_bridgeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_burnList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_contractWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_resourceIDToTokenContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_tokenContractAddressToResourceID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isNative", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeResource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBurnable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setNative", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setResource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETH",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export class ERC721HandlerUpgradeable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ERC721HandlerUpgradeableInterface;

  functions: {
    _bridgeAddress(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "_bridgeAddress()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    _burnList(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "_burnList(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    _contractWhitelist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "_contractWhitelist(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    _resourceIDToTokenContractAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "_resourceIDToTokenContractAddress(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    _tokenContractAddressToResourceID(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "_tokenContractAddressToResourceID(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    deposit(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "deposit(bytes32,address,bytes)"(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "executeProposal(bytes32,bytes)"(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initialize(
      bridgeAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      bridgeAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isNative(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isNative(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    removeResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeResource(bytes32,address)"(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setBurnable(
      contractAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setBurnable(address)"(
      contractAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setNative(
      nativeAddress: string,
      _isNative: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setNative(address,bool)"(
      nativeAddress: string,
      _isNative: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setResource(bytes32,address)"(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(bytes)"(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawETH(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawETH(bytes)"(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  _bridgeAddress(overrides?: CallOverrides): Promise<string>;

  "_bridgeAddress()"(overrides?: CallOverrides): Promise<string>;

  _burnList(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "_burnList(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "_contractWhitelist(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  _resourceIDToTokenContractAddress(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "_resourceIDToTokenContractAddress(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  _tokenContractAddressToResourceID(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "_tokenContractAddressToResourceID(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  deposit(
    resourceID: BytesLike,
    depositor: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "deposit(bytes32,address,bytes)"(
    resourceID: BytesLike,
    depositor: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  executeProposal(
    resourceID: BytesLike,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "executeProposal(bytes32,bytes)"(
    resourceID: BytesLike,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  initialize(
    bridgeAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    bridgeAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isNative(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "isNative(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeResource(
    resourceID: BytesLike,
    contractAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeResource(bytes32,address)"(
    resourceID: BytesLike,
    contractAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setBurnable(
    contractAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setBurnable(address)"(
    contractAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setNative(
    nativeAddress: string,
    _isNative: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setNative(address,bool)"(
    nativeAddress: string,
    _isNative: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setResource(
    resourceID: BytesLike,
    contractAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setResource(bytes32,address)"(
    resourceID: BytesLike,
    contractAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(bytes)"(
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawETH(
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawETH(bytes)"(
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    _bridgeAddress(overrides?: CallOverrides): Promise<string>;

    "_bridgeAddress()"(overrides?: CallOverrides): Promise<string>;

    _burnList(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "_burnList(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    _contractWhitelist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "_contractWhitelist(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    _resourceIDToTokenContractAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "_resourceIDToTokenContractAddress(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    _tokenContractAddressToResourceID(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "_tokenContractAddressToResourceID(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    deposit(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "deposit(bytes32,address,bytes)"(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "executeProposal(bytes32,bytes)"(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(bridgeAddress: string, overrides?: CallOverrides): Promise<void>;

    "initialize(address)"(
      bridgeAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isNative(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "isNative(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeResource(bytes32,address)"(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setBurnable(
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setBurnable(address)"(
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setNative(
      nativeAddress: string,
      _isNative: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setNative(address,bool)"(
      nativeAddress: string,
      _isNative: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setResource(bytes32,address)"(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(data: BytesLike, overrides?: CallOverrides): Promise<void>;

    "withdraw(bytes)"(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawETH(data: BytesLike, overrides?: CallOverrides): Promise<void>;

    "withdrawETH(bytes)"(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Initialized(version: null): EventFilter;
  };

  estimateGas: {
    _bridgeAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "_bridgeAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    _burnList(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "_burnList(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _contractWhitelist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "_contractWhitelist(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _resourceIDToTokenContractAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "_resourceIDToTokenContractAddress(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _tokenContractAddressToResourceID(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "_tokenContractAddressToResourceID(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "deposit(bytes32,address,bytes)"(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "executeProposal(bytes32,bytes)"(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    initialize(
      bridgeAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address)"(
      bridgeAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isNative(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isNative(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeResource(bytes32,address)"(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setBurnable(
      contractAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setBurnable(address)"(
      contractAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setNative(
      nativeAddress: string,
      _isNative: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setNative(address,bool)"(
      nativeAddress: string,
      _isNative: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setResource(bytes32,address)"(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdraw(data: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "withdraw(bytes)"(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawETH(data: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "withdrawETH(bytes)"(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _bridgeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "_bridgeAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _burnList(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "_burnList(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _contractWhitelist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "_contractWhitelist(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _resourceIDToTokenContractAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "_resourceIDToTokenContractAddress(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _tokenContractAddressToResourceID(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "_tokenContractAddressToResourceID(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "deposit(bytes32,address,bytes)"(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "executeProposal(bytes32,bytes)"(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initialize(
      bridgeAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      bridgeAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isNative(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isNative(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeResource(bytes32,address)"(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setBurnable(
      contractAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setBurnable(address)"(
      contractAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setNative(
      nativeAddress: string,
      _isNative: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setNative(address,bool)"(
      nativeAddress: string,
      _isNative: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setResource(bytes32,address)"(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(bytes)"(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawETH(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawETH(bytes)"(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
